# Hashing and counting

## Use it when

The problem asks whether something has appeared, how often it appears, or which
earlier item completes the current item. A set answers membership. A map stores
counts, indexes, or the best value seen for a key.

## Invariant

After processing position `i`, the table contains exactly the information needed
about positions before `i`.

## Shape

```js
const seen = new Map();

for (let index = 0; index < values.length; index += 1) {
  const key = makeKey(values[index]);
  if (seen.has(key)) return [seen.get(key), index];
  seen.set(key, index);
}
```

For grouping, make a canonical key. For anagram groups, sorted letters or a
26-count vector can serve as the key.

## Complexity

Expected `O(n)` time and `O(n)` space with a hash table. State that the time
bound assumes the usual average-case hash-table behavior.

## Traps

- Store before or after the lookup according to whether an item can match itself.
- Count duplicate values explicitly.
- Make the key preserve every distinction the problem cares about.
- Do not use a set when you need multiplicity or an index.

## Practice

- [Majority Element](../../problems/majority-element/README.md)
- [Longest Consecutive Sequence](../../problems/longest-consecutive-sequence/README.md)
- [Group Anagrams](../../problems/group-anagrams/README.md)
- [Hashmap From Scratch](../../problems/hashmap-from-scratch/README.md)
