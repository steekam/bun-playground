const code = "UUDDLRLRBA";

function decode(window) {
  const moveByCharacter = new Map();
  const characterByMove = new Map();

  for (let index = 0; index < code.length; index += 1) {
    const character = window[index];
    const move = code[index];
    if ((moveByCharacter.get(character) ?? move) !== move) return null;
    if ((characterByMove.get(move) ?? character) !== character) return null;
    moveByCharacter.set(character, move);
    characterByMove.set(move, character);
  }
  return Object.fromEntries(moveByCharacter);
}

function validate(text) {
  for (let start = 0; start + code.length <= text.length; start += 1) {
    const mapping = decode(text.slice(start, start + code.length));
    if (mapping) return mapping;
  }
  return null;
}

export { validate };
