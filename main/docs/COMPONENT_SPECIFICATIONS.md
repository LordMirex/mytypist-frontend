# MyTypist — Component Specifications

> Defines every core component, its states, behaviors, interactions, and layout logic.
> All components must comply with PRODUCT_UI_SYSTEM.md (which is grounded in `references/`, where 10 observation files across 6 products provide the evidence for every design rule).
> 
> **Reference hierarchy:** Linear (shell) → Notion (documents) → Acrobat (operations) → Figma (panels) → Trigger.dev (workflows) → Dub (admin). See `references/README.md`.

---

## 1. Command Palette

### Purpose
Global search and action system. The fastest way to navigate and perform actions.

### States
| State | Behavior |
|---|---|
| **Closed** | Hidden, triggered by `Cmd+K` / `Ctrl+K` |
| **Opening** | Overlay fades in (100ms), palette slides down (200ms) |
| **Open** | Input is focused, results populate as user types |
| **Empty** | "No results found" with suggestion to modify query |
| **Loading** | Skeleton indicators for async results |
| **Selected** | Active item highlighted with accent background |
| **Executing** | Brief loading state on action execution, then closes |

### Behavior
- Fuzzy search across: templates, documents, settings pages, actions
- Keyboard navigation: `↑` `↓` to move, `Enter` to select, `Esc` to close
- Categories with headers (e.g., "Templates", "Actions", "Settings")
- Recent actions shown by default when palette opens
- Results grouped by category with divider

### Layout
```
┌──────────────────────────────────────┐
│  🔍 Search templates, actions...    │
├──────────────────────────────────────┤
│  Recent                              │
│  ├── Create new template         →  │
│  └── Edit acceptance letter      →  │
│                                      │
│  Templates                           │
│  ├── Acceptance Letter           📄 │
│  ├── Affidavit of Loss           📄 │
│  └── Student ID Request          📄 │
│                                      │
│  Actions                             │
│  ├── Generate Document           ⚡ │
│  ├── Batch Process               ⚡ │
│  └── Export All                   ⚡ │
└──────────────────────────────────────┘
```

### Width: 560px
### Max results: 8 (before scroll)

---

## 2. Document Preview Engine

### Purpose
The signature component. Live, accurate rendering of documents with applied placeholder values.

### States
| State | Behavior |
|---|---|
| **Empty** | "Select a template to preview" centered message |
| **Loading** | Page skeleton with shimmer |
| **Rendering** | Progress indicator for real-time re-render |
| **Populated** | Full document preview with applied content |
| **Error** | "Preview unavailable" with error details and retry |
| **Zoomed** | Zoom controls (fit, 100%, 150%, 200%) |
| **Page-focused** | Single page selected for detailed inspection |

### Behavior
- Renders document page-accurately (margins, spacing, fonts)
- Live updates as placeholders are edited in inspector
- Paginated view with page controls
- Zoom: Fit width / 100% / 150% / 200%
- Click to select placeholder → opens in inspector
- Hover over placeholder shows highlight and tooltip with field name

### Layout
```
┌──────────────────────────────────────┐
│  🔍  100%  ◀ 1 / 3 ▶  📄 📥 🖨️     │
├──────────────────────────────────────┤
│                                      │
│    ┌────────────────────────┐        │
│    │                        │        │
│    │    DOCUMENT PREVIEW    │        │
│    │    Page-accurate       │        │
│    │    rendering           │        │
│    │                        │        │
│    │    [Student Name]      │        │
│    │    [Department]        │        │
│    │    [Date]              │        │
│    │                        │        │
│    └────────────────────────┘        │
│                                      │
└──────────────────────────────────────┘
```

---

## 3. Placeholder Inspector Panel

### Purpose
Property-panel style editor for document placeholders. Shows all detected variables with formatting controls.

### States
| State | Behavior |
|---|---|
| **Empty** | "No placeholders detected" when viewing non-template documents |
| **Populated** | List of all placeholders grouped by category |
| **Selected** | One placeholder expanded with editing controls |
| **Editing** | Inline text input or type-specific control |
| **Validating** | Validation indicator (green check / red error) |
| **Modified** | Visual indicator that placeholder differs from template default |

### Behavior
- Sits in Right Inspector panel (320px)
- Groups placeholders by section (e.g., "Student Info", "Academic Details")
- Each placeholder shows: display name, current value, formatting badges
- Click to expand: shows value input, formatting controls, validation
- Formatting controls: Bold, Italic, Underline, Font, Size, Alignment
- Validation feedback: inline error/success messages
- "Reset to default" button per field

### Layout
```
┌───────────────────────────────┐
│ Placeholder Inspector    ⚙️   │
├───────────────────────────────┤
│                               │
│ Student Info                  │
│                               │
│ Full Name                     │
│ ┌─────────────────────────┐   │
│ │ John Smith              │   │
│ └─────────────────────────┘   │
│ ✓ Valid                      │
│                               │
│ Department                    │
│ ┌─────────────────────────┐   │
│ │ Computer Engineering    │   │
│ └─────────────────────────┘   │
│                               │
│ Matric Number                 │
│ ┌─────────────────────────┐   │
│ │ ENG2204223              │   │
│ └─────────────────────────┘   │
│ ENG20220001 format            │
│                               │
│ ─── Formatting ───            │
│ B  I  U  Font  Size  Align   │
│                               │
└───────────────────────────────┘
```

---

## 4. Generation Workflow Pipeline

### Purpose
Visual progression through the document generation process. Makes the complex feel controlled and transparent.

### States
| State | Behavior |
|---|---|
| **Idle** | Pipeline shows all stages, none active |
| **Uploading** | First stage active with progress bar |
| **Detecting** | Scanning template for placeholders with animation |
| **Validating** | Checking inputs — errors shown inline |
| **Processing** | Generating document — indeterminate progress |
| **Exporting** | Converting to PDF/downloading |
| **Complete** | All stages green with success animation |
| **Error** | Failed stage highlighted in red with detail |

### Stages
1. **Upload** — File selection and upload progress
2. **Detect** — Placeholder scanning and type detection
3. **Validate** — Input validation and error resolution
4. **Process** — Document generation
5. **Export** — Format selection and download

