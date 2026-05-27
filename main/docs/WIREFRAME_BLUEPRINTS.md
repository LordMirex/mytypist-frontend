# MyTypist — Wireframe Blueprints

> Low-fidelity layout structures for every major screen in the Document Operating System.
> These are structural blueprints — interaction and styling details are in PRODUCT_UI_SYSTEM.md (grounded in `references/` observation files) and COMPONENT_SPECIFICATIONS.md.
> 
> **Design basis:** See `references/README.md` — 10 observation files across 6 products inform all layout decisions.

---

## 1. Dashboard

### Purpose
Home screen showing recent activity, quick stats, and entry points to major workflows.

### Layout
```
┌──────────────────────────────────────────────────────┐
│  [Cmd+K] Search templates, actions...                │
├────────┬─────────────────────────────────────────────┤
│        │  Dashboard                                   │
│  🗂️    │  ┌───┐ ┌───┐ ┌───┐ ┌───┐                  │
│  Temp‑  │  │ 4 │ │ 23│ │ 0 │ │ 12│                  │
│  lates  │  │Tmp│ │Doc│ │Err│ │Bat│                  │
│        │  └───┘ └───┘ └───┘ └───┘                  │
│  ⚡    │                                              │
│  Work‑  │  Recent Activity                            │
│  flows  │  📄 Generated · Acceptance Letter · 2h ago  │
│        │  📄 Generated · Affidavit · 3h ago          │
│  📊    │  📝 Edited · ID Request · Yesterday         │
│  Activ‑│  📤 Exported · 15 docs · Yesterday          │
│  ity   │                                              │
│        │  Quick Actions                               │
│  💳    │  [+ New Document] [Batch Process]            │
│  Billing│ [Upload Template]                            │
│        │                                              │
│  ⚙️    │                                              │
│  Set‑  │                                              │
│  tings │                                              │
└────────┴──────────────────────────────────────────────┘
```

### Sections
1. **Stats bar** — 4 metric cards: Templates, Documents Generated, Errors, Batches
2. **Recent Activity** — Chronological list of last 10 actions
3. **Quick Actions** — 3 primary action buttons
4. **Sidebar** — Persistent navigation (256px)

---

## 2. Template Editor

### Purpose
Create and edit document templates. The core workspace for template management.

### Layout
```
┌──────────────────────────────────────────────────────┐
│  [Cmd+K]  Templates > Edit "Acceptance Letter"    💾  │
├────────┬──────────────────────────────┬───────────────┤
│        │                              │               │
│  Temp‑  │  DOCUMENT PREVIEW           │  INSPECTOR    │
│  lates  │                              │               │
│        │  ┌────────────────────┐      │  Placeholder  │
│  📄    │  │                    │      │  Name: [___]  │
│  Ac‑    │  │  [Student Name]   │      │  Type: [Text] │
│  cept   │  │  [Department]     │      │  Font: [Inte] │
│        │  │  [Date]           │      │  Size: [12]   │
│  📄    │  │                    │      │  B I U        │
│  Affi‑  │  │                    │      │               │
│  davit  │  └────────────────────┘      │  Validation   │
│        │                              │  Pattern:[___] │
│  📄    │  Toolbar: 🔍 100% ◀ ▶ 📄 PDF│               │
│  ID Req│                              │  Required [✓]  │
│        │                              │               │
└────────┴──────────────────────────────┴───────────────┘
```

### Panels
1. **Left** — Template list with search (256px)
2. **Center** — Document preview with editing toolbar (1fr)
3. **Right** — Placeholder inspector (320px)
4. **Top bar** — Breadcrumb + Save button

### Actions
- Upload new template (drag/drop)
- Edit template metadata (name, type, description)
- Edit placeholder properties (name, type, formatting, validation)
- Test with sample data
- Save / Save as new version
- Preview DOCX and PDF output

---

## 3. Document Generation Workflow

### Purpose
End-to-end document generation: select template, fill data, preview, export.

