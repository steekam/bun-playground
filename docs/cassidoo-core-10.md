# Cassidoo Core 10

The full local catalogue is maintained in `problems/registry.js`. It contains
47 selected prompts from Cassidoo's weekly newsletter, covering issues #223–#482. All 47 are
materialized as local problem folders. The verbatim issue text for every issue
(#1–#482) is in `data/cassidoo-issues.json`, pulled from the public archive at
https://cassidoo.co/newsletter/archive.

The recommended practice set is the Primary 10 below. Each materialized problem
has a prompt, cases, Bun tests, and a reference implementation.

| # | Problem | Main pattern | Target |
|---|---|---|---:|
| #445 | Maximum Subarray | Kadane's algorithm | 20 min |
| #446 | Majority Element | Boyer–Moore voting | 20 min |
| #245 | Merge Intervals | Sort-and-sweep | 25 min |
| #241 | Items in Compartments | Prefix preprocessing | 25 min |
| #448 | Fire-Station Coverage | Multi-source BFS | 30 min |
| #450 | Symlink Resolution | Functional-graph cycles | 30 min |
| #261 | Longest Valid Parentheses | Stack / DP | 30 min |
| #256 | Clone Random-Pointer List | Object-graph cloning | 35 min |
| #237 | Largest Rectangle of Ones | Histogram / monotonic stack | 40 min |
| #449 | Bitap Fuzzy Search | Bit-parallel matching | 45 min |

View the local registry with:

```bash
bun run test:list
```

Use the cases as the visible sample suite, then add your own cases before
considering a problem complete. For a timed attempt, read the local README,
hide the `validate` body, and restore the reference implementation afterward.
Run all materialized problem tests with `bun test`.

## Suggested sequence

1. Maximum Subarray → Merge Intervals
2. Majority Element → Items in Compartments
3. Fire-Station Coverage → Symlink Resolution
4. Longest Valid Parentheses → Clone Random-Pointer List
5. Largest Rectangle of Ones → Bitap Fuzzy Search
