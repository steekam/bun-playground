# Mean Bit Length

> Given a positive integer `n`, calculate the mean number of bits required to
> represent all integers from `0` to `n-1` (where the bit count of `0` is `1`).
> Return the result rounded to two decimal places.

```js
meanBits(6); // 2.00
// 0: 1 bit, 1: 1 bit, 2: 2 bits, 3: 2 bits, 4: 3 bits, 5: 3 bits
// Mean = (1 + 1 + 2 + 2 + 3 + 3) / 6 = 2.00
```

Target `O(log n)`: bit length `b >= 2` covers `[2^(b-1), 2^b - 1]`, and bit length
`1` covers `0` and `1`. Returns a number (`2`, not the string `"2.00"`).

Source: Cassidoo #463 (https://cassidoo.co/newsletter/2026-06-28/). Fidelity: faithful.
Pattern: power-of-two range aggregation.
