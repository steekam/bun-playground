# Minimum Swaps to Alternate

> Given a string `s` consisting only of 'a' and 'b', you may swap adjacent
> characters any number of times. Return the minimum number of adjacent swaps needed
> to transform `s` into an alternating string, either "ababab..." or "bababa...", or
> return `-1` if it's impossible.

```js
minSwapsToAlternate('aabb'); // 1
minSwapsToAlternate('aaab'); // -1
minSwapsToAlternate('aaaabbbb'); // 6
```

Impossible when the counts of `a` and `b` differ by more than one. Otherwise move the
`k`-th `a` to the `k`-th target `a` position; adjacent swaps cost the sum of the
position distances. With equal counts, try both patterns.

Source: Cassidoo #447 (https://cassidoo.co/newsletter/2026-03-08/). Fidelity: faithful.
Pattern: adjacent-swap positional distance.
