# Partition Array

Return a new array with odd numbers first, then even non-zero numbers, then
zeros. Relative order inside each group is preserved.

Example: `[0, 3, 2, 1, 4, 0, 7] -> [3, 1, 7, 2, 4, 0, 0]`.

Target `O(n)` time. Pattern: stable three-way partition (two-pass or
counting offsets).

Source: Cassidoo #471 (https://cassidoo.co/newsletter/2026-08-23/).
