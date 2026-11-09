# Circular Route

`next[i]` gives the next node reached from node `i`; `-1` means no next node.
Starting at `start`, return the first node that belongs to a cycle, or `-1` if
the route terminates. Use `O(1)` extra space.

Examples: `{ next: [1,2,0], start: 0 } -> 0`, `{ next: [1,2,-1], start: 0 } -> -1`,
`{ next: [2,3,4,2,2], start: 0 } -> 2`.

Pattern: Floyd's tortoise-and-hare cycle detection.
