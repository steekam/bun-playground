function validate(input) {
  const { nodes, headA, headB } = input;
  const seen = new Set();
  for (let current = headA; current !== -1 && current !== null; current = nodes[current].next) {
    seen.add(current);
  }
  for (let current = headB; current !== -1 && current !== null; current = nodes[current].next) {
    if (seen.has(current)) return current;
  }
  return -1;
}

export { validate };
