# Dub — Polished SaaS Admin & Settings

Source: dub.co + styles.refero.design + dub.co/docs + gh dubinc/dub

## What
High-contrast, functionally transparent aesthetic. Pure white surfaces + crisp dark text (#0a0a0a). Serif display font for impact, neutral sans-serif for content. Accent colors as small functional highlights.

## Why It Works
- "Accent colors appear as small functional highlights rather than large blocks" — color draws attention to specific actions, not whole sections
- Consistent spacing: spacing refinement across dashboard pages (gap-*, mt-*, my-* values carefully tuned)
- Sidebar navigation with first-class entities: Folders, Tags, UTM Templates — not buried in menus
- Workspace switcher for toggling between contexts
- Border-radius: rounded-lg (8px) for buttons, inputs; updated from rounded-md in latest polish pass

## Key Details
- Sticky top bar: logo + main links + login/signup buttons
- Max-width contained layout: ~1200px centered
- Button padding: px-3 (12px horizontal), with icon variants
- Data tables: minimal borders, row hover highlight, right-aligned numbers
- Settings: left sidebar navigation with sections (General, Team, Billing, API Keys, Domains), content on right
- Empty states: illustration + title + description + action button
- Card detail views for customers/partners: Summary, Activity, Payouts, Referrals as sections
- Trust signals: SOC2 badge, customer logos, testimonial cards
- Monorepo: @dub/ui component library separate from @dub/utils

## Apply To MyTypist
- Settings page: left sidebar sections, content on right
- Data tables: minimal borders, row hover, right-aligned numbers
- Clean empty states with illustration + action
- Billing page: plan name, price, usage meter, invoices table, payment method
- Workspace switcher for multi-team/multi-workspace
- Consistent page layout with refined spacing
