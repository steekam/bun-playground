# Approximate Search

> Given a text string and a pattern, implement a fuzzy string search using the
> Bitap algorithm that finds all positions in the text where the pattern matches
> with at most `k` errors (insertions, deletions, or substitutions). Return an
> array of objects containing the position and the number of errors at that match.

```js
fuzzySearch("the cat sat on the mat", "cat", 0);
// [{ position: 4, errors: 0 }]
fuzzySearch("cassidoo", "cool", 1);
// []
```

Input is `[text, pattern, k]`. Assumption: `position` is the start index, and
`errors` is the smallest edit distance between the pattern and any substring that
starts there, so with `k > 0` neighbouring start positions can also match.

The reference uses a per-start edit-distance DP, `O(n * m * n)`. Stretch goal:
implement real Bitap (Wu–Manber, shift-and with `k + 1` bit vectors), which reports
match end positions, then reconcile it with the start-position output.

Source: Cassidoo #449 (https://cassidoo.co/newsletter/2026-03-22/). Fidelity: faithful
(Bitap itself is left as the stretch).
Pattern: bit-parallel approximate matching.
