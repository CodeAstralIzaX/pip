# Premier Insurance Partners — Technical Documentation

**Project:** Premier Insurance Partners Website
**Repository:** [github.com/CodeAstralIzaX/pip](https://github.com/CodeAstralIzaX/pip)
**Live Site:** [premierinsurance-partners.netlify.app](https://premierinsurance-partners.netlify.app) / [premierinsurance-partners.in](https://premierinsurance-partners.in)
**Last Updated:** 18 April 2026

---

## 1. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | 18.3.1 |
| Routing | React Router | 7.13.0 |
| Build Tool | Vite | 6.3.5 |
| Styling | Tailwind CSS (via `@tailwindcss/vite`) | 4.1.12 |
| UI Components | Radix UI Primitives + shadcn/ui | Various |
| Image Optimization | `vite-plugin-image-optimizer` + `sharp` + `svgo` | 2.0.3 / 0.34.5 / 4.0.1 |
| Hosting | Netlify (CI/CD from GitHub) | — |
| Language | TypeScript | — |

---

## 2. Project Structure

```
├── index.html              # Entry point with SEO meta, OG, JSON-LD
├── netlify.toml            # Netlify build config + cache headers
├── vite.config.ts          # Vite build config with single vendor chunk
├── package.json
├── public/
│   ├── _redirects           # SPA fallback: /* → /index.html 200
│   ├── robots.txt
│   └── sitemap.xml          # 7 pages with priority + lastmod
└── src/
    ├── main.tsx             # React root mount
    └── app/
        ├── App.tsx           # RouterProvider
        ├── routes.ts         # Route definitions
        ├── components/
        │   ├── Header.tsx    # Sticky nav with active state detection
        │   ├── Footer.tsx    # 4-column footer with socials + contact
        │   ├── RootLayout.tsx# Scroll-to-top on route change
        │   ├── assets/       # Images, SVGs, logos
        │   └── ui/           # shadcn/ui components (sheet, button, etc.)
        ├── pages/
        │   ├── Home.tsx      # Hero + service cards + CTA
        │   ├── Insurances.tsx# Full insurance plans browser with detail drawer
        │   ├── Claims.tsx
        │   └── Contact.tsx
        └── styles/
            ├── index.css
            ├── tailwind.css
            ├── theme.css
            └── fonts.css
```

---

## 3. Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home` | Hero section, 3 service cards, CTA |
| `/insurances` | `Insurances` | Defaults to Life Insurance category |
| `/insurances/:category` | `Insurances` | Deep-links: `life`, `general`, `health` |
| `/claims` | `Claims` | Claims information page |
| `/contact` | `Contact` | Contact form & details |

---

## 4. Features Implemented

### 4.1 Insurance Plans Browser (`Insurances.tsx`)

**3 categories, each with sub-category sidebar tabs and plan cards:**

| Category | Sub-Categories | Total Plans |
|----------|---------------|-------------|
| **Life Insurance** | Endowment, Money-Back, Term, ULIP, Pension, Child | ~18 plans |
| **General Insurance** | Motor, Health, Travel, Fire & Property | ~16 plans |
| **Health Insurance** | Individual, Family, Senior Citizen, Critical Illness | ~8 plans |

**Each plan card contains:**
- Plan name + description
- Click → opens **right-side Sheet drawer** with:
  - Specs table: eligibility, policy term, premium paying term, sum assured
  - Key benefits checklist (✔ items)
  - "Ideal For" block
  - **Get a Quote** (WhatsApp) + **Contact** CTAs

**UI features:**
- Dynamic hero gradient per category
- Sticky category pill bar at the top
- Breadcrumb navigation (Home → Category)
- Responsive sidebar (horizontal scroll on mobile, vertical on desktop)

### 4.2 Home Page (`Home.tsx`)

- **Hero section:** Mission statement tagline + "Explore Our Policies" CTA + hero image
- **Service cards:** 3 image cards (General, Life, Health) → deep-link to `/insurances/:category`
- **CTA section:** "Ready to Get Started?" with WhatsApp Enquire Now button + gold diagonal accent

### 4.3 Navigation (`Header.tsx`)

- Sticky header with blur backdrop
- **Active state detection:** `isActive()` uses `startsWith()` — clicking a service card from Home highlights "Insurances" in the nav
- Responsive mobile hamburger menu
- WhatsApp "Enquire Now" CTA button

### 4.4 Scroll-to-Top (`RootLayout.tsx`)

- `useEffect` on `pathname` change → `window.scrollTo({ top: 0, behavior: "instant" })`
- Also triggers inside Insurances when switching category pills

### 4.5 Sheet Close Button (`sheet.tsx`)

- White `X` icon with `drop-shadow` for visibility on dark backgrounds
- `size-5`, `opacity-90`, `text-white`

### 4.6 Footer (`Footer.tsx`)

- 4-column grid: Company info + socials, Quick Links, Our Services, Contact Us
- Social links: Facebook, Instagram
- Address, phone, email with icons

---

## 5. Build & Deployment

### 5.1 Vite Config (`vite.config.ts`)

```typescript
manualChunks(id) {
  if (id.includes('node_modules')) return 'vendor'
}
```

**Critical decision:** All `node_modules` go into a **single `vendor` chunk**. A previous split into `react-vendor` + `vendor` caused a circular dependency → `useLayoutEffect is undefined` runtime crash.

### 5.2 Image Optimization

**Before (broken on Netlify):** `vite-plugin-imagemin` — uses native C binaries (`gifsicle`, `optipng`, `mozjpeg`) that crash on Netlify's Linux.

**After (working):** `vite-plugin-image-optimizer` + `sharp` + `svgo` — pure JS/WebAssembly, works on all platforms.

### 5.3 Netlify Config (`netlify.toml`)

```toml
[build]
  command   = "npm run build"
  publish   = "dist"

[build.environment]
  NODE_VERSION = "20"
```

**Cache headers:**
- `/assets/*.js`, `/assets/*.css` → `immutable, max-age=31536000` (content-hashed)
- `/index.html` → `no-cache, no-store, must-revalidate` (always fresh)

### 5.4 SPA Routing

- `public/_redirects`: `/* /index.html 200` — all routes serve index.html
- React Router handles client-side routing

### 5.5 Git Hygiene

- `dist/` is in `.gitignore` — never committed
- Netlify builds from source on every push to `main`

---

## 6. SEO Setup

### 6.1 Meta Tags (`index.html`)

| Tag | Content |
|-----|---------|
| `description` | "Premier Insurance Partners — trusted life, general & health insurance solutions across India…" |
| `keywords` | life insurance India, general insurance, health insurance, motor insurance, LIC plans, travel insurance |
| `canonical` | `https://premierinsurance-partners.in/` |

### 6.2 Open Graph & Twitter Cards

- Title: "Premier Insurance Partners"
- Description: Life, general & health insurance across India
- Image: `/src/app/components/assets/logo_1.png`

### 6.3 JSON-LD Structured Data

- `@type`: `InsuranceAgency`
- `areaServed`: `Country: India`
- Includes: name, URL, logo, phone, email, address, social links

### 6.4 Sitemap (`public/sitemap.xml`)

7 pages with `lastmod`, `changefreq`, and `priority`:
- `/` → priority 1.0
- `/insurances` → 0.9
- `/insurances/life`, `/insurances/general`, `/insurances/health` → 0.8
- `/contact` → 0.7
- `/claims` → 0.6

### 6.5 Robots (`public/robots.txt`)

- All crawlers allowed
- Sitemap URL declared

---

## 7. Bug Fixes & Issues Resolved

| Issue | Root Cause | Fix |
|-------|-----------|-----|
| `useLayoutEffect is undefined` crash in production | Vite `manualChunks` split `react-vendor` + `vendor` → circular chunk dependency | Merged all `node_modules` into single `vendor` chunk |
| Netlify serving stale old chunks | `vite-plugin-imagemin` native binaries crash on Netlify Linux → build fails silently → old deploy stays live | Replaced with `vite-plugin-image-optimizer` (pure JS) |
| `dist/` committed to git | Old workflow committed built files | `git rm -r dist/`, added to `.gitignore`, Netlify builds from source |
| Insurance page loads at bottom when navigating from Home | No scroll reset on route change | Added `scrollTo(top)` in `RootLayout` on `pathname` change |
| Sheet X button invisible on dark headers | Default `text-current` + low opacity on dark background | Made `text-white`, `size-5`, added `drop-shadow` |
| "Insurances" nav not highlighted on `/insurances/life` | `isActive()` used exact `===` match | Changed to `startsWith()` for prefix matching |

---

## 8. Commit History (Chronological)

| Commit | Description |
|--------|-------------|
| `ca3338b` | Initial commit |
| `2e57714` | Full website with all initial features |
| `0ca3656` | Express server for SPA fallback |
| `bcb6375` | SEO: meta tags, JSON-LD, robots, sitemap, lazy-load images |
| `9264db1` | Image optimization + manual chunk splitting |
| `8f28b1b` | Insurance category deep-link from Home service cards |
| `8ef3da2` | Plan detail Sheet drawer on card click |
| `0b639fc` | Fix duplicate X close button |
| `dc1a22a` | Fix: single unified vendor chunk (useLayoutEffect fix) |
| `695ed91` | Remove dist from git, add netlify.toml |
| `c4268b8` | White Sheet close button with drop shadow |
| `8ff2658` | Update hero text, active nav, remove Home & Business Insurance categories |
| `e95b953` | Add Health Insurance card to Home, scroll-to-top on navigation |
| `a8fa23b` | **Replace `vite-plugin-imagemin` with `vite-plugin-image-optimizer`** (Netlify fix) |
| `e273d70` – `b84e55b` | UI refinements: hero height, CTA height, card heights |
| `5242bbb` | Footer updates (social links, contact info) |
| `a2ed275` | SEO: improved meta, keywords, sitemap with priorities |
| `d1aa5a3` | SEO: broadened targeting to all India |

---

## 9. Pending / Recommendations

| Item | Priority | Notes |
|------|----------|-------|
| Submit sitemap to Google Search Console | 🔴 High | Required for Google to index the site |
| Create Google Business Profile | 🔴 High | Essential for local search visibility |
| Connect custom domain `premierinsurance-partners.in` to Netlify | 🟡 Medium | Currently on `.netlify.app` subdomain |
| Add page-level `<title>` per route (react-helmet) | 🟡 Medium | Currently all pages share one `<title>` |
| Add a dedicated Health Insurance hero image | 🟢 Low | Currently reuses Home Insurance image |
| Performance: lazy-load Insurances page routes | 🟢 Low | Would reduce initial JS payload |
| Analytics: add Google Analytics or Plausible | 🟡 Medium | Track visitor behavior |
| SSL certificate for custom domain | 🔴 High | Required for HTTPS + SEO ranking |

---

*Document generated: 18 April 2026*
