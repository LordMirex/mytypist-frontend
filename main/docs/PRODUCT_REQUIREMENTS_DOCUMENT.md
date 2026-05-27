# Product Requirements Document (PRD): MyTypist

**Product Name**: MyTypist  
**Identity**: The Document Operating System  
**Design Language**: Precision Enterprise Editorial  
**Reference Hierarchy**: Linear (shell) → Notion (documents) → Acrobat (operations) → Figma (panels) → Trigger.dev (workflows) → Dub (admin)  

> **Supersedes**: `archive/PRD_V1_ORIGINAL.md` (original v1 planning PRD, preserved for historical context).
> Original goals have been significantly elevated to match the Document Operating System vision.

---

## 1. Executive Summary

MyTypist is a high-precision document operations platform. It allows teams to manage, generate, and sign professional documents with absolute formatting fidelity. Unlike generic AI document generators, MyTypist is an **operating system for documents** — a spatial workspace where documents move through structured pipelines (Drafting → Fidelity Verification → Approval → Signing → Archival) with the precision of a professional publishing tool and the reliability of an enterprise platform.

## 2. Product Vision & Targets

### Vision Statement
To become the infrastructural layer for enterprise document operations — the way Linear is for issue tracking, Figma is for design, and Notion is for knowledge.

### Quantified Targets (Elevated from V1)
| Metric | V1 Target | Current Target | Rationale |
|--------|-----------|----------------|-----------|
| Document creation time reduction | 80% | **95%** | Template-first pipeline eliminates creation, not just speeds it up |
| Formatting fidelity | — | **100%** | Pixel-perfect parity between preview and output is non-negotiable |
| Signature completion rate | 99.9% | **99.99%** | Legal-grade reliability requires four nines |
| Platform uptime SLA | — | **99.99%** | Enterprise infrastructure standard |
| Page load (any view) | <2s | **<400ms** | Linear-level performance — sub-second or it's broken |
| Document generation | <5s | **<1.5s** | Optimistic pipeline with background rendering |
| Free tier documents/mo | 5 | **Removed** | Enterprise tool — 14-day free trial with all features, no free tier |
| Professional pricing | $29.99/mo | **$49/mo** | Premium positioning reflects enterprise-grade quality |
| Enterprise pricing | $99.99/mo | **$149/mo** | Includes SSO, audit logging, custom branding, dedicated infra |

## 3. Target Audience (Narrowed from V1)

**V1 targeted students, SMBs, legal firms, HR, sales, finance, marketing.** The current vision focuses exclusively on **Enterprise Document Operations**:

- **Operations Teams** — Managing high-volume recurring reports, client deliverables, and compliance documentation
- **Legal & Compliance** — Contracts, NDAs, signature workflows with binding audit trails
- **Enterprise Management** — Oversight of document pipelines, team throughput, and governance
- **Document-Critical Departments** — HR (offer letters, handbooks), Finance (invoices, reports), Sales (proposals, SOWs)

### Explicitly NOT targeting
- Students / individual users (commodity market, not our focus)
- AI content generation as a primary feature (precision over generation)
- One-off document creation (the system rewards pipeline investment)

## 4. Core Functional Requirements

### 4.1 Creator Studio (was "AutoType")
The document creation workspace — a Figma-inspired three-panel environment with a Linear-caliber command palette.

- **Split-pane live preview** — Form inputs on the left, live-rendered document on the right. 100% visual parity with final output.
- **Block-based document model** — Notion-inspired block architecture. Every document element (heading, paragraph, field, signature block) is a discrete block with 3px radius.
- **Keyboard-first** — Cmd+K command palette for all document operations. No context-switching to mouse.
- **Acrobat-style toolbar** — Megaverb actions (Edit / Preview / Sign / Share / Export) in a persistent toolbar.
- **Individual Placeholder Styling** — Style separate instances of the same variable differently (distinctive formatting requirement from the prototype IP).

### 4.2 Document Pipeline (was basic workflow)
Trigger.dev-inspired pipeline visualization where documents move through connected stages.

- **Pipeline view** — Visual connected stages: Draft → Fidelity Check → Approval → Sign → Archive
- **Status badges** — Color-coded status dots (Linear-inspired) at each stage: Pending, In Progress, Blocked, Complete, Failed
- **Batch processing** — Generate multiple documents from one data source with per-document error isolation (prototype IP)
- **Retry UX** — Failed documents show clear error + retry action, no silent failures

### 4.3 Electronic Signatures (was "AutoSign")
- **Acrobat-level signature UX** — Drag-and-drop signature fields in the preview pane
- **Sequential + parallel workflows** — Route documents to signers in order or simultaneously
- **Signature templates** — Pre-configured signing workflows for recurring document types
- **Audit trail** — Every signature event logged. Legal-grade compliance.

### 4.4 Command Center (was "Admin Console")
Dub-inspired admin surfaces with Linear-style data tables.

