import { existsSync } from "node:fs";
import { resolve } from "node:path";

const problemName = Bun.argv[2];

if (!problemName) {
  console.error("Usage: bun test/runner.js <problem-name>");
  process.exit(1);
}

const problemDirectory = resolve(import.meta.dir, "..", "problems", problemName);
const problemPath = resolve(problemDirectory, "problem.js");
const casesPath = resolve(problemDirectory, "cases.js");

if (!existsSync(problemPath) || !existsSync(casesPath)) {
  console.error(`Problem not found or incomplete: ${problemName}`);
  console.error("Expected problem.js and cases.js in problems/<problem-name>/");
  process.exit(1);
}

const [{ cases }, { validate }] = await Promise.all([
  import(casesPath),
  import(problemPath),
]);

if (!Array.isArray(cases) || typeof validate !== "function") {
  console.error("A problem must export `cases` and `validate`.");
  process.exit(1);
}

let passed = 0;
let failed = 0;

for (const [input, expected] of cases) {
  const actual = validate(input);
  const ok = actual === expected;

  if (ok) {
    passed += 1;
    console.log(`✓ ${input} -> ${actual}`);
  } else {
    failed += 1;
    console.error(`✗ ${input} -> expected ${expected}, received ${actual}`);
  }
}

console.log(`\n${problemName}: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
