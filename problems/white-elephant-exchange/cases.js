const cases = [
  [
    [4, [0, 0, 2, 2, 0, 0]],
    [
      "Person 0 opened gift 0",
      "Person 1 opened gift 1",
      "Person 2 stole gift 0 from person 0",
      "Person 0 stole gift 1 from person 1",
      "Person 1 opened gift 2",
      "Person 3 opened gift 3",
      "Game Over! Final distribution: {'person 0':1, 'person 1':2, 'person 2':0, 'person 3':3}",
    ],
  ],
  [
    [2, [0, 0]],
    ["Person 0 opened gift 0", "Person 1 opened gift 1", "Game Over! Final distribution: {'person 0':0, 'person 1':1}"],
  ],
  [
    [1, [0]],
    ["Person 0 opened gift 0", "Game Over! Final distribution: {'person 0':0}"],
  ],
];

export { cases };
