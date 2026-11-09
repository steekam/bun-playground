function validate([year, month]) {
  const sundays = [];
  const date = new Date(Date.UTC(year, month - 1, 1));
  while (date.getUTCMonth() === month - 1) {
    if (date.getUTCDay() === 0) sundays.push(date.toISOString().slice(0, 10));
    date.setUTCDate(date.getUTCDate() + 1);
  }
  return sundays;
}

export { validate };
