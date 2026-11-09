function validate(numbers) {
  let candidate;
  let balance = 0;

  for (const number of numbers) {
    if (balance === 0) candidate = number;
    balance += number === candidate ? 1 : -1;
  }

  const count = numbers.filter((number) => number === candidate).length;
  return count > numbers.length / 2 ? candidate : null;
}

export { validate };
