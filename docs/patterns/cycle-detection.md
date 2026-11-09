# Cycle detection

## Use it when

The process repeatedly applies a next-state function: a linked list, a symlink
chain, a permutation, or a deterministic simulation. A finite state space must
eventually terminate or repeat.

## Invariant

The visited set answers “have I seen this complete state?” For a linked-list-like
function, Floyd's method detects a cycle with two runners and `O(1)` space.

## Shape

```js
const seen = new Set();
let state = start;

while (!isTerminal(state)) {
  const key = encode(state);
  if (seen.has(key)) return "CYCLE";
  seen.add(key);
  state = nextState(state);
}
return state;
```

Include every variable that affects the future in `encode`. Position alone is
not enough when velocity, direction, or mode also changes.

## Complexity

Visited-state detection is `O(T)` time and `O(T)` space for `T` states. Floyd's
algorithm is `O(T)` time and `O(1)` space when the state is a single successor.

## Traps

- Detect a repeated complete state, not a repeated partial value.
- Check the terminal state before reporting a cycle.
- Confirm that the state space is finite under the problem's rules.

## Practice

- [Symlink Resolution](../../problems/symlink-resolution/README.md)
- [Circular Route](../../problems/circular-route/README.md)
- [Bouncing Logo to Target](../../problems/bouncing-logo-to-target/README.md)
