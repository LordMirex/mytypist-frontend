import { Link } from 'react-router-dom'
import { ArrowRight, FileText, GitBranch, PenSquare, Archive, BarChart3, Check } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const stages = [
  {
    num: '01',
    name: 'Creator Studio',
    color: '#6C47FF',
    icon: FileText,
    tagline: 'Draft with formatting guarantees.',
    desc: 'A structured block editor with live PDF preview always visible. What you build on the left is exactly what prints on the right — pixel-perfect, every time. The field inspector validates every input in real time.',
    details: ['Block-based document editor', 'Live PDF preview — WYSIWYG, guaranteed', 'Field types: text, date, currency, signature, conditional', 'Template import from DOCX', '100+ pre-built templates'],
  },
  {
    num: '02',
    name: 'Fidelity Check',
    color: '#6C47FF',
    icon: GitBranch,
    tagline: 'Validate before any human sees it.',
    desc: 'Before a document can advance to review, the system runs a full fidelity check. Layout overflow, empty required fields, margin violations, missing signatures — all flagged automatically. Nothing broken reaches your reviewers.',
    details: ['Margin and overflow validation', 'Required field completion checks', 'Typography and font-embedding audit', 'Detailed error report with field-level callouts', 'Documents blocked from advancing until resolved'],
  },
  {
    num: '03',
    name: 'Approval Routing',
    color: '#D97706',
    icon: BarChart3,
    tagline: 'Structured review — no email threads.',
    desc: 'Route documents to specific reviewers based on role and document type. Approvers see only what they need to review. Comments are attached to the document, not scattered across emails. Stage transitions require explicit clearance.',
    details: ['Role-gated reviewer access', 'Sequential and parallel approval flows', 'In-document commenting (no email)', 'Explicit approve / reject actions', 'Full approval history in audit trail'],
  },
  {
    num: '04',
    name: 'E-Signatures',
    color: '#0891B2',
    icon: PenSquare,
    tagline: 'Recipients sign. No account required.',
    desc: 'Send a secure signing link to any recipient. They sign directly in the browser — no account, no download, no friction. Every signing event is cryptographically timestamped and included in the tamper-evident audit log.',
    details: ['Secure signing link — no recipient account needed', 'Sequential and parallel signing flows', 'Signature expiry dates and automatic reminders', 'Cryptographic timestamp on every event', 'Downloadable signed PDF with audit trail bundle'],
  },
  {
    num: '05',
    name: 'Vault & Archive',
    color: '#059669',
    icon: Archive,
    tagline: 'Every document. Every version. Forever.',
    desc: 'Once signed, documents move to the Vault — versioned, full-text searchable, and permanently preserved. Compare any two versions side by side. Set retention policies. Pull a complete diff history for any document at any time.',
    details: ['Full-text search across all field values', 'Version history with side-by-side diff', 'Tamper-evident audit log on every event', 'Configurable retention policies', 'Bulk export and compliance reporting'],
  },
]

const compliance = [
  'SOC 2 Type II certified',
  'AES-256 encryption at rest and in transit',
  'GDPR compliant',
  'HIPAA package available (Enterprise)',
  'ISO 27001 package available (Enterprise)',
  'On-premise deployment option (Enterprise)',
]

