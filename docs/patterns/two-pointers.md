# Two pointers

## Use it when

The input is sorted, two ends constrain a choice, or two sequences must be
merged. The key question is: which pointer can move without discarding a valid
answer?

## Invariant

Every candidate that can still produce an answer remains between the pointers.
After a move, the discarded region is proved impossible.

## Shape

```js
let left = 0;
let right = values.length - 1;

while (left < right) {
  if (shouldMoveLeft(values[left], values[right])) left += 1;
  else right -= 1;
}
```

For merging, write from the back when one array has free space. This prevents
unprocessed values from being overwritten.

## Complexity

Usually `O(n)` time and `O(1)` auxiliary space. Sorting first changes the total
to `O(n log n)`.

## Traps

- Prove the pointer movement; do not move a pointer because it feels closer.
- Decide whether equal endpoints are included.
- Separate input mutation from the algorithm contract.

## Practice

- [Merge Into Buffered Array](../../problems/merge-into-buffered-array/README.md)
- [Minimum Swaps to Alternate](../../problems/minimum-swaps-to-alternate/README.md)
