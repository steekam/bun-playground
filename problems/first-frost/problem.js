function validate([temperatures, drop]) {
  return temperatures.map((temperature, index) => {
    for (let next = index + 1; next < temperatures.length; next += 1) {
      if (temperatures[next] <= temperature - drop) return next - index;
    }
    return 0;
  });
}

export { validate };
