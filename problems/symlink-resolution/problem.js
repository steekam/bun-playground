function validate(input) {
  const { links, start } = input;
  const visited = new Set();
  let current = start;

  while (links[current] !== undefined) {
    if (visited.has(current)) return "CYCLE";
    visited.add(current);
    current = links[current];
  }

  return current;
}

export { validate };
