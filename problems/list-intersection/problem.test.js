import { expect, test } from "bun:test";
import { cases } from "./cases.js";
import { Node, findIntersectionNode, validate } from "./problem.js";

test.each(cases)("list intersection: %j -> %j", (input, expected) => {
  expect(validate(input)).toEqual(expected);
});

test("linked lists return the shared node", () => {
  const tail = new Node(4, new Node(5, new Node(6)));
  const headA = new Node(1, tail);
  const headB = new Node(2, new Node(3, tail));
  expect(findIntersectionNode(headA, headB)).toBe(tail);
});

test("equal values in separate nodes do not intersect", () => {
  const headA = new Node(1, new Node(2));
  const headB = new Node(1, new Node(2));
  expect(findIntersectionNode(headA, headB)).toBeNull();
});
