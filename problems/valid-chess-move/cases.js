const board = `~~~~~~~~
~~kb~~~~
~~K~~~~~
~~~~~~~~
~~~~~~~~
~~~~~~~~
~~~~~~~~
~~~R~~~~`;

const pawns = `~~~~~~~~
p~~~~~~~
~~~~~~~~
~~~~~~~~
~~~~~~~~
~~~~~~~~
~~P~~~~~
~~~~~~~~`;

const cases = [
  [[board, "R", [0, 0]], false],
  [[board, "k", [0, 1]], true],
  [[board, "Q", [5, 7]], false],
  [[board, "R", [7, 0]], true],
  [[board, "R", [1, 3]], true],
  [[board, "R", [0, 3]], false],
  [[board, "k", [1, 3]], false],
  [[board, "K", [3, 3]], true],
  [[board, "b", [4, 0]], false],
  [[board, "b", [0, 2]], true],
  [[pawns, "P", [4, 2]], true],
  [[pawns, "P", [3, 2]], false],
  [[pawns, "p", [3, 0]], true],
  [[pawns, "p", [2, 1]], false],
  [[board, "R", [8, 3]], false],
];

export { cases };
