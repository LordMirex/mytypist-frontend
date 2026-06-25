import { Settings, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const monthlyData = [
  { month: 'Jan 2026', mrr: 1_610_000,  newSubs: 7,  churned: 1 },
  { month: 'Feb 2026', mrr: 1_840_000,  newSubs: 5,  churned: 0 },
  { month: 'Mar 2026', mrr: 2_070_000,  newSubs: 8,  churned: 2 },
  { month: 'Apr 2026', mrr: 2_300_000,  newSubs: 6,  churned: 1 },
  { month: 'May 2026', mrr: 2_530_000,  newSubs: 9,  churned: 1 },
  { month: 'Jun 2026', mrr: 2_760_000,  newSubs: 11, churned: 0 },
]

const planDist = [
  { plan: 'Enterprise', count: 4,  pct: 67, color: '#6C47FF', monthlyRate: 230_000 },
  { plan: 'Pro',        count: 2,  pct: 33, color: '#059669', monthlyRate: 75_000  },
  { plan: 'Free',       count: 0,  pct: 0,  color: '#6B6B63', monthlyRate: 0       },
]

function fmt(n: number) {
  if (n >= 1_000_000) return `₦${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000)     return `₦${(n / 1_000).toFixed(0)}k`
  return `₦${n}`
}

export function AdminRevenuePage() {
  const current = monthlyData[monthlyData.length - 1]
  const prev    = monthlyData[monthlyData.length - 2]
  const growth  = (((current.mrr - prev.mrr) / prev.mrr) * 100).toFixed(1)
  const maxMrr  = Math.max(...monthlyData.map(m => m.mrr))

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Revenue</h1>
          <p className="admin-page-subtitle">Monthly recurring revenue and plan distribution</p>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {[
          { label: 'MRR (June)',  value: fmt(current.mrr), sub: `+${growth}% vs May`,        color: '#059669' },
          { label: 'ARR (est.)',  value: fmt(current.mrr * 12), sub: 'Annualised run rate',   color: '#6C47FF' },
          { label: 'New this month', value: `${current.newSubs} subs`, sub: `${current.churned} churned`, color: 'var(--color-text-primary)' },
        ].map(kpi => (
          <div key={kpi.label} style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 6, padding: '18px 20px',
          }}>
            <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500, marginBottom: 8 }}>{kpi.label}</div>
            <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.6px', color: kpi.color, marginBottom: 4 }}>{kpi.value}</div>
            <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{kpi.sub}</div>
          </div>
        ))}
      </div>

      {/* MRR trend - bar chart using divs */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
          <TrendingUp size={15} color="var(--color-accent)" />
          <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>MRR Trend</h3>
        </div>
        <div style={{
          background: 'var(--color-surface)', border: '1px solid var(--color-border)',
          borderRadius: 6, padding: '20px 20px 16px',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', gap: 10, height: 100 }}>
            {monthlyData.map((m, i) => {
              const h = Math.round((m.mrr / maxMrr) * 100)
              const isLast = i === monthlyData.length - 1
              return (
                <div key={m.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                  <div style={{ fontSize: 10, color: 'var(--color-text-quaternary)', fontFamily: 'var(--font-mono)' }}>
                    {fmt(m.mrr).replace('₦', '')}
                  </div>
                  <div
                    title={`${m.month}: ${fmt(m.mrr)}`}
                    style={{
                      width: '100%', height: `${h}%`,
                      background: isLast ? 'var(--color-accent)' : 'var(--color-accent-muted)',
                      border: `1px solid ${isLast ? 'var(--color-accent)' : 'var(--color-accent-border)'}`,
                      borderRadius: '3px 3px 0 0',
                      transition: 'background 120ms',
                      cursor: 'default',
                    }}
                  />
                </div>
              )
            })}
          </div>
          <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
            {monthlyData.map(m => (
              <div key={m.month} style={{ flex: 1, textAlign: 'center', fontSize: 10, color: 'var(--color-text-quaternary)' }}>
                {m.month.slice(0, 3)}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plan distribution */}
      <div>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 12px' }}>Plan Distribution</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {planDist.map(p => (
            <div key={p.plan} style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 6, padding: '14px 16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{p.plan}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                  <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{p.count} orgs</span>
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                    {p.monthlyRate > 0 ? `${fmt(p.monthlyRate)}/mo` : 'Free'}
                  </span>
                </div>
              </div>
              <div style={{ height: 5, background: 'var(--color-bg-tertiary)', borderRadius: 3 }}>
                <div style={{
                  height: '100%', width: `${p.pct}%`, borderRadius: 3,
                  background: p.pct > 0 ? p.color : 'transparent',
                  transition: 'width 400ms ease',
                }} />
              </div>
              <div style={{ fontSize: 11, color: 'var(--color-text-quaternary)', marginTop: 4 }}>{p.pct}% of seats</div>
            </div>
          ))}
        </div>
      </div>

      {/* Active plan card */}
      <div style={{
        background: 'var(--color-accent-muted)',
        border: '1px solid var(--color-accent-border)',
        borderRadius: 8, padding: '20px 24px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <span style={{
              display: 'inline-flex', alignItems: 'center', height: 18, padding: '0 8px',
              background: '#6C47FF', borderRadius: 3, fontSize: 10, fontWeight: 700,
              color: '#fff', letterSpacing: '0.3px',
            }}>
              ENTERPRISE
            </span>
            <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Your active plan</span>
          </div>
          <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.4px' }}>
            ₦230,000 / month
          </div>
          <div style={{ fontSize: 13, color: 'var(--color-text-secondary)', marginTop: 4 }}>
            Next billing: July 1, 2026 · Unlimited seats
          </div>
        </div>
        <Button variant="secondary" size="sm">
          <Settings size={13} />
          <span>Manage Plan</span>
        </Button>
      </div>
    </div>
  )
}
