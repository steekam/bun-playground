function validate(values) {
  const result = [...values];
  for (let index = 0; index + 1 < result.length; index += 2) {
    [result[index], result[index + 1]] = [result[index + 1], result[index]];
  }
  return result;
}

export { validate };
