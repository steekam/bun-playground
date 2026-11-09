const fileSystem = {
  "/a": "/b",
  "/b": "/c",
  "/c": null,
  "/loop1": "/loop2",
  "/loop2": "/loop1",
  "/real": null,
  "/alias": "/real",
  "/self": "/self",
};

const cases = [
  [[fileSystem, "/a"], "/c"],
  [[fileSystem, "/alias"], "/real"],
  [[fileSystem, "/loop1"], null],
  [[fileSystem, "/real"], "/real"],
  [[fileSystem, "/self"], null],
  [[fileSystem, "/missing"], "/missing"],
];

export { cases };
