# Linear — Sidebar & Navigation

Source: direct product observation + linear.app/blog + gunpowderlabs.com analysis

## What
Inverted-L navigation: fixed vertical sidebar + horizontal header forming an L-shape. Content fills remaining space. Sidebar is 256px open, collapses to icons-only (~48px).

## Why It Works
- Sidebar is **a few notches dimmer** than main content — after user reaches destination, navigation recedes, content takes precedence
- 32px item height with 12px horizontal padding creates tight but not cramped density
- Active item: 3px accent left border + subtle background tint (`rgba(accent, 0.05)`)
- No hover background change on non-interactive sidebar items
- Section headers: all-caps 10px, secondary text color, minimal padding above

## Key Details
- Sidebar is NOT a tree/explorer — it shows saved views and pinned items, not a filesystem
- Customizable: right-click to reorder, hide, or show items behind "More" menu
- Notification style per-item: count badge or subtle dot (user chooses)
- Icons de-emphasized in latest design refresh — smaller scale, no colored backgrounds
- "Go-to" navigation: `g` then letter (e.g., `g i` for inbox) — vim-inspired

## Apply To MyTypist
- Sidebar: 256px, 32px item height, dim background (a few notches below content)
- Active state: 3px accent left border + subtle background
- Collapsible to 48px icon-only
- Dim the sidebar, don't let it compete with document content
- Workspace section headers: all-caps 10px
