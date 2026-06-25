import { NavLink, Outlet, useLocation } from 'react-router-dom'
import {
  LayoutDashboard, Users, FileText, TrendingUp, ToggleLeft,
  Shield, LayoutTemplate, Settings, ArrowLeft, ChevronRight,
} from 'lucide-react'

const adminNav = [
  { to: '/admin',            label: 'Overview',      icon: LayoutDashboard, end: true },
  { to: '/admin/users',      label: 'Users',         icon: Users },
  { to: '/admin/documents',  label: 'Documents',     icon: FileText },
  { to: '/admin/revenue',    label: 'Revenue',       icon: TrendingUp },
  { to: '/admin/flags',      label: 'Feature Flags', icon: ToggleLeft },
  { to: '/admin/audit',      label: 'Audit Log',     icon: Shield },
  { to: '/admin/templates',  label: 'Templates',     icon: LayoutTemplate },
  { to: '/admin/settings',   label: 'Settings',      icon: Settings },
]

const routeLabels: Record<string, string> = {
  '/admin':           'Overview',
  '/admin/users':     'Users',
  '/admin/documents': 'Documents',
  '/admin/revenue':   'Revenue',
  '/admin/flags':     'Feature Flags',
  '/admin/audit':     'Audit Log',
  '/admin/templates': 'Templates',
  '/admin/settings':  'Settings',
}

export function AdminShell() {
  const location = useLocation()
  const pageLabel = routeLabels[location.pathname] ?? 'Admin Console'

  return (
    <div className="admin-shell">
      {/* ── Sidebar ── */}
      <aside className="admin-sidebar">
        <div className="admin-sidebar-header">
          <div className="admin-sidebar-logo">
            <div className="admin-sidebar-logo-icon">
              <Shield size={13} />
            </div>
            <div className="admin-sidebar-logo-text">
              <span className="admin-sidebar-logo-name">Admin</span>
              <span className="admin-sidebar-logo-sub">MyTypist Console</span>
            </div>
          </div>
        </div>

        <nav className="admin-sidebar-nav">
          {adminNav.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `admin-nav-item${isActive ? ' admin-nav-item--active' : ''}`
              }
            >
              <item.icon size={15} className="admin-nav-icon" />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="admin-sidebar-footer">
          <NavLink to="/studio" className="admin-back-link">
            <ArrowLeft size={13} />
            <span>Back to App</span>
          </NavLink>
        </div>
      </aside>

      {/* ── Content area ── */}
      <div className="admin-content">
        {/* Top bar */}
        <header className="admin-topbar">
          <div className="admin-topbar-left">
            <span style={{ fontSize: 12, color: 'var(--color-text-quaternary)' }}>MyTypist</span>
            <ChevronRight size={11} style={{ color: 'var(--color-text-quaternary)', margin: '0 2px' }} />
            <span style={{ fontSize: 12, color: 'var(--color-text-quaternary)' }}>Admin</span>
            <ChevronRight size={11} style={{ color: 'var(--color-text-quaternary)', margin: '0 2px' }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-text-primary)' }}>{pageLabel}</span>
          </div>
          <div className="admin-topbar-right">
            <span className="admin-role-badge">
              <Shield size={10} />
              Super Admin
            </span>
            <div className="admin-avatar">A</div>
          </div>
        </header>

        {/* Page content */}
        <main className="admin-main">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
