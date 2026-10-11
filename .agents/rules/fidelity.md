# Forensic Reconstruction Non-Negotiables & Rules

Always read `docs/LOG.md` first before starting work and after any context loss.

## Non-Negotiables
1. **Evidence rule**: Every value in code (color, size, position, string, duration, ease) traces to a record in `docs/spec/`, and every record traces to a frame or screenshot ID. No untraced values.
2. **No invention**: No copy, sections, colors, or images not in reference. If unreadable, mark UNRESOLVED, flag it, and continue.
3. **No lookalikes**: No stock images, no generated images, no generative upscalers, no recoloring. Imagery comes from reference pixels only.
4. **Measure before building**: Compare after building, and re-run all earlier comparisons after every change.
5. **Honest reporting**: A section is "matching" only when the harness says so. Report gaps, causes, and best scores. Do not loosen a threshold silently.

## Section Gates & Thresholds
- **Static Gate (Reference Viewport)**:
  - SSIM >= 0.97 on screenshot-based states.
  - SSIM >= 0.92 on video-frame-based states (excluding photographic regions).
  - Photographic regions: same crop and position within 2px, no visible tint shift (CIEDE2000 <= 3).
  - Flat colors: CIEDE2000 <= 2.
  - Element boxes within 2 CSS px (1% for sizes > 400px).
  - Text: exact line breaks and width within 1px.
- **Motion Gate**:
  - Tracked position error <= max(3px, 1.5% of travel).
  - Start and duration within 50ms.
  - Ease RMSE <= 0.04.
  - Stagger within 30ms.

Commit as `gate: <section> pass` with score table in commit body.
Re-run `npm run verify` across all earlier sections after each change.
