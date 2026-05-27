import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  FileText,
  LayoutTemplate,
  GitBranch,
  PenSquare,
  Archive,
  Settings,
  Shield,
  ChevronDown,
  Search,
} from 'lucide-react'
import { useUIStore } from '@/stores'

const navItems = [
  { to: '/studio',           icon: FileText,       label: 'Studio',    end: true  },
  { to: '/studio/templates', icon: LayoutTemplate,  label: 'Templates', count: 24  },
  { to: '/studio/pipeline',  icon: GitBranch,       label: 'Pipeline',  badge: 2, badgeVariant: 'pending'  },
  { to: '/studio/sign',      icon: PenSquare,       label: 'Sign',      badge: 4, badgeVariant: 'progress' },
  { to: '/studio/vault',     icon: Archive,         label: 'Vault'      },
]

const accountItems = [
  { to: '/studio/settings', icon: Settings, label: 'Settings' },
  { to: '/studio/admin',    icon: Shield,   label: 'Admin'    },
]

export function Sidebar() {
  const toggle = useUIStore((s) => s.toggleCommandPalette)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggle])

  return (
    <aside className="sidebar">
      {/* ── Brand header ── */}
      <div className="sidebar-header">
        <div className="sidebar-brand">
          <div className="sidebar-brand-icon">M</div>
          <div className="sidebar-brand-text">
            <span className="sidebar-brand-name">MyTypist</span>
            <span className="sidebar-brand-tag">Document OS</span>
          </div>
        </div>
        <button className="sidebar-cmd-k" onClick={toggle} title="Open command palette (⌘K)">
          <Search size={11} />
          <span>⌘K</span>
        </button>
      </div>

      {/* ── Nav body ── */}
      <div className="sidebar-body">

        {/* Workspace section */}
        <div className="sidebar-section">
          <div className="sidebar-section-label">Workspace</div>
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `sidebar-item${isActive ? ' sidebar-item--active' : ''}`
                }
              >
                <item.icon size={15} className="sidebar-item-icon" />
                <span className="sidebar-item-label">{item.label}</span>
                {item.badge != null && (
                  <span className={`sidebar-item-badge sidebar-item-badge--${item.badgeVariant}`}>
                    {item.badge}
                  </span>
                )}
                {item.count != null && !item.badge && (
                  <span className="sidebar-item-count">{item.count}</span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Push account section to bottom */}
        <div className="sidebar-spacer" />

        {/* Account section */}
        <div className="sidebar-section">
          <div className="sidebar-section-label">Account</div>
          <nav className="sidebar-nav">
            {accountItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `sidebar-item${isActive ? ' sidebar-item--active' : ''}`
                }
              >
                <item.icon size={15} className="sidebar-item-icon" />
                <span className="sidebar-item-label">{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* ── User row ── */}
      <div className="sidebar-user">
        <div className="sidebar-avatar">U</div>
        <div className="sidebar-user-info">
          <div className="sidebar-user-name">My Workspace</div>
          <div className="sidebar-user-sub">
            <span className="sidebar-plan-pill">Pro</span>
            <span>Professional</span>
          </div>
        </div>
        <ChevronDown size={13} className="sidebar-user-chevron" />
      </div>
    </aside>
  )
}
