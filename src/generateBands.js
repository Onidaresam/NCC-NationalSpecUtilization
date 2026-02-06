// Usage:
//    node generateBands.js ilorin.csv
//    node generateBands.js airport.csv

const fs = require("fs");
const { parse } = require("csv-parse");

const SUBBAND_WIDTH = 30;

// ------------------------------
// CLI INPUT
// ------------------------------
const filePath = process.argv[2];

if (!filePath) {
  console.error("❌ No CSV file provided.");
  console.error("Usage: node generateBands.js <filename.csv>");
  process.exit(1);
}

// ------------------------------
// Utility helpers
// ------------------------------
function toMHzNumber(str) {
  if (!str) return null;

  let s = str.toString().trim().toLowerCase();

  // Auto-repair: remove stray characters
  s = s.replace(/[^0-9.\-a-z]/g, "");

  if (s.includes("ghz")) return parseFloat(s) * 1000;
  if (s.includes("mhz")) return parseFloat(s);

  const n = parseFloat(s);
  return isNaN(n) ? null : n;
}

function formatMHz(n) {
  return `${n.toFixed(2)}MHz`;
}

function parseCsv(filePath) {
  return new Promise((resolve, reject) => {
    const rows = [];
    fs.createReadStream(filePath)
      .pipe(parse({ relax_column_count: true }))
      .on("data", (row) => rows.push(row))
      .on("end", () => resolve(rows))
      .on("error", reject);
  });
}

// ------------------------------
// Auto-repair helpers
// ------------------------------
function repairDuty(d) {
  if (d == null || d === "" || isNaN(parseFloat(d))) {
    return 0;
  }
  return parseFloat(d);
}

function dedupeAndSort(points) {
  const map = new Map();
  for (const p of points) {
    if (!map.has(p.f)) map.set(p.f, p);
  }
  return [...map.values()].sort((a, b) => a.f - b.f);
}

function interpolateMissing(points) {
  if (points.length < 2) return points;

  const repaired = [points[0]];

  for (let i = 1; i < points.length; i++) {
    const prev = repaired[repaired.length - 1];
    const curr = points[i];

    if (curr.f <= prev.f) continue;

    repaired.push(curr);
  }

  return repaired;
}

// ------------------------------
// Detect first numeric row
// ------------------------------
function detectBands(rows) {
  // Find the first row that contains a PURE numeric frequency
  let dataStart = 1;

  for (let r = 0; r < rows.length; r++) {
    const row = rows[r];

    const hasPureFrequency = row.some(cell => {
      const s = cell?.toString().trim().toLowerCase() || "";
      // Accept only pure frequency values, not ranges
      if (s.includes("-")) return false;
      const f = toMHzNumber(s);
      return f !== null && f >= 1 && f <= 6000;
    });

    if (hasPureFrequency) {
      dataStart = r;
      break;
    }
  }

  const band3 = [];
  const band4 = [];

  const header = rows[dataStart];

  for (let col = 0; col < header.length; col++) {
    for (let r = dataStart; r < rows.length; r++) {
      const f = toMHzNumber(rows[r][col]);
      if (f == null) continue;

      if (f >= 300 && f <= 3000) {
        band3.push(col);
        break;
      }
      if (f >= 3000 && f <= 6000) {
        band4.push(col);
        break;
      }
    }
  }

  return { band3, band4, dataStart };
}


// ------------------------------
// Detect duty-cycle column
// ------------------------------
function detectDutyColumn(rows, freqCol, dataStart) {
  const candidates = [];

  for (let col = 0; col < rows[dataStart].length; col++) {
    if (col === freqCol) continue;

    let valid = 0;
    let total = 0;

    for (let r = dataStart; r < rows.length; r++) {
      const v = rows[r][col];
      if (v == null || v === "") continue;

      total++;
      const num = parseFloat(v);

      if (!isNaN(num) && num >= 0 && num <= 100) valid++;
    }

    if (total > 0 && valid / total >= 0.7) {
      candidates.push(col);
    }
  }

  if (candidates.length === 0) return null;

  return candidates.sort((a, b) => Math.abs(a - freqCol) - Math.abs(b - freqCol))[0];
}

