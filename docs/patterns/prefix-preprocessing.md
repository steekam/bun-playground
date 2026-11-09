# Prefix preprocessing

## Use it when

The input receives many range queries over mostly static data. Precompute a
summary so each query becomes a subtraction or a small lookup.

## Invariant

`prefix[i]` summarizes the half-open range `[0, i)`. Then a range query
`[left, right]` is `prefix[right + 1] - prefix[left]` for additive data.

## Shape

```js
const prefix = [0];
for (const value of values) prefix.push(prefix.at(-1) + value);

function rangeSum(left, right) {
  return prefix[right + 1] - prefix[left];
}
```

Use a Fenwick tree or segment tree when updates matter. Prefix arrays favor fast
queries; dynamic trees trade simpler preprocessing for update support.

## Complexity

Preprocessing is `O(n)`, each static range query is `O(1)`, and space is `O(n)`.

## Traps

- Choose inclusive or half-open boundaries and write them down.
- Handle a range beginning at index `0`.
- Prefix sums do not solve arbitrary updates efficiently.

## Practice

- [Items in Compartments](../../problems/items-in-compartments/README.md)
- [Merge Intervals](../../problems/merge-intervals/README.md)
