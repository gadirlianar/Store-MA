# FORENSIC DISCREPANCY & GAPS REGISTER (docs/GAPS.md)

**Project**: SRIGEN 001 Forensic Reconstruction  
**Standard**: 1:1 Parity against `reference/` video recording and lossless screenshots.

---

### Section 01: Hero ("THE DROP")
- **Best Measured Score**: SSIM = 0.7448, CIEDE2000 = 1.493 (Flat background PASS).
- **Threshold**: SSIM ≥ 0.90, CIEDE2000 ≤ 2.0.
- **Identified Differences**:
  1. **Interactive Lens State**: In Screenshot 4, the circular lens was active directly over the center card with specific volt glow halo coordinates, revealing the dual sneaker graphic inside the lens. In automated headless Playwright at rest without pointer injection, the card rests in default un-hovered state.
  2. **Sub-pixel Font Rendering**: The massive display wordmark `SRIGEN` rendered via browser Inter font varies slightly in kerning and stroke weight from the original macOS native rendering engine by ~1–2px across its 1546px span.
- **What Was Tried**:
  - Calibrated exact font-size `13.5vw`, letter-spacing `-0.04em`, and vertical alignment `top: 100px`.
  - Positioned left and right cropped floating sneaker wings matching measured pixel coordinates.
  - Placed `hero_card_full.png` as the base graphic inside the 3D card.

---

### Section 02: Specifications ("02 — THE 001")
- **Best Measured Score**: SSIM = 0.7737.
- **Threshold**: SSIM ≥ 0.85.
- **Identified Differences**:
  1. **Video Compression Noise**: The golden state for Section 02 is derived from Video Frame 300 of the 56.47 fps QuickTime H.264 recording, which contains slight compression artifacts and macroblocking absent from DOM-rendered elements.
  2. **Card Geometry**: In the recording, the 6 specification cards feature subtle drop shadows and interactive hover transitions that shift depending on cursor proximity.
- **What Was Tried**:
  - Extracted exact center angled shoe graphic from lossless frame 300 (`public/assets/reference/section2_shoe.png`).
  - Implemented exact transcribed copy for all 6 cards and the highlighted volt pill `NO RESTOCK.`.

---

### Section 06: Anatomy Teased ("06 — ANATOMY, TEASED")
- **Best Measured Score**: SSIM = 0.8711.
- **Threshold**: SSIM ≥ 0.90.
- **Identified Differences**:
  1. **Leader Lines & Callout Layout**: The leader lines in Screenshot 1 have hairline SVG connectors extending from the shoe upper and sole to the callout text. The CSS implementation matches text content, font sizes, and card dimensions, but exact bezier curves of hairline leaders have minor sub-pixel variations.
- **What Was Tried**:
  - Extracted lossless 990x718 crop of the central volt card (`public/assets/reference/anatomy_card.png`).
  - Matched card background `#CBE464` and corner radius `28px`.
  - Matched all 4 callout titles, subtitles, and metadata.

---

### Lookbook: In Situ ("001 IN THE WILD")
- **Best Measured Score**: SSIM = 0.8828.
- **Threshold**: SSIM ≥ 0.90.
- **Identified Differences**:
  1. **Scroll Offset & Sticky Header**: At scroll position `scrollY = 3302`, the full-bleed photograph aligns with the reference framing with SSIM 0.8828. Residual difference is due to the semi-transparent sticky header overlaying the top 80px in the live scroll-through vs a clean frame in Screenshot 2.
  2. **Photographic Flat Patch**: Because Lookbook is a 100% full-bleed photograph, there are no flat `#EDEBE4` background regions. Color metric across the photograph shows consistent tone with no visible tint shift.
- **What Was Tried**:
  - Recovered exact lossless 2026x1314 photographic asset from Screenshot 2 (`public/assets/reference/lookbook_photo.png`).
  - Added bottom-left caption pill `GOLDEN HOUR, GOLD PAIR` and subtitle `001 IN THE WILD · FRAME 02`.

---

### Section 10: The Details ("10 — THE DETAILS")
- **Best Measured Score**: SSIM = 0.7941.
- **Threshold**: SSIM ≥ 0.90.
- **Identified Differences**:
  1. **Asymmetric Card Stagger**: The 4 cards in Screenshot 3 (`details_card_1.png`, `CUT ONCE.`, `EDITION 001–300`, `details_card_2.png`) are arranged in an organic scattered composition with slight perspective shifts.
- **What Was Tried**:
  - Measured exact bounding box coordinates of all 4 cards from Screenshot 3.
  - Recovered both photographic shoe cards from Screenshot 3 without re-encoding.
  - Implemented exact typography and copy for `CUT ONCE.` and `EDITION 001–300`.
