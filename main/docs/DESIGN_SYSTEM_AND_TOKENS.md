# Design System & Design Tokens: Precision Enterprise Editorial

This document specifies the visual language for the MyTypist **Document Operating System**.

## 1. Visual Identity: Precision Enterprise Editorial
The goal is **restrained sophistication** and **operational clarity**. Move beyond "mockup" aesthetics to a unique, professional business core identity.

### Typography (The Soul of MyTypist)
- **Sans (Primary UI)**: **Inter**. Focus on high information density and spatial consistency.
- **Serif (Editorial Hierarchy)**: **Playfair Display**. Use for headings, document titles, and premium accents.
- **Hierarchy**: Emphasize typography-based navigation and clear rhythm. Avoid oversized typography.

### Color Palette (Monochrome Dominant)
- **Base**: Monochrome palette (Grayscale/Slate). 
- **Restrained Usage**: Extremely limited color for critical signals ONLY (e.g., specific trust/success/error indicators).
- **Surface**: Paper-like surfaces, clean grid systems, and thin dividers. Avoid glowing buttons or trendy gradients.

### Interaction & Effects
- **Shadows**: Minimal shadows. Focus on precision alignment and spacing rhythm instead of elevation.
- **Motion**: Restrained, professional transitions (Framer Motion). Micro-behaviors focused on interaction smoothness.
- **Document Realism**: UI patterns that feel like professional publishing software (Adobe Acrobat, Figma, Notion).

## 2. Extraction Recommendations for 'main'

1. **Config Format**: Use v1's **TypeScript (`.ts`)** format for the final `tailwind.config.ts`.
2. **Typography**: Declare the dual-font system (Inter + Playfair Display).
3. **Spacing Scale**: Obsess over spacing consistency and rhythm. Port v2's extended spacing (`18`, `88`, `128`).
4. **Plugins**: Ensure `tailwindcss-animate`, `@tailwindcss/typography`, and `@tailwindcss/forms` are included.
