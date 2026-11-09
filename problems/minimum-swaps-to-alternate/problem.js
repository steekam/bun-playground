function swapsFor(text, firstLetter) {
  let total = 0;
  let target = firstLetter === "a" ? 0 : 1;
  [...text].forEach((character, index) => {
    if (character !== "a") return;
    total += Math.abs(index - target);
    target += 2;
  });
  return total;
}

function validate(text) {
  const as = [...text].filter((character) => character === "a").length;
  const bs = text.length - as;
  if (Math.abs(as - bs) > 1) return -1;
  if (as > bs) return swapsFor(text, "a");
  if (bs > as) return swapsFor(text, "b");
  return Math.min(swapsFor(text, "a"), swapsFor(text, "b"));
}

export { validate };
