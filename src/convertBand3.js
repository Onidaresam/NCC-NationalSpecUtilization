// npm install csv-parse
const fs = require("fs");
const { parse } = require("csv-parse");

const BAND3_MIN = 300;
const BAND3_MAX = 3000;
const SUBBAND_WIDTH = 30;

function toMHzNumber(str) {
  if (!str) return null;
  return parseFloat(str.replace(/[^0-9.]/g, ""));
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

function extractBand3Points(rows) {
  const points = [];
  for (const row of rows) {
    const freqStr = row[11]; // column L (0-based index 11)
    const dutyStr = row[12]; // column M (0-based index 12)
    const f = toMHzNumber(freqStr);
    const d = dutyStr !== undefined && dutyStr !== "" ? parseFloat(dutyStr) : null;
    if (f != null && d != null && f >= BAND3_MIN && f <= BAND3_MAX) {
      points.push({ f, d });
    }
  }
  points.sort((a, b) => a.f - b.f);
  return points;
}

function buildSegments(points) {
  const segments = [];
  for (let i = 0; i < points.length - 1; i++) {
    const a = points[i];
    const b = points[i + 1];
    segments.push({
      from: a.f,
      to: b.f,
      duty: b.d // rule A: use next point's duty
    });
  }
  return segments;
}

function splitSegmentsIntoSubbands(segments, bandMin, bandMax) {
  const subbands = [];
  for (let start = bandMin; start < bandMax; start += SUBBAND_WIDTH) {
    const end = start + SUBBAND_WIDTH;
    subbands.push({
      from: start,
      to: end,
      segments: []
    });
  }

  for (const seg of segments) {
    for (const sb of subbands) {
      const sbFrom = sb.from;
      const sbTo = sb.to;
      const overlapFrom = Math.max(seg.from, sbFrom);
      const overlapTo = Math.min(seg.to, sbTo);
      if (overlapFrom < overlapTo) {
        sb.segments.push({
          from: overlapFrom,
          to: overlapTo,
          duty: seg.duty
        });
      }
    }
  }

  return subbands;
}

function classifyAndSummarizeSubbands(subbands) {
  return subbands.map((sb) => {
    const utilized = [];
    const notutilized = [];
    const duties = [];

    for (const seg of sb.segments) {
      const label = `${formatMHz(seg.from)}-${formatMHz(seg.to)}(${seg.duty.toFixed(2)}%)`;
      duties.push(seg.duty);
      if (seg.duty >= 1) {
        utilized.push(label);
      } else {
        notutilized.push(label);
      }
    }

    let utilization = "0.00%";
    if (duties.length > 0) {
      const mean = duties.reduce((a, b) => a + b, 0) / duties.length;
      utilization = `${mean.toFixed(2)}%`;
    }

    return {
      range: `${formatMHz(sb.from)}-${formatMHz(sb.to)}`,
      result: {
        utilization,
        frequencies: {
          utilized,
          notutilized
        }
      }
    };
  });
}

async function buildBand3Object() {
  const rows = await parseCsv("Lokoja.csv");
  const points = extractBand3Points(rows);
  const segments = buildSegments(points);
  const subbands = splitSegmentsIntoSubbands(segments, BAND3_MIN, BAND3_MAX);
  const summarized = classifyAndSummarizeSubbands(subbands);

  const band3 = {
    range: "300.00MHz-3000.00MHz",
    subbands: summarized
  };

  // Convert JS object to JS literal string (unquoted keys)
  const jsLiteral = JSON.stringify(band3, null, 2)
    .replace(/"([^"]+)":/g, "$1:"); // remove quotes from keys

  console.log(jsLiteral);
}

buildBand3Object().catch(console.error);
