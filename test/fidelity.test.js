import { existsSync, readFileSync } from "node:fs";
import { resolve } from "node:path";
import { expect, test } from "bun:test";
import { registry } from "../problems/registry.js";

const root = resolve(import.meta.dir, "..");
const issues = new Map(
  JSON.parse(readFileSync(resolve(root, "data/cassidoo-issues.json"), "utf8")).map((entry) => [entry.issue, entry]),
);

test.each(registry.map(({ issue, localPath }) => [issue, localPath]))("%s README cites its source", (issue, localPath) => {
  const source = issues.get(issue);
  expect(source).toBeDefined();

  const readmePath = resolve(root, "problems", localPath, "README.md");
  expect(existsSync(readmePath)).toBe(true);

  const readme = readFileSync(readmePath, "utf8");
  expect(readme).toContain(`Source: Cassidoo ${issue} (${source.url}).`);
  expect(readme).toMatch(/Fidelity: (faithful|adapted)/);
});

test("registry issue numbers are unique per slug", () => {
  const slugs = registry.map(({ slug }) => slug);
  expect(new Set(slugs).size).toBe(slugs.length);
});
