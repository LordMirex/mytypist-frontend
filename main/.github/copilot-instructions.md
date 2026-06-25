# MyTypist — GitHub Copilot Instructions

READ `ai-rules/MASTER.md` BEFORE WRITING ANY UI CODE. (path from repo root)

This is the MyTypist project — a Document Operating System for Nigerian users.

## Project
- Stack: React 18 + TypeScript + Vite, raw CSS with CSS variables, Zustand, Motion, Swiper
- Code in: `main/src/`
- Accent: `#6C47FF` | Currency: ₦ only | Mobile-first CSS

## Anti-Slop Mandate
You MUST NOT produce the following (hard bans):
- Soft gradients as decoration
- Glassmorphism / frosted panels as default UI
- Rounded corners > 10px on cards, > 8px on buttons
- Pill-shaped buttons everywhere
- 3-column equal feature card layouts (the classic AI layout)
- `Inter` as the default font — use `Geist`, `Outfit`, `Cabinet Grotesk`
- Em-dashes (`—`) anywhere in copy
- Pure `#000000` or `#ffffff` — use off-black/off-white
- `window.addEventListener('scroll', ...)` — use Motion's `useScroll()`
- Fake product UIs built from `<div>` rectangles
- Metric-card grids as the first dashboard idea
- Generic `<small>` eyebrow labels + `<h2>` + `<p>` headline blocks
- Uppercase + letter-spacing labels everywhere

## What Good Looks Like
Linear. Raycast. Stripe. GitHub. Functional. No decoration for decoration's sake.
- Sidebars: 240-260px, solid bg, `1px` solid border-right
- Buttons: solid fill, `8-10px` radius max
- Cards: `8-12px` radius, `1px` border, shadow ≤ `0 2px 8px rgba(0,0,0,0.08)`
- Transitions: `100-200ms ease`
- Body type: `14-16px`, `line-height: 1.6`, `max-width: 65ch`

## Installed Libraries
- `motion` → `import { motion } from "motion/react"`
- `swiper` → `import { Swiper, SwiperSlide } from 'swiper/react'`
- `lucide-react` — icons already installed

## Component Sources
1. `npx shadcn@latest add [component]`
2. `npx shadcn@latest add [21st.dev URL]`
3. `npx shadcn@latest add https://efferd.com/r/[block-name].json`
4. Brand style: fetch `https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/brands/[name]/DESIGN.md`

## Writing Rules
Banned words (never use): additionally, align with, crucial, delve, enhance, fostering, highlight (verb), intricate, meticulous, pivotal, showcase, seamless, leverage (verb), utilize, empower, revolutionize, groundbreaking, robust, journey/ecosystem (metaphorical), and more — see `ai-rules/writing.md`.
Default to "is." No trailing "-ing" editorializing clauses. No AI sign-offs. Short declarative sentences. UI copy: verb + noun buttons, literal placeholders, plain error messages.

## 3D / Spline
STOP. Do not build in Three.js. See `ai-rules/spline-handoff.md`. Give user a Spline prompt. Wait.

## Full Design System
- `../../ai-rules/MASTER.md` (from repo root: `ai-rules/MASTER.md`)
- `../../ai-rules/taste-skill/SKILL.md`
- `../../ai-rules/uncodixfy/SKILL.md`
- `../../ai-rules/ui-ux-pro-max/SKILL.md`
- `../../ai-rules/writing.md`
