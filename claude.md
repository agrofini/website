# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview
Professional investor-grade website for **Agrofini West Africa Limited** (RC No. 8181060, Nigeria) — a commercial agribusiness.
- **Domain:** agrofiniholdings.com | **Contact:** info@agrofiniholdings.com | **Base:** Benin City, Edo State, Nigeria
- **Stage:** Pre-operational — 12–24 months to full operations. All content must be aspirational but honest.

---

## Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Dev server at http://localhost:3000
npm run build        # Production build
npm run lint         # ESLint
npx tsc --noEmit     # Type-check without emitting
```

---

## Tech Stack
- **Next.js 14** — App Router only (never Pages Router), TypeScript (.tsx) throughout
- **Tailwind CSS** — utility classes only, no inline styles; custom theme tokens in `tailwind.config.js`
- **Framer Motion** — `motion.div` with `whileInView` for all scroll animations
- **Netlify Forms** — `data-netlify="true"` on contact `<form>`; no backend, no database
- **Google Fonts** — `Playfair Display` (headings) + `DM Sans` (body) loaded in `app/layout.tsx`
- **Deployment:** Netlify free tier — `netlify.toml` must be in root

---

## Architecture

**Three pages** composed from single-purpose components in `app/components/`:

| Page | Route | Key sections |
|---|---|---|
| Home | `app/page.tsx` | Hero → Who We Are → What We Do → Our Vision → Land Stats → Invest Teaser → Disclaimer |
| Invest | `app/invest/page.tsx` | Hero → Opportunity → Vision → Why Invest (3 cards) → Timeline (3 phases) → CTA → Disclaimer |
| Contact | `app/contact/page.tsx` | Two-column: contact info left, Netlify form right |

`app/layout.tsx` wraps everything with font loading, global metadata, `<Navbar>` and `<Footer>`.

---

## Design System

**Color tokens** (defined in `tailwind.config.js`):
```js
primary: '#00674B'      // Deep green — primary brand
primaryDark: '#1a3d2b'  // Dark forest green — section backgrounds
warmWhite: '#FAFAF7'    // Off-white — default page background
sage: '#E8F0EB'         // Light sage — alternate section backgrounds
earth: '#5C3D2E'        // Warm brown — accent
text: '#1C1C1C'         // Near-black — body copy
accent: '#F4A726'       // Amber/mustard — CTAs and highlights
```

**Design feel:** Inspired by wholefoodsmarket.co.uk — generous whitespace, organic feel, pill-style CTA buttons, cards with soft shadows on sage backgrounds, large serif headlines.

---

## Key Rules
- Contact `<form>` must always have `data-netlify="true"` — Netlify handles submissions
- Disclaimer must appear on both Home and Invest pages
- All CTAs need `aria-label` attributes; use `next/image` with alt text for all images
- Mobile-first responsive at all times
- Tone: **confident, visionary, grounded, trustworthy** — never imply guaranteed investment returns

---

## Business Content Reference

**Farm:** 20-acre commercial farm, Benin City, Edo State, Nigeria → supplies Lagos markets (Mile 12, Mushin, Daleko, Oyingbo)

**Crop mix (per-acre profit ranked):**
- 12 acres Habanero Pepper — primary cash crop, peak prices April–July
- 1 acre Snail Farm (Archachatina marginata) — highest net/acre, premium protein
- 4 acres Cucumber — fastest cash flow, Day-40 first revenue, 3 cycles/year
- 2 acres Tomato — dry-season premium, 2 cycles/year
- 1 acre Okra — monthly income stabiliser, 4 cycles/year, Day-35 first revenue

**Financial projections (from Farm Operations Manual, May 2026):**
- Year 1 investment: ₦38.9M | Annual net profit (moderate): ₦212M | Year 1 ROI: 545%
- 3-year cumulative net profit: ₦742M | Monthly average income: ₦17.7M
- All figures sourced from 2025 live Nigerian market data (BusinessDay, NBS, CBN)

**Target audience:** Nigerian and diaspora investors, agribusiness partners, Lagos wholesale buyers, Lagos hotels & restaurants, export channels (snails from Year 2)

**Investment timeline phases:**
- Phase 1 (Months 1–6): Borehole, drip irrigation, snail pen, crop planting, team hire
- Phase 2 (Months 6–12): First harvest & revenue, Mile 12 supply chain live, investor reporting
- Phase 3 (Months 12–24): Snail export, hotel contracts, NAFDAC/NEPC registration, land expansion eval

---

## netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```
