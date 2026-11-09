function validate(input) {
  const { a, b } = input;
  let left = a.length - b.length - 1;
  let right = b.length - 1;
  let write = a.length - 1;

  while (right >= 0) {
    if (left >= 0 && a[left] > b[right]) a[write--] = a[left--];
    else a[write--] = b[right--];
  }
  return a;
}

export { validate };
