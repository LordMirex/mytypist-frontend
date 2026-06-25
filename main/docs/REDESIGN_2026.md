# MyTypist — Redesign 2026 (Canonical)

> **This document is the current source of truth for product identity, IA, and design direction.**
> It supersedes `PRODUCT_REQUIREMENTS_DOCUMENT.md` and `PRODUCT_UI_SYSTEM.md` **on identity** (market, currency, pricing model, font). Their *layout/reference patterns* (Linear shell, Notion blocks, Acrobat toolbar, Figma panels, Trigger.dev pipeline, Dub admin) remain valid.
> Design rules in `ai-rules/MASTER.md` remain in force. Read that first for any UI code.

---

## 0. Locked decisions (2026-06-25)

- **Identity A — Nigerian Document OS.** Market: Nigerian students, freelancers, SMBs. Currency: ₦ Naira only. Real free tier (₦0) + Pro (₦75,000) + Enterprise (₦230,000). Font: Outfit (Inter banned). Tone: premium, accessible, calm.
- **Sequence A — Flagship-first.** Landing page → production quality (locks the system) → review → Auth → Dashboard → Studio → Vault/Pipeline/Sign → Settings/Billing → Admin → Content.

---

## 1. Phase 1 — Product Audit

### Strengths (keep)
- Animated in-code document mockup on landing (non-generic hero visual).
- Pipeline strip, numbered feature rows (avoids banned 3-col card grid), competitor positioning.
- Correct motion usage (`motion/react`, IntersectionObserver, not `window.scroll`).
- Consistent token system (`tokens.css`), ₦ throughout, mobile-first CSS.

### Weaknesses / debt
- **Doc-vs-code identity contradiction** (resolved above — Identity A).
- Banned patterns live on the landing: uppercase letter-spaced eyebrow, fake-perfect stat (`99.97%`), placeholder brand `Acme Corp` + American name `Sarah Mitchell`, decorative pastel hero wash, possibly-false compliance claims.
- Thin UI kit: only Button / Badge / Input exist. Needs Select, Modal, Dropdown, Tabs, Table, Toast, Tooltip, Checkbox, Switch, Avatar, Skeleton, etc. (V1 has a full shadcn kit to port from.)
- No social proof, weak CTA section, flat pricing (no annual toggle / center-stage Pro).

### Inventory
- **Built (17 routes):** landing, public templates, support, pricing, admin, vault, settings, auth, studio, templates, sign, product, pipeline, about, terms, privacy, 404.
- **Missing (~spec calls for 80):** Dashboard/workspace home, Billing, Wallet, Signatures library, Batch, Blog, FAQ, Documentation, Changelog, Status, Security, Contact, Careers, Notifications, Team management, Activity log, ~12 admin sub-pages, settings sub-tabs, recipient signing flow.
- **Sources to port from:** V1 = functional backbone (28 pages, full Radix/shadcn kit, auth/admin/signatures). V2 = visual ideas (studio split-pane, usage calculator, testimonials) — but `.jsx`, Playfair, off-system.

---

## 2. Phase 2 — Information Architecture

### Terminology corrections (generic spec → document OS)
Prompt Studio→**Studio**, Agent Builder→**Template Builder**, Workflow Builder→**Pipeline/Routing**, Knowledge Base→**Vault**, Deployments→**Sends**. Drop "Prompt/Agent/Knowledge Base" — they imply LLM/DevOps and confuse the audience.

### Sitemap
```
PUBLIC
├─ Landing · Product/Features · Pricing · Templates (gallery)
├─ Blog · Help/FAQ · Docs · Changelog · Status
└─ About · Contact · Careers · Security · Terms · Privacy

USER PLATFORM (sidebar + ⌘K)
├─ Home        Continue / Needs-attention / Recents / Quick actions  (NO metric grid, NO hero)
├─ Studio·New  3-pane: Fields | live PDF preview | Inspector → blocking Fidelity check
├─ Pipeline    Per-doc stepper (Draft→Fidelity→Approval→Sign→Archive); board view; seq + parallel routing
├─ Vault       Dense list⇄grid, full-text search, facets, version drawer, tamper-evident audit log
├─ Templates   Gallery + Template Builder
├─ Notifications
└─ Settings    Account · Team & Roles · Billing (₦) · Notifications · Integrations · Security

RECIPIENT (no account, tokenized link)
└─ Review → guided field navigator (remaining counter, Next / Next-required) → Sign → signed PDF + audit cert
   Mobile: Form View by default (strip to fields)

ADMIN (separate shell)
└─ Users (search · impersonate-audited · roles) · Documents/Moderation · Revenue (₦ MRR — charts OK here)
   · Feature Flags (per-org) · Templates (catalog) · Audit Log (platform-wide) · Settings
```

