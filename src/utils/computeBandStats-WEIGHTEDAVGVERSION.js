export function computeBandStats(bandObj) {
  if (!bandObj?.subbands) {
    return null;
  }

  const subbands = bandObj.subbands;

  let totalWeightedUtil = 0;
  let totalWidth = 0;

  const categories = {
    unused: 0,
    low: 0,
    moderate: 0,
    high: 0,
  };

  subbands.forEach(sb => {
    const util = parseFloat(sb.result.utilization || "0");
    const width = computeSubbandSize(sb.range);

    // Weighted sum
    totalWeightedUtil += util * width;
    totalWidth += width;

    // Categorization
    if (util === 0) categories.unused += width;
    else if (util <= 30) categories.low += width;
    else if (util <= 80) categories.moderate += width;
    else categories.high += width;
  });

  const avgUtilization = totalWidth > 0
    ? totalWeightedUtil / totalWidth
    : 0;

  return {
    avgUtilization,
    categorySizesMHz: categories,
    subbands,
  };
}

function computeSubbandSize(range) {
  const [start, end] = range
    .replace(/[^\d.-]/g, " ")
    .trim()
    .split(/\s+/)
    .map(Number);

  return end - start;
}
