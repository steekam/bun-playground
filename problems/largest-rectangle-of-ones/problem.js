function largestHistogram(heights) {
  const stack = [];
  let best = 0;

  for (let index = 0; index <= heights.length; index += 1) {
    const height = index === heights.length ? 0 : heights[index];
    while (stack.length > 0 && heights[stack.at(-1)] > height) {
      const popped = stack.pop();
      const width = stack.length === 0 ? index : index - stack.at(-1) - 1;
      best = Math.max(best, heights[popped] * width);
    }
    stack.push(index);
  }

  return best;
}

function validate(matrix) {
  if (matrix.length === 0) return 0;

  const heights = Array(matrix[0].length).fill(0);
  let best = 0;
  for (const row of matrix) {
    for (let column = 0; column < row.length; column += 1) {
      heights[column] = row[column] === 1 ? heights[column] + 1 : 0;
    }
    best = Math.max(best, largestHistogram(heights));
  }

  return best;
}

export { validate };
