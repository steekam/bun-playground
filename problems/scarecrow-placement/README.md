# Scarecrow Placement

> Given a field represented as an array of 0s and 1s, where 1 means that position
> needs protection, you can place a scarecrow at any index, and each scarecrow
> protects up to `k` consecutive positions centered around itself (for example, for
> `k = 3`, a scarecrow at `i` protects `i-1`, `i`, and `i+1`). Return the minimum
> set of indices where scarecrows should be placed so that all the positions with 1
> are protected. You can assume `k` is an odd number (or make up what happens if it's
> even).

```js
placeScarecrows([1, 1, 0, 1, 1, 0, 1], 3); // [1, 4, 6]
placeScarecrows([1, 0, 1, 1, 0, 1], 3); // [1, 4]
placeScarecrows([1, 1, 1, 1, 1], 1); // [0, 1, 2, 3, 4]
```

Input is `[field, k]`. Assumption for even `k`: a scarecrow at `i` protects
`i - (k/2 - 1)` through `i + k/2`. Indices stay inside the field.

Source: Cassidoo #428 (https://cassidoo.co/newsletter/2025-10-26/). Fidelity: faithful.
Pattern: greedy interval covering, place as far right as the leftmost uncovered 1 allows.
