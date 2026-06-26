import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { LogoMark } from '@/components/brand/LogoMark'

const navItems = [
  { label: 'Product',   to: '/product',    badge: null   },
  { label: 'Pricing',   to: '/pricing',    badge: null   },
  { label: 'Templates', to: '/templates',  badge: 'Free' },
  { label: 'FAQ',       to: '/faq',        badge: null   },
  { label: 'Support',   to: '/support',    badge: null   },
]

export function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="lp-header">
        <Link to="/" className="lp-header-brand">
          <LogoMark size={28} variant="tonal" />
          <span className="lp-header-name">
            <span className="lp-header-name-my">My</span><span className="lp-header-name-typist">Typist</span>
          </span>
        </Link>

        <nav className="lp-header-nav">
          {navItems.map(item => (
            <Link key={item.label} to={item.to} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              {item.label}
              {item.badge && (
                <span style={{
                  fontSize: 9, fontWeight: 800, letterSpacing: 0.3, padding: '2px 5px',
                  borderRadius: 4, background: 'rgba(108,71,255,0.12)',
                  color: 'var(--color-accent)', border: '1px solid rgba(108,71,255,0.2)',
                  lineHeight: 1,
                }}>
                  {item.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        <div className="lp-header-ctas">
          <Link to="/auth">
            <button className="btn btn--ghost btn--sm">Sign in</button>
          </Link>
          <Link to="/auth">
            <button style={{ height: 28, padding: '0 12px', fontSize: 12, fontWeight: 600, display: 'inline-flex', alignItems: 'center', background: '#111', color: '#fff', border: 'none', borderRadius: 6, cursor: 'pointer', letterSpacing: '-0.01em', flexShrink: 0 }}>Start free trial</button>
          </Link>
        </div>

        <div className="lp-header-right">
          <button
            className={`lp-hamburger${menuOpen ? ' lp-hamburger--open' : ''}`}
            onClick={() => setMenuOpen(v => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span className="lp-hamburger-bar" />
            <span className="lp-hamburger-bar" />
            <span className="lp-hamburger-bar" />
          </button>
        </div>
      </header>

      {menuOpen && (
        <nav className="lp-mobile-nav">
          <div className="lp-mobile-nav-links">
            {navItems.map(item => (
              <Link key={item.label} to={item.to} className="lp-mobile-nav-link" onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="lp-mobile-nav-ctas">
            <Link to="/auth" onClick={() => setMenuOpen(false)}>
              <button className="btn btn--primary" style={{ width: '100%', height: 44, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                Start free trial
                <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/auth" onClick={() => setMenuOpen(false)}>
              <button className="btn btn--secondary" style={{ width: '100%', height: 44, fontSize: 14 }}>
                Sign in
              </button>
            </Link>
          </div>
        </nav>
      )}
    </>
  )
}
