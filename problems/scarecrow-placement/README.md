# Scarecrow Placement

There are `length` positions in a field. A scarecrow covers its placement
position and `radius` positions on either side. Return the minimum scarecrows
needed to cover every position.

Pattern: greedily place the next scarecrow as far right as possible while still
covering the leftmost uncovered position.
