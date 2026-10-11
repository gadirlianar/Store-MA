# KHORALIS // DESIGN BRIEF & ART DIRECTION SPECIFICATION

## 1. Concept & Big Idea

- **Brand Name**: **KHORALIS** (Pronounced *koh-RAH-lis*; derived from *Khora*, the Platonic realm of material origin, and *Choral*, collective harmonic resonance).
- **Physical Product**: **KHORALIS OBLIQUE-01** — A solid-billet spatial acoustic transducer and gyroscopic resonance core. Machined from continuous cold-forged tellurium copper, sintered tungsten, and optical fused silica crystal.
- **The Big Idea**: *High-mass acoustic gravity: sound liberated from vibration through unyielding physical mass.*
- **Three Brand Adjectives**: **Monolithic**, **Kinetic**, **Unyielding**.
- **First Three Seconds Feeling**: The visitor feels the visceral weight of a 42-kilogram block of cold, hand-finished copper, suspended in dark silent space, waiting to be unleashed into physical harmonic motion.

---

## 2. Visual Language: "Tectonic Machining"

Derived directly from 5-axis subtractive metal milling and optical lens grinding, not from digital trends:

1. **Edges (Beveled & Mitred)**: No pill buttons, no soft pill badges, no bubbly rounded rectangles. Every corner is either razor-sharp 90° mitred or precisely 45° chamfered (`clip-path: polygon(...)`), referencing CNC cutter path angles.
2. **Depth (Planar Stratification & Physical Occlusion)**: Surfaces are heavy solid slabs. Rather than diffuse blurred drop shadows, depth is expressed through razor-thin specular edge lines (0.5px - 1px), recessed debossed channels, and directional ambient occlusion.
3. **Texture (Subtractive Grain & Micro-Fluting)**: Micro-brushed anisotropic metal textures, fine mechanical dial fluting, and crystalline optical dispersion.
4. **Light (Raking Hard Specular & Core Incandescence)**: Lighting simulates a dark cleanroom inspection spotlight: raking directional light across machined toolmarks, with an internal warm molten core that emanates through the fused silica crystal lens.
5. **Scale (Architectural Monolith vs. Precision Calibration)**: Tectonic scale jumps between monumental, heavyweight sculptural typography and precise, calibrated laboratory telemetry.

---

## 3. Colour System: Semantic Tokens in OKLCH

- **Mode Choice**: **Deep Volcanic Umber & Cold Obsidian Dark Field**. 
  *Justification*: An acoustic instrument machined from solid copper and tungsten requires a dark, non-reflective acoustic absorption environment to let the warmth of polished metal and internal crystal luminescence dominate.

### Semantic OKLCH Palette:
- `--bg-primary`: `oklch(0.12 0.015 250)` — Deep basalt / carbon chamber floor (dark, warm undertone, no generic neutral gray).
- `--bg-surface`: `oklch(0.16 0.02 245)` — Machined substrate slab.
- `--bg-surface-elevated`: `oklch(0.20 0.025 240)` — Elevated inspection stage.
- `--ink-primary`: `oklch(0.96 0.01 70)` — Pure unbleached platinum white (contrast ratio > 14:1 vs `--bg-primary`, passes WCAG AAA).
- `--ink-muted`: `oklch(0.70 0.02 65)` — Brushed titanium secondary text (contrast ratio > 6:1 vs `--bg-primary`, passes WCAG AA).
- `--ink-faint`: `oklch(0.48 0.02 60)` — Calibrated hairline metric text (contrast ratio > 3.5:1).
- `--line-subtle`: `oklch(0.25 0.02 240 / 0.7)` — Hairline milled seam.
- `--line-active`: `oklch(0.75 0.16 62 / 0.8)` — Laser alignment datum.
- `--accent`: `oklch(0.76 0.18 58)` — Molten Ember / Tellurium Copper (warm, electric radiant copper; at 58° hue, firmly separated from volt yellow/chartreuse > 110° and purple/indigo 280°-320°).
- `--accent-ink`: `oklch(0.12 0.02 50)` — High-contrast carbon ink on accent surfaces.
- `--accent-glow`: `oklch(0.76 0.18 58 / 0.18)` — Soft specular resonance field.
- `--state-interactive-hover`: `oklch(0.82 0.20 60)` — Heated copper state.

---

## 4. Typography System

### Candidate Pairing Evaluation:
1. **Syne (Display) + Plus Jakarta Sans (Body)**:
   - *Syne*: Brutalist, architectural mass, wide structural cuts, flared terminals. Evokes monolithic metal plates.
   - *Plus Jakarta Sans*: Clean, crisp, geometric yet human, exceptionally legible at small sizes.
   - *Verdict*: **CHOSEN**. Uncompromising physical presence that elevates the site into an Awwwards / FWA tier art direction.
