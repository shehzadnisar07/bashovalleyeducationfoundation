# BVEF Design System — Himalayan Editorial Institutionalism

This design system establishes the visual identity for **Basho Valley Education Foundation (BVEF)** around the organization's required primary brand color (**`#0E2243`**) and primary surface token (**`bg-surface-ivory` / `#FCF8F7`**).

---

## 1. Color Palette (`src/app/globals.css`)

### Primary Brand Navy
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--color-brand-primary` / `--color-navy-950` | `#0E2243` | **Primary organizational brand color** (site footer, editorial dark bands, headings, primary buttons) |
| `--color-navy-980` | `#08152B` | High-contrast ink on ochre buttons and gallery lightbox backdrop stage |
| `--color-navy-900` | `#162E57` | Dark surface containers and primary navy button hover |
| `--color-navy-850` | `#1E3A68` | Secondary navy elevation |

### Editorial Accents
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--color-ochre-500` | `#C98A2C` | Primary donor CTAs, active navigation underline, planned-school footprint marker |
| `--color-ochre-400` | `#DEA448` | High-contrast ochre accents on `#0E2243` / `#08152B` dark surfaces, button hover |
| `--color-ochre-600` | `#A86F1B` | Editorial accent text on light ivory/white surfaces |
| `--color-ochre-100` | `#FBF3E4` | Soft warm highlight surfaces |
| `--color-glacial-600` | `#2B5B6C` | Drawn from the River Sind; geographic metadata, category labels, and secondary accents |
| `--color-glacial-100` | `#EAF1F4` | Soft cool tint |

### Surfaces, Borders & Ink
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--color-surface-ivory` | `#FCF8F7` | **Primary page surface (`bg-surface-ivory`)** |
| `--color-surface-linen` | `#F3EDE6` | Inner page editorial heroes, support banner, and alternating warm tonal bands |
| `--color-surface-white` | `#FFFFFF` | High-clarity reading containers, forms, and editorial cards |
| `--color-border-subtle` | `#DDD6CE` | Architectural 1px hairlines and dividers |
| `--color-border-strong` | `#C5BCB1` | Outlined secondary buttons and section borders |
| `--color-text-primary` | `#0E2243` | Headings and emphasized copy |
| `--color-text-body` | `#2E3A4D` | Primary body copy (WCAG AAA on ivory) |
| `--color-text-muted` | `#5A677A` | Captions, metadata, and secondary labels |

---

## 2. Typography (`src/app/layout.tsx`)
- **Display / Editorial Serif:** `Newsreader` (`--font-newsreader`, normal & italic) via `next/font/google`. Unified single-color editorial headlines without cliché two-tone last-word splits.
- **UI / Body Sans:** `DM Sans` (`--font-dm-sans`) via `next/font/google` with `tabular-nums` for altitude, village footprint, and photo counters.

---

## 3. Component & Layout Principles
- **Unified Geometry:** `rounded-md` (6px) buttons and form inputs, `rounded-sm` (4px) photographic frames and editorial panels across all routes.
- **Documentary Photography:** Accurate captions verified against each photograph, `object-top` framing on student and educator portraits, and native `<dialog>` lightbox with `ArrowLeft`/`ArrowRight`/`Escape` keyboard navigation.
- **Graceful Pre-Launch Config:** Deferred organizational details (`src/config/site.ts`) render dignified pre-launch institutional notices instead of raw `"TBD"` badges while supporting one-line activation when finalized.
