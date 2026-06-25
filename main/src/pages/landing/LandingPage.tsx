import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, FileText, GitBranch, PenSquare, Archive, BarChart3 } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('lp-in-view') }),
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    )
    document.querySelectorAll('.lp-reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/* ── Trust ticker ── */
const trustItems = [
  'No credit card · full feature access for 14 days',
  'Recipients sign without creating an account',
  'SOC 2 Type II · AES-256 · GDPR ready',
  'Flat subscription · zero per-document fees',
  '< 90s from template to signed PDF',
]

function TrustTicker() {
  const trackRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let pos = 0
    let raf: number
    const speed = 0.4
    function tick() {
      pos -= speed
      const half = track!.scrollWidth / 2
      if (Math.abs(pos) >= half) pos = 0
      track!.style.transform = `translateX(${pos}px)`
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [])

  const items = [...trustItems, ...trustItems]

  return (
    <div className="lp-trust-ticker-wrap">
      <div className="lp-trust-ticker-track" ref={trackRef}>
        {items.map((item, i) => (
          <span key={i} className="lp-trust-ticker-item">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Doc Mockup ── */
function DocMockup() {
  return (
    <div className="lp-mockup">
      {/* Chrome bar */}
      <div className="lp-mockup-chrome">
        <div className="lp-mockup-dots">
          <div className="lp-mockup-dot" style={{ background: '#ff5f57' }} />
          <div className="lp-mockup-dot" style={{ background: '#febc2e' }} />
          <div className="lp-mockup-dot" style={{ background: '#28c840' }} />
        </div>
        <span className="lp-mockup-chrome-label">MyTypist · Studio — Employment Agreement</span>
      </div>

      <div className="lp-mockup-body">
        {/* Left: Form panel */}
        <div className="lp-mockup-sidebar" style={{ width: 110, padding: '10px 8px', gap: 8, background: '#f7f6f3', borderRight: '1px solid #e8e7e4', overflowY: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 7, fontWeight: 700, color: '#9e9e94', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 2 }}>Fields</div>
          {[
            { label: 'Employer', val: 'Acme Corp Ltd', filled: true },
            { label: 'Employee', val: 'Sarah Mitchell', filled: true },
            { label: 'Job Title', val: 'Product Designer', filled: true },
            { label: 'Start Date', val: 'Jan 15, 2026', filled: true },
            { label: 'Salary', val: '', filled: false },
            { label: 'Location', val: '', filled: false },
          ].map(f => (
            <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <div style={{ fontSize: 6.5, color: '#9e9e94', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.3 }}>{f.label}</div>
              <div style={{
                fontSize: 7.5, padding: '2px 5px', borderRadius: 2,
                background: f.filled ? 'rgba(5,150,105,0.1)' : 'rgba(108,71,255,0.07)',
                border: `1px solid ${f.filled ? 'rgba(5,150,105,0.25)' : 'rgba(108,71,255,0.2)'}`,
                color: f.filled ? '#059669' : '#a87fff',
                fontWeight: f.filled ? 500 : 400,
                whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
              }}>
                {f.val || `Enter ${f.label}…`}
              </div>
            </div>
          ))}
          <div style={{ marginTop: 'auto', paddingTop: 6 }}>
            <div style={{ height: 22, borderRadius: 3, background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontSize: 7, fontWeight: 700, color: '#fff', letterSpacing: 0.3 }}>▶ Preview</span>
            </div>
          </div>
        </div>

        {/* Right: Document preview */}
        <div className="lp-mockup-doc-area">
          <div className="lp-mockup-paper">
            {/* Letterhead */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12, paddingBottom: 10, borderBottom: '2px solid #6C47FF' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 3 }}>
                  <div style={{ width: 3, height: 14, background: '#6C47FF', borderRadius: 1 }} />
                  <span style={{ fontSize: 10, fontWeight: 800, color: '#1a1a17', letterSpacing: -0.3 }}>ACME CORP LTD</span>
                </div>
                <div style={{ fontSize: 7, color: '#9e9e94' }}>123 Business Avenue, Lagos, Nigeria</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 7.5, fontWeight: 600, color: '#6C47FF' }}>EMPLOYMENT AGREEMENT</div>
                <div style={{ fontSize: 6.5, color: '#9e9e94', marginTop: 1 }}>REF: HR/2026/00183</div>
                <div style={{ fontSize: 6.5, color: '#9e9e94' }}>Date: January 8, 2026</div>
              </div>
            </div>

            {/* Parties */}
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: '#1a1a17', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 0.3 }}>Parties to this Agreement</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                <div style={{ background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.2)', borderRadius: 3, padding: '6px 8px' }}>
                  <div style={{ fontSize: 6.5, color: '#059669', fontWeight: 700, textTransform: 'uppercase', marginBottom: 3 }}>Employer</div>
                  <div style={{ fontSize: 8, fontWeight: 600, color: '#1a1a17' }}>Acme Corp Ltd</div>
                  <div style={{ fontSize: 6.5, color: '#6b6b63', marginTop: 1 }}>RC No. 123456</div>
                </div>
                <div style={{ background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.2)', borderRadius: 3, padding: '6px 8px' }}>
                  <div style={{ fontSize: 6.5, color: '#059669', fontWeight: 700, textTransform: 'uppercase', marginBottom: 3 }}>Employee</div>
                  <div style={{ fontSize: 8, fontWeight: 600, color: '#1a1a17' }}>Sarah Mitchell</div>
                  <div style={{ fontSize: 6.5, color: '#6b6b63', marginTop: 1 }}>Product Designer</div>
                </div>
              </div>
            </div>

            {/* Terms */}
            <div style={{ marginBottom: 10 }}>
              <div style={{ fontSize: 8, fontWeight: 700, color: '#1a1a17', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 0.3 }}>Terms of Employment</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  ['Commencement Date', 'January 15, 2026', true],
                  ['Annual Salary', <span style={{ color: '#a87fff', fontStyle: 'italic' }}>Enter Salary…</span>, false],
                  ['Location', <span style={{ color: '#a87fff', fontStyle: 'italic' }}>Enter Location…</span>, false],
                  ['Probation Period', '3 months', true],
                ].map(([k, v, filled], i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: '1px solid #f0efe9' }}>
                    <span style={{ fontSize: 7.5, color: '#6b6b63' }}>{k}</span>
                    <span style={{ fontSize: 7.5, fontWeight: filled ? 600 : 400, color: filled ? '#1a1a17' : '#a87fff' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Signatures */}
            <div className="lp-mockup-sig-block" style={{ marginTop: 8 }}>
              <div className="lp-mockup-sig-line">
                <div style={{ fontSize: 11, fontFamily: 'Georgia, serif', color: '#1a1a17', fontStyle: 'italic', lineHeight: 1 }}>J. Okafor</div>
                <div className="lp-mockup-sig-rule" />
                <div className="lp-mockup-sig-label">Authorized Signatory</div>
              </div>
              <div className="lp-mockup-sig-line">
                <div style={{ height: 14 }} />
                <div className="lp-mockup-sig-rule" style={{ borderStyle: 'dashed', borderTop: '1px dashed rgba(108,71,255,0.4)', height: 0 }} />
                <div className="lp-mockup-sig-label" style={{ color: '#a87fff' }}>Employee Signature Pending</div>
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
              <div className="lp-mockup-stage-dot" style={{
                background: st.s === 'done' ? '#059669' : st.s === 'active' ? '#6C47FF' : 'var(--color-border)'
              }} />
              {st.label}
            </div>
            {i < arr.length - 1 && <div className="lp-mockup-stage-arrow" />}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ── Data ── */
const stats = [
  { num: '12k', unit: '+', label: 'Documents processed monthly' },
  { num: '< 90', unit: 's', label: 'Template to signed PDF' },
  { num: '99.97', unit: '%', label: 'Formatting fidelity rate' },
  { num: '₦0', unit: '', label: 'Per-transaction fees. Ever.' },
]

const pipeline = [
  { num: '01', name: 'Draft', desc: 'Block editor with live PDF preview. What you build is exactly what prints — guaranteed.', state: 'done' },
  { num: '02', name: 'Fidelity Check', desc: 'The system validates margins, overflow, and field errors before any reviewer sees the document. Nothing advances with unresolved errors.', state: 'active' },
  { num: '03', name: 'Approval', desc: 'Route to reviewers with role-gated access. No email threads. No PDF attachments in inboxes.', state: 'approval' },
  { num: '04', name: 'Sign', desc: 'Recipients sign without creating an account. Sequential and parallel flows. Cryptographically timestamped.', state: 'sign' },
  { num: '05', name: 'Archive', desc: 'Permanent, versioned, full-text searchable. Complete diff history. Tamper-evident audit log on every event.', state: 'archive' },
]

const pipelineColors: Record<string, string> = {
  done:    '#059669',
  active:  '#6C47FF',
  approval:'#D97706',
  sign:    '#0891B2',
  archive: '#6B6B63',
}

const features = [
  { icon: FileText,   num: '01', name: 'Creator Studio',       desc: 'Structured field input left. Pixel-perfect live preview center. Field inspector right. No layout surprises at print time.', tag: 'Figma-level structure' },
  { icon: GitBranch,  num: '02', name: 'Document Pipeline',    desc: 'Draft → Fidelity → Approval → Sign → Archive. Every stage requires explicit clearance. Nothing skips or gets lost.', tag: 'Five-stage workflow' },
  { icon: PenSquare,  num: '03', name: 'Binding E-Signatures', desc: 'Recipients sign from a secure link — no account, no friction. Sequential and parallel flows. Cryptographically sealed.', tag: 'No recipient accounts' },
  { icon: Archive,    num: '04', name: 'Versioned Vault',      desc: 'Every save creates a version. Compare states side by side. Full-text search across all field values. 100+ templates.', tag: 'Git-style versioning' },
  { icon: BarChart3,  num: '05', name: 'Operations Console',   desc: 'Pipeline throughput, fidelity pass rates, team capacity, and compliance audit logs in a single view.', tag: 'Operational intelligence' },
]

const competitors = [
  { name: 'DocuSign',             desc: 'A signing tool that pivoted to AI. Per-envelope pricing punishes volume. No drafting, no pipeline, no vault.' },
  { name: 'PandaDoc',             desc: 'Rigid guided flow breaks on complex structures. Formatting fights you. Capability fragmentation forces tier upgrades.' },
  { name: 'Fragmented toolchain', desc: 'Word → Email → DocuSign → SharePoint. Four tools. Four handoff points. Breakage is invisible until it matters.' },
]

export function LandingPage() {
  useScrollReveal()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PublicHeader />

      {/* ══ HERO ══ */}
      <section className="lp-hero" id="product">
        <div className="lp-hero-copy">
          <h1 className="lp-hero-headline">
            From blank page<br />
            to signed document<br />
            <em>in minutes.</em>
          </h1>
          <p className="lp-hero-sub">
            Pick a template, fill your details, get a perfectly formatted PDF.
            Route for approval and collect legally binding signatures —
            all in one place, with zero per-transaction fees.
          </p>
          <div className="lp-hero-actions">
            <Link to="/templates" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 46, padding: '0 24px', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                Create a document free
                <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <button className="btn btn--secondary" style={{ height: 46, padding: '0 24px', fontSize: 14 }}>
                Start free trial
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 20, flexWrap: 'wrap' }}>
            {[
              { text: '₦0 to start' },
              { text: 'No credit card' },
              { text: '14-day free trial' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: '#059669', fontWeight: 700 }}>✓</span>
                {item.text}
              </div>
            ))}
          </div>

          <TrustTicker />
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
              <div className="lp-stat-num">{s.num}<span>{s.unit}</span></div>
              <div className="lp-stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ══ PIPELINE ══ */}
      <div className="lp-pipeline-strip">
        <div className="lp-pipeline-scroll">
          <div className="lp-pipeline-inner">
            {pipeline.map(stage => (
              <div key={stage.name} className={`lp-pipeline-stage lp-reveal lp-pipeline-stage--${stage.state}`}>
                <div className="lp-pipeline-top">
                  <div className="lp-pipeline-dot" style={{ background: pipelineColors[stage.state] || 'var(--color-border)' }} />
                  <span className="lp-pipeline-num">{stage.num}</span>
                  <span className="lp-pipeline-name" style={{ color: pipelineColors[stage.state] || 'var(--color-text-primary)' }}>{stage.name}</span>
                </div>
                <div className="lp-pipeline-desc">{stage.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ FEATURES — Numbered table rows ══ */}
      <section className="lp-section" style={{ background: 'var(--color-surface)' }}>
        <div className="lp-section-inner">
          <h2 className="lp-section-heading lp-reveal">Five capabilities. One coherent system.</h2>
          <div className="lp-features-table">
            {features.map((f, i) => (
              <div key={f.num} className={`lp-feature-row lp-reveal lp-reveal--delay-${i % 2}`}>
                <div className="lp-feature-header">
                  <span className="lp-feature-num">{f.num}</span>
                  <span className="lp-feature-name">{f.name}</span>
                  <span className="lp-feature-tag">{f.tag}</span>
                </div>
                <p className="lp-feature-desc">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ POSITIONING ══ */}
      <section className="lp-pos lp-section" id="enterprise">
        <div className="lp-section-inner">
          <h2 className="lp-section-heading lp-reveal">You know the alternatives.<br />Here's why they fall short.</h2>
          <div className="lp-pos-grid lp-pos-grid--3">
            {competitors.map(c => (
              <div key={c.name} className="lp-pos-cell lp-reveal">
                <div className="lp-pos-product">{c.name}</div>
                <div className="lp-pos-issue">{c.desc}</div>
              </div>
            ))}
          </div>
          <div className="lp-pos-mytypist lp-reveal">
            <div className="lp-pos-mytypist-label">MyTypist</div>
            <p className="lp-pos-mytypist-text">
              One system. One pipeline. One source of truth. Draft with formatting guarantees.
              Approve without email threads. Sign without forcing recipients to create accounts.
              Archive with a complete, tamper-evident audit trail.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section className="lp-section" id="pricing" style={{ background: 'var(--color-bg)' }}>
        <div className="lp-section-inner">
          <h2 className="lp-section-heading lp-reveal">Flat subscription. No surprises.</h2>
          <div className="lp-pricing-grid lp-reveal">

            {/* Free */}
            <div className="lp-plan">
              <div className="lp-plan-tier">Free</div>
              <div className="lp-plan-price">
                <span className="lp-plan-amount">₦0</span>
                <span className="lp-plan-per">/month</span>
              </div>
              <div className="lp-plan-local">Always free · no card required</div>
              <div className="lp-plan-cta">
                <Link to="/auth" style={{ textDecoration: 'none', display: 'block' }}>
                  <button className="btn btn--secondary" style={{ width: '100%', height: 40, fontSize: 13, fontWeight: 500 }}>Get started free</button>
                </Link>
              </div>
              <div className="lp-plan-divider" />
              <div className="lp-plan-features">
                {['5 documents / month', '2 e-signatures / month', 'Basic template library', 'Live preview in Studio', 'PDF export'].map(f => (
                  <div key={f} className="lp-plan-feature">
                    <Check size={13} style={{ color: 'var(--color-status-complete)', flexShrink: 0, marginTop: 1 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Pro */}
            <div className="lp-plan">
              <div className="lp-plan-tier">Professional</div>
              <div className="lp-plan-price">
                <span className="lp-plan-amount">₦75,000</span>
                <span className="lp-plan-per">/month</span>
              </div>
              <div className="lp-plan-local">Billed monthly · cancel anytime</div>
              <div className="lp-plan-cta">
                <Link to="/auth" style={{ textDecoration: 'none', display: 'block' }}>
                  <button className="btn btn--secondary" style={{ width: '100%', height: 40, fontSize: 13, fontWeight: 500 }}>Start 14-day trial</button>
                </Link>
              </div>
              <div className="lp-plan-divider" />
              <div className="lp-plan-features">
                {['Unlimited document generation', 'Up to 10 team members', '50 professionally built templates', 'Sequential e-signatures with audit trail', 'Full 5-stage operational pipeline', 'Email support · 4-hour SLA'].map(f => (
                  <div key={f} className="lp-plan-feature">
                    <Check size={13} style={{ color: 'var(--color-status-complete)', flexShrink: 0, marginTop: 1 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

            {/* Enterprise */}
            <div className="lp-plan lp-plan--enterprise">
              <div className="lp-plan-tier">Enterprise</div>
              <div className="lp-plan-price">
                <span className="lp-plan-amount">₦230,000</span>
                <span className="lp-plan-per">/month</span>
              </div>
              <div className="lp-plan-local">Billed monthly · custom contracts available</div>
              <div className="lp-plan-cta">
                <Link to="/support" style={{ textDecoration: 'none', display: 'block' }}>
                  <button className="btn btn--primary" style={{ width: '100%', height: 40, fontSize: 13, fontWeight: 600 }}>Contact sales</button>
                </Link>
              </div>
              <div className="lp-plan-divider" />
              <div className="lp-plan-features">
                {['Everything in Professional', 'Unlimited team seats · 100+ templates', 'Sequential and parallel signature flows', 'SSO / SAML · custom branding', 'Full REST API with webhook delivery', 'Dedicated account support · 1-hour SLA'].map(f => (
                  <div key={f} className="lp-plan-feature">
                    <Check size={13} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 1 }} />
                    {f}
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="lp-reveal" style={{ textAlign: 'center', marginTop: 16 }}>
            <Link to="/pricing" style={{ fontSize: 13, color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              See full comparison table
              <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ CTA ══ */}
      <section className="lp-cta">
        <div className="lp-cta-inner">
          <h2 className="lp-cta-headline lp-reveal">Your pipeline is already broken.<br />Fix it in 14 days.</h2>
          <p className="lp-cta-sub lp-reveal">Full feature access. No card required. No usage limits during trial.</p>
          <div className="lp-cta-actions lp-reveal">
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 46, padding: '0 28px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                Start free trial
                <ArrowRight size={15} />
              </button>
            </Link>
            <Link to="/support" style={{ textDecoration: 'none' }}>
              <button style={{ height: 46, padding: '0 28px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', background: 'transparent', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
                Talk to sales
              </button>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
