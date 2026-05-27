import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, X } from 'lucide-react'

/* ─────────────────────────────────────
   Document Mockup — the visual hero
   ───────────────────────────────────── */
function DocMockup() {
  return (
    <div className="lp-mockup">
      <div className="lp-mockup-chrome">
        <div className="lp-mockup-dots">
          <div className="lp-mockup-dot" style={{ background: '#ff5f57' }} />
          <div className="lp-mockup-dot" style={{ background: '#febc2e' }} />
          <div className="lp-mockup-dot" style={{ background: '#28c840' }} />
        </div>
        <span className="lp-mockup-chrome-label">MyTypist · Studio — Acceptance Letter</span>
      </div>

      <div className="lp-mockup-body">
        {/* Mini sidebar */}
        <div className="lp-mockup-sidebar">
          {[
            { w: 18, color: 'var(--color-accent)' },
            { w: 14, color: 'rgba(255,255,255,0.15)' },
            { w: 16, color: 'rgba(255,255,255,0.1)' },
            { w: 12, color: 'rgba(255,255,255,0.08)' },
            { w: 15, color: 'rgba(255,255,255,0.08)' },
          ].map((b, i) => (
            <div key={i} style={{ width: b.w, height: 3, borderRadius: 2, background: b.color }} />
          ))}
        </div>

        {/* Document canvas */}
        <div className="lp-mockup-doc-area">
          <div className="lp-mockup-paper">
            <div className="lp-mockup-doc-header">
              <div className="lp-mockup-doc-logo-row">
                <div style={{ width: 3, height: 18, background: 'var(--color-accent)', borderRadius: 2 }} />
                <div style={{ width: 52, height: 6, borderRadius: 1, background: '#1a1a17' }} />
              </div>
              <div className="lp-mockup-doc-title">Acceptance Letter</div>
              <div className="lp-mockup-doc-meta">REF · 2026/ACC/001 · CONFIDENTIAL</div>
            </div>

            <div className="lp-mockup-doc-body">
              <div className="lp-mockup-doc-line">
                Dear <span className="lp-mockup-field lp-mockup-field--filled">Student Name</span>,
              </div>
              <div className="lp-mockup-doc-line">
                We are pleased to inform you that your application to the{' '}
                <span className="lp-mockup-field">Department</span> programme
                at <span className="lp-mockup-field">Institution Name</span>{' '}
                has been reviewed and accepted.
              </div>
              <div className="lp-mockup-doc-line">
                Your student ID is <span className="lp-mockup-field">Student ID</span> and
                your start date is <span className="lp-mockup-field">Start Date</span>.
              </div>
              <div className="lp-mockup-doc-line">
                Report to Academic Affairs no later than{' '}
                <span className="lp-mockup-field">Deadline Date</span>.
              </div>

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

              <div className="lp-mockup-inspector">
                <div className="lp-mockup-inspector-label">Inspector · Student Name</div>
                {[
                  ['Value', 'John Adeyemi Okafor'],
                  ['Type', 'Text · Required'],
                  ['Status', '✓ Filled'],
                ].map(([k, v]) => (
                  <div key={k} className="lp-mockup-inspector-row">
                    <span style={{ color: '#9e9e94' }}>{k}</span>
                    <span style={{ color: k === 'Status' ? '#059669' : '#3a3a35' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline status bar */}
      <div className="lp-mockup-pipeline">
        {[
          { label: 'Draft', s: 'done' },
          { label: 'Fidelity', s: 'done' },
          { label: 'Approval', s: 'active' },
          { label: 'Sign', s: 'neutral' },
          { label: 'Archive', s: 'neutral' },
        ].map((st, i, arr) => (
          <div key={st.label} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={`lp-mockup-stage lp-mockup-stage--${st.s}`}>
              <div
                className="lp-mockup-stage-dot"
                style={{
                  background:
                    st.s === 'done' ? 'var(--color-status-complete)'
                    : st.s === 'active' ? 'var(--color-accent)'
                    : 'var(--color-border)',
                }}
              />
              {st.label}
            </div>
            {i < arr.length - 1 && <div className="lp-mockup-stage-arrow" />}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────────────────────────
   Data
   ───────────────────────────────────── */
const navLinks = ['Templates', 'Pricing', 'Blog', 'FAQ', 'Support']

const stats = [
  { num: '4,000', unit: '+', label: 'Documents generated daily' },
  { num: '< 2', unit: 'min', label: 'Draft to signed PDF' },
  { num: '100', unit: '+', label: 'Hand-crafted templates' },
  { num: '99.9', unit: '%', label: 'Formatting fidelity rate' },
]

const pipeline = [
  { num: '01', name: 'Draft', desc: 'Block editor, live preview, 100% WYSIWYG fidelity.', state: 'done' },
  { num: '02', name: 'Fidelity Check', desc: 'Automated layout verification before any action.', state: 'active' },
  { num: '03', name: 'Approval', desc: 'Route to reviewers with role-based permissions.', state: '' },
  { num: '04', name: 'Sign', desc: 'Drag-and-drop e-signature, binding audit trail.', state: '' },
  { num: '05', name: 'Archive', desc: 'Versioned vault with full-text search.', state: '' },
]

const features = [
  {
    num: '01',
    name: 'Creator Studio',
    desc: 'Three-panel workspace — form inputs, live document preview center, placeholder inspector right. 100% WYSIWYG parity between preview and final output. Keyboard-driven: Cmd+K for everything.',
    tag: 'Figma architecture · Acrobat toolbar',
  },
  {
    num: '02',
    name: 'Document Pipeline',
    desc: 'Documents move through connected operational stages. Draft → Fidelity Check → Approval → Sign → Archive. Per-document error isolation, clean retry, status badges — not colored banners.',
    tag: 'Trigger.dev pipeline model',
  },
  {
    num: '03',
    name: 'E-Signatures',
    desc: 'Drag-and-drop placement in the document canvas. Sequential and parallel flows. No account required for recipients. Every event timestamped in a binding, tamper-evident audit trail.',
    tag: 'DocuSign recipient UX · no forced login',
  },
  {
    num: '04',
    name: 'Document Vault',
    desc: 'Every save creates a version. Full diff history, full-text search across documents and their contents. 100+ curated templates — each hand-built with correct typography and legal structure.',
    tag: 'Notion block versioning',
  },
  {
    num: '05',
    name: 'Command Center',
    desc: 'Real-time pipeline throughput, fidelity gauges, team management, role-based permissions, bulk ops. Clean data tables — not charts. Operational data, not analytics theater.',
    tag: 'Dub admin layout · Linear data tables',
  },
]

const competitors = [
  { name: 'DocuSign', issue: 'AI widget disrupting core signing UX. Legacy architecture. Pricing creep and bolted-on modules users never asked for.' },
  { name: 'PandaDoc', issue: 'Rigid step-by-step guided flow. Fights you on image formatting. Expensive tiers with capability fragmentation.' },
  { name: 'SignWell', issue: 'No mobile app. Only 2 native integrations. Confusing multi-party routing. Free tier creates hard blockers.' },
  { name: 'Notarize / Proof', issue: 'Forces account creation for recipients. $25–75 per-transaction pricing. State law fragmentation kills scale.' },
  { name: 'Local platforms', issue: 'Each solves one piece — doc gen OR e-sign OR notarization. No integrated pipeline. No audit trail.' },
  { name: 'Generic builders', issue: 'Template UX with no precision formatting. AI content generation as the main value prop. No pipeline model.' },
]

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
  'Sequential + parallel signature flows',
  'Full pipeline incl. Sign + Archive',
  'SSO / SAML · Audit logging · Custom branding',
  'Full API read/write access',
  'Dedicated support · 1h response',
]

/* ─────────────────────────────────────
   Page
   ───────────────────────────────────── */
export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>

      {/* ══ HEADER ══ */}
      <header className="lp-header">
        <Link to="/" className="lp-header-brand" onClick={() => setMenuOpen(false)}>
          <div className="lp-header-logo">M</div>
          <span className="lp-header-name">MyTypist</span>
        </Link>

        {/* Desktop nav */}
        <nav className="lp-header-nav">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="lp-header-ctas">
          <Link to="/auth" style={{ textDecoration: 'none' }}>
            <button className="btn btn--ghost btn--sm">Sign in</button>
          </Link>
          <Link to="/studio" style={{ textDecoration: 'none' }}>
            <button className="btn btn--primary btn--sm">Start free trial</button>
          </Link>
        </div>

        {/* Mobile: sign-in + hamburger */}
        <div className="lp-header-right">
          <Link to="/auth" style={{ textDecoration: 'none' }}>
            <button className="btn btn--ghost btn--sm" style={{ fontSize: 12 }}>Sign in</button>
          </Link>
          <button
            className={`lp-hamburger${menuOpen ? ' lp-hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="lp-hamburger-bar" />
            <span className="lp-hamburger-bar" />
            <span className="lp-hamburger-bar" />
          </button>
        </div>
      </header>

      {/* ══ MOBILE DRAWER ══ */}
      {menuOpen && (
        <nav className="lp-mobile-nav">
          <div className="lp-mobile-nav-links">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="lp-mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <div className="lp-mobile-nav-ctas">
            <Link to="/studio" style={{ textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
              <button className="btn btn--primary" style={{ width: '100%', height: 40, fontSize: 14 }}>
                Start free trial
                <ArrowRight size={14} style={{ marginLeft: 6 }} />
              </button>
            </Link>
            <button className="btn btn--secondary" style={{ width: '100%', height: 40, fontSize: 14 }}>
              Request demo
            </button>
          </div>
        </nav>
      )}

      {/* ══ HERO — left: copy · right: document preview ══ */}
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <div className="lp-hero-eyebrow">
            <div className="lp-hero-eyebrow-dot" />
            Document Operating System
          </div>

          <h1 className="lp-hero-headline">
            The workspace where<br />
            documents become{' '}
            <em>infrastructure</em>.
          </h1>

          <p className="lp-hero-sub">
            Precision drafting with formatting fidelity guarantees.
            Binding e-signatures with full audit trails. Automated
            pipelines from first draft to archived record. Built
            for teams that can't afford to get documents wrong.
          </p>

          <div className="lp-hero-actions">
            <Link to="/studio" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 36, padding: '0 20px', fontSize: 13 }}>
                Start free trial
                <ArrowRight size={13} style={{ marginLeft: 6 }} />
              </button>
            </Link>
            <button className="btn btn--secondary" style={{ height: 36, padding: '0 20px', fontSize: 13 }}>
              Request demo
            </button>
          </div>

          <div className="lp-hero-trust">
            {[
              'No credit card required · 14-day full trial',
              'No account needed for document recipients',
              'SOC 2 compliant · AES-256 encryption at rest',
            ].map((item) => (
              <div key={item} className="lp-hero-trust-item">
                <div className="lp-hero-trust-dot" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="lp-hero-preview">
          <DocMockup />
        </div>
      </section>

      {/* ══ STATS — dark chapter break ══ */}
      <div className="lp-stats">
        <div className="lp-stats-inner">
          {stats.map((s) => (
            <div key={s.num} className="lp-stat-cell">
              <div className="lp-stat-num">
                {s.num}<span>{s.unit}</span>
              </div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PIPELINE — connected workflow ══ */}
      <div className="lp-pipeline-strip" id="features">
        <div className="lp-pipeline-scroll">
          <div className="lp-pipeline-inner">
            {pipeline.map((stage) => (
              <div
                key={stage.name}
                className={`lp-pipeline-stage${stage.state === 'active' ? ' lp-pipeline-stage--active' : stage.state === 'done' ? ' lp-pipeline-stage--done' : ''}`}
              >
                <div className="lp-pipeline-top">
                  <div
                    className="lp-pipeline-dot"
                    style={{
                      background:
                        stage.state === 'done' ? 'var(--color-status-complete)'
                        : stage.state === 'active' ? 'var(--color-accent)'
                        : 'var(--color-border)',
                    }}
                  />
                  <span className="lp-pipeline-num">{stage.num}</span>
                  <span className="lp-pipeline-name">{stage.name}</span>
                </div>
                <div className="lp-pipeline-desc">{stage.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FEATURES — numbered editorial table ══ */}
      <section className="lp-section" style={{ background: 'var(--color-surface)' }}>
        <div className="lp-section-inner">
          <div className="lp-section-eyebrow">Capabilities</div>
          <h2 className="lp-section-heading">
            Built for document operations,<br />
            not document creation.
          </h2>

          <div className="lp-features-table">
            {features.map((f) => (
              <div key={f.num} className="lp-feature-row">
                {/* Mobile: inline header. Desktop: left column */}
                <div className="lp-feature-row-left">
                  <div className="lp-feature-header">
                    <span className="lp-feature-num">{f.num}</span>
                    <span className="lp-feature-name">{f.name}</span>
                  </div>
                </div>
                <div className="lp-feature-row-right">
                  <p className="lp-feature-desc">{f.desc}</p>
                  <div className="lp-feature-tag">{f.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POSITIONING — dark bg, competitor grid ══ */}
      <section className="lp-pos lp-section" id="comparison">
        <div className="lp-section-inner">
          <div className="lp-section-eyebrow">Why not the others</div>
          <h2 className="lp-section-heading">
            Every competitor solves one part.<br />
            We replaced the whole workflow.
          </h2>

          <div className="lp-pos-grid">
            {competitors.map((c) => (
              <div key={c.name} className="lp-pos-cell">
                <div className="lp-pos-product">{c.name}</div>
                <div className="lp-pos-issue">{c.issue}</div>
              </div>
            ))}
          </div>

          <div className="lp-pos-mytypist">
            <div className="lp-pos-mytypist-label">MyTypist</div>
            <p className="lp-pos-mytypist-text">
              No AI gimmicks. No per-transaction fees. No forced recipient accounts.
              A pipeline model where documents are managed as operational artifacts —
              from precision draft to archived, signed record. The same approach
              Linear took to issue tracking, applied to document operations.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section className="lp-section" id="pricing" style={{ background: 'var(--color-bg)' }}>
        <div className="lp-section-inner">
          <div className="lp-section-eyebrow">Pricing</div>
          <h2 className="lp-section-heading">
            Flat subscription. No per-document fees.<br />
            No usage traps.
          </h2>

          <div className="lp-pricing-grid">
            {/* Professional */}
            <div className="lp-plan">
              <div className="lp-plan-tier">Professional</div>
              <div className="lp-plan-price">
                <span className="lp-plan-amount">$49</span>
                <span className="lp-plan-per">/month</span>
              </div>
              <div className="lp-plan-local">≈ ₦49,000 / month · billed monthly</div>
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
                    <Check size={12} className="lp-plan-check" style={{ color: 'var(--color-status-complete)', flexShrink: 0, marginTop: 2 }} />
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
              <div className="lp-plan-local">≈ ₦149,000 / month · billed monthly</div>
              <div className="lp-plan-cta">
                <button className="btn btn--primary" style={{ width: '100%', height: 34, fontSize: 13 }}>
                  Contact sales
                </button>
              </div>
              <div className="lp-plan-divider" />
              <div className="lp-plan-features">
                {entFeatures.map((f) => (
                  <div key={f} className="lp-plan-feature">
                    <Check size={12} className="lp-plan-check" style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{
            marginTop: 0,
            padding: '14px 20px',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderTop: 'none',
            borderRadius: '0 0 2px 2px',
            fontSize: 12,
            color: 'var(--color-text-tertiary)',
            lineHeight: 1.5,
          }}>
            Enterprise add-ons: dedicated infrastructure, custom integrations, on-premise hosting.
            Annual billing available — contact sales for pricing.
          </div>
        </div>
      </section>

      {/* ══ CTA — near-black ══ */}
      <section className="lp-cta">
        <h2 className="lp-cta-headline">
          Documents are legal infrastructure.<br />
          Treat them like it.
        </h2>
        <p className="lp-cta-sub">
          14-day trial, all features, no card required.
          First complete pipeline in under 2 minutes.
        </p>
        <div className="lp-cta-actions">
          <Link to="/studio" style={{ textDecoration: 'none' }}>
            <button className="btn btn--primary" style={{ height: 38, padding: '0 22px', fontSize: 13 }}>
              Start free trial
              <ArrowRight size={13} style={{ marginLeft: 6 }} />
            </button>
          </Link>
          <button
            className="btn btn--ghost"
            style={{ height: 38, padding: '0 22px', fontSize: 13, color: '#5a5a53', border: '1px solid rgba(255,255,255,0.08)' }}
          >
            View demo
          </button>
        </div>
      </section>

      {/* ══ FOOTER ══ */}
      <footer className="lp-footer" id="support">
        <div className="lp-footer-top">
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div className="lp-header-logo">M</div>
              <span className="lp-header-name">MyTypist</span>
            </div>
            <p className="lp-footer-brand-desc">
              Document Operating System.<br />
              Precision drafting. Binding signatures.<br />
              Automated pipelines.
            </p>
            <div className="lp-footer-badges">
              {['SOC 2', 'GDPR', 'HIPAA-ready', 'ISO 27001'].map((b) => (
                <span key={b} className="lp-footer-badge">{b}</span>
              ))}
            </div>
          </div>

          <div className="lp-footer-links">
            {[
              { heading: 'Product',    links: ['Studio', 'Templates', 'Pipeline', 'Signatures', 'Vault', 'Pricing'] },
              { heading: 'Company',    links: ['About', 'Blog', 'FAQ', 'Careers', 'Become a Partner'] },
              { heading: 'Legal',      links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Security'] },
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
