import { Link } from 'react-router-dom'
import { LogoMark } from '@/components/brand/LogoMark'

const footerCols = [
  {
    heading: 'Product',
    links: [
      { label: 'Product overview', to: '/product'    },
      { label: 'Templates',        to: '/templates'  },
      { label: 'Pricing',          to: '/pricing'    },
      { label: 'Changelog',        to: '/changelog'  },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog',     to: '/blog'    },
      { label: 'FAQ',      to: '/faq'     },
      { label: 'Support',  to: '/support' },
      { label: 'Security', to: '/security'},
      { label: 'Status',   to: '/status'  },
      { label: 'Contact',  to: '/contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',          to: '/about'   },
      { label: 'Careers',        to: '/careers' },
      { label: 'Terms of service', to: '/terms' },
      { label: 'Privacy policy', to: '/privacy' },
    ],
  },
]

const badges = ['AES-256 encrypted', 'Full audit trail', 'No per-document fees']

export function PublicFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-top">
        <div>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <LogoMark size={26} variant="purple" />
            <span className="lp-header-name">
              <span className="lp-header-name-my">My</span><span className="lp-header-name-typist">Typist</span>
            </span>
          </Link>
          <p className="lp-footer-brand-desc">
            Document workflow for Nigerian teams.<br />
            Draft. Approve. Sign. Archive.<br />
            One system. Zero gaps.
          </p>
          <div className="lp-footer-badges">
            {badges.map(b => <span key={b} className="lp-footer-badge">{b}</span>)}
          </div>
        </div>

        <div className="lp-footer-links">
          {footerCols.map(col => (
            <div key={col.heading}>
              <div className="lp-footer-col-heading">{col.heading}</div>
              <div className="lp-footer-col-links">
                {col.links.map(link => (
                  <Link key={link.label} to={link.to} className="lp-footer-link">{link.label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="lp-footer-bottom">
        <span className="lp-footer-bottom-text">© 2026 MyTypist Technologies. All rights reserved.</span>
        <span className="lp-footer-bottom-text">Built for operations. Not for decoration.</span>
      </div>
    </footer>
  )
}