### Layout
```
┌──────────────────────────────────────────────────────┐
│  [Cmd+K]  Generate Document                      ○ ○ │
├────────┬──────────────────────────────┬───────────────┤
│        │                              │               │
│  Steps │  Generation Pipeline         │  Context      │
│        │                              │               │
│  1 ✓   │  ●──●──○──○──○              │  Template:    │
│  Select│  ✓Upld ✓Det ▪Val ▪Pro ▪Exp  │  Acceptance   │
│        │                              │  Letter       │
│  2 ●   │  ─────────────────────       │               │
│  Fill  │  Placeholder Values          │  Student:     │
│        │                              │  John Smith   │
│  3 ○   │  Full Name                   │               │
│  Preview│ ┌────────────────────┐      │  Format:      │
│        │  │ John Smith         │      │  DOCX + PDF   │
│  4 ○   │  └────────────────────┘      │               │
│  Export│                              │               │
│        │  Department                  │               │
│        │  ┌────────────────────┐      │               │
│        │  │ Computer Eng.      │      │               │
│        │  └────────────────────┘      │               │
│        │                              │               │
│        │  [Generate Document]         │               │
└────────┴──────────────────────────────┴───────────────┘
```

### Steps (top section)
1. **Select Template** — Choose from template browser
2. **Fill Data** — Form with all detected placeholders
3. **Preview** — Live document preview with applied values
4. **Export** — Format selection and download

### Behavior
- Steps are tracked in the vertical stepper on the left
- Current step is highlighted
- Completed steps show checkmark
- Can jump back to previous steps
- Pipeline at top shows overall progress

---

## 4. Batch Processing

### Purpose
Generate multiple documents from multiple templates with one set of inputs.

### Layout
```
┌──────────────────────────────────────────────────────┐
│  [Cmd+K]  Batch Processing                       ⚡  │
├────────┬─────────────────────────────────────────────┤
│        │  Batch Configuration                        │
│  Step 1│                                             │
│  Upload│  ┌─────────────────────────────────────┐    │
│  Data  │  │ Drop CSV/Excel here                  │    │
│        │  │ or click to browse                  │    │
│  Step 2│  └─────────────────────────────────────┘    │
│  Select│                                             │
│  Temp‑ │  Selected Templates (3)                      │
│  lates │  ☑ Acceptance Letter                        │
│        │  ☑ Affidavit of Loss                        │
│  Step 3│  ☐ Transcript Request                       │
│  Review│                                             │
│        │  Preview: 23 students × 2 templates = 46 docs│
│  Step 4│                                             │
│  Run   │  [Start Batch Generation]                    │
│        │                                             │
│        │  Results (last batch)                        │
│        │  ● Batch #124 · 46/46 generated · 2m ago    │
│        │  ● Batch #123 · 44/46 · 5m ago · 2 errors   │
└────────┴──────────────────────────────────────────────┘
```

### Steps
1. **Upload Data** — CSV or Excel with student/recipient data
2. **Select Templates** — Choose which templates to apply
3. **Review** — Preview total document count, mapping
4. **Run** — Start generation, show real-time progress

### Batch Form (prototype-derived)
```
┌──────────────────────────────────────────────────────┐
│  Batch Document Generation                       ⚡  │
├──────────────────────────────────────────────────────┤
│  Student Name: [________________________]            │
│  Student Email: [________________________]            │
│                                                      │
│  Select Templates:                                   │
│  ☑ Acceptance Letter  (6 placeholders)               │
│  ☑ Affidavit of Loss  (4 placeholders)               │
│  ☐ Transcript Request (8 placeholders)               │
│  ☐ ID Card Request    (5 placeholders)               │
│                                                      │
│  ┌────────────────────────────────────────────┐      │
│  │ [Generate 2 Documents]                     │      │
│  └────────────────────────────────────────────┘      │
│                                                      │
│  ─── Previous Batches ───                            │
│  ✅ Batch #124 · 46 docs · 2 templates · 5m ago      │
│  ⚠️ Batch #123 · 44/46 docs · 1h ago · 2 errors     │
│  ✅ Batch #122 · 12 docs · 1 template · 2d ago      │
└──────────────────────────────────────────────────────┘
```

