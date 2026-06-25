---
inclusion: always
---

# MyTypist Design Rules (Kiro)

READ `ai-rules/MASTER.md` (from repo root) BEFORE WRITING ANY UI CODE.

## Project
- Stack: React 18 + TypeScript + Vite, raw CSS, Zustand, Motion, Swiper
- Code in: `main/src/`
- Accent: `#6C47FF` | Currency: ₦ only | Mobile-first CSS

## Hard Banned
- Soft gradients, glassmorphism, oversized radii (>10px cards, >8px buttons)
- Pill buttons everywhere, 3-column equal feature cards
- `Inter` as default font
- Em-dashes (`—`), pure `#000`/`#fff`
- `window.addEventListener('scroll', ...)` for scroll effects
- Fake product UIs from `<div>` rectangles

## What Good Looks Like
Linear, Raycast, Stripe, GitHub — functional, honest, no decoration for decoration's sake.

## Installed Libraries
- `motion` → `import { motion } from "motion/react"`
- `swiper` → `import { Swiper, SwiperSlide } from 'swiper/react'`

## Full Rules (from repo root)
- `ai-rules/MASTER.md`
- `ai-rules/taste-skill/SKILL.md`
- `ai-rules/uncodixfy/SKILL.md`
- `ai-rules/ui-ux-pro-max/SKILL.md`
- `ai-rules/tools.md`
- `ai-rules/spline-handoff.md`
