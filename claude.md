# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project Overview
Professional investor-grade website for **Agrofini West Africa Limited** (RC No. 8181060, Nigeria) — a pre-launch agribusiness.
- **Domain:** agrofiniholdings.com | **Contact:** info@agrofiniholdings.com | **Base:** Ogun State, Nigeria
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

**Key numbers:** 2 hectares (secured, Primepoint Farm Estate), 39 acres (estate partner), 150 acres (acquisition target, Ota, Ogun State)

**Target audience:** Nigerian and diaspora investors, agribusiness partners, corporate off-takers (Nestlé, Nigerian Breweries, Guinness as target buyers)

**Investment timeline phases:**
- Phase 1 (Months 1–6): Farm Setup & Infrastructure
- Phase 2 (Months 6–12): First Harvest & Revenue
- Phase 3 (Months 12–24): Land Expansion & Corporate Partnerships

---

## netlify.toml
```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```
