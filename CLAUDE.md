# MyTypist — Claude / Replit Agent Rules

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

## COMPONENT SELF-FETCH — do not hand-roll what already exists

When building any UI component, section, or block — fetch first, build last.

### Step 1 — 21st.dev Magic Chat (self-call, do not ask user)
```
POST https://api.21st.dev/api/magic
x-api-key: 20ada901278d1347c6893f2e7421f1965a0301c061adb0cb994b49a96ec13c87
Content-Type: application/json
{"message": "describe what you need in plain English"}
```
Call this yourself. Do not ask the user for a URL. Do not wait.

### Step 2 — Uiverse.io (self-browse using native fetch/browser tool)
Fetch the page yourself:
```
https://uiverse.io/elements?search=[component-type]
```
Pick the best match, adapt its HTML/CSS/Tailwind/React to this project's stack and design rules.

### Step 3 — Efferd blocks
```
npx shadcn@latest add https://efferd.com/r/[block-name].json
```
Browse https://efferd.com to find the right block name.

### Step 4 — shadcn via MCP (already configured in .replit)
```
npx shadcn@latest add [component-name]
```

### Step 5 — awesome-design-md (when user names a brand style)
```
https://raw.githubusercontent.com/VoltAgent/awesome-design-md/main/design-md/[brand]/DESIGN.md
```
Fetch and use as the style reference. Brands: linear.app, stripe, notion, github, apple, vercel, raycast, etc.

### Step 6 — Hand-roll (last resort only)
Only if nothing above fits. Still must pass all design rules from the four pre-flight files.

---

## CONTEXT7 — use automatically on every library/API task

Before implementing against any library (React, Motion, TanStack, Zustand, Swiper, Lucide, Vite):
- Binary: `context7-mcp` (installed globally)
- Resolve live docs before writing API calls. Never use guessed/hallucinated props.
- Trigger: automatic — do not wait to be asked.

---

## VISUAL QA — mandatory after every visible UI change

Use the built-in Replit screenshot tool after building any page, section, or component.
Do not declare work done without taking a screenshot and reviewing it.
If something looks like AI generated it — fix it before reporting back.

---

## Project

- Stack: React 18 + TypeScript + Vite, raw CSS with CSS variables (no Tailwind in `main/`), Zustand, TanStack Query, Motion, Swiper, Lucide
- Code lives in: `main/src/`
- Accent: `#6C47FF` (violet-indigo)
- Currency: ₦ Naira only. No `$` anywhere.
- Mobile-first CSS: base styles target mobile, scale UP with `min-width` only. Never `max-width` overrides.
- All inputs: `font-size: 16px` minimum globally (iOS zoom prevention).
- Installed: `motion ^12.42.0`, `swiper ^12.2.0`, `lucide-react`, `@tanstack/react-query`, `zustand`

---

## Hard-banned patterns (auto-fail, no exceptions)

**Visual**
- Soft gradients as decorative backgrounds
- Glassmorphism / frosted panels as default UI language
- Rounded corners > 10px on cards, > 8px on buttons, > 6px on inputs
- Pill-shaped buttons used everywhere
- Colored glows or outer shadows for decoration
- Pure `#000000` or `#ffffff` — use `#0f0f0f` / `#111` and `#fafafa` / `#f5f5f4`
- Drop shadows above `0 2px 8px rgba(0,0,0,0.10)`
- Gradient borders or gradient text on headings by default
- Fake product UI built from `<div>` rectangles in hero sections

**Layout**
- Hero sections inside internal dashboards
- Metric-card grid as first dashboard instinct
- 3-column equal feature cards (the classic AI layout)
- Floating detached sidebars with rounded shells
- Overpadded layouts with dead space

**Typography**
- `Inter` as default — use `Geist`, `Outfit`, `Cabinet Grotesk`, or `Satoshi`
- Uppercase + letter-spacing eyebrow labels everywhere
- Em-dashes (`—`) anywhere
- Oversized H1s that scream

**Animations**
- `window.addEventListener('scroll', ...)` — use `motion/react` `useScroll()`
- `useState` for continuous scroll/mouse values — use `useMotionValue`
- Animating `top`, `left`, `width`, `height` — only `transform` and `opacity`
- Bouncy spring animations on standard UI
- Missing `prefers-reduced-motion` respect

---

## Writing rules

Default to "is." Never "serves as," "stands as," "marks a," "represents a."
No trailing "-ing" editorializing clauses. No "not just X, but Y" filler.
No AI sign-offs. No "I hope this helps," "certainly!," "great question!"
Buttons: verb + noun. "Create document." Not "Start your journey."
Errors: fact + action. "File too large. Max 10MB." Not "Oops!"

**Banned words:** additionally, align with, boasts, bolstered, crucial, delve, emphasizing, enduring, enhance, fostering, garner, highlight (verb), intricate, key (filler), landscape (abstract), meticulous, pivotal, showcase, tapestry, testament, underscore (verb), valuable, vibrant, nestled, groundbreaking, robust, seamless, streamline, leverage (verb), game-changer, cutting-edge, innovative (unless specific), revolutionize, empower, unlock (metaphorical), journey (metaphorical), utilize.

Full rules: `ai-rules/writing.md`

---

## For 3D / Spline

STOP. Do not attempt Three.js, canvas, or any code-based 3D.
Read `ai-rules/spline-handoff.md`.
Write a precise Spline AI prompt + specify export format (`@splinetool/react-spline` or `<spline-viewer>`).
Wait for the user to paste back the exported code before continuing.

---

## Shell CSS warning

`main/src/styles/shell.css` has two `.sidebar` definitions — do NOT merge them. Breakage risk.

---

## All rule files

| File | What it is |
|------|-----------|
| `ai-rules/MASTER.md` | Complete design system — start here |
| `ai-rules/taste-skill/SKILL.md` | Anti-slop rules — 1206 lines, GitHub fresh |
| `ai-rules/uncodixfy/SKILL.md` | Banned AI-UI patterns — GitHub fresh |
| `ai-rules/ui-ux-pro-max/SKILL.md` | 67 styles, 96 palettes, 57 font pairings |
| `ai-rules/tools.md` | All tool details, API keys, install paths |
| `ai-rules/writing.md` | Writing rules in full |
| `ai-rules/spline-handoff.md` | Spline protocol in full |
