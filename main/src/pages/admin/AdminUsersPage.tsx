import { useState } from 'react'
import { Search, UserPlus, MoreHorizontal } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

type UserRole = 'Admin' | 'Editor' | 'Viewer'
type UserStatus = 'active' | 'pending' | 'inactive'

interface OrgUser {
  id: string
  name: string
  email: string
  initials: string
  role: UserRole
  status: UserStatus
  joined: string
  docs: number
  lastActive: string
}

const users: OrgUser[] = [
  { id: '1', name: 'Admin User',      email: 'admin@mytypist.com',         initials: 'AU', role: 'Admin',  status: 'active',   joined: 'Jan 2026', docs: 142, lastActive: 'now'       },
  { id: '2', name: 'Adaeze Okonkwo',  email: 'adaeze@company.com',         initials: 'AO', role: 'Editor', status: 'active',   joined: 'Feb 2026', docs: 58,  lastActive: '2h ago'    },
  { id: '3', name: 'Chinedu Eze',     email: 'chinedu.eze@company.com',    initials: 'CE', role: 'Editor', status: 'active',   joined: 'Mar 2026', docs: 34,  lastActive: '1d ago'    },
  { id: '4', name: 'Funke Adebayo',   email: 'funke.adebayo@company.com',  initials: 'FA', role: 'Viewer', status: 'active',   joined: 'Mar 2026', docs: 12,  lastActive: '3d ago'    },
  { id: '5', name: 'Tunde Bakare',    email: 'tunde.bakare@company.com',   initials: 'TB', role: 'Editor', status: 'pending',  joined: '-',        docs: 0,   lastActive: 'Invite sent' },
  { id: '6', name: 'Ngozi Adeyemi',   email: 'ngozi.adeyemi@company.com',  initials: 'NA', role: 'Viewer', status: 'inactive', joined: 'Dec 2025', docs: 7,   lastActive: '2w ago'    },
]

const roleColors: Record<UserRole, { color: string; bg: string }> = {
  Admin:  { color: '#6C47FF', bg: 'rgba(108,71,255,0.08)' },
  Editor: { color: '#059669', bg: 'rgba(5,150,105,0.08)'  },
  Viewer: { color: '#6B6B63', bg: 'rgba(107,107,99,0.08)' },
}

const statusMap: Record<UserStatus, 'complete' | 'pending' | 'draft'> = {
  active:   'complete',
  pending:  'pending',
  inactive: 'draft',
}

export function AdminUsersPage() {
  const [search, setSearch] = useState('')

  const filtered = users.filter(u =>
    !search ||
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Users</h1>
          <p className="admin-page-subtitle">Manage workspace members and their roles</p>
        </div>
        <div className="admin-page-actions">
          <Button size="sm">
            <UserPlus size={13} />
            <span>Invite User</span>
          </Button>
        </div>
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
          placeholder="Search users..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>

      {/* Table */}
      <div className="vault-table-container">
        <table className="vault-table">
          <thead>
            <tr>
              <th>User</th>
              <th>Role</th>
              <th>Status</th>
              <th>Docs</th>
              <th>Last Active</th>
              <th>Joined</th>
              <th style={{ width: 36 }}></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(user => (
              <tr key={user.id}>
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 30, height: 30, borderRadius: 7,
                      background: 'var(--color-accent-muted)',
                      border: '1px solid var(--color-accent-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 11, fontWeight: 700, color: 'var(--color-accent)', flexShrink: 0,
                    }}>
                      {user.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{user.name}</div>
                      <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginTop: 1 }}>{user.email}</div>
                    </div>
                  </div>
                </td>
                <td>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', height: 20, padding: '0 8px',
                    borderRadius: 10, fontSize: 11, fontWeight: 600,
                    color: roleColors[user.role].color,
                    background: roleColors[user.role].bg,
                  }}>
                    {user.role}
                  </span>
                </td>
                <td>
                  <Badge status={statusMap[user.status]} label={user.status.charAt(0).toUpperCase() + user.status.slice(1)} />
                </td>
                <td>
                  <span style={{ fontSize: 13, fontFamily: 'var(--font-mono)', color: 'var(--color-text-secondary)' }}>
                    {user.docs}
                  </span>
                </td>
                <td><span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{user.lastActive}</span></td>
                <td><span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{user.joined}</span></td>
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
            ))}
          </tbody>
        </table>
      </div>

      {/* Role legend */}
      <div style={{
        background: 'var(--color-bg-secondary)',
        border: '1px solid var(--color-border)',
        borderRadius: 6, padding: '14px 16px',
        display: 'flex', gap: 24, flexWrap: 'wrap',
      }}>
        <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-tertiary)' }}>Role permissions:</span>
        {Object.entries(roleColors).map(([role, c]) => (
          <div key={role} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: c.color }} />
            <span style={{ fontSize: 12, color: 'var(--color-text-secondary)', fontWeight: 500 }}>{role}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
