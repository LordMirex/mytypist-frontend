import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowRight, Check, FileText, GitBranch, PenSquare, Archive, BarChart3 } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

function useScrollReveal() {
  useEffect(() => {
    // Mark <html> so CSS enables the animation (progressive enhancement)
    document.documentElement.classList.add('js-scroll-ready')

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('lp-in-view') }),
      { threshold: 0.05, rootMargin: '0px 0px 60px 0px' }
    )
    document.querySelectorAll('.lp-reveal').forEach((el) => observer.observe(el))

    // Fallback: force-reveal everything after 1.2s in case observer never fires
    const fallback = setTimeout(() => {
      document.querySelectorAll('.lp-reveal').forEach((el) => el.classList.add('lp-in-view'))
    }, 1200)

    return () => {
      observer.disconnect()
      clearTimeout(fallback)
      document.documentElement.classList.remove('js-scroll-ready')
    }
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

/* ── Animated Doc Mockup ── */
const STAGE_COLORS: Record<string, string> = {
  done: '#059669', active: '#6C47FF', neutral: '#d1d0c8'
}

const SIDE_FIELDS = [
  { label: 'Employer',  value: 'Acme Corp Ltd',    showAt: 1 },
  { label: 'Employee',  value: 'Sarah Mitchell',   showAt: 1 },
  { label: 'Job Title', value: 'Product Designer', showAt: 2 },
  { label: 'Salary',    value: '₦4,200,000 / yr',  showAt: 2 },
  { label: 'Location',  value: 'Lagos, Nigeria',   showAt: 2 },
]

const STAGES = ['Draft', 'Fidelity', 'Approval', 'Sign', 'Archive']

function getStageState(stageName: string, phase: number): 'done' | 'active' | 'neutral' {
  const idx = STAGES.indexOf(stageName)
  if (idx < phase) return 'done'
  if (idx === phase) return 'active'
  return 'neutral'
}

