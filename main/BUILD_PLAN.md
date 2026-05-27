# MyTypist — Frontend Build Plan

> **Read this FIRST before writing any code.**  
> Every agent that enters to "build the frontend" must read this file + README.md + the full `docs/` + `references/` first.

---

## Stage 0: Understand the Workspace

Before touching any file, read in this order:

1. `README.md` — Project identity, design language, scaffolding notes
2. `references/README.md` — All 15 reference files (10 design observations + 5 competitor analyses)
3. `docs/PRODUCT_UI_SYSTEM.md` — Supreme design authority. Every visual decision is here.
4. `docs/COMPONENT_SPECIFICATIONS.md` — 26 component sections with states, behaviors, API mappings
5. `docs/WIREFRAME_BLUEPRINTS.md` — 14 structural wireframes
6. `docs/PAGES_AND_ROUTES_SPEC.md` — ~80 routes with priority tiers
7. `docs/PRODUCT_REQUIREMENTS_DOCUMENT.md` — PRD with competitive differentiation and elevated targets
8. `ARCHITECTURE.md` — This file. The build plan.

The **references/** directory is the EVIDENCE BASE. Every rule in PRODUCT_UI_SYSTEM.md is grounded there.
If a design decision feels unclear, go read the reference file.

---

## Stage 1: Foundation — UI Primitives (Do This First)

Build all primitive components in `src/components/ui/`. These are the atomic building blocks.
Every component must use CSS custom properties from `src/styles/tokens.css`.

### Priority Order:
1. **Button** — Primary, secondary, ghost, icon variants. States: default, hover, active, disabled, loading.
2. **Badge** — Status badge with colored dot. Variants: draft, pending, in-progress, complete, failed.
3. **Input** — Text input, search input. States: default, focus, disabled, error.
4. **Select** — Dropdown select. States: default, focus, disabled.
5. **Checkbox** — Custom checkbox matching design system (2px radius).
6. **Modal** — Overlay dialog with backdrop. Transitions: 150ms ease (no spring, no bounce).
7. **Dropdown** — Floating menu, 10px radius, shadow-dropdown.
8. **DataTable** — Linear-style table with sortable headers, row hover.
9. **Tabs** — Tab navigation bar. Active indicator with accent color.
10. **Toast** — Notification toast. Positioned top-right. Auto-dismiss.

### Design Rules for All Primitives:
- Radius: `var(--radius-xs)` for data surfaces, `var(--radius-md)` for controls, `var(--radius-lg)` for floating elements
- Transitions: `var(--transition-fast)` or `var(--transition-base)`. NEVER spring/stagger/bounce.
- Focus ring: 2px solid `var(--color-accent)`, outline-offset 1px
- No medium (500) font weight. Only 400 (body) and 600 (headings/active).

---

## Stage 2: Layout Shell

Build the persistent application frame:

1. **Shell** — Flexbox layout: sidebar + content area. Already scaffolded.
2. **Sidebar** — 256px, `var(--sidebar-bg)`, 7 nav items with Lucide icons. Active item gets accent-left-border + accent-muted bg. Must be dimmer than content area (Linear principle).
3. **Toolbar** — 48px height, megaverb actions (Edit / Preview / Sign / Share / Export). Breadcrumb left, actions right.
4. **CommandPalette** — Cmd+K global. Overlay with modal-style panel (540px wide, 10px radius). Search input + results list. Dismiss with Escape.
5. **Resizable panels** (for Studio later) — Figma UI3 principle. Drag handle between panels.

### Keyboard Shortcuts (Implement in Shell):
- `Cmd+K` — Toggle command palette
- `Cmd+B` — Toggle sidebar
- `Escape` — Close command palette / modal
- `Ctrl+Tab` — Switch between recent documents

---

## Stage 3: Pages by Priority Tier

Follow the priority tiers in `PAGES_AND_ROUTES_SPEC.md`. Build in this exact order:

### Tier 1 — Core Workflow (Build First)
| Page | Route | What to Build |
|------|-------|--------------|
| **Studio (Editor)** | `/studio` | Three-panel layout: left form / center preview / right inspector. Acrobat-style megaverb toolbar. Document block editing with 3px radius. |
| **Pipeline** | `/studio/pipeline` | Trigger.dev-inspired connected stages. Visual stage cards with status badges. Document cards in each stage. Drag between stages. |
| **Templates** | `/studio/templates` | Template grid (Notion-style). Category filter sidebar. Template card with preview thumbnail. |

### Tier 2 — Document Operations
| Page | Route | What to Build |
|------|-------|--------------|
| **Sign** | `/studio/sign` | Send-for-signature flow. Drag-and-drop field placement in preview. Recipient management. Status tracking. |
| **Vault** | `/studio/vault` | Document library with DataTable. Full-text search bar. Filter by status/date/type. Version history panel. |

### Tier 3 — Settings & Admin
| Page | Route | What to Build |
|------|-------|--------------|
| **Settings** | `/studio/settings` | Dub-inspired settings layout: left nav (Account, Team, Billing, Notifications) + right content panel. |
| **Admin** | `/studio/admin` | Command Center: pipeline monitor metrics, user management DataTable, governance tools. |

### Tier 4 — Auth & Landing
| Page | Route | What to Build |
|------|-------|--------------|
| **Auth** | `/auth` | Login/signup forms. Minimal design. Acrobat-style trust signals. |
| **Landing** | `/` | Public marketing page. Product screenshots in 16px rounded tiles. |

---

## Stage 4: API Integration

The backend (FastAPI at `~/projects/mytypist-workspace/backend/`) provides RESTful endpoints.

### Integration Pattern:
1. Create API client in `src/lib/api.ts` using fetch (no axios — keep it light)
2. Use `@tanstack/react-query` for all server state (queries + mutations)
3. Use Zustand stores only for CLIENT state (sidebar open, selected doc, etc.)
4. Every mutation has optimistic updates

### API Module Structure:
```
src/lib/
├── api.ts           # Base fetch wrapper with auth headers
├── documents.ts     # Document CRUD + pipeline operations
├── templates.ts     # Template CRUD
├── signatures.ts    # Signature request endpoints
├── auth.ts          # Login/logout/session
└── users.ts         # User management (admin)
```

### Key Endpoints (from backend/src/api/):
- `GET /api/v1/documents` — List documents
- `POST /api/v1/documents` — Create document
- `GET /api/v1/documents/:id` — Get document with content
- `PATCH /api/v1/documents/:id/status` — Update pipeline stage
- `GET /api/v1/templates` — List templates (+ category filter)
- `POST /api/v1/signatures` — Create signature request
- `POST /api/v1/auth/login` — Authenticate
- `GET /api/v1/admin/users` — List users (admin)

---

## Stage 5: Backend Deployment

Before the frontend can make real API calls, the backend needs:

1. PostgreSQL database created + user
2. Redis instance running
3. `.env` file in `backend/` with:
   ```
   DATABASE_URL=postgresql://mytypist:<password>@localhost:5432/mytypist
   REDIS_URL=redis://localhost:6379
   JWT_SECRET=<generated-secret>
   FLW_SECRET_KEY=<flutterwave-secret>
   ```
4. Backend started with PM2 (`pm2 start ecosystem.config.js`)

The backend scaffold already exists at `~/projects/mytypist-workspace/backend/`.
See `backend/README.md` for the full feature catalog and API docs.

---

## Stage 6: Polish & Performance

After all pages are functional:

1. **Load performance** — Target <400ms for any view. Lazy-load route components. Code-split by route.
2. **Animation audit** — Remove any spring, stagger, bounce, parallax. Only 100-200ms linear/ease transitions.
3. **Dark mode** — Toggle via Zustand store. CSS already has `:root[data-theme='dark']` tokens.
4. **Keyboard audit** — Every action accessible via keyboard. Tab order logical.
5. **Empty states** — Every list view has a designed empty state (following Dub pattern from references/).

---

## Non-Negotiables (Breaking These = Rewrite Required)

- **Accent is violet-indigo (#6C47FF)** — NOT blue. If you reach for a blue color, stop.
- **Radius: 2px on data surfaces, 6px on controls, 10px on floating** — NOT zero, NOT 8px default.
- **No spring/bounce animations** on modals, panels, or page transitions. Spring only on toggles.
- **Sidebar is dimmer than content** — Linear 2025 principle.
- **No card-based UI on data surfaces** — Lists and tables, not cards.
- **No free tier** — 14-day trial. No free plan in the UI.
- **No AI badges/sparkle icons** — No "AI-powered" labels anywhere.

---

## File Structure Reference

```
src/
├── styles/
│   ├── tokens.css          # CSS custom properties (DONE — do not modify without PRD change)
│   ├── globals.css         # Reset + body defaults (DONE)
│   └── shell.css           # Layout + component styles (add to this file)
├── components/
│   ├── ui/                 # BUILD THIS FIRST — primitive components
│   ├── layout/             # Shell, Sidebar, Toolbar (scaffolded, needs completion)
│   └── features/           # CommandPalette, PipelineView, StudioEditor, etc.
├── pages/                  # One folder per page (scaffolded with placeholders)
│   ├── studio/
│   ├── templates/
│   ├── pipeline/
│   ├── sign/
│   ├── vault/
│   ├── settings/
│   ├── admin/
│   ├── auth/
│   └── landing/
├── hooks/                  # Custom React hooks
├── lib/                    # API client, utilities
├── router/                 # Route config (DONE)
├── stores/                 # Zustand stores (DONE — extend as needed)
├── types/                  # TypeScript types (DONE — extend as needed)
├── App.tsx                 # Root component (DONE)
└── main.tsx                # Entry point (DONE)
```