### Layout
```
┌──────────────────────────────────────────────┐
│  Generation Pipeline                         │
│                                              │
│  ●───○───○───○───○                          │
│  │   │   │   │   │                          │
│  Upload Detect Validate Process Export       │
│                                              │
│  Current: Uploading template.docx            │
│  ████████████░░░░░░░░ 65%                   │
│                                              │
│  Details: Scanning for embedded variables... │
└──────────────────────────────────────────────┘
```

### Completed State
```
┌──────────────────────────────────────────────┐
│  Generation Complete ✓                       │
│                                              │
│  ●───●───●───●───●                          │
│  ✓ Upload → Detect → Validate → Process →   │
│    Export                                    │
│                                              │
│  📄 acceptance_letter_john_smith.docx        │
│  📄 acceptance_letter_john_smith.pdf         │
│                                              │
│  [Download All] [Share] [Generate Another]   │
└──────────────────────────────────────────────┘
```

---

## 5. Template Browser

### Purpose
Browse, search, and select document templates.

### States
| State | Behavior |
|---|---|
| **Loading** | Grid of skeleton cards |
| **Populated** | Grid of template cards with names, types, preview |
| **Empty** | "No templates yet" with "Create your first template" CTA |
| **Searching** | Filtered results with active search query |
| **Selected** | Template is highlighted/focused |
| **Filtered** | Category/type filter pills active |

### Layout
```
┌──────────────────────────────────────────────┐
│  Templates                              + New │
│                                              │
│  🔍 Search templates...                      │
│                                              │
│  [All] [Letters] [Affidavits] [Academic]     │
│                                              │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐       │
│  │      │ │      │ │      │ │      │       │
│  │Accept│ │Affid │ │ID    │ │Trans │       │
│  │Letter│ │avit  │ │Request│ │cript │       │
│  │      │ │      │ │      │ │      │       │
│  │📄    │ │📄    │ │📄    │ │📄    │       │
│  └──────┘ └──────┘ └──────┘ └──────┘       │
│                                              │
│  Showing 4 of 4 templates                    │
└──────────────────────────────────────────────┘
```

### Card Details
- Preview thumbnail (generated from template)
- Template name
- Type badge (Letter, Affidavit, etc.)
- Last used date
- Placeholder count

---

## 6. Document Upload Area

### Purpose
Drag-and-drop zone for uploading DOCX templates or input data.

### States
| State | Behavior |
|---|---|
| **Default** | Dashed border zone with upload icon and text |
| **Dragging** | Border turns accent color, background fills, "Drop to upload" label |
| **Uploading** | Progress bar within the zone |
| **Success** | Green border, filename shown, "Upload complete" |
| **Error** | Red border, error message, retry button |
| **Invalid file** | "Unsupported format" message with allowed types list |

### Layout
```
┌──────────────────────────────────────┐
│  📄                                  │
│  Drop your template here             │
│  or click to browse                  │
│                                      │
│  Supports: .docx, .doc, .pdf         │
│  Max size: 100MB                     │
└──────────────────────────────────────┘
```

---

## 7. Typography Controls

### Purpose
Fine-grained control over document text formatting, visible in the inspector panel.

### Controls
- **Font Family** — Dropdown with document-matching fonts
- **Font Size** — Slider or number input (8-72pt)
- **Weight** — Light, Regular, Medium, Semibold, Bold
- **Style** — Italic toggle
- **Decoration** — Underline toggle
- **Alignment** — Left, Center, Right, Justify
- **Line Spacing** — 1.0, 1.15, 1.5, 2.0, Custom
- **Casing** — None, Uppercase, Lowercase, Title Case, Sentence case

### Behavior
- Changes reflect in live preview immediately
- "Reset to template default" per field or global
- Shows original template value vs. current value

---

## 8. Activity Timeline

### Purpose
Historical log of document generation, template changes, and account activity.

### States
| State | Behavior |
|---|---|
| **Loading** | Skeleton timeline entries |
| **Populated** | Chronological list with date grouping |
| **Empty** | "No activity yet" with illustration |
| **Filtered** | Filter pills for document, template, billing events |

### Layout
```
┌──────────────────────────────────────┐
│  Activity                       🔍   │
│                                      │
│  [All] [Documents] [Templates]       │
│                                      │
│  Today                                │
│  ──────────────────────────────      │
│  📄 Generated · Acceptance Letter    │
│     2 hours ago · Batch #124         │
│  📄 Generated · Affidavit of Loss    │
│     3 hours ago · Batch #124         │
│                                      │
│  Yesterday                            │
│  ──────────────────────────────      │
│  📝 Template edited · ID Request     │
│     Yesterday at 14:30               │
│  📤 Exported · 15 documents as PDF   │
│     Yesterday at 11:15               │
└──────────────────────────────────────┘
```

---

## 9. Export Modal

### Purpose
Format selection and configuration before download.

### States
| State | Behavior |
|---|---|
| **Open** | Slides up from bottom or opens as panel |
| **Selecting** | Format options displayed as cards |
| **Processing** | Conversion progress shown |
| **Complete** | Download ready with file info |
| **Error** | Conversion failed with retry option |
| **Batch** | Multiple files listed with individual status |

### Format Options
- **DOCX** — Editable Word document (original format fidelity)
- **PDF** — Print-ready, layout locked
- **ZIP (batch)** — All documents in one archive

### Layout
```
┌──────────────────────────────────────┐
│  Export Documents               ✕    │
│                                      │
│  3 documents selected                │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ 📄 DOCX                      │    │
│  │ Editable Word format      →  │    │
│  └──────────────────────────────┘    │
│  ┌──────────────────────────────┐    │
│  │ 📄 PDF                       │    │
│  │ Print-ready, layout locked →  │   │
│  └──────────────────────────────┘    │
│  ┌──────────────────────────────┐    │
│  │ 📦 ZIP (Batch)               │    │
│  │ All files in archive      →  │    │
│  └──────────────────────────────┘    │
│                                      │
│  ⚙️ Advanced Options                 │
│  ┌──────────────────────────────┐    │
│  │ Font embedding: [Off]        │    │
│  │ Password: [Optional]         │    │
│  └──────────────────────────────┘    │
└──────────────────────────────────────┘
```

---

## 10. Settings Pages

### Purpose
Account, workspace, and billing configuration.