### Batch Results (from prototype)
```
┌──────────────────────────────────────────────────────┐
│  Batch Complete - 46 documents generated         ✅  │
├──────────────────────────────────────────────────────┤
│                                                      │
│  Batch ID: b7e3f1a2-9c8d-4e2f-a1b3-5c6d7e8f9a0b    │
│  Created: 27 May 2026, 14:30 WAT                     │
│  Templates: Acceptance Letter, Affidavit of Loss      │
│                                                      │
│  ─── Generated Documents ───                         │
│  📄 acceptance_letter_john_smith.docx    1.2 MB      │
│  📄 affidavit_of_loss_john_smith.docx   980 KB       │
│  ... (46 documents total)                            │
│                                                      │
│  [Download All as DOCX] [Download All as PDF]        │
│  [Download as ZIP (both formats)]                    │
│                                                      │
│  A few conversions failed:                           │
│  ⚠️ 2 PDF conversions failed - DOCX available        │
└──────────────────────────────────────────────────────┘
```

### Results
- Batch history shows previous runs
- Each batch shows success/error counts
- Download as ZIP (DOCX, PDF, or both)

---

## 5. Billing & Plans

### Purpose
View current plan, usage, upgrade options, and payment history.

### Layout
```
┌──────────────────────────────────────────────────────┐
│  [Cmd+K]  Billing                                💳  │
├────────┬─────────────────────────────────────────────┤
│        │  Current Plan                                │
│  Temp‑  │  ┌─────────────────────────────────────┐   │
│  lates  │  │  Pro Plan                   [Manage] │   │
│        │  │  847 / 1000 documents used this month│   │
│  Work‑  │  │  ████████████░░░░ 85%               │   │
│  flows  │  └─────────────────────────────────────┘   │
│        │                                              │
│  Activ‑│  Available Plans                             │
│  ity   │  ┌──────┐ ┌──────┐ ┌──────────┐            │
│        │  │ Free │ │ Pro  │ │ Enterprise│            │
│  💳    │  │ $0   │ │$29/m │ │ Custom   │            │
│  Billing│  │ 5 doc│ │1000  │ │ Unlimited│            │
│        │  └──────┘ └──────┘ └──────────┘            │
│  ⚙️    │                                              │
│        │  Payment Method                              │
│  Set‑  │  💳 Visa ending in 4242 · Exp 12/26         │
│  tings │  [Change]                                    │
│        │                                              │
│        │  Invoice History                             │
│        │  May 2026 · $29.00 · Paid ✓                 │
│        │  Apr 2026 · $29.00 · Paid ✓                 │
└────────┴──────────────────────────────────────────────┘
```

---

## 6. Settings

### Purpose
Account, workspace, security, and integration configuration.

### Layout
```
┌──────────────────────────────────────────────────────┐
│  [Cmd+K]  Settings                               ⚙️  │
├────────┬─────────────────────────────────────────────┤
│        │                                             │
│  👤    │  Profile                                    │
│  Profile│  ┌─────────────────────────────────┐       │
│        │  │  Name: [John Smith            ] │       │
│  🔒    │  │  Email: [john@example.com      ] │       │
│  Security│ │  Avatar: [Choose Image]        │       │
│        │  └─────────────────────────────────┘       │
│  💳    │                                             │
│  Billing│  Security                                  │
│        │  ┌─────────────────────────────────┐       │
│  🔌    │  │  Password: [Change]             │       │
│  Integ‑ │  │  2FA: [Enable]                  │       │
│  rations│  │  Sessions: 2 active devices    │       │
│        │  └─────────────────────────────────┘       │
│  📋    │                                             │
│  Team  │  API Keys                                   │
│        │  ┌─────────────────────────────────┐       │
│        │  │  sk_live_xxxxxxxxxxxx    [Copy] │       │
│        │  │  sk_test_xxxxxxxxxxxx    [Copy] │       │
│        │  │  [Generate New Key]            │       │
│        │  └─────────────────────────────────┘       │
└────────┴─────────────────────────────────────────────┘
```

### Navigation
- Left sidebar with section list
- Active section highlighted with accent indicator
- Sections slide transition (200ms)

---

## 7. Activity & Monitoring

### Purpose
Full activity log with filtering, search, and analytics.

