---
trigger: model_decision
description: Apply when designing, creating, or modifying database schemas, ORMs, migrations, seeds, or data access queries.
---

# Database Changes Rules

- Verify `docs/DATABASE_DESIGN.md` first. Currently no database is configured; do not introduce a database without user approval and an ADR in `docs/decisions/`.
- Every schema change must be performed via versioned, reversible migrations—never ad-hoc manual edits to production tables.
- Use parameterized queries or ORM query builders only; never concatenate user input into SQL.
- Document tables, relationships, indexes, and PII retention rules in `docs/DATABASE_DESIGN.md` before running migrations.
