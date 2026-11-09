function validate(costumes) {
  const visited = new Array(costumes.length).fill(false);
  let cycles = 0;

  for (let start = 0; start < costumes.length; start += 1) {
    if (visited[start]) continue;
    cycles += 1;
    for (let person = start; !visited[person]; person = costumes[person]) {
      visited[person] = true;
    }
  }

  return costumes.length - cycles;
}

export { validate };
