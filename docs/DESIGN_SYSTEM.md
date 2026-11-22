# BVEF Design System (Extracted from Reference)

This design system is derived from the uploaded reference layout (`Bright Future International School`), tailored for **Basho Valley Education Foundation (BVEF)** with a deep navy blue primary palette, warm gold accents, and crisp off-white surfaces.

---

## 1. Color Palette

### Primary Blues (Main Deep Navy & Slate)
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--color-navy-950` | `#022046` | **Main primary color** (page hero headers, footer background, primary buttons & headings) |
| `--color-navy-900` | `#0B223D` | Top utility bar, dark CTA buttons, primary headings |
| `--color-navy-850` | `#141E2A` | Feature highlight strip & dark stats banner |
| `--color-navy-800` | `#1B2330` | Secondary dark banner surface & dark card accents |
| `--color-slate-500` | `#72809A` | Muted text, subtle icons, secondary metadata |

### Accent Gold / Amber
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--color-gold-500` | `#F3AE2C` | Primary CTA buttons (e.g., "Support Us", "Donate Now") |
| `--color-gold-600` | `#D79D2F` | Hover state for gold buttons, highlighted serif headline text, accent icons |
| `--color-gold-100` | `#FEF6E6` | Soft tinted badge / highlight backgrounds |

### Surfaces & Neutrals
| Token | Hex | Usage |
| :--- | :--- | :--- |
| `--color-surface-white` | `#FDFDFB` | Header, cards, and clean content blocks |
| `--color-surface-ivory` | `#FCF8F7` | Alternating warm off-white section backgrounds |
| `--color-border-subtle` | `#E6E2DC` | Hairline card borders and section dividers |
| `--color-text-body` | `#334155` | Body copy (high-contrast readable slate) |

---

## 2. Typography
- **Display / Headings:** Classic editorial **Serif** (e.g., `Playfair Display` or `Lora` via `next/font/google`) — paired with two-tone emphasis where the first line is `--color-navy-900` and the second emphasis phrase is `--color-gold-600`.
- **Body / UI:** Clean geometric **Sans-Serif** (e.g., `Plus Jakarta Sans` or `Inter` via `next/font/google`) for navigation, body paragraphs, stats, and buttons.

---

## 3. Layout & Section Rhythm
1. **Top Utility Bar (`#0B223D`)**: Contact info placeholders on the left, quick links on the right.
2. **Sticky White Navbar (`#FDFDFB`)**: BVEF shield logo + wordmark on left, clean links in center, Gold CTA button (`#F3AE2C`) on right.
3. **Hero Section**: Two-tone serif headline, concise mission statement, primary dark navy CTA + secondary outline button, paired with high-impact Basho Valley / classroom photography.
4. **Dark Navy Feature Strip (`#141E2A`)**: 5-column horizontal pillar strip with gold line icons (e.g., *Three-Teacher STEM Team*, *Offline Digital Classrooms*, *Local Female Educators*, *Exam-Linked Accountability*, *Zero Bricks-and-Mortar Overhead*).
5. **Alternating Content & Cards (`#FCF8F7` / `#FDFDFB`)**: About BVEF, 3-card impact metrics, and program cards.
6. **Dark Stats Banner (`#1B2330`)**: Key numbers in gold + white (Altitude `8,800–11,800 ft`, `1` Active Partner School, `16` Villages Waiting, `7` Trustees).
7. **Footer (`#022046`)**: BVEF logo & mission, Quick Links, Programs, Contact Info placeholders, and Trust registration placeholder.
