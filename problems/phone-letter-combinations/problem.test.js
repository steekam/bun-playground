import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { validate } from "./problem.js";

test.each(cases)("phone combinations: %j -> %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});
