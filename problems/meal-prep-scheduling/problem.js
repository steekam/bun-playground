function validate(tasks) {
  const byEnd = [...tasks].sort((a, b) => a[2] - b[2]);
  const chosen = [];
  let busyUntil = -Infinity;

  for (const [name, start, end] of byEnd) {
    if (start < busyUntil) continue;
    chosen.push(name);
    busyUntil = end;
  }
  return { count: chosen.length, chosen };
}

export { validate };
