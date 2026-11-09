const cases = [
  [{ tiles: [{ terrain: "wood", number: 5 }, { terrain: "brick", number: 9 }], edges: [[0, 1]] }, true],
  [{ tiles: [{ terrain: "wood", number: 5 }, { terrain: "wood", number: 9 }], edges: [[0, 1]] }, false],
  [{ tiles: [{ terrain: "wood", number: 6 }, { terrain: "brick", number: 8 }], edges: [[0, 1]] }, false],
];

export { cases };
