# Problem Sets

This playground uses one directory per coding problem. The solution, cases, and
tests are separate so a problem can be run like an online judge submission.

The extracted practice catalogue is in [cassidoo-core-10.md](cassidoo-core-10.md).
The machine-readable catalogue is `problems/registry.js`; use `bun run test:list`
to see which entries are catalogued versus materialized locally.
The registry also lists earlier non-Cassidoo exercises as local extensions.
For the algorithm ideas behind the problem sets, see the
[pattern guide](patterns/README.md).

## Directory contract

```text
problems/<problem-name>/
  problem.js        # implementation
  cases.js          # judge cases
  problem.test.js   # Bun test cases

test/runner.js      # reusable CLI runner
```

Use kebab-case for `<problem-name>`, for example `ip-validation`.

## Create a problem

1. Create the directory:

   ```bash
   mkdir -p problems/two-sum
   ```

2. Add `problem.js` with a `validate` export. The runner calls this function
   once for every input:

   ```js
   function validate(input) {
     // Implement the problem here.
     return input;
   }

   export { validate };
   ```

3. Add `cases.js` with `[input, expected]` pairs:

   ```js
   const cases = [
     [[2, 7, 11, 15], 9],
     [[3, 2, 4], 6],
   ];

   export { cases };
   ```

4. Add `problem.test.js` for focused Bun tests:

   ```js
   import { expect, test } from "bun:test";
   import { validate } from "./problem.js";

   test("finds the target pair", () => {
     expect(validate([2, 7, 11, 15])).toBe(9);
   });
   ```

## Run a problem

Run the selected cases through the reusable judge runner:

```bash
bun test/runner.js ip-validation
```

Or use the package script:

```bash
bun run test:run -- ip-validation
```

Run all Bun tests:

```bash
bun test
```

List the available practice sets:

```bash
find problems -mindepth 1 -maxdepth 1 -type d | sort
```

Run one problem's Bun test file:

```bash
bun test problems/ip-validation/problem.test.js
```

The CLI runner prints each result and exits with status `1` if any case fails.

## Update a problem

When changing an existing problem:

1. Read the specification and record assumptions in `problem.js`.
2. Add boundary cases to `cases.js` before changing the implementation.
3. Add focused behavior tests to `problem.test.js` when testing an internal
   helper or a behavior not covered by the shared cases.
4. Run both the selected runner and `bun test`.
5. Keep the public export as `validate(input)` so the generic runner continues
   to work.

Useful edge-case categories:

- empty input
- smallest and largest valid values
- malformed structure
- duplicate or missing values
- boundary transitions
- invalid characters or casing
- unusually large input, when relevant

## Add a new test case

Add a pair to `cases.js`:

```js
const cases = [
  [input, expected],
];
```

The first item is passed directly to `validate`; the second is compared with
deep strict equality. Keep cases deterministic and small enough to diagnose
from the failure output.

## Runner requirements

The generic runner expects:

```js
// problem.js
export function validate(input) {}

// cases.js
export const cases = [[input, expected]];
```

If either file is missing, or either export has the wrong shape, the runner
stops with a setup error instead of reporting misleading case failures.
