# Linear — Command Palette (Cmd+K)

Source: direct product observation + gunpowderlabs.com + blakecrosley.com

## What
Fuzzy-searchable modal that puts every action at your fingertips. Triggered by Cmd+K. Shows shortcuts next to every option so users learn keys organically.

## Why It Works
- Universal entry point: you don't need to remember WHERE something is, just WHAT it's called
- Context-aware: available actions change based on current page
- Training tool: shows keyboard shortcut next to every action, so users progressively learn direct keys
- Non-intrusive: if you don't use it, it doesn't clutter the interface
- Recent actions surface first

## Key Details
- Pill-shaped trigger button in header: small, subtle, shows "Cmd+K" as hint
- Fuzzy search across issues, projects, commands, people
- Sections: Recent, Issues, Commands — clear grouping
- Each result shows: icon + label + keyboard shortcut (right-aligned)
- "Create new issue" appears as top action when no search query
- Keyboard shortcuts are mnemonic: S = Status, P = Priority, A = Assign

## Apply To MyTypist
- Cmd+K as primary navigation method — not just search, but ACTION
- Every action in the app must be accessible via Cmd+K
- Show keyboard shortcuts next to every command
- Context-aware: different commands when in document editor vs. template gallery
- Pill trigger in global chrome: "Search or run command...  ⌘K"
