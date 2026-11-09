# Backpack Lock

A lock shows a start code and must reach an unlock code, both digit strings of
equal length. One move rotates a single digit up or down by one; `0` and `9`
are adjacent. Return the minimum moves.

Examples: `("8051", "1199") -> 10`, `("000", "555") -> 15`, `("109", "990") -> 4`.

Input is `[start, target]`. Pattern: independent per-digit circular distance,
`min(d, 10 - d)`.

Source: Cassidoo #473 (https://cassidoo.co/newsletter/2026-09-06/). Fidelity: faithful.
