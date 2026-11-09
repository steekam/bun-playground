import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { HashMap, validate } from "./problem.js";

test.each(cases)("hashmap operations: %j -> %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});

test("keeps every entry across resizes and collisions", () => {
  const map = new HashMap(2);
  for (let key = 0; key < 200; key += 1) map.put(key * 7, key);
  for (let key = 0; key < 200; key += 1) expect(map.get(key * 7)).toBe(key);
  for (let key = 0; key < 200; key += 2) map.remove(key * 7);
  expect(map.size).toBe(100);
  expect(map.get(7)).toBe(1);
  expect(map.get(0)).toBe(-1);
});
