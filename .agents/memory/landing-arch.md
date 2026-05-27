---
name: Landing page section architecture
description: Each section of the landing page must have a distinct visual identity — different backgrounds, layouts, and typographic weight. No two adjacent sections should look the same.
---

## Section visual rhythm (in order)

1. **Header** — sticky, 48px, warm surface bg, hamburger on mobile
2. **Hero** — warm off-white bg, split layout (copy left, doc mockup right on ≥768px), stacked on mobile
3. **Stats strip** — dark near-black bg (`#12120f` / `var(--color-text-primary)`), 2×2 grid mobile → 4-col tablet
4. **Pipeline strip** — white surface bg, bordered, horizontally scrollable on mobile, connected-node Trigger.dev style with colored top accent bars
5. **Features** — white surface bg, numbered editorial table (01-05), 3-column on tablet (num+name | desc | tag)
6. **Competitor grid** — secondary bg, bordered grid cells, "MyTypist" closing block in violet tint
7. **Pricing** — warm off-white bg, side-by-side plans (stacked mobile)
8. **CTA** — near-black bg (`#12120f`), centered, light text
9. **Footer** — white surface bg

**Why:** User rejected flat/plain sections where "contents are just listed there plain all same listings." Visual rhythm requires alternating backgrounds, large number anchors, dark chapter breaks.

**How to apply:** Never place two sections with the same background color adjacent to each other. Every section needs an eyebrow label, a bold heading, and a distinct layout pattern (table vs grid vs list vs split).
