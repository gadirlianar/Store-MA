# MICRO-DETAIL & VECTOR INVENTORY (docs/spec/details.md)

This document catalogs every hairline, icon, micro-badge, and vector detail across the landing and shop experiences.

---

### 1. Hairlines & Dividers
- **Header Border**: `1px solid rgba(17, 17, 17, 0.08)`, spans 100vw across bottom of sticky header on scroll.
- **Card Hairline**: `1px solid rgba(0, 0, 0, 0.06)`, applied to all white specification and filter cards.
- **Table Divider**: `1px solid rgba(17, 17, 17, 0.1)`, horizontal row separator in Product Specs table.
- **Footer Top Hairline**: `1px solid rgba(17, 17, 17, 0.1)`, separating main viewport from footer.

---

### 2. Icons & Glyphs
- **Bag Icon (`ShoppingBag`)**:
  - Outline vector with rounded base and top arch handle.
  - Rendered in Header right actions and `"ADD TO BAG"` button.
- **Star Icon (`Star`)**:
  - Solid 5-point star `★` in review score `"★ 4.9 · 214 verified reviews"`.
- **Checkmark Icon (`Check`)**:
  - `✓` glyph in volt circle for completed Contact step in checkout accordion.
- **Arrow Icon (`ArrowRight` / `→`)**:
  - Linear vector arrow in CTA buttons (`CONTINUE TO PAYMENT →`, `FULL TEARDOWN →`).
- **Radio Selection Indicator**:
  - Outer ring: 18px diameter, border 2px solid `#111111`.
  - Inner dot: 8px solid black circle centered in selected state.
- **Strikethrough Diagonal (`UnavailableSize`)**:
  - Diagonal 1.5px slash across size 7 box indicating sold-out status.
- **Volume / Audio Icon (`Volume2` / `VolumeX`)**:
  - Sound wave arcs in floating audio toggle on right edge.

---

### 3. Hanging Price Tag Assembly (Shop Listing Tile)
- **Top Peg Dot**: 6px solid black circle (`#111111`).
- **Hanging String**: 1px line, height 18px, angle -5deg, stroke `#6B6A65`.
- **Volt Tag**: Rounded rect `w-[72px] h-[34px] bg-[#D4FF00] rounded-[6px]`.
- **Ring Hole**: 5px transparent circular punch hole at tag top-left.
- **Price Typo**: Condensed bold black uppercase, e.g. `$145`, `$160`, `$135`.
- **Barcode Micro-Graphic**: 4 vertical hairline bars at tag bottom-right.

---

### 4. Custom Shoelace Cursor
- **Lead Aglet**: 16px diameter circle with 4px black inner core, border `#D4FF00`, volt glow.
- **Trailing Filament**: 8px translucent filament lagging mouse coordinates with lerp spring physics.
