const cases = [
  [{ text: "hello world", pattern: "wurld", maxEdits: 1 }, true],
  [{ text: "abcdef", pattern: "xyz", maxEdits: 1 }, false],
  [{ text: "kitten", pattern: "sitten", maxEdits: 1 }, true],
  [{ text: "abc", pattern: "", maxEdits: 0 }, true],
  [{ text: "abc", pattern: "abcd", maxEdits: 0 }, false],
];

export { cases };
