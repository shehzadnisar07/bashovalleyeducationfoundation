# Changelog

All notable changes to the **Basho Valley Education Foundation (BVEF)** project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [Unreleased]

### Changed
- **Full Digital Experience Transformation (`feat/digital-experience-redesign`):**
  - Established the *Himalayan Editorial Institutionalism* design system anchored on required primary brand color `#0E2243` (`--color-brand-primary` / `--color-navy-950`) and `bg-surface-ivory` (`#FCF8F7`), accented with Marigold Ochre (`#C98A2C`) and Glacial Sind (`#2B5B6C`) in `src/app/globals.css`.
  - Upgraded typography to `Newsreader` (editorial serif) and `DM Sans` (geometric sans with tabular numerals) in `src/app/layout.tsx`, plus Open Graph and Twitter metadata.
  - Redesigned all 6 routes (`/`, `/about`, `/program`, `/gallery`, `/support`, `/contact`) with asymmetric editorial layouts, unified button/frame geometry, and rich factual narrative from `assets/source/About-Us.pdf` (including Point 09 dual administrative/academic accountability).
  - Audited and corrected all 28 documentary photo captions and portrait focal framing (`object-top`) in `src/data/gallery.ts`; replaced camping-meadow hero imagery with authentic Basho Valley village, morning assembly, and River Sind suspension bridge photography in `HeroSlideshow.tsx`.
  - Upgraded `PhotoGallery.tsx` lightbox with `ArrowLeft`/`ArrowRight`/`Escape` keyboard navigation and eager image loading.
  - Upgraded `ContactForm.tsx` with `?topic=` query-parameter pre-selection from `/support` and `/program` CTAs while maintaining honest `mailto:` draft handoff.
  - Updated `PageHero` to warm editorial linen (`bg-surface-linen` `#F3EDE6`) with deep `#0E2243` `Newsreader` typography and framed documentary photography for lighter, cleaner inner-page rhythm across `/about`, `/program`, `/gallery`, `/support`, and `/contact`.
  - Updated `SiteFooter` to use the exact primary brand navy (`#0E2243` / `bg-brand-primary`) and refined `SupportBanner` to warm linen (`bg-surface-linen`) so every page transitions cleanly from light editorial surfaces into the `#0E2243` footer without stacked dark bands.
  - Replaced raw public `"TBD"` badges/buttons with dignified config-driven pre-launch institutional framing via `src/config/site.ts`.
- Added shared UI architecture (`PageHero.tsx`, `ValleyFootprint.tsx`, `SupportBanner.tsx`, `Icons.tsx`) and SEO routes (`src/app/sitemap.ts`, `src/app/robots.ts`).

- Redesigned Home (`/`) hero and section rhythm following `iqrafund.org` layout patterns with Deep Navy (`#022046`), Warm Gold (`#F3AE2C`), and Ivory (`#FCF8F7`): 3-photo village slideshow (`HeroSlideshow.tsx`) with neutral dark scrim, angled `#022046` mission/stats band, split appeal + 3-card "Why" grid, 9-point program spotlight, and dark field gallery showcase.
- Converted BVEF shield emblem to transparent SVGs (`public/images/logo.svg` and `public/images/logo-white.svg`) paired with the capitalized `Basho Valley` / `Basho Valley Education Foundation` wordmark lockup in `SiteHeader` and `SiteFooter`.
- Updated `SiteHeader` for mobile-first responsiveness: transparent overlay header attached to the Home hero, clean borderless 3-bar hamburger menu on mobile, and solid sticky navbar on inner pages.

### Added
- Official BVEF shield logo (`public/images/logo.png`) integrated in `SiteHeader` and `SiteFooter`, with deep navy (`#022046`, `--color-navy-950`) as the main primary brand color alongside warm gold (`#F3AE2C` / `#D79D2F`).
- Phase 3 core pages & interactive components:
  - Structured data modules in `src/data/gallery.ts` (28 categorized photos across 9 categories) and `src/data/program.ts` (9-point School-Partnership model and Digital Classroom Kit).
  - Home (`src/app/page.tsx`), About Us (`src/app/about/page.tsx`), Program (`src/app/program/page.tsx`), Gallery (`src/app/gallery/page.tsx`), Support (`src/app/support/page.tsx`), and Contact (`src/app/contact/page.tsx`).
  - Interactive `PhotoGallery` (`src/components/gallery/PhotoGallery.tsx`) with category filter pills and native modal `<dialog>` lightbox.
  - Accessible `ContactForm` (`src/components/contact/ContactForm.tsx`) with `:user-invalid` post-interaction validation, `aria-invalid` syncing, and `mailto:` fallback.
- Phase 2 design system & shared layout:
  - Navy/Gold color tokens (`#022046`, `#0B223D`, `#141E2A`, `#1B2330`, `#72809A`, `#F3AE2C`, `#D79D2F`, `#FEF6E6`, `#FDFDFB`, `#FCF8F7`, `#E6E2DC`, `#334155`) and responsive navigation styles in `src/app/globals.css`.
  - `Playfair Display` (serif) and `Plus Jakarta Sans` (sans-serif) typography via `next/font/google` and skip-to-content link in `src/app/layout.tsx`.
  - Responsive `SiteHeader` (`src/components/layout/SiteHeader.tsx`) with top utility bar, `ResizeObserver`-based adaptive inline/popover navigation, and `aria-current="page"` active indicator.
  - Responsive `SiteFooter` (`src/components/layout/SiteFooter.tsx`) reading deferred Trust/contact details from `src/config/site.ts`.
  - Branded Phase 2 home shell in `src/app/page.tsx`.
- Phase 1 scaffolding: Next.js `16.4.6` (App Router), React `19.3.0`, TypeScript, Tailwind CSS `4.3.3`, ESLint.
- Centralized site configuration in `src/config/site.ts` with `TBD` placeholders for deferred production details.
- Vector logo `public/images/logo.svg` and 28 categorized photos copied to `public/images/`.
- Root documentation: `AGENTS.md`, `README.md`, `CHANGELOG.md`, `CONTRIBUTING.md`.
- Technical documentation suite in `docs/` (`PROJECT_OVERVIEW.md`, `REQUIREMENTS.md`, `SYSTEM_ARCHITECTURE.md`, `DATABASE_DESIGN.md`, `API_DOCUMENTATION.md`, `AUTHENTICATION_AUTHORIZATION.md`, `SECURITY.md`, `UI_UX_DESIGN_SYSTEM.md`, `TESTING_STRATEGY.md`, `DEPLOYMENT.md`, `BACKUP_DISASTER_RECOVERY.md`, `PROJECT_STATUS.md`).
- Architecture Decision Records in `docs/decisions/` (`ADR-0001`, `ADR-0002`).
- Antigravity workspace rules in `.agents/rules/` and reusable skills in `.agents/skills/`.
- Initial asset organization: moved `About-Us.pdf` and `Photo-Collection-for-AF.pptx` to `assets/source/`, extracted 25 categorized photos and 3 village photos to `assets/photos/`.
- Extracted initial blue/gold color palette from reference image into `docs/DESIGN_SYSTEM.md`.
