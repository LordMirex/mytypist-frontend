# MyTypist Frontend — The Unified Editorial Workspace

> **Project scaffolded. Ready to build.**  
> See `BUILD_PLAN.md` for the complete build sequence.  
> See `references/` for evidence base (15 files across 12 products).  
> See `docs/PRODUCT_UI_SYSTEM.md` for the design authority.

---
## 📜 Agent Instructions (MANDATORY)

If you are an AI agent told to "build the frontend":

1. **Read this entire file** first
2. **Read `BUILD_PLAN.md`** — it contains the exact build sequence
3. **Read `references/README.md`** to understand the evidence base
4. **Read `docs/PRODUCT_UI_SYSTEM.md`** — every visual rule is here
5. **Read `docs/COMPONENT_SPECIFICATIONS.md`** + **`PAGES_AND_ROUTES_SPEC.md`** for specs
6. **Run `npm run dev`** to start the dev server
7. **Build in the Stage order from BUILD_PLAN.md** — Stage 1 (UI primitives) first
8. **Never break the Non-Negotiables** listed in BUILD_PLAN.md

---
## Project State

- **Scaffold**: Vite + React 18 + TypeScript + React Router v6 + Zustand + TanStack Query
- **Design tokens**: `src/styles/tokens.css` — complete CSS custom properties for the entire design system
- **Router**: `src/router/index.tsx` — all routes configured with placeholder pages
- **Layout**: `src/components/layout/` — Shell, Sidebar, Toolbar scaffolded (needs completion)
- **Stores**: `src/stores/index.ts` — UI, Document, Template, Auth stores (extend as needed)
- **Types**: `src/types/index.ts` — core domain types
- **Build**: `npm run build` passes clean (0 errors, 250KB JS + 8.7KB CSS gzipped)
- **Dev**: `npm run dev` starts Vite on port 5173

## Commands

```bash
npm run dev      # Start dev server (port 5173)
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # ESLint
```

## Key Decisions (from PRODUCT_UI_SYSTEM.md)

- **Accent**: Violet-indigo `#6C47FF` — NOT blue
- **Radius**: 2px (data surfaces), 6px (controls), 10px (floating) — graduated Linear scale
- **Typography**: Inter, 15px body, 4px grid
- **No medium (500) weight** — only 400 (body) and 600 (headings/active)
- **No spring/bounce** — only 100-200ms transitions
- **Sidebar dimmer than content** — Linear 2025 principle
- **Document margins**: 96px horizontal (Notion principle)
- **Block radius**: 3px on document content blocks
