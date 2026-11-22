---
name: feature-development
description: >-
  Use this skill when designing, implementing, or modifying any feature in the
  BVEF repository to ensure alignment with requirements, architecture, and docs.
---

# Feature Development Workflow

## Steps
1. **Read Context:** Review `docs/PROJECT_STATUS.md`, `docs/REQUIREMENTS.md`, and `docs/SYSTEM_ARCHITECTURE.md`.
2. **Inspect Existing Code:** Search the codebase for existing components, utilities, or config (`src/config/site.ts`) before creating new files.
3. **Record Major Decisions:** If the feature introduces a new library, API, or architectural pattern, add an ADR in `docs/decisions/`.
4. **Implement Cleanly:** Follow `.agents/rules/coding-standards.md` and domain-specific rules (`frontend-development.md`, `backend-development.md`).
5. **Verify:** Run `npm run lint`, typechecking, relevant tests, and `npm run build`.
6. **Update Docs:** Update `docs/PROJECT_STATUS.md`, `CHANGELOG.md`, and any affected technical docs.
