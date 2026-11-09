function validate(sentence) {
  let best = "";
  for (const word of sentence.match(/[A-Za-z]+/g) ?? []) {
    const letters = word.toLowerCase();
    const sorted = [...letters].every((letter, index) => index === 0 || letters[index - 1] <= letter);
    if (word.length > 1 && sorted && word.length > best.length) best = word;
  }
  return best;
}

export { validate };
