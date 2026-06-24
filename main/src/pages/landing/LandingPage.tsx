import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Check, CheckCircle2 } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

/* ─────────────────────────────────────
   Scroll reveal
   ───────────────────────────────────── */
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

/* ─────────────────────────────────────
   Doc Mockup
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
          {[{ w: 18, c: 'var(--color-accent)' }, { w: 14, c: 'rgba(255,255,255,0.15)' }, { w: 16, c: 'rgba(255,255,255,0.1)' }, { w: 12, c: 'rgba(255,255,255,0.08)' }, { w: 15, c: 'rgba(255,255,255,0.08)' }].map((b, i) => (
            <div key={i} style={{ width: b.w, height: 3, borderRadius: 2, background: b.c }} />
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
                Application to <span className="lp-mockup-field">Department</span> at <span className="lp-mockup-field">Institution</span> has been accepted.
              </div>
              <div className="lp-mockup-doc-line">
                Student ID: <span className="lp-mockup-field">Student ID</span> · Start: <span className="lp-mockup-field">Start Date</span>
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
                {[['Value', 'John Adeyemi Okafor'], ['Type', 'Text · Required'], ['Status', '✓ Filled']].map(([k, v]) => (
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
        {[{ label: 'Draft', s: 'done' }, { label: 'Fidelity', s: 'done' }, { label: 'Approval', s: 'active' }, { label: 'Sign', s: 'neutral' }, { label: 'Archive', s: 'neutral' }].map((st, i, arr) => (
          <div key={st.label} style={{ display: 'flex', alignItems: 'center' }}>
            <div className={`lp-mockup-stage lp-mockup-stage--${st.s}`}>
              <div className="lp-mockup-stage-dot" style={{ background: st.s === 'done' ? 'var(--color-status-complete)' : st.s === 'active' ? 'var(--color-accent)' : 'var(--color-border)' }} />
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
const stats = [
  { num: '12k', unit: '+', label: 'Documents processed monthly' },
  { num: '< 90', unit: 's', label: 'Template to signed PDF' },
  { num: '99.97', unit: '%', label: 'Formatting fidelity rate' },
  { num: '$0', unit: '', label: 'Per-transaction fees. Ever.' },
]

const pipeline = [
  { num: '01', name: 'Draft', desc: 'Block editor with live PDF preview. What you build is exactly what prints — guaranteed.', state: 'done' },
  { num: '02', name: 'Fidelity Check', desc: 'The system validates margins, overflow, and field errors before any reviewer sees the document. Nothing advances with unresolved errors.', state: 'active' },
  { num: '03', name: 'Approval', desc: 'Route to reviewers with role-gated access. No email threads. No PDF attachments in inboxes.', state: '' },
  { num: '04', name: 'Sign', desc: 'Recipients sign without creating an account. Sequential and parallel flows. Cryptographically timestamped.', state: '' },
  { num: '05', name: 'Archive', desc: 'Permanent, versioned, full-text searchable. Complete diff history. Tamper-evident audit log on every event.', state: '' },
]

const features = [
  { num: '01', name: 'Creator Studio', desc: 'Structured field input left. Pixel-perfect live preview center. Field inspector right. No layout surprises at print time, ever.', tag: 'Figma-level structure · zero formatting drift' },
  { num: '02', name: 'Document Pipeline', desc: 'Draft → Fidelity → Approval → Sign → Archive. Every stage requires explicit clearance. Nothing skips. Nothing gets lost.', tag: 'Five-stage workflow · built for documents' },
  { num: '03', name: 'Binding E-Signatures', desc: 'Recipients sign from a secure link — no account, no friction. Sequential and parallel flows. Every event cryptographically sealed.', tag: 'No forced recipient accounts · full chain of custody' },
  { num: '04', name: 'Versioned Vault', desc: 'Every save creates a version. Compare any two states side by side. Full-text search across all field values. 100+ templates.', tag: 'Git-style versioning · full-text indexed' },
  { num: '05', name: 'Operations Console', desc: 'Pipeline throughput, fidelity pass rates, team capacity, role assignments, and compliance audit logs in a single view.', tag: 'Operational intelligence · not analytics theater' },
]

const competitors = [
  { name: 'DocuSign',                desc: 'AI-first pivot disrupting the signing experience teams depend on. Per-envelope pricing punishes volume.' },
  { name: 'PandaDoc',                desc: 'Rigid guided flow breaks on complex structures. Formatting fights you. Capability fragmentation forces tier upgrades.' },
  { name: 'HelloSign / Dropbox Sign',desc: 'A signing tool, not a document system. No drafting, no pipeline, no vault. Acquired and deprioritized.' },
  { name: 'Adobe Acrobat Sign',      desc: 'Enterprise complexity applied to every use case. Steep learning curve. Pricing calibrated for legal departments only.' },
  { name: 'Fragmented toolchain',    desc: 'Word. Email. DocuSign. SharePoint. Four tools. Four handoff points. No visibility. Breakage is invisible until it matters.' },
  { name: 'Custom internal systems', desc: 'Engineering time diverted to document infrastructure. Maintenance burden compounds. No compliance posture.' },
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
  'Unlimited team seats · 100+ templates',
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
  useScrollReveal()

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PublicHeader />

      {/* ══ HERO ══ */}
      <section className="lp-hero" id="product">
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
            MyTypist is one structured pipeline from first draft to archived signed record.
            Formatting guarantees. Binding signatures with no per-transaction fees. Full audit trail.
          </p>
          <div className="lp-hero-actions">
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 44, padding: '0 24px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                Start free — 14 days
                <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/support" style={{ textDecoration: 'none' }}>
              <button className="btn btn--secondary" style={{ height: 44, padding: '0 24px', fontSize: 14 }}>
                Request a demo
              </button>
            </Link>
          </div>
          <div className="lp-hero-trust">
            {trustItems.map(item => (
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
              <div key={stage.name} className={`lp-pipeline-stage lp-reveal${stage.state === 'active' ? ' lp-pipeline-stage--active' : stage.state === 'done' ? ' lp-pipeline-stage--done' : ''}`}>
                <div className="lp-pipeline-top">
                  <div className="lp-pipeline-dot" style={{ background: stage.state === 'done' ? 'var(--color-status-complete)' : stage.state === 'active' ? 'var(--color-accent)' : 'var(--color-border)' }} />
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
      <section className="lp-section" style={{ background: 'var(--color-surface)' }}>
        <div className="lp-section-inner">
          <div className="lp-section-eyebrow lp-reveal">Capabilities</div>
          <h2 className="lp-section-heading lp-reveal">Five capabilities. One coherent system.</h2>
          <div className="lp-features-table">
            {features.map(f => (
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
          <h2 className="lp-section-heading lp-reveal">You know the alternatives.<br />Here's why they all fall short.</h2>
          <div className="lp-pos-grid">
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
              Archive with a complete, tamper-evident audit trail. The whole sequence, inside a single product.
            </p>
          </div>
        </div>
      </section>

      {/* ══ PRICING ══ */}
      <section className="lp-section" id="pricing" style={{ background: 'var(--color-bg)' }}>
        <div className="lp-section-inner">
          <div className="lp-section-eyebrow lp-reveal">Pricing</div>
          <h2 className="lp-section-heading lp-reveal">Flat subscription. No per-document fees.<br />No usage traps. No surprises.</h2>
          <div className="lp-pricing-grid lp-reveal">
            <div className="lp-plan">
              <div className="lp-plan-tier">Professional</div>
              <div className="lp-plan-price">
                <span className="lp-plan-amount">$49</span>
                <span className="lp-plan-per">/month</span>
              </div>
              <div className="lp-plan-local">≈ ₦75,000 / month · billed monthly</div>
              <div className="lp-plan-cta">
                <Link to="/auth" style={{ textDecoration: 'none', display: 'block' }}>
                  <button className="btn btn--secondary" style={{ width: '100%', height: 40, fontSize: 13, fontWeight: 500 }}>Start 14-day trial</button>
                </Link>
              </div>
              <div className="lp-plan-divider" />
              <div className="lp-plan-features">
                {proFeatures.map(f => (
                  <div key={f} className="lp-plan-feature">
                    <Check size={13} style={{ color: 'var(--color-status-complete)', flexShrink: 0, marginTop: 1 }} />
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
                <Link to="/support" style={{ textDecoration: 'none', display: 'block' }}>
                  <button className="btn btn--primary" style={{ width: '100%', height: 40, fontSize: 13, fontWeight: 600 }}>Contact sales</button>
                </Link>
              </div>
              <div className="lp-plan-divider" />
              <div className="lp-plan-features">
                {entFeatures.map(f => (
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
              <button style={{ height: 46, padding: '0 28px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.1)', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
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
