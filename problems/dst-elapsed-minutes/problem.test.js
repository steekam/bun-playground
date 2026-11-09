import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { validate } from "./problem.js";

test.each(cases)("dst elapsed minutes: %j -> %j", (input, expected) => {
  expect(validate(input)).toBe(expected);
});
