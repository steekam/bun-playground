function validate(numbers) {
  const tails = [];
  for (const number of numbers) {
    let left = 0;
    let right = tails.length;
    while (left < right) {
      const middle = Math.floor((left + right) / 2);
      if (tails[middle] < number) left = middle + 1;
      else right = middle;
    }
    tails[left] = number;
  }
  return tails.length;
}

export { validate };