### Layout Pattern
```
┌──────────────────────────────────────┐
│  Settings                       ○ ○  │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ 👤  Profile                  │    │
│  ├──────────────────────────────┤    │
│  │ 🔒  Security                 │    │
│  ├──────────────────────────────┤    │
│  │ 💳  Billing & Plans          │    │
│  ├──────────────────────────────┤    │
│  │ 🔌  Integrations              │    │
│  ├──────────────────────────────┤    │
│  │ 📋  Team (Coming Soon)       │    │
│  └──────────────────────────────┘    │
└──────────────────────────────────────┘
```

### Behavior
- Left: navigation sidebar with section links
- Right: section content
- Active section highlighted in nav
- Unsaved changes prompt on navigation away

---

## 11. Loading & Skeleton Patterns

### Rules
- Never show blank pages
- Always use skeleton layouts that match the final content shape
- Shimmer animation moves left to right
- Duration: 1.5s per cycle

### Skeleton Types
| Component | Skeleton Shape |
|---|---|
| Template card | Rectangular card with text lines |
| Document preview | Full page outline with line shimmers |
| List items | Icon + text line + subtitle line |
| Inspector panel | Property label + input field skeleton |
| Pipeline stages | Circle + label + connector line |
| Analytics chart | Bar chart placeholder with animated bars |

---

## 12. Error & Empty States

### Error State Pattern
```
┌──────────────────────────────────────┐
│                                      │
│           ⚠️                         │
│                                      │
│   Something went wrong               │
│   We couldn't load your templates.   │
│                                      │
│   [Try Again] [Contact Support]      │
│                                      │
└──────────────────────────────────────┘
```

### Empty State Pattern
```
┌──────────────────────────────────────┐
│                                      │
│           📄                         │
│                                      │
│   No templates yet                   │
│   Create your first template to      │
│   start generating documents.        │
│                                      │
│   [+ Create Template]                │
│                                      │
└──────────────────────────────────────┘
```

---

## 13. Notification System

### Toast Notifications
- Appear top-right
- Stack up to 3 visible
- Auto-dismiss after 4 seconds (success), persistent (errors)
- Types: Success, Error, Warning, Info

### Inline Notifications
- Used within forms and workflows
- Appears near the relevant control
- Does not block interaction

### Layout
```
┌────────────────────────┐
│ ✅ Document generated ✓ │
│   acceptance_letter...  │
└────────────────────────┘
```


---

## 14. Backend Integration: Prototype-Derived Specifications

> These specifications are derived from the working prototype (`~/mytypist-workspace/prototype/app.py`).
> They define exactly how the frontend should communicate with the backend API.
> The prototype generated 800+ documents from 4 templates — these patterns are proven.

### 14.1 Document Generation Flow

The prototype proved this pipeline works reliably:

User fills form → POST /generate → DocxTemplate.render() → Save DOCX → Convert to PDF (cached) → Return file

**Frontend must support:**

| Step | Action | Backend API |
|---|---|---|
| 1 | Select template | GET /api/templates |
| 2 | Load placeholders | GET /api/templates/{id}/placeholders |
| 3 | Fill values, validate | POST /api/documents/generate |
| 4 | Preview (after generation) | GET /api/documents/{id}/preview |
| 5 | Download DOCX or PDF | GET /api/documents/{id}/download?format=docx|pdf |

### 14.2 Placeholder System (From Prototype)

The prototype"s placeholder engine is the core intellectual property. Frontend must match its capabilities.

#### Variable Detection
- Format: `{{ variable_name }}` in DOCX
- Multiple instances of same variable detected separately (e.g., name appears 3 times → 3 instances)
- Each instance preserves its own formatting (bold, italic, font, size, alignment)

#### Auto-Detected Types (by variable name pattern)
| Type | Variable Name Patterns |
|---|---|
| text | Default fallback |
| date | Contains date, time |
| email | Contains email |
| number | Contains number, amount, reg_no, mat_no |
| option | Contains gender, relation, religion, level, he_she, his_her |
| address | Contains address, location, residence |

#### Smart Defaults (Nigerian Academic Context)
| Variable Pattern | Default Value |
|---|---|
| name, full_name, student_name | Joe Doe |
| address, sender_address | 24 Avenue Avenue, Osato Junction, Benin City, Edo State |
| department, dept | Production Engineering |
| faculty | Engineering |
| mat_no, reg_no, student_id | ENG2204223 |
| gender | Option: Male/Female |
| his_her | Option: his/her |
| he_she | Option: he/she |
| religion | Option: Christian/Muslim |
| relationship, relation | Option: son/daughter/niece/nephew/brother/sister |

#### Date Formatting (Nigerian Conventions)
| Document Type | Format | Example |
|---|---|---|
| Letter | {day} {Month}, {Year} | 22nd September, 2025 |
| Affidavit | {day} of {Month}, {Year} | 22nd of September, 2025 |
| Default | Same as Letter | 22nd September, 2025 |

- Dates auto-fill with current Nigeria time (West Africa Time, UTC+1)
- Ordinal suffixes: st, nd, rd, th
- Ordinal casing: uppercase text keeps uppercase (19TH), otherwise lowercase (19th)

#### Address Formatting
| Document Type | Behavior |
|---|---|
| Letter | Break at commas, comma after each line except last, period at end |
| Affidavit | Keep exact input, remove trailing periods |

#### Validation Rules
- Required fields marked by admin
- Regex validation patterns per field
- Error messages returned per-field (not just form invalid)

### 14.3 Batch Processing Flow

Sequential batch works reliably:

POST /batch → For each template_id: generate, save, assign batch_id, track success/error → Return batch_id

**Frontend batch UI must support:**
1. Select multiple templates (checkboxes)
2. Upload CSV/Excel of student data (columns map to placeholders)
3. Preview total: N students × M templates = X documents
4. Real-time progress: 12/46 generated...
5. Per-document error display
6. Download results as ZIP (DOCX, PDF, or both)
7. Batch history view with status

### 14.4 Document Storage & Retrieval

The prototype stores:
- Generated DOCX in generated/docx/{uuid}.docx
- Generated PDF in generated/pdf/{uuid}.pdf (on-demand conversion, cached)
- Each record: template, user_name, user_email, file_path, original_filename, file_size, batch_id, user_inputs (JSON)

