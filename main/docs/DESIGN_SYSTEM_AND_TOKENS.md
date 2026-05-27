# Design Tokens — Reference

Auto-generated from `PRODUCT_UI_SYSTEM.md`. Do not edit manually.
When implementing, extract tokens from the master spec into `src/styles/tokens.css`.

## Token Categories

### Typography
- Font stack: Inter (UI), JetBrains Mono (code), Instrument Serif (editorial)
- Scale: 11px–36px (10 sizes) with specific line-heights
- Vertical rhythm: 4px baseline grid

### Color
- Warm neutral base (not cool gray), violet-indigo accent (not blue)
- Trust green for signatures/completion, amber for caution, red for errors
- Full light + dark palettes

### Spacing
- 4px base unit, extended through 96px
- Density zones: Operational (dense), Editorial (airy), Table (scannable)

### Motion
- 50ms–350ms duration range
- `cubic-bezier(0.16, 1, 0.3, 1)` as standard curve
- Spring reserved for toggle/checkbox only

### Layout Constants
- Sidebar: 256px open, 48px collapsed
- Inspector: 280px
- Chrome height: 48px
- Toolbar height: 44px
- Reading max-width: 720px (66ch)

## Implementation Order

1. `tokens.css` — All CSS custom properties
2. `tailwind.config.ts` — Map tokens to Tailwind theme
3. `typography.css` — Type scale with rhythm utilities
4. Components — One by one, starting with navigational chrome

---

*Refer to PRODUCT_UI_SYSTEM.md for the full specification with rationale and constraints.*
