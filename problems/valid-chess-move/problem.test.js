import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { validate } from "./problem.js";

test.each(cases)("valid chess move: %j -> %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});
