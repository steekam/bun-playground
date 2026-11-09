function validate(input) {
  const { weights, capacity } = input;
  if (weights.length === 0) return 0;

  const ordered = [...weights].sort((a, b) => b - a);
  const bins = [];
  let best = ordered.length;

  function search(index) {
    if (bins.length >= best) return;
    if (index === ordered.length) {
      best = bins.length;
      return;
    }

    const weight = ordered[index];
    const triedLoads = new Set();

    for (let bin = 0; bin < bins.length; bin += 1) {
      const load = bins[bin];
      if (load + weight > capacity || triedLoads.has(load)) continue;

      triedLoads.add(load);
      bins[bin] += weight;
      search(index + 1);
      bins[bin] = load;
    }

    bins.push(weight);
    search(index + 1);
    bins.pop();
  }

  search(0);
  return best;
}

export { validate };
