const cases = [
  [[{ value: 7, next: null, random: 0 }], [{ value: 7, next: null, random: 0 }]],
  [[
    { value: 1, next: 1, random: 1 },
    { value: 2, next: null, random: 0 },
  ], [
    { value: 1, next: 1, random: 1 },
    { value: 2, next: null, random: 0 },
  ]],
  [[], []],
];

export { cases };
