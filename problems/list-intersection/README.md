# List Intersection

> Given two arrays A and B, return the indices at which the two arrays intersect. If
> the two arrays have no intersection at all, return `null`. Extra credit: how would
> you change your code if they were linked lists instead of arrays, if the input
> were the two head nodes, and you returned the intersection node?

```js
const listA = [1, 4, 5, 6];
const listB = [2, 3, 4, 5, 6];
findIntersection(listA, listB); // [1, 2]
```

Input is `[listA, listB]`. Reading of the example: the lists share a tail, so return
the index in each array where that shared tail starts.

Extra credit: `findIntersectionNode(headA, headB)` aligns the two lists by length,
then walks both together comparing node identity, not values.

Source: Cassidoo #258 (https://cassidoo.co/newsletter/2022-07-24/). Fidelity: faithful.
Pattern: shared-tail detection and reference identity.
