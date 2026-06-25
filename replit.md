# MyTypist

A Document Operating System for Nigerian students, freelancers, and businesses. Covers document creation, management, e-signatures, and pipeline workflows — built with React + Vite in `main/`.

## Project Structure

- `main/` — active React + TypeScript + Vite frontend
- `v1/` — legacy Tailwind baseline (reference only)
- `v2/` — premium feature shell (reference only)
- `ai-rules/` — design system rules for all AI tools (read this before any UI work)
- `attached_assets/` — brand assets and logos

## Running the App

The app runs from `main/` on port 5000. The workflow `Start application` handles this automatically.

## Design System

**Every AI working on this project must read `ai-rules/MASTER.md` first.**

Full rules live in:
- `ai-rules/taste-skill/SKILL.md` — anti-slop frontend rules
- `ai-rules/uncodixfy/SKILL.md` — banned AI-UI patterns
- `ai-rules/ui-ux-pro-max/SKILL.md` — styles, palettes, font pairings
- `ai-rules/tools.md` — component sources and installed libraries
- `ai-rules/writing.md` — writing rules for all copy and UI text
- `ai-rules/spline-handoff.md` — 3D/Spline handoff protocol

## Key Conventions

- **Currency:** ₦ Naira only. No `$` anywhere. Nigeria-only product.
- **CSS:** Mobile-first. All base styles target mobile. Scale UP with `min-width` queries only. Never `max-width` overrides.
- **Inputs:** Always `font-size: 16px` minimum (prevents iOS zoom on focus).
- **Accent color:** `#6C47FF` (violet-indigo)
- **No width shaking:** `overflow-x: hidden` + `scrollbar-gutter: stable` on `html` in globals.css.
- **Shell CSS:** Has two `.sidebar` definitions — do NOT merge them.
- **Auth layout:** Dark brand panel left + light form panel right. Brand panel shows at `min-width: 900px`.

## Tech Stack

React 18 + TypeScript + Vite + Zustand + TanStack Query + Motion (`motion/react`) + Swiper + Lucide icons + raw CSS with CSS variables.

## User Preferences

- Never use `$` — always ₦ for currency
- Mobile-first CSS always
- All inputs minimum `font-size: 16px`
- Design rules in `ai-rules/` apply to all AI tools at all times
