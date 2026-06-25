# MyTypist — Claude Design Rules

**READ `ai-rules/MASTER.md` BEFORE WRITING ANY UI CODE.**

This is the MyTypist project — a Document Operating System for Nigerian users. The `ai-rules/` folder contains the complete design system that every AI on this project must follow.

## Quick Reference — Critical Rules

### Always do
- Read `ai-rules/MASTER.md` first for any UI task
- Use existing project colors (`#6C47FF` accent, dark surfaces)
- Currency: ₦ Naira only — no `$`
- Mobile-first CSS: base styles for mobile, scale UP with `min-width`
- All inputs: `font-size: 16px` minimum (iOS zoom prevention)
- Animations: import from `motion/react`, respect `prefers-reduced-motion`
- Icons: Lucide is already installed, use it — or `@phosphor-icons/react`

### Never do
- No soft gradients as decoration
- No glassmorphism / frosted panels as default UI
- No oversized rounded corners (max 10px cards, 8px buttons)
- No pill-shaped buttons everywhere
- No generic 3-column equal feature card layouts
- No `Inter` font as default — use `Geist`, `Outfit`, `Cabinet Grotesk`
- No em-dashes (`—`) anywhere
- No pure `#000000` or `#ffffff`
- No `window.addEventListener('scroll', ...)` for scroll effects

### For 3D / Spline work
Stop. Read `ai-rules/spline-handoff.md`. Write the prompt for the user. Wait for them to paste the exported code.

## Full Rules
- `ai-rules/MASTER.md` — complete design system (start here)
- `ai-rules/taste-skill/SKILL.md` — anti-slop frontend rules (1200+ lines)
- `ai-rules/uncodixfy/SKILL.md` — banned AI-UI patterns
- `ai-rules/ui-ux-pro-max/SKILL.md` — styles, palettes, font pairings database
- `ai-rules/tools.md` — component sources (shadcn, 21st.dev, Efferd, etc.)
- `ai-rules/spline-handoff.md` — 3D handoff protocol
