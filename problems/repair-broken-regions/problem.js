function validate(grid) {
  const state = grid.map((row) => [...row]);
  const sizes = [];
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let id = 2;

  function fill(row, column) {
    const queue = [[row, column]];
    state[row][column] = id;
    let size = 0;
    for (let head = 0; head < queue.length; head += 1) {
      const [currentRow, currentColumn] = queue[head];
      size += 1;
      for (const [rowOffset, columnOffset] of directions) {
        const nextRow = currentRow + rowOffset;
        const nextColumn = currentColumn + columnOffset;
        if (state[nextRow]?.[nextColumn] !== 1) continue;
        state[nextRow][nextColumn] = id;
        queue.push([nextRow, nextColumn]);
      }
    }
    sizes[id] = size;
    id += 1;
  }

  for (let row = 0; row < state.length; row += 1) {
    for (let column = 0; column < state[row].length; column += 1) {
      if (state[row][column] === 1) fill(row, column);
    }
  }

  let best = 0;
  for (let row = 0; row < state.length; row += 1) {
    for (let column = 0; column < state[row].length; column += 1) {
      if (state[row][column] !== 0) {
        best = Math.max(best, sizes[state[row][column]] ?? 0);
        continue;
      }
      const adjacent = new Set();
      for (const [rowOffset, columnOffset] of directions) {
        const region = state[row + rowOffset]?.[column + columnOffset];
        if (region >= 2) adjacent.add(region);
      }
      best = Math.max(best, 1 + [...adjacent].reduce((sum, region) => sum + sizes[region], 0));
    }
  }
  return best;
}

export { validate };
