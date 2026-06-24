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
          <div className="lp-header-logo">M</div>
          <span className="lp-header-name">MyTypist</span>
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
