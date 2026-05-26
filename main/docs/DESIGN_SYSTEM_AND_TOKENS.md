# Design System & Design Tokens: v1 vs v2

## High-Level Summary
- **v1 (Tailwind Config TS)**: Uses a standard **Shadcn UI** approach with HSL variables. It has a specific `brand` color palette ranging from 50 to 900 (Blues). It focuses on TypeScript safety for its configuration.
- **v2 (Tailwind Config JS)**: A highly customized design system. It introduces a separate **Serif/Accent font** (Playfair Display) alongside a Sans font (Inter). It uses a rich set of custom shadows (`conversion`, `trust`, `brand`) and extended spacing tokens.

## Detailed Comparison

### 1. Typography
- **v1**: No explicit font family declared in the Tailwind config; likely relies on the default Tailwind Sans stack or a root CSS declaration.
- **v2**: 
  - **Sans**: Inter (Standard for UI).
  - **Serif/Accent**: Playfair Display. This is a crucial stylistic choice that gives v2 a "premium" feel.
- **Verdict**: Use v2's font strategy for the final project to differentiate the brand.

### 2. Color Palettes
- **v1 (HSL focus)**: Relies on `hsl(var(--primary))`. This makes theming easier (e.g., Dark Mode) but can be harder to read in the config.
- **v2 (CSS Variables focus)**: Uses `var(--color-primary)`. It includes specialized semantic colors:
  - `success`, `warning`, `error`.
  - `conversion` (Orange - for CTAs).
  - `brand-authority` (Dark Blue).
  - `trust` (Emerald - for security signals).
  - `canvas` (Light Gray - for backgrounds).
- **Verdict**: Adopt v2's semantic naming but keep v1's HSL implementation for easier theming.

### 3. Visual Effects (Shadows & Borders)
- **v1**: Standard Shadcn radii (`lg`, `md`, `sm`).
- **v2**: Introduces specialized shadows that contribute to the "Modern" feel:
  - `shadow-conversion`: A glowing orange shadow for primary buttons.
  - `shadow-trust`: A green glow for security elements.
  - `shadow-elevation`: For cards that should look raised.
- **Verdict**: Port all v2 custom shadows to the final project.

### 4. Animations
- **v1**: Simple `fade-in`, `slide-in`, and `accordion` animations.
- **v2**: More "playful" animations: `pulse-slow`, `bounce-gentle`, and `scale-in`.
- **Verdict**: Merge both. Keep v1's functional animations (accordions) and add v2's decorative ones.

## Extraction Recommendations for 'main'

1. **Config Format**: Use v1's **TypeScript (`.ts`)** format for the final `tailwind.config.ts`.
2. **Typography**: Declare the dual-font system (Inter + Playfair Display).
3. **Colors**: 
   - Use the **v1 HSL variables** as the base.
   - Map **v2 semantic names** (`conversion`, `canvas`, `trust`) to new HSL variables in the root CSS.
4. **Plugins**: Ensure `tailwindcss-animate`, `@tailwindcss/typography`, and `@tailwindcss/forms` are all included.
5. **Spacing**: Port v2's extended spacing (`18`, `88`, `128`) for more layout flexibility.
