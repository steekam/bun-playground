import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { validate } from "./problem.js";

test.each(cases)("all shortest grid paths: %j -> %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});
