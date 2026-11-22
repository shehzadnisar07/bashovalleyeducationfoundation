# ADR-0002: Proposed Frontend Stack & Visual Design System

- **Status:** Accepted (Option A — Static/Config-Driven Public Site v1)
- **Date:** 2026-11-22

## Context
BVEF needs a fast, SEO-friendly, mobile-responsive public website to present its School-Partnership Program, photo gallery, and support pathways to donors and partners. The user selected Next.js + Tailwind CSS and provided a reference layout with a deep navy blue and warm gold palette.

## Decision (Proposed)
1. **Stack:** Next.js (App Router) + TypeScript + Tailwind CSS.
2. **Configuration:** Centralize deferred details (contact info, Trust registration number, donation details, domain) in `src/config/site.ts`.
3. **Design System:** Adopt the deep navy (`#022046`, `#0B223D`, `#141E2A`), warm gold (`#F3AE2C`, `#D79D2F`), and ivory (`#FCF8F7`) palette documented in `docs/DESIGN_SYSTEM.md`.

## Consequences
- No backend or database is required for the initial informational launch unless dynamic forms/CMS are later approved.
- This ADR will move from **Proposed** to **Accepted** once Phase 1 scaffolding is initialized and verified.
