import { Search, Plus, LayoutTemplate, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

type TplStatus = 'complete' | 'draft' | 'pending'

interface AdminTemplate {
  id: string
  name: string
  category: string
  status: TplStatus
  statusLabel: string
  uses: number
  author: string
  authorInitials: string
  updated: string
}

const templates: AdminTemplate[] = [
  { id: 't1', name: 'Non-Disclosure Agreement',         category: 'Legal',       status: 'complete', statusLabel: 'Published', uses: 842,  author: 'Admin User',    authorInitials: 'AU', updated: 'Jun 2026' },
  { id: 't2', name: 'Employment Contract (FT)',          category: 'HR',          status: 'complete', statusLabel: 'Published', uses: 630,  author: 'Admin User',    authorInitials: 'AU', updated: 'Jun 2026' },
  { id: 't3', name: 'Vendor Master Agreement',           category: 'Procurement', status: 'complete', statusLabel: 'Published', uses: 519,  author: 'Admin User',    authorInitials: 'AU', updated: 'May 2026' },
  { id: 't4', name: 'Board Resolution',                  category: 'Governance',  status: 'complete', statusLabel: 'Published', uses: 304,  author: 'Admin User',    authorInitials: 'AU', updated: 'May 2026' },
  { id: 't5', name: 'Freelance / Retainer Agreement',    category: 'Contracts',   status: 'complete', statusLabel: 'Published', uses: 277,  author: 'Adaeze Okonkwo', authorInitials: 'AO', updated: 'Apr 2026' },
  { id: 't6', name: 'Letter of Intent (Acquisition)',    category: 'Legal',       status: 'pending',  statusLabel: 'In review', uses: 0,   author: 'Adaeze Okonkwo', authorInitials: 'AO', updated: 'Jun 2026' },
  { id: 't7', name: 'Consulting Services Agreement',     category: 'Contracts',   status: 'draft',    statusLabel: 'Draft',     uses: 0,   author: 'Chinedu Eze',    authorInitials: 'CE', updated: 'Jun 2026' },
]

const categoryColors: Record<string, { color: string; bg: string }> = {
  Legal:       { color: '#6C47FF', bg: 'rgba(108,71,255,0.08)' },
  HR:          { color: '#059669', bg: 'rgba(5,150,105,0.08)'  },
  Procurement: { color: '#D97706', bg: 'rgba(217,119,6,0.08)'  },
  Governance:  { color: '#0891B2', bg: 'rgba(8,145,178,0.08)'  },
  Contracts:   { color: '#7C3AED', bg: 'rgba(124,58,237,0.08)' },
}

export function AdminTemplatesPage() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Templates</h1>
          <p className="admin-page-subtitle">Manage and publish workspace document templates</p>
        </div>
        <div className="admin-page-actions">
          <Button size="sm">
            <Plus size={13} />
            <span>New Template</span>
          </Button>
        </div>
      </div>

      {/* Summary strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
        {[
          { label: 'Published', value: '5', color: '#059669' },
          { label: 'In review', value: '1', color: '#D97706' },
          { label: 'Draft',     value: '1', color: 'var(--color-text-tertiary)' },
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
          placeholder="Search templates..."
        />
      </div>

      {/* Table */}
      <div className="vault-table-container">
        <table className="vault-table">
          <thead>
            <tr>
              <th>Template</th>
              <th>Category</th>
              <th>Author</th>
              <th>Status</th>
              <th>Uses</th>
              <th>Updated</th>
              <th style={{ width: 36 }}></th>
            </tr>
          </thead>
          <tbody>
            {templates.map(tpl => {
              const cat = categoryColors[tpl.category] ?? { color: 'var(--color-text-secondary)', bg: 'var(--color-bg-secondary)' }
              return (
                <tr key={tpl.id}>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 5, flexShrink: 0,
                        background: 'var(--color-accent-muted)',
                        border: '1px solid var(--color-accent-border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <LayoutTemplate size={13} color="var(--color-accent)" />
                      </div>
                      <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{tpl.name}</span>
                    </div>
                  </td>
                  <td>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', height: 20, padding: '0 8px',
                      borderRadius: 10, fontSize: 11, fontWeight: 600,
                      color: cat.color, background: cat.bg,
                    }}>
                      {tpl.category}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: 5, flexShrink: 0,
                        background: 'var(--color-bg-tertiary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 10, fontWeight: 700, color: 'var(--color-text-secondary)',
                      }}>
                        {tpl.authorInitials}
                      </div>
                      <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{tpl.author}</span>
                    </div>
                  </td>
                  <td>
                    <Badge status={tpl.status} label={tpl.statusLabel} />
                  </td>
                  <td>
                    <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                      {tpl.uses > 0 ? tpl.uses.toLocaleString() : '-'}
                    </span>
                  </td>
                  <td><span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{tpl.updated}</span></td>
                  <td>
                    <button style={{
                      width: 26, height: 26, border: 'none', background: 'none', borderRadius: 4,
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-text-quaternary)',
                    }}>
                      <MoreHorizontal size={13} />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
