# Toggle Doors

> Let's say you have `n` doors that start out as closed. With the first pass across
> the doors, you toggle every door open. With the second pass, you toggle every
> second door. With the third, every third door, and so on. Write a function that
> takes in an integer `numberOfPasses`, and returns how many doors are open after
> the number of passes.

```js
passDoors(7, 3); // 4
// 0 means open, 1 means closed
// Initial: 1 1 1 1 1 1 1
// Pass 1:  0 0 0 0 0 0 0
// Pass 2:  0 1 0 1 0 1 0
// Pass 3:  0 1 1 1 0 0 0
```

Input is `[doors, passes]`. The reference simulates every pass, `O(n log passes)`.
Stretch goal: door `d` is open when it has an odd number of divisors `<= passes`;
when `passes >= doors` that is exactly the perfect squares, so the answer is
`floor(sqrt(doors))`.

Source: Cassidoo #270 (https://cassidoo.co/newsletter/2022-10-16/). Fidelity: faithful.
Pattern: divisor-count parity.
