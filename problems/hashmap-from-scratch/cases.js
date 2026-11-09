const cases = [
  [{ operations: [["set", "a", 1], ["get", "a"], ["get", "b"], ["delete", "a"], ["get", "a"]] }, [1, null, true, null]],
  [{ operations: [["set", "x", 1], ["set", "x", 2], ["get", "x"]] }, [2]],
];

export { cases };