**Frontend document list must show:**
- Document name, template name, user name, generation date, file size
- Download buttons (DOCX, PDF)
- Batch association
- Input data used (for re-generation)

### 14.5 Template Management (Admin)

Lifecycle: Upload DOCX → Extract placeholders → Save → Edit placeholder properties → Pause/Resume → Delete

**Frontend admin must support:**
- Template upload with drag-drop
- Placeholder editing in inspector panel
- Template preview (rendered with defaults)
- Template pause/resume toggle
- Template delete with confirmation
- Database backup download

### 14.6 Performance Patterns (From Prototype)

| Pattern | Implementation |
|---|---|
| Caching | Template list cached 30s, types cached 5min |
| Document listing | Paginated, 10 per page |
| PDF conversion | On-demand, cached on disk |
| Template query | Only active templates shown to users |
| Batch errors | Per-template error isolation |

### 14.7 Data Models (Translate to API)

Template: id, name, type, description, file_path, font_family, font_size, margins, line_spacing, is_active, timestamps, placeholder_count, document_count

Placeholder: id, template_id, name, display_name, type, is_required, options[], help_text, sort_order, bold, italic, underline, casing, font_family, font_size, alignment, validation_pattern, default_value

CreatedDocument: id, template_id, template_name, user_name, user_email, file_path, original_filename, file_size, created_at, batch_id, user_inputs (JSON), download_urls

BatchGeneration: id, batch_id, user_name, user_email, template_ids[], status, total/successful documents, timestamps, error_message, download_url

### 14.8 Advanced Features the Prototype Proves

1. **Formatting Fidelity** — Each placeholder preserves original DOCX formatting (font, size, bold, italic, underline, alignment). Frontend must display formatting hints.
2. **Multiple Instance Handling** — Same variable multiple times on different paragraphs tracked separately with per-instance formatting.
3. **Graceful Degradation** — If PDF conversion fails, offer DOCX download instead.
4. **Error Isolation** — In batch, one template failure doesn't stop others.
5. **Smart Date Ordinals** — Ordinal suffix casing is context-aware.
6. **Document-Type-Aware Formatting** — Letters vs Affidavits format addresses and dates differently.


---

## 15. Auth System

### Purpose
User authentication, registration, session management, and security features. Supports email/password, 2FA, and session management.

### States
| State | Behavior |
|---|---|
| **Logged Out** | Public nav, login/signup CTAs, guest session auto-created |
| **Logging In** | Loading state on submit, error in-line on failure, redirect on success |
| **Logged In** | Full nav, user avatar, session persisted |
| **2FA Required** | Interstitial after password verification — prompt for TOTP code |
| **Email Unverified** | Banner warning, resend verification link |
| **Session Expired** | Toast notification, redirect to login, preserve intended destination |
| **Password Reset** | Email sent confirmation, token validation, new password form |

### Auth Screens

#### Login
```
┌──────────────────────────────────────┐
│  Welcome back                        │
│                                      │
│  Email: [________________________]   │
│  Password: [____________________]    │
│                                      │
│  [Sign In]     or [Continue with Google] │
│                                      │
│  Forgot password?                     │
│  Don't have an account? Sign up       │
└──────────────────────────────────────┘
```

#### Signup
```
┌──────────────────────────────────────┐
│  Create your account                 │
│                                      │
│  Full Name: [____________________]   │
│  Email: [________________________]   │
│  Password: [____________________]    │
│                                      │
│  □ I agree to Terms of Service       │
│                                      │
│  [Create Account]                     │
│                                      │
│  Already have an account? Sign in     │
│  ─── OR ───                          │
│  Continue as guest (3 free docs)      │
└──────────────────────────────────────┘
```

#### 2FA Setup
```
┌──────────────────────────────────────┐
│  Two-Factor Authentication           │
│                                      │
│  1. Scan this QR code with your      │
│     authenticator app:               │
│     ┌────────────────────────┐       │
│     │      QR CODE           │       │
│     └────────────────────────┘       │
│                                      │
│  2. Enter the 6-digit code:          │
│     [_____ _____]                    │
│                                      │
│  3. Save your recovery codes:        │
│     ┌────────────────────────┐       │
│     │ xxxxx-xxxxx            │       │
│     │ xxxxx-xxxxx            │       │
│     │ xxxxx-xxxxx            │       │
│     │ [Download] [Copy All]  │       │
│     └────────────────────────┘       │
│                                      │
│  [Verify & Enable]                   │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| Login | `POST /auth/login` |
| Register | `POST /auth/register` |
| Refresh token | `POST /auth/refresh` |
| Logout | `POST /auth/logout` |
| Verify email | `POST /auth/verify-email` |
| Request password reset | `POST /auth/password-reset` |
| Confirm password reset | `POST /auth/password-reset/confirm` |
| Setup 2FA | `POST /auth/2fa/setup` |
| Verify 2FA | `POST /auth/2fa/verify` |
| List active sessions | `GET /auth/sessions` |
| Revoke session | `DELETE /auth/sessions/{id}` |
| Guest session create | Auto via middleware cookie |

---

## 16. User Profile & Security

### Purpose
Account settings, profile management, security configuration, and API key management.

### Sections

#### Profile Tab
```
┌──────────────────────────────────────┐
│  Profile                         ○ ○ │
├──────────────────────────────────────┤
│  Avatar:  ┌────┐  [Change Photo]    │
│           │    │                     │
│           └────┘                     │
│  Full Name: [John Smith          ]   │
│  Username: [johnsmith            ]   │
│  Email: john@example.com [Verified ✓]│
│  Timezone: [Africa/Lagos ▾]         │
│                                      │
│  [Save Changes]                      │
└──────────────────────────────────────┘
```

#### Security Tab
```
┌──────────────────────────────────────┐
│  Security                        ○ ○ │
├──────────────────────────────────────┤
│  Current Password: [____________]    │
│  New Password: [________________]    │
│  Confirm Password: [________________]│
│                                      │
│  Password strength: ████████░░ 80%   │
│  • At least 8 characters ✓           │
│  • Contains uppercase ✓              │
│  • Contains number ✓                 │
│  • Not in previous 5 passwords ✓     │
│                                      │
│  [Update Password]                   │
│                                      │
│  ─── Active Sessions ───             │
│  ● Chrome · Windows · 2h ago         │  [Revoke]
│  ● Safari · iPhone · Today 14:30     │  [Revoke]
│                                      │
│  Two-Factor Authentication           │
│  Status: [Enabled] [Disable]         │
└──────────────────────────────────────┘
```

#### API Keys Tab
```
┌──────────────────────────────────────┐
│  API Keys                        ○ ○ │
├──────────────────────────────────────┤
│  Your secret API keys are shown      │
│  below. Keep them secure.            │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ Name          Key            │    │
│  │ Production    sk_live_***abc │    │
│  │ Testing       sk_test_***xyz │    │
│  │                              │    │
│  │ [Copy] [Revoke] per key      │    │
│  └──────────────────────────────┘    │
│                                      │
│  [+ Generate New Key]                │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| Get profile | `GET /api/user/profile` |
| Update profile | `PUT /api/user/profile` |
| Change password | `POST /auth/change-password` |
| List sessions | `GET /auth/sessions` |
| Revoke session | `DELETE /auth/sessions/{id}` |
| List API keys | `GET /api/user/api-keys` |
| Create API key | `POST /api/user/api-keys` |
| Revoke API key | `DELETE /api/user/api-keys/{id}` |

