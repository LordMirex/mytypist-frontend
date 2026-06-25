import { Shield, Lock, Eye, Database, AlertCircle } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const sections = [
  {
    icon: Lock,
    title: 'Encryption',
    items: [
      { heading: 'At rest', body: 'All document content, field values, and attachments are encrypted at rest using AES-256. Encryption keys are stored separately from data and rotated on a fixed schedule.' },
      { heading: 'In transit', body: 'All connections between your browser and our servers use TLS 1.3. Older TLS versions are rejected. HTTP traffic is redirected to HTTPS.' },
      { heading: 'PDF outputs', body: 'Signed PDF exports are sealed and cannot be modified after signature. The seal includes a cryptographic timestamp.' },
    ],
  },
  {
    icon: Eye,
    title: 'Access control',
    items: [
      { heading: 'Role-based access', body: 'Workspace access is role-gated. Owners, admins, members, and guests have distinct permission levels. Document access can be restricted per document.' },
      { heading: 'Signing links', body: 'Recipient signing links are single-use, tokenized, and expire after the document is signed or the expiry period passes (configurable per send).' },
      { heading: 'Admin visibility', body: 'Workspace admins can view document status and audit trails for all team documents. They cannot edit or sign on behalf of other users.' },
    ],
  },
  {
    icon: Database,
    title: 'Audit trail',
    items: [
      { heading: 'What is recorded', body: 'Every action is logged: document creation, edits, sends, recipient views, field completions, signatures, and archive events.' },
      { heading: 'What each log entry contains', body: 'Timestamp, user identity (name + email), action type, document ID, and IP address.' },
      { heading: 'Tamper protection', body: 'Audit log entries are append-only. Entries cannot be edited or deleted — including by workspace owners.' },
    ],
  },
  {
    icon: Shield,
    title: 'Data retention',
    items: [
      { heading: 'Active documents', body: 'Documents in Studio, Pipeline, and Vault are retained for the life of the workspace subscription.' },
      { heading: 'Deleted documents', body: 'Soft-deleted documents are retained for 30 days before permanent deletion. Vault-archived documents are not soft-deleted and are retained indefinitely.' },
      { heading: 'Account deletion', body: 'When a workspace is deleted, all associated documents, field data, and audit logs are queued for permanent deletion within 30 days. Exports should be made before account deletion.' },
    ],
  },
  {
    icon: AlertCircle,
    title: 'Responsible disclosure',
    items: [
      { heading: 'How to report a vulnerability', body: 'If you discover a security issue, email security@mytypist.com with a description of the issue, steps to reproduce, and any relevant screenshots or logs. Do not exploit or publish the issue before it is resolved.' },
      { heading: 'What to expect', body: 'We will acknowledge your report within 2 business days and provide a resolution timeline. We do not currently offer a formal bug bounty program, but we will credit researchers in our security acknowledgments.' },
    ],
  },
]

export function SecurityPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PublicHeader />

      <section className="lp-section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="lp-section-inner">
          <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: 12 }}>
            Security.
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: 520 }}>
            This page describes the technical and operational measures we use to protect your documents and data. If you have a security concern or vulnerability to report, contact{' '}
            <a href="mailto:security@mytypist.com" style={{ color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 500 }}>
              security@mytypist.com
            </a>.
          </p>
        </div>
      </section>

      <section className="lp-section" style={{ paddingTop: 48 }}>
        <div className="lp-section-inner">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 56 }}>
            {sections.map(sec => {
              const Icon = sec.icon
              return (
                <div key={sec.title}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
                    <div style={{ width: 32, height: 32, borderRadius: 6, background: 'var(--color-accent-muted)', border: '1px solid var(--color-accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={15} style={{ color: 'var(--color-accent)' }} />
                    </div>
                    <h2 style={{ fontSize: 18, fontWeight: 700, letterSpacing: '-0.3px', color: 'var(--color-text-primary)', margin: 0 }}>{sec.title}</h2>
                  </div>
                  <div style={{ borderTop: '1px solid var(--color-border)' }}>
                    {sec.items.map(item => (
                      <div key={item.heading} style={{ display: 'flex', flexDirection: 'column', gap: 6, padding: '20px 0', borderBottom: '1px solid var(--color-border-subtle)' }}>
                        <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--color-text-primary)' }}>{item.heading}</div>
                        <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--color-text-secondary)', margin: 0 }}>{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
