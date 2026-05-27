# MyTypist — Product UI System

> **Supreme Design Authority — Grounded in Reference Research**
> Every rule below comes from studying real products. See `references/` for annotated observations.
> No abstract opinions. No designer preferences. Only what works, with evidence.

---

## 0. Reference Hierarchy & Evidence

Each reference contributes specific, documented patterns. The folders in `references/` contain annotated screenshots and structured observations. This spec composes those findings.

| Reference | Folder | Contributes | Evidence File |
|---|---|---|---|
| **Linear** | `references/linear/` | Minimal-radius data surfaces (2-4px), dimmed sidebar, Cmd-K primacy, status dots, color restraint | `sidebar-and-navigation.md`, `border-radius-and-elevation.md`, `command-palette.md`, `color-and-status-dots.md` |
| **Notion** | `references/notion/` | Block architecture, 3px block radius, 96px content margins, warm text color, quiet UI hierarchy | `block-architecture.md`, `typography-and-spacing.md` |
| **Acrobat** | `references/acrobat/` | Megaverb toolbar, three-view structure (Home/Tools/Document), customizable toolbar, tabbed documents | `document-operations-and-toolbar.md` |
| **Figma** | `references/figma/` | Three-panel architecture, contextual properties inspector, resizable panels, bottom toolbar | `panel-architecture.md` |
| **Trigger.dev** | `references/triggerdev/` | Workflow pipeline visualization, status badge language, run metadata for progress, retry UX | `workflow-pipeline.md` |
| **Dub** | `references/dub/` | Clean settings layout, data table patterns, empty states, billing pages, refined spacing | `admin-and-settings.md` |

---

## 1. Product Identity

MyTypist is a **Document Operating System**. The interface must feel like a tool for serious document work — not a template builder, not an AI wrapper, not a PDF utility.

### Core Attributes

1. **Precision** — Every pixel is intentional. Nothing is "close enough."
2. **Calm** — The interface is quiet. It does not shout. Information is surfaced, not announced.
3. **Editorial** — Typography is the primary design material. Layout serves reading and writing.
4. **Trust** — Documents are binding. Signatures are serious. The UI must convey reliability.
5. **Operational Speed** — Keyboard-driven, minimal interruption, optimistic updates, fast.

### Non-Negotiable Bans

- No blue-default SaaS accent (`#2563eb`, `#3b82f6`, standard Tailwind blue)
- No card-based UI on data surfaces (Linear rule: 2-4px radius on panels/tables, 8-12px on floating only)
- No gradient backgrounds, glowing buttons, or floating action buttons
- No skeleton screens (Linear: inline shimmer or no loading state)
- No "AI" badges, sparkle icons, or robot imagery
- No full-page loading states
- No tutorial modals on first visit (contextual hints only)
- No bounce/spring animations on modals or panels (Linear rule: spring only for toggles)
- No stagger animations or parallax

### Tone

- Professional without being corporate
- Operational without being cold
- Premium without being flashy
- Dense without being overwhelming
- Quiet — the UI hierarchy loses to user content (Notion principle)

---

## 2. Layout Architecture

### Application Shell (Linear Inverted-L + Figma Three-Panel)

```
┌──────────────────────────────────────────────────────────────┐
│  Global Chrome   48px   [breadcrumb]     [⌘K]   [user]      │
├──────────┬───────────────────────┬───────────────────────────┤
│          │                       │                           │
│  SIDEBAR │     MAIN WORKSPACE    │     INSPECTOR (280px)     │
│          │                       │                           │
│  256px   │  ┌─────────────────┐  │  Contextual properties    │
│  (open)  │  │ Context Toolbar │  │  based on selection:      │
│  48px    │  │ (megaverbs)     │  │  - Placeholder props      │
│  (icon)  │  ├─────────────────┤  │  - Typography controls    │
│          │  │                 │  │  - Validation status      │
│          │  │  Content Area   │  │  - Version history        │
│          │  │  (flat, z-rad)  │  │  - Page thumbnails        │
│          │  │                 │  │                           │
│          │  └─────────────────┘  │  Collapsible (⌘I)        │
│          │                       │  Resizable                │
└──────────┴───────────────────────┴───────────────────────────┘
```

