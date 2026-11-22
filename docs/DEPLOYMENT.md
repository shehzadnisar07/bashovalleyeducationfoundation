# Deployment

## Current State
**No deployment configuration, CI/CD pipeline, or hosting provider is configured yet.**

## Local Environment Baseline (Verified)
- OS: Windows
- Node.js: `v22.18.0`
- npm: `10.9.3`
- Git: `2.48.1.windows.1`

## Planned Deployment Decisions (`TBD`)
- **Hosting Platform:** `TBD` (candidates: Vercel, Cloudflare Pages, Netlify).
- **Custom Domain & DNS:** `TBD` (HTTPS/TLS enforced).
- **Environment Variables:** `TBD` (e.g., contact email provider keys, analytics ID — stored only in host secret manager, never in Git).
- **CI/CD Pipeline:** `TBD` (run lint, typecheck, tests, and `next build` on pull requests before production deploy).

## Release Process
All production releases must follow `.agents/skills/production-releases/SKILL.md`.
