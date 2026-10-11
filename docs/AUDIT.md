# FORENSIC AUDIT & MIGRATION PLAN (docs/AUDIT.md)

**Standard**: Forensic reconstruction of Layer 1 (Landing & Reference Shop Screens) + Layer 2 Extension Storefront.
**Date**: 2026-10-11

---

### 1. Layer 1 Landing Audit
- **Status**: Complete & Verified.
- **Components Audited**:
  - `Header.tsx`: Sticky hairline blur, brand lockup `SRIGEN 001`, active nav tracking, `NOTIFY ME` button.
  - `OpeningSequence.tsx`: 10 eyelets, dynamic zigzag volt laces stroke, `SRIGE..` to `SRIGEN` decode.
  - `Hero.tsx`: Wordmark `SRIGEN`, 3D tilted box, dynamic CSS mask X-Ray lens revealing sneaker, floating shoes.
  - `Section02.tsx`: Asymmetric 3-column layout, default volt `300 PAIRS` card, 6 spec cards with pop-up detail cards.
  - `Section06.tsx`: Anatomy Teased with central volt card and 4 callouts.
  - `Lookbook.tsx`: Full-bleed photograph with `GOLDEN HOUR, GOLD PAIR` pill caption.
  - `Section10.tsx`: The Details with `EVERY PART, CONSIDERED.` and 4 scattered cards.
  - `ShoelaceCursor.tsx`: Custom volt aglet follower with 60 FPS inertia.
  - `AudioToggle.tsx`: Floating ambient audio generator using Web Audio API.

---

### 2. Layer 1 Shop Screens (Reference to Reconstruct)
- [ ] **ALL SHOES Listing (`/shop`)**:
  - Headline with volt badge `"9 OF 9"`.
  - Filter card: COLLECTION (`All`, `Runners`, `Court`, `Lifestyle`), SIZE — US (`7` to `12` round chips), COLOUR (`All colours`, `Black`, `White`, `Colour`), PRICE (`Any price`, `Under $120`, `$120 – 150`, `Over $150`), SORT (`Featured`, `Price: Low to High`, `Price: High to Low`).
  - 3-column grid of tall rounded bone tiles (`#F2EFE9` / `#EDEBE4`) with centered side-view shoe photo and hanging price tag top-right (black peg dot, thin string, volt tag with ring hole, price in condensed bold, tiny barcode).
  - Prices: $145 (Aero Flux), $160 (Ghost Runner), $135 (Dune Craft).
- [ ] **AERO FLUX Product Page (`/shop/[slug]` / `/shop/aero-flux`)**:
  - Breadcrumb: `Shop / Runners / Aero Flux`.
  - Large rounded image panel with volt badge `"RUNNERS"`.
  - Headline `"AERO FLUX"`, price `"$145"`, colour `"Bone / Volt"`, description.
  - `"SELECT SIZE — US"` with clickable `"Size guide"`.
  - Size boxes: `7` (struck through, unavailable), `8`, `9`, `10` (selected, volt), `11`, `12`.
  - Full-width volt CTA button `"ADD TO BAG – $145"` with bag icon and volt glow.
  - Three value props: `"Ships in 24h"`, `"Free 30-day returns"`, `"Free shipping over $150"`.
  - Reviews card: `"★ 4.9 · 214 verified reviews"` with customer review snippets.
  - `"SPECS"` table starting with Weight `"289 g"`.
- [ ] **CHECKOUT Shipping Step (`/checkout`)**:
  - Headline with volt badge `"DEMO — NO REAL PAYMENT"`.
  - Subtitle: `"Guest checkout · under a minute · encrypted in the real template"`.
  - Accordion steps:
    1. **CONTACT**: Volt check circle, `"EDIT"`, user email.
    2. **SHIPPING**: Black circle `2`, First Name, Last Name, Address, City, Postal Code, Delivery radios:
       - `Standard`: 3–5 business days, `FREE` (selected with 2px black border).
       - `Express`: 1–2 business days, `$18`.
       - Full-width volt button: `"CONTINUE TO PAYMENT →"`.
    3. **PAYMENT**: Demo payment method (no financial inputs, `"PLACE DEMO ORDER"`).
  - Right Order Summary card:
    - Items: Ghost Runner US 9 · Qty 1 $160; Shatter US 10 · Qty 1 $170.
    - Subtotal: $330, Shipping: FREE, TOTAL: $330.

---

### 3. Layer 2 Extension Scope
- Exactly 9 products cataloged in `src/data/products.ts`.
- Cart State (`CartContext.tsx`), Slide-over Bag Drawer, `/bag` page.
- `/order-confirmation` page with generated demo order ID.
- Size Guide Modal with accessible keyboard trap.
- Extra Informational Pages: `/story`, `/shipping-returns`, `/faq`, `/contact`, `/privacy`, `/terms`.
- `DEMO_MODE` banner & notice in footer.
