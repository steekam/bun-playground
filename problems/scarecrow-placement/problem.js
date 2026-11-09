function validate(input) {
  const { length, radius } = input;
  let coveredUntil = -1;
  let count = 0;
  let position = 0;

  while (position < length) {
    const placement = Math.min(length - 1, position + radius);
    coveredUntil = placement + radius;
    count += 1;
    position = coveredUntil + 1;
  }

  return count;
}

export { validate };
