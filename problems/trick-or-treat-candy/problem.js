function validate(houses) {
  let skipped = 0;
  let taken = 0;
  for (const candy of houses) {
    [skipped, taken] = [Math.max(skipped, taken), skipped + candy];
  }
  return Math.max(skipped, taken);
}

export { validate };
