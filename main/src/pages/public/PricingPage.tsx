import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, X, ArrowRight, ChevronDown, ChevronUp } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const plans = {
  free: {
    name: 'Free',
    monthlyPrice: 0,
    yearlyPrice: 0,
    local: { monthly: '₦0', yearly: '₦0' },
    description: 'Try MyTypist at no cost. No card required.',
    features: [
      '5 documents / month',
      '2 e-signatures / month',
      'Basic template library access',
      'Live preview in Studio',
      'PDF export',
    ],
    cta: 'Get started free',
    ctaTo: '/auth',
    variant: 'secondary' as const,
  },
  pro: {
    name: 'Professional',
    monthlyPrice: 49,
    yearlyPrice: 39,
    local: { monthly: '₦75,000', yearly: '₦60,000' },
    description: 'For teams generating documents at scale.',
    features: [
      'Unlimited document generation',
      'Up to 10 team members',
      '50 professionally built templates',
      'Sequential e-signatures with full audit trail',
      'Full 5-stage operational pipeline',
      'Document vault — versioned & searchable',
      'PDF export with layout guarantee',
      'Email support · 4-hour response SLA',
      '14-day full-access trial · no card required',
    ],
    cta: 'Start 14-day trial',
    ctaTo: '/auth',
    variant: 'secondary' as const,
  },
  enterprise: {
    name: 'Enterprise',
    monthlyPrice: 149,
    yearlyPrice: 119,
    local: { monthly: '₦230,000', yearly: '₦184,000' },
    description: 'For organizations that need full control and compliance.',
    features: [
      'Everything in Professional',
      'Unlimited team seats',
      '100+ curated + custom templates',
      'Sequential and parallel signature flows',
      'Custom branding on all documents',
      'SSO / SAML integration',
      'Full REST API with webhook delivery',
      'On-premise deployment option',
      'Compliance package (HIPAA, ISO 27001)',
      'Dedicated account support · 1-hour SLA',
    ],
    cta: 'Contact sales',
    ctaTo: '/support',
    variant: 'primary' as const,
    badge: 'Most Popular',
  },
}

type Feature = { label: string; free: boolean | string; pro: boolean | string; ent: boolean | string }
const comparisonRows: { category: string; features: Feature[] }[] = [
  {
    category: 'Documents & Templates',
    features: [
      { label: 'Document generation',      free: '5 / month', pro: 'Unlimited',     ent: 'Unlimited'      },
      { label: 'PDF fidelity guarantee',   free: true,        pro: true,             ent: true              },
      { label: 'Template library',         free: 'Basic',     pro: '50 templates',   ent: '100+ templates'  },
      { label: 'Document versioning',      free: false,       pro: true,             ent: true              },
    ],
  },
  {
    category: 'Signatures',
    features: [
      { label: 'Recipient e-signature (no account)', free: '2 / month', pro: true,  ent: true  },
      { label: 'Sequential signature flows',          free: false,       pro: true,  ent: true  },
      { label: 'Parallel signature flows',            free: false,       pro: false, ent: true  },
      { label: 'Cryptographic audit trail',           free: false,       pro: true,  ent: true  },
    ],
  },
  {
    category: 'Pipeline & Team',
    features: [
      { label: 'Team members',              free: '1 (solo)', pro: 'Up to 10', ent: 'Unlimited' },
      { label: '5-stage document pipeline', free: false,      pro: true,       ent: true         },
      { label: 'SSO / SAML',               free: false,      pro: false,      ent: true         },
      { label: 'Custom branding',          free: false,      pro: false,      ent: true         },
    ],
  },
  {
    category: 'Support',
    features: [
      { label: 'Email support',              free: 'Community', pro: '4-hour SLA', ent: '1-hour SLA' },
      { label: 'Dedicated account manager',  free: false,       pro: false,         ent: true          },
      { label: 'Custom onboarding',          free: false,       pro: false,         ent: true          },
      { label: 'Custom SLA / contracts',     free: false,       pro: false,         ent: true          },
    ],
  },
]

