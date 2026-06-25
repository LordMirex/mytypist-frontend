import { Search, Download, CheckCircle, AlertTriangle, Users } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type AuditType = 'info' | 'warn'

interface AuditEntry {
  id: string
  action: string
  user: string
  target: string
  time: string
  type: AuditType
}

const auditLog: AuditEntry[] = [
  { id: '1', action: 'Document exported',         user: 'Adaeze Okonkwo', target: 'Mutual NDA · Eko Provisions',          time: '12m ago', type: 'info' },
  { id: '2', action: 'Signature request sent',    user: 'Admin User',     target: 'Board Resolution · June 2026',         time: '2h ago',  type: 'info' },
  { id: '3', action: 'Document advanced to Sign', user: 'Admin User',     target: 'Vendor Master Agreement',              time: '4h ago',  type: 'info' },
  { id: '4', action: 'User invited',              user: 'Admin User',     target: 'Tunde Bakare',                         time: '5h ago',  type: 'info' },
  { id: '5', action: 'Fidelity check passed',     user: 'System',         target: 'Q4 Budget Proposal',                   time: '1d ago',  type: 'info' },
  { id: '6', action: 'Document archived',         user: 'Adaeze Okonkwo', target: 'Employment Agreement · Ibrahim Bello', time: '2d ago',  type: 'info' },
  { id: '7', action: 'Role changed',              user: 'Admin User',     target: 'Ngozi Adeyemi: Editor → Viewer',       time: '3d ago',  type: 'info' },
  { id: '8', action: 'Template published',        user: 'Admin User',     target: 'Vendor Master Agreement template',     time: '4d ago',  type: 'info' },
  { id: '9', action: 'Workspace settings saved',  user: 'Admin User',     target: 'Branding · logo updated',              time: '5d ago',  type: 'info' },
  { id: '10', action: 'Signature completed',      user: 'System',         target: 'Freelance Retainer · Chinedu Design',  time: '1w ago',  type: 'info' },
]

export function AdminAuditPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Audit Log</h1>
          <p className="admin-page-subtitle">Complete tamper-evident record of all workspace activity</p>
        </div>
        <div className="admin-page-actions">
          <Button variant="secondary" size="sm">
            <Download size={13} />
            <span>Export CSV</span>
          </Button>
        </div>
      </div>

      {/* Health notice */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10,
        padding: '12px 16px',
        background: 'rgba(5,150,105,0.04)',
        border: '1px solid rgba(5,150,105,0.15)',
        borderRadius: 6,
      }}>
        <CheckCircle size={14} color="var(--color-status-complete)" style={{ flexShrink: 0 }} />
        <p style={{ margin: 0, fontSize: 13, color: 'var(--color-status-complete)' }}>
          No security alerts in the last 30 days. Audit log is complete and tamper-evident.
        </p>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', width: 280 }}>
        <Search size={14} style={{
          position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
          color: 'var(--color-text-tertiary)', pointerEvents: 'none',
        }} />
        <input
          className="input"
          style={{ height: 32, paddingLeft: 32 }}
          placeholder="Search audit log..."
        />
      </div>

      {/* Table */}
      <div className="vault-table-container">
        <table className="vault-table">
          <thead>
            <tr>
              <th style={{ width: 36 }}></th>
              <th>Action</th>
              <th>User</th>
              <th>Target</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            {auditLog.map(entry => (
              <tr key={entry.id}>
                <td style={{ textAlign: 'center' }}>
                  {entry.type === 'warn'
                    ? <AlertTriangle size={13} color="var(--color-status-failed)" />
                    : <CheckCircle size={13} color="var(--color-status-complete)" />
                  }
                </td>
                <td style={{ fontWeight: 600, fontSize: 13 }}>{entry.action}</td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 5,
                      background: 'var(--color-bg-tertiary)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Users size={11} color="var(--color-text-tertiary)" />
                    </div>
                    <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>{entry.user}</span>
                  </div>
                </td>
                <td style={{ fontSize: 12, color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                  {entry.target}
                </td>
                <td style={{ fontSize: 12, color: 'var(--color-text-quaternary)' }}>{entry.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
