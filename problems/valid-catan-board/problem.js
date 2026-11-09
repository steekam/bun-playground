const rowLengths = [3, 4, 5, 4, 3];
const tokens = ["2", "C", "3", "3", "4", "4", "5", "5", "6", "6", "8", "8", "9", "9", "A", "A", "B", "B", "."];

function parse(board) {
  return board.map((row) => row.trim().split(/\s+/));
}

function hexes(rows) {
  return rows.flatMap((row, y) =>
    row.map((symbol, index) => ({ symbol, x: 2 * index + (5 - row.length), y })),
  );
}

function touching(a, b) {
  const dx = Math.abs(a.x - b.x);
  const dy = Math.abs(a.y - b.y);
  return (dy === 0 && dx === 2) || (dy === 1 && dx === 1);
}

function validate(board) {
  const rows = parse(board);
  if (rows.length !== rowLengths.length || rows.some((row, index) => row.length !== rowLengths[index])) return false;

  const placed = hexes(rows);
  if (placed.map(({ symbol }) => symbol).sort().join("") !== [...tokens].sort().join("")) return false;

  const red = placed.filter(({ symbol }) => symbol === "6" || symbol === "8");
  return red.every((a, index) => red.slice(index + 1).every((b) => !touching(a, b)));
}

function generateBoard(random = Math.random) {
  for (;;) {
    const shuffled = [...tokens];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const swap = Math.floor(random() * (index + 1));
      [shuffled[index], shuffled[swap]] = [shuffled[swap], shuffled[index]];
    }
    let offset = 0;
    const board = rowLengths.map((length) => shuffled.slice(offset, (offset += length)).join(" "));
    if (validate(board)) return board;
  }
}

export { generateBoard, validate };
