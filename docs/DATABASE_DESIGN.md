# Database Design

## Current State
**No database exists in this repository.** There is no ORM, migration tool, SQL schema, or data store configured.

## Future Considerations (TBD)
If BVEF later introduces dynamic features (such as an admin CMS for news/events, persisted contact inquiries, or donor/pledge tracking), this document must be updated **before** creating any schema or migrations:
- Engine selection (`TBD` — e.g., PostgreSQL)
- ORM / migration tool (`TBD` — e.g., Prisma or Drizzle)
- Entity-Relationship Diagram, tables, indexes, and PII retention rules

## Governance
All future schema changes must follow `.agents/rules/database-changes.md` and `.agents/skills/database-migrations/SKILL.md`, and be recorded as an ADR in `docs/decisions/`.
