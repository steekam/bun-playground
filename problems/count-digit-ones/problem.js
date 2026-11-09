function validate(n) {
  let count = 0;
  for (let factor = 1; factor <= n; factor *= 10) {
    const lower = n % factor;
    const current = Math.floor(n / factor) % 10;
    const higher = Math.floor(n / (factor * 10));
    if (current === 0) count += higher * factor;
    else if (current === 1) count += higher * factor + lower + 1;
    else count += (higher + 1) * factor;
  }
  return count;
}

export { validate };
