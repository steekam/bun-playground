function bestDistance(text, start, pattern) {
  let previous = Array.from({ length: pattern.length + 1 }, (_, index) => index);
  let best = previous[pattern.length];

  for (let offset = start; offset < text.length; offset += 1) {
    const current = [previous[0] + 1];
    for (let index = 1; index <= pattern.length; index += 1) {
      const substitution = previous[index - 1] + (pattern[index - 1] === text[offset] ? 0 : 1);
      current[index] = Math.min(substitution, previous[index] + 1, current[index - 1] + 1);
    }
    best = Math.min(best, current[pattern.length]);
    previous = current;
  }
  return best;
}

function validate([text, pattern, maxErrors]) {
  const matches = [];
  for (let position = 0; position < text.length; position += 1) {
    const errors = bestDistance(text, position, pattern);
    if (errors <= maxErrors) matches.push({ position, errors });
  }
  return matches;
}

export { validate };
