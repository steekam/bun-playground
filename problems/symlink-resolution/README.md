# Symlink Resolution

`links` maps a path to another path. Starting from `start`, follow links until
reaching a path with no link. Return that final path, or `"CYCLE"` if a path is
visited twice.

Example: `{ links: { "/a": "/b", "/b": "/c" }, start: "/a" } -> "/c"`.

Pattern: functional-graph traversal with a visited set.
