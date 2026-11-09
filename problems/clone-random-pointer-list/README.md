# Clone Random-Pointer List

The input is an array representation of a linked list. Each record has
`{ value, next, random }`, where pointers are indexes or `null`. Return a deep
clone with the same values and pointer indexes. The clone must not reuse any
input record objects.

Example: `[{ value: 7, next: null, random: 0 }]` returns an equivalent,
independent record.

Pattern: copy identity-rich object graphs in two passes: create every node,
then wire its references.
