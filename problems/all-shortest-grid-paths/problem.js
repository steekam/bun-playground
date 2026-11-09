const moves = [
  ["right", 0, 1],
  ["down", 1, 0],
  ["left", 0, -1],
  ["up", -1, 0],
];

function find(grid, value) {
  for (let row = 0; row < grid.length; row += 1) {
    const column = grid[row].indexOf(value);
    if (column !== -1) return [row, column];
  }
  return null;
}

function validate(grid) {
  const start = find(grid, 1);
  const end = find(grid, 2);
  if (!start || !end) return [];

  const distances = grid.map((row) => row.map(() => -1));
  distances[end[0]][end[1]] = 0;
  const queue = [end];
  for (let head = 0; head < queue.length; head += 1) {
    const [row, column] = queue[head];
    for (const [, rowOffset, columnOffset] of moves) {
      const nextRow = row + rowOffset;
      const nextColumn = column + columnOffset;
      if (grid[nextRow]?.[nextColumn] === undefined || grid[nextRow][nextColumn] === 3) continue;
      if (distances[nextRow][nextColumn] !== -1) continue;
      distances[nextRow][nextColumn] = distances[row][column] + 1;
      queue.push([nextRow, nextColumn]);
    }
  }

  const paths = [];
  const walk = ([row, column], path) => {
    if (distances[row][column] === 0) {
      paths.push([...path]);
      return;
    }
    for (const [name, rowOffset, columnOffset] of moves) {
      const nextRow = row + rowOffset;
      const nextColumn = column + columnOffset;
      if (distances[nextRow]?.[nextColumn] !== distances[row][column] - 1) continue;
      path.push(name);
      walk([nextRow, nextColumn], path);
      path.pop();
    }
  };
  if (distances[start[0]][start[1]] !== -1) walk(start, []);
  return paths;
}

export { validate };
