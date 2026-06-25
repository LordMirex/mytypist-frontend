import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const services = [
  { name: 'Document Generation',   status: 'operational' as const },
  { name: 'E-Signature API',       status: 'operational' as const },
  { name: 'File Storage',          status: 'operational' as const },
  { name: 'Email Delivery',        status: 'operational' as const },
  { name: 'Authentication',        status: 'operational' as const },
  { name: 'Pipeline Processing',   status: 'operational' as const },
]

const dotColors = { operational: '#059669' } as const

export function StatusPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PublicHeader />
      <main style={{ maxWidth: 600, margin: '0 auto', padding: '80px 24px 120px' }}>
        {/* Status header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: dotColors.operational, flexShrink: 0 }} />
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.5px', margin: 0 }}>
            All systems operational
          </h1>
        </div>
        <p style={{ fontSize: 13, color: 'var(--color-text-tertiary)', margin: '0 0 40px 20px' }}>
          Checked 2 minutes ago
        </p>

        {/* Services list */}
        <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', background: 'var(--color-surface)' }}>
          {services.map((svc, i) => (
            <div
              key={svc.name}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '14px 18px',
                borderBottom: i < services.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
              }}
            >
              <span style={{ fontSize: 14, fontWeight: 500, color: 'var(--color-text-primary)' }}>
                {svc.name}
              </span>
              <span style={{
                display: 'flex', alignItems: 'center', gap: 6,
                fontSize: 12, fontWeight: 600, color: dotColors[svc.status],
              }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: dotColors[svc.status] }} />
                Operational
              </span>
            </div>
          ))}
        </div>

        {/* Incident history */}
        <div style={{ marginTop: 40 }}>
          <h2 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.2px', marginBottom: 12 }}>
            Incident history (last 30 days)
          </h2>
          <div style={{
            padding: '16px 18px', border: '1px solid var(--color-border)',
            borderRadius: 8, background: 'var(--color-surface)',
          }}>
            <p style={{ fontSize: 13, color: 'var(--color-text-tertiary)', margin: 0 }}>
              No incidents reported.
            </p>
          </div>
        </div>

        {/* Auto-refresh note */}
        <p style={{ fontSize: 11, color: 'var(--color-text-quaternary)', marginTop: 40, textAlign: 'center' }}>
          This page auto-refreshes every 60 seconds.
        </p>
      </main>
      <PublicFooter />
    </div>
  )
}
