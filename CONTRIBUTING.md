# Contributing Guidelines

Thank you for contributing to the **Basho Valley Education Foundation (BVEF)** project.

## Before You Start
1. Read [AGENTS.md](./AGENTS.md) and [docs/PROJECT_STATUS.md](./docs/PROJECT_STATUS.md).
2. Review [docs/REQUIREMENTS.md](./docs/REQUIREMENTS.md) and [docs/SYSTEM_ARCHITECTURE.md](./docs/SYSTEM_ARCHITECTURE.md).
3. Follow the rules in `.agents/rules/` relevant to your change.

## Development Workflow
1. **Plan First:** Confirm requirements and check if an ADR in `docs/decisions/` is needed for architectural changes.
2. **Keep Changes Scoped:** Make focused, minimal changes. Never overwrite existing functionality or `assets/source/` files without approval.
3. **Verify Before Committing:** Run linting, typechecking, tests, and production build checks (see [docs/TESTING_STRATEGY.md](./docs/TESTING_STRATEGY.md)) once the application is initialized.
4. **Update Documentation:** Update `CHANGELOG.md`, `docs/PROJECT_STATUS.md`, and any affected technical docs in `docs/`.

## Security & Privacy
- Never commit `.env` files, API keys, passwords, database credentials, or private donor/student data.
- Follow [docs/SECURITY.md](./docs/SECURITY.md) for all input validation, API, and deployment changes.
