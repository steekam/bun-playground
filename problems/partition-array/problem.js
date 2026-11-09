function validate(numbers) {
  const odds = numbers.filter((value) => value !== 0 && value % 2 !== 0);
  const evens = numbers.filter((value) => value !== 0 && value % 2 === 0);
  const zeros = numbers.filter((value) => value === 0);
  return [...odds, ...evens, ...zeros];
}

export { validate };
