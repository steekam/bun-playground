function validate(input) {
  const buckets = Array.from({ length: 16 }, () => []);
  function index(key) {
    let hash = 0;
    for (const character of key) hash = (hash * 31 + character.charCodeAt(0)) % buckets.length;
    return hash;
  }
  function find(key) {
    return buckets[index(key)].find((entry) => entry[0] === key);
  }

  const output = [];
  for (const operation of input.operations) {
    if (operation[0] === "set") {
      const entry = find(operation[1]);
      if (entry) entry[1] = operation[2];
      else buckets[index(operation[1])].push([operation[1], operation[2]]);
    } else if (operation[0] === "get") {
      output.push(find(operation[1])?.[1] ?? null);
    } else if (operation[0] === "delete") {
      const bucket = buckets[index(operation[1])];
      const position = bucket.findIndex((entry) => entry[0] === operation[1]);
      output.push(position !== -1);
      if (position !== -1) bucket.splice(position, 1);
    }
  }
  return output;
}

export { validate };
