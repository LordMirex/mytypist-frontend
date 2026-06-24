import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react'

/* ─────────────────────────────────────
   Scroll reveal hook
   ───────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('lp-in-view')
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    document.querySelectorAll('.lp-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ─────────────────────────────────────
   Document Mockup
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
const navLinks = ['Product', 'Pricing', 'Templates', 'Enterprise', 'Support']

const stats = [
  { num: '12k', unit: '+', label: 'Documents processed monthly' },
  { num: '< 90', unit: 's', label: 'Template to signed PDF' },
  { num: '99.97', unit: '%', label: 'Formatting fidelity rate' },
  { num: '$0', unit: '', label: 'Per-transaction fees. Ever.' },
]

const pipeline = [
  { num: '01', name: 'Draft', desc: 'Structured block editor. Live PDF preview. What you build is exactly what prints — guaranteed.', state: 'done' },
  { num: '02', name: 'Fidelity Check', desc: 'Automated layout validation catches margin breaks, overflow, and field errors before anyone else sees the document.', state: 'active' },
  { num: '03', name: 'Approval', desc: 'Route to internal reviewers with role-gated access. No email threads. No PDF attachments in inboxes.', state: '' },
  { num: '04', name: 'Sign', desc: 'Recipients sign without creating an account. Sequential and parallel flows. Every action cryptographically timestamped.', state: '' },
  { num: '05', name: 'Archive', desc: 'Permanent, versioned, full-text searchable record. Complete diff history. Tamper-evident audit log for every event.', state: '' },
]

const features = [
  {
    num: '01',
    name: 'Creator Studio',
    desc: 'A three-panel workspace purpose-built for document professionals. Structured field input left. Pixel-perfect live preview center. Field inspector right. No layout surprises at print time, ever.',
    tag: 'Figma-level structure · zero formatting drift',
  },
  {
    num: '02',
    name: 'Automated Pipeline',
    desc: 'Every document moves through an explicit operational sequence: Draft → Fidelity → Approve → Sign → Archive. Stage transitions require clearance. Nothing moves forward with unresolved errors.',
    tag: 'Linear-style workflow · applied to documents',
  },
  {
    num: '03',
    name: 'Binding E-Signatures',
    desc: 'Recipients sign from a secure link — no account, no app, no friction. Sequential and parallel flows supported. Every event is cryptographically sealed and stored in a tamper-evident audit trail.',
    tag: 'No forced recipient accounts · full chain of custody',
  },
  {
    num: '04',
    name: 'Versioned Vault',
    desc: 'Every save creates a version. Compare any two states side by side. Full-text search across all documents and their field values. 100+ professionally built templates with legally correct typography.',
    tag: 'Git-style versioning · full-text indexed',
  },
  {
    num: '05',
    name: 'Operations Console',
    desc: 'Pipeline throughput, fidelity pass rates, team capacity, role assignments, and compliance audit logs in a single view. Clean data tables. No dashboards filled with charts that nobody acts on.',
    tag: 'Operational intelligence · not analytics theater',
  },
]

const competitors = [
  { name: 'DocuSign', issue: 'AI-first pivot disrupting the signing experience teams depend on. Per-envelope pricing punishes volume. Modules keep shipping — clarity keeps eroding.' },
  { name: 'PandaDoc', issue: 'Rigid guided flow breaks on complex document structures. Formatting fights you. Capability fragmentation forces tier upgrades for basic operations.' },
  { name: 'HelloSign / Dropbox Sign', issue: 'A signing tool, not a document system. No drafting, no pipeline, no vault. Acquired and deprioritized. Product investment reflects that.' },
  { name: 'Adobe Acrobat Sign', issue: 'Enterprise complexity applied to every use case. Steep learning curve. Pricing calibrated for legal departments, not the teams that actually generate documents.' },
  { name: 'Fragmented toolchain', issue: 'Word. Email. DocuSign. SharePoint. Four tools. Four handoff points. No pipeline visibility. No shared audit record. Breakage is invisible until it matters.' },
  { name: 'Custom internal systems', issue: 'Engineering time diverted to document infrastructure. Maintenance burden compounds. No compliance posture. Every hire has to learn a bespoke tool nobody else knows.' },
]

const proFeatures = [
  'Unlimited document generation',
  'Up to 10 team members',
  '50 professionally built templates',
  'Sequential e-signatures with audit trail',
  'Full 5-stage operational pipeline',
  'Email support · 4-hour response SLA',
  '14-day full-access trial · no card required',
]

const entFeatures = [
  'Everything in Professional',
  'Unlimited team seats',
  '100+ curated + custom templates',
  'Sequential and parallel signature flows',
  'SSO / SAML · custom branding',
  'Full REST API with webhook delivery',
  'Dedicated account support · 1-hour SLA',
  'On-premise deployment option',
]

const trustItems = [
  'No credit card · full feature access for 14 days',
  'Recipients sign without creating an account',
  'SOC 2 Type II · AES-256 · GDPR ready',
]

/* ─────────────────────────────────────
   Page
   ───────────────────────────────────── */
