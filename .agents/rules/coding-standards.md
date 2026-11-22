---
trigger: always_on
---

# Coding Standards

- Inspect existing files and documentation (`docs/PROJECT_STATUS.md`, `docs/SYSTEM_ARCHITECTURE.md`) before writing new code.
- Keep functions small, single-purpose, and shallowly nested; use early returns.
- Never duplicate logic across components or utilities; extract shared helpers.
- Prefer TypeScript strict types; avoid `any` unless explicitly justified.
- Preserve existing comments, docstrings, and `assets/source/` files unless explicitly asked to change them.
- Keep deferred production details (contact info, registration number, donation details) in centralized config (`src/config/site.ts` once created) rather than hardcoding across pages.
- Run `npm run lint`, typechecking, and build/test commands after edits before reporting completion.
