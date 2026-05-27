# MyTypist — Product UI System

> **Supreme Design Authority**
> This file governs all visual and interaction decisions for the MyTypist Document Operating System. Every UI component, layout, and interaction must conform to the rules defined here.

---

## 1. Product Identity

MyTypist is a **Document Operating System**. The interface must communicate:

- Precision
- Reliability
- Operational speed
- Formatting fidelity
- Document craftsmanship

### Non-Negotiable

The product must NOT resemble:
- Generic AI SaaS tools
- Startup landing page templates
- Crypto dashboards
- Gradient-heavy interfaces
- Admin CRUD panels
- Bootstrap admin templates

### Tone
- Professional without being corporate
- Operational without being cold
- Premium without being flashy

---

## 2. Layout Philosophy

### Primary Pattern: Workspace-Oriented Layouts

```
┌─────────────────────────────────────────────┐
│              Global Command Bar              │
├──────────┬──────────────────┬────────────────┤
│          │                  │                │
│ Sidebar  │  Main Workspace  │  Inspector     │
│          │                  │  Panel         │
│ Templates│  Live Preview    │                │
│ Workflows│  Editor          │  Properties    │
│ Activity │  Pipeline        │  Typography    │
│ Billing  │                  │  Validation    │
│ Settings │                  │  Formatting    │
│          │                  │                │
└──────────┴──────────────────┴────────────────┘
```

### Required Patterns
- Split-pane interfaces
- Inspector sidebars
- Live document previews
- Contextual toolbars
- Persistent navigation

### Forbidden Patterns
- Vertically stacked dashboard cards
- Isolated CRUD pages
- Excessive modals for main workflows
- Full-page loading states

---

## 3. Interaction Principles

### Hierarchy
1. **Keyboard efficiency** — Every action must be accessible via keyboard
2. **Progressive disclosure** — Show complexity only when needed
3. **Minimal interruption** — Avoid modals for workflow actions; use inline panels
4. **Contextual actions** — Show actions relevant to the current selection
5. **Optimistic updates** — Update UI immediately, confirm asynchronously
6. **Workflow continuity** — Never force the user to leave their workflow context

### Command Palette
- Global search and action system (Linear-style)
- Triggered by `Cmd+K` / `Ctrl+K`
- Supports fuzzy search across templates, documents, settings, actions

### Empty States
- Never show raw "no data" messages
- Provide a clear next action
- Use illustration or layout, not decoration

---

## 4. Typography Rules

### Primary Stack
- **Inter** — UI text, labels, navigation, body content
- **Geist** — Alternative for code-adjacent surfaces

### Editorial
- Use serif only for marketing pages and long-form editorial headings
- Never use serif in application UI surfaces

### Scale
```
--text-xs:   0.75rem  (12px) — Labels, metadata
--text-sm:   0.875rem (14px) — UI body, navigation
--text-base: 1rem     (16px) — Document body
--text-lg:   1.125rem (18px) — Section headings
--text-xl:   1.25rem  (20px) — Panel titles
--text-2xl:  1.5rem   (24px) — Page headings
--text-3xl:  1.875rem (30px) — Primary headings
```

### Rules
- Consistent vertical rhythm (4px baseline grid)
- Restrained font scaling (no oversized hero type in app)
- High readability at all sizes
- Editorial hierarchy in document views

---

## 5. Spacing System

### Base Unit: 4px

```
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-5:  20px
--space-6:  24px
--space-8:  32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
```

### Layout Density
- Sidebar items: 32px height
- Navigation items: 36px height
- Workspace padding: 24px
- Panel gutters: 16px
- Document margins: 48px

---

## 6. Motion Rules

### Philosophy
Motion must feel **operational**, not decorative.

### Allowed
- Subtle transitions (150-200ms)
- Panel slide animations (200-250ms)
- Workflow continuity feedback (progress through pipeline)
- Hover refinement (scale or background change only)
- Height/width transitions for expandable panels

### Forbidden
- Floating effects
- Exaggerated motion
- Delayed interfaces (skeleton-first, then content)
- Cinematic animations
- Rotations or 3D transforms
- Bounce or spring physics in UI

