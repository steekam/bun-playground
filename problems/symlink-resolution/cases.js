const cases = [
  [{ links: { "/a": "/b", "/b": "/c" }, start: "/a" }, "/c"],
  [{ links: { "/a": "/b", "/b": "/a" }, start: "/a" }, "CYCLE"],
  [{ links: {}, start: "/home" }, "/home"],
  [{ links: { "/a": "/b", "/b": "/c" }, start: "/missing" }, "/missing"],
];

export { cases };
