const cases = [
  [{ pattern: "paper", text: "title" }, true],
  [{ pattern: "foo", text: "bar" }, false],
  [{ pattern: "egg", text: "add" }, true],
  [{ pattern: "", text: "" }, true],
];

export { cases };
