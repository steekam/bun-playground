# Heap and priority queue

## Use it when

You repeatedly need the smallest or largest active item while other items enter
or leave. A heap keeps the best frontier without fully sorting the remaining data.

## Invariant

The heap root is the highest-priority active item. Every child has no higher
priority than its parent for a min-heap, or no lower priority for a max-heap.

## Shape

JavaScript has no built-in heap. Use a small heap implementation or a tested
priority-queue utility; do not replace a heap with repeated `sort()` inside a loop.

```text
push(item)       O(log n)
peek()           O(1)
pop()            O(log n)
```

## Complexity

Building a heap is `O(n)` with bottom-up heapify. A sequence of `n` inserts and
pops is usually `O(n log n)`.

## Traps

- Choose min versus max from the next required decision.
- Store a tie-breaker when equal priorities need deterministic behavior.
- A heap gives the best current item, not a globally sorted list.

## Practice

- [Pack Suitcases](../../problems/minimum-bins/README.md)
- [Deck, Shuffle, and Draw](../../problems/deck-shuffle-and-draw/README.md)
- [Meal-Prep Scheduling](../../problems/meal-prep-scheduling/README.md)

See [MIT 6.006 lecture 4: heaps and heap sort](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-fall-2011/video_galleries/lecture-videos/).
