# Design Tools Reference

All tools for any AI working on this project. Every tool below is self-operated — fetch yourself, do not ask the user.

---

## Context7 MCP — ALWAYS ON, automatic

Resolves live library docs before any API implementation. No hallucinated props, no stale APIs.

- **Binary:** `context7-mcp` (installed globally at `/home/runner/workspace/.config/npm/node_global/bin/context7-mcp`)
- **Version:** 3.2.2 (npm: `@upstash/context7-mcp`)
- **Trigger rule:** Every library/framework task — React, Vite, Motion, TanStack, Zustand, Swiper, Lucide. Automatic. Do not wait to be asked.

---

## 21st.dev Magic Chat — self-call, no user input needed

Generates and retrieves premium shadcn-compatible components via AI. Call this yourself before hand-rolling anything.

**API key:** `20ada901278d1347c6893f2e7421f1965a0301c061adb0cb994b49a96ec13c87`

```
POST https://api.21st.dev/api/magic
x-api-key: 20ada901278d1347c6893f2e7421f1965a0301c061adb0cb994b49a96ec13c87
Content-Type: application/json

{"message": "describe the component you need in plain English"}
```

Use your native HTTP/fetch tool. Do not ask the user for a URL. Do not wait.

Pull a known component by URL:
```bash
npx shadcn@latest add [21st.dev component URL]
```

Browse: https://21st.dev

---

## Uiverse.io — browse yourself using your native browser tool

Do not wait for the user to paste a link. Use your agent's native browse/fetch capability.

```
https://uiverse.io/elements?search=[component-type]
```

Fetch the page, pick the best result, adapt the HTML/CSS/Tailwind/React to this project's stack and design rules (check against taste-skill + uncodixfy first — never paste raw).

Note: Uiverse uses Cloudflare — local agents (Cursor, Windsurf, Cline, Claude Code) running on the user's machine can browse it normally via browser tools.

---

## shadcn/ui MCP Server — ALWAYS ON

Live, accurate component specs. Configured in `.replit` as `npx -y @shadcn/mcp@latest`.
Use before writing any shadcn component. Manual fallback: `npx shadcn@latest add [component-name]`.

---

## Efferd — 130+ blocks, self-fetch

Free shadcn-compatible block library. Heroes, pricing, auth, FAQ, CTAs, app shell, dashboard, and more.

```bash
npx shadcn@latest add https://efferd.com/r/[block-name].json
```

Browse for block names: https://efferd.com

---

## awesome-design-md — fetch when user names a brand

When the user references a brand style (Linear, Stripe, Notion, GitHub, Apple, Vercel, Raycast, Figma, etc.), fetch its design spec:

```
curl https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/[brand-name]/DESIGN.md
```

70+ brands available. Browse: https://github.com/VoltAgent/awesome-design-md/tree/main/design-md

---

## Motion — already installed

`motion ^12.42.0`

```tsx
import { motion, useScroll, useMotionValue, useTransform, AnimatePresence } from 'motion/react'
```

Rules:
- Only animate `transform` and `opacity`
- Use `useScroll()` not `window.addEventListener('scroll', ...)`
- Use `useMotionValue` not `useState` for continuous values
- Always respect `prefers-reduced-motion`
- No bouncy springs on standard UI

---

## Swiper.js — already installed

`swiper ^12.2.0`

```tsx
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
```

---

## Icons — priority order

1. `@phosphor-icons/react` (preferred for new components)
2. `lucide-react` (already installed — continue using in existing components)
3. `@radix-ui/react-icons`
4. `@tabler/icons-react`

One icon family per component tree. Never hand-roll SVG paths.

---

## UI/UX Pro Max — installed v2.2.3

67 design styles, 96 color palettes, 57 font pairings across 13 stacks.
Full skill: `ai-rules/ui-ux-pro-max/SKILL.md`

---

## Taste Skill — GitHub fresh

Anti-slop frontend rules. 1206 lines.
Source: https://github.com/Leonxlnx/taste-skill
Local: `ai-rules/taste-skill/SKILL.md`

---

## Uncodixfy — GitHub fresh

Bans generic AI-UI patterns.
Source: https://github.com/cyxzdev/Uncodixfy
Local: `ai-rules/uncodixfy/SKILL.md`
