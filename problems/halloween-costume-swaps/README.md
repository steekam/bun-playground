# Halloween Costume Swaps

`costumes[i]` is the index of the person who owns the costume person `i` wears.
Return the minimum swaps between any two people so everyone has their own
costume. The input is a permutation of `0..n-1`.

Examples: `[1, 2, 0] -> 2`, `[4, 3, 2, 1, 0] -> 2`, `[2, 3, 4, 0, 1] -> 4`.

Answer is `n - cycles`. Pattern: permutation cycle counting (see
`minimum-swaps-to-sort` for the unsorted-values version).

Source: Cassidoo #480 (https://cassidoo.co/newsletter/2026-10-25/).
