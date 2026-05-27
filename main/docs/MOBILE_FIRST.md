# Mobile-First Design Requirement

## Rule
All CSS in this project MUST be written **mobile-first**.

- Base styles target mobile (< 768px) — no media query wrapper
- Scale up with `@media (min-width: 768px)` for tablet
- Scale up with `@media (min-width: 1024px)` for desktop
- **Never** use `max-width` media queries to override desktop styles down to mobile

## Breakpoints
| Breakpoint | Target |
|---|---|
| Base (no query) | Mobile — < 768px |
| `min-width: 768px` | Tablet |
| `min-width: 1024px` | Desktop |
| `min-width: 1280px` | Wide desktop |

## Mobile Layout Rules
- Hamburger menu replaces nav on mobile
- Single-column layouts — stack, never shrink
- Hero: stacked (copy top, preview bottom or hidden)
- Sections: full-width, 20px horizontal padding
- Buttons: full-width or row depending on context
- Document mockup: hidden on mobile (< 768px) — too small to be useful
- Pipeline strip: horizontally scrollable on mobile (overflow-x: auto)
- Footer links: 2-column grid on mobile, 4-column on tablet+

## Component Patterns
- Always implement hamburger + mobile drawer for any public page with a nav
- Stats grid: 2×2 on mobile, 4-column on tablet+
- Feature table: stacked on mobile, 3-column on tablet+
- Pricing: single column on mobile, side-by-side on tablet+
- Competitor grid: single column on mobile, 3-column on tablet+

