import { Link } from 'react-router-dom'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const sections = [
  {
    title: '1. Acceptance of Terms',
    body: `By accessing or using MyTypist ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not use the Service. MyTypist Technologies reserves the right to update these terms at any time. Continued use of the Service after changes constitutes acceptance.`,
  },
  {
    title: '2. Description of Service',
    body: `MyTypist is a document creation and management platform that provides structured document drafting, fidelity validation, approval workflows, electronic signature collection, and archival. The Service is intended for professional and organizational use.`,
  },
  {
    title: '3. Account Registration',
    body: `You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your credentials and for all activity that occurs under your account. You must notify us immediately of any unauthorized use of your account.`,
  },
  {
    title: '4. Acceptable Use',
    body: `You agree not to use the Service to create, store, or transmit content that is unlawful, fraudulent, defamatory, or infringing on the rights of third parties. You may not attempt to reverse-engineer, decompile, or disassemble any part of the Service, or use the Service to build a competitive product.`,
  },
  {
    title: '5. Subscription and Billing',
    body: `Access to paid features requires an active subscription. Subscriptions are billed monthly or annually in advance. All fees are non-refundable except as required by law. MyTypist reserves the right to change pricing with 30 days' notice. Your 14-day free trial provides full feature access with no credit card required.`,
  },
  {
    title: '6. Data Ownership',
    body: `You retain full ownership of all documents, templates, and data you create or upload to the Service. By using the Service, you grant MyTypist a limited license to process and store your data solely to provide the Service. We do not sell, rent, or share your data with third parties for marketing purposes.`,
  },
  {
    title: '7. Electronic Signatures',
    body: `Electronic signatures executed through the Service are legally binding where applicable under relevant electronic signature laws (including the ESIGN Act and eIDAS). You are responsible for ensuring that the use of electronic signatures in your jurisdiction complies with applicable law.`,
  },
  {
    title: '8. Security and Compliance',
    body: `MyTypist implements industry-standard security measures including AES-256 encryption at rest, TLS in transit, and audit logging on all document events. While we make every effort to protect your data, no system is completely immune to risk. You agree to use the Service with your own appropriate security practices.`,
  },
  {
    title: '9. Limitation of Liability',
    body: `To the maximum extent permitted by applicable law, MyTypist Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the Service. Our total liability shall not exceed the amounts paid by you in the 12 months preceding the claim.`,
  },
  {
    title: '10. Termination',
    body: `You may cancel your account at any time. MyTypist reserves the right to suspend or terminate accounts that violate these terms. Upon termination, your right to access the Service ceases immediately. You may request an export of your data within 30 days of termination.`,
  },
  {
    title: '11. Governing Law',
    body: `These Terms are governed by and construed in accordance with applicable law. Any disputes arising from these Terms shall be resolved through binding arbitration, except where prohibited by law.`,
  },
  {
    title: '12. Contact',
    body: `Questions about these Terms should be directed to our support team via the Support page. We respond to all legal inquiries within 5 business days.`,
  },
]

export function TermsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />

      <main style={{ flex: 1 }}>
        {/* Header */}
        <div style={{
          borderBottom: '1px solid var(--color-border)',
          padding: '64px 24px 48px',
          textAlign: 'center',
        }}>
          <div style={{ maxWidth: 640, margin: '0 auto' }}>
            <div style={{
              display: 'inline-block',
              fontSize: 11, fontWeight: 700, letterSpacing: 0.6,
              textTransform: 'uppercase', color: 'var(--color-accent)',
              background: 'rgba(108,71,255,0.06)',
              border: '1px solid rgba(108,71,255,0.15)',
              padding: '4px 12px', borderRadius: 9999,
              marginBottom: 20,
            }}>
              Legal
            </div>
            <h1 style={{
              fontSize: 36, fontWeight: 800, letterSpacing: -1.2,
              color: 'var(--color-text-primary)', lineHeight: 1.1,
              marginBottom: 14,
            }}>
              Terms of Service
            </h1>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Last updated June 24, 2026. Please read these terms carefully before using MyTypist.
            </p>
          </div>
        </div>

        {/* Body */}
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '56px 24px 80px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
            {sections.map(s => (
              <div key={s.title}>
                <h2 style={{
                  fontSize: 17, fontWeight: 700,
                  color: 'var(--color-text-primary)',
                  marginBottom: 10, letterSpacing: -0.2,
                }}>
                  {s.title}
                </h2>
                <p style={{
                  fontSize: 15, lineHeight: 1.75,
                  color: 'var(--color-text-secondary)',
                  margin: 0,
                }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 56,
            padding: '24px',
            background: 'var(--color-bg-secondary)',
            border: '1px solid var(--color-border)',
            borderRadius: 10,
          }}>
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Have questions about these terms?{' '}
              <Link to="/support" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 500 }}>
                Contact our support team
              </Link>
              . Also see our{' '}
              <Link to="/privacy" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 500 }}>
                Privacy Policy
              </Link>.
            </p>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
