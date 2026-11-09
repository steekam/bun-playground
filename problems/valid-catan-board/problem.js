function validate(input) {
  const { tiles, edges } = input;
  return edges.every(([first, second]) => {
    const a = tiles[first];
    const b = tiles[second];
    const badNumbers = (a.number === 6 && b.number === 8) || (a.number === 8 && b.number === 6);
    return a.terrain !== b.terrain && !badNumbers;
  });
}

export { validate };
