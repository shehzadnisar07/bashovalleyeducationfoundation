# System Architecture

## Current State
**No application architecture is implemented yet.** The repository currently contains only source documents (`assets/source/`), extracted images (`assets/photos/`), and documentation (`docs/`).

## Proposed Architecture (Pending Implementation — see [ADR-0002](./decisions/ADR-0002-proposed-frontend-stack-and-design-system.md))
- **Frontend Framework:** Next.js (App Router) with TypeScript and Tailwind CSS.
- **Rendering Model:** Static / Server-Rendered public pages (`/` , `/about`, `/program`, `/gallery`, `/support`, `/contact`).
- **Media Delivery:** Local optimized assets under `public/images/` served via Next.js `<Image>` optimization.
- **Configuration Layer:** `src/config/site.ts` for foundation metadata, contact placeholders, and deferred legal/donation details.

## Unimplemented / TBD Components
- **Backend / API Layer:** `TBD` (e.g., Next.js Route Handlers for contact form or donation webhooks if needed).
- **Database:** `TBD` (not required for a static informational site; required only if dynamic CMS, donor records, or admin portal are added).
- **Authentication:** `TBD` (none required for public informational pages).
- **Hosting & CDN:** `TBD` (Vercel, Cloudflare Pages, or Netlify).

## Related Documentation
- [DATABASE_DESIGN.md](./DATABASE_DESIGN.md)
- [API_DOCUMENTATION.md](./API_DOCUMENTATION.md)
- [DEPLOYMENT.md](./DEPLOYMENT.md)
