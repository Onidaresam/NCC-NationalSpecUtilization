// src/utils/spectrumCalculations.js

import BandsData from "../Data/Bands/data";

// Parse a range string to start/end in MHz
// Handles: "100KHZ-30MHz", "30.00MHz - 60.00MHz", "300.00-330.00MHz", etc.
function parseRangeToMHz(rangeStr) {
  if (!rangeStr) return { startMHz: 0, endMHz: 0 };

  const cleaned = rangeStr.replace(/\s/g, "").toUpperCase();

  // Split on "-" and remove trailing units
  const parts = cleaned.split("-");
  if (parts.length < 2) return { startMHz: 0, endMHz: 0 };

  const parsePart = (p) => {
    const numMatch = p.match(/[\d.]+/);
    if (!numMatch) return 0;
    const value = parseFloat(numMatch[0]);
    if (p.includes("KHZ")) return value / 1000;
    if (p.includes("GHZ")) return value * 1000;
    // Default MHz
    return value;
  };

  const startMHz = parsePart(parts[0]);
  const endMHz = parsePart(parts[1]);

  return { startMHz, endMHz };
}

// Categorise a utilization value into Unused / Low / Moderate / High
function categorizeUtilization(util) {
  if (util === 0) return "unused";
  if (util > 0 && util <= 30) return "low";
  if (util > 30 && util <= 80) return "moderate";
  return "high";
}

// Map a band range to one of the four major groups
function mapBandToGroup(rangeStr) {
  const r = rangeStr.replace(/\s/g, "").toUpperCase();
  if (r.includes("100KHZ-30MHZ")) return "band1";
  if (r.includes("30MHZ-300MHZ")) return "band2";
  if (r.includes("300MHZ-3GHZ")) return "band3";
  if (r.includes("3GHZ-6GHZ")) return "band4";
  return null;
}

// Core walker: process a single location object
export function computeLocationStats(locationObj) {
  const allUtils = [];
  const bandUtils = {
    band1: [],
    band2: [],
    band3: [],
    band4: [],
  };

  const categorySizesMHz = {
    unused: 0,
    low: 0,
    moderate: 0,
    high: 0,
  };

  if (!locationObj || !Array.isArray(locationObj.region)) {
    return {
      avgUtilization: 0,
      categorySizesMHz,
      bandAverages: { band1: 0, band2: 0, band3: 0, band4: 0 },
    };
  }

  locationObj.region.forEach((reg) => {
    if (!reg.bands) return;

    reg.bands.forEach((band) => {
      const bandGroup = mapBandToGroup(band.range || "");
      const { startMHz, endMHz } = parseRangeToMHz(band.range || "");
      const bandWidth = Math.max(endMHz - startMHz, 0);

      // Case 1: band has direct result
      if (band.result && band.result.utilization != null) {
        const util = parseFloat(band.result.utilization || "0") || 0;
        allUtils.push(util);
        if (bandGroup) bandUtils[bandGroup].push(util);

        const cat = categorizeUtilization(util);
        categorySizesMHz[cat] += bandWidth;
      }

      // Case 2: band has subbands
      if (Array.isArray(band.subbands)) {
        band.subbands.forEach((sub) => {
          if (!sub.result || sub.result.utilization == null) return;

          const util = parseFloat(sub.result.utilization || "0") || 0;
          allUtils.push(util);
          if (bandGroup) bandUtils[bandGroup].push(util);

          const { startMHz: s, endMHz: e } = parseRangeToMHz(sub.range || "");
          const width = Math.max(e - s, 0);
          const cat = categorizeUtilization(util);
          categorySizesMHz[cat] += width;
        });
      }
    });
  });

  const avgUtilization =
    allUtils.length > 0
      ? allUtils.reduce((a, b) => a + b, 0) / allUtils.length
      : 0;

  const bandAverages = {};
  ["band1", "band2", "band3", "band4"].forEach((key) => {
    const arr = bandUtils[key];
    bandAverages[key] =
      arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  });

  return {
    avgUtilization,
    categorySizesMHz,
    bandAverages,
  };
}

// National stats across all locations
export function computeNationalStats() {
  const allUtils = [];
  const bandUtils = {
    band1: [],
    band2: [],
    band3: [],
    band4: [],
  };

  const categorySizesMHz = {
    unused: 0,
    low: 0,
    moderate: 0,
    high: 0,
  };

  BandsData.forEach((loc) => {
    const stats = computeLocationStats(loc);

    // Collect all utils for national average
    // We can't get the raw list from stats, so recompute via bandUtils
    // Instead, we recompute by walking again but simpler: reuse stats.avgUtilization
    // BUT you said national average = average of ALL utilization values,
    // not average of location averages, so we need the raw values.
    // To avoid duplicating logic, we walk again here:

    if (!loc.region) return;

    loc.region.forEach((reg) => {
      if (!reg.bands) return;

      reg.bands.forEach((band) => {
        const bandGroup = mapBandToGroup(band.range || "");
        const { startMHz, endMHz } = parseRangeToMHz(band.range || "");
        const bandWidth = Math.max(endMHz - startMHz, 0);

        if (band.result && band.result.utilization != null) {
          const util = parseFloat(band.result.utilization || "0") || 0;
          allUtils.push(util);
          if (bandGroup) bandUtils[bandGroup].push(util);

          const cat = categorizeUtilization(util);
          categorySizesMHz[cat] += bandWidth;
        }

        if (Array.isArray(band.subbands)) {
          band.subbands.forEach((sub) => {
            if (!sub.result || sub.result.utilization == null) return;

            const util = parseFloat(sub.result.utilization || "0") || 0;
            allUtils.push(util);
            if (bandGroup) bandUtils[bandGroup].push(util);

            const { startMHz: s, endMHz: e } = parseRangeToMHz(sub.range || "");
            const width = Math.max(e - s, 0);
            const cat = categorizeUtilization(util);
            categorySizesMHz[cat] += width;
          });
        }
      });
    });
  });

  const avgUtilization =
    allUtils.length > 0
      ? allUtils.reduce((a, b) => a + b, 0) / allUtils.length
      : 0;

  const bandAverages = {};
  ["band1", "band2", "band3", "band4"].forEach((key) => {
    const arr = bandUtils[key];
    bandAverages[key] =
      arr.length > 0 ? arr.reduce((a, b) => a + b, 0) / arr.length : 0;
  });

  return {
    avgUtilization,
    categorySizesMHz,
    bandAverages,
  };
}
