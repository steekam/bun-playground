function validate(input) {
  const { width, height, start, velocity, target } = input;
  let position = [...start];
  let direction = [...velocity];
  const seen = new Set();

  for (let step = 0; ; step += 1) {
    if (position[0] === target[0] && position[1] === target[1]) return step;
    const state = `${position}|${direction}`;
    if (seen.has(state)) return -1;
    seen.add(state);

    for (let axis = 0; axis < 2; axis += 1) {
      position[axis] += direction[axis];
      const limit = axis === 0 ? width - 1 : height - 1;
      if (position[axis] < 0 || position[axis] > limit) {
        direction[axis] *= -1;
        position[axis] += direction[axis] * 2;
      }
    }
  }
}

export { validate };
