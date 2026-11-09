function validate(grid) {
  const state = grid.map((row) => [...row]);
  let largest = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let row = 0; row < state.length; row += 1) {
    for (let column = 0; column < state[row].length; column += 1) {
      if (state[row][column] !== 1) continue;

      let size = 0;
      const queue = [[row, column]];
      state[row][column] = 0;

      for (let head = 0; head < queue.length; head += 1) {
        const [currentRow, currentColumn] = queue[head];
        size += 1;

        for (const [rowOffset, columnOffset] of directions) {
          const nextRow = currentRow + rowOffset;
          const nextColumn = currentColumn + columnOffset;
          if (state[nextRow]?.[nextColumn] !== 1) continue;

          state[nextRow][nextColumn] = 0;
          queue.push([nextRow, nextColumn]);
        }
      }

      largest = Math.max(largest, size);
    }
  }

  return largest;
}

export { validate };
