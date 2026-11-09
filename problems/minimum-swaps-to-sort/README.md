# Minimum Swaps to Sort

Return the minimum number of arbitrary swaps needed to sort an array of
distinct integers in ascending order.

Examples: `[4,3,2,1] -> 2`, `[1,5,4,3,2] -> 2`, `[1,2,3] -> 0`.

Target `O(n log n)` time. Pattern: map sorted positions and count permutation
cycles.
