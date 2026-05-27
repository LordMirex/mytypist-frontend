import { useLocation } from 'react-router-dom'
import { Moon, Sun, ChevronRight } from 'lucide-react'
import { useUIStore } from '@/stores'

const routeLabels: Record<string, string> = {
  '/studio': 'Studio',
  '/studio/templates': 'Templates',
  '/studio/pipeline': 'Pipeline',
  '/studio/sign': 'Sign',
  '/studio/vault': 'Vault',
  '/studio/settings': 'Settings',
  '/studio/admin': 'Admin',
}

export function Toolbar() {
  const location = useLocation()
  const toggle = useUIStore((s) => s.toggleCommandPalette)
  const theme = useUIStore((s) => s.theme)
  const setTheme = useUIStore((s) => s.setTheme)
  const label = routeLabels[location.pathname] ?? 'Studio'

  return (
    <header className="toolbar">
      <div className="toolbar-left">
        <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>MyTypist</span>
        <ChevronRight size={12} style={{ color: 'var(--color-text-quaternary)', margin: '0 2px' }} />
        <span className="toolbar-breadcrumb">{label}</span>
      </div>
      <div className="toolbar-right">
        <button
          className="toolbar-cmd-btn"
          onClick={toggle}
          title="Command palette (⌘K)"
        >
          <span style={{ fontSize: 11, color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>⌘K</span>
        </button>
        <button
          className="toolbar-icon-btn"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          title="Toggle theme"
        >
          {theme === 'dark'
            ? <Sun size={14} />
            : <Moon size={14} />
          }
        </button>
        <div style={{
          width: 26,
          height: 26,
          borderRadius: 2,
          background: 'var(--color-bg-tertiary)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 11,
          fontWeight: 600,
          color: 'var(--color-text-secondary)',
          cursor: 'pointer',
        }}>
          U
        </div>
      </div>
    </header>
  )
}