### Layout
```
┌──────────────────────────────────────────────────────┐
│  [Cmd+K]  Activity                               📊  │
├────────┬─────────────────────────────────────────────┤
│        │  Activity Log                               │
│        │                                             │
│  Temp‑  │  🔍 Search activity...    [Filter ▾]       │
│  lates  │                                             │
│        │  ─── Today ───                              │
│  Work‑  │  📄 Generated · Acceptance Letter          │
│  flows  │  Student: John Smith · 2 hours ago     👁️  │
│        │  📄 Batch completed · 46 documents          │
│  Activ‑│  3 templates · 1 hour ago               📦  │
│  ity   │  📝 Template updated · ID Request           │
│        │  30 minutes ago                         ✏️  │
│  💳    │                                             │
│  Billing│  ─── Yesterday ───                         │
│        │  📤 Exported · 15 documents as PDF          │
│  ⚙️    │  💳 Subscription renewed · Pro Plan         │
│  Set‑  │                                             │
│  tings │  Load more...                               │
│        │                                             │
│        │  📈 Analytics (Last 7 days)                  │
│        │  ┌─────────────────────────┐               │
│        │  │  ██▇▆▇█▅▆             │ 127 docs       │
│        │  │  █▃▅▇▄▅▃              │ 14 templates    │
│        │  └─────────────────────────┘               │
└────────┴──────────────────────────────────────────────┘
```

---

## 8. Onboarding Flow

### Purpose
First-run experience for new users.

### Steps
1. **Welcome** — Product intro, value proposition, 2-second auto-progress
2. **Upload your first template** — Drag/drop or choose sample
3. **Edit placeholders** — Quick tour of inspector panel
4. **Generate first document** — Guided generation
5. **Export** — Download first document
6. **Done** — Dashboard appears with success state

### Layout (each step)
```
┌──────────────────────────────────────────────┐
│                                              │
│  ┌──────────────────────────────────────┐    │
│  │                                      │    │
│  │           Illustration               │    │
│  │                                      │    │
│  ├──────────────────────────────────────┤    │
│  │  Step 2 of 6: Upload a template      │    │
│  │                                      │    │
│  │  Drag your DOCX template here or     │    │
│  │  use one of our sample templates.    │    │
│  │                                      │    │
│  │  📄  ┌──────────────────────────┐    │    │
│  │      │ [Use Sample Template]    │    │    │
│  │      └──────────────────────────┘    │    │
│  │                                      │    │
│  │         [Skip]       [Continue →]    │    │
│  └──────────────────────────────────────┘    │
│                                              │
└──────────────────────────────────────────────┘
```

### Progress
- Dots at bottom showing steps
- Current step filled
- Can skip any step
- Cannot go back (clean break from workflow)

---

## 9. Mobile Adaptation

### Dashboard (Mobile < 640px)
```
┌──────────────────┐
│ ☰  MyTypist   🔍 │
├──────────────────┤
│ 📊 Today          │
│                   │
│ 4 Templates      │
│ 23 Documents     │
│ 0 Errors         │
│ 12 Batches       │
│                   │
│ Recent Activity   │
│ 📄 Acceptance     │
│    Letter · 2h    │
│ 📄 Affidavit      │
│    · 3h           │
│                   │
│ [+ New Document]  │
│ [Batch Process]   │
└──────────────────┘
```

### Template Editor (Mobile)
```
┌──────────────────┐
│ ← Templates   💾 │
├──────────────────┤
│ Preview [Full] ▾ │
│                   │
│ ┌──────────────┐ │
│ │              │ │
│ │ [Name]       │ │
│ │              │ │
│ └──────────────┘ │
│                   │
│ Inspector [Show] ▾│
│ ┌──────────────┐ │
│ │ Name: [__]   │ │
│ │ Type: [Text] │ │
│ └──────────────┘ │
└──────────────────┘
```

### Behavior
- Sidebar becomes drawer (hamburger menu)
- Inspector becomes bottom sheet
- Document preview scrolls as single column
- Toolbar collapses into "more" menu
- Touch targets minimum 44px

---

## 10. Auth Screens

### Login
```
┌──────────────────────────────────────┐
│                                      │
│           MyTypist Logo              │
│                                      │
│       Welcome back                   │
│       Sign in to your account        │
│                                      │
│       Email                          │
│       ┌────────────────────────┐     │
│       │                        │     │
│       └────────────────────────┘     │
│                                      │
│       Password                       │
│       ┌────────────────────────┐     │
│       │                    👁️   │     │
│       └────────────────────────┘     │
│                                      │
│       ┌────────────────────────┐     │
│       │      Sign In           │     │
│       └────────────────────────┘     │
│                                      │
│       ─── OR ───                    │
│       [Continue with Google]         │
│                                      │
│       Forgot password?               │
│       Don't have an account? Sign up │
└──────────────────────────────────────┘
```

