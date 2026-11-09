# Rotting Oranges

In a grid, `0` is empty, `1` is fresh, and `2` is rotten. Each minute, rotten
oranges infect adjacent fresh oranges. Return the minutes needed to rot all
oranges, or `-1` if impossible.

Examples: `[[2,1,1],[1,1,0],[0,1,1]] -> 4`, `[[2,1,1],[0,1,1],[1,0,1]] -> -1`.

Pattern: multi-source BFS. Start the queue with every rotten orange.
