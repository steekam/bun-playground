function validate([doors, passes]) {
  const open = new Array(doors + 1).fill(false);
  for (let step = 1; step <= passes; step += 1) {
    for (let door = step; door <= doors; door += step) open[door] = !open[door];
  }
  return open.filter(Boolean).length;
}

export { validate };
