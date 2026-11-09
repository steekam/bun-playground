function validate(input) {
  const { layout, queries } = input;
  const prefix = [0];
  const previousWall = Array(layout.length).fill(-1);
  const nextWall = Array(layout.length).fill(-1);
  let lastWall = -1;

  for (let index = 0; index < layout.length; index += 1) {
    if (layout[index] === "|") lastWall = index;
    previousWall[index] = lastWall;
    prefix[index + 1] = prefix[index] + (layout[index] === "*" ? 1 : 0);
  }

  lastWall = -1;
  for (let index = layout.length - 1; index >= 0; index -= 1) {
    if (layout[index] === "|") lastWall = index;
    nextWall[index] = lastWall;
  }

  return queries.map(([left, right]) => {
    const start = nextWall[left];
    const end = previousWall[right];
    return start !== -1 && end !== -1 && start < end ? prefix[end] - prefix[start + 1] : 0;
  });
}

export { validate };
