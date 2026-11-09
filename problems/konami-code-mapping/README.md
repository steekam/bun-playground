# Konami Code Mapping

> Given a string `str`, find a contiguous substring of length 10 whose characters
> can be bijectively mapped to the moves `{U,D,L,R,B,A}` so that the substring
> decodes to the Konami code `"UUDDLRLRBA"` (a character always maps to the same
> move, and two different moves can't share a character). Return a valid mapping
> as an object.

```js
konamiMapping("xx2233454590yy11110");
// { "0": "A", "2": "U", "3": "D", "4": "L", "5": "R", "9": "B" }
konamiMapping("sduwahoda22ii0d0dbn");
// { "0": "L", "2": "U", "i": "D", "d": "R", "b": "B", "n": "A" }
```

Assumptions: return the mapping for the first valid window, or `null` when no
window works.

Source: Cassidoo #440 (https://cassidoo.co/newsletter/2026-01-18/). Fidelity: faithful.
Pattern: sliding window with a bidirectional (bijective) map.
