# DEMO CONTENT & CONFIGURATION (docs/DEMO_CONTENT.md)

**Flag**: `DEMO_MODE: true`

---

### 1. Demo Mode Rules & Guarantees
- **No Real Transactions**: The checkout process simulates order placement. No real payment methods, bank accounts, or sensitive credit card inputs are requested or accepted.
- **Search Engine Indexing**: `robots.txt` sets `Disallow: /` and Next.js metadata sets `robots: { index: false, follow: false }` across all routes.
- **Discreet Disclaimer**: Every page footer renders the formal notice:
  `"This is a demo storefront. No orders are fulfilled and no payments are taken."`
- **Checkout Badge**: The checkout header features the exact reference volt badge:
  `"DEMO — NO REAL PAYMENT"`
- **Review & Rating Data**: Review ratings (e.g. `★ 4.9 · 214 verified reviews`) and customer quotes are simulated editorial demo content.

---

### 2. Disabling Demo Mode
When transitioning to production:
1. Set `export const DEMO_MODE = false;` in `src/lib/constants.ts`.
2. Connect Shopify, Stripe, or Medusa checkout backend API in `/api/checkout`.
3. Enable `robots: { index: true, follow: true }` in `src/app/layout.tsx`.
