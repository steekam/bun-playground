import { existsSync } from "node:fs";
import { resolve } from "node:path";
import { localExtensions, registry } from "../problems/registry.js";

const root = resolve(import.meta.dir, "..");
const groups = ["primary", "expansion", "optional"];

for (const tier of groups) {
  console.log(`\n${tier.toUpperCase()}`);
  for (const problem of registry.filter(({ tier: problemTier }) => problemTier === tier)) {
    const path = problem.localPath ? resolve(root, "problems", problem.localPath) : null;
    const status = path && existsSync(path) ? "local" : "catalogued";
    console.log(`${problem.issue} ${problem.slug} [${status}] — ${problem.learning}`);
  }
}

console.log("\nLOCAL EXTENSIONS");
for (const extension of localExtensions) {
  const path = resolve(root, "problems", extension.slug);
  const status = existsSync(path) ? "local" : "missing";
  console.log(`${extension.slug} [${status}] — ${extension.learning}`);
}
