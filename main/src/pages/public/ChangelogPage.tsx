import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

type EntryType = 'added' | 'improved' | 'fixed'

const entries: { version: string; date: string; current?: boolean; changes: { type: EntryType; text: string }[] }[] = [
  {
    version: 'v1.0.3',
    date: 'June 2026',
    current: true,
    changes: [
      { type: 'added',    text: 'Annual billing option (20% off) with per-plan savings shown on pricing toggle' },
      { type: 'added',    text: 'Testimonials section on landing page with early access feedback' },
      { type: 'added',    text: 'Home dashboard with action surface: needs-attention, continue-working, and getting-started checklist' },
      { type: 'improved', text: 'Fidelity check now highlights individual field errors inline in Studio' },
      { type: 'improved', text: 'Pipeline stage transitions are animated with status color changes' },
      { type: 'fixed',    text: 'PDF export line spacing was 1px off from the live preview in certain Instrument Serif headings' },
      { type: 'fixed',    text: 'Sign page recipient link expiry timer was counting from send, not from first view' },
    ],
  },
  {
    version: 'v1.0.2',
    date: 'May 2026',
    changes: [
      { type: 'added',    text: 'Template Builder now supports conditional fields (show field only if another field has a specific value)' },
      { type: 'added',    text: 'Vault: full-text search across all document field values, not just document names' },
      { type: 'added',    text: 'Parallel signature flows: notify all signers simultaneously and track each completion independently' },
      { type: 'improved', text: 'Studio field panel now shows required vs optional status inline' },
      { type: 'improved', text: 'Command palette (⌘K) now indexes all Vault documents for quick navigation' },
      { type: 'fixed',    text: 'Currency field formatter was dropping trailing zeros in ₦ values (e.g. ₦4,200,000.00 showed as ₦4,200,000)' },
    ],
  },
  {
    version: 'v1.0.1',
    date: 'April 2026',
    changes: [
      { type: 'added',    text: 'Sequential signature routing: signers are notified in order and each must complete before the next is notified' },
      { type: 'added',    text: 'Audit trail export: download the full event log for any document as a CSV' },
      { type: 'added',    text: 'Admin Console: document moderation queue for Enterprise plan workspaces' },
      { type: 'improved', text: 'Mobile signing view defaults to form-fill mode, not the full PDF viewer' },
      { type: 'improved', text: 'Vault list now shows the number of pending actions on each document as a badge' },
      { type: 'fixed',    text: 'Approval routing email notifications were not sending for multi-reviewer workflows' },
      { type: 'fixed',    text: 'Date field in documents was saving in ISO format instead of the configured locale format' },
    ],
  },
  {
    version: 'v1.0.0',
    date: 'March 2026',
    changes: [
      { type: 'added', text: 'Studio: structured field editor + live PDF preview + contextual inspector, 1:1 fidelity guarantee' },
      { type: 'added', text: 'Pipeline: 5-stage document workflow (Draft → Fidelity → Approval → Sign → Archive)' },
      { type: 'added', text: 'Vault: versioned document archive with diff comparison and tamper-evident audit trail' },
      { type: 'added', text: '100+ document templates for Nigerian business contexts (employment, NDAs, service agreements, and more)' },
      { type: 'added', text: 'E-signature flow for recipients: no account creation, tokenized secure link, mobile-first' },
      { type: 'added', text: 'Free plan (₦0/month), Pro (₦75,000), and Enterprise (₦230,000) tiers — all priced in Naira' },
    ],
  },
]

const typeLabel: Record<EntryType, string> = {
  added:    'Added',
  improved: 'Improved',
  fixed:    'Fixed',
}

const typeColor: Record<EntryType, string> = {
  added:    'var(--color-status-progress)',
  improved: 'var(--color-status-pending)',
  fixed:    'var(--color-status-complete)',
}

const typeBg: Record<EntryType, string> = {
  added:    'var(--color-status-progress-bg)',
  improved: 'var(--color-status-pending-bg)',
  fixed:    'var(--color-status-complete-bg)',
}

export function ChangelogPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PublicHeader />

      <section className="lp-section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="lp-section-inner">
          <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: 12 }}>
            Changelog.
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: 480 }}>
            Every release, documented. What changed and why.
          </p>
        </div>
      </section>

      <section className="lp-section" style={{ paddingTop: 48 }}>
        <div className="lp-section-inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {entries.map((entry, ei) => (
              <div
                key={entry.version}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '120px 1fr',
                  gap: 32,
                  paddingBottom: 48,
                  borderBottom: ei < entries.length - 1 ? '1px solid var(--color-border)' : 'none',
                  marginBottom: ei < entries.length - 1 ? 48 : 0,
                }}
              >
                {/* Left: version + date */}
                <div style={{ paddingTop: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)', letterSpacing: '-0.2px' }}>
                      {entry.version}
                    </span>
                    {entry.current && (
                      <span style={{ fontSize: 9, fontWeight: 700, color: 'var(--color-status-complete)', background: 'var(--color-status-complete-bg)', padding: '1px 5px', borderRadius: 3, letterSpacing: 0.2 }}>
                        Current
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{entry.date}</div>
                </div>

                {/* Right: change list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {entry.changes.map((change, ci) => (
                    <div key={ci} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <span style={{
                        fontSize: 10, fontWeight: 700,
                        color: typeColor[change.type],
                        background: typeBg[change.type],
                        padding: '2px 6px', borderRadius: 3,
                        flexShrink: 0, marginTop: 2,
                        letterSpacing: 0.2, lineHeight: 1.4,
                      }}>
                        {typeLabel[change.type]}
                      </span>
                      <span style={{ fontSize: 14, lineHeight: 1.65, color: 'var(--color-text-secondary)' }}>
                        {change.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
