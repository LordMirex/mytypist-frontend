# MyTypist Frontend Tools Guide

## 1. shadcn/ui Components

### Adding new components
```bash
npx shadcn@latest add <component>   # e.g., button, card, dialog, dropdown-menu
```

### Installed components
- `button` — v2 base-nova style (`@base-ui/react/button`)
- `card` — Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter
- `dialog` — Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter
- `dropdown-menu` — DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, etc.

### Key patterns
- Import: `import { Button } from "@/components/ui/button"`
- Use `cn()` for conditional classes: `cn("base", className)`
- Variants via `cva()` pattern (see button.tsx)
- CSS variables in globals.css via `@theme inline` block

## 2. Efferd Blocks

### Registry
- Added to `components.json` as `@efferd`
- Registry URL: `https://efferd.com/r/{name}.json`

### Installing blocks
```bash
npx shadcn@latest add @efferd/<block-name>
```

### Installed blocks
- `@efferd/hero-1` — Created: header, hero, mobile-nav, logo-cloud, logos-section, portal, use-scroll hook

### Available blocks (from efferd.com)
- hero-1, hero-2, hero-3, features-1, features-2, pricing-1, etc.

## 3. 21st.dev Components

### Installing
```bash
npx shadcn@latest add https://21st.dev/r/<author>/<component>
```

### Note
- Registry returned 500 on test — may be transient. Try again later.
- Example: `npx shadcn@latest add https://21st.dev/r/Codehagen/hero-with-image-saas`

## 4. UI/UX Pro Max (Python)

### Quick start
```bash
# Search style guide for a query
python3 scripts/search.py "document editor" --domain style

# Generate full design system
python3 scripts/search.py "document processing SaaS" --design-system -p "MyTypist"

# Search by stack
python3 scripts/search.py "SaaS dashboard" --stack shadcn

# Persist design system (creates design-system/<slug>/MASTER.md)
python3 scripts/search.py "document editor" --design-system -p "MyTypist" --persist

# Add page-specific overrides
python3 scripts/search.py "dashboard" --design-system -p "MyTypist" --persist --page "dashboard"
```

### Available domains
style, color, chart, landing, product, ux, typography, icons, react, web, google-fonts

### Available stacks
react, nextjs, vue, svelte, astro, swiftui, react-native, flutter, nuxtjs, nuxt-ui, html-tailwind, shadcn, jetpack-compose, threejs, angular, laravel, javafx

### Persisted design system
`design-system/mytypist/MASTER.md` — Global rules + color palette + typography + effects

## 5. Awesome Design References

- `design-references/stripe-design.md` — Stripe's design language (colors, typography, components)
- Source: https://github.com/VoltAgent/awesome-design-md

## 6. Custom UI Components (Pre-shadcn)

These coexist with shadcn and are not yet replaced:
`Avatar.tsx`, `Badge.tsx`, `Button.tsx` (old), `Checkbox.tsx`, `Input.tsx`, `Modal.tsx`, `Select.tsx`, `Skeleton.tsx`, `Switch.tsx`, `Table.tsx`, `Tabs.tsx`, `Toast.tsx`

## Workflow for new features

1. Check `design-system/mytypist/MASTER.md` for global design rules
2. Search ui-ux-pro-max for best practices: `python3 scripts/search.py "<query>" --domain <domain>`
3. Use shadcn components when available (prefer over custom)
4. Use Efferd blocks for page scaffolding (header, hero, features sections)
5. Use 21st.dev for specialized components
6. Use Stripe design reference for premium B2B patterns
7. Always use `cn()` for className merging
8. Respect prefers-reduced-motion
