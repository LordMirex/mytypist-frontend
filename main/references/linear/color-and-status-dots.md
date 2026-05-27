# Linear — Color & Status System

Source: direct observation + linear.app/now + marcus-skills analysis

## What
Near-monochrome palette where color is used sparingly and intentionally. Status indicators, accent, nothing decorative. Shifted from cool blue-ish to warmer gray in latest refresh.

## Why It Works
- Color restraint ≠ no color. The palette is restrained but the STATUS system is colorful.
- Three status colors: green (success), amber (warning), red (error)
- Accent color reserved for: active nav items, links, primary actions, focus rings
- "Color at 1-10% lightness" — background tints at very low opacity

## Key Details
- Status dots: tiny 6px colored circles for status indicators
- Badge dots on sidebar items for notification state
- Subtle background tints: `rgba(color, 0.05-0.1)` 
- Accent borders: 3px left border for active nav items
- No decorative color anywhere — no gradient headers, no colored card borders, no icon backgrounds
- Warmer gray base (shifted from cool blue-gray in 2025 refresh)
- Custom theme builder allows users to select base UI + accent + contrast

## Apply To MyTypist
- Near-monochrome with violet-indigo accent (NOT blue)
- Status dots: 6px circles for document states (draft, pending, signed, archived)
- Status colors only for functional signals, never decoration
- Background tints at `rgba(accent, 0.05)` for active/selected items
- Accent left border (3px) for active navigation
- Warm gray base, not cool gray — editorial warmth
