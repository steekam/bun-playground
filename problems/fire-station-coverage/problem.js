function validate(grid) {
  const distances = grid.map((row) => row.map(() => -1));
  const queue = [];

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell === 1) {
        distances[rowIndex][columnIndex] = 0;
        queue.push([rowIndex, columnIndex]);
      }
    });
  });

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  for (let head = 0; head < queue.length; head += 1) {
    const [row, column] = queue[head];
    for (const [rowOffset, columnOffset] of directions) {
      const nextRow = row + rowOffset;
      const nextColumn = column + columnOffset;
      if (distances[nextRow]?.[nextColumn] !== -1) continue;
      distances[nextRow][nextColumn] = distances[row][column] + 1;
      queue.push([nextRow, nextColumn]);
    }
  }
  return distances;
}

export { validate };
