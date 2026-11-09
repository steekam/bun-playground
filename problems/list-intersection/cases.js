const cases = [
  [{ nodes: [{ next: 2 }, { next: 2 }, { next: 3 }, { next: -1 }], headA: 0, headB: 1 }, 2],
  [{ nodes: [{ next: -1 }, { next: -1 }], headA: 0, headB: 1 }, -1],
  [{ nodes: [{ next: 1 }, { next: -1 }], headA: 0, headB: 0 }, 0],
];

export { cases };
