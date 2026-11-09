# All Shortest Grid Paths

> Given an n x m matrix where all of the units are 0s except for an 1 for "start",
> a 2 for "end", and 3s for walls, find the shortest paths that you can take to get
> from 1 to 2, while working around 3s.

```js
startToEnd([[1, 0, 0], [0, 0, 2]]);
// [['right', 'right', 'down'], ['right', 'down', 'right'], ['down', 'right', 'right']]
startToEnd([[1, 3, 0], [0, 0, 2]]);
// [['down', 'right', 'right']]
```

Return every shortest path as direction names, ordered by direction priority
`right, down, left, up`. Return `[]` when there is no start, no end, or no route.

Approach: BFS distances from the end, then walk from the start along cells whose
distance drops by one.

Source: Cassidoo #249 (https://cassidoo.co/newsletter/2022-05-22/). Fidelity: faithful.
Pattern: BFS distances plus reconstruction of every optimal path.
