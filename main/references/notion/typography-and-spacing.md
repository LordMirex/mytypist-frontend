# Notion — Typography & Spacing

Source: seedflip.co + designmd.cc + shade-solutions/notion-design-system

## What
Deliberately understated typography that lets user content shine. 16px body, 1.5-1.6 line height (generous by SaaS standards). Warm neutral text color (#37352F), not pure black.

## Why It Works
- "Notion's type system is designed to lose the visual competition against user content. On purpose." — The UI hierarchy is quiet; the user's own hierarchy (their headings, bold text, formatting) takes priority.
- No medium weight (500). Body at 400. Headings at 600/700. No semibold for labels. No bold for navigation.
- Marketing pages use serif headings (Noto Serif). Product uses sans-serif (Inter-based). This split is intentional: serif positions the product alongside journals and books; sans in-product stays neutral.
- Generous line height (1.5-1.6) is optimized for reading and writing, not density.

## Key Details
```css
--text-sm: 14px / 1.5     — Secondary body, labels
--text-base: 16px / 1.55  — Primary body (NOT 14px or 15px — 16px is editorial)
--text-lg: 18px / 1.5     — Section headers
--text-xl: 24px / 1.3     — Subsection titles
--text-2xl: 30px / 1.25   — Section headings
--text-3xl: 40px / 1.2    — Page titles
```
- UI text color: `#37352F` (warm dark gray, NOT pure black)
- Secondary text: `#615d59` (passes AA on white)
- Border radius: 3px (blocks), 8px (buttons), 12px (cards)
- 4px spacing base, 8px primary increment
- 44px form input height

## Apply To MyTypist
- Document body: 15px or 16px with 1.6 line height (generous, readable)
- UI text: warm dark gray, not pure black
- UI hierarchy stays quiet — user's document formatting takes visual priority
- No medium (500) weight anywhere in the system
- Spacing: 4px base, 8px increments
- Document reading max-width: 720px