---

## 17. Subscription & Billing

### Purpose
View current plan, manage subscription, payment methods, and invoice history. Integrated with Flutterwave payments.

### States
| State | Behavior |
|---|---|
| **Free Plan** | Shows upgrade prompt, usage stats, plan limits |
| **Active Paid** | Shows plan details, renewal date, usage percentage |
| **At Limit** | Warning banner, upgrade CTA, remaining count = 0 |
| **Over Limit** | Blocked generation, upgrade modal on attempt |
| **Past Due** | Banner with payment link, restricted features |
| **Canceled** | Shows expiration date, reactivation option |
| **Loading** | Skeleton cards for plan comparison |

### Layout
```
┌──────────────────────────────────────────────────────┐
│  Billing                                         💳  │
├──────────────────────────────────────────────────────┤
│  Current Plan                                        │
│  ┌─────────────────────────────────────────────┐     │
│  │  Pro Plan                            [Manage]│     │
│  │  847 / 1000 documents this month             │     │
│  │  ████████████████░░░░ 85%                     │     │
│  │  Renews on June 27, 2026                      │     │
│  └─────────────────────────────────────────────┘     │
│                                                      │
│  ─── Available Plans ───                             │
│  ┌──────────┐ ┌──────────┐ ┌──────────────┐         │
│  │  Free    │ │  Pro     │ │  Enterprise   │         │
│  │  ₦0/mo   │ │ ₦7,500/mo│ │  ₦12,000/mo   │         │
│  │  5 docs  │ │ 1000 docs│ │  Unlimited    │         │
│  │          │ │ Premium  │ │  SSO + SLA    │         │
│  │ [Current]│ │[Upgrade] │ │ [Contact]     │         │
│  └──────────┘ └──────────┘ └──────────────┘         │
│                                                      │
│  ─── Payment Method ───                              │
│  💳 Visa ending in 4242 · Exp 12/26                  │
│  [Change]                                             │
│                                                      │
│  ─── Invoice History ───                             │
│  May 2026 · ₦7,500 · Paid ✓    [Download PDF]       │
│  Apr 2026 · ₦7,500 · Paid ✓    [Download PDF]       │
│  Mar 2026 · ₦7,500 · Paid ✓    [Download PDF]       │
└──────────────────────────────────────────────────────┘
```

### Checkout Flow
```
┌──────────────────────────────────────┐
│  Complete Payment                    │
│                                      │
│  Plan: Pro Plan · ₦7,500/month      │
│                                      │
│  ┌────────────────────────────┐      │
│  │  Card Details               │      │
│  │  Card Number: [____________]│      │
│  │  Expiry: [____] CVV: [___] │      │
│  │  Cardholder: [____________] │      │
│  └────────────────────────────┘      │
│                                      │
│  [Pay ₦7,500]                        │
│                                      │
│  Secured by Flutterwave              │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| List plans | `GET /api/subscriptions/plans` |
| Get current subscription | `GET /api/subscriptions/current` |
| Upgrade/downgrade | `POST /api/subscriptions/upgrade` |
| Cancel subscription | `POST /api/subscriptions/cancel` |
| Initialize payment | `POST /api/payments/initialize` |
| List invoices | `GET /api/invoices` |
| Download invoice | `GET /api/invoices/{id}/download` |
| Payment webhook | `POST /api/payments/webhook` (Flutterwave) |

---

## 18. Token Economy & Wallet

### Purpose
Token-based usage system. Every document generation costs tokens. Tokens are earned through purchases, referrals, bonuses, and campaigns.

### States
| State | Behavior |
|---|---|
| **Sufficient** | Normal generation flow |
| **Low** | Warning indicator (<20% remaining) |
| **Empty** | Block generation, purchase modal |
| **Loading** | Skeleton balance card |
| **Error** | Failed transaction, retry option |

### Wallet Dashboard
```
┌──────────────────────────────────────┐
│  Wallet                           💰 │
├──────────────────────────────────────┤
│  ┌──────────────────────────────┐    │
│  │  Token Balance               │    │
│  │                              │    │
│  │      ┌─────┐                │    │
│  │      │ 847 │  tokens        │    │
│  │      └─────┘                │    │
│  │                              │    │
│  │  Each generation costs 1     │    │
│  │  token. You can generate     │    │
│  │  847 more documents.         │    │
│  │                              │    │
│  │  [Buy Tokens]                │    │
│  └──────────────────────────────┘    │
│                                      │
│  ─── Purchase Tokens ───             │
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │ 100  │ │ 500  │ │ 2000 │         │
│  │ ₦500 │ │₦2,000│ │₦7,000│         │
│  ├──────┤ ├──────┤ ├──────┤         │
│  │₦5/tok│ │₦4/tok│ │₦3.50 │         │
│  └──────┘ └──────┘ └──────┘         │
│                                      │
│  ─── Recent Transactions ───         │
│  -1    Generated document      Now   │
│  -1    Batch: 3 docs        2h ago   │
│  +500  Token purchase       1d ago   │
│  +50   Referral bonus       3d ago   │
│  +100  Welcome bonus        7d ago   │
│                                      │
│  [View All Transactions →]           │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| Get balance | `GET /api/tokens/balance` |
| Purchase tokens | `POST /api/tokens/purchase` |
| Transaction history | `GET /api/tokens/history` |
| Get wallet | `GET /api/wallet` |
| Wallet transactions | `GET /api/wallet/transactions` |
| Token transfer | `POST /api/wallet/transfer` |
| Claim bonus | `POST /api/tokens/claim-bonus` |
| Welcome bonus auto-claim | `POST /auth/register` (automatic) |