export function ProductPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />

      {/* ── Hero ── */}
      <section style={{
        padding: '80px 20px 72px',
        textAlign: 'center',
        borderBottom: '1px solid var(--color-border)',
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,71,255,0.07) 0%, transparent 70%)',
      }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="lp-hero-eyebrow" style={{ margin: '0 auto 22px', justifyContent: 'center' }}>
            <div className="lp-hero-eyebrow-dot" />
            Product
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 6vw, 52px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.08, color: 'var(--color-text-primary)', marginBottom: 20 }}>
            One pipeline.<br />Five stages. Zero gaps.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.72, color: 'var(--color-text-secondary)', marginBottom: 32, maxWidth: 520, margin: '0 auto 32px' }}>
            Every document moves through a structured, stage-gated pipeline from first draft
            to archived signed record. No document skips a stage. No step gets lost.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/auth">
              <button className="btn btn--primary" style={{ height: 44, padding: '0 24px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                Start free — 14 days
                <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/templates">
              <button className="btn btn--secondary" style={{ height: 44, padding: '0 24px', fontSize: 14 }}>
                Browse templates
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Pipeline stages ── */}
      {stages.map((stage, i) => (
        <section
          key={stage.num}
          style={{
            padding: '72px 20px',
            borderBottom: '1px solid var(--color-border)',
            background: i % 2 === 0 ? 'var(--color-bg)' : 'var(--color-surface)',
          }}
        >
          <div style={{ maxWidth: 900, margin: '0 auto' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: 40,
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: `${stage.color}15`,
                    border: `1px solid ${stage.color}30`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <stage.icon size={18} color={stage.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: 10, fontWeight: 700, color: stage.color, textTransform: 'uppercase', letterSpacing: 0.6 }}>
                      Stage {stage.num}
                    </div>
                    <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.4, color: 'var(--color-text-primary)', lineHeight: 1.2 }}>
                      {stage.name}
                    </div>
                  </div>
                </div>

                <p style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.4, color: 'var(--color-text-primary)', marginBottom: 14, lineHeight: 1.3 }}>
                  {stage.tagline}
                </p>
                <p style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--color-text-secondary)', marginBottom: 28 }}>
                  {stage.desc}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 9 }}>
                  {stage.details.map(d => (
                    <div key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                      <Check size={13} style={{ color: stage.color, flexShrink: 0, marginTop: 2 }} />
                      {d}
                    </div>
                  ))}
                </div>
              </div>

              {/* Visual pipeline bar */}
              <div style={{
                padding: '20px 24px',
                background: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                borderRadius: 10,
                borderLeft: `3px solid ${stage.color}`,
              }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 16 }}>
                  Pipeline position
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexWrap: 'wrap', rowGap: 8 }}>
                  {stages.map((s, j) => (
                    <div key={s.num} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <div style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        fontSize: 11,
                        fontWeight: j === i ? 700 : 500,
                        background: j < i
                          ? `${s.color}15`
                          : j === i
                          ? stage.color
                          : 'var(--color-border)',
                        color: j < i
                          ? s.color
                          : j === i
                          ? '#fff'
                          : 'var(--color-text-quaternary)',
                        border: j === i ? `1px solid ${stage.color}` : '1px solid transparent',
                      }}>
                        {s.name}
                      </div>
                      {j < stages.length - 1 && (
                        <div style={{ width: 12, height: 1, background: j < i ? 'var(--color-border-strong)' : 'var(--color-border)', flexShrink: 0 }} />
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ── Security & Compliance ── */}
      <section style={{ padding: '72px 20px', background: 'var(--color-bg)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>Security</div>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--color-text-primary)', marginBottom: 32 }}>
            Enterprise-grade security by default.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 10 }}>
            {compliance.map(item => (
              <div key={item} style={{
                display: 'flex', alignItems: 'flex-start', gap: 10,
                padding: '14px 16px',
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)',
                borderRadius: 8,
                fontSize: 13,
                color: 'var(--color-text-secondary)',
                lineHeight: 1.45,
              }}>
                <Check size={13} style={{ color: 'var(--color-status-complete)', flexShrink: 0, marginTop: 2 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="lp-cta">
        <div className="lp-cta-inner">
          <h2 className="lp-cta-headline">Ready to fix your document pipeline?</h2>
          <p className="lp-cta-sub">14-day full-feature trial. No card. No usage limits.</p>
          <div className="lp-cta-actions">
            <Link to="/auth">
              <button className="btn btn--primary" style={{ height: 46, padding: '0 28px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                Start free trial
                <ArrowRight size={15} />
              </button>
            </Link>
            <Link to="/pricing">
              <button style={{ height: 46, padding: '0 28px', fontSize: 14, fontWeight: 500, color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.05)', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
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
