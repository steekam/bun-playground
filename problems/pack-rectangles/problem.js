function validate([n, m, a, b]) {
  const grid = (width, height) => Math.floor(n / width) * Math.floor(m / height);
  return Math.max(grid(a, b), grid(b, a));
}

export { validate };
