const fs = require("fs");
const csvParse = require("csv-parse/sync");

// -------------------------------
// CONFIG
// -------------------------------

const toMHz = (hz) => (hz / 1_000_000).toFixed(2);
const UTIL_THRESHOLD = 1; // ≥1% = utilized
const FIRST_BAND_NAME = "100khz-30mhz";

// -------------------------------
// LOAD CSV
// -------------------------------

const csvText = fs.readFileSync("airport.csv", "utf8");
const rows = csvParse.parse(csvText, { relaxColumnCount: true });

// -------------------------------
// PARSE BANDS
// -------------------------------

function parseBand(startIndex) {
  const bandRow = rows[startIndex];
  const dutyRow = rows[startIndex + 1];

  if (!bandRow || !dutyRow) return null;

  const rawBandName = bandRow[0]?.trim().toLowerCase();
  if (!rawBandName) return null;

  // Frequencies are on the same row as the band name, starting at col 3
  let freqs = bandRow
    .slice(2)
    .filter((v) => v !== "" && v !== null && v !== undefined && !isNaN(v))
    .map(Number);

  // Duty cycles are on the next row, starting at col 3
  let duties = dutyRow
    .slice(2)
    .filter((v) => v !== "" && v !== null && v !== undefined && !isNaN(v))
    .map(Number);

  // Align lengths
  const minLen = Math.min(freqs.length, duties.length);
  freqs = freqs.slice(0, minLen);
  duties = duties.slice(0, minLen);

  const subbands = [];

  for (let i = 0; i < freqs.length - 1; i++) {
    const f1 = freqs[i];
    const f2 = freqs[i + 1];
    const duty = duties[i];

    const utilized = duty >= UTIL_THRESHOLD;

    const range =
      rawBandName === FIRST_BAND_NAME
        ? `${f1} - ${f2}` // keep Hz for 100kHz–30MHz
        : `${toMHz(f1)} MHz - ${toMHz(f2)} MHz`;

    subbands.push({
      range,
      result: {
        utilization: duty,
        frequencies: {
          utilized: utilized ? [range] : [],
          notutilized: utilized ? [] : [range],
        },
      },
    });
  }

  const prettyName = rawBandName
    .replace(/khz/gi, "kHz")
    .replace(/mhz/gi, "MHz")
    .replace(/ghz/gi, "GHz");

  return {
    range: prettyName,
    subbands,
  };
}

// -------------------------------
// FIND ALL BANDS
// -------------------------------

const bands = [];

for (let i = 0; i < rows.length; i++) {
  const cell = rows[i][0]?.toLowerCase();
  if (
    cell === "100khz-30mhz" ||
    cell === "30mhz-300mhz" ||
    cell === "300mhz-3ghz" ||
    cell === "3ghz-6ghz"
  ) {
    const band = parseBand(i);
    if (band) bands.push(band);
  }
}

// -------------------------------
// OUTPUT JS FILE
// -------------------------------

const jsOutput =
  "module.exports = " + JSON.stringify({ region: "Airport", bands }, null, 2) + ";\n";

fs.writeFileSync("airport_output.js", jsOutput);

console.log("Done! Output written to airport_output.js");
