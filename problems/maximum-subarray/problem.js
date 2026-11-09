function validate(numbers) {
  let best = numbers[0];
  let current = numbers[0];

  for (let index = 1; index < numbers.length; index += 1) {
    current = Math.max(numbers[index], current + numbers[index]);
    best = Math.max(best, current);
  }

  return best;
}

export { validate };
