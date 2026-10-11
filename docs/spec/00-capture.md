# 00-CAPTURE SPECIFICATION // EVIDENCE & MEASUREMENT HYPOTHESIS

## 1. Video Probe Telemetry
- **File**: `reference/Screen Recording 2026-10-11 at 10.27.36 AM.mov`
- **Resolution**: 1972 x 1124 pixels
- **Codec**: Apple ProRes / H.264 in QuickTime container
- **Frame Rate**: 56.474 fps (1762 frames total, 31.200s duration)
- **Rotation**: 0°
- **Window Chrome / Border**:
  - Outer macOS window drop shadow / border: 4px top (`y=0..3`), 4px left (`x=0..3`), 4px bottom (`y=1120..1123`), 4px right (`x=1968..1971`).
  - Active site viewport in video: `x=4, y=4, width=1964, height=1116`.
  - Browser scrollbar visible at `x=1920..1935`.

## 2. Capture Scale & Viewport Hypothesis
- **Reference CSS Viewport**: **1920 x 1080 CSS px** at **1.0x Device Pixel Ratio (DPR)** (or 1440 x 900 at 1.33x scale).
- **Evidence**:
  - Content margin spans from `x=70` (left logo start) to `x=1910` (right edge of `NOTIFY ME` header pill button), leaving symmetric ~65px outer gutters.
  - Header height: 80px CSS px.
  - Header logo `SRIGEN`: cap-height = 24px, width = 106px.
  - Header pill badge `001`: width = 48px, height = 18px, border-radius = 9px.
  - Header button `NOTIFY ME`: width = 168px, height = 52px, border-radius = 26px.
  - Nav item text height: 12px (CSS `font-size: 14px`, `font-weight: 600`, uppercase, tracking ~0.08em).
  - Screenshots (`2084x1448`, `2404x1332`, etc.) correspond to 1:1 window clips taken on macOS display with 1:1 pixel parity (within 5% scaling tolerance).

## 3. Reference Test Plan
- Playwright verification harness will execute at viewport `1920 x 1080` (DPR 1.0) and verify alignment against extracted video frames and screenshots.