### Key Layout Rules

1. **Minimal border-radius on data surfaces (2px), larger on floating elements (10px)** — Linear principle. Panels, sidebars, content areas get 2px (sharp, subtle). Modals, dropdowns, command palette get 10px. The 8px gap creates the visual hierarchy.
2. **Sidebar is dimmer than content area** — Linear 2025 refresh principle. After user navigates, sidebar recedes, content takes visual precedence.
3. **Inspector is contextual** — Figma principle. Shows different properties based on what's selected: document properties, placeholder properties, signature field properties.
4. **Toolbar shows megaverbs** — Acrobat principle. Not generic icons, but outcome-oriented actions: Edit / Preview / Sign / Share / Export.
5. **Panels are resizable** — Figma UI3 principle. User can widen inspector for complex property editing.

### Layout When No Document Is Open (Acrobat Home)

```
┌──────────────────────────────────────────────┐
│  Public Header   [logo] [nav] [cta buttons]   │
├──────────────────────────────────────────────┤
│                                              │
│         RECENT DOCUMENTS / TEMPLATES         │
│         (flat list, 2px radius)              │
│                                              │
│         QUICK ACTIONS: Create / Upload /     │
│         Batch / Sign                         │
│                                              │
├──────────────────────────────────────────────┤
│  Footer                                       │
└──────────────────────────────────────────────┘
```

### Navigation

**Authenticated sidebar** (ordered by workflow, not alphabetically):
```
▸ Templates        Template gallery + search
▸ Studio           Document creator (main editor)
▸ My Documents     Recent + saved documents
▸ Drafts           In-progress documents
▸ Batch            Batch processing workflow
▸ Signatures       Signature library + create
▸ ──────────────
▸ Billing          Subscription, wallet, invoices
▸ Activity         History + analytics
▸ Settings         Profile, security, API keys
─── (admin only) ───
▸ Admin Dashboard
▸ Users / Health / Audit / Blog / FAQ
```

**Public header** (unsigned):
```
[Logo]  Templates  Pricing  Blog  FAQ  Support  [Sign In]  [Start Free]
```

---

## 3. Border Radius & Elevation System

**This is the single most important visual rule.** It is what eliminates the "SaaS template" look.

### Rule
| Element Type | Border Radius | Elevation |
|---|---|---|
| Data surfaces (panels, sidebars, content areas, tables, lists) | **2px** | Flat (no shadow) |
| Floating elements (modals, dropdowns, command palette, popovers) | **10px** | Shadow: elevation |
| Document blocks in editor | **3px** | Flat |
| Buttons | **6px** | Flat |
| Input fields | **6px** | Flat, focus ring only |
| Status badges / tags | **9999px** (pill) | Flat |

### Implementation
```css
--radius-xs:     2px      /* Data surfaces: panels, sidebars, tables, content areas */
--radius-sm:     4px      /* List items, table rows, small containers */
--radius-md:     6px      /* Buttons, inputs, interactive controls */
--radius-lg:     10px     /* Floating elements: modals, dropdowns, command palette */
--radius-xl:     16px     /* Large modals, dialog overlays */
--radius-full:   9999px   /* Status badges, tag pills ONLY */
```

### Rationale
Linear uses a graduated minimal-radius system: 2-4px on data surfaces (subdued, feels sharp), 6-8px on interactive controls, 8-12px on floating elements. The gap between surface radii and floating radii creates a clear two-tier visual hierarchy. The effect is achieved through **contrast between radii**, not through absolute zero.

Notion uses 3px radius on its content blocks — barely rounded. This keeps blocks feeling like text containers rather than cards. Cards have presence. Blocks disappear.

**Do NOT use:** `rounded-lg`, `rounded-md`, `rounded-xl` from Tailwind on any panel, card, sidebar, table, or content container.

