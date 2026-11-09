import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { containedItemsInRanges, validate } from "./problem.js";

test.each(cases)("items in compartments: %j -> %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});

test("answers many ranges at once", () => {
  expect(containedItemsInRanges("|**|*|*", [[0, 5], [0, 6], [1, 7]])).toEqual([2, 3, 1]);
});
