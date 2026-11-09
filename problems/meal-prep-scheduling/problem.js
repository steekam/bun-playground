function validate(jobs) {
  const sorted = [...jobs].sort((a, b) => a[1] - b[1]);
  let end = -Infinity;
  let count = 0;
  for (const [start, finish] of sorted) {
    if (start < end) continue;
    count += 1;
    end = finish;
  }
  return count;
}

export { validate };
