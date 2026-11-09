import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { validate } from "./problem.js";

test.each(cases)("clone random-pointer list: %j -> %j", (input, expected) => {
  const result = validate(input);
  expect(result).toEqual(expected);
  expect(result).not.toBe(input);
  result.forEach((node, index) => expect(node).not.toBe(input[index]));
});
