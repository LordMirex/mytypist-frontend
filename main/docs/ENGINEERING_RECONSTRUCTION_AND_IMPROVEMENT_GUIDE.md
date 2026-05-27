# Engineering Reconstruction & Improvement Guide

This is the ultimate reference for rebuilding MyTypist from scratch using the insights extracted from `v1` and `v2`. It identifies exactly how to fix "half-baked" features and where to focus for maximum impact.

## 1. Core Reconstruction Strategy

### The "No Code on Hand" Challenge
... (UI/Logic/Content/Route definitions) ...

## 2. Professional "Business Core" Mandate
Move away from "AI mockup" designs. The current versions (v1, v2) are ~30% complete and rely on generic templates. To reach "Business Core" status, the next AI must:
1.  **Eliminate Mockup Aesthetic**: Avoid Shadcn/Tailwind default looks. Create a unique, professional business core site with a distinct brand identity.
2.  **Guided UI/UX**: The Document Studio and Dashboard must be "well-guided," leading the user intuitively through complex tasks.
3.  **Arranged Content**: Ensure all landing and public pages have content that is professionally arranged, removing the "unarranged and incomplete" feel of current mockups.
4.  **Production Logic**: Every feature must have real production logic. No placeholder buttons. Previews must transition from frontend-only to backend-driven rendering.

## 3. Major Improvement Advice

### A. AI Integration (The "Real" AutoType)
- **Current State**: v1 is just a UI shell with hardcoded text.
- **Improvement**: 
  - Implement a dedicated `ai-service.ts`.
  - Use **Vercel AI SDK** to connect to OpenAI (GPT-4o) or Anthropic (Claude 3.5 Sonnet).
  - Feed the "Template Content" as a system prompt to ensure the AI generates text in the correct format.
  - Implement **Streaming** responses to the Document Studio textarea for a modern feel.

### B. E-Signature Workflow (The "Real" AutoSign)
- **Current State**: v1 has the button, but no signing logic.
- **Improvement**:
  - Integrate **React-PDF** to render the document as a canvas.
  - Use **Signature-Pad** for capturing actual mouse/touch signatures.
  - Store signatures as secure blobs or base64 strings (encrypted).
  - Implement a unique "Audit Trail" PDF page appended to the end of every signed document (Industry standard).

### C. The Token Economy (from v2)
- **Current State**: v2 mentions "3 tokens remaining" but has no backend connection.
- **Improvement**:
  - Use **Stripe Metered Billing** or **Supabase Functions** to decrement tokens on every AI generation.
  - Add a "Buy More Tokens" modal that pops up when a user hits zero.
  - Integrate the v1 **Bonus System** to award tokens for referrals or first signups.

## 3. Fixing the "Half-Baked" Components

### The "Coming Soon" Placeholders
- **How-To-Use Demo**: Replace the placeholder image with a recorded video walkthrough or a mini "sandbox" version of the studio.
- **Admin Health**: Actually poll the API endpoints using `React Query`'s `refetchInterval` to make the gauges move based on real data.
- **Dashboard Achievements**: Connect these to real database metrics (e.g., `documents_created_count`) so they unlock automatically.

## 4. Engineering Priorities (Phase 1)
1.  **Universal Layout**: Build the `main/src/components/shared/Layout.tsx` using v2's modern header and a dynamic sidebar that changes based on user role (Guest/User/Admin).
2.  **Unified Config**: Merge the HSL variables from v1 with the semantic naming of v2 into a single `globals.css`.
3.  **Auth First**: Build the Login/Signup pages immediately using v1's form structures but v2's "Glassmorphism" styling.

## 5. Vision for the "Perfect" MyTypist
The final version should feel like a high-end financial tool—clean, fast, and authoritative. It should use **Framer Motion** for every transition to ensure it doesn't just "look" good, but "feels" premium.
