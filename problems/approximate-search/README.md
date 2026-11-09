# Approximate Search

Return whether `pattern` occurs in `text` with at most `maxEdits` insertions,
deletions, or substitutions. Matching is case-sensitive. An empty pattern
matches every text.

Examples: `{ text: "hello world", pattern: "wurld", maxEdits: 1 } -> true`,
`{ text: "abcdef", pattern: "xyz", maxEdits: 1 } -> false`.

Use a Bitap-style bit-mask path for exact matching, then reason about how to
extend it for bounded edits. Keep the pattern length at most 31 so JavaScript
bitwise operations remain usable. A rolling edit-distance row is acceptable for
the fuzzy path; discuss its trade-off against a full dynamic-programming table.
