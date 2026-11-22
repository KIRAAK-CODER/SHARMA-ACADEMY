# Sharma Academy website – rules for Claude

Coaching centre, Dilsukhnagar, Hyderabad (15 years). Class 8–10 tuition + Inter MPC / EAMCET. Audience: parents, Telugu + English. Goal: more admissions.
Design source of truth: `design.md` (colours, fonts, spacing, buttons) and `mockup.html` (Home layout).

## Working rules
1. **Chhote steps.** One small step at a time. Don't build several things together.
2. **Fake data nahi.** Never invent names, ranks, phone, WhatsApp, address, timings, photos, logo, faculty. Unknown = write `[PENDING]`.
3. **Har step ke baad Playwright test.** Run the Playwright tests after every step and show the result. If a test fails, say so; don't hide it.
4. **Commit se pehle poocho.** Never run `git commit` (or push) without asking the user first and getting a yes.
5. **Simple Hinglish mein batao** after every step: kya bana, aur folder mein kahan hai (file paths).

## Content rules
- Fees are never shown on the website.
- No "seats limited" or "demo class" claims (client has not confirmed them).
- CTA wording: "Call for details".
- No purple/gradients, no generic headlines ("Empower your future"). Every heading must be Sharma Academy specific.
- English headings + Telugu sublines. Telugu text must be proofread by the client.

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS, code in `src/`.
- Shared layout pieces: `src/components/Header.tsx`, `src/components/Footer.tsx` (rendered in `src/app/layout.tsx`)
- Pages: `/` Home, `/batches`, `/results`, `/contact`
- Tests: Playwright in `tests/` (`npm run test:e2e`)
- Colours are TEMPORARY until the logo arrives (logo is `[PENDING]`).
