# Ghostwriter

A ghost types symbols into your text. `#` deletes the last character and `~`
duplicates it, in each case only when a character exists. Return the final text.

Examples: `"a#~b" -> "b"`, `"ab~c#" -> "abb"`, `"BBB##O~" -> "BOO"`.

Pattern: stack-based text editor simulation. Symbols are never kept as text.

Source: Cassidoo #479 (https://cassidoo.co/newsletter/2026-10-18/).
