import { useLocation } from 'react-router-dom'
import { Moon, Sun, ChevronRight, Menu } from 'lucide-react'
import { useUIStore } from '@/stores'

const routeLabels: Record<string, string> = {
  '/studio':           'Studio',
  '/studio/templates': 'Templates',
  '/studio/pipeline':  'Pipeline',
  '/studio/sign':      'Sign',
  '/studio/vault':     'Vault',
  '/studio/settings':  'Settings',
  '/studio/admin':     'Admin',
}

export function Toolbar() {
  const location      = useLocation()
  const toggleCmd     = useUIStore((s) => s.toggleCommandPalette)
  const toggleSidebar = useUIStore((s) => s.toggleSidebar)
  const theme         = useUIStore((s) => s.theme)
  const setTheme      = useUIStore((s) => s.setTheme)
  const label         = routeLabels[location.pathname] ?? 'Studio'

  return (
    <header className="toolbar">
      <div className="toolbar-left">
        {/* Mobile hamburger — hidden on desktop via CSS */}
        <button
          className="toolbar-hamburger"
          onClick={toggleSidebar}
          title="Toggle navigation"
          aria-label="Toggle navigation"
        >
          <Menu size={18} />
        </button>

        <span style={{ fontSize: 12, color: 'var(--color-text-quaternary)' }}>MyTypist</span>
        <ChevronRight size={11} style={{ color: 'var(--color-text-quaternary)', margin: '0 1px' }} />
        <span className="toolbar-breadcrumb" style={{ fontWeight: 500, color: 'var(--color-text-primary)' }}>
          {label}
        </span>
      </div>

      <div className="toolbar-right">
        <button
          className="toolbar-cmd-btn"
          onClick={toggleCmd}
          title="Command palette (⌘K)"
        >
          <span style={{ fontSize: 10, color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.02em' }}>⌘K</span>
        </button>
        <button
          className="toolbar-icon-btn"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          title="Toggle theme"
        >
          {theme === 'dark' ? <Sun size={14} /> : <Moon size={14} />}
        </button>
        <div style={{
          width: 26,
          height: 26,
          borderRadius: 4,
          background: 'var(--color-bg-tertiary)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--color-text-secondary)',
          cursor: 'pointer',
          flexShrink: 0,
        }}>
          U
        </div>
      </div>
    </header>
  )
}