function AnimatedDocMockup() {
  const [phase, setPhase] = useState(0)

  useEffect(() => {
    const durations = [1600, 1400, 1400, 2200]
    const t = setTimeout(() => setPhase(p => (p + 1) % 4), durations[phase])
    return () => clearTimeout(t)
  }, [phase])

  const docTerms = [
    { k: 'Employer',      v: phase >= 1 ? 'Acme Corp Ltd'    : null },
    { k: 'Employee',      v: phase >= 1 ? 'Sarah Mitchell'   : null },
    { k: 'Job Title',     v: phase >= 2 ? 'Product Designer' : null },
    { k: 'Annual Salary', v: phase >= 2 ? '₦4,200,000/yr'   : null },
    { k: 'Start Date',    v: 'January 15, 2026' },
  ]

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
        <div style={{ width: 112, flexShrink: 0, padding: '10px 8px', gap: 6, background: '#f7f6f3', borderRight: '1px solid #e8e7e4', overflowY: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 7, fontWeight: 700, color: '#9e9e94', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 }}>Fields</div>

          {SIDE_FIELDS.map(f => {
            const filled = phase >= f.showAt
            const typing = phase === f.showAt - 1
            return (
              <div key={f.label} style={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                <div style={{ fontSize: 6.5, color: '#9e9e94', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 0.3 }}>{f.label}</div>
                <div style={{
                  fontSize: 7.5, padding: '2px 5px', borderRadius: 2,
                  background: filled ? 'rgba(5,150,105,0.1)' : typing ? 'rgba(108,71,255,0.08)' : 'rgba(0,0,0,0.03)',
                  border: `1px solid ${filled ? 'rgba(5,150,105,0.25)' : typing ? 'rgba(108,71,255,0.3)' : 'rgba(0,0,0,0.07)'}`,
                  transition: 'all 0.3s ease',
                  display: 'flex', alignItems: 'center', gap: 1,
                  overflow: 'hidden',
                }}>
                  <AnimatePresence mode="wait" initial={false}>
                    {filled ? (
                      <motion.span
                        key="val"
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ color: '#059669', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
                      >
                        {f.value}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="ph"
                        exit={{ opacity: 0 }}
                        style={{ color: '#b0a0e8', display: 'flex', alignItems: 'center', gap: 1, whiteSpace: 'nowrap' }}
                      >
                        Enter {f.label}…
                        {typing && (
                          <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                            style={{ display: 'inline-block', width: 1, height: 7, background: '#6C47FF', borderRadius: 1, marginLeft: 1 }}
                          />
                        )}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )
          })}

          <div style={{ marginTop: 'auto', paddingTop: 4 }}>
            <motion.div
              animate={{ background: phase >= 2 ? '#6C47FF' : '#c8c7c2' }}
              transition={{ duration: 0.4 }}
              style={{ height: 20, borderRadius: 3, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'default' }}
            >
              <span style={{ fontSize: 7, fontWeight: 700, color: phase >= 2 ? '#fff' : '#888', letterSpacing: 0.3 }}>▶ Preview</span>
            </motion.div>
          </div>
        </div>

        {/* Right: Document preview */}
        <div className="lp-mockup-doc-area">
          <div className="lp-mockup-paper">
            {/* Letterhead */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 10, paddingBottom: 8, borderBottom: '2px solid #6C47FF' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginBottom: 2 }}>
                  <div style={{ width: 3, height: 13, background: '#6C47FF', borderRadius: 1 }} />
                  <span style={{ fontSize: 9.5, fontWeight: 800, color: '#1a1a17', letterSpacing: -0.2 }}>ACME CORP LTD</span>
                </div>
                <div style={{ fontSize: 6.5, color: '#9e9e94' }}>123 Business Avenue, Lagos, Nigeria</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 7, fontWeight: 600, color: '#6C47FF' }}>EMPLOYMENT AGREEMENT</div>
                <div style={{ fontSize: 6, color: '#9e9e94', marginTop: 1 }}>REF: HR/2026/00183</div>
              </div>
            </div>

            {/* Terms */}
            <div style={{ marginBottom: 9 }}>
              <div style={{ fontSize: 7.5, fontWeight: 700, color: '#1a1a17', marginBottom: 5, textTransform: 'uppercase', letterSpacing: 0.3 }}>Terms of Employment</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {docTerms.map(({ k, v }) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0', borderBottom: '1px solid #f0efe9' }}>
                    <span style={{ fontSize: 7, color: '#6b6b63' }}>{k}</span>
                    <AnimatePresence mode="wait" initial={false}>
                      {v ? (
                        <motion.span
                          key="v"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          style={{ fontSize: 7, fontWeight: 600, color: '#1a1a17' }}
                        >
                          {v}
                        </motion.span>
                      ) : (
                        <motion.span key="ph" style={{ fontSize: 7, fontStyle: 'italic', color: '#c0b4f0' }}>
                          —
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </div>

            {/* Signatures */}
            <div style={{ paddingTop: 8, borderTop: '1px dashed rgba(108,71,255,0.25)', display: 'flex', gap: 12 }}>
              <div style={{ flex: 1 }}>
                <div style={{ height: 14, marginBottom: 2, display: 'flex', alignItems: 'flex-end' }}>
                  <AnimatePresence initial={false}>
                    {phase >= 3 && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: 'easeOut' }}
                        style={{ fontSize: 11, fontFamily: 'Georgia, serif', color: '#1a1a17', fontStyle: 'italic', lineHeight: 1 }}
                      >
                        J. Okafor
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div style={{ height: 1, background: 'rgba(0,0,0,0.12)', marginBottom: 2 }} />
                <div style={{ fontSize: 6.5, color: '#9e9e94', textTransform: 'uppercase', letterSpacing: 0.3 }}>Authorized Signatory</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ height: 14, marginBottom: 2, display: 'flex', alignItems: 'flex-end' }}>
                  <AnimatePresence initial={false}>
                    {phase >= 3 && (
                      <motion.span
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25, ease: 'easeOut' }}
                        style={{ fontSize: 11, fontFamily: 'Georgia, serif', color: '#6C47FF', fontStyle: 'italic', lineHeight: 1 }}
                      >
                        S. Mitchell
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div style={{ height: 0, borderTop: '1px dashed rgba(108,71,255,0.35)', marginBottom: 2 }} />
                <motion.div
                  animate={{ color: phase >= 3 ? '#6C47FF' : '#b0a0e8' }}
                  transition={{ duration: 0.4 }}
                  style={{ fontSize: 6.5, textTransform: 'uppercase', letterSpacing: 0.3 }}
                >
                  {phase >= 3 ? 'Employee — Signed ✓' : 'Awaiting Employee…'}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pipeline status bar */}
      <div className="lp-mockup-pipeline">
        {STAGES.map((label, i, arr) => {
          const state = getStageState(label, phase)
          const color = STAGE_COLORS[state]
          return (
            <div key={label} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                <motion.div
                  animate={{ background: color }}
                  transition={{ duration: 0.4 }}
                  style={{ width: 5, height: 5, borderRadius: '50%', flexShrink: 0 }}
                />
                <motion.span
                  animate={{ color, fontWeight: state === 'active' ? 700 : 400 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontSize: 8.5, whiteSpace: 'nowrap' }}
                >
                  {label}
                </motion.span>
              </div>
              {i < arr.length - 1 && (
                <div style={{ width: 12, height: 1, background: '#e0dfd8', flexShrink: 0, margin: '0 2px' }} />
              )}
            </div>
          )
        })}
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
          <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.8px', marginBottom: 20, fontFamily: 'var(--font-mono)' }}>
            Document Operating System · Nigeria
          </div>
          <h1 className="lp-hero-headline">
            From blank page<br />
            to signed document<br />
            <em>in minutes.</em>
          </h1>
          <p className="lp-hero-sub">
            Pick a template, fill your details, get a perfectly formatted PDF.
            Route for approval and collect legally binding signatures —
            all in one place, zero per-transaction fees.
          </p>
          <div className="lp-hero-actions">
            <Link to="/templates" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 48, padding: '0 28px', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                Create a document free
                <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <button className="btn btn--secondary" style={{ height: 48, padding: '0 24px', fontSize: 14 }}>
                Start free trial
              </button>
            </Link>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 24, flexWrap: 'wrap' }}>
            {[
              '₦0 to start',
              'No credit card',
              '14-day free trial',
            ].map(text => (
              <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, fontWeight: 500, color: 'var(--color-text-tertiary)' }}>
                <span style={{ color: '#059669', fontWeight: 800, fontSize: 11 }}>✓</span>
                {text}
              </div>
            ))}
          </div>

          <TrustTicker />
        </div>
        <div className="lp-hero-preview" style={{ display: 'flex', flex: '1', background: '#EAE7FF', alignItems: 'center', justifyContent: 'center', padding: '32px 28px' }}>
          <AnimatedDocMockup />
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
          <h2 className="lp-section-heading lp-reveal">Five capabilities.<br />One coherent system.</h2>
          <div className="lp-features-table">
            {features.map((f, i) => (
              <div key={f.num} className={`lp-feature-row lp-reveal lp-reveal--delay-${i % 2}`}>
                <div className="lp-feature-row-left">
                  <div className="lp-feature-header">
                    <span className="lp-feature-num">{f.num}</span>
                    <span className="lp-feature-name">{f.name}</span>
                  </div>
                  <span className="lp-feature-tag">{f.tag}</span>
                </div>
                <div className="lp-feature-row-right">
                  <p className="lp-feature-desc" style={{ paddingLeft: 0 }}>{f.desc}</p>
                </div>
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
            <div className="lp-plan" style={{ borderTop: '3px solid var(--color-accent)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 14, right: 20, fontSize: 9, fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.6px', fontFamily: 'var(--font-mono)' }}>Most used</div>
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
