function validate(input) {
  const { grid, start, target } = input;
  const key = ([row, column]) => `${row},${column}`;
  const distances = new Map([[key(start), 0]]);
  const queue = [start];
  const parents = new Map();
  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  for (let head = 0; head < queue.length; head += 1) {
    const current = queue[head];
    for (const [rowOffset, columnOffset] of directions) {
      const next = [current[0] + rowOffset, current[1] + columnOffset];
      if (grid[next[0]]?.[next[1]] !== 0) continue;
      const nextKey = key(next);
      const distance = distances.get(key(current)) + 1;
      if (!distances.has(nextKey)) {
        distances.set(nextKey, distance);
        parents.set(nextKey, [current]);
        queue.push(next);
      } else if (distances.get(nextKey) === distance) {
        parents.get(nextKey).push(current);
      }
    }
  }

  const targetKey = key(target);
  if (!distances.has(targetKey)) return [];
  const paths = [];
  function build(node, path) {
    if (key(node) === key(start)) {
      paths.push([start, ...path.reverse()]);
      return;
    }
    for (const parent of parents.get(key(node)) ?? []) build(parent, [...path, node]);
  }
  build(target, []);
  return paths.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
}

export { validate };
