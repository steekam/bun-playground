function validate(log) {
  const toMinutes = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
  };

  let elapsed = 0;
  for (let index = 1; index < log.length; index += 1) {
    const step = toMinutes(log[index]) - toMinutes(log[index - 1]);
    elapsed += step < 0 ? step + 60 : step;
  }
  return elapsed;
}

export { validate };
