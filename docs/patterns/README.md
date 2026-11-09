# Algorithm patterns

This guide helps you choose an approach before you write code. It is for
interview practice, not memorizing templates.

MIT's algorithm course frames a strong solution around four parts: a clear
algorithm description, a worked example or diagram, a correctness argument,
and time and space analysis. Use that structure for every problem here.

## Use the guide

1. Read the input shape and constraints.
2. State a brute-force approach in one sentence.
3. Match the problem to a pattern below.
4. Name the invariant: what stays true after each step?
5. Implement the smallest version that preserves the invariant.
6. Test the boundary cases, then state complexity.

Do not choose a pattern from a keyword alone. Confirm that its invariant fits
the problem.

## Recommended learning order

| Order | Pattern | First local practice |
|---:|---|---|
| 1 | Hashing and counting | [Majority Element](../../problems/majority-element/README.md) |
| 2 | Two pointers | [Merge Into Buffered Array](../../problems/merge-into-buffered-array/README.md) |
| 3 | Sliding window | [Longest Valid Parentheses](../../problems/longest-valid-parentheses/README.md) |
| 4 | Prefix preprocessing | [Items in Compartments](../../problems/items-in-compartments/README.md) |
| 5 | Sort and sweep | [Merge Intervals](../../problems/merge-intervals/README.md) |
| 6 | Stack and monotonic stack | [Largest Rectangle of Ones](../../problems/largest-rectangle-of-ones/README.md) |
| 7 | BFS | [Fire-Station Coverage](../../problems/fire-station-coverage/README.md) |
| 8 | DFS and components | [Largest Grid Component](../../problems/largest-grid-component/README.md) |
| 9 | Cycle detection | [Symlink Resolution](../../problems/symlink-resolution/README.md) |
| 10 | Greedy choice | [Meal-Prep Scheduling](../../problems/meal-prep-scheduling/README.md) |
| 11 | Dynamic programming | [Maximum Subarray](../../problems/maximum-subarray/README.md) |
| 12 | Backtracking | [Phone-Letter Combinations](../../problems/phone-letter-combinations/README.md) |
| 13 | Binary search | [Longest Consecutive Sequence](../../problems/longest-consecutive-sequence/README.md) |
| 14 | Heap and priority queue | [Pack Suitcases](../../problems/minimum-bins/README.md) |
| 15 | Bit manipulation | [Bitap Fuzzy Search](../../problems/approximate-search/README.md) |

## Pattern index

- [Hashing and counting](hashing.md)
- [Two pointers](two-pointers.md)
- [Sliding window](sliding-window.md)
- [Prefix preprocessing](prefix-preprocessing.md)
- [Sort and sweep](sort-and-sweep.md)
- [Stack and monotonic stack](stack-and-monotonic-stack.md)
- [Breadth-first search](breadth-first-search.md)
- [Depth-first search and components](depth-first-search.md)
- [Cycle detection](cycle-detection.md)
- [Greedy choice](greedy.md)
- [Dynamic programming](dynamic-programming.md)
- [Backtracking](backtracking.md)
- [Binary search](binary-search.md)
- [Heap and priority queue](heap.md)
- [Bit manipulation](bit-manipulation.md)

## Sources

The guide draws its structure and algorithm descriptions from these references:

- [MIT 6.006 syllabus](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/pages/syllabus/)
- [MIT 6.006 lecture videos](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/video_galleries/lecture-videos/)
- [CP-Algorithms: breadth-first search](https://cp-algorithms.com/graph/breadth-first-search.html)
- [CP-Algorithms: depth-first search](https://cp-algorithms.com/graph/depth-first-search.html)
- [CP-Algorithms: connected components](https://cp-algorithms.com/graph/search-for-connected-components.html)
- [CP-Algorithms: dynamic programming](https://cp-algorithms.com/dynamic_programming/intro-to-dp.html)
- [CP-Algorithms: binary search](https://cp-algorithms.com/num_methods/binary_search.html)
- [CP-Algorithms: disjoint set union](https://cp-algorithms.com/data_structures/disjoint_set_union.html)
- [CP-Algorithms: segment tree](https://cp-algorithms.com/data_structures/segment_tree.html)
- [CP-Algorithms: minimum stack and queue](https://cp-algorithms.com/data_structures/stack_queue_modification.html)
- [CP-Algorithms: prefix function and KMP](https://cp-algorithms.com/string/prefix-function.html)

The local problem descriptions define this repository's exact inputs and
outputs. Use the external references to deepen the technique, not to override
those contracts.
