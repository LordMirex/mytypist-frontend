# DocuSign — Competitor Analysis

Source: community.docusign.com, nickselby.com, Zendikt, G2 reviews

## Positioning
E-signature market leader ($2B+ ARR, 1.5M+ customers). Repositioned around "Intelligent Agreement Management" (IAM) in 2024. $25-65/mo. 900+ integrations.

## Design & UX Pattern

### Signer Experience (the one thing they get right)
- No login required to sign
- Clean, focused signing screen
- Mobile-responsive
- "Click to sign" simplicity
- Works on any device

### Sender Experience (where they fail)
- Basic flow is simple: upload → add recipients → place fields → send
- Advanced features (CLM, IAM, Maestro workflows) have steep learning curve
- 2025-2026 updates: "Next Generation eSignature Experience" — modernized UI, AI-recommended fields, collapsible side panel, reorganized envelope lists by agreement stage
- New design direction: consolidated headers, enhanced recipient visibility, centralized Details tab

## Known Failure Points (What NOT To Copy)

### 1. Aggressive AI Pushing (THE BIGGEST FAILURE)
Nick Selby's essay "Product Suicide and a Digital Unicycle Clown" (Feb 2026):
> "Docusign had 'updated' its user interface. Gone was the simple workflow. In place: a murderously distracting AI widget that made Clippy look like an old friend."

Users are actively leaving because of this. The AI widget broke the core workflow (adding recipients, sending documents). Support told the user they could "disable it" but this was hidden in settings. Customer canceled and moved to Google Workspace eSign.

### 2. Pricing & Upselling
- Pricing crept up significantly in 2024-2025
- Hidden costs for essential features
- Aggressive auto-renewal terms
- Opaque enterprise pricing

### 3. UX Complexity
- Advanced features require tutorials
- Template creation is confusing for non-technical users
- CLM modules feel "layered on" — product debt
- Custom API integrations need significant guidance

### 4. Customer Support
- Variable quality through leadership transition
- Tier-dependent support responsiveness
- Bot-first support (mentioned by multiple reviewers)

### 5. Wet-Sign UX (specific complaint)
- No visual differentiation between e-sign and wet-sign envelopes
- "Sign Here" tags still appear on wet-sign documents (misleading)
- Users can "Finish" without completing required uploads
- Critical steps hidden behind menu options

## What MyTypist Can Learn
- **Never break the core workflow to promote AI** — this is the #1 lesson from DocuSign's 2025-2026 failure
- **Signer experience should require zero login** — the simplest possible path for recipients
- **Template creation must be intuitive** — DocuSign's complexity here is a known pain point
- **Visual differentiation between workflow states** — wet-sign vs e-sign confusion is solvable with clear badge language (see Linear status dots + Trigger.dev pipeline badges)
- **Don't layer features on top of legacy UI** — IAM/CLM felt bolted on. MyTypist builds from scratch with the Document OS architecture.
