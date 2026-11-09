function validate(numbers) {
  const sorted = [...numbers].sort((a, b) => a - b);
  const targetIndex = new Map(sorted.map((value, index) => [value, index]));
  const visited = new Set();
  let swaps = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (visited.has(index) || targetIndex.get(numbers[index]) === index) continue;

    let cycleLength = 0;
    let current = index;
    while (!visited.has(current)) {
      visited.add(current);
      current = targetIndex.get(numbers[current]);
      cycleLength += 1;
    }

    swaps += cycleLength - 1;
  }

  return swaps;
}

export { validate };
