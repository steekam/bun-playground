function validate(input) {
  const { pattern, text } = input;
  if (pattern.length !== text.length) return false;

  const forward = new Map();
  const reverse = new Map();
  for (let index = 0; index < pattern.length; index += 1) {
    const from = pattern[index];
    const to = text[index];
    if ((forward.has(from) && forward.get(from) !== to)
      || (reverse.has(to) && reverse.get(to) !== from)) return false;
    forward.set(from, to);
    reverse.set(to, from);
  }
  return true;
}

export { validate };
