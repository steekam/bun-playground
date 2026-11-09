# Pack Suitcases

> Given an array of object weights and an array of suitcase capacities, determine
> the minimum number of suitcases needed to pack all objects, where each object
> must go into exactly one suitcase and each suitcase can hold any number of
> objects up to its capacity. Return `-1` if it is impossible to pack all objects.

```js
packSuitcases([4, 8, 1, 4, 2], [10, 6, 8]); // 3
packSuitcases([9, 7, 6], [10, 6]); // -1
```

Input is `[weights, capacities]`. Insight: if `c` suitcases suffice, the `c` largest
do, so try `c = 0, 1, 2, ...` and check feasibility with backtracking (heaviest
object first, skipping bins with equal remaining space).

Source: Cassidoo #459 (https://cassidoo.co/newsletter/2026-05-31/). Fidelity: faithful.
Pattern: bin packing with branch and bound (NP-hard in general).
