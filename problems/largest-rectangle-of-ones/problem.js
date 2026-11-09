function validate(grid) {
  const heights = new Array(grid[0]?.length ?? 0).fill(0);
  let best = { area: 0, height: 0, width: 0 };

  for (const row of grid) {
    row.forEach((cell, column) => {
      heights[column] = cell === 1 ? heights[column] + 1 : 0;
    });

    for (let left = 0; left < heights.length; left += 1) {
      let height = Infinity;
      for (let right = left; right < heights.length; right += 1) {
        height = Math.min(height, heights[right]);
        const area = height * (right - left + 1);
        if (area > best.area || (area === best.area && height > best.height)) {
          best = { area, height, width: right - left + 1 };
        }
      }
    }
  }
  return `${best.height}x${best.width}`;
}

export { validate };
