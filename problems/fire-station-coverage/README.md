# Fire-Station Coverage

In a grid, `0` is empty, `1` is a house, and `2` is a fire station. Return the
largest shortest-path distance from a house to a station, or `-1` if any house
cannot reach one. Movement is up, down, left, or right.

Pattern: multi-source BFS seeded with every station. Return `0` when there are
no houses.
