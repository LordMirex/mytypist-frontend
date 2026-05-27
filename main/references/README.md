# MyTypist — Design References & Competitive Analysis

> **10 design observation files + 5 competitor analysis files.**  
> Every rule in `docs/PRODUCT_UI_SYSTEM.md` is grounded in the design reference files.  
> Competitive insights inform pricing, positioning, and what NOT to build.  
> See `docs/PRODUCT_UI_SYSTEM.md §0` for the full reference hierarchy and evidence table.

## Structure

```
references/
├── linear/                     # 4 files: sidebar, radius, command palette, color
│   ├── sidebar-and-navigation.md
│   ├── border-radius-and-elevation.md
│   ├── command-palette.md
│   └── color-and-status-dots.md
├── notion/                     # 2 files: block architecture, typography
│   ├── block-architecture.md
│   └── typography-and-spacing.md
├── acrobat/                    # 1 file: document toolbar & megaverbs
│   └── document-operations-and-toolbar.md
├── figma/                      # 1 file: panel & inspector architecture
│   └── panel-architecture.md
├── triggerdev/                 # 1 file: workflow pipeline & status badges
│   └── workflow-pipeline.md
├── dub/                        # 1 file: admin/settings/data tables/billing
│   └── admin-and-settings.md
└── competitors/                # 5 files: market and competitive analysis
    ├── pandadoc-analysis.md    # Proposal + eSign combo, guided flow UX
    ├── docusign-analysis.md    # Market leader, IAM platform, AI pushback
    ├── signwell-analysis.md    # Simplest eSign UI, "adding friction" insight
    ├── notarize-analysis.md    # RON leader, identity verification stack
    └── african-market-analysis.md  # Nigerian market, trust problem, local players
```

## How To Use

1. **Reading (all agents)**: Start here before any design/UX decision. Each file contains:
   - `## What` — specific pattern observed in the reference product
   - `## Why It Works` — why the pattern is effective
   - `## Apply To MyTypist` — concrete translation to this project

2. **Contributing**: To add a new observation:
   - Save in the appropriate folder
   - Follow the `## What / ## Why It Works / ## Apply To MyTypist` format
   - Update the file listing above
   - Cross-reference in `docs/PRODUCT_UI_SYSTEM.md`
