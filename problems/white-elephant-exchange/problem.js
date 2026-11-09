function validate(input) {
  const gifts = [...input.gifts];
  for (const [first, second] of input.exchanges) {
    [gifts[first], gifts[second]] = [gifts[second], gifts[first]];
  }
  return gifts;
}

export { validate };
