# Minimum Bins

Given item weights and a bin capacity, return the minimum number of bins needed
to place every item. Items cannot be split. `weights.length <= 20` and all
weights are positive integers no greater than `capacity`.

Examples: `{ weights: [4,8,1,4], capacity: 10 } -> 2`,
`{ weights: [2,2,2,2], capacity: 3 } -> 4`.

Find the exact answer. Pattern: bin-packing backtracking with pruning. Explain
why a simple greedy strategy is not always optimal.
