function findRegions(grid) {
  const seen = grid.map((row) => row.map(() => false));
  const regions = [];

  grid.forEach((row, rowIndex) => {
    row.forEach((cell, columnIndex) => {
      if (cell !== 0 || seen[rowIndex][columnIndex]) return;
      const region = [];
      const stack = [[rowIndex, columnIndex]];
      seen[rowIndex][columnIndex] = true;
      while (stack.length > 0) {
        const [r, c] = stack.pop();
        region.push([r, c]);
        for (const [nr, nc] of [[r + 1, c], [r - 1, c], [r, c + 1], [r, c - 1]]) {
          if (grid[nr]?.[nc] !== 0 || seen[nr][nc]) continue;
          seen[nr][nc] = true;
          stack.push([nr, nc]);
        }
      }
      regions.push(region);
    });
  });
  return regions;
}

function largestRemaining(region, removed) {
  const index = new Map(region.map(([r, c], position) => [`${r},${c}`, position]));
  const seen = new Set(removed);
  let largest = 0;

  for (let start = 0; start < region.length; start += 1) {
    if (seen.has(start)) continue;
    let size = 0;
    const stack = [start];
    seen.add(start);
    while (stack.length > 0) {
      const [r, c] = region[stack.pop()];
      size += 1;
      for (const key of [`${r + 1},${c}`, `${r - 1},${c}`, `${r},${c + 1}`, `${r},${c - 1}`]) {
        const next = index.get(key);
        if (next === undefined || seen.has(next)) continue;
        seen.add(next);
        stack.push(next);
      }
    }
    largest = Math.max(largest, size);
  }
  return largest;
}

function canFix(region, repairs, k, from, removed) {
  if (repairs === 0) return largestRemaining(region, removed) <= k;
  for (let index = from; index <= region.length - repairs; index += 1) {
    removed.add(index);
    const fixed = canFix(region, repairs - 1, k, index + 1, removed);
    removed.delete(index);
    if (fixed) return true;
  }
  return false;
}

function validate([grid, k]) {
  let total = 0;
  for (const region of findRegions(grid)) {
    if (region.length <= k) continue;
    let repairs = 1;
    while (!canFix(region, repairs, k, 0, new Set())) repairs += 1;
    total += repairs;
  }
  return total;
}

export { validate };
