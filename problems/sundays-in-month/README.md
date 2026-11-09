# Sundays in Month

Given a year and a 1-based month, return every Sunday in that month as
`YYYY-MM-DD`.

Examples: `(2026, 9) -> ["2026-09-06", "2026-09-13", "2026-09-20", "2026-09-27"]`.

Input is `[year, month]`. Use UTC so local time zones and DST do not shift the
date. Pattern: calendar arithmetic; stretch goal is to jump straight to the
first Sunday and step by 7.

Source: Cassidoo #475 (https://cassidoo.co/newsletter/2026-09-20/).
