# MyTypist — AI Agent Rules (all agents)

---

## MANDATORY PRE-FLIGHT — READ ALL FOUR FILES BEFORE ANY UI CODE

Do not write a single JSX element, CSS rule, or className until all four are read in full:

1. `ai-rules/taste-skill/SKILL.md` — 1206 lines from github.com/Leonxlnx/taste-skill
2. `ai-rules/uncodixfy/SKILL.md` — from github.com/cyxzdev/Uncodixfy
3. `ai-rules/ui-ux-pro-max/SKILL.md` — 67 styles, 96 palettes, 57 font pairings (uipro v2.2.3)
4. `ai-rules/MASTER.md` — project design system and all hard rules

After reading, state before writing any code:
> "Reading this as: [page kind] for [audience], [vibe], dials: V=[1-10] M=[1-10] D=[1-10]"

This is not optional. It is the first line you write.

---

## COMPONENT SELF-FETCH — fetch before you build, every time

Do not hand-roll a component that already exists as a high-quality reference. Self-fetch first.

### Step 1 — 21st.dev Magic Chat (call the API yourself, do not ask the user)
```
POST https://api.21st.dev/api/magic
x-api-key: 20ada901278d1347c6893f2e7421f1965a0301c061adb0cb994b49a96ec13c87
Content-Type: application/json
Body: {"message": "describe the component you need in plain English"}
```
Use your native HTTP tool (fetch, curl, axios, browser tool — whatever you have). Do not ask the user. Do not wait for a URL. Call it yourself.

### Step 2 — Uiverse.io (browse yourself, do not ask for links)
Use your native browser/web tool to fetch:
```
https://uiverse.io/elements?search=[component-type]
```
Pick the best result. Adapt its HTML/CSS/Tailwind/React to this project's stack and design rules. Do not paste raw — always reconcile against the four skill files first.

### Step 3 — Efferd blocks
```
npx shadcn@latest add https://efferd.com/r/[block-name].json
```
Browse https://efferd.com to find the right block. 130+ blocks: hero, pricing, auth, FAQ, dashboard, app shell, etc.

### Step 4 — shadcn via MCP
```
npx shadcn@latest add [component-name]
```
MCP server configured in `.replit` — use it for live accurate component specs.

### Step 5 — awesome-design-md (when user names a brand style)
```
https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/[brand]/DESIGN.md
```
Brands available: linear.app, stripe, notion, github, apple, vercel, raycast, figma, loom, and 60+ more.

### Step 6 — Hand-roll (last resort)
Only if Steps 1–5 yield nothing suitable. Must still pass all design rules.

---

## CONTEXT7 — automatic on every library/API task

Before writing against any library API (React, Motion, TanStack, Zustand, Swiper, Lucide, Vite, etc.):
- Use Context7 MCP to pull live, version-specific docs
- Installed globally: `context7-mcp`
- Never code against guessed or hallucinated props
- Trigger: automatic — every library/framework task, without being asked

---

## VISUAL QA — mandatory after every visible UI change

After building any component, section, or page — use your available visual tool:
- **Cursor / Windsurf / Cline / Claude Code**: use BrowserMCP or your native preview/screenshot tool
- **Replit Agent**: uses built-in screenshot tool

Do not report a section done without visual verification. If it looks like AI generated it — fix it first.

---

## Project

- Stack: React 18 + TypeScript + Vite, raw CSS with CSS variables (no Tailwind in `main/`), Zustand, TanStack Query, Motion, Swiper, Lucide
- Code lives in: `main/src/`
- Accent: `#6C47FF` (violet-indigo)
- Currency: ₦ Naira only. No `$` anywhere.
- Mobile-first CSS: base styles target mobile, scale UP with `min-width` only. Never `max-width` overrides.
- All inputs: `font-size: 16px` minimum (iOS zoom prevention — global rule, never override below 16px).
- `overflow-x: hidden` + `scrollbar-gutter: stable` on `html` in globals.css — do not remove.

---

## Hard-banned patterns (auto-fail, no exceptions)

**Visual**
- Soft gradients as decorative backgrounds
- Glassmorphism / frosted panels as default UI
- Rounded corners > 10px on cards, > 8px on buttons, > 6px on inputs
- Pill-shaped buttons everywhere
- Colored glows or outer shadows for decoration
- Pure `#000000` or `#ffffff`
- Drop shadows above `0 2px 8px rgba(0,0,0,0.10)`
- Gradient text on headings by default
- Fake product UI from `<div>` rectangles

**Layout**
- Hero sections inside dashboards
- Metric-card grid as first dashboard instinct
- 3-column equal feature cards
- Floating detached sidebar with rounded shell
- Overpadded dead-space layouts

**Typography**
- `Inter` as default — use `Geist`, `Outfit`, `Cabinet Grotesk`, `Satoshi`
- Uppercase + letter-spacing eyebrow labels everywhere
- Em-dashes (`—`) anywhere
- Oversized H1s that just scream

**Animations**
- `window.addEventListener('scroll', ...)` — use `motion/react` `useScroll()`
- `useState` for scroll/mouse values — use `useMotionValue`
- Animating `top`, `left`, `width`, `height` — only `transform` and `opacity`
- No `prefers-reduced-motion` respect

---

## Writing

Default to "is." No trailing "-ing" editorializing. No AI sign-offs.
Buttons: verb + noun. Errors: fact + action. Placeholders: literal.

**Banned words:** additionally, align with, boasts, crucial, delve, enhance, fostering, garner, highlight (verb), intricate, meticulous, pivotal, showcase, seamless, streamline, leverage (verb), groundbreaking, robust, game-changer, cutting-edge, revolutionize, empower, unlock (metaphorical), journey (metaphorical), utilize, vibrant, nestled, tapestry, testament, underscore (verb).

Full rules: `ai-rules/writing.md`

---

## For 3D / Spline

STOP. Do not attempt Three.js, canvas, or code-based 3D.
Read `ai-rules/spline-handoff.md`.
Write a precise Spline AI prompt + specify export format.
Wait for the user to paste back exported code before continuing.

---

## Shell CSS warning

`main/src/styles/shell.css` has two `.sidebar` definitions — do NOT merge them.

---

## All rule files

| File | Contents |
|------|----------|
| `ai-rules/MASTER.md` | Complete design system |
| `ai-rules/taste-skill/SKILL.md` | Anti-slop rules — 1206 lines |
| `ai-rules/uncodixfy/SKILL.md` | Banned AI-UI patterns |
| `ai-rules/ui-ux-pro-max/SKILL.md` | 67 styles, 96 palettes, 57 font pairings |
| `ai-rules/tools.md` | All tools, API keys, self-fetch instructions |
| `ai-rules/writing.md` | Writing rules in full |
| `ai-rules/spline-handoff.md` | Spline handoff protocol |
