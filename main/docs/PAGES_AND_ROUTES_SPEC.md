# Comprehensive Pages & Routes Specification

This document provides a master map of all routes across `v1` and `v2`, identifies what the FastAPI backend supports, and defines the complete route plan for `main`.

---

## 1. Route Mapping Table

| Category | Feature | v1 Route | v2 Route | Backend (FastAPI) | Final Recommendation |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Landing** | Home | `/` | `/` or `/homepage` | `GET /api/landing/templates` | v2 Logic + Professional Design |
| **Auth** | Login | `/login` | Not implemented | `POST /auth/login` | Port v1 + v2 Theme |
| **Auth** | Signup | `/signup` | Not implemented | `POST /auth/register` | Port v1 + v2 Theme |
| **Auth** | Forgot Password | `/forgot-password` | Not implemented | `POST /auth/password-reset` | Port v1 + v2 Theme |
| **Auth** | Reset Password | N/A | Not implemented | `POST /auth/password-reset/confirm` | New page |
| **Auth** | 2FA Setup | N/A | N/A | `POST /auth/2fa/setup`, `/auth/2fa/verify` | New page |
| **Auth** | Email Verification | N/A | N/A | `POST /auth/verify-email` | New interstitial |
| **Auth** | Session Management | N/A | N/A | `GET /auth/sessions`, `DELETE /auth/sessions/{id}` | New settings section |
| **Core App** | Dashboard | `/dashboard` | `/user-dashboard` | `GET /api/documents/recent` | v2 Base + Market Features |
| **Core App** | Workspace Home | N/A | N/A | `GET /api/dashboard/stats` | New workspace home after auth |
| **Tools** | Document Creator | `/create-document` | `/document-creator-studio` | `GET /api/templates/{id}/placeholders` | v2 Studio + v1 Sign/Recipients |
| **Tools** | Gallery/Templates | `/templates` | `/template-gallery` | `GET /api/templates` | v1 Filtering + v2 Layout |
| **Tools** | Template Detail | N/A | `/template-detail-pages` | `GET /api/templates/{id}` | v2 logic + v1 features |
| **Tools** | Document Generation | `/generate` | N/A | `POST /api/documents/generate` | Full generation pipeline |
| **Tools** | Document Preview | N/A | N/A | `GET /api/documents/{id}/preview` | New preview page |
| **Tools** | Document Results | `/results` | N/A | `GET /api/documents/{id}` | Results page |
| **Tools** | Download Document | `/download/{id}/{format}` | N/A | `GET /api/documents/{id}/download` | Inline download |
| **Tools** | Batch Processing | `/batch` | Not implemented | `POST /api/documents/batch` | Batch workflow |
| **Tools** | Batch Results | `Not standalone` | N/A | `GET /api/documents/batch/{id}` | Batch results page |
| **Tools** | Batch Download | N/A | N/A | `GET /api/documents/batch/{id}/download` | Batch download UI |
| **Tools** | Drafts | N/A | N/A | `POST /drafts`, `PUT /drafts/{id}` | Auto-save indicator |
| **Tools** | Document History | N/A | N/A | `GET /api/documents/{id}/history` | Version timeline |
| **Tools** | Document Sharing | N/A | N/A | `POST /api/documents/{id}/share` | Share dialog |
| **Tools** | AutoSign | `/autosign` | Not implemented | `POST /api/signatures/canvas`, `/upload`, `/type` | Signature studio |
| **Tools** | AutoType | `/autotype` | Not implemented | `POST /api/documents/generate` (AI integration) | AI generation UI |
| **Tools** | Search | N/A | N/A | `GET /api/search?q=...` | Search overlay/results |
| **Pricing** | Pricing/Upgrade | `/pricing` | `/pricing-upgrade` | `GET /api/subscriptions/plans` | v2 UI + v1 localized logic |
| **Pricing** | Checkout | N/A | N/A | `POST /api/payments/initialize` | Checkout flow |
| **Billing** | Subscription Manage | N/A | N/A | `GET /api/subscriptions/current` | Billing dashboard |
| **Billing** | Invoices | N/A | N/A | `GET /api/invoices` | Invoice history |
| **Billing** | Payment Methods | N/A | N/A | `GET/POST /api/payments/methods` | Payment method management |
| **Wallet** | Wallet Dashboard | N/A | N/A | `GET /api/wallet` | Token/wallet overview |
| **Wallet** | Transactions | N/A | N/A | `GET /api/wallet/transactions` | Transaction history |
| **Wallet** | Token Purchase | N/A | N/A | `POST /api/tokens/purchase` | Token buy modal |
| **Wallet** | Token History | `/bonuses` | Not implemented | `GET /api/tokens/history` | Token earning history |
| **Signatures** | Signature Library | N/A | N/A | `GET /api/signatures` | Saved signatures |
| **Signatures** | Signature Create | N/A | N/A | `POST /api/signatures/canvas` | Draw signature |
| **Signatures** | Signature Upload | N/A | N/A | `POST /api/signatures/upload` | Upload signature image |
| **Signatures** | Signature Type | N/A | N/A | `POST /api/signatures/type` | Type signature |
| **Signatures** | Batch Signing | N/A | N/A | `POST /api/signatures/batch` | Batch signature request |
| **Content** | Blog | `/blog` | Not implemented | `GET /api/blog` | Blog listing |
| **Content** | Blog Post | `/blog/{id}` | Not implemented | `GET /api/blog/{slug}` | Blog article |
| **Content** | FAQ | `/faq` | Not implemented | `GET /api/faq` | FAQ categories |
| **Content** | Support Tickets | `/support` | Not implemented | `GET/POST /api/support/tickets` | Ticket list + create |
| **Content** | Ticket Detail | N/A | N/A | `GET /api/support/tickets/{id}` | Ticket conversation |
| **Content** | Contact | `/contact` | Not implemented | `POST /api/feedback` | Contact form |
| **Content** | About | `/about` | Not implemented | Static content | Redesign v1 copy |
| **Content** | How To Use | `/how-to-use` | Not implemented | Static content | Redesign v1 copy |
| **Content** | Become Partner | `/become-partner` | Not implemented | `GET/POST /api/partners` | Partner application |
| **Content** | Legals | `/legals` | Not implemented | Static content | Redesign v1 copy |
| **Info** | Settings | `/settings` | Not implemented | `GET/PUT /api/user/profile` | Settings workspace |
| **Info** | Profile | N/A | N/A | `GET/PUT /api/user/profile` | Profile settings tab |
| **Info** | Security Settings | N/A | N/A | `PUT /api/user/security` | Security settings tab |
| **Info** | API Keys | N/A | N/A | `GET /api/user/api-keys` | API key management |
| **Info** | Referrals | `/referrals` (v1 bonuses) | Not implemented | `GET /api/referrals` | Referral dashboard |
| **Info** | Campaigns | N/A | N/A | `GET /api/admin/campaigns` | Campaign dashboard (admin) |
| **Info** | Analytics | `/analytics` | Not implemented | `GET /api/analytics/overview` | Analytics dashboard |
| **Info** | Real-time Monitoring | N/A | N/A | `GET /api/analytics/realtime` | Live monitoring view |
| **Admin** | Admin Dashboard | `/admin` | Not implemented | `GET /api/admin/stats` | Admin home |
| **Admin** | Admin Users | `/admin/users` | Not implemented | `GET /api/admin/users` | User management |
| **Admin** | Admin Templates | `/admin/upload-template` | Not implemented | `GET /api/admin/templates` | Template management |
| **Admin** | Admin Template Upload | `/admin/upload` | Not implemented | `POST /api/admin/templates` | Upload template |
| **Admin** | Admin Template Edit | `/admin/template/{id}/edit` | Not implemented | `PUT /api/admin/templates/{id}` | Edit template + placeholders |
| **Admin** | Admin Health | `/admin/health` | Not implemented | `GET /api/admin/health` | System health dashboard |
| **Admin** | Admin Monitoring | N/A | N/A | `GET /api/admin/monitoring` | Performance monitoring |
| **Admin** | Admin Security | N/A | N/A | `GET /api/admin/security/incidents` | Security incidents |
| **Admin** | Admin Audit Log | N/A | N/A | `GET /api/admin/audit-log` | Audit trail viewer |
| **Admin** | Admin Blog | N/A | N/A | `GET/POST/PUT/DELETE /api/admin/blog/*` | Blog management |
| **Admin** | Admin FAQ | N/A | N/A | `GET/POST/PUT/DELETE /api/admin/faq/*` | FAQ editor |
| **Admin** | Admin Support | N/A | N/A | `GET/PUT /api/admin/support/tickets` | Support ticket management |
| **Admin** | Admin Campaigns | N/A | N/A | `GET/POST /api/admin/campaigns` | Campaign management |
| **Admin** | Admin Analytics | N/A | N/A | `GET /api/admin/analytics` | Full analytics suite |
| **Admin** | Admin Bonuses | `/admin/bonuses` | Not implemented | `GET/POST /api/admin/tokens/bonuses` | Bonus configuration |
| **Admin** | Admin Preview | `/admin/preview` | Not implemented | `GET /api/admin/templates/{id}/preview` | Template preview |
| **Admin** | Admin Backup | N/A | N/A | `POST /api/admin/database/backup` | Database backup UI |
| **Admin** | Admin Roles | N/A | N/A | `GET/POST/PUT /api/admin/roles` | Role & permission management |

