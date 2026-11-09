const isWhite = (piece) => piece === piece.toUpperCase();

function clearPath(board, from, to) {
  const rowStep = Math.sign(to[0] - from[0]);
  const columnStep = Math.sign(to[1] - from[1]);
  let row = from[0] + rowStep;
  let column = from[1] + columnStep;
  while (row !== to[0] || column !== to[1]) {
    if (board[row][column] !== "~") return false;
    row += rowStep;
    column += columnStep;
  }
  return true;
}

function canMove(board, piece, from, to) {
  const rowDelta = to[0] - from[0];
  const columnDelta = to[1] - from[1];
  const target = board[to[0]][to[1]];
  const straight = rowDelta === 0 || columnDelta === 0;
  const diagonal = Math.abs(rowDelta) === Math.abs(columnDelta);

  switch (piece.toLowerCase()) {
    case "k":
      return Math.max(Math.abs(rowDelta), Math.abs(columnDelta)) === 1;
    case "n":
      return Math.abs(rowDelta * columnDelta) === 2;
    case "r":
      return straight && clearPath(board, from, to);
    case "b":
      return diagonal && clearPath(board, from, to);
    case "q":
      return (straight || diagonal) && clearPath(board, from, to);
    case "p": {
      const forward = isWhite(piece) ? -1 : 1;
      const startRow = isWhite(piece) ? 6 : 1;
      if (columnDelta === 0) {
        if (target !== "~") return false;
        if (rowDelta === forward) return true;
        return from[0] === startRow && rowDelta === 2 * forward && clearPath(board, from, to);
      }
      return Math.abs(columnDelta) === 1 && rowDelta === forward && target !== "~";
    }
    default:
      return false;
  }
}

function validate([layout, piece, destination]) {
  const board = layout.split("\n").map((row) => row.trim()).filter(Boolean);
  const [row, column] = destination;
  if (board[row]?.[column] === undefined) return false;

  const target = board[row][column];
  if (target !== "~" && isWhite(target) === isWhite(piece)) return false;

  return board.some((line, fromRow) =>
    [...line].some(
      (square, fromColumn) =>
        square === piece &&
        !(fromRow === row && fromColumn === column) &&
        canMove(board, piece, [fromRow, fromColumn], destination),
    ),
  );
}

export { validate };
