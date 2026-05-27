# Comprehensive Pages & Routes Specification

This document provides a master map of all routes across `v1` and `v2`, identifying their purpose, current status, and the plan for their final implementation in `main`.

## 1. Route Mapping Table

| Category | Feature | v1 Route | v2 Route | Final Recommendation |
| :--- | :--- | :--- | :--- | :--- |
| **Landing** | Home | `/` | `/` or `/homepage` | v2 Logic + Professional Design |
| **Core App** | Dashboard | `/dashboard` | `/user-dashboard` | v2 Base + Market Features |
| **Tools** | Document Creator | `/create-document` | `/document-creator-studio`| v2 Studio + v1 Sign/Recipients |
| **Tools** | Gallery/Templates | `/templates` | `/template-gallery` | v1 Filtering + v2 Layout |
| **Tools** | Template Detail | N/A | `/template-detail-pages` | v2 logic + v1 features |
| **Tools** | AutoSign | `/autosign` | Not implemented | Port v1 logic to v2 UI |
| **Tools** | AutoType | `/autotype` | Not implemented | Port v1 logic to v2 UI |
| **Pricing** | Pricing/Upgrade | `/pricing` | `/pricing-upgrade` | v2 UI + v1 localized logic |
| **Admin** | Admin Dashboard | `/admin` | Not implemented | Port v1 logic (Redesign) |
| **Admin** | Admin Users | `/admin/users` | Not implemented | Port v1 logic (Redesign) |
| **Admin** | Admin Health | `/admin/health` | Not implemented | Port v1 logic (Redesign) |
| **Admin** | Admin Bonuses | `/admin/bonuses` | Not implemented | Port v1 logic (Redesign) |
| **Admin** | Admin Preview | `/admin/preview` | Not implemented | Port v1 logic (Redesign) |
| **Admin** | Admin Upload | `/admin/upload-template`| Not implemented | Port v1 logic (Redesign) |
| **Auth** | Login | `/login` | Not implemented | Port v1 + v2 Theme |
| **Auth** | Signup | `/signup` | Not implemented | Port v1 + v2 Theme |
| **Auth** | Forgot Password | `/forgot-password` | Not implemented | Port v1 + v2 Theme |
| **Info** | About | `/about` | Not implemented | Redesign v1 copy |
| **Info** | Contact | `/contact` | Not implemented | Redesign v1 copy |
| **Info** | How To Use | `/how-to-use` | Not implemented | Redesign v1 copy |
| **Info** | Blog | `/blog` | Not implemented | Redesign v1 copy |
| **Info** | FAQ | `/faq` | Not implemented | Redesign v1 copy |
| **Info** | Become Partner | `/become-partner` | Not implemented | Redesign v1 copy |
| **Info** | Legals | `/legals` | Not implemented | Redesign v1 copy |
| **Info** | Support | `/support` | Not implemented | Redesign v1 copy |
| **Info** | Settings | `/settings` | Not implemented | Redesign v1 copy |
| **Info** | Bonuses | `/bonuses` | Not implemented | Redesign v1 copy |
| **Info** | Analytics | `/analytics` | Not implemented | Redesign v1 copy |


## 2. Feature Completion Gap Analysis

### v1 (The "Functional" Backbone)
- **Strengths**: Comprehensive route coverage, TypeScript safety, Admin logic, E-Signature flow, Reward system.
- **Half-Baked Areas**: 
  - UI is generic (Shadcn defaults).
  - Lacks "Wow" factors (Interactive previews, calculators).
  - Mobile responsiveness is basic.
  - No visual "Live Preview" in the editor.

### v2 (The "Visual" Shell)
- **Strengths**: High-end aesthetic, Playfair typography, interactive Studio layout, sophisticated Pricing page.
- **Half-Baked Areas**:
  - **Incomplete Logic**: Many buttons are just `console.log` placeholders.
  - **Missing Pages**: No Auth (Login/Signup), No Admin, No Profile/Settings.
  - **Language**: JavaScript (Missing type safety).
  - **Dependencies**: Missing React Query, Helmet, and other critical production tools found in v1.

## 3. The "Main" Evolution Plan

### Architecture Recovery
... (State Logic/API Integration/UI Schematics) ...

### "Business Core" Route Restoration Strategy
The final `main` application must restore all **25+ routes from v1** but re-skin them entirely using a **unique, professional business core UI/UX.** 

**Spatial Navigation Mandate:** Move beyond "page-to-page" navigation. The application must feel like a **Persistent Workspace** (Figma, Linear). Routes should represent spatial shifts within a consistent environment rather than disconnected pages.

**Warning:** v2 currently lacks ~70% of the required public and admin pages. The next AI must not just copy v2; it must use v1 as the functional blueprint for the entire platform scope while elevating every single page to a professional business standard.

**Priority 1: Core Flow (Persistent Environment)**
- Homepage -> Signup -> Studio (High-Precision) -> Download.
**Priority 2: Operational Management (Spatial Logic)**
- Dashboard -> Profile -> Settings.
**Priority 3: Infrastructure Oversight (High Density)**
- Admin Suite -> Bonuses -> Analytics -> Blog -> Support/Legal pages.

---

*This specification will be updated as we audit individual page logic.*
