import { Users, TrendingUp, Clock, AlertTriangle, CheckCircle } from 'lucide-react'

const recentActivity = [
  { id: '1', action: 'Document exported',         user: 'Adaeze Okonkwo', target: 'Mutual NDA · Eko Provisions',        time: '12m ago', warn: false },
  { id: '2', action: 'Signature request sent',    user: 'Admin User',     target: 'Board Resolution · June 2026',       time: '2h ago',  warn: false },
  { id: '3', action: 'Document advanced to Sign', user: 'Admin User',     target: 'Vendor Master Agreement',            time: '4h ago',  warn: false },
  { id: '4', action: 'User invited',              user: 'Admin User',     target: 'Tunde Bakare',                       time: '5h ago',  warn: false },
]

export function AdminOverviewPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div>
        <h1 className="admin-page-title">Overview</h1>
        <p className="admin-page-subtitle">Workspace health, activity, and system status</p>
      </div>

      {/* Stats */}
      <div className="admin-stats-grid">
        {[
          { label: 'Total users',     value: '6',     icon: Users,         color: '#6C47FF', bg: 'rgba(108,71,255,0.06)' },
          { label: 'Docs generated',  value: '4,218', icon: TrendingUp,    color: '#059669', bg: 'rgba(5,150,105,0.06)'  },
          { label: 'Pending invites', value: '1',     icon: Clock,         color: '#D97706', bg: 'rgba(217,119,6,0.06)'  },
          { label: 'Security alerts', value: '0',     icon: AlertTriangle, color: '#059669', bg: 'rgba(5,150,105,0.06)'  },
        ].map(stat => (
          <div key={stat.label} style={{
            background: stat.bg,
            border: '1px solid var(--color-border)',
            borderRadius: 6, padding: '16px 18px',
            display: 'flex', flexDirection: 'column', gap: 10,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500 }}>{stat.label}</span>
              <div style={{
                width: 28, height: 28, borderRadius: 6,
                background: `${stat.color}14`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <stat.icon size={14} color={stat.color} />
              </div>
            </div>
            <div style={{ fontSize: 26, fontWeight: 700, color: stat.color, letterSpacing: '-0.8px', lineHeight: 1 }}>
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Recent activity */}
      <div>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 12px' }}>
          Recent Activity
        </h3>
        <div style={{
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 6, overflow: 'hidden',
        }}>
          {recentActivity.map((entry, i) => (
            <div key={entry.id} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '12px 16px',
              borderBottom: i < recentActivity.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                background: entry.warn ? 'rgba(220,38,38,0.08)' : 'var(--color-bg-secondary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {entry.warn
                  ? <AlertTriangle size={13} color="var(--color-status-failed)" />
                  : <CheckCircle size={13} color="var(--color-status-complete)" />
                }
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, color: 'var(--color-text-primary)', fontWeight: 500 }}>{entry.action}</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginTop: 2 }}>
                  {entry.user} · {entry.target}
                </div>
              </div>
              <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)', flexShrink: 0 }}>{entry.time}</span>
            </div>
          ))}
        </div>
      </div>

      {/* System health */}
      <div>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 12px' }}>
          System Health
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {[
            { label: 'API Uptime',      value: '99.98%',     color: '#059669' },
            { label: 'Storage Used',    value: '18.4 / 50 GB', color: 'var(--color-text-primary)' },
            { label: 'Avg. Response',   value: '142ms',      color: 'var(--color-text-primary)' },
            { label: 'Active Sessions', value: '3 users',    color: 'var(--color-text-primary)' },
          ].map(item => (
            <div key={item.label} style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 6, padding: '14px 16px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            }}>
              <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>{item.label}</span>
              <span style={{ fontSize: 14, fontWeight: 700, color: item.color }}>{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
