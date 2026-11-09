function validate(values) {
  function print(index) {
    if (index >= values.length || values[index] === null) return "";
    const left = print(index * 2 + 1);
    const right = print(index * 2 + 2);
    if (!left && !right) return String(values[index]);
    return `${values[index]}(${left},${right})`;
  }
  return print(0);
}

export { validate };