export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  useScrollReveal()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>

      {/* ══ HEADER ══ */}
      <header className="lp-header">
        <Link to="/" className="lp-header-brand" onClick={() => setMenuOpen(false)}>
          <div className="lp-header-logo">M</div>
          <span className="lp-header-name">MyTypist</span>
        </Link>

        <nav className="lp-header-nav">
          {navLinks.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>

        <div className="lp-header-ctas">
          <Link to="/auth" style={{ textDecoration: 'none' }}>
            <button className="btn btn--ghost btn--sm">Sign in</button>
          </Link>
          <Link to="/studio" style={{ textDecoration: 'none' }}>
            <button className="btn btn--primary btn--sm">Start free trial</button>
          </Link>
        </div>

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
              <button className="btn btn--primary" style={{ width: '100%', height: 44, fontSize: 14, fontWeight: 600 }}>
                Start free trial
                <ArrowRight size={14} style={{ marginLeft: 6 }} />
              </button>
            </Link>
            <button className="btn btn--secondary" style={{ width: '100%', height: 44, fontSize: 14 }}>
              Request demo
            </button>
          </div>
        </nav>
      )}

      {/* ══ HERO ══ */}
      <section className="lp-hero">
        <div className="lp-hero-copy">
          <div className="lp-hero-eyebrow">
            <div className="lp-hero-eyebrow-dot" />
            Enterprise Document Infrastructure
          </div>

          <h1 className="lp-hero-headline">
            Stop patching your<br />
            document workflow<br />
            with <em>five different tools.</em>
          </h1>

          <p className="lp-hero-sub">
            MyTypist is one structured pipeline from first draft to
            archived signed record. Formatting guarantees on every
            output. Binding signatures with no per-transaction fees.
            Audit trail on every event.
          </p>

          <div className="lp-hero-actions">
            <Link to="/studio" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 44, padding: '0 24px', fontSize: 14, fontWeight: 600 }}>
                Start free — 14 days
                <ArrowRight size={14} style={{ marginLeft: 6 }} />
              </button>
            </Link>
            <button className="btn btn--secondary" style={{ height: 44, padding: '0 24px', fontSize: 14 }}>
              Request a demo
            </button>
          </div>

          <div className="lp-hero-trust">
            {trustItems.map((item) => (
              <div key={item} className="lp-hero-trust-item">
                <CheckCircle2 size={12} className="lp-hero-trust-check" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="lp-hero-preview">
          <DocMockup />
        </div>
      </section>

      {/* ══ STATS ══ */}
      <div className="lp-stats">
        <div className="lp-stats-inner">
          {stats.map((s, i) => (
            <div key={s.num} className={`lp-stat-cell lp-reveal lp-reveal--delay-${i}`}>
              <div className="lp-stat-num">
                {s.num}<span>{s.unit}</span>
              </div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PIPELINE ══ */}
      <div className="lp-pipeline-strip" id="product">
        <div className="lp-pipeline-scroll">
          <div className="lp-pipeline-inner">
            {pipeline.map((stage) => (
              <div
                key={stage.name}
                className={`lp-pipeline-stage lp-reveal${stage.state === 'active' ? ' lp-pipeline-stage--active' : stage.state === 'done' ? ' lp-pipeline-stage--done' : ''}`}
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

      {/* ══ FEATURES ══ */}
      <section className="lp-section" style={{ background: 'var(--color-surface)' }} id="templates">
        <div className="lp-section-inner">
          <div className="lp-section-eyebrow lp-reveal">Capabilities</div>
          <h2 className="lp-section-heading lp-reveal">
            Five capabilities.<br />
            One coherent system.
          </h2>

          <div className="lp-features-table">
            {features.map((f) => (
              <div key={f.num} className="lp-feature-row lp-reveal">
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

      {/* ══ POSITIONING ══ */}
      <section className="lp-pos lp-section" id="enterprise">
        <div className="lp-section-inner">
          <div className="lp-section-eyebrow lp-reveal">The market</div>
          <h2 className="lp-section-heading lp-reveal">
            You know the alternatives.<br />
            Here's why they all fall short.
          </h2>

          <div className="lp-pos-grid">
            {competitors.map((c) => (
              <div key={c.name} className="lp-pos-cell lp-reveal">
                <div className="lp-pos-product">{c.name}</div>
                <div className="lp-pos-issue">{c.issue}</div>
              </div>
            ))}
          </div>

          <div className="lp-pos-mytypist lp-reveal">
            <div className="lp-pos-mytypist-label">MyTypist</div>
            <p className="lp-pos-mytypist-text">
              One system. One pipeline. One source of truth. MyTypist treats
              documents as operational infrastructure — not as files you shuffle
              between tools. Draft with formatting guarantees. Approve without
              email threads. Sign without forcing your recipients to create accounts.
              Archive with a complete, tamper-evident audit trail. The whole
              sequence, inside a single product.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section className="lp-section" id="pricing" style={{ background: 'var(--color-bg)' }}>
        <div className="lp-section-inner">
          <div className="lp-section-eyebrow lp-reveal">Pricing</div>
          <h2 className="lp-section-heading lp-reveal">
            Flat subscription. No per-document fees.<br />
            No usage traps. No surprises.
          </h2>

          <div className="lp-pricing-grid lp-reveal">
            <div className="lp-plan">
              <div className="lp-plan-tier">Professional</div>
              <div className="lp-plan-price">
                <span className="lp-plan-amount">$49</span>
                <span className="lp-plan-per">/month</span>
              </div>
              <div className="lp-plan-local">≈ ₦75,000 / month · billed monthly</div>
              <div className="lp-plan-cta">
                <Link to="/studio" style={{ textDecoration: 'none', display: 'block' }}>
                  <button className="btn btn--secondary" style={{ width: '100%', height: 40, fontSize: 13, fontWeight: 500 }}>
                    Start 14-day trial
                  </button>
                </Link>
              </div>
              <div className="lp-plan-divider" />
              <div className="lp-plan-features">
                {proFeatures.map((f) => (
                  <div key={f} className="lp-plan-feature">
                    <Check size={13} className="lp-plan-check" style={{ color: 'var(--color-status-complete)', flexShrink: 0, marginTop: 1 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            <div className="lp-plan lp-plan--enterprise">
              <div className="lp-plan-tier">Enterprise</div>
              <div className="lp-plan-price">
                <span className="lp-plan-amount">$149</span>
                <span className="lp-plan-per">/month</span>
              </div>
              <div className="lp-plan-local">≈ ₦230,000 / month · billed monthly</div>
              <div className="lp-plan-cta">
                <button className="btn btn--primary" style={{ width: '100%', height: 40, fontSize: 13, fontWeight: 600 }}>
                  Contact sales
                </button>
              </div>
              <div className="lp-plan-divider" />
              <div className="lp-plan-features">
                {entFeatures.map((f) => (
                  <div key={f} className="lp-plan-feature">
                    <Check size={13} className="lp-plan-check" style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 1 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lp-reveal" style={{
            marginTop: 0,
            padding: '14px 20px',
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderTop: 'none',
            borderRadius: '0 0 var(--radius-lg) var(--radius-lg)',
            fontSize: 12,
            color: 'var(--color-text-tertiary)',
          }}>
            Both plans include a 14-day full-feature trial. Enterprise also supports custom volumes,
            custom integrations, on-premise hosting, compliance packages. Contact sales for scoped pricing.
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="lp-cta">
        <div className="lp-cta-inner">
          <h2 className="lp-cta-headline lp-reveal">
            Your pipeline is already broken.<br />
            Fix it in 14 days.
          </h2>
          <p className="lp-cta-sub lp-reveal">
            Full feature access. No card required. No usage limits during trial.
            First complete document pipeline takes under 3 minutes to set up.
          </p>
          <div className="lp-cta-actions lp-reveal">
            <Link to="/studio" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 46, padding: '0 28px', fontSize: 14, fontWeight: 600 }}>
                Start free trial
                <ArrowRight size={15} style={{ marginLeft: 6 }} />
              </button>
            </Link>
            <button
              className="btn"
              style={{
                height: 46, padding: '0 28px', fontSize: 14, fontWeight: 500,
                color: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.1)',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 'var(--radius-md)',
              }}
            >
              Talk to sales
            </button>
          </div>
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
              Enterprise document infrastructure.<br />
              Draft. Approve. Sign. Archive.<br />
              One system. Zero gaps.
            </p>
            <div className="lp-footer-badges">
              {['SOC 2 Type II', 'GDPR', 'HIPAA-ready', 'ISO 27001'].map((b) => (
                <span key={b} className="lp-footer-badge">{b}</span>
              ))}
            </div>
          </div>

          <div className="lp-footer-links">
            {[
              { heading: 'Product',    links: ['Studio', 'Templates', 'Pipeline', 'Signatures', 'Vault', 'Pricing'] },
              { heading: 'Company',    links: ['About', 'Blog', 'Careers', 'Become a Partner', 'Press'] },
              { heading: 'Legal',      links: ['Terms of Service', 'Privacy Policy', 'Cookie Policy', 'Security'] },
              { heading: 'Developers', links: ['API Reference', 'Webhooks', 'Status Page', 'Changelog'] },
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
          <span className="lp-footer-bottom-text">© 2026 MyTypist Technologies. All rights reserved.</span>
          <span className="lp-footer-bottom-text">Built for operations. Not for decoration.</span>
        </div>
      </footer>
    </div>
  )
}
