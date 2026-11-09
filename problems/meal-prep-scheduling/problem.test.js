import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { validate } from "./problem.js";

test.each(cases)("meal prep scheduling: %j -> %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});
