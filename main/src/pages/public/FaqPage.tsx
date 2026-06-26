import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const faqSections = [
  {
    heading: 'Getting started',
    items: [
      {
        q: 'Is there a free plan?',
        a: 'Yes. The free plan costs ₦0/month, includes 5 documents and 2 e-signatures per month, and requires no credit card. It does not expire.',
      },
      {
        q: 'What is the 14-day trial?',
        a: 'When you sign up, you get 14 days of Pro access at no charge. No card required. No usage limits during the trial. After 14 days, you stay on the free plan unless you choose to upgrade.',
      },
      {
        q: 'What types of documents can I create?',
        a: 'Employment contracts, NDAs, service agreements, freelance contracts, offer letters, board resolutions, retainer agreements, and more. The template library has 100+ ready-to-use documents, all formatted for Nigerian business contexts.',
      },
      {
        q: 'Do I need to install anything?',
        a: 'No. MyTypist runs entirely in the browser. No plugins, no desktop app, no extensions required.',
      },
    ],
  },
  {
    heading: 'Documents and templates',
    items: [
      {
        q: 'Does the preview match the final printed PDF?',
        a: 'Yes. 1:1 fidelity between the live preview in Studio and the exported PDF is a core product guarantee. The fidelity check before send validates margins, overflow, and field completeness.',
      },
      {
        q: 'Can I upload or build my own templates?',
        a: 'Template Builder is available on Pro and Enterprise plans. You can define custom fields, set field types (text, date, currency, signature), and save templates for reuse by your team.',
      },
      {
        q: 'How many documents can I store in the Vault?',
        a: 'Vault storage is unlimited on Pro and Enterprise. Documents are versioned — every save is a separate version. You can compare versions and restore any previous state.',
      },
    ],
  },
  {
    heading: 'Signatures',
    items: [
      {
        q: 'Do recipients need a MyTypist account to sign?',
        a: 'No. Recipients receive a secure tokenized link. They review the document and sign directly — no signup, no login, no friction.',
      },
      {
        q: 'Are the e-signatures legally valid in Nigeria?',
        a: 'Electronic signatures in Nigeria are governed by the Electronic Transactions Act and NITDA guidelines. Timestamped, audit-trailed signatures from MyTypist are valid for most commercial and employment documents. Consult your legal advisor for regulated sectors (land transactions, deeds, wills).',
      },
      {
        q: 'Can I set up sequential or parallel signature flows?',
        a: 'Sequential flows (each signer is notified in order) and parallel flows (all signers notified at once) are both supported on Pro and Enterprise plans.',
      },
      {
        q: 'What happens after everyone has signed?',
        a: 'The document is automatically sealed, timestamped, and moved to the Vault. All signers receive a copy of the fully signed PDF. The audit trail shows every view, sign, and status change.',
      },
    ],
  },
  {
    heading: 'Billing',
    items: [
      {
        q: 'How is billing handled?',
        a: 'All plans are priced in ₦ Naira. Flat monthly subscription — no per-document fees, no per-signature fees, no envelope costs. What you pay each month is exactly what the plan shows.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. Monthly plans cancel immediately with no penalty. If you cancel, you retain access until the end of the current billing period.',
      },
      {
        q: 'Is there an annual plan?',
        a: 'Yes. Annual billing is available at 20% off the monthly rate. Pro annual is ₦720,000/year (₦60,000/month equivalent). Enterprise annual is ₦2,208,000/year.',
      },
    ],
  },
  {
    heading: 'Security',
    items: [
      {
        q: 'How is my data protected?',
        a: 'Documents and fields are encrypted at rest using AES-256. All connections use TLS 1.3. Encryption keys are rotated on a fixed schedule.',
      },
      {
        q: 'Who can access my documents?',
        a: 'Access is role-based. Only users you explicitly add to your workspace can view or edit documents. Vault access is separate from Studio access. Admins can view the full audit log.',
      },
      {
        q: 'Is there an audit trail?',
        a: 'Yes. Every action — create, edit, send, view, sign, archive — is recorded with a timestamp, user identity, and IP address. The audit trail is tamper-evident and cannot be deleted.',
      },
    ],
  },
]

export function FaqPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PublicHeader />

      <section className="lp-section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="lp-section-inner">
          <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: 12 }}>
            Frequently asked questions.
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: 520 }}>
            If you do not find what you are looking for, email us at{' '}
            <a href="mailto:support@mytypist.com" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 500 }}>
              support@mytypist.com
            </a>.
          </p>
        </div>
      </section>

      <section className="lp-section" style={{ paddingTop: 48 }}>
        <div className="lp-section-inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {faqSections.map(section => (
              <div key={section.heading}>
                <h2 style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-secondary)', marginBottom: 20 }}>
                  {section.heading}
                </h2>
                <div style={{ borderTop: '1px solid var(--color-border)' }}>
                  {section.items.map(item => (
                    <details
                      key={item.q}
                      style={{ borderBottom: '1px solid var(--color-border)' }}
                    >
                      <summary style={{
                        padding: '18px 0',
                        fontSize: 15,
                        fontWeight: 600,
                        color: 'var(--color-text-primary)',
                        cursor: 'pointer',
                        listStyle: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 12,
                      }}>
                        {item.q}
                        <span style={{ fontSize: 18, color: 'var(--color-text-quaternary)', flexShrink: 0, fontWeight: 300, lineHeight: 1 }}>+</span>
                      </summary>
                      <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--color-text-secondary)', paddingBottom: 20, marginTop: -4 }}>
                        {item.a}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="lp-section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="lp-section-inner" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 10 }}>
            Still have questions?
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 24, maxWidth: 420, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>
            Our support team is based in Lagos and responds within one business day.
          </p>
          <a
            href="mailto:support@mytypist.com"
            style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 40, padding: '0 20px', fontSize: 13, fontWeight: 600, background: 'var(--color-accent)', color: '#fff', borderRadius: 'var(--radius-md)', textDecoration: 'none', transition: 'opacity 120ms' }}
          >
            Email support
          </a>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