const faqs = [
  {
    q: 'Is there really no per-document fee?',
    a: 'Yes. All paid plans are flat monthly subscriptions. You can generate as many documents as you need. No usage traps, no overage charges.',
  },
  {
    q: 'What does the Free plan include?',
    a: 'The Free plan gives you 5 documents and 2 e-signatures per month, forever. No credit card required. It\'s designed to let you explore MyTypist at your own pace before upgrading to Professional.',
  },
  {
    q: 'Do recipients need a MyTypist account to sign?',
    a: 'No. Recipients receive a secure signing link via email. They sign directly in the browser — no account, no app, no friction.',
  },
  {
    q: 'What happens when the 14-day trial ends?',
    a: 'Your workspace enters read-only mode. All documents and data are preserved. You choose a plan or export your work. Nothing is deleted.',
  },
  {
    q: 'Is my data encrypted?',
    a: 'Yes. AES-256 encryption at rest and in transit. All signing events are cryptographically timestamped. SOC 2 Type II certified.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Monthly plans have no minimum commitment. Cancel at any time — your subscription continues until the end of the billing period.',
  },
  {
    q: 'What is the on-premise deployment option?',
    a: 'Enterprise customers can run MyTypist on their own infrastructure. Contact our sales team for scoped pricing and technical requirements.',
  },
  {
    q: 'Do you offer custom contracts or compliance packages?',
    a: 'Yes — for Enterprise. We support HIPAA, ISO 27001, and custom data processing agreements. Contact sales to discuss your requirements.',
  },
]

function CellValue({ value }: { value: boolean | string }) {
  if (value === true)  return <Check size={15} color="var(--color-status-complete)" />
  if (value === false) return <X size={14} color="var(--color-text-quaternary)" />
  return <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{value}</span>
}