### Timing
```
--duration-fast:    100ms
--duration-normal:  200ms
--duration-slow:    250ms
--ease-default:     cubic-bezier(0.16, 1, 0.3, 1)
--ease-spring:      cubic-bezier(0.34, 1.56, 0.64, 1)  // reserved for micro-interactions only
```

---

## 7. Color System

### Strategy
- **Monochrome dominant** — The interface is primarily black, white, and grey
- **Restrained accent** — Reserved for actions, validation, workflow status
- **Minimal gradients** — None in application UI; limited use in marketing
- **Subtle borders** — Use `hsla` borders, not solid
- **Paper-like surfaces** — Document area uses warm off-white, not pure white

### Palette

```css
/* Surfaces */
--bg-app:            #f5f5f4    /* Warm off-white workspace */
--bg-elevated:       #ffffff    /* Cards, panels, modals */
--bg-hover:          #f0efed    /* Hover states */
--bg-active:         #e8e7e4    /* Active/selected */

--bg-dark:           #1a1a17    /* Dark mode base */
--bg-dark-elevated:  #242420    /* Dark mode elevated */
--bg-dark-hover:     #2e2e29    /* Dark mode hover */

/* Text */
--text-primary:      #1a1a17
--text-secondary:    #6b6b63
--text-tertiary:     #a3a39a
--text-disabled:     #c5c5bd

--text-on-dark:      #f5f5f4
--text-dark-secondary: #9e9e94

/* Accent */
--accent:            #2b6bf3    /* Primary blue */
--accent-hover:      #1a5ad9
--accent-subtle:     #eef3ff    /* Background tint for selected states */

/* Status */
--success:           #16a34a
--warning:           #d97706
--error:             #dc2626
--info:              #2563eb

/* Borders */
--border:            hsla(40, 6%, 70%, 0.3)
--border-hover:      hsla(40, 6%, 50%, 0.4)
--border-light:      hsla(40, 6%, 90%, 0.5)
```

### Accent Usage Rules
Accent color reserved for:
- Primary action buttons
- Active navigation states
- Selection highlights
- Validation indicators
- Workflow progress
- Link text

### Surface Strategy
- Document workspace: warm off-white (`#f5f5f4`)
- Sidebars/panels: pure white with subtle borders
- Inspector: same as sidebar, narrower
- Modals: elevated white with larger shadow

---

## 8. Workspace Architecture

### Application Shell

```
┌──────────────────────────────────────────────────────┐
│  Global Command Bar  [Cmd+K]                         │
│  ┌────────┬─────────────────────┬──────────────────┐ │
│  │        │                     │                  │ │
│  │  LEFT  │      MAIN           │     RIGHT        │ │
│  │ SIDEBAR│     WORKSPACE       │    INSPECTOR      │ │
│  │        │                     │                  │ │
│  │ 256px  │     1fr             │    320px         │ │
│  │        │                     │                  │ │
│  └────────┴─────────────────────┴──────────────────┘ │
└──────────────────────────────────────────────────────┘
```

### Left Sidebar (256px)
- Navigation items with icons
- Section headers for grouping
- Active state with accent indicator
- Collapsible to icon-only (64px)

### Main Workspace (1fr)
- Dynamic based on route
- Document editor, preview, pipeline
- Contextual toolbar at top

### Right Inspector (320px)
- Shows when editing documents/templates
- Placeholder properties
- Typography controls
- Validation feedback
- Formatting options
- Dismissable

### Global Command Bar
- Fixed at top (48px)
- Breadcrumb on left side
- Global actions on right
- Cmd+K triggers command palette

### Navigation Items (Authenticated)
```
Templates        [icon]  Template gallery + search
Studio           [icon]  Document creator (main workspace)
Dashboard        [icon]  Overview stats + recent activity
Batch            [icon]  Batch processing workflow
Signatures       [icon]  Signature library + create
Billing          [icon]  Subscription, wallet, invoices
Activity         [icon]  Document history + analytics
Settings         [icon]  Profile, security, API keys
───
Admin            [icon]  (visible only to admin/moderator roles)
```

