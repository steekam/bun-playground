# Merge Into a Buffered Array

> You are given two sorted arrays, `a` and `b`, where `a` has a large enough size
> buffer at the end to hold `b` (which can be spaces, zeroes, or nulls). Write a
> function to merge `b` into `a` in sorted order.

```js
let a = [1, 3, 5, 0, 0, 0];
let b = [2, 4, 6];
merge(a, b); // [1, 2, 3, 4, 5, 6]
```

Input is `[a, b]`. The buffer is always the last `b.length` slots of `a`, so its
contents never matter. Merge in place from the back so nothing is overwritten
early.

Source: Cassidoo #430 (https://cassidoo.co/newsletter/2025-11-09/). Fidelity: faithful.
Pattern: backwards two-pointer placement.
