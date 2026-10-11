# SRIGEN 001 // Forensic Reconstruction & Demo Storefront

A 1:1 forensic reconstruction and professional demo storefront of the **SRIGEN 001** limited-edition sneaker drop, built with Next.js 16 (App Router), React 19, TypeScript strict mode, Tailwind CSS v4, GSAP 3, and Lenis smooth scrolling.

---

## 1. Architecture: Two Layers, One Design System

- **Layer 1 (Reference - Exact)**:
  - Landing narrative: 1:1 parity with the reference screen recording and high-resolution screenshots (`Header`, `OpeningSequence`, `Hero` with 3D packaging card & dynamic X-Ray lens mask, `Section02`, `Section06 Anatomy`, `Lookbook`, `Section10 Details`, `ShoelaceCursor`, `AudioToggle`).
  - Shop reference screens: `"ALL SHOES"` listing with hanging price tag assembly, `"AERO FLUX"` product detail with specs and reviews, and `"CHECKOUT"` accordion shipping step.
- **Layer 2 (Extension - Designed)**:
  - Complete 9-product catalog across Runners, Court, and Lifestyle collections.
  - Slide-over bag drawer with free-shipping meter ($150 threshold) and persistent localStorage cart.
  - End-to-end checkout flow with demo payment simulation and confirmation.
  - Full suite of informational pages: `/story`, `/shipping-returns`, `/faq`, `/contact`, `/privacy`, `/terms`, `/bag`, `/order-confirmation`, and custom 404.

---

## 2. Quick Start

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the live site.

### Production Build & Serve
```bash
npm run build
npm run start -- -p 3000
```

---

## 3. Automated Verification Suites

### Forensic Golden State Comparison
```bash
npm run verify
```
Runs Playwright at 1920x1080 (DPR 1.0) with deterministic time freeze against `reference/golden/` stills, calculating SSIM and CIEDE2000 metrics and outputting diff heatmaps to `docs/compare/`.

### End-to-End Storefront Flow Test
```bash
node scripts/test_storefront_flow.mjs
```
Automated browser test validating filtering, product selection, bag persistence, checkout execution, and static page resolution.

---

## 4. Demo Mode & Demo Data

- **Demo Configuration**: Controlled via `DEMO_MODE` in `src/lib/constants.ts` (currently `true`).
- **Safety**: `robots.txt` disallows all crawlers, `robots: { index: false, follow: false }` is enforced, and no real credit card or banking inputs exist.
- **Data Location**: Catalog and specifications live in `src/data/products.ts`. Detailed demo covenants are documented in `docs/DEMO_CONTENT.md`.
- **Disabling Demo Mode**:
  1. Set `export const DEMO_MODE = false;` in `src/lib/constants.ts`.
  2. Enable indexing in `src/app/layout.tsx`.
  3. Connect production payment gateway API in `/api/checkout`.

---

## 5. Asset Replacement

Original master assets can be placed in `public/assets/reference/`:
- `lookbook_photo.png`: Full-bleed lookbook photography.
- `anatomy_card.png`: FIG. 001-A lateral diagram card.
- `hero_card_full.png`: Center 3D card sneaker artwork.
- `hero_shoe_left.png` & `hero_shoe_right.png`: Floating sneaker wings.
- `details_card_1.png` & `details_card_2.png`: Section 10 detail cards.
- `section2_shoe.png`: Section 02 angled sneaker asset.

---

## 6. Vercel Deployment

1. Push repository to GitHub or GitLab.
2. Import project into Vercel.
3. Settings:
   - Framework Preset: **Next.js**
   - Build Command: `next build`
   - Output Directory: `.next`
4. Deploy!
