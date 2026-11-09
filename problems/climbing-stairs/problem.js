function validate(n) {
  let previous = 0;
  let current = 1;

  for (let step = 0; step < n; step += 1) {
    [previous, current] = [current, previous + current];
  }

  return current;
}

export { validate };
