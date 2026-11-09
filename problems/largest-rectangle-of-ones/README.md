# Largest Rectangle of Ones

Return the area of the largest axis-aligned rectangle containing only `1`s in
a binary matrix.

Example: `[[1,0,1,0,0],[1,0,1,1,1],[1,1,1,1,1],[1,0,0,1,0]] -> 6`.

Pattern: turn each row into histogram heights and solve each histogram with a
monotonic stack.
