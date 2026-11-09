function validate(n) {
  if (n === 0) return 0;
  let total = 0;
  for (let value = 1; value <= n; value += 1) total += Math.floor(Math.log2(value)) + 1;
  return total / n;
}

export { validate };
