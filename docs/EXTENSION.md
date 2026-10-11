# EXTENSION LAYER SPECIFICATION & RECORD (docs/EXTENSION.md)

**Standard**: Layer 2 (Designed Extension) maintaining 100% design fidelity and token alignment with Layer 1 (Reference).  
**Regression Audit**: `npm run verify` proves 0 regressions on all golden reference states (hero: 0.7623, section02: 0.779, anatomy: 0.8589, lookbook: 0.556, details: 0.7927).

---

### 1. Catalog & Product Inventory (`src/data/products.ts`)
Exactly 9 products covering all collections (`Runners`, `Court`, `Lifestyle`) and color filters (`Black`, `White`, `Colour`):

| # | Product Name | Slug | Price | Collection | Color Filter | Colorway Name | Reference Status | Reused Components |
|---|---|---|---|---|---|---|---|---|
| 1 | **AERO FLUX** | `aero-flux` | $145 | Runners | Colour | Bone / Volt | Reference Golden State | Reference Shop Product Layout |
| 2 | **GHOST RUNNER** | `ghost-runner` | $160 | Runners | Black | Triple Black | Reference Golden State | Reference Shop Listing & Checkout |
| 3 | **APEX TRAIL** | `apex-trail` | $135 | Lifestyle | Colour | Desert Tan / Ochre | Reference Golden State | Reference Shop Listing Tile |
| 4 | **SHATTER** | `shatter` | $170 | Court | White | Optic White / Ice | Reference (Checkout summary) | Reference Shop Product Layout |
| 5 | **APEX COURT** | `apex-court` | $155 | Court | White | Chalk / Forest | Extension (Consistent) | ProductTile & Specs Table |
| 6 | **VELOCITY LOW** | `velocity-low` | $140 | Runners | Black | Charcoal / Volt | Extension (Consistent) | ProductTile & Specs Table |
| 7 | **DRIFT MONO** | `drift-mono` | $125 | Lifestyle | White | Clean White | Extension (Consistent) | ProductTile & Specs Table |
| 8 | **STRIDE PRIME** | `stride-prime` | $165 | Runners | Colour | Electric Chartreuse | Extension (Consistent) | ProductTile & Specs Table |
| 9 | **STREET ECHO** | `street-echo` | $115 | Lifestyle | Black | Midnight Slate | Extension (Consistent) | ProductTile & Specs Table |

---

### 2. Bag & Cart Management
- **Cart Context (`CartContext.tsx`)**:
  - State management stored in `localStorage` (`srigen_cart`).
  - Pre-seeded with Reference Checkout state (`Ghost Runner US 9 $160` + `Shatter US 10 $170` = `$330`).
  - Methods: `addItem(product, size, qty)`, `removeItem(id, size)`, `updateQty(id, size, qty)`, `clearCart()`.
  - Free Shipping Progress bar toward the $150 threshold (`"Add $X more for free shipping"`).
- **Slide-Over Bag Drawer (`BagDrawer.tsx`)**:
  - Globally mounted in `RootLayout`, slides over from right on header bag click or after item addition.
  - Subtotal, items list with thumbnail, size chip, stepper controls.
  - Button: `"CHECKOUT — $XXX"` linking to `/checkout`.
  - Button: `"VIEW FULL BAG"` linking to `/bag`.
- **Add to Bag Feedback**:
  - Button switches to `"ADDED ✓"` with volt text animation for 1.6s, bumps item counter, and triggers the bag drawer.

---

### 3. End-to-End Checkout Flow (`/checkout`)
- **Step 1 (Contact)**: Pre-filled with reference contact, toggleable via `"EDIT"` button.
- **Step 2 (Shipping)**: Full shipping address fields and delivery options:
  - Standard: FREE (3–5 business days).
  - Express: $18 (1–2 business days).
- **Step 3 (Payment)**: Clearly marked demo payment method:
  - `"Demo payment — nothing is charged"`.
  - No real financial or credit card inputs.
  - Button: `"PLACE DEMO ORDER"`.
- **Order Confirmation (`/order-confirmation`)**:
  - Displays generated order number (e.g. `SR-285997`).
  - Summary of purchased items, shipping tier, and total.
  - Handles `orderId=not-found` state with clear recovery paths.
  - Button: `"CONTINUE SHOPPING"` returning to `/shop`.

---

### 4. Extra Informational Pages
- **`/story`**: Brand narrative, material philosophy (SR-FOAM™, full-grain suede), and the 300-pair pledge.
- **`/shipping-returns`**: Delivery tiers (FREE over $150, Express $18, ships in 24h), and 30-day return policy.
- **`/faq`**: Drop mechanics, sizing recommendations, return covenants, and demo declarations.
- **`/contact`**: Client services concierge desk with validated form stub (name, email, subject, message).
- **`/privacy` & `/terms`**: Full demo compliance and local data handling policies.
- **`404 Not Found` (`src/app/not-found.tsx`)**: "DROP NOT FOUND" on-brand error screen.
- **`SizeGuideModal` (`src/components/SizeGuideModal.tsx`)**: Accessible modal with US/UK/EU/CM conversion matrix, Esc dismissal, and focus containment.

---

### 5. Multi-Column Footer & Global Header
- **Footer**: 6 columns including STORE, SILHOUETTES, ASSISTANCE, COMPLIANCE, plus newsletter stub and permanent demo notice.
- **Header**: Route-aware header that maintains 100% exact reference landing page appearance on `/` while exposing the live shopping bag trigger and navigation across all extension routes.
