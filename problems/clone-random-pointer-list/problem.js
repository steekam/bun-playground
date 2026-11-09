function validate(nodes) {
  const clones = nodes.map(({ value }) => ({ value, next: null, random: null }));

  nodes.forEach((node, index) => {
    clones[index].next = node.next;
    clones[index].random = node.random;
  });

  return clones;
}

export { validate };
