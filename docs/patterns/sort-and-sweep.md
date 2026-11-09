# Sort and sweep

## Use it when

The input contains intervals, events, or objects whose relationships become
local after ordering. Sorting exposes the next decision; a single pass keeps a
small amount of active state.

## Invariant

Everything before the sweep position is normalized or settled. The active state
contains every unresolved interaction with the next item.

## Shape

```js
const sorted = [...intervals].sort((a, b) => a[0] - b[0]);
const result = [];

for (const interval of sorted) {
  const current = result.at(-1);
  if (!current || interval[0] > current[1]) result.push([...interval]);
  else current[1] = Math.max(current[1], interval[1]);
}
```

## Complexity

Usually `O(n log n)` time for sorting and `O(n)` space for the result. The sweep
itself is linear.

## Traps

- Define whether touching intervals overlap.
- Do not mutate caller-owned intervals unless the contract permits it.
- Sort by the field that makes the unresolved state local.

## Practice

- [Merge Intervals](../../problems/merge-intervals/README.md)
- [Meal-Prep Scheduling](../../problems/meal-prep-scheduling/README.md)
- [Minimum Swaps to Sort](../../problems/minimum-swaps-to-sort/README.md)
