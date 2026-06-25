import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { LogoMark } from '@/components/brand/LogoMark'

const navItems = [
  { label: 'Product',    to: '/product'   },
  { label: 'Pricing',    to: '/pricing'   },
  { label: 'Templates',  to: '/templates' },
  { label: 'Enterprise', to: '/pricing'   },
  { label: 'Support',    to: '/support'   },
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
            <Link key={item.label} to={item.to}>{item.label}</Link>
          ))}
        </nav>

        <div className="lp-header-ctas">
          <Link to="/auth">
            <button className="btn btn--ghost btn--sm">Sign in</button>
          </Link>
          <Link to="/auth">
            <button className="btn btn--primary btn--sm">Start free trial</button>
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