---

## 2. Feature Gap Analysis

### v1 (The "Functional" Backbone) — What It Has
- Comprehensive route coverage (25+ routes)
- TypeScript safety
- Admin logic (users, health, bonuses, templates)
- E-Signature flow (AutoSign)
- Reward/bonus system
- Auth pages (login, signup, password reset)

### v2 (The "Visual" Shell) — What It Has  
- High-end aesthetic with Playfair typography
- Interactive Studio layout (split-pane)
- Sophisticated Pricing page
- Mobile preview toggle

### Backend (FastAPI) — What It Adds
- Full production auth (JWT, 2FA, sessions, email verification)
- Subscription plans with Flutterwave payments
- Token economy (generation costs, bonuses, referrals, campaigns)
- Wallet system (balance, transactions, transfers)
- Signature capture (canvas + upload + type)
- Document sharing with permission levels
- Draft system with 3-second auto-save
- Document editing history with per-change pricing
- TF-IDF powered search with personalization
- Real-time analytics and engagement tracking
- Email campaigns with token gifting
- Referral programs with fraud detection
- Full blog CMS with SEO
- FAQ management system
- Support ticket system with email notifications
- Partner application and tier system
- Advanced fraud detection (device fingerprinting)
- Security monitoring (SQLi/XSS detection, incident management)
- Production monitoring (CPU/memory/disk alerts)
- RBAC with resource-level permissions
- SEO automation (meta tags, sitemap, structured data, canonical URLs)
- Database optimization tools
- GDPR compliance tooling

