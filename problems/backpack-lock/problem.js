function validate([start, target]) {
  let moves = 0;
  for (let index = 0; index < start.length; index += 1) {
    const distance = Math.abs(Number(start[index]) - Number(target[index]));
    moves += Math.min(distance, 10 - distance);
  }
  return moves;
}

export { validate };
