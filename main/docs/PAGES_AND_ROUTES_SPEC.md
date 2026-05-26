# Comprehensive Pages & Routes Specification

This document provides a master map of all routes across `v1` and `v2`, identifying their purpose, current status, and the plan for their final implementation in `main`.

## 1. Route Mapping Table

| Route Path | v1 Status | v2 Status | Final Recommendation | Purpose |
| :--- | :--- | :--- | :--- | :--- |
| `/` | Exists (Index) | Exists (Homepage) | Merge (v2 Layout + v1 Trust) | Landing Page |
| `/dashboard` | Exists | Partial (user-dashboard) | Upgrade v1 with v2 Aesthetics | User main workspace |
| `/login` | Exists | Missing | Port from v1 + v2 Theme | Authentication |
| `/signup` | Exists | Missing | Port from v1 + v2 Theme | User Onboarding |
| `/pricing` | Exists | Exists (pricing-upgrade) | Use v2 Page + v1 Naira prices | Monetization |
| `/template-gallery` | (Templates) | Exists | Use v2 Gallery | Template discovery |
| `/create-document` | Exists | (document-creator-studio) | Use v2 Studio + v1 features | Core Document creation |
| `/profile` | Exists | Missing | Port from v1 | User account management |
| `/settings` | Exists | Missing | Port from v1 | User preferences |
| `/admin/*` | 6 pages exist | Missing | Port from v1 (Update UI) | Platform management |
| `/autosign` | Exists | Missing | Port from v1 | E-Signature feature |
| `/autotype` | Exists | Missing | Port from v1 | AI Typing feature |
| `/bonuses` | Exists | Missing | Port from v1 | Reward system |
| `/analytics` | Exists | Missing | Port from v1 | User performance data |
| `/blog` | Exists | Missing | Port from v1 | Content marketing |
| `/faq` | Exists | Missing | Port from v1 | User support |
| `/about` | Exists | Missing | Port from v1 | Company info |
| `/contact` | Exists | Missing | Port from v1 | Customer support |
| `/legals` | Exists | Missing | Port from v1 | Terms & Privacy |

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
To build the project without v1/v2 code, the documentation must provide:
1.  **State Logic**: How v1 handles multi-step forms and recipient arrays.
2.  **API Integration**: How v1 uses React Query for templates and user data.
3.  **UI Schematics**: Precise measurements for v2's 50/50 studio split and card shadows.

### Route Restoration Strategy
The final `main` application will restore all 25+ routes from v1 but re-skin them entirely using the v2 Design System.

**Priority 1: Core Flow**
- Homepage -> Signup -> Studio -> Download.
**Priority 2: Management**
- Dashboard -> Profile -> Settings.
**Priority 3: Admin & Growth**
- Admin Suite -> Bonuses -> Analytics -> Blog.

---

*This specification will be updated as we audit individual page logic.*
