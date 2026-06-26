# MyTypist — Claude Design Rules

**READ `ai-rules/MASTER.md` BEFORE WRITING ANY UI CODE.**

This is the MyTypist project — a Document Operating System for Nigerian users. The `ai-rules/` folder contains the complete design system that every AI on this project must follow.

## Mandatory pre-flight (every session, every UI task)

1. Read `ai-rules/MASTER.md`
2. Read `ai-rules/taste-skill/SKILL.md` (fetched fresh from github.com/Leonxlnx/taste-skill)
3. Read `ai-rules/uncodixfy/SKILL.md` (fetched fresh from github.com/cyxzdev/Uncodixfy)
4. Read `ai-rules/ui-ux-pro-max/SKILL.md` (UI/UX Pro Max v2.2.3 — 377 lines, 67 styles, 96 palettes)
5. State: *"Reading this as: [page kind] for [audience], [vibe], dials: V=X M=Y D=Z"*

## Tools — use automatically, no need to be asked

### Context7 MCP (ALWAYS ON)
Before implementing against any library API (React, Vite, Motion, TanStack, etc.), resolve docs via Context7:
- Binary installed: `/home/runner/workspace/.config/npm/node_global/bin/context7-mcp`
- Trigger: any library/framework/API task — automatic, not on-demand

### 21st.dev Magic Chat (ALWAYS ON)
- API key: `20ada901278d1347c6893f2e7421f1965a0301c061adb0cb994b49a96ec13c87`
- Endpoint: `https://api.21st.dev/api/magic`
- Header: `x-api-key: 20ada901278d1347c6893f2e7421f1965a0301c061adb0cb994b49a96ec13c87`
- Use to generate/pull components automatically before hand-rolling anything

### shadcn MCP (ALWAYS ON)
Configured in `.replit` — use for live accurate shadcn component specs before writing any shadcn component.

### Component sources (in priority order)
1. shadcn via MCP → `npx shadcn@latest add [component]`
2. 21st.dev Magic Chat (API above) or `npx shadcn@latest add [21st.dev URL]`
3. Efferd → `npx shadcn@latest add https://efferd.com/r/[block-name].json`
4. Uiverse.io → fetch link, adapt to project stack
5. awesome-design-md → `curl https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/[brand]/DESIGN.md`

### Motion — already installed (`motion ^12.42.0`)
```tsx
import { motion, useScroll, useMotionValue, useTransform } from 'motion/react'
```

### Swiper — already installed (`swiper ^12.2.0`)
```tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
```

## Always do
- Mobile-first CSS: base styles for mobile, scale UP with `min-width` only
- Currency: ₦ Naira only — never `$`
- All inputs: `font-size: 16px` minimum (iOS zoom prevention)
- Animations: `motion/react` only, respect `prefers-reduced-motion`
- Animate only `transform` and `opacity` — never `top/left/width/height`
- Icons: Lucide (already installed) or `@phosphor-icons/react`

## Never do
- No soft gradients as decoration
- No glassmorphism / frosted panels as default UI
- No oversized rounded corners (max 10px cards, 8px buttons, 6px inputs)
- No pill-shaped buttons everywhere
- No generic 3-column equal feature card layouts
- No `Inter` font as default — use `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`
- No em-dashes (`—`) anywhere
- No pure `#000000` or `#ffffff`
- No `window.addEventListener('scroll', ...)` for scroll effects
- No fake product UIs built from `<div>` rectangles

## Writing
Default to "is." No trailing "-ing" editorializing. No AI sign-offs. Short declarative sentences.
Banned: additionally, align with, crucial, delve, enhance, seamless, leverage, utilize, empower, revolutionize, groundbreaking, robust, journey (metaphorical), showcase, pivotal, meticulous.
Full rules: `ai-rules/writing.md`

## For 3D / Spline
Stop. Read `ai-rules/spline-handoff.md`. Write the Spline AI prompt. Specify export format. Wait for pasted code.

## Full rule files
- `ai-rules/MASTER.md` — complete design system (start here)
- `ai-rules/taste-skill/SKILL.md` — anti-slop frontend rules (1206 lines, GitHub fresh)
- `ai-rules/uncodixfy/SKILL.md` — banned AI-UI patterns (GitHub fresh)
- `ai-rules/ui-ux-pro-max/SKILL.md` — 67 styles, 96 palettes, 57 font pairings (uipro v2.2.3)
- `ai-rules/tools.md` — complete tool reference with API keys
- `ai-rules/writing.md` — writing rules
- `ai-rules/spline-handoff.md` — 3D handoff protocol