---

## 4. Typography System

Typography is the primary design material. Not decoration. The interface must read like a well-typeset publication.

### Font Stack
```css
--font-sans:  'Inter', -apple-system, 'Segoe UI', sans-serif
--font-mono:  'JetBrains Mono', 'SF Mono', 'Fira Code', monospace
--font-serif: 'Instrument Serif', 'Georgia', serif
```

### Scale (with line height)

```css
--fs-micro:   0.6875rem  (11px) / 1.3   — Badges, metadata
--fs-xs:      0.75rem    (12px) / 1.4   — Labels, sidebar items, table cells
--fs-sm:      0.8125rem  (13px) / 1.5   — UI body, nav, secondary text
--fs-base:    0.9375rem  (15px) / 1.6   — **Document body** (print convention)
--fs-lg:      1.0625rem  (17px) / 1.5   — Subheadings, panel titles
--fs-xl:      1.25rem    (20px) / 1.4   — Section headings
--fs-2xl:     1.5rem     (24px) / 1.3   — Page headings
--fs-3xl:     1.75rem    (28px) / 1.25  — Primary headings
```

### Typography Rules

1. **Document body is 15px, not 16px.** 16px is the web default. 15px is the print-body convention. This single change makes the document reading experience feel more refined, less "web app."
2. **Line height is generous: 1.6 for body text.** Notion uses 1.5-1.6. Most SaaS apps use 1.4. Generous leading signals editorial quality.
3. **No medium (500) weight anywhere.** Notion principle: body at 400, headings at 600. No semibold for labels. UI hierarchy stays quiet so user content hierarchy takes priority.
4. **Text color is warm dark gray, not pure black.** Notion uses `#37352F`. MyTypist uses `--text-primary: #1a1a17` — warm, not cool.
5. **Max line length: 66 characters** in document reading mode. Maintained by 720px max-width + 64px horizontal padding.
6. **Serif (Instrument Serif) reserved for document titles and editorial headings** — Notion principle: serif positions content alongside journals and books. Never use serif in UI chrome.

### Vertical Rhythm
```css
--rhythm:   4px  /* Baseline grid unit */
--stack-xs: 4px  /* Tight spacing between related elements */
--stack-sm: 8px  /* Label to value */
--stack-md: 16px /* Paragraphs */
--stack-lg: 24px /* Sections */
--stack-xl: 40px /* Major breaks */
```

---

## 5. Color System

### Strategy

- **Near-monochrome dominant** — Warm neutrals, not cool grays. Color is rare and meaningful (Linear principle).
- **Violet-indigo accent** — NOT blue. Distinguishes from 90% of SaaS products.
- **Status colors** — Green for completed/verified, amber for pending/modified, red for errors. Used only for functional signals (Linear status dots pattern).
- **Background tints at very low opacity** — `rgba(accent, 0.05)` for selections, `rgba(status, 0.08)` for status backgrounds (Linear principle).

### Palette

