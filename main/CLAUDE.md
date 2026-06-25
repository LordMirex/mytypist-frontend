# MyTypist — Claude (main app)

READ `../ai-rules/MASTER.md` BEFORE WRITING ANY UI CODE.

This is the `main/` React app. Full design rules at `ai-rules/` from the repo root.

## Quick Rules
- Accent: `#6C47FF` | ₦ only | Mobile-first CSS | No `Inter` default
- No gradients/glassmorphism/oversized radii/pill buttons/3-col cards
- No em-dashes (`—`) | No pure `#000`/`#fff`
- Animations: `import { motion } from "motion/react"` | Respect `prefers-reduced-motion`
- Scroll: use `useScroll()` from motion, NOT `window.addEventListener('scroll', ...)`
- 3D/Spline: STOP — see `../ai-rules/spline-handoff.md`

## Full rules: `../ai-rules/MASTER.md`
