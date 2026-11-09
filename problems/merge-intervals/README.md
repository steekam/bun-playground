# Merge Intervals

Given intervals `[start, end]`, merge every overlapping interval and return the
normalized list sorted by start.

Examples: `[[1,3],[2,6],[8,10],[9,12]] -> [[1,6],[8,12]]`.

Pattern: sort once, then sweep while maintaining the current merged interval.
