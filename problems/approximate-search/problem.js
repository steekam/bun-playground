function validate(input) {
  const { text, pattern, maxEdits } = input;
  if (pattern.length === 0) return true;
  if (pattern.length > 31 || maxEdits < 0) return false;

  // Keep the compact bit-mask representation useful for exact searches.
  if (maxEdits === 0) {
    const masks = new Map();
    for (let index = 0; index < pattern.length; index += 1) {
      masks.set(pattern[index], (masks.get(pattern[index]) ?? 0) | (1 << index));
    }

    let state = ~1;
    const matchBit = 1 << (pattern.length - 1);
    for (const character of text) {
      state = ((state << 1) | 1) & (masks.get(character) ?? 0);
      if ((state & matchBit) !== 0) return true;
    }
    return false;
  }

  // For fuzzy matching, this rolling row makes insertions, deletions, and
  // substitutions explicit and avoids the short-string false positives that
  // a naive approximate bit-mask implementation can produce.
  let previous = Array.from({ length: pattern.length + 1 }, (_, index) => index);

  for (const character of text) {
    const current = [0];
    for (let index = 1; index <= pattern.length; index += 1) {
      current[index] = Math.min(
        previous[index] + 1,
        current[index - 1] + 1,
        previous[index - 1] + (pattern[index - 1] === character ? 0 : 1),
      );
    }

    if (current[pattern.length] <= maxEdits) return true;
    previous = current;
  }

  return false;
}

export { validate };
