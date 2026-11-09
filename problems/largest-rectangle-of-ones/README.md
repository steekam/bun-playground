# Largest Rectangle of Ones

> Given a 2D array of 0s and 1s, return the size of the largest rectangle of 1s in
> the array.

```js
const islands = [
  [0, 0, 0, 1, 0],
  [1, 1, 0, 0, 1],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
];
largestRect(islands); // '2x2'
```

Return `"<height>x<width>"` for the rectangle with the largest area, `"0x0"` when
there are no ones. Assumption: on equal area, prefer the taller rectangle.

The reference is `O(rows * cols^2)`. Stretch goal: `O(rows * cols)` by reducing each
row to a histogram and using a monotonic stack.

Source: Cassidoo #237 (https://cassidoo.co/newsletter/2022-02-27/). Fidelity: faithful.
Pattern: 2D-to-histogram reduction.
