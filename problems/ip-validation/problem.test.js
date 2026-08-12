import { describe, expect, test } from "bun:test";
import { isIPv4, isIPv6, validate } from "./problem.js";
import { cases } from "./cases.js";

describe("IP validation", () => {
  test.each(cases)("classifies %s as %s", (address, expected) => {
    expect(validate(address)).toBe(expected);
  });

  test("keeps the lower-level validators independently testable", () => {
    expect(isIPv4("127.0.0.1")).toBe(true);
    expect(isIPv4("127.0.0.01")).toBe(false);
    expect(isIPv6("fe80::1")).toBe(true);
    expect(isIPv6("fe80:::1")).toBe(false);
  });
});
