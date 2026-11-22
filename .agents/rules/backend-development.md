---
trigger: model_decision
description: Apply when creating or modifying backend routes, API endpoints, server actions, webhooks, or external service integrations.
---

# Backend Development Rules

- Check `docs/API_DOCUMENTATION.md` and `docs/SYSTEM_ARCHITECTURE.md` before adding any server endpoint or external integration.
- Validate and sanitize all incoming request payloads on the server using strict schemas (e.g., Zod); reject unexpected fields.
- Return consistent, structured JSON error responses without leaking stack traces, internal paths, or secrets.
- Protect public endpoints (e.g., contact forms) with rate limiting and abuse/spam controls.
- Document every new or modified endpoint in `docs/API_DOCUMENTATION.md`.
