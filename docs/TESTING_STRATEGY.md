# Testing Strategy

## Current State
**No testing framework or test suite is installed yet**, as the application codebase has not been initialized.

## Planned Quality Gates (Upon Phase 1 Initialization)
1. **Static Analysis & Types:**
   - ESLint (`npm run lint`)
   - TypeScript typecheck (`npx tsc --noEmit`)
2. **Production Build Verification:**
   - `npm run build` must succeed with zero errors and no broken routes or missing assets.
3. **Unit & Component Tests (`TBD`):**
   - Framework selection (`TBD` — e.g., Vitest + React Testing Library) for testing config validation, gallery filtering, and form validation logic.
4. **End-to-End & Visual Verification (`TBD`):**
   - Framework selection (`TBD` — e.g., Playwright) for critical user journeys: navigation across all pages, gallery category filtering/lightbox, and contact form validation.
   - Manual/automated responsive checks (mobile + desktop) and accessibility checks (keyboard navigation, `alt` tags, contrast).

## Operating Rule
Per [AGENTS.md](../AGENTS.md), never claim tests pass without running them after the final edit and observing all reported cases pass.
