# Items in Compartments

`layout` contains `|` compartment walls and `*` items. For each inclusive query
`[left, right]`, count items enclosed by the nearest walls within that range.
Return one count per query.

Example: `{ layout: "|**|*|", queries: [[0,5],[1,3],[3,5]] } -> [3,0,1]`.

Pattern: precompute prefix item counts and nearest wall positions so each query
is `O(1)` after an `O(n)` pass.
