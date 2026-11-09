function validate(input) {
  const { next, start } = input;
  if (start < 0 || start >= next.length) return -1;

  const step = (node) => node === -1 ? -1 : next[node];
  let slow = start;
  let fast = start;

  do {
    slow = step(slow);
    fast = step(step(fast));
  } while (slow !== -1 && fast !== -1 && slow !== fast);

  if (slow === -1 || fast === -1) return -1;

  let entry = start;
  while (entry !== slow) {
    entry = step(entry);
    slow = step(slow);
  }

  return entry;
}

export { validate };
