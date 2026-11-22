# UI/UX Design System

## Overview
The visual system for BVEF is anchored in a **deep navy blue + warm gold** educational institution palette, extracted from the user-supplied reference layout and aligned with the BVEF shield emblem in `assets/source/About-Us.pdf`.

## Canonical Color & Typography Tokens
All exact hex tokens (`#022046`, `#0B223D`, `#141E2A`, `#1B2330`, `#72809A`, `#F3AE2C`, `#D79D2F`, `#FEF6E6`, `#FDFDFB`, `#FCF8F7`, `#E6E2DC`, `#334155`), font pairing (editorial serif display + geometric sans-serif body), and section rhythm are maintained in [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

## UX & Accessibility Principles
- **Clarity for Donors & Community:** Lead with concrete facts (8,800–11,800 ft altitude, 1 active partner school, 16 villages waiting) and tangible support options.
- **Contrast & Legibility:** Maintain WCAG AA contrast across dark navy banners (`#141E2A` / `#022046` with white/gold text) and light ivory/white sections (`#FCF8F7` / `#FDFDFB` with `#0B223D` / `#334155` text).
- **Responsive Mobile-First Layout:** All navigation, stat strips, program cards, and photo galleries must adapt cleanly to mobile, tablet, and desktop viewports.
- **Image Optimization:** Serve all photography from `public/images/` via Next.js `<Image>` with descriptive `alt` text.
