# Dynamic programming

## Use it when

The problem has overlapping subproblems and an optimal answer can be assembled
from answers to smaller states. Define the state before choosing memoization or
bottom-up iteration.

## State recipe

1. Define exactly what `dp[state]` means.
2. Write the recurrence from the final decision.
3. Set base cases that match the empty or smallest input.
4. Choose an evaluation order that makes dependencies available.
5. Remove dimensions only after proving older states are unnecessary.

## Invariant

Every computed state stores the correct answer for precisely the subproblem in
its definition.

## Example

For maximum subarray:

```text
bestEndingHere = max(value, bestEndingHere + value)
best = max(best, bestEndingHere)
```

The rolling version keeps only the states the recurrence still needs.

## Complexity

Usually `number of states × transitions per state`. Space can often drop from
the full table to one or two rows, but only when the recurrence permits it.

## Traps

- A vague state creates a vague recurrence.
- Do not confuse subsequence with subarray; adjacency changes the state.
- Check whether the empty solution is allowed.
- Greedy and DP solve different proof obligations.

## Practice

- [Maximum Subarray](../../problems/maximum-subarray/README.md)
- [Climbing Stairs](../../problems/climbing-stairs/README.md)
- [Longest Increasing Subsequence](../../problems/longest-increasing-subsequence/README.md)
- [Largest Rectangle of Ones](../../problems/largest-rectangle-of-ones/README.md)

See [CP-Algorithms: introduction to dynamic programming](https://cp-algorithms.com/dynamic_programming/intro-to-dp.html).
