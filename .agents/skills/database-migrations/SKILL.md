---
name: database-migrations
description: >-
  Use this skill whenever a database is introduced or when planning, creating,
  testing, or applying database schema migrations.
---

# Database Migrations Workflow

## Steps
1. **Verify Approval & Design:** Check `docs/DATABASE_DESIGN.md` and `.agents/rules/database-changes.md`. Do not introduce a database without user approval and an ADR in `docs/decisions/`.
2. **Design Reversible Migration:** Author a versioned, reversible migration script using the approved migration tool.
3. **Review PII & Security:** Confirm no sensitive data is exposed and queries use parameterization.
4. **Test Locally:** Apply the migration to a local/staging database, verify rollback, and run tests.
5. **Update Documentation:** Update `docs/DATABASE_DESIGN.md` and `CHANGELOG.md` before merging.
