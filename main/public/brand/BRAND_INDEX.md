# MyTypist Brand Assets

Everything in this folder is the official logo package. Use this as your single
source of truth whenever you need the mark or wordmark anywhere — website,
presentations, social, app stores, print, or docs.

---

## Quick reference

| What you need | File to use |
|---|---|
| App icon (dark bg, e.g. Replit, GitHub avatar) | `svg/mytypist-icon-dark.svg` |
| App icon (light bg, e.g. App Store preview) | `svg/mytypist-icon-light.svg` |
| Mark only — next to text, flexible use | `svg/mytypist-mark-tonal.svg` |
| Mark on a light background (single ink) | `svg/mytypist-mark-mono-purple.svg` |
| Mark on a dark background (single ink) | `svg/mytypist-mark-mono-white.svg` |
| Mark for print / black & white | `svg/mytypist-mark-mono-black.svg` |
| Full wordmark — light backgrounds | `svg/mytypist-wordmark-light.svg` |
| Full wordmark — dark backgrounds | `svg/mytypist-wordmark-dark.svg` |
| Browser favicon (all browsers) | `../favicon.ico` (in /public root) |
| Favicon — SVG fallback | `../mytypist-icon-dark.svg` |
| Apple touch icon (iOS home screen) | `png/mytypist-icon-192.png` |
| Social / OG card icon | `png/mytypist-icon-512.png` |
| App store listing icon | `png/mytypist-icon-512.png` |
| Slides / docs — light bg | `png/mytypist-wordmark-light-2x.png` |
| Slides / docs — dark bg | `png/mytypist-wordmark-dark-2x.png` |

---

## Folder layout

```
brand/
├── BRAND_INDEX.md              ← this file
├── README.md                   ← original package notes + color tokens
├── logo-showcase.html          ← open in browser to preview every variant
├── mytypist-logo-package.zip   ← original zip archive
├── svg/
│   ├── mytypist-icon-dark.svg
│   ├── mytypist-icon-light.svg
│   ├── mytypist-mark-tonal.svg
│   ├── mytypist-mark-mono-purple.svg
│   ├── mytypist-mark-mono-white.svg
│   ├── mytypist-mark-mono-black.svg
│   ├── mytypist-wordmark-light.svg
│   └── mytypist-wordmark-dark.svg
└── png/
    ├── mytypist-icon-16.png
    ├── mytypist-icon-32.png
    ├── mytypist-icon-48.png
    ├── mytypist-icon-64.png
    ├── mytypist-icon-128.png
    ├── mytypist-icon-192.png
    ├── mytypist-icon-256.png
    ├── mytypist-icon-512.png
    ├── mytypist-mark-tonal-512.png
    ├── mytypist-wordmark-light-2x.png
    └── mytypist-wordmark-dark-2x.png
```

---

## Brand colors

```css
--violet-300: #A893FF;   /* lightest — highlight facet */
--violet-500: #8B6FFD;   /* mid — primary mark facet */
--violet-600: #6D4AEB;   /* core brand purple */
--violet-700: #5634C9;   /* darkest mark facet */
```

---

## Where the logo is used in code

| Location | Component | Variant |
|---|---|---|
| Public header (nav bar) | `src/components/brand/LogoMark.tsx` | `tonal` |
| Public footer | `src/components/brand/LogoMark.tsx` | `purple` |
| Browser tab / favicon | `index.html` | `favicon.ico` + SVG |
| iOS home screen | `index.html` | `png/mytypist-icon-192.png` |

To use the mark anywhere else, import the component:

```tsx
import { LogoMark } from '@/components/brand/LogoMark'

// Tonal (multicolor) — for light backgrounds
<LogoMark size={32} variant="tonal" />

// White — for dark/colored backgrounds
<LogoMark size={32} variant="white" />

// Purple mono — for light backgrounds, single ink
<LogoMark size={32} variant="purple" />
```
