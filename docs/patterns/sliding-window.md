# Sliding window

## Use it when

The answer is a contiguous substring or subarray and the window can be updated
incrementally as its left and right edges move.

## Invariant

The current window satisfies the required condition, or you know precisely why
it does not and shrink it until it does.

## Shape

```js
let left = 0;
for (let right = 0; right < values.length; right += 1) {
  add(values[right]);
  while (!valid()) remove(values[left++]);
  best = update(best, left, right);
}
```

The two-pointer time bound is linear when each item enters and leaves the window
at most once.

## Traps

- A window is not automatically valid after expansion.
- Distinguish “at most” from “exactly”.
- For minimum windows, update the answer after shrinking as far as validity allows.
- Negative values can break sum-based window assumptions.

## Practice

- [Longest Valid Parentheses](../../problems/longest-valid-parentheses/README.md)
- [Bitap Fuzzy Search](../../problems/approximate-search/README.md)
