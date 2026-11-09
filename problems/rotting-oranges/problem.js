function validate(grid) {
  if (grid.length === 0) return 0;

  const state = grid.map((row) => [...row]);
  const queue = [];
  let fresh = 0;

  for (let row = 0; row < state.length; row += 1) {
    for (let column = 0; column < state[row].length; column += 1) {
      if (state[row][column] === 2) queue.push([row, column, 0]);
      if (state[row][column] === 1) fresh += 1;
    }
  }

  let minutes = 0;
  let head = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (head < queue.length) {
    const [row, column, minute] = queue[head++];
    minutes = Math.max(minutes, minute);

    for (const [rowOffset, columnOffset] of directions) {
      const nextRow = row + rowOffset;
      const nextColumn = column + columnOffset;
      if (state[nextRow]?.[nextColumn] !== 1) continue;

      state[nextRow][nextColumn] = 2;
      fresh -= 1;
      queue.push([nextRow, nextColumn, minute + 1]);
    }
  }

  return fresh === 0 ? minutes : -1;
}

export { validate };
