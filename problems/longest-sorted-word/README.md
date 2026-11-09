# Longest Sorted Word

Return the longest word in a sentence whose letters appear in alphabetical
(non-decreasing) order. Return `""` when none qualifies.

Examples: `"The autumn leaves almost glow." -> "almost"`,
`"A cool sheep sleeps." -> ""`.

Assumptions (derived from the second example): punctuation is ignored,
comparison is case-insensitive, one-letter words do not count, and ties keep
the first word.

Source: Cassidoo #474 (https://cassidoo.co/newsletter/2026-09-13/).
Pattern: string scan with a per-word invariant.
