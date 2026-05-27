# Pages Deep-Dive: v1 & v2 Analysis

This document provides a granular analysis of every page and component discovered in `v1` and `v2`. It identifies the specific logic, assets, and features to be extracted for the final **Document Operating System**.

## 1. Landing & Public Pages

| Page | v1 Logic/Features | v2 Logic/Features | Reconstruction Mandate |
| :--- | :--- | :--- | :--- |
| **Home (Index)** | Corporate trust badges, SOC 2 mentions. | Interactive search, template cycler. | Use v2 split layout. Implement "Editorial Gateway" with live document generation flow. |
| **About** | Company mission, team stubs. | N/A | Restructured for "Document Operating System" narrative. Focus on precision and craftsmanship. |
| **Contact** | Support form with category selection. | N/A | High-density form. Integrated with "Support Operations" logic from Admin spec. |
| **Pricing** | Localized (₦) pricing, Monthly/Quarterly toggle. | Visual calculator, detailed feature matrix. | Use v2 calculator and matrix. Retain v1 localized pricing and toggle logic. |
| **FAQ** | Deep technical content, categories. | Simple FAQ section on pricing page. | Restructured as a searchable knowledge base. Port all v1 technical content. |
| **Blog** | Article list, content schema. | N/A | Precision editorial layout. Focus on "Document Operations" and "Workflow Optimization" topics. |
| **Legals** | Privacy Policy, Terms of Service text. | N/A | High-fidelity typography. Spatial navigation within legal docs. |

## 2. Authentication & User Onboarding

| Page | v1 Logic/Features | v2 Logic/Features | Reconstruction Mandate |
| :--- | :--- | :--- | :--- |
| **Login** | Form validation, password visibility. | N/A | Precision form. Integrated with Zustand state. v2 Glassmorphism style. |
| **Signup** | Role-based onboarding, validation. | Registration Modal in Studio. | Unified flow: Guest can "Fill & Preview", but "Signup to Finalize". |
| **Forgot Password**| Email recovery flow. | N/A | Port from v1. Restrained sophisticated UI. |

## 3. The Operational Workspace (App)

| Page | v1 Logic/Features | v2 Logic/Features | Reconstruction Mandate |
| :--- | :--- | :--- | :--- |
| **Dashboard** | Document list, simple stats. | Achievement badges, token system. | **Spatial Workspace**. Pipeline visualization (Horizontal timeline). Port achievement logic. |
| **Creator Studio** | Recipient management, blank doc mode. | Form-based input, Live Preview, Mobile toggle. | **Signature UI**. Adobe-grade editor. Inline editing + Contextual Toolbars. Port v1 Recipient logic. |
| **Gallery** | Simple list. | Advanced filters, search suggestions, preview modals. | Use v2 filtering logic. Port v1 "Upload Template" action button. |
| **Profile** | Tabbed settings (v. mature). | Basic tab in dashboard. | Port all v1 tabs (Security, Billing, Preferences). Re-skin as "Operational Identity". |
| **Bonuses** | Reward system, referral link. | N/A | Integrated into the spatial dashboard. Professional "Growth Monitor" UI. |
| **Analytics** | Simple usage charts. | N/A | High-density monitor. Focused on Operational Fidelity scores and throughput. |

## 4. Special Tools

| Page | v1 Status | Reconstruction Mandate |
| :--- | :--- | :--- |
| **AutoSign** | Marketing stub. | Implement as a real operational tool using `React-PDF` and `Signature-Pad`. |
| **AutoType** | Marketing stub. | Implement as "Precision Engine" using Vercel AI SDK. Focused on formatting preservation. |
| **HowToUse** | Placeholder images. | Replace with interactive "Operational Sandbox" or guided walkthrough. |

## 5. Administrative Suite (Command Center)

| Page | v1 Status | Reconstruction Mandate |
| :--- | :--- | :--- |
| **Admin Dashboard** | Basic stats. | **Command Center**. Infrastructure monitor (Vercel-style). |
| **Admin Users** | List and simple actions. | High-density table with advanced filters. Portfolio-level user auditing. |
| **Admin Health** | Uptime stubs. | Real-time monitoring of API latency and Database saturation. |
| **Admin Bonuses** | Campaign management. | Performance tracking for growth initiatives. |
| **Admin Upload** | Template upload form. | **Structure Inspector**. Tools to verify DOCX integrity before publishing. |

---
*Next Step: Ensure every file mentioned here is explicitly mapped to a TypeScript interface in the TECHNICAL_IMPLEMENTATION_SPEC.md.*
