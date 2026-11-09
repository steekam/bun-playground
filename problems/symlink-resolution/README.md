# Symlink Resolution

> You are given a file system represented as an object where keys are absolute
> paths and values are either `null` (real file/directory) or a string (a symlink
> pointing to another path). Write a function that resolves a given path to its
> real destination, following symlinks along the way. If a symlink chain forms a
> cycle, return `null`.

```js
const fs = {
  "/a": "/b", "/b": "/c", "/c": null,
  "/loop1": "/loop2", "/loop2": "/loop1",
  "/real": null, "/alias": "/real",
};
resolvePath(fs, "/a"); // "/c"
resolvePath(fs, "/alias"); // "/real"
resolvePath(fs, "/loop1"); // null
resolvePath(fs, "/real"); // "/real"
```

Input is `[fileSystem, path]`. Assumption: a path missing from the object resolves
to itself.

Source: Cassidoo #450 (https://cassidoo.co/newsletter/2026-03-29/). Fidelity: faithful.
Pattern: functional-graph walk with a visited set (stretch: Floyd's cycle detection).