---

## 19. Signature Capture & Management

### Purpose
Create, store, and apply digital signatures. Supports draw (canvas), upload (image), and type (font-based) methods.

### Signature Types
| Method | UX | Use Case |
|---|---|---|
| **Draw** | Canvas with pressure-sensitive drawing | Most natural, works on touch |
| **Upload** | File picker (PNG with transparent bg) | Pre-made official signatures |
| **Type** | Font selection + text input | Quick, no special tools needed |

### Signature Library
```
┌──────────────────────────────────────┐
│  Signatures                      ✍️  │
├──────────────────────────────────────┤
│  ┌──────────────────────────────┐    │
│  │ [+ Create New Signature]     │    │
│  └──────────────────────────────┘    │
│                                      │
│  ┌──────────────────────────────────┐│
│  │  My Signatures                   ││
│  │                                  ││
│  │  ┌────────┐ ┌────────┐          ││
│  │  │  John   │ │  J.S.  │          ││
│  │  │  Smith  │ │        │          ││
│  │  │ ✍️      │ │ ✍️      │          ││
│  │  └────────┘ └────────┘          ││
│  │                                  ││
│  │  [Use] [Edit] [Delete] per sig   ││
│  └──────────────────────────────────┘│
│                                      │
│  ─── Recent Signature Requests ───  │
│  ● NDA Agreement · 2 pending     [Sign Now]│
│  ● Contract #123 · Signed ✓      [View]    │
└──────────────────────────────────────┘
```

### Signature Creator
```
┌──────────────────────────────────────┐
│  Create Signature                    │
│                                      │
│  ┌──[Draw]────[Upload]───[Type]──┐  │
│  │                                │  │
│  │  ┌────────────────────────┐    │  │
│  │  │                        │    │  │
│  │  │    Draw your            │    │  │
│  │  │    signature here       │    │  │
│  │  │                        │    │  │
│  │  └────────────────────────┘    │  │
│  │                                │  │
│  │  [Clear] [Undo]                │  │
│  └────────────────────────────────┘  │
│                                      │
│  Name: [John Smith           ]       │
│                                      │
│  [Save Signature]                    │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| List signatures | `GET /api/signatures` |
| Create (draw) | `POST /api/signatures/canvas` |
| Create (upload) | `POST /api/signatures/upload` |
| Create (type) | `POST /api/signatures/type` |
| Update signature | `PUT /api/signatures/{id}` |
| Delete signature | `DELETE /api/signatures/{id}` |
| Apply to document | `POST /api/documents/{id}/sign` |
| Batch sign request | `POST /api/signatures/batch` |

---

## 20. Document Sharing & Collaboration

### Purpose
Share generated documents via link with configurable permissions. Track shared document access.

### Share Dialog
```
┌──────────────────────────────────────┐
│  Share Document                      │
│                                      │
│  Document: Acceptance Letter.docx    │
│                                      │
│  Share Link                          │
│  ┌─────────────────────────┬──────┐  │
│  │ https://mytypist.com/s/ │[Copy]│  │
│  │ aBcDeFgH                │      │  │
│  └─────────────────────────┴──────┘  │
│                                      │
│  Access: [Anyone with link ▾]        │
│  Permission: [View Only ▾]           │
│                                      │
│  ☐ Expire after: [7 days ▾]          │
│  ☐ Require email to view             │
│                                      │
│  [Copy Link] [Share via Email]       │
│                                      │
│  ─── Shared With ───                 │
│  ● jane@example.com · Viewed 2h ago  │  [Revoke]
│  ● bob@example.com  · Not yet viewed │  [Revoke]
│                                      │
│  Total views: 3                      │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| Create share link | `POST /api/documents/{id}/share` |
| Get share settings | `GET /api/documents/{id}/shares` |
| Update share | `PUT /api/documents/{id}/shares/{shareId}` |
| Revoke share | `DELETE /api/documents/{id}/shares/{shareId}` |
| View shared document | `GET /api/s/{shareCode}` |
| List received shares | `GET /api/shares/received` |

---

## 21. Drafts & Auto-Save System

### Purpose
Automatically save in-progress document work. Prevents data loss and enables "resume later" workflow.

### Auto-Save Behavior
- Triggers every 3 seconds when changes detected
- Visual indicator in toolbar: "Saving..." → "Saved ✓" → hidden after 2s
- Drafts survive page refresh, tab close, and browser crash
- Drafts expire after 7 days of inactivity
- Pay-later option for guest users (3 drafts max)

### Draft Indicator
```
┌──────────────────────────────────┐
│  Draft: Untitled    ○ Saving...  │  ← shown while saving
│  Draft: Untitled    ○ Saved ✓   │  ← shown briefly after save
│  Draft: Untitled                 │  ← hidden when idle
└──────────────────────────────────┘
```

