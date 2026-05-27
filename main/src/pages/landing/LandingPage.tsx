import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'

const featureRows = [
  {
    label: 'Creator Studio',
    description: 'A three-panel workspace where documents are built, not generated. Block-based architecture with live preview fidelity. Keyboard-first, Cmd+K for everything.',
  },
  {
    label: 'Document Pipeline',
    description: 'Documents move through connected stages — Draft → Verify → Approve → Sign → Archive. Real-time status, per-document error isolation, and clean retry UX.',
  },
  {
    label: 'E-Signatures',
    description: 'Sequential and parallel signing workflows. No account required for recipients. Every event logged with a binding audit trail. Legal-grade reliability.',
  },
  {
    label: 'Document Vault',
    description: 'Versioned storage where every save is a snapshot. Full-text search across documents, templates, and their contents. 100+ hand-crafted templates.',
  },
]

const professionalFeatures = [
  'Unlimited documents',
  'Up to 10 team seats',
  '50 curated templates',
  'Sequential e-signatures',
  'Draft → Check → Approve → Export pipeline',
  'Email support (4h response)',
  '14-day full-featured trial',
]

const enterpriseFeatures = [
  'Everything in Professional',
  'Unlimited team seats',
  '100+ curated + custom templates',
  'Sequential + parallel + signature templates',
  'Full pipeline with Sign + Archive stages',
  'SSO / SAML integration',
  'Audit logging & custom branding',
  'Full API read/write access',
  'Dedicated support (1h response)',
]

const competitors = [
  { name: 'DocuSign', issue: 'AI widget disrupting core workflow. Pricing creep. Legacy debt.' },
  { name: 'PandaDoc', issue: 'Rigid guided flow. Fights you on images. Complex for enterprise.' },
  { name: 'SignWell', issue: 'No mobile app. Two native integrations. Confusing multi-party routing.' },
  { name: 'Notarize', issue: 'Forces account creation on recipients. $25–75 per transaction.' },
]

