# Clone Random-Pointer List

> Given a linked list, such that each node contains an additional random pointer
> which could point to any node in the list, or `null`, make a deep copy of the list
> and return the head node of the new copy.

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.random = null;
  }
}
```

`cloneList(head)` takes and returns real `Node`s. For the judge runner,
`validate(records)` builds a list from `{ val, next, random }` index records, clones it,
and serializes the clone back to records. The test file checks that no cloned node (or
random pointer) is an original node.

Source: Cassidoo #256 (https://cassidoo.co/newsletter/2022-07-10/). Fidelity: faithful.
Pattern: identity-rich object graphs; stretch goal is `O(1)` extra space by interleaving
copies.