### Navigation Items (Public Header)
```
Home  Templates  Pricing  Blog  FAQ  Support  Login  Sign Up
```

### Admin Navigation (Additional items, within existing sidebar)
```
Dashboard        [icon]  Admin overview stats
Users            [icon]  User management
Templates        [icon]  Template CRUD + classification
Blog             [icon]  Blog editor
FAQ              [icon]  FAQ editor
Support          [icon]  Ticket management
Campaigns        [icon]  Email campaign management
Security         [icon]  Security incidents + monitoring
Health           [icon]  System health + performance
Audit            [icon]  Audit log viewer
Analytics        [icon]  Full analytics suite
Roles            [icon]  Role & permission management
```

---

## 9. Signature Components

These define the visual uniqueness of MyTypist:

### 1. Live Document Preview Engine
- Real-time rendering of document with applied placeholders
- Feels alive and accurate
- WYSIWYG fidelity to final output
- Page-accurate rendering with margins, breaks, spacing

### 2. Placeholder Inspector Panel
- Property-panel style (like design software)
- Shows detected placeholders with their formatting
- Inline editing with preview feedback
- Document intelligence (auto-detects type, offers suggestions)

### 3. Formatting Fidelity Indicators
- Visual indicators showing original template formatting vs. user overrides
- Green dot: Matches template
- Yellow dot: Modified
- Blue dot: Custom override

### 4. Generation Workflow Pipeline
- Visual pipeline: Upload → Detect → Validate → Process → Export
- Each stage shows status (pending, active, complete, error)
- Clickable to jump to that stage
- Timeline view for batch operations

### 5. Typography-Aware Editing Surfaces
- Document editor that respects type scale
- Vertical rhythm maintained
- Live font preview
- Consistent with final output

---

## 10. Reference Mapping

| Area | Primary Reference | What To Study |
|---|---|---|
| Workspace UX | Linear | Sidebar density, spacing, keyboard UX, cmd palette, transitions, panel systems, information hierarchy |
| Typography | Notion | Typography rhythm, document spacing, content readability, subtle surfaces, editor feel, minimal color |
| Document Handling | Adobe Acrobat | Document preview layouts, toolbar organization, page rendering, annotation UX |
| Motion | Pitch | Animations, onboarding flow, premium motion restraint, collaborative UI feel |
| Layout Systems | Figma | Panel organization, floating controls, contextual actions, workspace density, modular interface |
| Technical Architecture | Dub.co | Next.js implementation, polished settings, clean analytics, component architecture |

---

## 11. Component States

Every component must define these states:

| State | Description |
|---|---|
| **default** | Resting state, no interaction |
| **hover** | Mouse cursor above |
| **active** | Currently pressed/selected |
| **focus** | Keyboard focus indicator |
| **disabled** | Action not available |
| **loading** | Processing state |
| **empty** | No content to display |
| **error** | Validation or system error |
| **success** | Operation completed |

---

## 12. Responsive Behavior

### Breakpoints
```
--bp-sm:   640px    — Mobile
--bp-md:   768px    — Tablet
--bp-lg:   1024px   — Small desktop
--bp-xl:   1280px   — Desktop
--bp-2xl:  1536px   — Large desktop
```

### Adaptation Rules
- Below 1024px: Right inspector collapses to bottom sheet
- Below 768px: Left sidebar becomes a drawer overlay
- Below 640px: Single column, top navigation, bottom sheet menus
- Document preview switches to scrollable single-page on mobile

---

## 13. File Organization

```
frontend/main/
├── references/
│   ├── linear/
│   │   ├── screenshots/
│   │   └── observations.md
│   ├── notion/
│   ├── figma/
│   ├── acrobat/
│   └── pitch/
├── docs/
│   ├── PRODUCT_UI_SYSTEM.md        ← This file
│   ├── COMPONENT_SPECIFICATIONS.md
│   ├── WIREFRAME_BLUEPRINTS.md
│   ├── DESIGN_SYSTEM_AND_TOKENS.md
│   └── ... (existing docs)
└── src/
    └── ...
```
