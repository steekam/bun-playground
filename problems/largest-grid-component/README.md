# Largest Grid Component

In a binary grid, return the size of the largest 4-directionally connected
component of `1` cells. Return `0` for an empty or all-zero grid.

Examples: `[[1,1,0],[0,1,0],[1,0,1]] -> 3`, `[[0,0],[0,0]] -> 0`.

Target `O(rows * columns)` time. Pattern: flood fill/DFS or BFS, with an
optimization that avoids revisiting cells.
