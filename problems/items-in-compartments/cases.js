const cases = [
  [{ layout: "|**|*|", queries: [[0, 5], [1, 3], [3, 5]] }, [3, 0, 1]],
  [{ layout: "***|***|", queries: [[0, 7], [0, 3]] }, [3, 0]],
  [{ layout: "||||", queries: [[0, 3]] }, [0]],
];

export { cases };
