---
name: testing
description: >-
  Use this skill when running or adding automated tests, linting, typechecking,
  and build verification for the BVEF project.
---

# Testing Workflow

## Steps
1. **Check Strategy:** Read `docs/TESTING_STRATEGY.md` to confirm which test runners and scripts are configured.
2. **Run Static Checks:** Execute `npm run lint` and `npx tsc --noEmit` (once the project is initialized).
3. **Run Automated Tests:** Execute the configured unit/integration/E2E test commands and verify all reported cases pass without skipped assertions.
4. **Run Production Build:** Execute `npm run build` to verify routes, types, and static assets compile cleanly.
5. **Report Accurately:** Report only directly observed command outputs and pass/fail counts; never claim unrun checks passed.