```css
/* ── SURFACES (warm neutrals) ── */

--surface-app:           #f8f7f4    /* Workspace background (warm off-white) */
--surface-elevated:      #ffffff    /* Panels, modals, inspector */
--surface-hover:         #efeeeb    /* Hover state */
--surface-active:        #e6e5e1    /* Active/selected */
--surface-overlay:       rgba(23, 23, 20, 0.4)
--surface-document:      #fcfcfa    /* Document preview area */

/* ── DARK SURFACES (Linear warm dark sidebar) ── */

--surface-dark:          #161615    /* Sidebar, dark mode base */
--surface-dark-elevated: #1e1e1b    /* Dark mode panels */
--surface-dark-hover:    #262622
--surface-dark-active:   #2e2e29

/* ── TEXT (warm, not pure black) ── */

--text-primary:          #1a1a17    /* Body text */
--text-secondary:        #6b6b63    /* Labels, descriptions */
--text-tertiary:         #9e9e94    /* Placeholder, metadata */
--text-quaternary:       #c5c5bd    /* Subtle borders */

--text-on-dark:          #efeeeb
--text-on-dark-secondary:#8a8a80

/* ── ACCENT (violet-indigo — NOT blue) ── */

--accent:                #6C47FF    /* Primary (deep violet-indigo) */
--accent-hover:          #5B36E8
--accent-active:         #4A2AD1
--accent-subtle:         rgba(108, 71, 255, 0.08)  /* Selection backgrounds */
--accent-border:         rgba(108, 71, 255, 0.2)   /* Subtle accent borders */

--accent-dark:           #8B6FFF
--accent-dark-hover:     #7A5EFF
--accent-dark-subtle:    rgba(108, 71, 255, 0.15)

/* ── STATUS DOTS (Linear-style, functional only) ── */

--status-success:        #059669    /* Completed, signed, verified */
--status-success-bg:     rgba(5, 150, 105, 0.08)
--status-warning:        #D97706    /* Pending, modified, expiring */
--status-warning-bg:     rgba(217, 119, 6, 0.08)
--status-error:          #DC2626    /* Failed, rejected, critical */
--status-error-bg:       rgba(220, 38, 38, 0.08)
--status-neutral:        #9e9e94    /* Draft, queued, idle */
--status-neutral-bg:     rgba(158, 158, 148, 0.08)
--status-active:         #6C47FF    /* In progress, executing */
--status-active-bg:      rgba(108, 71, 255, 0.08)

/* ── BORDERS ── */

--border:                hsla(45, 6%, 75%, 0.3)
--border-hover:          hsla(45, 6%, 60%, 0.4)
--border-light:          hsla(45, 6%, 85%, 0.4)
--border-focus:          #6C47FF

--border-dark:           hsla(45, 3%, 25%, 0.4)
--border-dark-hover:     hsla(45, 3%, 35%, 0.5)
```

### Accent Usage Rules

Violet-indigo (`#6C47FF`) is used ONLY for:
- Primary action buttons (one per view)
- Active navigation indicator (3px left border — Linear pattern)
- Focus rings on inputs
- Link text
- Command palette selection highlight
- In-progress workflow indicators

Never use accent for:
- Background fills or decorative elements
- Non-interactive surfaces
- Secondary buttons (use outline/gray instead)
- Data visualization

### Status Color Usage

Status colors appear as:
- **6px dots** — Linear-style status indicators on list items
- **Badge backgrounds** — `rgba(color, 0.08)` with matching dot
- **Never as large colored surfaces**

---

## 6. Spacing System

### Base: 4px
```css
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-5:   20px
--space-6:   24px
--space-7:   28px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
```

### Layout Constants
```css
--sidebar-width:         256px
--sidebar-collapsed:     48px
--inspector-width:       280px
--chrome-height:         48px
--toolbar-height:        44px
--sidebar-item-height:   32px
--content-max-width:     720px    /* Reading width ~66ch */
--document-margin:       64px     /* Notion-style wide content padding */
```

### Density Zones

| Zone | Horizontal Padding | Vertical Spacing | Character |
|---|---|---|---|
| Sidebar items | 12px | 6px | Dense, operational (Linear) |
| Inspector rows | 16px | 8px | Dense, inspectable (Figma) |
| Document content | 64px | 4px (between blocks) | Wide margins, editorial (Notion) |
| Data tables | 12px | 8px | Dense, scannable (Dub) |
| Modals | 24px | 16px | Focused |

---

## 7. Workspace Navigation

### Sidebar (Linear-Inspired)

