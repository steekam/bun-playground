# Breadth-first search

## Use it when

You need reachability or a shortest path in an unweighted graph. The same idea
works on grids: a cell is a vertex and each legal move is an edge.

## Invariant

The queue is processed in nondecreasing distance from the source. When you first
visit a vertex, you have reached it by a shortest path.

## Shape

```js
const queue = [source];
const distance = new Map([[source, 0]]);

for (let head = 0; head < queue.length; head += 1) {
  const node = queue[head];
  for (const neighbor of neighbors(node)) {
    if (distance.has(neighbor)) continue;
    distance.set(neighbor, distance.get(node) + 1);
    queue.push(neighbor);
  }
}
```

Seed the queue with every source for multi-source BFS. Add parent pointers when
you need to reconstruct a path.

## Complexity

`O(V + E)` on a graph, or `O(rows * columns)` on a grid, with matching visited
space.

## Traps

- Mark visited when enqueuing, not when dequeuing.
- Use a head index; `shift()` makes a JavaScript queue unnecessarily expensive.
- BFS gives shortest edge count, not shortest weighted distance.
- Decide whether diagonal moves are legal.

## Practice

- [Fire-Station Coverage](../../problems/fire-station-coverage/README.md)
- [Rotting Oranges](../../problems/rotting-oranges/README.md)
- [All Shortest Grid Paths](../../problems/all-shortest-grid-paths/README.md)

See [CP-Algorithms: breadth-first search](https://cp-algorithms.com/graph/breadth-first-search.html).