---

## 3. Route Priority & Build Order

### Priority 1: Core Flow (Week 1-2)
1. `/` — Landing page (hero, features, CTA)
2. `/auth/login` — Login with email/password + Google OAuth placeholder
3. `/auth/signup` — Registration with guest session conversion
4. `/studio` — Document Creator Studio (split-pane: template browser → placeholder form → preview)

### Priority 2: Document Operations (Week 3-4)
5. `/dashboard` — Recent activity, stats, quick actions
6. `/templates` — Template gallery with search/filter
7. `/templates/:id` — Template detail with usage stats
8. `/documents/:id` — Document view with download + share
9. `/batch` — Batch processing workflow

### Priority 3: User & Account (Week 5-6)
10. `/auth/password-reset` — Forgot/reset password flow
11. `/auth/2fa` — Two-factor setup and recovery
12. `/settings/profile` — Profile editing
13. `/settings/security` — Password change, sessions, 2FA
14. `/settings/api-keys` — API key management
15. `/billing` — Subscription, payment method, invoices
16. `/wallet` — Token balance, transaction history, purchase

### Priority 4: Signatures & Sharing (Week 7)
17. `/signatures` — Signature library
18. `/signatures/create` — Draw/upload/type signature
19. `/sharing` — Documents shared with me
20. `/documents/:id/share` — Share document dialog

### Priority 5: Content & Marketing (Week 8)
21. `/blog` — Blog listing with categories
22. `/blog/:slug` — Blog article
23. `/faq` — FAQ categories with search
24. `/support` — Support ticket list + create
25. `/support/:id` — Ticket conversation
26. `/partners` — Partner program info + application
27. `/about`, `/contact`, `/how-to-use`, `/legal` — Static content pages

### Priority 6: Admin Suite (Week 9-10)
28. `/admin` — Dashboard stats
29. `/admin/users` — User management
30. `/admin/templates` — Template management + upload + edit
31. `/admin/health` — System health monitoring
32. `/admin/security` — Security incidents
33. `/admin/audit` — Audit log viewer
34. `/admin/blog` — Blog editor
35. `/admin/faq` — FAQ editor
36. `/admin/support` — Ticket management
37. `/admin/campaigns` — Campaign management
38. `/admin/analytics` — Full analytics
39. `/admin/roles` — Role & permission editor

### Priority 7: Analytics & Referrals (Week 11)
40. `/analytics` — User-facing analytics dashboard
41. `/analytics/realtime` — Live monitoring view
42. `/referrals` — Referral dashboard with link generation

---

## 4. Navigation Architecture

### Authenticated Navigation (Sidebar)
```
Templates        [icon]  — Template gallery + search
Studio           [icon]  — Document creator (main workspace)
Dashboard        [icon]  — Overview stats + recent activity
Batch            [icon]  — Batch processing workflow
Signatures       [icon]  — Signature library
Billing          [icon]  — Subscription + wallet
Activity         [icon]  — Document history + analytics
Settings         [icon]  — Profile, security, API keys
───
Admin            [icon]  — (visible only to admin/moderator roles)
```

### Public Navigation (Header)
```
Home | Templates | Pricing | Blog | FAQ | Support | Login | Sign Up
```

---

## 5. Route Behavior Patterns

### Workspace Continuity
- The app shell (sidebar + command bar) persists across authenticated routes
- Route changes animate as spatial shifts (Framer Motion, 200ms)
- Scroll position and panel state preserved per route

### Auth-Protected Routes
- All routes except Landing, Blog, FAQ, Pricing, and Auth redirect to `/auth/login`
- Guest users get 3 free document previews on `/studio` before signup prompt

### Admin Routes
- Nested under `/admin/*` with role-based access
- Admin sidebar has additional nav items (Users, Security, Audit, etc.)
- Moderator role has read-only access to most admin routes

---

*This specification must be updated as new backend routes are added or frontend pages evolve.*
