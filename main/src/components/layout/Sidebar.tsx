import { NavLink } from 'react-router-dom'
import { FileText, LayoutTemplate, GitBranch, PenSquare, Archive, Settings, Shield } from 'lucide-react'

const navItems = [
  { to: '/studio', icon: FileText, label: 'Studio' },
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
        <span className="sidebar-logo-text">M</span>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar-item ${isActive ? 'sidebar-item--active' : ''}`
            }
          >
            <item.icon size={18} />
            <span>{item.label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  )
}