- **Pipeline monitor** — Real-time throughput, latency, and fidelity gauges
- **Team management** — Role-based permissions (Admin, Editor, Viewer, Signer)
- **Document governance** — Bulk operations, compliance checks, template audit
- **Usage analytics** — Completion rates, cycle time, user activity (clean data tables, not chart vomit)

### 4.5 Document Vault (new — not in V1)
- **Versioned storage** — Every save creates a version. Full diff history.
- **Template library** — 100+ curated templates (quality over V1's 500+). Each is hand-crafted with proper typography and structure.
- **Smart search** — Full-text search across all documents, templates, and their contents

## 5. User Experience Requirements

### 5.1 Design Standards (see PRODUCT_UI_SYSTEM.md for full spec)
- **Radius**: 2px on data surfaces, 6px on controls, 10px on modals (Linear graduated scale — NOT zero radius)
- **Accent**: Violet-indigo (#6C47FF) — explicitly NOT blue
- **Typography**: Inter UI, 15px body (print convention), 4px baseline grid
- **Motion**: 100-200ms transitions. Spring only for toggles. No stagger, no bounce, no parallax.
- **Sidebar**: Dimmer than content. Recedes after navigation (Linear 2025 principle).
- **Toolbar**: Megaverbs (Edit/Preview/Sign/Share/Export), not generic icons.

### 5.2 Navigation Architecture (see PAGES_AND_ROUTES_SPEC.md for full ~80-route map)
```
├── Studio (/)              ← Creator workspace
├── Templates (/templates)   ← Template library + management
├── Pipeline (/pipeline)     ← Document workflow stages
├── Sign (/sign)             ← Signature management
├── Vault (/vault)           ← Document storage + search
├── Settings (/settings)     ← Account, team, billing
└── Admin (/admin)           ← System management, analytics, governance
```

## 6. Technical Requirements

### 6.1 Frontend Stack
- **Framework**: React 18+ with TypeScript
- **Styling**: Zero-radius data surfaces (2px), violet-indigo accent, Inter typography
- **State**: Zustand (client) + React Query (server)
- **Routing**: React Router v6
- **Build**: Vite

### 6.2 Performance (Elevated from V1)
| Metric | V1 Target | Current Target |
|--------|-----------|----------------|
| Page load (any view) | <2s | **<400ms** |
| Document generation | <5s | **<1.5s** |
| Command palette open | — | **<50ms** |
| Pipeline status update | — | **Optimistic** (no loading state) |
| Preview ↔ output parity | — | **100%** (pixel-perfect) |

### 6.3 Security & Compliance
- **Authentication**: MFA, SSO (SAML/OIDC), passkeys
- **Encryption**: End-to-end for document content at rest and in transit
- **Compliance**: SOC 2 Type II, GDPR, HIPAA-ready
- **Audit**: Every document action is logged with timestamp, actor, and previous state

## 7. Competitive Landscape & Differentiation

> Detailed analysis in `references/competitors/` — 5 files covering PandaDoc, DocuSign, SignWell, Notarize, and African market players.

### How Competitors Fail (and How We Win)

| Competitor | Their Weakness | Our Advantage |
|-----------|---------------|---------------|
| **DocuSign** | AI widget breaking core workflow (users fleeing), pricing creep, layered-on modules, complex advanced features | No AI gimmicks. Clean pipeline. Precision document operations from scratch, not legacy debt. |
| **PandaDoc** | Rigid guided flow, pricing tier erosion, "fights you on images", expensive for SMB | Spatial workspace (not step-by-step wizard). Keyboard-first. Users control the pace. |
| **SignWell** | No mobile app, integratio poverty (2 native), complex multi-party routing, free tier limits | Desktop-first workspace. Pipeline view eliminates routing confusion. Built for teams, not solo freelancers. |
| **Notarize/Proof** | Account requirement for signers (MAJOR friction), per-transaction cost ($25-75), state law fragmentation | No account needed for recipients to sign. Subscription pricing (not per-transaction). Verification infrastructure optional, not mandatory. |
| **Nigerian platforms** (LegalDoc, Dockase, ToNote, etc.) | Fragmented — each solves ONE piece (doc gen OR notarization OR practice management). No integrated pipeline. Basic web UX. | Integrated Document OS. Precision templates + pipeline + e-sign + vault. Linear/Notion-caliber design, not basic forms. |

### Our Unfair Advantages
1. **Precision-first architecture** — Not an AI content generator. A document operating system. Formatting fidelity is the non-negotiable.
2. **Pipeline model** — Competitors treat documents as one-off creations. We treat them as lifecycle stages (Draft → Verify → Approve → Sign → Archive).
3. **Design system** — Not another SaaS UI. Zero-radius data surfaces, violet-indigo accent, Linear-caliber interaction design.
4. **African market knowledge** — NBA digital stamp integration, CAC filing, NIN verification, local compliance templates. Competitors are US/EU-focused.
5. **No legacy debt** — Built from scratch on the Document OS model. Not bolting pipeline onto an eSign product.

### What Competitors Do Right (That We Must Match)
- **DocuSign signer UX**: No login required to sign. Fast. Reliable.
- **PandaDoc guided flow**: The *concept* of step-by-step for complex workflows is good — we just won't make it mandatory.
- **SignWell simplicity**: When users say "I didn't need to read any instructions," that's the bar.
- **Notarize audit trail**: A/V recording + authentication codes. The gold standard for legal verification.
- **Dockase local AI**: Nigerian law-trained models. If MyTypist adds AI document analysis, this is the pattern.

---

## 8. Success Metrics (Elevated from V1)

### 7.1 Product Quality Metrics
- **Time-to-first-template**: How fast a new user creates their first document from a template (target: <2 minutes)
- **Pipeline completion rate**: Percentage of documents that complete the full Draft→Archive pipeline
- **Fidelity score**: Automated comparison of preview vs. output (target: 100%)

### 7.2 Business Metrics
- **Net Revenue Retention (NRR)**: >120% (enterprise SaaS benchmark)
- **Time-to-value**: Days from sign-up to first pipeline completion (target: <1 day)
- **Activation rate**: Percentage of trials that complete a full pipeline (target: >60%)

### 7.3 Engineering Metrics
- **P95 API latency**: <200ms
- **Zero-downtime deployments**: All releases without user-facing impact
- **Error budget**: 99.99% uptime = 52 minutes of allowed downtime per year

## 8. Subscription Plans (Elevated from V1)

| Feature | Professional | Enterprise |
|---------|-------------|------------|
| **Pricing** | $49/mo | $149/mo |
| **Documents** | Unlimited | Unlimited |
| **Team seats** | Up to 10 | Unlimited |
| **Pipeline stages** | 4 (Draft→Check→Approve→Export) | Full pipeline + Sign + Archive |
| **Templates** | 50 curated | 100+ curated + custom |
| **Signatures** | Included (sequential only) | Sequential + parallel + templates |
| **Branding** | MyTypist branded | Custom white-label |
| **SSO / SAML** | — | Included |
| **Audit logging** | — | Included |
| **API access** | Read-only | Full read/write |
| **Support** | Email (4h response) | Dedicated (1h response) |
| **Trial** | 14 days full-featured | 14 days full-featured |

### Enterprise Add-ons
- **Dedicated infrastructure**: Isolated rendering instance for predictable performance
- **Custom integrations**: API + webhook engineering support
- **On-premise option**: Self-hosted for regulated industries (available on request)

## 9. Development Roadmap

### Phase 0 — Foundation (Current)
- [x] Design system complete (PRODUCT_UI_SYSTEM.md)
- [x] Component specifications (COMPONENT_SPECIFICATIONS.md)
- [x] Wireframes (WIREFRAME_BLUEPRINTS.md)
- [x] Route map (PAGES_AND_ROUTES_SPEC.md)
- [x] Reference research (references/ — 10 observation files, 6 products)
- [ ] Backend deployment (PostgreSQL + Redis + env vars)
- [ ] Frontend scaffold (Vite + React + routing shell)

### Phase 1 — Studio + Pipeline (Tier 1, Priority)
- Creator Studio (split-pane editor with live preview)
- Template library (browse, search, select)
- Document Pipeline (Draft → Fidelity Check → Approval → Export)
- Command palette (Cmd+K global)
- Basic auth + user management

### Phase 2 — Signatures + Vault (Tier 2-3)
- Signature workflow (drag-and-drop fields, sequential signing)
- Document Vault (versioned storage, full-text search)
- Batch processing (multi-document from single data source)
- Team management (roles, permissions)

### Phase 3 — Admin + Enterprise (Tier 4-5)
- Command Center (pipeline monitor, analytics, governance)
- Billing + subscription management
- SSO/SAML integration
- API + webhook platform

### Phase 4 — Scale (Tier 6-7)
- Performance optimization (target: <400ms all views)
- White-label branding
- On-premise deployment option
- Advanced compliance features

## 10. What We Explicitly Will NOT Build

- **Generic AI content generation** — Not an AI writing assistant. Precision document operations. (Lesson from DocuSign: their AI widget is driving users away.)
- **Free tier** — Enterprise tool. 14-day trial, no free plan. (SignWell's free tier is their biggest constraint — we avoid this trap.)
- **Mobile-first** — Desktop workspace with responsive adaptation, not a mobile app. (SignWell's lack of native mobile is their #1 complaint — we don't try to be mobile-first either.)
- **Collaborative real-time editing** — Sequential pipeline handoff, not Google Docs.
- **500+ templates** — 100+ curated, hand-crafted templates. Quality > quantity.
- **Plugin/extension marketplace** — Not a platform play. Integrated experience only.
- **Native desktop apps** — Web-only (PWA for offline capability if needed).
- **Step-by-step guided flow as mandatory** — PandaDoc's 2024 redesign made this the default and users complained. We offer the spatial workspace; use Cmd+K for fast actions.
- **Per-transaction pricing** — Notarize/Proof charges $25-75 per notarization. We do subscription only. Predictable costs for enterprise.
- **Account requirement for document recipients** — DocuSign gets this right (no login to sign). Notarize gets this wrong (forces account creation). We follow DocuSign's pattern.