export function LandingPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', fontFamily: 'var(--font-sans)' }}>

      {/* ── Header ── */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        padding: '0 32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginRight: 40 }}>
          <div style={{
            width: 22,
            height: 22,
            background: 'var(--color-accent)',
            borderRadius: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 12,
            flexShrink: 0,
          }}>M</div>
          <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: '-0.2px', color: 'var(--color-text-primary)' }}>
            MyTypist
          </span>
        </div>

        <nav style={{ display: 'flex', alignItems: 'center', gap: 24, flex: 1 }}>
          {['Templates', 'Pricing', 'Blog', 'FAQ', 'Support'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              style={{
                fontSize: 13,
                color: 'var(--color-text-secondary)',
                textDecoration: 'none',
                letterSpacing: '-0.1px',
              }}
            >
              {item}
            </a>
          ))}
        </nav>

        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <Link to="/auth" style={{ textDecoration: 'none' }}>
            <button className="btn btn--ghost btn--sm">Sign in</button>
          </Link>
          <Link to="/studio" style={{ textDecoration: 'none' }}>
            <button className="btn btn--primary btn--sm">Start free trial</button>
          </Link>
        </div>
      </header>

      {/* ── Hero ── */}
      <section style={{
        maxWidth: 760,
        margin: '0 auto',
        padding: '96px 32px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          height: 24,
          padding: '0 10px',
          borderRadius: 9999,
          border: '1px solid var(--color-border)',
          background: 'var(--color-surface)',
          fontSize: 11,
          fontWeight: 500,
          color: 'var(--color-text-secondary)',
          letterSpacing: '0.02em',
          marginBottom: 32,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--color-accent)', display: 'inline-block' }} />
          SOC 2 COMPLIANT · ENTERPRISE-GRADE
        </div>

        <h1 style={{
          fontSize: 52,
          fontWeight: 600,
          lineHeight: 1.08,
          letterSpacing: '-1.5px',
          color: 'var(--color-text-primary)',
          marginBottom: 20,
          fontFamily: 'var(--font-sans)',
        }}>
          The Operating System<br />
          for <span style={{ color: 'var(--color-accent)' }}>Documents</span>.
        </h1>

        <p style={{
          fontSize: 16,
          lineHeight: 1.65,
          color: 'var(--color-text-secondary)',
          maxWidth: 520,
          marginBottom: 36,
        }}>
          Precision drafting, secure signing, and automated pipelines.
          Built for teams who treat documents as infrastructure — not as afterthoughts.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 48 }}>
          <Link to="/studio" style={{ textDecoration: 'none' }}>
            <button className="btn btn--primary" style={{ height: 38, padding: '0 20px', fontSize: 14 }}>
              Start free trial
              <ArrowRight size={14} style={{ marginLeft: 6 }} />
            </button>
          </Link>
          <button className="btn btn--secondary" style={{ height: 38, padding: '0 20px', fontSize: 14 }}>
            Request demo
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {['No credit card required', '14-day free trial', 'Trusted by 10,000+ teams'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
              <Check size={12} style={{ color: 'var(--color-status-complete)', flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pipeline stage preview ── */}
      <section style={{
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        padding: '24px 32px',
        overflowX: 'auto',
      }}>
        <div style={{
          maxWidth: 960,
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          gap: 0,
        }}>
          {[
            { label: 'Draft', status: 'complete', count: '3 docs' },
            { label: 'Fidelity Check', status: 'complete', count: '3 / 3 OK' },
            { label: 'Approval', status: 'active', count: '2 pending' },
            { label: 'Sign', status: 'neutral', count: 'Queued' },
            { label: 'Archive', status: 'neutral', count: 'Waiting' },
          ].map((stage, i, arr) => (
            <div key={stage.label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <div style={{
                flex: 1,
                padding: '10px 16px',
                borderRadius: 'var(--radius-xs)',
                border: `1px solid ${stage.status === 'active' ? 'var(--color-accent-border)' : 'var(--color-border)'}`,
                background: stage.status === 'active' ? 'var(--color-accent-muted)' : 'var(--color-bg)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
                  <div style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: stage.status === 'complete'
                      ? 'var(--color-status-complete)'
                      : stage.status === 'active'
                        ? 'var(--color-accent)'
                        : 'var(--color-status-neutral)',
                    flexShrink: 0,
                  }} />
                  <span style={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: stage.status === 'active' ? 'var(--color-accent)' : 'var(--color-text-primary)',
                  }}>
                    {stage.label}
                  </span>
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', paddingLeft: 12 }}>
                  {stage.count}
                </div>
              </div>
              {i < arr.length - 1 && (
                <div style={{ width: 24, height: 1, background: 'var(--color-border)', flexShrink: 0 }} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 12 }}>
            What's inside
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.6px', color: 'var(--color-text-primary)', maxWidth: 420, lineHeight: 1.2 }}>
            Precision operations, not just document creation.
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {featureRows.map((feature, i) => (
            <div key={feature.label} style={{
              display: 'grid',
              gridTemplateColumns: '220px 1fr',
              gap: 40,
              padding: '24px 0',
              borderTop: i === 0 ? '1px solid var(--color-border)' : undefined,
              borderBottom: '1px solid var(--color-border)',
            }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', paddingTop: 1 }}>
                {feature.label}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--color-text-secondary)' }}>
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Why not competitors ── */}
      <section style={{
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        padding: '80px 32px',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ marginBottom: 48 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 12 }}>
              The landscape
            </div>
            <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.6px', color: 'var(--color-text-primary)', maxWidth: 400, lineHeight: 1.2 }}>
              Why teams leave everything else behind.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0 }}>
            {competitors.map((c, i) => (
              <div key={c.name} style={{
                padding: '20px 24px',
                borderTop: i < 2 ? '1px solid var(--color-border)' : undefined,
                borderBottom: '1px solid var(--color-border)',
                borderRight: i % 2 === 0 ? '1px solid var(--color-border)' : undefined,
              }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-tertiary)', marginBottom: 6 }}>
                  {c.name}
                </div>
                <div style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--color-text-secondary)' }}>
                  {c.issue}
                </div>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 32,
            padding: '20px 24px',
            background: 'var(--color-accent-muted)',
            border: '1px solid var(--color-accent-border)',
            borderRadius: 'var(--radius-xs)',
          }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-accent)', marginBottom: 6 }}>
              MyTypist
            </div>
            <div style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--color-text-primary)' }}>
              No AI gimmicks. No per-transaction pricing. No account required to sign. A pipeline model where documents are managed as lifecycle stages — from first draft to archived record.
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" style={{ maxWidth: 960, margin: '0 auto', padding: '80px 32px' }}>
        <div style={{ marginBottom: 48 }}>
          <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.6px', marginBottom: 12 }}>
            Pricing
          </div>
          <h2 style={{ fontSize: 28, fontWeight: 600, letterSpacing: '-0.6px', color: 'var(--color-text-primary)', lineHeight: 1.2 }}>
            Subscription pricing. No per-document fees.
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginTop: 8, lineHeight: 1.6 }}>
            14-day full-featured trial on both plans. No credit card required.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--color-border)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-xs)', overflow: 'hidden' }}>
          {/* Professional */}
          <div style={{ background: 'var(--color-surface)', padding: '32px 32px' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>
              Professional
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
              <span style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-1px', color: 'var(--color-text-primary)' }}>$49</span>
              <span style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>/month</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginBottom: 28 }}>
              or ₦49,000/month · billed monthly
            </div>
            <Link to="/studio" style={{ textDecoration: 'none' }}>
              <button className="btn btn--secondary" style={{ width: '100%', height: 36, fontSize: 13, marginBottom: 28 }}>
                Start free trial
              </button>
            </Link>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {professionalFeatures.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <Check size={13} style={{ color: 'var(--color-status-complete)', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise */}
          <div style={{ background: 'var(--color-bg)', padding: '32px 32px' }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 16 }}>
              Enterprise
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 6 }}>
              <span style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-1px', color: 'var(--color-text-primary)' }}>$149</span>
              <span style={{ fontSize: 13, color: 'var(--color-text-tertiary)' }}>/month</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginBottom: 28 }}>
              or ₦149,000/month · billed monthly
            </div>
            <button
              className="btn btn--primary"
              style={{ width: '100%', height: 36, fontSize: 13, marginBottom: 28 }}
              onClick={() => {}}
            >
              Contact sales
            </button>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {enterpriseFeatures.map((f) => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <Check size={13} style={{ color: 'var(--color-accent)', marginTop: 2, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA strip ── */}
      <section style={{
        background: 'var(--color-text-primary)',
        padding: '64px 32px',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{
            fontSize: 28,
            fontWeight: 600,
            letterSpacing: '-0.6px',
            color: '#efeeeb',
            lineHeight: 1.2,
            marginBottom: 16,
          }}>
            Ready to run documents like infrastructure?
          </h2>
          <p style={{ fontSize: 14, lineHeight: 1.6, color: '#8a8a80', marginBottom: 32 }}>
            14-day trial, full features, no credit card. Your first pipeline in under 2 minutes.
          </p>
          <Link to="/studio" style={{ textDecoration: 'none' }}>
            <button className="btn btn--primary" style={{ height: 38, padding: '0 24px', fontSize: 14 }}>
              Start free trial
              <ArrowRight size={14} style={{ marginLeft: 6 }} />
            </button>
          </Link>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer style={{
        borderTop: '1px solid var(--color-border)',
        padding: '40px 32px',
        background: 'var(--color-surface)',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <div style={{
                width: 20,
                height: 20,
                background: 'var(--color-accent)',
                borderRadius: 3,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 700,
                fontSize: 11,
              }}>M</div>
              <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>MyTypist</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', lineHeight: 1.5 }}>
              Document Operating System.
              <br />
              Built for precision.
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { heading: 'Product', links: ['Studio', 'Templates', 'Pipeline', 'Vault', 'Pricing'] },
              { heading: 'Company', links: ['About', 'Blog', 'FAQ', 'Support'] },
              { heading: 'Legal', links: ['Terms of Service', 'Privacy Policy'] },
              { heading: 'Connect', links: ['Contact', 'Become a Partner', 'API Docs'] },
            ].map((col) => (
              <div key={col.heading}>
                <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 12 }}>
                  {col.heading}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {col.links.map((link) => (
                    <a key={link} href="#" style={{ fontSize: 12, color: 'var(--color-text-secondary)', textDecoration: 'none' }}>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{
          maxWidth: 960,
          margin: '32px auto 0',
          paddingTop: 20,
          borderTop: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>
            © 2026 MyTypist. All rights reserved.
          </span>
          <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>
            SOC 2 · GDPR · HIPAA-ready
          </span>
        </div>
      </footer>
    </div>
  )
}
