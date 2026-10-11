# INTERACTIONS SPECIFICATION // STATES & POINTER BEHAVIOUR

## 1. Header Navigation
- **Default State**: Transparent background, dark text `#14110D`, volt pill button `#DEF86F`.
- **Scrolled State (`scrollY > 50px`)**: Glassmorphism translucent backdrop (`rgba(237, 235, 228, 0.88)` with `backdrop-filter: blur(12px)`), hairline bottom border `rgba(20, 17, 13, 0.08)`.
- **Nav Links Hover**: Underline expands from left to right; opacity increases to 1.0.
- **Active Section Indicator**: Solid volt green underline beneath the nav item matching the section currently in viewport (`THE DROP`, `ANATOMY`, `LOOKBOOK`, `STORY`).
- **"NOTIFY ME" Header Button**:
  - Hover: Scale 1.03x, brightness 1.05x, cursor pointer.
  - Active / Press: Scale 0.98x.
  - Click: Opens waitlist modal.

## 2. Hero Interactive Card & Magnifying Lens
- **Pointer Reactive Tilt**:
  - Central card rotates in 3D: `rotateX` (-12deg to +12deg), `rotateY` (-15deg to +15deg).
  - Smooth interpolation (lerp = 0.08) so the card follows pointer with realistic physical inertia.
- **Circular Magnifying Lens**:
  - Follows cursor within card bounds.
  - Diameter: 260px.
  - Border: 2px solid `#DEF86F` with radial volt glow (`box-shadow: 0 0 50px rgba(222, 248, 111, 0.5)`).
  - Effect: Masks front card surface to reveal inner dual-sneaker graphic underneath.
- **Floating Sneaker Wings**:
  - Left and right cropped sneakers float with subtle sine-wave vertical breathing (`±14px`, 3.6s cycle).
  - Parallax offset opposite to cursor direction (`±20px`).

## 3. Section 02 Specification Cards
- **Card Hover**:
  - Translation: -4px vertical elevation.
  - Shadow: Expands to `0 25px 50px -10px rgba(0, 0, 0, 0.1)`.
  - Thumbnails (`HEEL STACK`, `LACE UNIT`): Pop out with spring bounce (`scale: 1.05`, `duration: 0.35s`).

## 4. Waitlist Modal
- **Overlay**: Darkened blurred backdrop (`rgba(20, 17, 13, 0.6)` with `backdrop-filter: blur(8px)`).
- **Form**:
  - Email input with focus ring `#DEF86F`.
  - Inline format validation.
  - Submit state: loading spinner -> checkmark success state.
  - Escape key or backdrop click closes modal.
