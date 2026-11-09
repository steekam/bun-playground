function validate([field, k]) {
  const reachLeft = Math.floor((k - 1) / 2);
  const reachRight = Math.floor(k / 2);
  const placements = [];
  let protectedUntil = -1;

  field.forEach((needsProtection, position) => {
    if (needsProtection !== 1 || position <= protectedUntil) return;
    const index = Math.min(position + reachLeft, field.length - 1);
    placements.push(index);
    protectedUntil = index + reachRight;
  });
  return placements;
}

export { validate };
