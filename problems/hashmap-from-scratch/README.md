# Hashmap From Scratch

> Implement a hashmap from scratch without any existing libraries in your preferred
> language. A hashmap should:
> - Be empty when initialized
> - Have the function `put(int key, int value)` which inserts a `(key, value)` pair
>   into the hashmap. If the key already exists, update the corresponding value.
> - Have the function `get(int key)` which returns the value to which the specified
>   key is mapped, or `-1` if there's no mapping for the key.
> - Have the function `remove(key)` which removes the key and its value if it exists
>   in the map.

`HashMap` is separate chaining over an array of buckets, doubling when the load
factor passes 0.75. `validate(operations)` runs `["put", key, value]`,
`["get", key]` and `["remove", key]` operations and returns the result of each
`get`.

Source: Cassidoo #238 (https://cassidoo.co/newsletter/2022-03-06/). Fidelity: faithful.
Pattern: hashing, collisions, resizing, deletion.
