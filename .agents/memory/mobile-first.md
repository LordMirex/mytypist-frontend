---
name: Mobile-first CSS rule
description: All CSS must be written mobile-first — base styles for mobile, scale up with min-width queries. Never write desktop-first and override down.
---

## Rule
Write base styles for mobile. Add `@media (min-width: Npx)` to scale up.
**Never** use `max-width` to undo desktop styles on mobile.

## Breakpoints
- Base (no query): mobile < 768px
- `min-width: 768px`: tablet
- `min-width: 1024px`: desktop
- `min-width: 1280px`: wide desktop

**Why:** User explicitly required mobile-first. They were frustrated that the landing page was not responsive and had no hamburger menu.

**How to apply:** Every new CSS file must follow this order. The hamburger menu pattern (`.lp-hamburger` visible by default, hidden at 768px; `.lp-header-nav` hidden by default, shown at 768px) is the canonical mobile nav pattern for public pages.
