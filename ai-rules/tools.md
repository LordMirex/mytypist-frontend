# Design Tools Reference

All tools available to any AI working on this project.

## shadcn/ui MCP Server
Live, accurate access to real shadcn/ui components. Configured in `.replit` as an MCP server (`npx -y @shadcn/mcp@latest`). When active, use it to look up component APIs before writing any shadcn component.

Manual fallback: `npx shadcn@latest add [component-name]`

## 21st.dev
Premium shadcn-compatible component library. Pull any component:
```bash
npx shadcn@latest add [21st.dev component URL]
```
Browse at https://21st.dev

## Efferd
Free shadcn-compatible block library (heroes, pricing, auth, FAQ, CTAs, etc.):
```bash
npx shadcn@latest add https://efferd.com/r/[block-name].json
```
Browse at https://efferd.com

## Uiverse.io
When the user gives a Uiverse.io link, fetch the page content and adapt the HTML/CSS/Tailwind/React code directly into the project component. No install needed.

## Swiper.js
Already installed: `swiper ^12.2.0`
```tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
```

## Motion (Framer Motion)
Already installed: `motion ^12.42.0`
```tsx
import { motion, useScroll, useMotionValue, useTransform } from 'motion/react'
```
Note: `framer-motion` still works as legacy alias. Prefer `motion/react`.

## awesome-design-md
When user names a brand style to match (Stripe, Linear, Notion, GitHub, Apple, etc.), fetch:
```
https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/brands/[brand-name]/DESIGN.md
```
Use the fetched DESIGN.md as the style reference for that section.

## UI/UX Pro Max
Database of 67 styles, 96 color palettes, 57 font pairings across 13 stacks.
Installed globally. Rules at `main/.agent/skills/ui-ux-pro-max/SKILL.md`

## Taste Skill
Anti-slop frontend rules. Full file: `ai-rules/taste-skill/SKILL.md`

## Uncodixfy
Bans generic "AI-looking" UI patterns. Full file: `ai-rules/uncodixfy/SKILL.md`
