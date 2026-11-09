# Binary search

## Use it when

The answer space or input is ordered by a monotonic predicate: once the answer
becomes possible, it stays possible, or vice versa.

## Invariant

The answer remains inside the search interval. Each iteration removes a region
that cannot contain the answer.

## Shape

```js
let low = lowerBound;
let high = upperBound;

while (low < high) {
  const middle = low + Math.floor((high - low) / 2);
  if (possible(middle)) high = middle;
  else low = middle + 1;
}
return low;
```

Write the predicate and its monotonic direction before writing the loop. For an
exact lookup in a sorted array, return the index or a sentinel when the loop ends.

## Complexity

`O(log n)` predicate evaluations, multiplied by the cost of `possible(x)`. Space
is usually `O(1)`.

## Traps

- Prove monotonicity; binary search does not work on arbitrary yes/no answers.
- Define whether `high` is inclusive or exclusive.
- Avoid overflow in fixed-width languages; the subtraction form is clear in JavaScript too.

## Practice

- [Longest Consecutive Sequence](../../problems/longest-consecutive-sequence/README.md) — use the set version first, then design a binary-search variant.
- [Pack Suitcases](../../problems/minimum-bins/README.md) — ask whether capacity or bin count can be searched.

See [CP-Algorithms: binary search](https://cp-algorithms.com/num_methods/binary_search.html).
