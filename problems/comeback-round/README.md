# Comeback Round

`rounds[r][p]` is the points player `p` earned in round `r`. Find the earliest
round (1-based) from which the eventual winner is the sole leader at the end of
every remaining round. Return `-1` if the final score is tied for first.

Examples: the first example in the issue returns `2`; `[[4, 2], [1, 3], [2, 1]]
-> 3`; `[[4, 2], [1, 3]] -> -1`.

Assumption: an empty game returns `-1`. Pattern: prefix sums, then scan
backwards until the lead breaks.

Source: Cassidoo #482 (https://cassidoo.co/newsletter/2026-11-08/).
