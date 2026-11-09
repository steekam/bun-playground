# Depth-first search and components

## Use it when

You need to explore everything reachable from a node, count regions, validate a
structure, or compute a recursive property. Use DFS on a graph, tree, or grid.

## Invariant

Once DFS marks a vertex, every path from the current component that reaches that
vertex has been accounted for. A visited vertex is never expanded twice.

## Shape

```js
function visit(node) {
  if (visited.has(node)) return;
  visited.add(node);
  for (const neighbor of neighbors(node)) visit(neighbor);
}
```

Use an explicit stack when recursion depth can exceed the JavaScript call stack.
For a grid, mark a cell as soon as you add it to the stack or queue.

## Complexity

`O(V + E)` for a graph. A full grid scan is `O(rows * columns)`.

## Traps

- Run a new traversal from every unvisited vertex when counting components.
- Keep graph directionality explicit.
- Do not confuse a component with a shortest path; use BFS for shortest unweighted paths.

## Practice

- [Largest Grid Component](../../problems/largest-grid-component/README.md)
- [Repair Broken Regions](../../problems/repair-broken-regions/README.md)
- [Valid Catan Board](../../problems/valid-catan-board/README.md)

See [CP-Algorithms: connected components](https://cp-algorithms.com/graph/search-for-connected-components.html).
