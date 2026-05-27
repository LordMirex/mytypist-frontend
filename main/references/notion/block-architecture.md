# Notion — Block Architecture & Document Surfaces

Source: direct product observation + seedflip.co + blakecrosley.com + notion.com blog

## What
Every piece of content is a block. Blocks are the atomic unit — text, images, databases, embeds, all behave identically: draggable, transformable, linkable. Blocks stack vertically with consistent spacing.

## Why It Works
- Universal block handle (⋮⋮) appears on hover — one interaction pattern for everything
- Block transformation: any block type can become any other block type (text → heading → toggle → database)
- Consistent spacing: `--block-gap: 1px` between blocks — near-zero gap creates dense but readable stack
- Blocks feel like text containers, not cards. Cards have presence. Blocks disappear.
- Border-radius: 3px — one of the smallest in any major SaaS. Barely rounded. Keeps blocks feeling editorial, not UI-ish.

## Key Details
- Block horizontal padding: 96px (creates centered column like a printed page)
- Block vertical padding: 4px (tight)
- Max content width: 900px (reading max ~720px, ~66 characters)
- `--radius: 3px` — miniscule. Notion's corners are barely rounded.
- Block handle visible on hover only — keeps default view clean
- Slash command (/) for block type selection with recently used at top

## Apply To MyTypist
- Document editor blocks with subtle hover-only controls
- 3px border-radius on document content blocks (minimal, editorial)
- Wide horizontal padding (64-96px) for document reading mode
- Near-zero gap between blocks in document stack
- NEVER use card-style containers for document content
