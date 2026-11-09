# Spiral Matrix

Return all values of a rectangular matrix in clockwise spiral order.

Examples: `[[1,2,3],[4,5,6],[7,8,9]] -> [1,2,3,6,9,8,7,4,5]` and
`[[1,2,3,4]] -> [1,2,3,4]`.

Target `O(rows * columns)` time and `O(rows * columns)` output space. Pattern:
simulation with shrinking boundaries.
