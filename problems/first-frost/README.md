# First Frost

Given daily temperatures and a number `drop`, return for each day how many days
you wait until a day that is at least `drop` degrees colder. Use `0` when that
never happens.

Examples: `([70, 68, 72, 60, 65, 55], 5) -> [3, 2, 1, 2, 1, 0]`,
`([40, 30, 45, 20], 10) -> [1, 2, 1, 0]`.

Input is `[temperatures, drop]`. The reference is `O(n^2)`. Stretch goal:
`O(n log n)` with a max-heap of pending days keyed by temperature, popping every
day whose temperature is at least `current + drop`. Note the threshold shifts per
day, so a plain monotonic stack is not enough.

Source: Cassidoo #476 (https://cassidoo.co/newsletter/2026-09-27/).