- 256px wide, dim background (`--surface-dark` in dark mode, `--surface-elevated` with lower opacity in light mode)
- **Sidebar is dimmer than content** — a few notches darker/lower contrast so content takes precedence after navigation
- 32px item height, 12px horizontal padding
- Active: 3px accent left border + `--accent-subtle` background
- Hover: `--surface-hover`
- Section headers: all-caps 10px `--text-tertiary`, 8px padding above, 4px below
- Collapse to icon-only (48px) with `Cmd+\`
- **No expand/collapse sections** — all items visible, scroll if needed (Linear pattern)
- Icons: 18x18, no colored backgrounds (Linear 2025 refresh de-emphasized icons)

### Global Chrome (48px)

- Breadcrumb navigation (left)
- Cmd+K trigger: pill-shaped, subtle, shows "⌘K" hint
- Global actions: notifications (dot-only, no count badge), user menu
- Background: elevated surface, 1px bottom border

### Public Header

- 48px, `--surface-elevated`, centered max-width
- Nav links: `--text-secondary`, 14px/1.4
- CTA button: `--accent` filled (one per page)

---

## 8. Document Operations Toolbar (Acrobat-Inspired "Megaverbs")

When a document is open, the toolbar shows outcome-oriented actions, not generic icons:

```
[← Back]  │  Edit    Preview    Sign    Share    Export  │  [More ▾]
```

### Toolbar Modes

| Mode | Megaverbs Shown |
|---|---|
| **Browse** (template list) | Sort, Filter, Search, Create New |
| **Preview** (document viewing) | Zoom, Page Nav, Download, Print, Sign, Share |
| **Edit** (document editor) | Font, Size, Bold/Italic/Underline, Align, Color, Insert Placeholder, Undo/Redo |
| **Sign** | Place Signature, Place Date, Initial Here, Send for Signature |
| **Batch** | Add Files, Configure Mapping, Preview, Run All, Export All |

### Customizable Toolbar

Right-click toolbar → "Customize" to add/remove tools (Acrobat power-user feature). User preferences persist per workspace.

---

## 9. Signature Components

### 9.1 Live Document Preview Engine
- Page-accurate rendering: margins, page breaks, headers, footers, spacing
- WYSIWYG fidelity to DOCX/PDF output
- Zoom: 50% to 200% with Fit Page / Fit Width presets
- Background: `--surface-document` — warm paper-like, not pure white
- **Zero border-radius** on preview surface

### 9.2 Formatting Fidelity Indicators
- Template-matches: subtle border (accent-tinted) — "Matches template"
- User modifications: amber dot + "Modified" tooltip
- Custom overrides: green dot + "Custom" tooltip
- Displayed as 6px status dots next to each placeholder (Linear pattern)

### 9.3 Placeholder Inspector Panel (Figma-Inspired)
- Right panel showing all detected placeholders as a property list
- Each item: label + value + formatting info + status dot
- Inline editing with instant preview update
- Smart type detection with validation feedback
- Resizable panel width

### 9.4 Generation Workflow Pipeline (Trigger.dev-Inspired)
Horizontal connected stages with status badges:

```
● Upload    →   ● Detect    →   ● Validate    →   ● Generate   →   ● Export
  [3 docs]      [3/3 OK]       [2/3 OK, 1 ⚠]     [2/3 done]      [0/3 done]