// ------------------------------
// Extract points
// ------------------------------
function extractPoints(rows, freqCol, dutyCol, dataStart) {
  const points = [];

  for (let i = dataStart; i < rows.length; i++) {
    const f = toMHzNumber(rows[i][freqCol]);
    const d = repairDuty(rows[i][dutyCol]);

    if (f != null) {
      points.push({ f, d });
    }
  }

  let cleaned = dedupeAndSort(points);
  cleaned = interpolateMissing(cleaned);

  return cleaned;
}

// ------------------------------
// Build segments
// ------------------------------
function buildSegments(points) {
  const segments = [];
  for (let i = 0; i < points.length - 1; i++) {
    segments.push({
      from: points[i].f,
      to: points[i + 1].f,
      duty: points[i + 1].d
    });
  }
  return segments;
}

// ------------------------------
// Split into subbands
// ------------------------------
function splitIntoSubbands(segments, minF, maxF) {
  const subbands = [];

  for (let start = minF; start < maxF; start += SUBBAND_WIDTH) {
    const end = start + SUBBAND_WIDTH;
    const sb = { from: start, to: end, segments: [] };

    for (const seg of segments) {
      const overlapFrom = Math.max(seg.from, start);
      const overlapTo = Math.min(seg.to, end);

      if (overlapFrom < overlapTo) {
        sb.segments.push({
          from: overlapFrom,
          to: overlapTo,
          duty: seg.duty
        });
      }
    }

    subbands.push(sb);
  }

  return subbands;
}

// ------------------------------
// Summaries
// ------------------------------
function summarize(subbands) {
  return subbands.map(sb => {
    const utilized = [];
    const notutilized = [];
    const duties = [];

    for (const seg of sb.segments) {
      const label = `${formatMHz(seg.from)}-${formatMHz(seg.to)}(${seg.duty.toFixed(2)}%)`;
      duties.push(seg.duty);
      if (seg.duty >= 1) utilized.push(label);
      else notutilized.push(label);
    }

    const mean = duties.length ? duties.reduce((a, b) => a + b, 0) / duties.length : 0;

    return {
      range: `${formatMHz(sb.from)}-${formatMHz(sb.to)}`,
      result: {
        utilization: `${mean.toFixed(2)}%`,
        frequencies: { utilized, notutilized }
      }
    };
  });
}

// ------------------------------
// MAIN
// ------------------------------
async function generateBands(filePath) {
  const rows = await parseCsv(filePath);
  const { band3, band4, dataStart } = detectBands(rows);

  const output = [];

  // BAND 3
  if (band3.length > 0) {
    const freqCol = band3[0];
    const dutyCol = detectDutyColumn(rows, freqCol, dataStart);

    const points = extractPoints(rows, freqCol, dutyCol, dataStart);
    const segs = buildSegments(points);
    const subs = splitIntoSubbands(segs, 300, 3000);

    output.push({
      range: "300MHz-3GHz",
      subbands: summarize(subs)
    });
  }

  // BAND 4
  if (band4.length > 0) {
    const freqCol = band4[0];
    const dutyCol = detectDutyColumn(rows, freqCol, dataStart);

    const points = extractPoints(rows, freqCol, dutyCol, dataStart);
    const segs = buildSegments(points);
    const subs = splitIntoSubbands(segs, 3000, 6000);

    output.push({
      range: "3GHz-6GHz",
      subbands: summarize(subs)
    });
  }

  const jsLiteral = JSON.stringify(output, null, 2)
    .replace(/"([^"]+)":/g, "$1:");

  console.log(jsLiteral);
}

generateBands(filePath).catch(console.error);
