# AGENTS.md — Permanent AI Agent Operating Instructions

This file defines mandatory operating rules for all AI coding agents working in the **Basho Valley Education Foundation (BVEF)** repository.

## Current Repository State
As of the latest audit in [PROJECT_STATUS.md](./docs/PROJECT_STATUS.md), this repository is in the **Pre-Implementation / Documentation & Asset Preparation** phase. No application code, backend, database, APIs, authentication, or test suite exist yet.

## Mandatory Operating Rules

1. **Read Relevant Documentation First:** Before changing or creating code, read [PROJECT_OVERVIEW.md](./docs/PROJECT_OVERVIEW.md), [PROJECT_STATUS.md](./docs/PROJECT_STATUS.md), [SYSTEM_ARCHITECTURE.md](./docs/SYSTEM_ARCHITECTURE.md), and the domain-specific docs in `docs/`.
2. **Inspect Existing Implementations:** Always inspect the existing codebase and directory tree before creating new files, components, routes, or utilities. Reuse existing patterns rather than duplicating logic.
3. **Follow Established Architecture & Conventions:** Adhere to the rules in `.agents/rules/` and workflows in `.agents/skills/`. Do not introduce unapproved frameworks, databases, or architectural patterns.
4. **Keep Documentation Synchronized:** Update the relevant `docs/*.md` files and [CHANGELOG.md](./CHANGELOG.md) whenever architecture, APIs, data models, or functionality change.
5. **Update Project Status After Verified Milestones:** Update [PROJECT_STATUS.md](./docs/PROJECT_STATUS.md) (and [PROGRESS.md](./docs/PROGRESS.md) if active) only after changes are verified.
6. **Record Significant Architectural Decisions:** Document major technical choices (stack, database, auth, hosting, payment integration) as Architecture Decision Records in `docs/decisions/`.
7. **Run Relevant Tests After Modifications:** Execute linting, typechecking, build checks, and automated tests after every code change. Report exact scope and results.
8. **Review Security Implications First:** Before implementing forms, APIs, authentication, file uploads, or payment/donation flows, review [SECURITY.md](./docs/SECURITY.md) and `.agents/rules/application-security.md`. Never commit secrets, credentials, or API keys.
9. **Never Overwrite Existing Functionality Without Approval:** Do not delete, replace, or alter existing working features, source assets (`assets/source/`), or business logic without explicit user approval.
10. **Never Claim Unverified Functionality Is Complete:** Only mark tasks, features, or tests as complete after directly observing them pass in the current workspace. Mark undecided or unimplemented items as `TBD`.