### Signup
```
┌──────────────────────────────────────┐
│                                      │
│           MyTypist Logo              │
│                                      │
│       Create your account            │
│                                      │
│       Full Name                      │
│       ┌────────────────────────┐     │
│       │                        │     │
│       └────────────────────────┘     │
│                                      │
│       Email                          │
│       ┌────────────────────────┐     │
│       │                        │     │
│       └────────────────────────┘     │
│                                      │
│       Password                       │
│       ┌────────────────────────┐     │
│       │                    👁️   │     │
│       └────────────────────────┘     │
│       ████████░░ 80% Strong          │
│                                      │
│       [ ] I agree to Terms of Service│
│                                      │
│       ┌────────────────────────┐     │
│       │    Create Account      │     │
│       └────────────────────────┘     │
│                                      │
│       Already have an account? Login │
│       Continue as guest (3 free docs)│
└──────────────────────────────────────┘
```

### Password Reset
```
┌──────────────────────────────────────┐
│                                      │
│       Reset Password                 │
│                                      │
│       Enter your email and we'll     │
│       send you a reset link.         │
│                                      │
│       Email                          │
│       ┌────────────────────────┐     │
│       │                        │     │
│       └────────────────────────┘     │
│                                      │
│       ┌────────────────────────┐     │
│       │    Send Reset Link     │     │
│       └────────────────────────┘     │
│                                      │
│       Back to Sign In                │
└──────────────────────────────────────┘
```

---

## 11. Wallet & Token Dashboard

```
┌─────────────────────────────────────────────────────┐
│  [Cmd+K]  Wallet                                💰  │
├────────┬────────────────────────────────────────────┤
│        │  Token Balance                              │
│  Temp‑  │  ┌─────────────────────────────────────┐  │
│  lates  │  │  ┌─────┐    Current Balance         │  │
│        │  │  │ 847 │    847 tokens remaining     │  │
│  Work‑  │  │  └─────┘    1 token per generation   │  │
│  flows  │  │                                      │  │
│        │  │  [Buy Tokens] [Transaction History]   │  │
│  Activ‑│  └─────────────────────────────────────┘  │
│  ity   │                                           │
│        │  ─── Purchase Tokens ───                  │
│  💳    │  ┌──────┐ ┌──────┐ ┌──────┐              │
│  Billing│  │ 100  │ │ 500  │ │ 2000 │              │
│        │  │ ₦500 │ │₦2,000│ │₦7,000│              │
│  Wallet│  │₦5/tok│ │₦4/tok│ │₦3.50 │              │
│        │  └──────┘ └──────┘ └──────┘              │
│  ⚙️    │                                           │
│  Set‑  │  ─── Usage This Month ───                 │
│  tings │  Generated: 153 documents                 │
│        │  Tokens spent: 153                        │
│        │  Tokens earned: 200 (referrals + bonus)   │
│        │                                           │
│        │  ─── Recent Transactions ───              │
│        │  -1  Generated document         Just now  │
│        │  -1  Batch: 3 documents        2h ago     │
│        │  +500 Token purchase           1d ago     │
│        │  +50  Referral bonus           3d ago     │
│        │  +100 Welcome bonus            7d ago     │
└────────┴────────────────────────────────────────────┘
```

---

## 12. Admin Dashboard

```
┌─────────────────────────────────────────────────────┐
│  [Cmd+K]  Admin                                 🔧  │
├────────┬────────────────────────────────────────────┤
│        │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────────┐  │
│  Dash‑  │  │ 1,247│ │  23  │ │ 5,247│ │ ₦847,000 │  │
│  board  │  │ Users│ │ Tem‑ │ │ Docs  │ │ Revenue   │  │
│        │  │      │ │ plates│ │      │ │           │  │
│  Users  │  └──────┘ └──────┘ └──────┘ └──────────┘  │
│        │                                             │
│  Temp‑  │  ┌─────────────────────────────────────┐   │
│  lates  │  │  Recent Activity                     │   │
│        │  │  📦 Batch #128 · 46 docs · 5m ago    │   │
│  Blog  │  │  👤 User registered · 10m ago        │   │
│        │  │  ⚠️ Slow query alert · 15m ago       │   │
│  FAQ   │  │  💳 Payment received · ₦7,500 · 1h   │   │
│        │  └─────────────────────────────────────┘   │
│  Supp‑ │                                             │
│  ort   │  ┌─────────────────────────────────────┐   │
│        │  │  Revenue (Last 30 Days)              │   │
│  Secu‑ │  │  ██▇▆▇█▅▆▇▆█▅▃▄▅▇▆█▄▃▂▃▅▆▇  ₦847K  │   │
│  rity  │  └─────────────────────────────────────┘   │
│        │                                             │
│  Audit │  ─── Quick Actions ───                      │
│        │  [Run Backup] [Optimize DB] [Clear Cache]   │
│  Roles │                                             │
└────────┴─────────────────────────────────────────────┘
```

