# Fire-Station Coverage

> You're given a 2D grid representing a city where each cell is either empty
> (`0`), a fire station (`1`), or a building (`2`). Fire stations can serve
> buildings based on horizontal + vertical moves only. Return a 2D grid where
> each cell shows the minimum distance to the nearest fire station.

```js
fireStationCoverage([
  [2, 0, 1],
  [0, 2, 0],
  [1, 0, 2],
]);
// [[2, 1, 0], [1, 2, 1], [0, 1, 2]]
```

Assumption: a cell that no station can reach is `-1`. Every cell type can be
crossed.

Source: Cassidoo #448 (https://cassidoo.co/newsletter/2026-03-15/). Fidelity: faithful.
Pattern: multi-source BFS seeded with every station.
