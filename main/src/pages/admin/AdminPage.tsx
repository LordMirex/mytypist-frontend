import { useState } from 'react'
import {
  Users, Shield, Activity, Database, MoreHorizontal,
  TrendingUp, AlertTriangle, CheckCircle, Clock,
  UserPlus, Download, Search, Settings, ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

type UserRole = 'Admin' | 'Editor' | 'Viewer'
type UserStatus = 'active' | 'pending' | 'inactive'

type OrgUser = {
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
  { id: '1', name: 'Admin User', email: 'admin@mytypist.com', initials: 'AU', role: 'Admin', status: 'active', joined: 'Jan 2026', docs: 142, lastActive: 'now' },
  { id: '2', name: 'Sarah Mitchell', email: 'sarah@company.com', initials: 'SM', role: 'Editor', status: 'active', joined: 'Feb 2026', docs: 58, lastActive: '2h ago' },
  { id: '3', name: 'David Chen', email: 'd.chen@company.com', initials: 'DC', role: 'Editor', status: 'active', joined: 'Mar 2026', docs: 34, lastActive: '1d ago' },
  { id: '4', name: 'Priya Sharma', email: 'priya@company.com', initials: 'PS', role: 'Viewer', status: 'active', joined: 'Mar 2026', docs: 12, lastActive: '3d ago' },
  { id: '5', name: 'Mark Johnson', email: 'm.johnson@company.com', initials: 'MJ', role: 'Editor', status: 'pending', joined: '—', docs: 0, lastActive: 'Invite sent' },
  { id: '6', name: 'Emma Rodriguez', email: 'e.rodriguez@company.com', initials: 'ER', role: 'Viewer', status: 'inactive', joined: 'Dec 2025', docs: 7, lastActive: '2w ago' },
]

const roleColors: Record<UserRole, { color: string; bg: string }> = {
  Admin: { color: '#6C47FF', bg: 'rgba(108,71,255,0.08)' },
  Editor: { color: '#059669', bg: 'rgba(5,150,105,0.08)' },
  Viewer: { color: '#6B6B63', bg: 'rgba(107,107,99,0.08)' },
}

const statusMap: Record<UserStatus, 'complete' | 'pending' | 'draft'> = {
  active: 'complete',
  pending: 'pending',
  inactive: 'draft',
}

const auditLog = [
  { id: '1', action: 'Document exported',         user: 'Sarah Mitchell', target: 'Mutual NDA — Acme Corp',         time: '12m ago', type: 'info' },
  { id: '2', action: 'Signature request sent',    user: 'Admin User',     target: 'Board Resolution — June 2026',  time: '2h ago',  type: 'info' },
  { id: '3', action: 'Document advanced to Sign', user: 'Admin User',     target: 'Vendor Master Agreement',       time: '4h ago',  type: 'info' },
  { id: '4', action: 'User invited',              user: 'Admin User',     target: 'Mark Johnson',                  time: '5h ago',  type: 'info' },
  { id: '5', action: 'Fidelity check passed',     user: 'System',         target: 'Q4 Budget Proposal',            time: '1d ago',  type: 'info' },
  { id: '6', action: 'Document archived',         user: 'Sarah Mitchell', target: 'Employment Agreement — J. Doe', time: '2d ago',  type: 'info' },
]

const navSections = [
  { id: 'overview', label: 'Overview', icon: Activity },
  { id: 'users', label: 'Users & Roles', icon: Users },
  { id: 'audit', label: 'Audit Log', icon: Shield },
  { id: 'usage', label: 'Usage & Billing', icon: Database },
]

export function AdminPage() {
  const [activeSection, setActiveSection] = useState('overview')
  const [search, setSearch] = useState('')

  const filteredUsers = users.filter(u =>
    !search || u.name.toLowerCase().includes(search.toLowerCase()) || u.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="page" style={{ maxWidth: 'none' }}>
      {/* Header */}
      <header style={{ marginBottom: 28, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <div style={{
              width: 22, height: 22, borderRadius: 5, background: 'rgba(108,71,255,0.1)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Shield size={13} color="var(--color-accent)" />
            </div>
            <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              Admin Console
            </span>
          </div>
          <h1 className="page-title">System Administration</h1>
          <p className="page-subtitle">Manage users, roles, audit logs, and workspace governance</p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <Button variant="secondary" size="sm">
            <Download size={13} />
            <span>Export Report</span>
          </Button>
          <Button size="sm">
            <UserPlus size={13} />
            <span>Invite User</span>
          </Button>
        </div>
      </header>

      <div className="settings-layout" style={{ gap: 32, alignItems: 'flex-start' }}>
        {/* Left nav */}
        <aside className="settings-sidebar" style={{ width: 180 }}>
          {navSections.map(sec => (
            <button
              key={sec.id}
              onClick={() => setActiveSection(sec.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 9,
                width: '100%', padding: '8px 12px', borderRadius: 6,
                fontSize: 13, fontWeight: activeSection === sec.id ? 600 : 400,
                color: activeSection === sec.id ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                background: activeSection === sec.id ? 'var(--color-accent-muted)' : 'none',
                border: 'none', cursor: 'pointer', textAlign: 'left',
                transition: 'background 60ms, color 60ms',
              }}
            >
              <sec.icon size={15} style={{ flexShrink: 0, color: activeSection === sec.id ? 'var(--color-accent)' : 'var(--color-text-tertiary)' }} />
              {sec.label}
            </button>
          ))}
        </aside>

        {/* Main content */}
        <main className="settings-content">

          {/* ─── OVERVIEW ─── */}
          {activeSection === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Stats grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
                {[
                  { label: 'Total users', value: '6', icon: Users, color: '#6C47FF', bg: 'rgba(108,71,255,0.06)' },
                  { label: 'Docs generated', value: '4,218', icon: TrendingUp, color: '#059669', bg: 'rgba(5,150,105,0.06)' },
                  { label: 'Pending invites', value: '1', icon: Clock, color: '#D97706', bg: 'rgba(217,119,6,0.06)' },
                  { label: 'Security alerts', value: '0', icon: AlertTriangle, color: '#059669', bg: 'rgba(5,150,105,0.06)' },
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
                <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Recent Activity</h3>
                  <button onClick={() => setActiveSection('audit')} style={{
                    fontSize: 12, color: 'var(--color-accent)', background: 'none',
                    border: 'none', cursor: 'pointer', fontWeight: 500,
                  }}>
                    View all →
                  </button>
                </div>
                <div style={{
                  background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                  borderRadius: 6, overflow: 'hidden',
                }}>
                  {auditLog.slice(0, 4).map((entry, i) => (
                    <div key={entry.id} style={{
                      display: 'flex', alignItems: 'center', gap: 12,
                      padding: '12px 16px',
                      borderBottom: i < 3 ? '1px solid var(--color-border-subtle)' : 'none',
                    }}>
                      <div style={{
                        width: 28, height: 28, borderRadius: 6, flexShrink: 0,
                        background: entry.type === 'warn' ? 'rgba(220,38,38,0.08)' : 'var(--color-bg-secondary)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {entry.type === 'warn'
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
                <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 12 }}>System Health</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[
                    { label: 'API Uptime', value: '99.98%', color: '#059669' },
                    { label: 'Storage Used', value: '18.4 / 50 GB', color: 'var(--color-text-primary)' },
                    { label: 'Avg. Response', value: '142ms', color: 'var(--color-text-primary)' },
                    { label: 'Active Sessions', value: '3 users', color: 'var(--color-text-primary)' },
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
          )}

          {/* ─── USERS ─── */}
          {activeSection === 'users' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {/* Search + invite */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'space-between' }}>
                <div style={{ position: 'relative' }}>
                  <Search size={14} style={{
                    position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                    color: 'var(--color-text-tertiary)', pointerEvents: 'none',
                  }} />
                  <input
                    className="input"
                    style={{ height: 32, paddingLeft: 32, width: 260 }}
                    placeholder="Search users…"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                  />
                </div>
                <Button size="sm">
                  <UserPlus size={13} />
                  <span>Invite User</span>
                </Button>
              </div>

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
                    {filteredUsers.map(user => (
                      <tr key={user.id}>
                        <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                            <div style={{
                              width: 30, height: 30, borderRadius: 7,
                              background: 'var(--color-accent-muted)',
                              border: '1px solid var(--color-accent-border)',
                              display: 'flex', alignItems: 'center', justifyContent: 'center',
                              fontSize: 11, fontWeight: 700, color: 'var(--color-accent)',
                              flexShrink: 0,
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
                        <td>
                          <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{user.lastActive}</span>
                        </td>
                        <td>
                          <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{user.joined}</span>
                        </td>
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
                display: 'flex', gap: 24,
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
          )}

          {/* ─── AUDIT LOG ─── */}
          {activeSection === 'audit' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ position: 'relative' }}>
                  <Search size={14} style={{
                    position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
                    color: 'var(--color-text-tertiary)', pointerEvents: 'none',
                  }} />
                  <input className="input" style={{ height: 32, paddingLeft: 32, width: 260 }} placeholder="Search audit log…" />
                </div>
                <Button variant="secondary" size="sm">
                  <Download size={13} />
                  <span>Export CSV</span>
                </Button>
              </div>

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
                    {auditLog.map((entry, i) => (
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
                              <User size={11} color="var(--color-text-tertiary)" />
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
            </div>
          )}

          {/* ─── USAGE ─── */}
          {activeSection === 'usage' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Plan card */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(108,71,255,0.08) 0%, rgba(108,71,255,0.03) 100%)',
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
                    <span style={{ fontSize: 13, color: 'var(--color-text-secondary)' }}>Active plan</span>
                  </div>
                  <div style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.4px' }}>
                    $149 / month
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

              {/* Usage bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: 0 }}>Resource Usage</h3>
                {[
                  { label: 'Documents generated', used: 4218, total: 10000, unit: 'docs', color: '#6C47FF' },
                  { label: 'Storage', used: 18.4, total: 50, unit: 'GB', color: '#059669' },
                  { label: 'Signature requests', used: 23, total: 100, unit: 'this month', color: '#D97706' },
                  { label: 'API calls', used: 8420, total: 50000, unit: 'calls', color: '#6C47FF' },
                ].map(item => {
                  const pct = Math.round((item.used / item.total) * 100)
                  return (
                    <div key={item.label} style={{
                      background: 'var(--color-surface)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 6, padding: '14px 16px',
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
                        <span style={{ fontSize: 13, color: 'var(--color-text-secondary)', fontWeight: 500 }}>{item.label}</span>
                        <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                          {typeof item.used === 'number' && item.used >= 1000
                            ? `${(item.used / 1000).toFixed(1)}k`
                            : item.used} / {typeof item.total === 'number' && item.total >= 1000
                              ? `${(item.total / 1000).toFixed(0)}k`
                              : item.total} {item.unit}
                        </span>
                      </div>
                      <div style={{ height: 6, background: 'var(--color-bg-tertiary)', borderRadius: 3, overflow: 'hidden' }}>
                        <div style={{
                          height: '100%',
                          width: `${pct}%`,
                          background: pct > 80 ? '#DC2626' : item.color,
                          borderRadius: 3,
                          transition: 'width 400ms ease',
                        }} />
                      </div>
                      <div style={{ fontSize: 11, color: 'var(--color-text-quaternary)', marginTop: 5 }}>
                        {pct}% used
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
