# Stack and monotonic stack

## Use it when

The most recent unmatched item matters, or you need the nearest greater or
smaller item. A monotonic stack removes entries that can never become the answer
after a better boundary arrives.

## Invariant

The stack contains unresolved candidates in the order the future can still use
them. In a monotonic stack, their values remain increasing or decreasing.

## Shape

```js
for (let index = 0; index <= values.length; index += 1) {
  const value = index === values.length ? sentinel : values[index];
  while (stack.length && shouldResolve(values[stack.at(-1)], value)) {
    resolve(stack.pop(), index);
  }
  stack.push(index);
}
```

## Complexity

`O(n)` time: each index enters and leaves once. Space is `O(n)`.

## Traps

- Decide whether equal values stay or are popped.
- Add a sentinel or a cleanup pass so every candidate is resolved.
- Store indexes when width, distance, or original position matters.

## Practice

- [Longest Valid Parentheses](../../problems/longest-valid-parentheses/README.md)
- [Largest Rectangle of Ones](../../problems/largest-rectangle-of-ones/README.md)
- [Binary Tree and Printer](../../problems/binary-tree-and-printer/README.md)
