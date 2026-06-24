import { Link } from 'react-router-dom'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const sections = [
  {
    title: '1. Information We Collect',
    body: `We collect information you provide when you register for an account (name, email address, organization), information you create within the Service (documents, templates, field values), and usage data (feature interactions, pipeline activity, error logs). We do not collect payment card data directly — payments are processed by our PCI-compliant payment provider.`,
  },
  {
    title: '2. How We Use Your Information',
    body: `We use your information to operate and improve the Service, authenticate your identity, send transactional emails (account confirmations, signature requests, billing notices), and respond to support requests. We do not use your document content to train AI models or share it with third parties for marketing purposes.`,
  },
  {
    title: '3. Document Data and Confidentiality',
    body: `Your documents, templates, and all field data are treated as confidential. MyTypist employees do not access your document content except when required to resolve a support issue you have explicitly raised, or when required by law. All document access by staff is logged in the audit trail.`,
  },
  {
    title: '4. Data Storage and Security',
    body: `Your data is stored on infrastructure with AES-256 encryption at rest and TLS 1.2+ encryption in transit. We maintain SOC 2 Type II compliance controls and conduct regular security reviews. Backups are encrypted and stored in geographically separated locations.`,
  },
  {
    title: '5. Data Retention',
    body: `We retain your account data and documents for the duration of your subscription plus 90 days after termination. After that period, your data is permanently deleted. You may request early deletion at any time through your account settings or by contacting support. Audit logs required for compliance may be retained longer where required by law.`,
  },
  {
    title: '6. Sharing of Information',
    body: `We do not sell your personal data. We share data with service providers only to the extent necessary to operate the Service (e.g. cloud hosting, payment processing, email delivery). These providers are bound by data processing agreements. We may disclose information when required by law or valid legal process.`,
  },
  {
    title: '7. Cookies and Tracking',
    body: `We use essential cookies to maintain your authenticated session and to store your UI preferences (such as dark mode). We do not use third-party advertising cookies. You may disable non-essential cookies in your browser settings, but this may affect the functionality of the Service.`,
  },
  {
    title: '8. Your Rights',
    body: `Depending on your jurisdiction, you may have the right to access, correct, or delete your personal data; to restrict or object to processing; and to data portability. To exercise any of these rights, contact our support team. We respond to verifiable requests within 30 days.`,
  },
  {
    title: '9. GDPR and International Transfers',
    body: `For users in the European Economic Area, we process personal data in accordance with the General Data Protection Regulation (GDPR). Where data is transferred outside the EEA, we ensure adequate safeguards are in place, including Standard Contractual Clauses where applicable.`,
  },
  {
    title: '10. Children\'s Privacy',
    body: `The Service is not intended for use by individuals under the age of 16. We do not knowingly collect personal data from children. If you believe a child has provided us with personal data, please contact us and we will delete it promptly.`,
  },
  {
    title: '11. Changes to This Policy',
    body: `We may update this Privacy Policy from time to time. We will notify account holders of material changes via email or prominent notice within the Service at least 14 days before the changes take effect. Your continued use of the Service after that date constitutes acceptance.`,
  },
  {
    title: '12. Contact Us',
    body: `For privacy questions, data subject requests, or to report a security concern, please reach out through our Support page. We take all privacy inquiries seriously and respond within 5 business days.`,
  },
]

export function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.65, margin: 0 }}>
              Last updated June 24, 2026. This policy explains how MyTypist collects, uses, and protects your information.
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
              Have questions about this policy?{' '}
              <Link to="/support" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 500 }}>
                Contact our support team
              </Link>
              . Also see our{' '}
              <Link to="/terms" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 500 }}>
                Terms of Service
              </Link>.
            </p>
          </div>
        </div>
      </main>

      <PublicFooter />
    </div>
  )
}
