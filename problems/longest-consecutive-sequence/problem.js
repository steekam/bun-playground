function validate(numbers) {
  const values = new Set(numbers);
  let best = 0;

  for (const number of values) {
    if (values.has(number - 1)) continue;
    let length = 1;
    while (values.has(number + length)) length += 1;
    best = Math.max(best, length);
  }

  return best;
}

export { validate };
