# Items in Compartments

> Given a string that represents items as asterisks (`*`) and compartment walls as
> pipes (`|`), a start index, and an end index, return the number of items in a
> closed compartment.

```js
const str = '|**|*|*';
containedItems(str, 0, 5); // 2
containedItems(str, 0, 6); // 3
containedItems(str, 1, 7); // 1
```

Input is `[layout, start, end]` with `end` exclusive (the examples only work that
way). A compartment counts only if both of its walls are inside the range.

> Extra credit: What if you had multiple pairs of start and end indices? You can
> do it in O(n) time!

`containedItemsInRanges(layout, ranges)` does that with prefix item counts plus
nearest-wall lookups, `O(n + q)` total.

Source: Cassidoo #241 (https://cassidoo.co/newsletter/2022-03-27/). Fidelity: faithful.
Pattern: prefix preprocessing for repeated range queries.
