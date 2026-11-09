# Valid Chess Move

> Given an 8x8 chess board, a piece, and a move coordinate, determine if the given
> move is a valid chess move. Capital letters represent white pieces, lowercase
> letters represent black pieces, where `P` is a white pawn, `n` is a black knight,
> `K` is a white king, and so on. A `~` represents a blank square. You can choose to
> do absolute coordinates or relative ones, and decide how you want to differentiate
> between duplicate pieces.

```js
isValidMove(board, 'R', [0, 0]); // false: a rook only moves horizontally and vertically
isValidMove(board, 'k', [0, 1]); // true: a king moves one square in any direction
isValidMove(board, 'Q', [5, 7]); // false: the queen is not on the board
```

Input is `[board, piece, [row, column]]`, with a 0-indexed `[row, column]` from the
top-left. The board is a string of 8 lines.

Assumptions: if several pieces share a letter, the move is valid when any of them
can make it. Moves are geometry-only: movement rules, blocking, and captures of
the opposite colour, but no check detection, castling, en passant, or promotion.
White pawns move up the board from row 6; black pawns move down from row 1.

Source: Cassidoo #276 (https://cassidoo.co/newsletter/2022-11-27/). Fidelity: faithful.
Pattern: piece-by-piece rule tables, ray scanning.
