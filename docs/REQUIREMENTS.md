# Requirements

## Status
Requirements are gathered from `assets/source/About-Us.pdf` and initial user decisions. Items not yet decided are marked `TBD`.

## Functional Requirements (Planned)
1. **Public Foundation Website**
   - **Home (`/`):** Hero with Basho Valley photography, mission statement, key valley/program metrics, photo highlights, and support CTAs.
   - **About Us (`/about`):** Basho Valley context, local school challenges, BVEF Trust background (7 Trustees).
   - **School-Partnership Program (`/program`):** 9-point operational model and expansion status (1 active school, 16 villages waiting).
   - **Photo Gallery (`/gallery`):** Categorized gallery displaying the 25 PPTX photos and 3 village photos with filtering and lightbox viewing.
   - **Support / Donate (`/support`):** Tangible sponsorship options (Three-Teacher Team, Digital Classroom Kit) and donation instructions (`TBD`).
   - **Contact (`/contact`):** Inquiry form (`TBD` backend/email handler) and foundation contact details (`TBD`).
2. **Centralized Configuration:** Deferred production details (contact info, Trust registration number, donation/bank details, domain) must be isolated in a single config module (`src/config/site.ts`, planned) for easy updates.

## Non-Functional Requirements
- **Performance:** Optimized responsive images and fast page loads for visitors on low-bandwidth connections.
- **Accessibility & Responsiveness:** Mobile-first layout, keyboard-accessible navigation and gallery, sufficient color contrast.
- **SEO:** Semantic HTML, Open Graph metadata, `sitemap.xml`, `robots.txt`.
- **Security:** No exposed secrets; validated inputs on any future forms or APIs (see [SECURITY.md](./SECURITY.md)).

## Open / TBD Requirements
- Contact email, phone/WhatsApp, physical address, social links (`TBD`).
- Trust registration number & Trustees display preference (`TBD`).
- Donation payment flow: bank transfer details vs. Stripe/PayPal/external link (`TBD`).
- Contact form submission transport (email service, serverless endpoint, or third-party form) (`TBD`).
- Admin CMS or authentication needs (`TBD` — currently none specified).
