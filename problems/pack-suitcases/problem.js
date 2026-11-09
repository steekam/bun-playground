function fits(weights, capacities) {
  const remaining = [...capacities];

  const place = (index) => {
    if (index === weights.length) return true;
    const tried = new Set();
    for (let bin = 0; bin < remaining.length; bin += 1) {
      if (remaining[bin] < weights[index] || tried.has(remaining[bin])) continue;
      tried.add(remaining[bin]);
      remaining[bin] -= weights[index];
      if (place(index + 1)) return true;
      remaining[bin] += weights[index];
    }
    return false;
  };

  return place(0);
}

function validate([weights, capacities]) {
  const items = [...weights].sort((a, b) => b - a);
  const suitcases = [...capacities].sort((a, b) => b - a);

  for (let count = 0; count <= suitcases.length; count += 1) {
    if (fits(items, suitcases.slice(0, count))) return count;
  }
  return -1;
}

export { validate };
