# MyTypist — AI Agent Design Rules

**READ `ai-rules/MASTER.md` BEFORE WRITING ANY UI CODE.**

This is the MyTypist project — a Document Operating System for Nigerian users. The `ai-rules/` folder contains the complete design system every AI agent on this project must follow.

## Quick Reference

### Project
- Stack: React 18 + TypeScript + Vite, raw CSS with CSS variables, Zustand, Motion, Swiper
- Code lives in: `main/src/`
- Currency: ₦ Naira only. No `$`
- Accent color: `#6C47FF`

### Component Sources (in order)
1. `npx shadcn@latest add [component]`
2. `npx shadcn@latest add [21st.dev URL]`
3. `npx shadcn@latest add https://efferd.com/r/[block-name].json`
4. Uiverse.io — fetch link content and adapt

### Writing
No banned words: additionally, align with, crucial, delve, enhance, fostering, highlight (verb), intricate, meticulous, pivotal, showcase, seamless, leverage (verb), utilize, empower, revolutionize, groundbreaking, robust, journey/ecosystem (metaphorical). Default to "is." No trailing "-ing" editorializing. Short declarative sentences. Full rules: `ai-rules/writing.md`

### Hard Bans
- No soft gradients, glassmorphism, oversized radii, pill overload
- No generic 3-column equal feature card layout
- No `Inter` as default font
- No em-dashes (`—`)
- No `window.addEventListener('scroll', ...)` for scroll effects
- No fake product UIs built from `<div>` rectangles
- No `$` currency — ₦ only

### For 3D / Spline work
Stop. Read `ai-rules/spline-handoff.md`. Do not build in Three.js or canvas.

## Full Design Rules
- `ai-rules/MASTER.md`
- `ai-rules/taste-skill/SKILL.md`
- `ai-rules/uncodixfy/SKILL.md`
- `ai-rules/ui-ux-pro-max/SKILL.md`
- `ai-rules/tools.md`
- `ai-rules/spline-handoff.md`
