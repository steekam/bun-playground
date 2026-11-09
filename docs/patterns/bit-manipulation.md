# Bit manipulation

## Use it when

The state is a set of booleans, values fit in a machine word, or a bitwise
operation can replace a repeated arithmetic check. Bit masks are compact state,
not magic shortcuts.

## Common operations

```js
const hasBit = (mask, bit) => (mask & (1 << bit)) !== 0;
const addBit = (mask, bit) => mask | (1 << bit);
const removeBit = (mask, bit) => mask & ~(1 << bit);
```

Use `BigInt` when the state needs more than JavaScript's signed 32-bit bitwise
range. Keep numeric types consistent; do not mix `Number` and `BigInt` in one
bitwise expression.

## Invariant

Each bit has one documented meaning. Every update preserves the meaning of the
other bits.

## Complexity

Each bit operation is constant time for a fixed-width word. The overall runtime
still depends on how many states or positions you process.

## Traps

- JavaScript bitwise operators coerce numbers to signed 32-bit integers.
- `1 << 31` becomes negative.
- Explain the mask before optimizing; readable state beats clever state in an interview.

## Practice

- [Bitap Fuzzy Search](../../problems/approximate-search/README.md)
- [Toggle Doors](../../problems/toggle-doors/README.md)
- [Mean Bit Length](../../problems/mean-bit-length/README.md)
