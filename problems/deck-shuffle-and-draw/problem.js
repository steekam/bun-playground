function validate(input) {
  const cards = [...input.cards];
  let seed = input.seed >>> 0;
  function random() {
    seed = (1664525 * seed + 1013904223) >>> 0;
    return seed / 2 ** 32;
  }
  for (let index = cards.length - 1; index > 0; index -= 1) {
    const other = Math.floor(random() * (index + 1));
    [cards[index], cards[other]] = [cards[other], cards[index]];
  }
  return cards.slice(0, input.draws);
}

export { validate };
