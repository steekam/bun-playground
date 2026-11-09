# Trick-or-Treat Candy

Each house gives some pieces of candy. You cannot visit two adjacent houses.
Return the maximum candy you can collect.

Examples: `[2, 7, 9, 3, 1] -> 12`, `[5, 1, 1, 5] -> 10`, `[4] -> 4`.

Target `O(n)` time, `O(1)` space. Pattern: take-or-skip DP, also known as House
Robber.

Source: Cassidoo #478 (https://cassidoo.co/newsletter/2026-10-11/).
