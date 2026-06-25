import { Search, Download, FileText } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

type DocStatus = 'complete' | 'in-progress' | 'pending' | 'draft'

interface AdminDoc {
  id: string
  name: string
  owner: string
  ownerInitials: string
  status: DocStatus
  statusLabel: string
  type: string
  updated: string
  pages: number
}

const docs: AdminDoc[] = [
  { id: 'd1', name: 'Mutual NDA · Eko Provisions Ltd',         owner: 'Adaeze Okonkwo', ownerInitials: 'AO', status: 'complete', statusLabel: 'Executed',   type: 'NDA',         updated: 'Today',      pages: 3  },
  { id: 'd2', name: 'Vendor Master Agreement · Lagos Steel',   owner: 'Admin User',     ownerInitials: 'AU', status: 'in-progress', statusLabel: 'In signing', type: 'Agreement',   updated: 'Today',      pages: 12 },
  { id: 'd3', name: 'Employment Agreement · Ibrahim Bello',    owner: 'Admin User',     ownerInitials: 'AU', status: 'pending',  statusLabel: 'Pending',    type: 'Employment',  updated: 'Yesterday',  pages: 6  },
  { id: 'd4', name: 'Board Resolution · June 2026',            owner: 'Admin User',     ownerInitials: 'AU', status: 'complete', statusLabel: 'Archived',   type: 'Resolution',  updated: '2d ago',     pages: 2  },
  { id: 'd5', name: 'Consulting Contract · Bakare & Associates', owner: 'Admin User',   ownerInitials: 'AU', status: 'in-progress', statusLabel: 'In signing', type: 'Contract',    updated: '3d ago',     pages: 8  },
  { id: 'd6', name: 'Freelance Retainer · Chinedu Design',     owner: 'Chinedu Eze',   ownerInitials: 'CE', status: 'complete', statusLabel: 'Executed',   type: 'Retainer',    updated: '1w ago',     pages: 4  },
  { id: 'd7', name: 'Service Agreement · Coastal Energy',      owner: 'Funke Adebayo', ownerInitials: 'FA', status: 'draft',    statusLabel: 'Draft',      type: 'Agreement',   updated: '1w ago',     pages: 9  },
]

export function AdminDocumentsPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Documents</h1>
          <p className="admin-page-subtitle">All documents across the workspace</p>
        </div>
        <div className="admin-page-actions">
          <Button variant="secondary" size="sm">
            <Download size={13} />
            <span>Export CSV</span>
          </Button>
        </div>
      </div>

      {/* Summary strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
        {[
          { label: 'Total',     value: '4,218', color: 'var(--color-text-primary)' },
          { label: 'Executed',  value: '3,891', color: '#059669' },
          { label: 'In flight', value: '187',   color: '#D97706' },
          { label: 'Draft',     value: '140',   color: 'var(--color-text-tertiary)' },
        ].map(s => (
          <div key={s.label} style={{
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 6, padding: '12px 14px',
          }}>
            <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', fontWeight: 500, marginBottom: 4 }}>{s.label}</div>
            <div style={{ fontSize: 20, fontWeight: 700, color: s.color, letterSpacing: '-0.5px' }}>{s.value}</div>
          </div>
        ))}
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
          placeholder="Search documents..."
        />
      </div>

      {/* Table */}
      <div className="vault-table-container">
        <table className="vault-table">
          <thead>
            <tr>
              <th>Document</th>
              <th>Type</th>
              <th>Owner</th>
              <th>Status</th>
              <th>Pages</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {docs.map(doc => (
              <tr key={doc.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 5, flexShrink: 0,
                      background: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <FileText size={13} color="var(--color-text-tertiary)" />
                    </div>
                    <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{doc.name}</span>
                  </div>
                </td>
                <td>
                  <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontFamily: 'var(--font-mono)' }}>{doc.type}</span>
                </td>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 5, flexShrink: 0,
                      background: 'var(--color-accent-muted)',
                      border: '1px solid var(--color-accent-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 700, color: 'var(--color-accent)',
                    }}>
                      {doc.ownerInitials}
                    </div>
                    <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{doc.owner}</span>
                  </div>
                </td>
                <td>
                  <Badge status={doc.status} label={doc.statusLabel} />
                </td>
                <td>
                  <span style={{ fontSize: 12, fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>{doc.pages}</span>
                </td>
                <td>
                  <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{doc.updated}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