```

- Pending: gray dot + outline style
- Active: accent pulse animation
- Complete: green check
- Error: red X 
- Progress: percentage + current step label
- Click any stage to jump to details
- Batch mode: shows all items with individual status + retry button

### 9.5 Activity Timeline (Linear-Inspired)
- Left-aligned vertical timeline with 6px status dots
- Event types: Created, Edited, Signed, Shared, Exported
- Timestamps relative ("2h ago", "Yesterday")
- Click to expand details
- Filterable by event type

---

## 10. Motion System

### Philosophy
Motion communicates state change, not personality. Every animation answers "what just happened?" within 200ms. (Linear principle: fast, operational.)

### Timing
```css
--duration-instant:   50ms     /* Hover, active states */
--duration-fast:      100ms    /* Focus rings, toggle switches */
--duration-normal:    200ms    /* Panel slides, dropdowns, modals */
--duration-slow:      250ms    /* Page transitions, mode switches */
```

### Curves
```css
--ease-out:    cubic-bezier(0.16, 1, 0.3, 1)  /* Standard — Linear-style */
--ease-in:     cubic-bezier(0.4, 0, 0.68, 0.06)
--ease-spring: cubic-bezier(0.34, 1.56, 0.64, 1)  /* Toggles and checkboxes ONLY */
```

### Motion Bans
- No spring on modals, panels, or page transitions (Linear rule)
- No stagger animations
- No parallax or scroll-triggered animations
- No skeleton screens
- No hover animations on surfaces (scale, lift, glow)
- No bounce

---

## 11. Dark Mode (Linear-Inspired Warm Dark)

- Sidebar: `--surface-dark` (#161615) — warm dark, not pure black
- Elevated: `--surface-dark-elevated` (#1e1e1b)
- Accent: brightens to `--accent-dark` (#8B6FFF)
- Borders: `--border-dark` family
- Document surface: `--surface-dark-elevated`
- Text: `--text-on-dark` family
- Toggle: icon-only button in global chrome

---

## 12. Component States

Every interactive component implements these states:

| State | Visual | Timing |
|---|---|---|
| **default** | Resting | — |
| **hover** | `--surface-hover` | 50ms |
| **active** | `--surface-active` | 50ms |
| **focus** | 2px `--border-focus` ring | 100ms |
| **disabled** | `--text-quaternary`, no pointer | — |
| **loading** | 16px spinner, accent | 600ms loop |
| **empty** | Message + action (never "no data") | — |
| **error** | `--status-error` dot + message | — |
| **success** | `--status-success` dot + flash | 200ms |

---

## 13. Layout Adaptation

| Breakpoint | Sidebar | Inspector | Toolbar | Document |
|---|---|---|---|---|
| >= 1280px | Open (256px) | Open (280px) | Full | Side-by-side |
| 1024-1279px | Open | Collapsed (open via icon) | Full | Side-by-side |
| 768-1023px | Collapsed (48px) | Bottom sheet | Condensed | Single column |
| < 768px | Drawer overlay | Full-screen sheet | Icon menu | Single page, scrollable |

---

## 14. What NOT To Build

These patterns produce generic, SaaS-looking, or AI-template UIs:

1. **4-column stat cards** at top of every dashboard — Linear has none. Neither should we.
2. **Card-based data UI** — Zero radius on all data surfaces. No card containers for list items.
3. **Circular avatars with online dots** — Square avatars are more serious.
4. **Notification bell with red badge count** — Subtle dot or nothing.
5. **"Getting started" checklist** — Contextual tooltip hints instead.
6. **Step wizard (Step 1 of 4...)** — Inline progressive disclosure instead.
7. **Search bar "Search..." at top** — Cmd+K is the search. Always.
8. **Animated counters on stats** — Just show the number.
9. **"Powered by" badges** — Never.
10. **AI sparkle icons or robot imagery** — Never.
11. **Gradient hero sections** — Landing page only, and only if truly needed.
12. **Card hover animations (scale, lift)** — Flat surfaces don't float.

---

## 15. Files

```
references/
├── linear/        ← sidebar-and-navigation.md, border-radius-and-elevation.md,
│                    command-palette.md, color-and-status-dots.md
├── notion/        ← block-architecture.md, typography-and-spacing.md
├── acrobat/       ← document-operations-and-toolbar.md
├── figma/         ← panel-architecture.md
├── triggerdev/    ← workflow-pipeline.md
└── dub/           ← admin-and-settings.md

docs/
├── PRODUCT_UI_SYSTEM.md         ← This file (supreme design authority)
├── COMPONENT_SPECIFICATIONS.md  ← Component-level specs
├── WIREFRAME_BLUEPRINTS.md      ← Layout wireframes
├── PAGES_AND_ROUTES_SPEC.md     ← Route map
└── DESIGN_SYSTEM_AND_TOKENS.md  ← Token reference
```

---

*Every rule in this document is grounded in reference evidence. If you disagree with a rule, go study the reference product first, then propose the change with evidence.*
