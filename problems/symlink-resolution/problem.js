function validate([fileSystem, path]) {
  const seen = new Set();
  let current = path;

  while (typeof fileSystem[current] === "string") {
    if (seen.has(current)) return null;
    seen.add(current);
    current = fileSystem[current];
  }
  return current;
}

export { validate };
