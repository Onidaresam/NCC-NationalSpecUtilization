const generateBands = (startFrequency, endFrequency, numBands) => {
  const frequencyRange = endFrequency - startFrequency;
  const bandWidth = frequencyRange / numBands;

  const bands = [];
  for (let i = 0; i < numBands; i++) {
    const startRange = startFrequency + i * bandWidth;
    const endRange = startFrequency + (i + 1) * bandWidth;

    const band = {
      range: `${startRange.toFixed(2)}-${endRange.toFixed(2)}MHz`,
    };

    bands.push(band);
  }

  return bands;
};

// Usage
const startFrequency = 3000;
const endFrequency = 6000;
const numBands = 100;

const bands = generateBands(startFrequency, endFrequency, numBands);
console.log(bands);
