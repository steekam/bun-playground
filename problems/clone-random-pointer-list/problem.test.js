import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { build, cloneList, validate } from "./problem.js";

test.each(cases)("clone list: %j -> %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});

test("the clone shares no node with the original", () => {
  const original = build([
    { val: 1, next: 1, random: 1 },
    { val: 2, next: null, random: 0 },
  ]);
  const clone = cloneList(original);

  const originals = new Set([original, original.next]);
  for (let node = clone; node; node = node.next) {
    expect(originals.has(node)).toBe(false);
    expect(originals.has(node.random)).toBe(false);
  }
  expect(clone.random).toBe(clone.next);
  expect(clone.next.random).toBe(clone);
});
