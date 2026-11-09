function validate(grid) {
  const queue = [];
  const distances = grid.map((row) => row.map(() => -1));
  let houses = 0;

  for (let row = 0; row < grid.length; row += 1) {
    for (let column = 0; column < grid[row].length; column += 1) {
      if (grid[row][column] === 2) {
        distances[row][column] = 0;
        queue.push([row, column]);
      }
      if (grid[row][column] === 1) houses += 1;
    }
  }

  let covered = 0;
  let farthest = 0;
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let head = 0; head < queue.length; head += 1) {
    const [row, column] = queue[head];
    for (const [rowOffset, columnOffset] of directions) {
      const nextRow = row + rowOffset;
      const nextColumn = column + columnOffset;
      if (grid[nextRow]?.[nextColumn] === undefined || distances[nextRow][nextColumn] !== -1) continue;

      distances[nextRow][nextColumn] = distances[row][column] + 1;
      queue.push([nextRow, nextColumn]);
      if (grid[nextRow][nextColumn] === 1) {
        covered += 1;
        farthest = Math.max(farthest, distances[nextRow][nextColumn]);
      }
    }
  }

  return covered === houses ? farthest : -1;
}

export { validate };
