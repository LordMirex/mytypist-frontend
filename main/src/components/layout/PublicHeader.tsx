import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const navItems = [
  { label: 'Product',    to: '/#product',    anchor: true  },
  { label: 'Pricing',    to: '/pricing',     anchor: false },
  { label: 'Templates',  to: '/templates',   anchor: false },
  { label: 'Enterprise', to: '/#enterprise', anchor: true  },
  { label: 'Support',    to: '/support',     anchor: false },
]

export function PublicHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  function NavItem({ label, to, anchor }: { label: string; to: string; anchor: boolean }) {
    if (anchor) {
      return (
        <a
          href={to}
          onClick={() => setMenuOpen(false)}
        >
          {label}
        </a>
      )
    }
    return <Link to={to} onClick={() => setMenuOpen(false)}>{label}</Link>
  }

  return (
    <>
      <header className="lp-header">
        <Link to="/" className="lp-header-brand">
          <div className="lp-header-logo">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2" y="1" width="9" height="11" rx="1.5" fill="rgba(255,255,255,0.15)" stroke="rgba(255,255,255,0.4)" strokeWidth="0.75"/>
              <rect x="4" y="3.5" width="5" height="1" rx="0.5" fill="white"/>
              <rect x="4" y="5.5" width="4" height="1" rx="0.5" fill="rgba(255,255,255,0.6)"/>
              <rect x="4" y="7.5" width="3" height="1" rx="0.5" fill="rgba(255,255,255,0.4)"/>
              <rect x="10" y="8" width="4" height="6" rx="1" fill="white" fillOpacity="0.95"/>
              <rect x="11.5" y="9.5" width="1" height="3" rx="0.5" fill="#6C47FF"/>
            </svg>
          </div>
          <span className="lp-header-name">
            <span className="lp-header-name-my">My</span><span className="lp-header-name-typist">Typist</span>
          </span>
        </Link>

        <nav className="lp-header-nav">
          {navItems.map(item => (
            <NavItem key={item.label} label={item.label} to={item.to} anchor={item.anchor} />
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

        {/* Mobile: hamburger only — no duplicate sign-in */}
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
              item.anchor
                ? <a key={item.label} href={item.to} className="lp-mobile-nav-link" onClick={() => setMenuOpen(false)}>{item.label}</a>
                : <Link key={item.label} to={item.to} className="lp-mobile-nav-link" onClick={() => setMenuOpen(false)}>{item.label}</Link>
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
