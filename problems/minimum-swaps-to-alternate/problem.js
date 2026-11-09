function swapsFor(pattern, expected) {
  const positions = [];
  for (let index = 0; index < pattern.length; index += 1) {
    if (pattern[index] === "1") positions.push(index);
  }
  const targets = [];
  for (let index = 0; index < pattern.length; index += 1) {
    if (expected[index] === "1") targets.push(index);
  }
  return positions.reduce((sum, position, index) => sum + Math.abs(position - targets[index]), 0);
}

function validate(pattern) {
  const ones = [...pattern].filter((value) => value === "1").length;
  const zeroes = pattern.length - ones;
  if (Math.abs(ones - zeroes) > 1) return -1;

  const options = [];
  if (zeroes >= ones) options.push(swapsFor(pattern, [...pattern].map((_, i) => i % 2 ? "1" : "0")));
  if (ones >= zeroes) options.push(swapsFor(pattern, [...pattern].map((_, i) => i % 2 ? "0" : "1")));
  return Math.min(...options);
}

export { validate };
