class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}

function cloneList(head) {
  const copies = new Map();
  for (let node = head; node; node = node.next) copies.set(node, new Node(node.val));
  for (let node = head; node; node = node.next) {
    const copy = copies.get(node);
    copy.next = node.next ? copies.get(node.next) : null;
    copy.random = node.random ? copies.get(node.random) : null;
  }
  return head ? copies.get(head) : null;
}

function build(records) {
  const nodes = records.map(({ val }) => new Node(val));
  records.forEach(({ next, random }, index) => {
    nodes[index].next = next === null ? null : nodes[next];
    nodes[index].random = random === null ? null : nodes[random];
  });
  return nodes[0] ?? null;
}

function serialize(head) {
  const nodes = [];
  for (let node = head; node; node = node.next) nodes.push(node);
  return nodes.map((node) => ({
    val: node.val,
    next: node.next ? nodes.indexOf(node.next) : null,
    random: node.random ? nodes.indexOf(node.random) : null,
  }));
}

function validate(records) {
  return serialize(cloneList(build(records)));
}

export { Node, build, cloneList, serialize, validate };
