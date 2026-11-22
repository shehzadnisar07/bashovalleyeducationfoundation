---
name: production-releases
description: >-
  Use this skill when preparing, verifying, and executing a production release
  or deployment of the BVEF website.
---

# Production Releases Workflow

## Steps
1. **Pre-Release Checklist:** Confirm `docs/PROJECT_STATUS.md`, `CHANGELOG.md`, and `docs/DEPLOYMENT.md` are up to date, and all deferred placeholders in `src/config/site.ts` intended for launch are filled.
2. **Quality Gates:** Run `npm run lint`, `npx tsc --noEmit`, automated tests, and `npm run build` cleanly.
3. **Security & Backup Check:** Run the `security-review` workflow and confirm backup/rollback readiness per `docs/BACKUP_DISASTER_RECOVERY.md`.
4. **Deploy & Smoke Test:** Deploy to the configured hosting platform (`TBD`) and verify live routes, images, HTTPS, and metadata.
5. **Record Release:** Tag the release in Git and update `CHANGELOG.md` and `docs/PROJECT_STATUS.md`.