### Drafts List (in sidebar)
```
┌──────────────────────────────┐
│  Drafts (3)                  │
│                              │
│  ● Untitled · 2m ago     📄 │
│  ● Acceptance Letter · 1h  │
│  ● ID Request · Yesterday   │
│                              │
│  [+ New Draft]               │
└──────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| Create draft | `POST /api/drafts` |
| Update draft | `PUT /api/drafts/{id}` |
| List drafts | `GET /api/drafts` |
| Get draft | `GET /api/drafts/{id}` |
| Delete draft | `DELETE /api/drafts/{id}` |
| Convert draft to document | `POST /api/drafts/{id}/convert` |

---

## 22. Advanced Search & Discovery

### Purpose
Global search across templates, documents, and users. TF-IDF powered ranking with personalization.

### Search Results Overlay
```
┌──────────────────────────────────────┐
│  🔍 acceptance letter                │
├──────────────────────────────────────┤
│  Templates (5)                        │
│  ├── Acceptance Letter           📄  │
│  ├── Acceptance Letter (Short)   📄  │
│  └── Acceptance Letter (Formal)  📄  │
│                                      │
│  Documents (12)                       │
│  ├── acceptance_john_smith.docx  📄  │
│  ├── acceptance_jane_doe.docx    📄  │
│  └── ...                             │
│                                      │
│  Actions                             │
│  ├── Create new Acceptance Letter ⚡ │
│  └── Batch: Acceptance Letters    ⚡  │
│                                      │
│  [View all results →]               │
└──────────────────────────────────────┘
```

### Search Filters
- Type: Templates, Documents, Users
- Date range: Today, This week, This month, Custom
- Status: Draft, Completed, Failed
- Sort: Relevance, Date, Name

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| Quick search | `GET /api/search?q=...&limit=10` |
| Full search | `GET /api/search?q=...&type=...&page=...` |
| Search suggestions | `GET /api/search/suggestions?q=...` |
| Recent searches | `GET /api/search/recent` |

---

## 23. Analytics & Monitoring Dashboards

### Purpose
Track document generation metrics, user engagement, and system performance.

### User-Facing Analytics
```
┌──────────────────────────────────────┐
│  Activity                         📊 │
├──────────────────────────────────────┤
│  ─── Overview (Last 7 Days) ───      │
│                                      │
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │  127 │ │  14  │ │  97% │         │
│  │ Docs  │ │ Tmp  │ │ Success│       │
│  └──────┘ └──────┘ └──────┘         │
│                                      │
│  ┌──────────────────────────────┐    │
│  │  Documents Generated          │    │
│  │  ██▇▆▇█▅▆  ▆▅▇▆█▅▃▄         │    │
│  │  Mon Tue Wed Thu Fri Sat Sun  │    │
│  └──────────────────────────────┘    │
│                                      │
│  ─── Recent Activity ───             │
│  📄 Generated · Acceptance Letter    │
│     John Smith · 2 hours ago       👁️│
│  📦 Batch completed · 46 documents   │
│     3 templates · 1 hour ago       📦│
│  ✏️ Template updated · ID Request    │
│     30 minutes ago                 ✏️│
└──────────────────────────────────────┘
```

### Admin Monitoring Dashboard
```
┌──────────────────────────────────────┐
│  System Health                   🔧  │
├──────────────────────────────────────┤
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌─────┐ │
│  │ CPU  │ │ Mem  │ │ Disk │ │ Resp│ │
│  │ 23%  │ │ 45%  │ │ 35%  │ │142ms│ │
│  └──────┘ └──────┘ └──────┘ └─────┘ │
│                                      │
│  Active Users: 12                    │
│  Queued Jobs: 3                      │
│  Error Rate: 0.2%                    │
│                                      │
│  ─── Recent Alerts ───               │
│  ⚠️ Slow query detected (2.3s)    1m ago│
│  ✅ All services operational       5m ago│
│                                      │
│  [View Full Monitoring →]            │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| User dashboard stats | `GET /api/analytics/overview` |
| Real-time metrics | `GET /api/analytics/realtime` |
| Activity log | `GET /api/analytics/activity` |
| Admin system health | `GET /api/admin/health` |
| Admin monitoring | `GET /api/admin/monitoring` |
| Performance metrics | `GET /api/admin/performance` |

---

## 24. Admin Management System

### Purpose
Full administrative control: users, templates, system health, security, content management.

### Admin Dashboard
```
┌──────────────────────────────────────────────────────┐
│  Admin Dashboard                                 🔧  │
├────────┬─────────────────────────────────────────────┤
│        │  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────────┐   │
│  Dash  │  │ 1,247│ │ 23   │ │ 5.2K │ │ ₦847K    │   │
│  board │  │ Users │ │Tmp   │ │ Docs  │ │ Revenue   │   │
│        │  └──────┘ └──────┘ └──────┘ └──────────┘   │
│  Users │                                              │
│        │  ┌──────────────────────────────────────┐    │
│  Tmp   │  │  Recent Users                         │    │
│  lates │  │  John Smith    · j@example.com · Pro  │    │
│        │  │  Jane Doe      · jd@example.com· Free │    │
│  Blog  │  │  ...                                  │    │
│        │  └──────────────────────────────────────┘    │
│  FAQ   │                                              │
│        │  ┌──────────────────────────────────────┐    │
│  Supp  │  │  Revenue (Last 30 Days)               │    │
│  ort   │  │  ██▇▆▇█▅▆▇▆█▅▃▄▅▇▆█ ▄▃▂▃▅▆▇       │    │
│        │  └──────────────────────────────────────┘    │
│  Secu‑ │                                              │
│  rity  │  ─── Quick Actions ───                       │
│        │  [Run Backup] [Optimize DB] [Clear Cache]    │
│  Audit │                                              │
│  Roles └──────────────────────────────────────────────┘
└────────────────────────────────────────────────────────┘
```

