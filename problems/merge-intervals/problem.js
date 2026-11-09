function validate(intervals) {
  const sorted = intervals.map(([start, end]) => [start, end]).sort((a, b) => a[0] - b[0]);
  const merged = [];

  for (const interval of sorted) {
    const previous = merged.at(-1);
    if (!previous || interval[0] > previous[1]) {
      merged.push(interval);
    } else {
      previous[1] = Math.max(previous[1], interval[1]);
    }
  }

  return merged;
}

export { validate };
