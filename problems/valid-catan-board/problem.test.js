import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { generateBoard, validate } from "./problem.js";

test.each(cases)("catan board: %j -> %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});

test("a 6 touching an 8 is rejected", () => {
  expect(validate([" 6 8 A", " 5 3 C 4", "9 4 B 5 3", " 2 B 9 3", " A . 8"])).toBe(false);
});

test("generated boards are valid", () => {
  for (let run = 0; run < 200; run += 1) {
    expect(validate(generateBoard())).toBe(true);
  }
});
