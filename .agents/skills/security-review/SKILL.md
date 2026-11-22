---
name: security-review
description: >-
  Use this skill before and after implementing sensitive features (forms, APIs,
  authentication, file uploads, donations, or deployment config) to audit security.
---

# Security Review Workflow

## Steps
1. **Check Baseline:** Read `docs/SECURITY.md` and `.agents/rules/application-security.md`.
2. **Secrets Audit:** Verify no `.env` files, API keys, passwords, or private tokens are present in tracked files or client bundles.
3. **Input & Output Audit:** Confirm server-side schema validation on all inputs, safe rendering (no unescaped HTML), and parameterized queries if a database is used.
4. **Auth & Access Audit:** Verify server-side authorization on all protected routes (if auth exists).
5. **Dependencies & Headers:** Check for known vulnerable packages (`npm audit`) and verify security headers in `docs/SECURITY.md`.
6. **Document Findings:** Record any security-sensitive decisions in `docs/SECURITY.md` and an ADR if architectural.
