# Sharma Academy – Design Guide (v0.1, mockup stage)

Dilsukhnagar, Hyderabad · 15 years · Class 8–10 tuition + Inter MPC / EAMCET
Audience: parents (mostly on phones), Telugu + English.
Goal: more admissions. Pages: Home, Batches, Results, Contact.

> **Logo is [PENDING].** Everything below marked TEMPORARY changes once the logo arrives.

## 1. Colour  (TEMPORARY – taken from client's reference screenshot; re-derive from logo when ready)

Flat colours only. No gradients, no purple.

| Role | Name | Hex | Use |
|---|---|---|---|
| **Main** | Deep forest green | `#0B4A2E` | header, results band, footer, headings, Call button |
| **Accent** | Bright green | `#1F9D55` | links, rank numbers, highlights, small tags |
| Tint | Mint | `#E8F4EC` | alternate section background, card borders |
| Background | White | `#FFFFFF` | page |
| Text | Ink | `#14231B` | body text |
| Muted | Grey-green | `#51615A` | secondary text |
| WhatsApp | WhatsApp green | `#25D366` | WhatsApp button only (brand-recognisable) |

Contrast: white on `#0B4A2E` ≈ 10:1, white on `#1F9D55` ≈ 3.5:1 (large/bold text only), ink on white ≈ 16:1.
Call vs WhatsApp must look different: Call = deep green fill, WhatsApp = WhatsApp green fill with dark text.

## 2. Fonts

- **Telugu:** Noto Sans Telugu (400, 600, 700)
- **English headings:** Poppins (600, 700)
- **English body:** Poppins 400 (falls back to system sans)
- Stack: `'Poppins','Noto Sans Telugu',system-ui,sans-serif` – Latin letters render in Poppins, Telugu glyphs fall through to Noto.
- Body ≥ 16px. Telugu needs more room: line-height 1.7 (English 1.5). Never use letter-spacing on Telugu.
- Each section: English heading + one Telugu subline underneath.

## 3. Spacing & layout

- 8px scale: 8 / 16 / 24 / 40 / 64
- Section padding: 64px desktop, 40px mobile
- Max content width 1100px, 16px side gutter on mobile
- Mobile-first. Cards: 1 column on phone, 3 on desktop
- Card radius 12px, 1px mint border, no heavy shadows

## 4. Buttons

- Height ≥ 52px, radius 8px, bold 16–18px text, full width on mobile
- **Call** (primary): `#0B4A2E` fill, white text (on dark green sections: white fill, green text)
- **WhatsApp**: `#25D366` fill, `#0B2A1A` text
- **Secondary**: 2px green outline
- Mobile: sticky bottom bar with Call + WhatsApp side by side, always visible
- Big Call + WhatsApp block at end of Home page

## 5. Avoiding the "AI look"

- No purple/blue gradients, no glassmorphism, no glowing blobs
- No emoji-in-circle icon grids, no stock "Empower your future" headings
- Every heading names something real: Dilsukhnagar, EAMCET rank, class, batch timing
- Real photos only (students, classrooms) – until they arrive show a labelled `[PENDING]` box, not stock images
- Reference (PW, Narayana): direction only – results first, batches clearly listed. No copying layout, wording or branding.

## 6. Content rules

- **Fees are never shown** on the website. No "fees on request" line either; CTA is "Call for details". No "demo class" and no "seats limited" claims until the client confirms them.
- Never invent: names, ranks, phone, address, timings, faculty.
- Home page order: Results → Batches (class-wise, with timings) → FAQs → big Call + WhatsApp.

## 7. [PENDING] list (client must supply)

Logo · phone number · WhatsApp number · address + map pin · 3 student names, EAMCET ranks (all < 2000), photos, year · batch timings per class · medium (Telugu/English) per batch · subjects/faculty · batch size · demo class policy · admission dates · classroom photos
