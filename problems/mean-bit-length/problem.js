function validate(n) {
  let total = 0;
  for (let length = 1; ; length += 1) {
    const low = length === 1 ? 0 : 2 ** (length - 1);
    if (low > n - 1) break;
    const high = Math.min(2 ** length - 1, n - 1);
    total += (high - low + 1) * length;
  }
  return Math.round((total / n) * 100) / 100;
}

export { validate };