### Key UX principles (from research)
- **Onboarding:** open into *template selection*, not an empty editor (PandaDoc). Persistent resumable checklist, one pre-checked item. First finished PDF in <3 min. Billing/team setup is just-in-time, never a gate.
- **Home is an action/activity surface,** not a BI dashboard. Charts only on Admin→Revenue.
- **Studio:** left = structured fields (the differentiator vs DocuSign's freeform boxes), center = pixel-perfect live PDF (the hero), right = contextual inspector. Fidelity check = counter + jump-to-issue, blocks send until clean (Dropbox Sign pattern).
- **Signing:** tokenized link, no signup, guided field-by-field with live remaining counter, mobile Form View default (Nigeria is mobile-first).
- **Nav:** persistent left sidebar 240–280px + ⌘K command palette. Mobile: bottom tab bar (Home/Vault/New/Notifications), signing-and-tracking-first.

---

## 3. Phase 3 — Design System

### Typography
- **Display (hero, big numbers):** Instrument Serif — legal-document gravitas. Already loaded.
- **UI / body:** Outfit, 15px body, 1.6 leading.
- **Mono:** JetBrains Mono — field labels, document IDs, version hashes, ref numbers.
- Tight display tracking (~-0.02em), normal body tracking. No em-dashes in copy. Headlines ≤ ~44 chars/line.

### Color
- Neutrals carry the page (near-white `#FAFAF8` surface, near-black `#1A1A17` text — never pure #000/#FFF).
- `#6C47FF` = functional accent ONLY: primary CTA, active, focus ring, filled-field, signature affordance. Tint scale for hover/active; never a background wash or gradient.
- **Status = design language:** draft=neutral, pending/approval=amber `#D97706`, in-progress=violet, signed/complete=green `#059669`, failed=red `#DC2626`.
- Dark sections as punctuation only (stats band, footer/CTA) — not a dark theme.

### Radius / elevation (graduated, the anti-template rule)
2px data surfaces · 4px list items · 6px buttons/inputs · 10px floating (modals/dropdowns/⌘K) · pill for status badges only. Hairline borders 0.5–1px low-alpha define structure; shadow only to lift the active PDF surface (max `0 2px 8px rgba(0,0,0,.08)`).

### Spacing / grid
8px base: 4/8/12/16/24/32/48/64/96. Section padding 96–128px desktop. **Vary card sizes** — break the equal-3-col grid; use asymmetric bento where the live-document cell is large.

### Motion (`motion/react`)
- Micro: 120–180ms, ease `cubic-bezier(0.32,0.72,0,1)`.
- Entrances/scroll: 400–700ms ease-out, subtle stagger, never every element.
- Brand moments: signature-applying + field→PDF resolution. No bounce/overshoot on serious UI. Respect `prefers-reduced-motion`.

### Components to build (port from V1's Radix kit where possible)
Button ✓, Badge ✓, Input ✓ → add Select, Textarea, Checkbox, Switch, Radio, Modal/Dialog, Dropdown, Tabs, Tooltip, Toast, Avatar, Skeleton, Table, Pagination, Command palette (exists, extend), StatusPill, FieldRow, FileUpload, EmptyState.

### Accessibility / performance
WCAG AA contrast, visible focus rings (already global), keyboard-first (⌘K), 16px min inputs (iOS), `prefers-reduced-motion`, semantic landmarks. Targets: fast first paint, lazy-load below-fold, animate only transform/opacity.

---

## 4. Manual (user-owned) to-dos
- Real metrics + compliance status (replace honest placeholders for `12k/month`, fidelity, encryption/SOC2/GDPR claims).
- Real logos + named testimonials for social proof.
- Spline scenes only if/when we add a 3D studio moment (landing does not need it).
- Brand asset files (logo variants) if beyond what's in `public/brand/`.

---

*Research basis: two market-research passes (premium SaaS visual systems — Linear/Stripe/Vercel/Notion; document/e-sign UX — Documenso/DocuSign/PandaDoc/Dropbox Sign). Full citations in session history.*
