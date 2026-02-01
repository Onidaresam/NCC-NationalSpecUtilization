export function computeBandStats(bandObj) {
  if (!bandObj?.subbands) {
    return null;
  }

  const subbands = bandObj.subbands;

  // Convert utilization to numbers
  const utils = subbands.map(sb => parseFloat(sb.result.utilization || "0"));

  // Average utilization
  const avgUtilization =
    utils.reduce((a, b) => a + b, 0) / utils.length;

  // Categorize subbands
  const categories = {
    unused: 0,
    low: 0,
    moderate: 0,
    high: 0,
  };

  subbands.forEach(sb => {
    const util = parseFloat(sb.result.utilization || "0");
    const sizeMHz = computeSubbandSize(sb.range);

    if (util === 0) categories.unused += sizeMHz;
    else if (util <= 30) categories.low += sizeMHz;
    else if (util <= 80) categories.moderate += sizeMHz;
    else categories.high += sizeMHz;
  });

  return {
    avgUtilization,
    categorySizesMHz: categories,
    subbands,
  };
}

// Helper: compute size of a subband in MHz
function computeSubbandSize(range) {
  const [start, end] = range
    .replace(/[^\d.-]/g, " ")
    .trim()
    .split(/\s+/)
    .map(Number);

  return end - start;
}
