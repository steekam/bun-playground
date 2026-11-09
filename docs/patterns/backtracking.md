# Backtracking

## Use it when

The problem asks for all valid combinations, arrangements, or paths and each
choice narrows the remaining choices. Backtracking is depth-first search over a
decision tree.

## Invariant

The current path is a valid partial solution. Every recursive call owns the
choices added after its caller and removes them before returning.

## Shape

```js
function search(start, path) {
  if (complete(path)) answers.push([...path]);

  for (const choice of choices(start, path)) {
    path.push(choice);
    search(next(start, choice), path);
    path.pop();
  }
}
```

Prune as soon as the partial path cannot lead to a valid answer. Sort choices if
that lets you skip duplicates or stop early.

## Complexity

Often exponential. State the size of the decision tree and the cost of copying
each answer. The point of pruning is to reduce explored states, not to change
the worst-case class without proof.

## Traps

- Copy an answer before mutating the shared path.
- Undo every mutation on every return path.
- Decide whether duplicate values produce duplicate answers.

## Practice

- [Phone-Letter Combinations](../../problems/phone-letter-combinations/README.md)
- [Pack Suitcases](../../problems/pack-suitcases/README.md)
- [All Shortest Grid Paths](../../problems/all-shortest-grid-paths/README.md)
