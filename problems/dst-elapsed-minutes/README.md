# DST Elapsed Minutes

Given a chronological log of local `"HH:MM"` timestamps from the night daylight
saving time ends, return the real minutes between the first and last entries.
Exactly one consecutive pair goes backwards, revealing the one-hour rollback.

Examples: `["00:50", "01:10", "01:50", "01:10", "02:10"] -> 140`,
`["01:55", "01:05", "01:25", "01:40"] -> 45`.

Assumption: a step that goes backwards is the rollback, so add 60 minutes to
that step. The reference sums consecutive steps; equal timestamps count as 0.

Pattern: time arithmetic and spotting the discontinuity.

Source: Cassidoo #481 (https://cassidoo.co/newsletter/2026-11-01/). Fidelity: faithful.
