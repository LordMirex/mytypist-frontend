# MyTypist — AI Agent Design Rules

**READ `ai-rules/MASTER.md` BEFORE WRITING ANY UI CODE.**

This is the MyTypist project — a Document Operating System for Nigerian users. The `ai-rules/` folder contains the complete design system every AI agent on this project must follow.

## Mandatory pre-flight (every session, every UI task)

1. Read `ai-rules/MASTER.md`
2. Read `ai-rules/taste-skill/SKILL.md` (fetched fresh from github.com/Leonxlnx/taste-skill — 1206 lines)
3. Read `ai-rules/uncodixfy/SKILL.md` (fetched fresh from github.com/cyxzdev/Uncodixfy)
4. Read `ai-rules/ui-ux-pro-max/SKILL.md` (UI/UX Pro Max v2.2.3 — 67 styles, 96 palettes, 57 font pairings)
5. State before any code: *"Reading this as: [page kind] for [audience], [vibe], dials: V=X M=Y D=Z"*

## Tools — use automatically, no prompting required

### Context7 MCP (ALWAYS ON)
Resolves live library docs before implementing against any API. Never code against stale/hallucinated docs.
- Installed globally: `context7-mcp` binary at `/home/runner/workspace/.config/npm/node_global/bin/context7-mcp`
- Trigger: every library/framework/API task — automatic

### 21st.dev Magic Chat (ALWAYS ON)
Generate and pull components automatically before hand-rolling anything.
- API key: `20ada901278d1347c6893f2e7421f1965a0301c061adb0cb994b49a96ec13c87`
- Endpoint: `https://api.21st.dev/api/magic`
- Header: `x-api-key: 20ada901278d1347c6893f2e7421f1965a0301c061adb0cb994b49a96ec13c87`

### shadcn MCP (ALWAYS ON)
Configured in `.replit` as `npx -y @shadcn/mcp@latest`. Live accurate component specs.

### Component sources (priority order)
1. shadcn via MCP → `npx shadcn@latest add [component]`
2. 21st.dev Magic Chat (API above) or `npx shadcn@latest add [21st.dev URL]`
3. Efferd → `npx shadcn@latest add https://efferd.com/r/[block-name].json`
4. Uiverse.io → fetch link content, adapt to project stack + design rules
5. awesome-design-md → `curl https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/[brand]/DESIGN.md`

### Motion (installed: `motion ^12.42.0`)
```tsx
import { motion, useScroll, useMotionValue, useTransform } from 'motion/react'
```

### Swiper (installed: `swiper ^12.2.0`)
```tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
```

## Project
- Stack: React 18 + TypeScript + Vite, raw CSS with CSS variables, Zustand, Motion, Swiper
- Code lives in: `main/src/`
- Currency: ₦ Naira only. No `$`
- Accent: `#6C47FF`
- Mobile-first CSS: base styles for mobile, scale UP with `min-width`. Never `max-width` overrides.
- All inputs: `font-size: 16px` minimum (iOS zoom prevention)

## Hard bans
- No soft gradients, glassmorphism, oversized radii (max 10px cards / 8px buttons), pill overload
- No generic 3-column equal feature card layout
- No `Inter` as default font — use `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`
- No em-dashes (`—`)
- No `window.addEventListener('scroll', ...)` for scroll effects
- No fake product UIs built from `<div>` rectangles
- No pure `#000` or `#fff`

## Writing
Default to "is." No trailing "-ing" editorializing. No AI sign-offs.
Banned: additionally, seamless, leverage, utilize, empower, revolutionize, groundbreaking, robust, showcase, pivotal, meticulous, crucial, delve, enhance, journey (metaphorical).
Full rules: `ai-rules/writing.md`

## For 3D / Spline
Stop. Read `ai-rules/spline-handoff.md`. Do not build in Three.js or canvas. Write Spline AI prompt + export format. Wait for pasted code.

## Full rule files
- `ai-rules/MASTER.md` — complete design system
- `ai-rules/taste-skill/SKILL.md` — anti-slop rules (GitHub fresh, 1206 lines)
- `ai-rules/uncodixfy/SKILL.md` — banned AI-UI patterns (GitHub fresh)
- `ai-rules/ui-ux-pro-max/SKILL.md` — styles/palettes/fonts database (uipro v2.2.3)
- `ai-rules/tools.md` — all tools with API keys and install paths
- `ai-rules/writing.md` — writing rules
- `ai-rules/spline-handoff.md` — Spline handoff protocol
