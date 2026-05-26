# Master Merge Blueprint: MyTypist Final Frontend

This document serves as the final roadmap for extracting, merging, and completing the MyTypist frontend within the `main` directory.

## 1. Core Architecture
- **Language**: TypeScript (from v1)
- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS + Shadcn UI
- **Design Tokens**: 
  - **Fonts**: Inter (Sans) + Playfair Display (Serif/Accent).
  - **Colors**: HSL-based (v1) with semantic naming extension (v2: `conversion`, `canvas`, `trust`).
  - **Effects**: Extended shadows from v2 (`shadow-conversion`, `shadow-brand`).

## 2. Key Component Merges

### A. Landing Page
- **Base**: v2 `homepage/index.jsx` (Two-column grid layout).
- **Hero**: v2 Interactive Search + v1 Trust Badges (SOC 2, Checkmarks).
- **Features**: Merge v1's "Automation" focus with v2's "Template Gallery" focus.

### B. Document Studio
- **Base**: v2 `document-creator-studio` (Split-pane layout).
- **Features**: 
  - Add v1 **Recipient Management** form section.
  - Add v1 **Send for Signature** action flow.
  - Keep v2 **Progress Tracking** and **Mobile Preview Toggle**.

### C. Dashboard & Admin
- **Base**: v1 `AdminDashboard.tsx` and `Dashboard.tsx`.
- **Styling**: Update v1's table and card styles to use v2's `shadow-subtle` and `backdrop-blur` aesthetics.
- **Incentives**: Port v1 **Bonus System** completely.

## 3. Implementation Steps

1. **Step 1: Environment Setup**: 
   - Initialize `main` with v1's TypeScript/Vite boilerplate.
   - Install all dependencies from both `package.json` files.
2. **Step 2: Design System**:
   - Create a unified `tailwind.config.ts` using the `main/docs/DESIGN_SYSTEM_AND_TOKENS.md` recommendations.
3. **Step 3: Component Extraction**:
   - Copy v1 `components/ui` (Shadcn) as the base library.
   - Extract and convert v2 interactive components (Search, Previewers) to TypeScript.
4. **Step 4: Page Assembly**:
   - Build pages one by one following the individual comparison documents in `main/docs`.
5. **Step 5: Final Cleanup**:
   - Once `main` is 100% complete and verified, delete `v1` and `v2`.
   - Move `main` contents to the root folder.

## 4. Final Completion Goal
- **Performance**: 95+ Lighthouse score.
- **Usability**: Fully responsive from mobile to ultra-wide desktop.
- **Completeness**: 100% feature parity between the merged versions.
