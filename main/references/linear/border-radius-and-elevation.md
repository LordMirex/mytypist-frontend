# Linear — Border Radius & Elevation

Source: linear.app/now + design tokens (oh-my-design.kr, explainx.ai, extractvibe.com).  
**Previous version of this file claimed "zero radius" — that was incorrect. Correction below.**

## What
Linear uses a **graduated border-radius scale**, not zero radius. Data surfaces get very small radii (2-4px) that feel sharp compared to typical SaaS (8-12px). Floating elements get noticeably larger radii (8-12px). The contrast between surface radii and floating radii is the real design signal.

### Linear's Actual Radius Scale
| Token | Value | Used On |
|-------|-------|---------|
| Micro | 2px | Inline badges, toolbar buttons, small tags |
| Standard | 4px | Small containers, list items, table row indicators |
| Comfortable | 6px | Buttons, inputs, functional elements |
| Card | 8px | Cards, dropdowns, popovers |
| Panel | 12px | Panels, modals, section containers |
| Large | 22px | Large decorative containers |
| Pill | 9999px | Chips, filter pills, status tags |
| Circle | 50% | Icon buttons, avatars, status dots |

Primary buttons sometimes use 0px radius (extractvibe source), but this is an exception, not the rule.

## The Real Principle
The gap between data-surface radii (2-4px) and floating-element radii (8-12px) creates the hierarchy — NOT absolute zero. Surfaces with 2-4px radius feel "sharp" because they contrast with the 8-12px floating elements, not because they're literally at 0px.

## Why It Works
1. **Minimal radius on data surfaces (2-4px)** — avoids the "card-based SaaS" look (where everything has 8-16px radius), feels more like a professional tool
2. **Larger radius on floating elements (8-12px)** — clearly signals "this is above the data plane"
3. **Structure from border hierarchy, not from radius** — Linear uses 1px borders at three opacity levels (micro/subtle/standard) to define section boundaries

## Key Details
- `box-shadow` on tables, cards, or panels = wrong. Shadows signal floating/overlaid elements only.
- Elevation comes from background color steps (surface ladder) and hairline borders, not from shadows
- Border hierarchy: strong (section boundaries), default (component borders), subtle (row separators)
- The surface ladder (4 steps) carries hierarchy without shadow

## Apply To MyTypist
- Document workspace, panels, sidebars: 2px radius (subtle, feels sharp)
- List items, table rows: 2px radius
- Buttons, inputs: 6px radius
- Modals, command palette, dropdowns, popovers: 10px radius
- Status badges, tags: 9999px (pill)
- The 2px→10px gap (8px difference) creates the same two-tier system Linear uses
