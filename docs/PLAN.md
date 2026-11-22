# Basho Valley Education Foundation (BVEF) — Website Plan

## 1. Goal & Tech Stack
Build a production-ready, fast, SEO-friendly, and donor-trustworthy website for **Basho Valley Education Foundation (BVEF)**.
- **Framework:** Next.js (App Router) + TypeScript
- **Styling:** Tailwind CSS
- **Color Direction:** Centered around **Blue** (inspired by the BVEF shield emblem and the user's upcoming reference website)
- **Centralized Config:** `src/config/site.ts` will hold all deferred details (contact info, Trust registration number, donation/bank details, Trustees list, domain) as clean placeholders so they can be updated in one place later.

---

## 2. Planned Site Architecture
1. **Home (`/`)**
   - Full-bleed hero with Basho Valley / school photography, mission headline, and primary CTAs
   - Valley & Impact Snapshot (8,800–11,800 ft altitude, ~68 mi from K2, 17 villages, 1 active partner school, 16 villages waiting)
   - School-Partnership Program overview (Three-Teacher STEM Team, offline digital classrooms, local female teachers)
   - Curated photo highlights linking to `/gallery`
   - Classroom sponsorship / support CTA
2. **About Us (`/about`)**
   - Basho Valley story (geography, River Sind suspension bridge near Skardu, 20 km track, living conditions)
   - The education gap in local primary/middle schools
   - About BVEF (duly registered charitable Trust, 7 Trustees, community-led model)
3. **School-Partnership Program (`/program`)**
   - Complete 9-point operational model (Education Department MOU, STEM focus, existing buildings, offline laptop resources, local female staff, exam-linked bonus incentives, monitoring & evaluation, classroom hardware kit, BVEF accountability)
   - Current Projects & Expansion roadmap (1 school supported, 2nd planned this year, 16 remaining villages waiting)
4. **Photo Gallery (`/gallery`)**
   - Categorized gallery with filter tabs and accessible lightbox viewer
   - Categories from `Photo Collection for AF.pptx` + additional village photos
5. **Support / Donate (`/support`)**
   - Concrete funding needs (Three-Teacher Team sponsorship, Digital Classroom Kit: TV, 2 laptops, speakers, solar + battery)
   - Placeholder section for bank/payment details + inquiry option
6. **Contact (`/contact`)**
   - Partnership / donor / volunteer inquiry form
   - Placeholder contact details card

---

## 3. Execution Phases
- **Phase 1 — Setup & Assets:** Initialize Next.js + Tailwind CSS, extract 25 photos from `Photo Collection for AF.pptx`, organize additional village photos, and create vector SVG logo (`logo.svg`).
- **Phase 2 — Design System & Layout:** Apply blue-centered palette (guided by reference website), typography, responsive Header/Navbar, and Footer.
- **Phase 3 — Pages & Features:** Build all 6 core pages, `src/config/site.ts`, and interactive gallery.
- **Phase 4 — Production Polish:** SEO metadata, Open Graph tags, `sitemap.xml`, `robots.txt`, image optimization, accessibility, `npm run lint`, and `npm run build`.
- **Phase 5 — Launch:** Fill in contact info, registration number, donation details, domain, and deploy (Vercel / Cloudflare Pages / Netlify).
