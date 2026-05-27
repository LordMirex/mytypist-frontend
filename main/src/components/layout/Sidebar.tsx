import { NavLink } from 'react-router-dom'
import { FileText, LayoutTemplate, GitBranch, PenSquare, Archive, Settings, Shield, Command } from 'lucide-react'

const navItems = [
  { to: '/studio', icon: FileText, label: 'Studio', end: true },
  { to: '/studio/templates', icon: LayoutTemplate, label: 'Templates' },
  { to: '/studio/pipeline', icon: GitBranch, label: 'Pipeline' },
  { to: '/studio/sign', icon: PenSquare, label: 'Sign' },
  { to: '/studio/vault', icon: Archive, label: 'Vault' },
  { to: '/studio/settings', icon: Settings, label: 'Settings' },
  { to: '/studio/admin', icon: Shield, label: 'Admin' },
]

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">M</div>
        <span style={{ fontWeight: 600, fontSize: 15, letterSpacing: '-0.2px', color: 'var(--color-text-primary)' }}>MyTypist</span>
      </div>
      
      <div style={{ padding: 'var(--space-4) var(--space-2) var(--space-1)' }}>
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between',
          padding: '0 var(--space-2)',
          marginBottom: 8,
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--color-text-tertiary)',
          textTransform: 'uppercase',
          letterSpacing: '0.5px'
        }}>
          Workspace
        </div>
        <nav className="sidebar-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `sidebar-item ${isActive ? 'sidebar-item--active' : ''}`
              }
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>
      </div>

      <div style={{ marginTop: 'auto', padding: 'var(--space-4)' }}>
        <div style={{ 
          background: 'var(--color-bg-tertiary)', 
          borderRadius: 'var(--radius-md)', 
          padding: 'var(--space-2) var(--space-3)',
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 12,
          color: 'var(--color-text-secondary)',
          cursor: 'pointer',
          border: '1px solid var(--color-border-subtle)'
        }}>
          <Command size={14} />
          <span>Search...</span>
          <span style={{ marginLeft: 'auto', opacity: 0.5 }}>⌘K</span>
        </div>
      </div>
    </aside>
  )
}
