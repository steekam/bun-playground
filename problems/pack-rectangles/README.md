# Pack Rectangles

Given a large `n x m` rectangle and a smaller `a x b` rectangle (rotation by 90
degrees allowed), return how many small rectangles fit without overlapping.

Examples: `(10, 10, 3, 4) -> 6`, `(10, 6, 2, 3) -> 10`, `(10, 6, 11, 2) -> 0`.

Input is `[n, m, a, b]`. The reference matches the issue's examples by tiling
every rectangle in one orientation and taking the better of the two. Mixed
orientations can beat this (true optimum for `(10, 10, 3, 4)` is above 6), so a
stretch goal is the pallet-loading problem with guillotine cuts or search.

Pattern: grid counting, then branch-and-bound.

Source: Cassidoo #470 (https://cassidoo.co/newsletter/2026-08-16/). Fidelity: faithful.
