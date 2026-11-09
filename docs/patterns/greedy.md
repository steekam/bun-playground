# Greedy choice

## Use it when

You can make a local choice, prove that an optimal solution can contain it, and
reduce the remaining problem to the same form. Sorting often exposes the safe
choice.

## Invariant

The partial solution is feasible and no worse than any alternative partial
solution with the same remaining options.

## How to prove it

Use an exchange argument: take an optimal solution that does not make the greedy
choice, swap the choice into its place, and show that feasibility and objective
value do not get worse.

## Complexity

Often `O(n log n)` because of sorting, followed by an `O(n)` scan. The complexity
depends on the choice and the proof; greedy is a correctness strategy, not a
data structure.

## Traps

- A locally attractive choice is not automatically safe.
- Test a tempting greedy rule against a small brute-force solver.
- If future value depends on many earlier choices, dynamic programming may fit better.

## Practice

- [Meal-Prep Scheduling](../../problems/meal-prep-scheduling/README.md)
- [Scarecrow Placement](../../problems/scarecrow-placement/README.md)
- [Minimum Swaps to Sort](../../problems/minimum-swaps-to-sort/README.md)
- [Pack Suitcases](../../problems/pack-suitcases/README.md)

See [CP-Algorithms: scheduling](https://cp-algorithms.com/schedules/schedule-with-completion-duration.html).
