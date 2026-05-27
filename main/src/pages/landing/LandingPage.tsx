import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

/* ── Document mockup ── */
function DocMockup() {
  return (
    <div className="lp-mockup">
      {/* App chrome bar */}
      <div className="lp-mockup-chrome">
        <div className="lp-mockup-dots">
          <div className="lp-mockup-dot" style={{ background: '#ff5f57' }} />
          <div className="lp-mockup-dot" style={{ background: '#febc2e' }} />
          <div className="lp-mockup-dot" style={{ background: '#28c840' }} />
        </div>
        <span className="lp-mockup-chrome-label">MyTypist · Studio — Acceptance Letter</span>
      </div>

      {/* Body: mini sidebar + doc canvas */}
      <div className="lp-mockup-body">
        {/* Mini sidebar */}
        <div className="lp-mockup-sidebar">
          {[
            { color: 'var(--color-accent)', width: 18 },
            { color: 'rgba(255,255,255,0.15)', width: 14 },
            { color: 'rgba(255,255,255,0.1)', width: 16 },
            { color: 'rgba(255,255,255,0.1)', width: 12 },
            { color: 'rgba(255,255,255,0.1)', width: 15 },
          ].map((bar, i) => (
            <div
              key={i}
              className="lp-mockup-sidebar-icon"
              style={{ background: bar.color, width: bar.width }}
            />
          ))}
        </div>

        {/* Document canvas area */}
        <div className="lp-mockup-doc-area">
          <div className="lp-mockup-paper">
            {/* Doc header */}
            <div className="lp-mockup-doc-header">
              <div className="lp-mockup-doc-logo-row">
                <div className="lp-mockup-doc-logo-bar" style={{ width: 3, height: 18 }} />
                <div className="lp-mockup-doc-logo-text" />
              </div>
              <div className="lp-mockup-doc-title">Acceptance Letter</div>
              <div className="lp-mockup-doc-meta">REF · 2026/ACC/001 · CONFIDENTIAL</div>
            </div>

            {/* Doc body */}
            <div className="lp-mockup-doc-body">
              <div className="lp-mockup-doc-line">
                Dear <span className="lp-mockup-field lp-mockup-field--filled">Student Name</span>,
              </div>
              <div className="lp-mockup-doc-line" style={{ lineHeight: 1.6 }}>
                We are pleased to inform you that your application to the{' '}
                <span className="lp-mockup-field">Department</span> programme
                at <span className="lp-mockup-field">Institution Name</span> has
                been reviewed and accepted.
              </div>
              <div className="lp-mockup-doc-line">
                Your student ID is <span className="lp-mockup-field">Student ID</span> and
                your matriculation date is <span className="lp-mockup-field">Start Date</span>.
              </div>
              <div className="lp-mockup-doc-line" style={{ marginTop: 6, lineHeight: 1.6 }}>
                Please report to the Academic Affairs office no later than{' '}
                <span className="lp-mockup-field">Deadline Date</span> to complete
                your registration formalities.
              </div>

              {/* Signature block */}
              <div className="lp-mockup-sig-block">
                <div className="lp-mockup-sig-line">
                  <div style={{ height: 14 }} />
                  <div className="lp-mockup-sig-rule" />
                  <div className="lp-mockup-sig-label">Authorized Officer</div>
                </div>
                <div className="lp-mockup-sig-line">
                  <div style={{ height: 14 }} />
                  <div className="lp-mockup-sig-rule" />
                  <div className="lp-mockup-sig-label">Date</div>
                </div>
              </div>

              {/* Inspector hint */}
              <div style={{
                marginTop: 14,
                padding: '8px 10px',
                background: 'rgba(108,71,255,0.05)',
                border: '1px solid rgba(108,71,255,0.15)',
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                gap: 4,
              }}>
                <div style={{ fontSize: 8, fontWeight: 600, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Inspector · Student Name</div>
                {[
                  ['Value', 'John Adeyemi Okafor'],
                  ['Type', 'Text · Required'],
                  ['Status', '✓ Filled'],
                ].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 8, color: '#6b6b63' }}>
                    <span style={{ color: '#9e9e94' }}>{k}</span>
                    <span style={{ color: k === 'Status' ? '#059669' : '#3a3a35', fontFamily: k === 'Value' ? 'inherit' : 'var(--font-mono)' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline bar */}
      <div className="lp-mockup-pipeline">
        {[
          { label: 'Draft', state: 'done' },
          { label: 'Fidelity Check', state: 'done' },
          { label: 'Approval', state: 'active' },
          { label: 'Sign', state: 'neutral' },
          { label: 'Archive', state: 'neutral' },
        ].map((s, i, arr) => (
          <div key={s.label} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={`lp-mockup-stage lp-mockup-stage--${s.state}`}>
              <div
                className="lp-mockup-stage-dot"
                style={{
                  background: s.state === 'done'
                    ? 'var(--color-status-complete)'
                    : s.state === 'active'
                      ? 'var(--color-accent)'
                      : 'var(--color-border)',
                }}
              />
              {s.label}
            </div>
            {i < arr.length - 1 && <div className="lp-mockup-stage-arrow" />}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Feature rows data ── */
const features = [
  {
    label: 'Creator Studio',
    desc: 'Three-panel workspace: form inputs left, live document preview center, placeholder inspector right. 100% WYSIWYG fidelity between preview and final output. Keyboard-first — Cmd+K for every action.',
    proof: 'Referenced from Figma\'s panel architecture and Acrobat\'s megaverb toolbar. No step wizards, no guided flow unless requested.',
  },
  {
    label: 'Document Pipeline',
    desc: 'Documents don\'t get "created" — they move through connected operational stages. Draft → Fidelity Check → Approval → Sign → Archive. Status badges, per-document error isolation, clean retry UX.',
    proof: 'Pattern derived from Trigger.dev\'s workflow visualization. Color-coded 6px status dots, not colored banners.',
  },
  {
    label: 'E-Signatures',
    desc: 'Drag-and-drop signature field placement in the document canvas. Sequential and parallel workflows. No account required for recipients to sign. Every event timestamped in a binding audit trail.',
    proof: 'DocuSign gets recipient UX right (no login). Notarize gets it wrong (forces account creation). We follow DocuSign\'s pattern.',
  },
  {
    label: 'Document Vault',
    desc: 'Every save creates a version. Full diff history, full-text search across documents, templates, and their contents. 100+ hand-crafted templates — quality over quantity.',
    proof: 'Notion-style versioned block storage. No 500-template dump — 100 curated, each hand-built with correct typography and structure.',
  },
  {
    label: 'Command Center',
    desc: 'Real-time pipeline throughput, latency, and fidelity gauges. Team management with role-based permissions. Bulk operations and compliance checks — not charts, clean data tables.',
    proof: 'Dub-style admin layout. Linear-style data tables. No "chart vomit" dashboards — operational data only.',
  },
]

/* ── Pricing features ── */
const proFeatures = [
  'Unlimited documents',
  'Up to 10 team seats',
  '50 curated templates',
  'Sequential e-signatures',
  'Pipeline: Draft → Check → Approve → Export',
  'Email support · 4h response',
  '14-day full-featured trial',
]

const entFeatures = [
  'Everything in Professional',
  'Unlimited team seats',
  '100+ curated + custom templates',
  'Sequential + parallel + signature templates',
  'Full pipeline incl. Sign + Archive',
  'SSO / SAML integration',
  'Audit logging + custom branding',
  'Full API read/write access',
  'Dedicated support · 1h response',
]

/* ── Competitor positioning ── */
const competitors = [
  { name: 'DocuSign', issue: 'AI widget disrupting core signing workflow. Users actively leaving. Legacy architecture, pricing creep, bolted-on modules.' },
  { name: 'PandaDoc', issue: 'Rigid step-by-step guided flow. Fights you on image formatting. Expensive tiers with capability fragmentation.' },
  { name: 'SignWell', issue: 'No mobile app. Only 2 native integrations. Confusing multi-party routing. Free tier creates hard limits.' },
  { name: 'Notarize / Proof', issue: 'Forces account creation for recipients. $25–75 per-transaction pricing. State law fragmentation.' },
  { name: 'Local platforms', issue: 'Each solves one piece (doc gen OR e-sign OR notarization). No integrated pipeline. Basic web UX.' },
  { name: 'Generic builders', issue: 'Template UX with no precision formatting. AI content generation as main value. No audit trail, no pipeline.' },
]

/* ─────────────────────────────────────────────────── */

export function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>

      {/* ══ HEADER ══ */}
      <header className="lp-header">
        <Link to="/" className="lp-header-brand">
          <div className="lp-header-logo">M</div>
          <span className="lp-header-name">MyTypist</span>
        </Link>

        <nav className="lp-header-nav">
          {['Templates', 'Pricing', 'Blog', 'FAQ', 'Support'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>

        <div className="lp-header-actions">
          <Link to="/auth" style={{ textDecoration: 'none' }}>
            <button className="btn btn--ghost btn--sm">Sign in</button>
          </Link>
          <Link to="/studio" style={{ textDecoration: 'none' }}>
            <button className="btn btn--primary btn--sm">Start free trial</button>
          </Link>
        </div>
      </header>

      {/* ══ HERO — Split: copy left, document right ══ */}
      <section className="lp-hero">
        {/* Left: copy */}
        <div className="lp-hero-copy">
          <div className="lp-hero-eyebrow">
            <div className="lp-hero-eyebrow-dot" />
            Document Operating System
          </div>

          <h1 className="lp-hero-headline">
            The workspace where<br />
            documents become <em>infrastructure</em>.
          </h1>

          <p className="lp-hero-sub">
            Precision drafting with formatting fidelity guarantees.
            Binding e-signatures with full audit trails.
            Automated pipelines from first draft to archived record.
            Built for teams that can't afford to get documents wrong.
          </p>

          <div className="lp-hero-actions">
            <Link to="/studio" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 36, padding: '0 18px', fontSize: 13 }}>
                Start free trial
                <ArrowRight size={13} style={{ marginLeft: 6 }} />
              </button>
            </Link>
            <button className="btn btn--secondary" style={{ height: 36, padding: '0 18px', fontSize: 13 }}>
              Request demo
            </button>
          </div>

          <div className="lp-hero-trust">
            {[
              'No credit card required · 14-day full trial',
              'No account needed for document recipients',
              'SOC 2 compliant · AES-256 encryption',
            ].map((item) => (
              <div key={item} className="lp-hero-trust-item">
                <div className="lp-hero-trust-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right: live document preview mockup */}
        <div className="lp-hero-preview">
          <DocMockup />
        </div>
      </section>

      {/* ══ PIPELINE STRIP ══ */}
      <div className="lp-pipeline-strip">
        <div className="lp-pipeline-inner">
          {[
            { num: '01', name: 'Draft', desc: 'Block-based editor with live preview. Precision formatting.' },
            { num: '02', name: 'Fidelity Check', desc: 'Automated layout verification. 100% preview-to-output parity.' },
            { num: '03', name: 'Approval', desc: 'Route to reviewers with role-based permissions.' },
            { num: '04', name: 'Sign', desc: 'Drag-and-drop e-signature with binding audit trail.' },
            { num: '05', name: 'Archive', desc: 'Versioned vault storage with full-text search.' },
          ].map((stage, i) => (
            <div key={stage.name} className={`lp-pipeline-stage${i === 1 ? ' lp-pipeline-stage--active' : ''}`}>
              <div className="lp-pipeline-stage-top">
                <span className="lp-pipeline-stage-num">{stage.num}</span>
                <span className="lp-pipeline-stage-name">{stage.name}</span>
              </div>
              <div className="lp-pipeline-stage-desc">{stage.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ FEATURES ══ */}
      <section className="lp-section" id="features">
        <div className="lp-section-eyebrow">Capabilities</div>
        <h2 className="lp-section-heading">
          Built for document operations,<br />not document creation.
        </h2>

        {features.map((f) => (
          <div key={f.label} className="lp-features-row">
            <div className="lp-features-label">{f.label}</div>
            <div className="lp-features-desc">{f.desc}</div>
            <div className="lp-features-proof">{f.proof}</div>
          </div>
        ))}
      </section>

      {/* ══ POSITIONING ══ */}
      <section className="lp-pos-strip" id="comparison">
        <div className="lp-section" style={{ paddingBottom: 0 }}>
          <div className="lp-section-eyebrow">Why not the others</div>
          <h2 className="lp-section-heading" style={{ marginBottom: 24 }}>
            Every competitor solves one part.<br />We replaced the whole workflow.
          </h2>
        </div>
        <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 40px 80px' }}>
          <div className="lp-pos-grid">
            {competitors.map((c) => (
              <div key={c.name} className="lp-pos-cell">
                <div className="lp-pos-cell-product">{c.name}</div>
                <div className="lp-pos-cell-issue">{c.issue}</div>
              </div>
            ))}
          </div>
          <div className="lp-pos-mytypist">
            <div className="lp-pos-mytypist-label">MyTypist</div>
            <div className="lp-pos-mytypist-text">
              No AI gimmicks. No per-transaction fees. No account required for recipients.
              A pipeline model where documents are managed as operational artifacts —
              from precision draft to archived, signed record. The same approach
              Linear took to issue tracking. We're taking it to document operations.
            </div>
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section className="lp-section" id="pricing">
        <div className="lp-section-eyebrow">Pricing</div>
        <h2 className="lp-section-heading">
          Subscription pricing. No per-document fees.<br />No surprise costs.
        </h2>

        <div className="lp-pricing-grid">
          {/* Professional */}
          <div className="lp-plan">
            <div className="lp-plan-tier">Professional</div>
            <div className="lp-plan-price">
              <span className="lp-plan-amount">$49</span>
              <span className="lp-plan-per">/month</span>
            </div>
            <div className="lp-plan-local">or ₦49,000/month · billed monthly</div>
            <div className="lp-plan-cta">
              <Link to="/studio" style={{ textDecoration: 'none', display: 'block' }}>
                <button className="btn btn--secondary" style={{ width: '100%', height: 34, fontSize: 13 }}>
                  Start 14-day trial
                </button>
              </Link>
            </div>
            <div className="lp-plan-divider" />
            <div className="lp-plan-features">
              {proFeatures.map((f) => (
                <div key={f} className="lp-plan-feature">
                  <Check size={12} className="lp-plan-feature-check" style={{ color: 'var(--color-status-complete)' }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise */}
          <div className="lp-plan lp-plan--enterprise">
            <div className="lp-plan-tier">Enterprise</div>
            <div className="lp-plan-price">
              <span className="lp-plan-amount">$149</span>
              <span className="lp-plan-per">/month</span>
            </div>
            <div className="lp-plan-local">or ₦149,000/month · billed monthly</div>
            <div className="lp-plan-cta">
              <button
                className="btn btn--primary"
                style={{ width: '100%', height: 34, fontSize: 13 }}
              >
                Contact sales
              </button>
            </div>
            <div className="lp-plan-divider" />
            <div className="lp-plan-features">
              {entFeatures.map((f) => (
                <div key={f} className="lp-plan-feature">
                  <Check size={12} className="lp-plan-feature-check" style={{ color: 'var(--color-accent)' }} />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Add-on note */}
        <div style={{
          marginTop: 16,
          padding: '14px 20px',
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderTop: 'none',
          borderRadius: '0 0 var(--radius-xs) var(--radius-xs)',
          fontSize: 12,
          color: 'var(--color-text-tertiary)',
          lineHeight: 1.5,
        }}>
          Enterprise add-ons: dedicated infrastructure, custom integrations, on-premise hosting (regulated industries). Annual billing available — contact sales for pricing.
        </div>
      </section>

      {/* ══ CTA STRIP ══ */}
      <section className="lp-cta-strip">
        <h2 className="lp-cta-headline">
          Documents are legal infrastructure.<br />Treat them like it.
        </h2>
        <p className="lp-cta-sub">
          14-day trial, all features, no card required. Your first complete pipeline in under 2 minutes.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 }}>
          <Link to="/studio" style={{ textDecoration: 'none' }}>
            <button className="btn btn--primary" style={{ height: 36, padding: '0 20px', fontSize: 13 }}>
              Start free trial
              <ArrowRight size={13} style={{ marginLeft: 6 }} />
            </button>
          </Link>
          <button
            className="btn btn--ghost"
            style={{ height: 36, padding: '0 20px', fontSize: 13, color: '#6b6b63', border: '1px solid rgba(255,255,255,0.1)' }}
          >
            View demo
          </button>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="lp-footer">
        <div className="lp-footer-inner">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div className="lp-header-logo">M</div>
              <span className="lp-header-name">MyTypist</span>
            </div>
            <p className="lp-footer-brand-desc">
              Document Operating System.<br />
              Precision drafting. Binding signatures.<br />
              Automated pipelines.
            </p>
            <div style={{ marginTop: 16, display: 'flex', gap: 10 }}>
              {['SOC 2', 'GDPR', 'HIPAA-ready'].map((badge) => (
                <div key={badge} style={{
                  padding: '2px 8px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: 10,
                  fontWeight: 600,
                  color: 'var(--color-text-tertiary)',
                  letterSpacing: '0.3px',
                }}>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <div className="lp-footer-links">
            {[
              { heading: 'Product', links: ['Studio', 'Templates', 'Pipeline', 'Signatures', 'Vault', 'Pricing'] },
              { heading: 'Company', links: ['About', 'Blog', 'FAQ', 'Support', 'Become a Partner'] },
              { heading: 'Legal', links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy'] },
              { heading: 'Developers', links: ['API Docs', 'Webhooks', 'Status', 'Changelog'] },
            ].map((col) => (
              <div key={col.heading}>
                <div className="lp-footer-col-heading">{col.heading}</div>
                <div className="lp-footer-col-links">
                  {col.links.map((link) => (
                    <a key={link} href="#" className="lp-footer-link">{link}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lp-footer-bottom">
          <span className="lp-footer-bottom-text">© 2026 MyTypist. All rights reserved.</span>
          <span className="lp-footer-bottom-text">Built for precision. Not for decoration.</span>
        </div>
      </footer>
    </div>
  )
}
