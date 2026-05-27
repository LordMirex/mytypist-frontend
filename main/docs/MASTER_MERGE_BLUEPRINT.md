# Master Merge Blueprint: MyTypist Final Frontend

This document serves as the final, exhaustive roadmap for extracting, merging, and completing the MyTypist frontend within the `main` directory.

## 🎯 The Vision
Move away from "AI mockup" designs toward a unique, professional business core UI/UX. The final product must feel like a custom-built enterprise solution, not a generic template. The design for all current versions (v1 and v2) is considered "AI mockup quality" and must be completely overhauled into something professional and unique.

## 1. Core Architecture & Design
- **Language**: TypeScript (from v1) - [See TECHNICAL_IMPLEMENTATION_SPEC.md](./TECHNICAL_IMPLEMENTATION_SPEC.md)
- **Framework**: React 18+ with Vite.
- **Styling**: Tailwind CSS + Shadcn UI.
- **Design Strategy**: Professional research-backed UI/UX. No random mockups. Every page must feel arranged, complete, and guided.
- **Design Tokens**: [See DESIGN_SYSTEM_AND_TOKENS.md](./DESIGN_SYSTEM_AND_TOKENS.md)
  - **Fonts**: Inter (Sans) + Playfair Display (Serif/Accent).
  - **Colors**: HSL-based (v1) with semantic naming extension (v2: `conversion`, `canvas`, `trust`).
  - **Effects**: Extended shadows from v2 (`shadow-conversion`, `shadow-brand`).

## 2. Page & Route Strategy
- **Master Map**: [See PAGES_AND_ROUTES_SPEC.md](./PAGES_AND_ROUTES_SPEC.md)
- **Content**: All text, legal copy, and FAQs must be extracted from [EXTRACTED_CONTENT_MASTER.md](./EXTRACTED_CONTENT_MASTER.md).

## 3. Module Merges

### A. Landing Page & Growth
- **Base**: v2 `homepage/index.jsx` (Two-column grid layout).
- **Hero**: v2 Interactive Search + v1 Trust Badges. [See LANDING_PAGE_COMPARISON.md](./LANDING_PAGE_COMPARISON.md)
- **Incentives**: Port v1 **Bonus System** completely. [See PRICING_AND_BONUS_SYSTEMS.md](./PRICING_AND_BONUS_SYSTEMS.md)

### B. Document Studio
- **Base**: v2 `document-creator-studio` (Split-pane layout).
- **Features**: 
  - Add v1 **Recipient Management** form section.
  - Add v1 **Send for Signature** action flow.
  - Keep v2 **Progress Tracking** and **Mobile Preview Toggle**.
  - [See DOCUMENT_STUDIO_ANALYSIS.md](./DOCUMENT_STUDIO_ANALYSIS.md)

### C. Dashboard & Admin Suite
- **User Hub**: Use v2 `UserDashboard.jsx` as the base. [See DASHBOARD_AND_USER_SYSTEM_SPEC.md](./DASHBOARD_AND_USER_SYSTEM_SPEC.md)
- **Admin Suite**: Use v1 Admin pages as the baseline logic. [See ADMIN_SYSTEM_SPEC.md](./ADMIN_SYSTEM_SPEC.md)

## 4. Deep-Dive Specifications
- **Maturity Audit**: [See COMPLETENESS_AND_MATURITY_AUDIT.md](./COMPLETENESS_AND_MATURITY_AUDIT.md)
- **Logic Extraction**: [See LOGIC_EXTRACTION_HOOKS_STATE.md](./LOGIC_EXTRACTION_HOOKS_STATE.md)
- **Asset Catalog**: [See VISUAL_ASSET_AND_ICON_CATALOG.md](./VISUAL_ASSET_AND_ICON_CATALOG.md)
- **Engineering Guide**: [See ENGINEERING_RECONSTRUCTION_AND_IMPROVEMENT_GUIDE.md](./ENGINEERING_RECONSTRUCTION_AND_IMPROVEMENT_GUIDE.md)

## 5. Implementation Steps

1. **Step 1: Environment Setup**: 
   - Initialize `main` with v1's TypeScript/Vite boilerplate.
   - Install all dependencies listed in `TECHNICAL_IMPLEMENTATION_SPEC.md`.
2. **Step 2: Design System**:
   - Create a unified `tailwind.config.ts`.
3. **Step 3: Component Extraction**:
   - Copy v1 `components/ui` (Shadcn) as the base library.
   - Extract and convert v2 interactive components (Search, Previewers) to TypeScript.
4. **Step 4: Page Assembly**:
   - Build pages one by one following the individual comparison and extraction documents.
5. **Step 5: Final Cleanup**:
   - Once `main` is 100% complete and verified, delete `v1` and `v2`.
   - Move `main` contents to the root folder.
