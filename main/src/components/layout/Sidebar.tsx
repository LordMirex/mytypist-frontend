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
  ChevronRight,
  PanelLeftClose,
  PanelLeftOpen,
} from 'lucide-react'
import { useUIStore } from '@/stores'

const navItems = [
  { to: '/studio',           icon: FileText,       label: 'Studio',    end: true  },
  { to: '/studio/templates', icon: LayoutTemplate,  label: 'Templates', count: 24  },
  { to: '/studio/pipeline',  icon: GitBranch,       label: 'Pipeline',  badge: 2, badgeVariant: 'pending'  },
  { to: '/studio/sign',      icon: PenSquare,       label: 'Sign',      badge: 4, badgeVariant: 'progress' },
  { to: '/studio/vault',     icon: Archive,         label: 'Vault'      },
]

const settingsItems = [
  { to: '/studio/settings', icon: Settings, label: 'Settings' },
]

export function Sidebar() {
  const toggle        = useUIStore((s) => s.toggleCommandPalette)
  const sidebarOpen   = useUIStore((s) => s.sidebarOpen)
  const toggleSidebar = useUIStore((s) => s.toggleSidebar)
  const collapsed     = !sidebarOpen

  function closeMobile() {
    if (window.innerWidth < 768) toggleSidebar()
  }

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
    <aside className={`sidebar${collapsed ? ' sidebar--collapsed' : ''}`}>

      {/* ── Brand / header ── */}
      <div className="sidebar-header">
        {!collapsed && (
          <div className="sidebar-brand">
            <div className="sidebar-brand-icon">M</div>
            <div className="sidebar-brand-text">
              <span className="sidebar-brand-name">MyTypist</span>
              <span className="sidebar-brand-sub">Document OS</span>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="sidebar-brand-icon sidebar-brand-icon--solo">M</div>
        )}
        <button
          className="sidebar-toggle"
          onClick={toggleSidebar}
          title={collapsed ? 'Expand sidebar (⌘B)' : 'Collapse sidebar (⌘B)'}
        >
          {collapsed
            ? <PanelLeftOpen  size={15} />
            : <PanelLeftClose size={15} />}
        </button>
      </div>

      {/* ── Nav body ── */}
      <div className="sidebar-body">

        {/* Workspace section */}
        <div className="sidebar-section">
          {!collapsed && <div className="sidebar-section-label">Workspace</div>}
          <nav className="sidebar-nav">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `sidebar-item${isActive ? ' sidebar-item--active' : ''}`
                }
                title={collapsed ? item.label : undefined}
                onClick={closeMobile}
              >
                <item.icon size={16} className="sidebar-item-icon" />
                {!collapsed && (
                  <>
                    <span className="sidebar-item-label">{item.label}</span>
                    {item.badge != null && (
                      <span className={`sidebar-item-badge sidebar-item-badge--${item.badgeVariant}`}>
                        {item.badge}
                      </span>
                    )}
                    {item.count != null && item.badge == null && (
                      <span className="sidebar-item-count">{item.count}</span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        <div className="sidebar-spacer" />

        {/* Account section */}
        <div className="sidebar-section">
          {!collapsed && <div className="sidebar-section-label">Account</div>}
          <nav className="sidebar-nav">
            {settingsItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `sidebar-item${isActive ? ' sidebar-item--active' : ''}`
                }
                title={collapsed ? item.label : undefined}
                onClick={closeMobile}
              >
                <item.icon size={16} className="sidebar-item-icon" />
                {!collapsed && (
                  <span className="sidebar-item-label">{item.label}</span>
                )}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Admin — visually distinct elevated access */}
        <div className="sidebar-admin-block">
          <NavLink
            to="/studio/admin"
            className={({ isActive }) =>
              `sidebar-item sidebar-item--admin${isActive ? ' sidebar-item--admin-active' : ''}`
            }
            title={collapsed ? 'Admin Console' : undefined}
            onClick={closeMobile}
          >
            <Shield size={15} className="sidebar-item-icon" />
            {!collapsed && (
              <>
                <span className="sidebar-item-label">Admin Console</span>
                <span className="sidebar-admin-badge">Admin</span>
              </>
            )}
          </NavLink>
        </div>
      </div>

      {/* ── User row ── */}
      <div className="sidebar-user" title={collapsed ? 'My Workspace — Professional' : undefined}>
        <div className="sidebar-avatar">U</div>
        {!collapsed && (
          <>
            <div className="sidebar-user-info">
              <div className="sidebar-user-name">My Workspace</div>
              <div className="sidebar-user-plan">Professional</div>
            </div>
            <ChevronRight size={12} className="sidebar-user-chevron" />
          </>
        )}
      </div>
    </aside>
  )
}