### Admin User Management
```
┌──────────────────────────────────────┐
│  Users  🔍 Search...  [Filter ▾]     │
├──────────────────────────────────────┤
│  ☐  Name          Email          Plan     Status  │
│  ☐  John Smith    j@example.com  Pro     Active  │
│  ☐  Jane Doe      jd@example.... Free    Active  │
│  ☐  Bob Wilson    bw@example.... Pro     Suspended│
│  ☐  Alice Brown   ab@example.... Enterpr. Active  │
│                                      │
│  [Actions ▾] on selected users        │
│  ● Bulk: Activate | Suspend | Delete  │
│  ● Export as CSV                      │
│                                      │
│  Page 1 of 25  [← →]                 │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| Admin dashboard stats | `GET /api/admin/stats` |
| User CRUD | `GET/POST/PUT/DELETE /api/admin/users` |
| Template CRUD | `GET/POST/PUT/DELETE /api/admin/templates` |
| Template classification | `POST /api/admin/templates/classify` |
| System health | `GET /api/admin/health` |
| Performance monitoring | `GET /api/admin/monitoring` |
| Security incidents | `GET /api/admin/security/incidents` |
| Audit log | `GET /api/admin/audit-log` |
| Blog CRUD | `GET/POST/PUT/DELETE /api/admin/blog/*` |
| FAQ CRUD | `GET/POST/PUT/DELETE /api/admin/faq/*` |
| Support tickets | `GET/PUT /api/admin/support/tickets` |
| Campaign management | `GET/POST /api/admin/campaigns` |
| Role CRUD | `GET/POST/PUT /api/admin/roles` |
| Database backup | `POST /api/admin/database/backup` |
| Optimize database | `POST /api/admin/db/optimize` |

---

## 25. Campaigns, Referrals & Partners

### Purpose
Marketing automation: email campaigns, referral programs, token rewards, and partner management.

### Referral Dashboard
```
┌──────────────────────────────────────┐
│  Referrals                       🔗  │
├──────────────────────────────────────┤
│  ┌──────┐ ┌──────┐ ┌──────┐         │
│  │  23  │ │  12  │ │ 500  │         │
│  │Refs  │ │Signed│ │Tokens│         │
│  └──────┘ └──────┘ └──────┘         │
│                                      │
│  Your Referral Link:                  │
│  ┌────────────────────────┬──────┐   │
│  │ https://mytypist.com/r/│[Copy]│   │
│  │ johnsmith              │      │   │
│  └────────────────────────┴──────┘   │
│                                      │
│  ─── Recent Referrals ───            │
│  ● Jane Doe · Signed up 2d ago  +50 │
│  ● Bob Wilson · Generated 1d  +50   │
│  ● Alice Brown · Signed up 1h  Pending│
│                                      │
│  Total tokens earned: 1,250          │
└──────────────────────────────────────┘
```

### Campaign Management (Admin)
```
┌──────────────────────────────────────┐
│  Campaigns                       📧  │
├──────────────────────────────────────┤
│  ┌──────────────────────────────┐    │
│  │ [+ New Campaign]             │    │
│  └──────────────────────────────┘    │
│                                      │
│  Campaign           Status   Sent   │
│  Summer Bonus       Active   1,247  │
│  Welcome Series     Active   3,421  │
│  Reactivation       Draft    —      │
│  Holiday Promo      Sent     5,832  │
│                                      │
│  [Edit] [Pause] [Analytics] per cmp  │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| Referral dashboard | `GET /api/referrals` |
| Create referral link | `POST /api/referrals/create-link` |
| Claim referral reward | `POST /api/referrals/claim` |
| Partner applications | `GET/POST /api/partners` |
| Campaign list | `GET /api/admin/campaigns` |
| Create campaign | `POST /api/admin/campaigns` |
| Campaign analytics | `GET /api/analytics/campaigns/{id}` |

---

## 26. Blog, FAQ & Support Pages

### Purpose
Content management (blog), self-service help (FAQ), and customer support (tickets).

### Blog Listing
```
┌──────────────────────────────────────┐
│  Blog                            📝  │
├──────────────────────────────────────┤
│  Categories: [All ▾]  🔍 Search...   │
│                                      │
│  ┌──────────────────────────────────┐│
│  │ 📰 How to Create an Acceptance   ││
│  │    Letter in 3 Minutes           ││
│  │    May 25, 2026 · 5 min read     ││
│  │    Tags: tutorial, acceptance    ││
│  └──────────────────────────────────┘│
│  ┌──────────────────────────────────┐│
│  │ 📰 Understanding Nigerian        ││
│  │    Document Formatting Standards ││
│  │    May 20, 2026 · 8 min read     ││
│  │    Tags: formatting, standards   ││
│  └──────────────────────────────────┘│
│                                      │
│  Page 1 of 3  [← →]                 │
└──────────────────────────────────────┘
```

### FAQ
```
┌──────────────────────────────────────┐
│  FAQ                             ❓  │
├──────────────────────────────────────┤
│  🔍 Search frequently asked questions│
│                                      │
│  ─── Account ───                     │
│  ▸ How do I reset my password?       │
│  ▸ Can I change my email address?    │
│  ▸ How does billing work?            │
│                                      │
│  ─── Documents ───                   │
│  ▸ What formats can I export to?     │
│  ▸ How do batch process?             │
│  ▸ What is the document limit?       │
│                                      │
│  ─── Templates ───                   │
│  ▸ Can I upload my own template?     │
│  ▸ How do I edit placeholders?       │
│                                      │
│  Still need help? [Contact Support →]│
└──────────────────────────────────────┘
```

### Support Tickets
```
┌──────────────────────────────────────┐
│  Support                         🎫  │
├──────────────────────────────────────┤
│  ┌──────────────────────────────┐    │
│  │ [+ New Ticket]               │    │
│  └──────────────────────────────┘    │
│                                      │
│  ─── My Tickets ───                  │
│  ● Can't upload template             │
│    #10423 · Open · 2h ago            │
│  ● Billing question                  │
│    #10419 · Waiting · 1d ago         │
│  ● Feature request: more formats     │
│    #10412 · Closed · 3d ago          │
│                                      │
│  ─── Quick Help ───                  │
│  Visit our [FAQ] for instant answers │
└──────────────────────────────────────┘
```

### Ticket Detail
```
┌──────────────────────────────────────┐
│  Ticket #10423 · Can't upload...     │
├──────────────────────────────────────┤
│  Status: Open · Priority: Normal     │
│  Created: 2 hours ago                │
│                                      │
│  ─── Conversation ───                │
│                                      │
│  You (14:30):                        │
│  I'm trying to upload a .docx file   │
│  but it keeps failing with an error. │
│                                      │
│  Support (14:45):                    │
│  Could you share the file? Let me    │
│  check the error log.                │
│                                      │
│  ┌──────────────────────────────┐    │
│  │ [Type your reply...]     [Send] │ │
│  └──────────────────────────────┘    │
│                                      │
│  Attach file: 📎 or drop files here │
└──────────────────────────────────────┘
```

### Backend API Mapping
| Frontend Action | Backend Endpoint |
|---|---|
| Blog list | `GET /api/blog` |
| Blog post | `GET /api/blog/{slug}` |
| FAQ list | `GET /api/faq` |
| Create ticket | `POST /api/support/tickets` |
| List tickets | `GET /api/support/tickets` |
| Get ticket | `GET /api/support/tickets/{id}` |
| Reply to ticket | `POST /api/support/tickets/{id}/reply` |
| Submit feedback | `POST /api/feedback` |
| Contact form | `POST /api/contact` |