2. **Cabinet Grotesk + Satoshi**: High quality but leans too conventional Swiss tech.
3. **Fraunces + Outfit**: Warm and editorial but lacks the raw mechanical precision required for a 42kg acoustic instrument.

### Fluid Type Scale (`clamp`):
- `display-hero`: `clamp(3.8rem, 11vw, 12.5rem)` — Hero monument headline (weight 800, line-height 0.88).
- `display-section`: `clamp(2.4rem, 6.5vw, 6.8rem)` — Major narrative anchors (weight 700, line-height 0.95).
- `display-sub`: `clamp(1.5rem, 3.2vw, 3.2rem)` — Secondary thematic titles.
- `body-lead`: `clamp(1.15rem, 1.8vw, 1.5rem)` — Manifesto introductory prose.
- `body-standard`: `clamp(0.95rem, 1.1vw, 1.125rem)` — Technical specifications & explanations.
- `caption-telemetry`: `clamp(0.75rem, 0.85vw, 0.875rem)` — Calibrated acoustic readouts and indices.

---

## 5. Layout System

- **Grid Architecture**: 12-column variable fluid grid with 3-tier sub-column offsets.
- **Breakpoints**:
  - `mobile`: 360px - 767px (single-column tactile stacking, custom touch-drag controls, safe-area padded)
  - `tablet`: 768px - 1023px (asymmetric 2-column rhythm)
  - `desktop`: 1024px - 1439px (full 12-column spatial canvas)
  - `wide`: 1440px - 2560px (contained 1800px max-width with outer telemetry margins)
- **Section Composition Rule**: *Zero consecutive repetition.*
  - Section 1 (Hero): Off-center split screen, floating 3D viewport right/center, vertical kinetic anchor left.
  - Section 2 (Acoustic Physics Manifesto): Horizontal scrubbed filmstrip track with masonry mass blocks.
  - Section 3 (Scroll-Driven Exploded Core): Pinned viewport stage with 3D explosion and progressive spatial callouts.
  - Section 4 (Tactile Material Archive): Quadrant split grid with interactive material shader inspection.
  - Section 5 (Acoustic Performance Waveform): Full-width interactive audio canvas & real-time spectral analyzer.
  - Section 6 (The Foundry & Precision Milling): Staggered asymmetric editorial journal with variable parallax speeds.
  - Section 7 (Spatial Soundfield Chamber Simulator): Interactive radial drag node with acoustic vector paths.
  - Section 8 (Waitlist Allocation Terminal): Monolithic reservation console with live telemetry verification and ticket generation.
  - Section 9 (Colophon & Harmonic Emitter): Architectural split colophon with live synth test tone generator.

---

## 6. Motion System

- **Motion Principles**: Heavy inertia, mechanical friction, zero floaty bounce. Elements feel as if they weigh kilograms.
- **Easing Tokens**:
  - `--ease-heavy`: `cubic-bezier(0.16, 1, 0.3, 1)` (Power4 out, for arrivals and unmasking)
  - `--ease-friction`: `cubic-bezier(0.25, 0.1, 0.25, 1)` (Mechanical linear-damped friction)
  - `--ease-snap`: `cubic-bezier(0.77, 0, 0.175, 1)` (Dial detent click)
- **Duration Tokens**:
  - `--duration-micro`: `180ms` (Hairline hover, dial click)
  - `--duration-ui`: `400ms` (Chamber state switch, menu toggle)
  - `--duration-scene`: `1200ms` (Camera orbital move, narrative transition)
- **Parallax Tiers**:
  - Background grid / grain: `0.05x`
  - Secondary typography: `0.25x`
  - Core 3D model: Scrub-locked 1:1 timeline
  - Foreground telemetry: `0.45x`
- **What Moves vs. What Stays Still**:
  - *Moves*: The 3D physical object (rotates, tilts, separates into strata), type masks, interactive waveforms, spatial listening nodes.
  - *Stays Still*: Core structural grid anchors, bounding hairline frames, navigation datum lines, primary form inputs. Prevents disorientation and preserves cognitive stability.

---

## 7. Information Architecture & Navigation

- **Navigation Pattern: Bottom Floating Telemetry Dock & Monogram Anchor**:
  - *Top Left*: Chamfered KHORALIS Monogram with edition genesis mark.
  - *Top Right*: Live acoustic status (`96 kHz / 24-BIT // REAL-TIME`).
  - *Bottom Dock*: Floating chamfered titanium bar with:
    1. Active Section Indicator (e.g. `[03 // CORE DISASSEMBLY]`)
    2. Interactive scrub timeline with visual chapter detents
    3. Live Audio/Tone test toggle
    4. Chamfered primary CTA: `[ RESERVE ALLOCATION ]`
- **Full Accessibility**: Keyboard navigable (`Tab`, `Space`, `Enter`), ARIA live regions for telemetry updates, skip link (`#main-content`), and complete high-contrast focus rings.