export function PricingPage() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />

      {/* ── Hero ── */}
      <section style={{
        padding: '80px 20px 64px',
        textAlign: 'center',
        borderBottom: '1px solid var(--color-border)',
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,71,255,0.06) 0%, transparent 70%)',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="lp-hero-eyebrow" style={{ margin: '0 auto 20px', justifyContent: 'center' }}>
            <div className="lp-hero-eyebrow-dot" />
            Pricing
          </div>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, letterSpacing: -2, lineHeight: 1.08, color: 'var(--color-text-primary)', marginBottom: 16 }}>
            Flat subscription.<br />No per-document fees.
          </h1>
          <p style={{ fontSize: 16, lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 32 }}>
            Start free. Scale when you're ready. No usage traps, no overage charges, no surprises.
          </p>

          {/* Billing toggle — sliding pill */}
          <div style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--color-surface)', border: '1px solid var(--color-border)', padding: '4px', borderRadius: 9999, position: 'relative' }}>
            {/* Sliding pill background */}
            <div style={{
              position: 'absolute',
              top: 4, bottom: 4,
              left: yearly ? 'calc(50% - 2px)' : '4px',
              right: yearly ? '4px' : 'calc(50% - 2px)',
              background: 'var(--color-accent)',
              borderRadius: 9999,
              transition: 'left 220ms cubic-bezier(.4,0,.2,1), right 220ms cubic-bezier(.4,0,.2,1)',
              pointerEvents: 'none',
            }} />
            <button
              onClick={() => setYearly(false)}
              style={{
                position: 'relative', zIndex: 1,
                padding: '6px 20px', borderRadius: 9999, fontSize: 13, fontWeight: 600,
                color: !yearly ? '#fff' : 'var(--color-text-secondary)',
                border: 'none', cursor: 'pointer', background: 'none',
                transition: 'color 180ms',
              }}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              style={{
                position: 'relative', zIndex: 1,
                padding: '6px 20px', borderRadius: 9999, fontSize: 13, fontWeight: 600,
                color: yearly ? '#fff' : 'var(--color-text-secondary)',
                border: 'none', cursor: 'pointer', background: 'none',
                transition: 'color 180ms',
                display: 'flex', alignItems: 'center', gap: 6,
              }}
            >
              Yearly
              <span style={{
                padding: '2px 7px',
                background: yearly ? 'rgba(255,255,255,0.25)' : 'rgba(5,150,105,0.12)',
                color: yearly ? '#fff' : '#059669',
                borderRadius: 9999, fontSize: 10, fontWeight: 700,
                transition: 'background 180ms, color 180ms',
              }}>
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Plan cards ── */}
      <section style={{ padding: '0 20px', maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          border: '1px solid var(--color-border)',
          borderTop: 'none',
          borderRadius: '0 0 12px 12px',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-floating)',
        }}>
          {/* Free */}
          <div style={{ padding: '32px 28px', background: 'var(--color-surface)', borderRight: '1px solid var(--color-border)' }}>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.7, color: 'var(--color-text-tertiary)', marginBottom: 16 }}>
              {plans.free.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: -2, lineHeight: 1, color: 'var(--color-text-primary)' }}>₦0</span>
              <span style={{ fontSize: 14, color: 'var(--color-text-tertiary)' }}>/month</span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-quaternary)', marginBottom: 6 }}>Always free · no card required</div>
            <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: 24 }}>{plans.free.description}</p>
            <Link to={plans.free.ctaTo} style={{ display: 'block', marginBottom: 24 }}>
              <button className="btn btn--secondary" style={{ width: '100%', height: 42, fontSize: 13, fontWeight: 600 }}>
                {plans.free.cta}
              </button>
            </Link>
            <div style={{ height: 1, background: 'var(--color-border)', marginBottom: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {plans.free.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                  <Check size={13} style={{ color: 'var(--color-status-complete)', flexShrink: 0, marginTop: 2 }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Pro */}
          <div style={{ padding: '32px 28px', background: 'var(--color-surface)', borderRight: '1px solid var(--color-border)' }}>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.7, color: 'var(--color-text-tertiary)', marginBottom: 16 }}>
              {plans.pro.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: -2, lineHeight: 1, color: 'var(--color-text-primary)' }}>
                {yearly ? plans.pro.local.yearly : plans.pro.local.monthly}
              </span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-quaternary)', marginBottom: 6 }}>
              per month · billed {yearly ? 'yearly' : 'monthly'}
            </div>
            <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: 24 }}>{plans.pro.description}</p>
            <Link to={plans.pro.ctaTo} style={{ display: 'block', marginBottom: 24 }}>
              <button className="btn btn--secondary" style={{ width: '100%', height: 42, fontSize: 13, fontWeight: 600 }}>
                {plans.pro.cta}
              </button>
            </Link>
            <div style={{ height: 1, background: 'var(--color-border)', marginBottom: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {plans.pro.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                  <Check size={13} style={{ color: 'var(--color-status-complete)', flexShrink: 0, marginTop: 2 }} />
                  {f}
                </div>
              ))}
            </div>
          </div>

          {/* Enterprise */}
          <div style={{ padding: '32px 28px', background: 'linear-gradient(135deg, rgba(108,71,255,0.04) 0%, rgba(108,71,255,0.01) 100%)', position: 'relative' }}>
            <div style={{ position: 'absolute', top: 20, right: 20, background: 'linear-gradient(135deg, #6C47FF, #9B72FF)', color: '#fff', fontSize: 9, fontWeight: 700, letterSpacing: 0.4, textTransform: 'uppercase', padding: '3px 9px', borderRadius: 9999 }}>
              Most Popular
            </div>
            <div style={{ fontSize: 10, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 0.7, color: 'var(--color-accent)', marginBottom: 16 }}>
              {plans.enterprise.name}
            </div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 4 }}>
              <span style={{ fontSize: 44, fontWeight: 800, letterSpacing: -2, lineHeight: 1, color: 'var(--color-text-primary)' }}>
                {yearly ? plans.enterprise.local.yearly : plans.enterprise.local.monthly}
              </span>
            </div>
            <div style={{ fontSize: 12, color: 'var(--color-text-quaternary)', marginBottom: 6 }}>
              per month · billed {yearly ? 'yearly' : 'monthly'}
            </div>
            <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5, marginBottom: 24 }}>{plans.enterprise.description}</p>
            <Link to={plans.enterprise.ctaTo} style={{ display: 'block', marginBottom: 24 }}>
              <button className="btn btn--primary" style={{ width: '100%', height: 42, fontSize: 13, fontWeight: 600 }}>
                {plans.enterprise.cta}
              </button>
            </Link>
            <div style={{ height: 1, background: 'var(--color-border)', marginBottom: 20 }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {plans.enterprise.features.map(f => (
                <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 9, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.45 }}>
                  <Check size={13} style={{ color: 'var(--color-accent)', flexShrink: 0, marginTop: 2 }} />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>

        <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--color-text-quaternary)', margin: '16px 0 0', padding: '0 0 64px' }}>
          Professional and Enterprise include a 14-day full-feature trial. Enterprise supports custom volumes, custom integrations, and on-premise deployment.
        </p>
      </section>

      {/* ── Feature comparison ── */}
      <section style={{ padding: '72px 20px', background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>Full comparison</div>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--color-text-primary)', marginBottom: 36 }}>
            Everything, side by side.
          </h2>

          {/* Table header */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr 110px 110px 120px',
            padding: '10px 16px', borderRadius: '8px 8px 0 0',
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderBottom: 'none',
          }}>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.5 }}>Feature</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-tertiary)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: 0.5 }}>Free</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-tertiary)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: 0.5 }}>Pro</div>
            <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-accent)', textAlign: 'center', textTransform: 'uppercase', letterSpacing: 0.5 }}>Enterprise</div>
          </div>

          <div style={{ border: '1px solid var(--color-border)', borderRadius: '0 0 8px 8px', overflow: 'hidden' }}>
            {comparisonRows.map((section, si) => (
              <div key={section.category}>
                <div style={{
                  padding: '10px 16px',
                  background: 'var(--color-bg-secondary)',
                  borderTop: si > 0 ? '1px solid var(--color-border)' : 'none',
                  fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
                  letterSpacing: 0.5, color: 'var(--color-text-tertiary)',
                }}>
                  {section.category}
                </div>
                {section.features.map((feat, fi) => (
                  <div
                    key={feat.label}
                    style={{
                      display: 'grid', gridTemplateColumns: '1fr 110px 110px 120px',
                      padding: '11px 16px',
                      borderTop: '1px solid var(--color-border-subtle)',
                      background: fi % 2 === 0 ? 'var(--color-surface)' : 'rgba(0,0,0,0.01)',
                      transition: 'background 80ms',
                    }}
                  >
                    <div style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>{feat.label}</div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <CellValue value={feat.free} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <CellValue value={feat.pro} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <CellValue value={feat.ent} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '72px 20px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(22px, 3.5vw, 28px)', fontWeight: 800, letterSpacing: -0.8, color: 'var(--color-text-primary)', marginBottom: 32 }}>
            Common questions.
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--color-border)' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', padding: '18px 0',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', gap: 16,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={16} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    : <ChevronDown size={16} color="var(--color-text-tertiary)" style={{ flexShrink: 0 }} />
                  }
                </button>
                {openFaq === i && (
                  <p style={{ fontSize: 14, lineHeight: 1.7, color: 'var(--color-text-secondary)', paddingBottom: 18, marginTop: -4 }}>
                    {faq.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Enterprise CTA ── */}
      <section style={{ padding: '56px 20px', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)' }}>
            Need a custom contract, volume pricing, or on-premise?
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: 480 }}>
            Enterprise plans support custom scoping, compliance packages, custom integrations,
            and bespoke SLAs. Talk to our team.
          </p>
          <Link to="/support">
            <button className="btn btn--primary" style={{ height: 42, padding: '0 24px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7 }}>
              Talk to sales
              <ArrowRight size={14} />
            </button>
          </Link>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="lp-cta">
        <div className="lp-cta-inner">
          <h2 className="lp-cta-headline">Start your free trial today.</h2>
          <p className="lp-cta-sub">No card required. Full feature access. Cancel anytime.</p>
          <div className="lp-cta-actions">
            <Link to="/auth">
              <button className="btn btn--primary" style={{ height: 46, padding: '0 28px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                Start free trial
                <ArrowRight size={15} />
              </button>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
