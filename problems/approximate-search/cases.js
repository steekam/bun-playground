const cases = [
  [["the cat sat on the mat", "cat", 0], [{ position: 4, errors: 0 }]],
  [["cassidoo", "cool", 1], []],
  [["cat", "cat", 1], [{ position: 0, errors: 0 }, { position: 1, errors: 1 }]],
  [["abc", "xyz", 0], []],
  [["", "a", 1], []],
  [["banana", "ana", 0], [{ position: 1, errors: 0 }, { position: 3, errors: 0 }]],
];

export { cases };