---

## 13. Signature Library

```
┌─────────────────────────────────────────────────────┐
│  [Cmd+K]  Signatures                            ✍️  │
├────────┬────────────────────────────────────────────┤
│        │  ┌────────────────────────────────────┐     │
│  Temp‑  │  │  [+ Create New Signature]         │     │
│  lates  │  └────────────────────────────────────┘     │
│        │                                             │
│  Work‑  │  ┌──────┐ ┌──────┐ ┌──────┐              │
│  flows  │  │ John │ │ J.S. │ │ J.   │              │
│        │  │ Smith│ │      │ │      │              │
│  Activ‑│  │ ✍️   │ │ ✍️   │ │ ✍️   │              │
│  ity   │  ├──────┤ ├──────┤ ├──────┤              │
│        │  │ Used │ │ Used │ │ Never│              │
│  💳    │  │ 12x  │ │ 3x   │ │ used │              │
│  Billing│ └──────┘ └──────┘ └──────┘              │
│        │                                             │
│  ✍️    │  ─── Pending Signature Requests ───        │
│  Sig‑  │  📄 NDA Agreement · 2 pending      [Sign]  │
│  natures│ 📄 Contract #123 · Awaiting your sign [View]│
│        │                                             │
│  ⚙️    │  ─── Recently Signed ───                   │
│  Set‑  │  ✅ Offer Letter · 2d ago                   │
│  tings │  ✅ Renewal · 5d ago                        │
└────────┴─────────────────────────────────────────────┘
```

---

## 14. Blog & Content Pages

### Blog Listing
```
┌─────────────────────────────────────────────────────┐
│  Blog                                           📝  │
├─────────────────────────────────────────────────────┤
│  🔍 Search articles...    [Categories ▾]             │
│                                                      │
│  ┌─────────────────────────────────────────────────┐ │
│  │ 📰 How to Create an Acceptance Letter in 3 Min  │ │
│  │    May 25, 2026 · 5 min read · #tutorial        │ │
│  │    Step-by-step guide to generating professional │ │
│  │    acceptance letters with MyTypist.             │ │
│  └─────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────┐ │
│  │ 📰 Nigerian Document Formatting Standards        │ │
│  │    May 20, 2026 · 8 min read · #formats         │ │
│  │    Understanding the conventions of Nigerian     │ │
│  │    academic and legal document formatting.       │ │
│  └─────────────────────────────────────────────────┘ │
│  ┌─────────────────────────────────────────────────┐ │
│  │ 📰 Batch Processing: Generate 100+ Docs in 5min │ │
│  │    May 15, 2026 · 6 min read · #batch           │ │
│  │    Save hours by generating documents in bulk.  │ │
│  └─────────────────────────────────────────────────┘ │
│                                                      │
│  Page 1 of 3  [← Older Posts]                        │
└──────────────────────────────────────────────────────┘
```

### Support Tickets
```
┌─────────────────────────────────────────────────────┐
│  Support                                        🎫  │
├─────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────┐    │
│  │ [+ New Ticket]                               │    │
│  └─────────────────────────────────────────────┘    │
│                                                      │
│  ─── My Tickets ───                                  │
│  ● Can't upload template                   #10423   │
│    Open · 2h ago · Priority: Normal                  │
│    I'm trying to upload a .docx file but it keeps... │
│                                                      │
│  ● Billing question                        #10419   │
│    Waiting on you · 1d ago · Priority: Low          │
│    I was charged twice for my subscription...        │
│                                                      │
│  ● Feature request: more export formats    #10412   │
│    Closed · 3d ago                                  │
│    It would be great if you supported .odt...       │
└──────────────────────────────────────────────────────┘
```
