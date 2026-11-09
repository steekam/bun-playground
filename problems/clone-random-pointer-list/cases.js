const cases = [
  [[], []],
  [[{ val: 1, next: null, random: 0 }], [{ val: 1, next: null, random: 0 }]],
  [
    [{ val: 7, next: 1, random: null }, { val: 13, next: 2, random: 0 }, { val: 11, next: null, random: 1 }],
    [{ val: 7, next: 1, random: null }, { val: 13, next: 2, random: 0 }, { val: 11, next: null, random: 1 }],
  ],
  [
    [{ val: 1, next: 1, random: 1 }, { val: 2, next: null, random: 1 }],
    [{ val: 1, next: 1, random: 1 }, { val: 2, next: null, random: 1 }],
  ],
];

export { cases };
