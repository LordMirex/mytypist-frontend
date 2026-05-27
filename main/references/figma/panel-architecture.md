# Figma — Panel Architecture & Properties Inspector

Source: help.figma.com + figma.com/blog (UI3 design story)

## What
Three-panel structure: left navigation (layers + assets), right properties (design + prototype), bottom toolbar. Panel widths are resizable. Minimize UI collapses both side panels with Shift+\.

## Why It Works
- Left panel = structure (what exists in the file). Right panel = properties (what's selected). This separation is intuitive: browse → select → inspect.
- Resizable panels adapt to user's current task — wider for complex component editing, narrower for layout work
- Property panel groups by workflow: Layout (width/height/auto layout), Position (x/y/constraints), then styling
- Context-dependent: properties change based on what's selected (text vs. frame vs. component)

## Key Details
- Left sidebar tabs: File (layers, pages) + Assets (components from libraries)
- Right sidebar tabs: Design + Prototype
- Property labels toggle: turn on to see control names, turn off for compact view
- Actions menu in toolbar for AI tools, plugins, widgets
- Zoom controls bottom-right: percentage + dropdown (100%, fit, selection)
- Toolbar at bottom (UI3 change) — frees top space for content
- Floating panels were explored but rejected (slowed users down) — fixed panels with resize won
- Canvas background: dark grid or solid color
- 200 hand-drawn icons by Tim Van Damme — distinctive, expressive

## Apply To MyTypist
- Left panel: document pages/thumbnails + template assets
- Right panel: inspector with contextual properties (typography, formatting, validation)
- Resizable panel widths
- Context-dependent right panel: changes based on what's selected (document vs. placeholder vs. signature field)
- Property labels toggle for compact/verbose mode
- Bottom toolbar for document tools (cursor, text, shape, signature, comment)
