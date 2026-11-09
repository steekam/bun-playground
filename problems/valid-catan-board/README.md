# Valid Catan Board

> The Settlers of Catan board game has 18 number hexes (two each of 3, 4, 5, 6, 8,
> 9, 10, 11, and one each of 2 and 12), and one desert hex in a large hexagon
> formation. Generate a valid randomized Catan board in which 6s and 8s cannot
> touch each other.

Boards use `A B C` for 10 11 12 and `.` for the desert, in rows of `3, 4, 5, 4, 3`
hexes:

```text
 B 9 A
 5 6 C 8
6 4 B 5 3
 2 8 9 3
 A . 4
```

`generateBoard(random)` returns a board as an array of row strings (rejection
sampling over shuffles). `validate(board)` checks the shape, the token counts, and
that no `6` or `8` touches another `6` or `8`. Hex neighbours: same row and adjacent,
or in an adjacent row at half-offset.

Assumption: "6s and 8s cannot touch each other" is read as the usual Catan rule, so a
6 next to a 6 is rejected too.

Source: Cassidoo #277 (https://cassidoo.co/newsletter/2022-12-04/). Fidelity: faithful.
Pattern: constrained random generation, hex-grid adjacency.
