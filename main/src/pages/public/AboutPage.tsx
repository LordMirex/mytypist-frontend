import { Link } from 'react-router-dom'
import { ArrowRight, FileText, GitBranch, Archive, Shield, Zap, Target } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const principles = [
  {
    icon: Target,
    title: 'Precision over convenience',
    desc: 'Every formatting decision, field type, and validation rule exists because documents have legal and operational weight. We don\'t round corners for the sake of a smoother demo.',
  },
  {
    icon: GitBranch,
    title: 'Systems over features',
    desc: 'We don\'t ship isolated features. We ship coherent pipeline stages that fit together. Adding a signature step should not require a different tool or another login.',
  },
  {
    icon: Zap,
    title: 'Operational clarity',
    desc: 'Every team member should know exactly where a document is, who touched it last, and what happens next. Not from asking. From looking at the system.',
  },
  {
    icon: Shield,
    title: 'Audit by default',
    desc: 'Tamper-evident logs aren\'t an enterprise add-on. They\'re the foundation. Every action on every document is cryptographically timestamped from day one.',
  },
]

const timeline = [
  { year: '2023', event: 'Founded after watching an HR team lose six weeks of onboarding contracts to formatting errors, broken email chains, and a shared drive that nobody fully trusted.' },
  { year: '2024 Q1', event: 'First production version: a two-stage draft-and-sign tool used internally by three enterprise beta customers.' },
  { year: '2024 Q3', event: 'Expanded to full 5-stage pipeline. First business customers onboarded.' },
  { year: '2025', event: '100+ template library. Vault and versioned document archive launched.' },
  { year: '2026', event: 'Parallel signature flows, REST API, and encrypted audit trails.' },
]

export function AboutPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />

      {/* Hero */}
      <section style={{
        padding: '88px 20px 72px',
        background: 'var(--color-bg)',
        backgroundImage: 'transparent',
        textAlign: 'center',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="lp-hero-eyebrow" style={{ margin: '0 auto 22px', justifyContent: 'center' }}>
            <div className="lp-hero-eyebrow-dot" />
            Our story
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.08, color: 'var(--color-text-primary)', marginBottom: 20 }}>
            Every organization runs on documents.<br />
            Most of them run <em style={{ fontStyle: 'normal', color: 'var(--color-accent)' }}>badly.</em>
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.7, color: 'var(--color-text-secondary)', maxWidth: 560, margin: '0 auto' }}>
            MyTypist was built to end the five-tool document workflow · Word, email, DocuSign,
            shared drive, prayer. One pipeline. One source of truth. One audit trail.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section style={{ padding: '72px 20px', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div>
            <div className="lp-section-eyebrow">Why we built this</div>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--color-text-primary)', lineHeight: 1.2, marginTop: 10, marginBottom: 20 }}>
              We watched an HR team lose six weeks of onboarding contracts to a formatting error.
            </h2>
          </div>
          {[
            'An employment contract batch had the wrong clause applied to the compensation section. Forty contracts reprinted, re-reviewed, re-sent. No audit trail. No version history. No way to know which copies had already reached candidates.',
            'The tools weren\'t wrong · Word is fine for writing. Email is fine for communication. But none of them were designed to be infrastructure. Stringing them together creates invisible failure points. When something breaks, nobody knows where, when, or by how much.',
            'MyTypist is what we wished existed then. A system that treats document creation the same way engineering teams treat code · with structure, validation, versioning, and an explicit pipeline from first input to final archived record.',
            'We build for every organization that creates documents under operational pressure · law firms, HR teams, financial institutions, operations teams. The ones who can\'t afford formatting errors. The ones who need every signature to be traceable.',
          ].map((para, i) => (
            <p key={i} style={{ fontSize: 15, lineHeight: 1.78, color: 'var(--color-text-secondary)' }}>{para}</p>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section style={{ padding: '72px 20px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>Our principles</div>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--color-text-primary)', lineHeight: 1.15, marginBottom: 44 }}>
            What we believe about document infrastructure.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 2 }}>
            {principles.map((p, i) => (
              <div key={p.title} style={{
                padding: '28px 32px',
                border: '1px solid var(--color-border)',
                background: 'var(--color-surface)',
                borderRadius: i === 0 ? '10px 10px 0 0' : i === principles.length - 1 ? '0 0 10px 10px' : 0,
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(108,71,255,0.08)',
                  border: '1px solid rgba(108,71,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 16,
                }}>
                  <p.icon size={16} color="var(--color-accent)" />
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 8, letterSpacing: -0.2 }}>
                  {p.title}
                </div>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '72px 20px', borderBottom: '1px solid var(--color-border)', background: 'var(--color-surface)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>Timeline</div>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--color-text-primary)', marginBottom: 40 }}>
            How we got here.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', borderLeft: '2px solid var(--color-border)', paddingLeft: 28, gap: 32 }}>
            {timeline.map(item => (
              <div key={item.year} style={{ position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: -35, top: 4,
                  width: 8, height: 8, borderRadius: '50%',
                  background: 'var(--color-accent)',
                  border: '2px solid var(--color-bg)',
                }} />
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-accent)', marginBottom: 6 }}>
                  {item.year}
                </div>
                <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-secondary)' }}>{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we build with */}
      <section style={{ padding: '72px 20px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>The product</div>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--color-text-primary)', marginBottom: 24 }}>
            One pipeline. Five stages. Zero gaps.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--color-text-secondary)', marginBottom: 32 }}>
            Creator Studio → Fidelity Check → Approval → Sign → Archive. Every document moves
            through this sequence. Stage transitions require explicit clearance. Nothing skips.
            Nothing gets lost. The audit trail is complete by design.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {[
              { icon: FileText,  label: 'Draft with layout guarantees'   },
              { icon: GitBranch, label: 'Structured approval routing'     },
              { icon: Archive,   label: 'Versioned, searchable archive'   },
            ].map(({ icon: Icon, label }) => (
              <div key={label} style={{
                display: 'flex', alignItems: 'center', gap: 8,
                padding: '8px 14px',
                border: '1px solid var(--color-border)',
                borderRadius: 6,
                background: 'var(--color-surface)',
                fontSize: 13,
                color: 'var(--color-text-secondary)',
              }}>
                <Icon size={13} color="var(--color-accent)" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="lp-cta">
        <div className="lp-cta-inner">
          <h2 className="lp-cta-headline">
            Ready to fix your document pipeline?
          </h2>
          <p className="lp-cta-sub">
            14-day full-feature trial. No card. No usage limits.
          </p>
          <div className="lp-cta-actions">
            <Link to="/auth">
              <button className="btn btn--primary" style={{ height: 46, padding: '0 28px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                Start free trial
                <ArrowRight size={15} />
              </button>
            </Link>
            <Link to="/pricing">
              <button style={{
                height: 46, padding: '0 28px', fontSize: 14, fontWeight: 500,
                color: 'rgba(255,255,255,0.5)',
                border: '1px solid rgba(255,255,255,0.12)',
                background: 'rgba(255,255,255,0.05)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
              }}>
                View pricing
              </button>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
