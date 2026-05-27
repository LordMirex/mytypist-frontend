import { useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {
  FileText,
  LayoutTemplate,
  GitBranch,
  PenSquare,
  Archive,
  Settings,
  Shield,
} from 'lucide-react'
import { useUIStore } from '@/stores'

const navItems = [
  { to: '/studio', icon: FileText, label: 'Studio', end: true },
  { to: '/studio/templates', icon: LayoutTemplate, label: 'Templates' },
  { to: '/studio/pipeline', icon: GitBranch, label: 'Pipeline' },
  { to: '/studio/sign', icon: PenSquare, label: 'Sign' },
  { to: '/studio/vault', icon: Archive, label: 'Vault' },
]

const bottomItems = [
  { to: '/studio/settings', icon: Settings, label: 'Settings' },
  { to: '/studio/admin', icon: Shield, label: 'Admin' },
]

export function Sidebar() {
  const toggle = useUIStore((s) => s.toggleCommandPalette)
  const location = useLocation()

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        toggle()
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [toggle])

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <div className="sidebar-logo-icon">M</div>
        <span style={{ fontWeight: 600, fontSize: 14, letterSpacing: '-0.2px', color: 'var(--color-text-primary)' }}>
          MyTypist
        </span>
      </div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '8px 0', overflow: 'hidden' }}>
        <div style={{
          padding: '4px 12px 4px',
          fontSize: 10,
          fontWeight: 600,
          color: 'var(--color-text-tertiary)',
          textTransform: 'uppercase',
          letterSpacing: '0.6px',
          marginBottom: 2,
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
              <item.icon size={15} />
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border)', paddingTop: 8 }}>
          <div style={{
            padding: '4px 12px 4px',
            fontSize: 10,
            fontWeight: 600,
            color: 'var(--color-text-tertiary)',
            textTransform: 'uppercase',
            letterSpacing: '0.6px',
            marginBottom: 2,
          }}>
            Account
          </div>
          <nav className="sidebar-nav">
            {bottomItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `sidebar-item ${isActive ? 'sidebar-item--active' : ''}`
                }
              >
                <item.icon size={15} />
                <span>{item.label}</span>
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      <div style={{
        padding: '12px 12px',
        borderTop: '1px solid var(--color-border)',
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}>
        <div style={{
          width: 24,
          height: 24,
          borderRadius: 2,
          background: 'var(--color-bg-tertiary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--color-text-secondary)',
          flexShrink: 0,
        }}>
          U
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--color-text-primary)', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            My Workspace
          </div>
          <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', lineHeight: 1.3 }}>
            Professional
          </div>
        </div>
      </div>
    </aside>
  )
}
