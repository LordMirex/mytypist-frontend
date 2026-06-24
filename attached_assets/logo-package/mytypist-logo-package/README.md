# MyTypist logo package

Replaces the placeholder "M on purple" mark. Open **logo-showcase.html** in a
browser first — it shows every variant, the color tokens, and a code snippet.

## What's in here

```
logo-showcase.html        ← open this first
favicon.ico                ← drop in /public, link in <head> as usual
svg/                        ← use these in the codebase (crisp at any size)
png/                        ← for anywhere SVG isn't supported (app stores, social, slides)
```

### svg/

| File | Use it for |
|---|---|
| `mytypist-icon-dark.svg` | App icon, browser tab icon, social avatar — deep violet background |
| `mytypist-icon-light.svg` | Same, on a soft lavender background |
| `mytypist-mark-tonal.svg` | The mark alone, transparent background, full color — most flexible, use next to the wordmark |
| `mytypist-mark-mono-purple.svg` | Single-ink violet version, for light backgrounds |
| `mytypist-mark-mono-white.svg` | Single-ink white version, for dark backgrounds / the footer band |
| `mytypist-mark-mono-black.svg` | Single-color, for print or anywhere only one ink is available |
| `mytypist-wordmark-light.svg` | Icon + "MyTypist" text combined, light backgrounds |
| `mytypist-wordmark-dark.svg` | Icon + "MyTypist" text combined, dark backgrounds |

### png/

Same set, rasterized. `mytypist-icon-*.png` comes in 16/32/48/64/128/192/256/512px
for manifest icons, app store listings, and social cards. `mark-tonal-512` and the
two `wordmark-*-2x` files are transparent-background PNGs for docs/slides.

## Color tokens

```css
--violet-300: #A893FF;
--violet-500: #8B6FFD;
--violet-600: #6D4AEB;  /* primary brand purple, matches the existing site */
--violet-700: #5634C9;
```

## Drop-in usage

**Favicon / manifest** — in `index.html`:
```html
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" type="image/svg+xml" href="/mytypist-icon-dark.svg">
<link rel="apple-touch-icon" href="/png/mytypist-icon-192.png">
```

**Wordmark in React** — pairs with the existing two-weight type treatment:
```jsx
<span className="flex items-center gap-2">
  <img src="/svg/mytypist-mark-tonal.svg" className="h-8 w-8" alt="MyTypist" />
  <span>
    <span className="font-semibold text-gray-500">My</span>
    <span className="font-extrabold text-gray-950">Typist</span>
  </span>
</span>
```

Or inline the SVG directly (recommended — no extra request, color/opacity
stays editable): copy the `<path>` elements out of `mytypist-mark-tonal.svg`
into a component.

## About the mark

Four facets in rotation, each a step lighter going clockwise. Three are pure
geometry; the top-left one is a literal folded-corner page — same trick
Notion uses on the "N." Abstract at a glance, legible as "document software"
on a closer look. Tested down to a 16px favicon; the silhouette holds at
every size in this package.
