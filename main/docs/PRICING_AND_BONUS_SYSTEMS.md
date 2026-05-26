# Pricing & Bonus Systems Analysis: v1 vs v2

## High-Level Summary
- **v1 (Pricing.tsx)**: Features localized pricing in Nigerian Naira (₦). It has a clear billing toggle (Monthly vs Quarterly) and uses a very direct feature-list approach. It also includes comprehensive admin pages for managing bonuses and system health.
- **v2 (PricingUpgrade)**: A high-conversion, long-form sales page. It includes an interactive **Usage Calculator**, a detailed **Comparison Table**, FAQs, and Testimonials. It introduces a "token-based" terminology that isn't present in v1.

## Detailed Comparison

### 1. Pricing Structure & Tiers
- **v1 Tiers**: Free (₦0), Professional (₦7,500), Enterprise (₦12,000).
- **v2 Tiers**: Free ($0), Pro ($9.99), Business ($29.99).
- **Key Difference**: v1 uses a flat subscription model, while v2 hints at a "token-based system" where users pay for what they use. The v1 pricing is localized for the Nigerian market, which is a significant strategic detail.

### 2. Conversional Elements (v2 Strengths)
- **Usage Calculator**: v2 has a component to help users decide their plan based on volume.
- **Comparison Table**: A deep-dive feature matrix that allows for a "Show/Hide" toggle on mobile.
- **Trust Signals**: v2 includes specific sections for testimonials and security signals (TrustSignals component).
- **Interactive UI**: v2 uses `scrollIntoView` for smooth navigation to the pricing cards.

### 3. Incentive & Admin Systems (v1 Strengths)
- **Bonus System**: v1 has an `AdminBonuses.tsx` and a user-facing `Bonuses.tsx` page. This suggests a reward system (referrals, loyalty) that v2 lacks completely.
- **System Health**: v1 has an `AdminHealth.tsx` page, indicating a focus on operational stability and transparency.
- **Billing Flexibility**: v1 has a "Quarterly" option with a clear "Save 12%" badge, providing more checkout flexibility than v2's monthly-only focus.

## Extraction Recommendations for 'main'

### 1. The Pricing Page
- **Design**: Use the **v2 long-form layout** (Hero -> Calculator -> Cards -> Comparison -> FAQ).
- **Pricing Model**: Combine v1's **Naira (₦)** pricing with v2's **Pro/Business** tier names.
- **Billing**: Port v1's **Monthly/Quarterly toggle** logic.

### 2. The Bonus System
- **Integration**: The user-facing **Bonuses** page from v1 should be integrated into the final Dashboard.
- **Admin**: Keep v1's **AdminBonuses** and **AdminHealth** logic, but update their UI to match v2's more modern design language.

### 3. Feature Highlights
- Use v2's **PricingCard** component as the base but add v1's **detailed feature value** display (e.g., "Documents per month: 5").
- Port v2's **FAQSection** to the final Pricing page to reduce support tickets.

## Visual Gaps
- **v1 Icons**: Uses Lucide (`CheckCircle`, `Star`).
- **v2 Icons**: Uses a custom `Icon` wrapper.
- **Unity**: The final version must choose one (Lucide is recommended for its TypeScript support and variety).
