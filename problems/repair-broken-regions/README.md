# Repair Broken Regions

> You are given a 2D grid where `1` represents an intact tile and `0` represents a
> broken tile. A "broken region" is a group of connected `0`s (connected
> horizontally or vertically). Find the minimum number of tiles you need to repair
> to ensure no broken region has an area larger than `k`.

```js
minRepairs(grid, 2) // 2
minRepairs(newGrid, 1) // 3
```

Input is `[grid, k]`. Repairing flips a `0` to `1`. Regions are independent, so the
answer is the sum of each region's minimum.

The reference tries every set of `t` repairs per region (smallest `t` first), which
is exponential and fine for small grids. For `k = 0` it is a count of zeros; for
`k = 1` it is a minimum vertex cover of the region graph. Stretch goal: faster
search with pruning or an exact solver per region.

Source: Cassidoo #454 (https://cassidoo.co/newsletter/2026-04-26/). Fidelity: faithful.
Pattern: connected components plus combinatorial optimization.
