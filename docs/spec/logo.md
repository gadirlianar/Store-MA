# LOGO SPECIFICATION & FORENSICS (docs/spec/logo.md)

**Brand**: SRIGEN  
**Tag / Edition**: 001

---

### 1. Logo Anatomy
- **Wordmark**: `SRIGEN`
- **Typographic Character**:
  - All-caps heavy grotesque sans-serif with tight negative tracking (`-0.04em`).
  - Strict horizontal terminal on 'S', symmetrical angled diagonal on 'R', monoline square counters.
- **Badge Lockup**:
  - Oval pill badge with text `"001"`.
  - Background: Volt / Neon Green (`#D4FF00` / `#DEF86F`).
  - Text: Black (`#111111`), 700 bold weight, uppercase, letter-spacing `+0.08em`.
  - Border radius: `9999px` (fully rounded pill).

---

### 2. SVG Vector Implementation
To ensure pixel-exact sharpness and avoid reliance on local font installations, the logo is represented as a verified SVG lockup component in `src/components/common/BrandLogo.tsx`.

```tsx
export function BrandLogo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  // Renders vector SVG lockup matching measured crop
}
```
