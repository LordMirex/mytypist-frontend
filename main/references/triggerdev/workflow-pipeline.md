# Trigger.dev — Workflow Visualization & State

Source: trigger.dev/docs + trigger.dev/product + gh triggerdotdev/trigger.dev

## What
Run lifecycle with visual status states: Delayed → Queued → Dequeued → Executing → (Waiting) → Completed / Canceled / Failed / Timed out / Crashed. Status badges with distinct visual language per state. Real-time updates via hooks.

## Why It Works
- Clear visual language per state: green (completed/success), red (failed/error), amber (timed out/warning), gray (pending/canceled), animated pulse (executing/in progress)
- Pipeline-style horizontal flow with connected nodes shows progression
- Run metadata for progress tracking: percentage, current step, intermediate results
- Realtime updates via React hooks: `useRealtimeRun` for status changes, `useRealtimeStream` for continuous data
- Tags (1-128 char strings) for filtering and organizing runs
- Parent/root task relationships: child tasks can update parent metadata (useful for batch document processing)

## Key Details
- Run states color-coded: Completed (green check), Failed (red X), Canceled (gray strikethrough), Timed out (amber warning), Executing (blue/animated), Queued (gray/outline)
- Metadata: up to 256KB of structured data attached to a run, updated while task runs
- Progress tracking via `metadata.set({ progress: 0.5, step: "processing" })`
- Replay failed runs with same or different payload
- Attempt tracking: each run can have multiple attempts with configurable retry
- Side menu: incident status panel at bottom for system health
- Table-based run inspector with sortable columns
- Dashboard widgets: line chart, bar chart, area chart, table, single value

## Apply To MyTypist
- Workflow pipeline: Upload → Detect → Validate → Generate → Export as horizontal connected nodes
- Status badges per stage: pending (gray/outline), active (accent pulse), complete (green check), error (red X)
- Progress tracking via percentage + current step label
- Batch processing: parent job with child items, each with individual status + retry
- Realtime status updates in the frontend (Trigger.dev-style hooks or polling)
- Retry button on failed items with attempt count
