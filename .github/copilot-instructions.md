# MyTypist — GitHub Copilot Instructions

READ `ai-rules/MASTER.md` BEFORE WRITING ANY UI CODE.

This is the MyTypist project — a Document Operating System for Nigerian users.

## Project
- Stack: React 18 + TypeScript + Vite, raw CSS with CSS variables, Zustand, Motion, Swiper
- Code in: `main/src/`
- Accent: `#6C47FF` | Currency: ₦ only | Mobile-first CSS

## Hard Banned (never generate these)
- Soft gradients as decoration
- Glassmorphism / frosted panels as default UI
- Rounded corners > 10px on cards, > 8px on buttons
- Pill-shaped buttons everywhere
- 3-column equal feature card layouts
- `Inter` as default font — use `Geist`, `Outfit`, `Cabinet Grotesk`
- Em-dashes (`—`) anywhere
- Pure `#000000` or `#ffffff`
- `window.addEventListener('scroll', ...)` for scroll — use Motion `useScroll()`
- Fake product UIs from `<div>` rectangles in heroes
- Metric-card grids as first dashboard instinct
- Uppercase + letter-spacing eyebrow labels everywhere
- `<small>` + `<h2>` + `<p>` headline block pattern

## What Good Looks Like — Linear, Raycast, Stripe, GitHub
- Sidebars: 240-260px, solid bg, `1px` border-right
- Buttons: solid fill, 8-10px radius max
- Cards: 8-12px radius, subtle `1px` border, shadow ≤ `0 2px 8px rgba(0,0,0,0.08)`
- Transitions: `100-200ms ease`
- Body: `14-16px`, `line-height: 1.6`, `max-width: 65ch`

## Installed
- `motion` → `import { motion } from "motion/react"`
- `swiper` → `import { Swiper, SwiperSlide } from 'swiper/react'`
- `lucide-react` — icons (already installed)

## Component Sources
1. `npx shadcn@latest add [component]`
2. `npx shadcn@latest add [21st.dev URL]`
3. `npx shadcn@latest add https://efferd.com/r/[block-name].json`
4. Brand style reference: fetch `https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/brands/[name]/DESIGN.md`

## 3D / Spline — STOP
Do not build in Three.js or canvas. See `ai-rules/spline-handoff.md`. Give user a Spline prompt. Wait for exported code.

## Full Design System
- `ai-rules/MASTER.md` ← read this first
- `ai-rules/taste-skill/SKILL.md`
- `ai-rules/uncodixfy/SKILL.md`
- `ai-rules/ui-ux-pro-max/SKILL.md`
- `ai-rules/tools.md`
- `ai-rules/spline-handoff.md`
