const fs = require("fs");
const csvParse = require("csv-parse/sync");

// 0-based column indices
const COL = {
  // Band 1
  B1_FREQ: 0, // A
  B1_DUTY: 1, // B
  B1_RANGE: 2, // C
  B1_UTIL: 3, // D

  // Band 2
  B2_FREQ: 5, // F
  B2_DUTY: 6, // G
  B2_FROM: 7, // H
  B2_TO: 8, // I
  B2_UTIL: 9, // J

  // Band 3
  B3_FREQ: 11, // L
  B3_DUTY: 12, // M
  B3_FROM: 13, // N
  B3_TO: 14, // O
  B3_UTIL: 15, // P

  // Band 4
  B4_FREQ: 18, // S
  B4_DUTY: 19, // T
  B4_FROM: 20, // U
  B4_TO: 21, // V
  B4_UTIL: 22, // W
};

const UTIL_THRESHOLD = 1; // ≥1% = utilized

const csvText = fs.readFileSync("airport.csv", "utf8");
const rows = csvParse.parse(csvText, { relaxColumnCount: true });

// Helpers
const isNumber = (v) => v !== null && v !== undefined && v !== "" && !isNaN(parseFloat(String(v).replace("%", "")));

const cleanFreq = (v) => {
  if (!v) return "";
  return String(v).replace(/\s+/g, ""); // remove spaces, keep units
};

const ensurePercentString = (v) => {
  if (!v) return "";
  const s = String(v).trim();
  return s.endsWith("%") ? s : s + "%";
};

const dutyToPercentString = (v) => {
  if (!isNumber(v)) return "";
  const num = parseFloat(String(v).replace("%", ""));
  return num.toFixed(2).replace(/\.00$/, "") + "%";
};

// ---------------- Band 1: 100kHz–30MHz (no subbands) ----------------

function buildBand1() {
  const freqDutyRows = [];
  let bandRange = null;
  let bandUtil = null;

  for (const row of rows) {
    const f = row[COL.B1_FREQ];
    const d = row[COL.B1_DUTY];
    const r = row[COL.B1_RANGE];
    const u = row[COL.B1_UTIL];

    if (r && !bandRange) {
      bandRange = String(r).replace(/\s+/g, "");
    }
    if (u && !bandUtil) {
      bandUtil = ensurePercentString(u);
    }

    if (f && isNumber(d)) {
      freqDutyRows.push({
        freq: cleanFreq(f),
        duty: parseFloat(String(d).replace("%", "")),
      });
    }
  }

  if (!bandRange) bandRange = "100kHz-30MHz";
  if (!bandUtil) bandUtil = "0%";

  const utilized = [];
  const notutilized = [];

  for (let i = 0; i < freqDutyRows.length - 1; i++) {
    const f1 = freqDutyRows[i].freq;
    const f2 = freqDutyRows[i + 1].freq;
    const duty = freqDutyRows[i].duty;
    const dutyStr = dutyToPercentString(duty);
    const entry = `${f1}-${f2}(${dutyStr})`;

    if (duty >= UTIL_THRESHOLD) {
      utilized.push(entry);
    } else {
      notutilized.push(entry);
    }
  }

  return {
    range: bandRange,
    result: {
      utilization: bandUtil,
      frequencies: {
        utilized,
        notutilized,
      },
    },
  };
}

// ------------- Generic builder for bands 2, 3, 4 (with subbands) -------------

function buildBandWithSubbands(labelRange, cfg) {
  const subbands = [];

  for (const row of rows) {
    const from = row[cfg.FROM];
    const to = row[cfg.TO];
    const duty = row[cfg.DUTY];
    const util = row[cfg.UTIL];

    if (!from || !to || !isNumber(duty) || !util) continue;

    const fromClean = cleanFreq(from);
    const toClean = cleanFreq(to);
    const dutyNum = parseFloat(String(duty).replace("%", ""));
    const dutyStr = dutyToPercentString(dutyNum);
    const utilStr = ensurePercentString(util);

    const range = `${fromClean}-${toClean}`;
    const freqEntry = `${fromClean}-${toClean}(${dutyStr})`;

    const utilized = dutyNum >= UTIL_THRESHOLD ? [freqEntry] : [];
    const notutilized = dutyNum >= UTIL_THRESHOLD ? [] : [freqEntry];

    subbands.push({
      range,
      result: {
        utilization: utilStr,
        frequencies: {
          utilized,
          notutilized,
        },
      },
    });
  }

  return {
    range: labelRange,
    subbands,
  };
}

// ---------------- Build all bands ----------------

const band1 = buildBand1();
const band2 = buildBandWithSubbands("30MHz-300MHz", {
  FROM: COL.B2_FROM,
  TO: COL.B2_TO,
  DUTY: COL.B2_DUTY,
  UTIL: COL.B2_UTIL,
});
const band3 = buildBandWithSubbands("300MHz-3GHz", {
  FROM: COL.B3_FROM,
  TO: COL.B3_TO,
  DUTY: COL.B3_DUTY,
  UTIL: COL.B3_UTIL,
});
const band4 = buildBandWithSubbands("3GHz-6GHz", {
  FROM: COL.B4_FROM,
  TO: COL.B4_TO,
  DUTY: COL.B4_DUTY,
  UTIL: COL.B4_UTIL,
});

const AirportData = {
  region: "Airport",
  bands: [band1, band2, band3, band4],
};

const jsOutput = "module.exports = " + JSON.stringify(AirportData, null, 2) + ";\n";
fs.writeFileSync("AirportData.js", jsOutput);

console.log("Done! AirportData.js written.");
