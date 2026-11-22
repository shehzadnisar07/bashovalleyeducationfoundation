---
trigger: model_decision
description: Apply when creating or modifying frontend pages, UI components, styles, layouts, or client-side interactions.
---

# Frontend Development Rules

- Follow the color tokens, typography pairing, and section rhythm in `docs/DESIGN_SYSTEM.md` and `docs/UI_UX_DESIGN_SYSTEM.md`.
- Build mobile-first, responsive layouts with semantic HTML (`header`, `nav`, `main`, `section`, `footer`) and accessible interactive controls (keyboard navigation, `aria-label`, visible focus states).
- Use `next/image` (once Next.js is initialized) with descriptive `alt` text for all photos from `public/images/`.
- Avoid `dangerouslySetInnerHTML` and inline unescaped user input.
- Do not hardcode placeholder contact details, registration numbers, or bank details directly inside JSX; read them from `src/config/site.ts`.
