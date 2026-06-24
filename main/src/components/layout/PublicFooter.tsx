import { Link } from 'react-router-dom'

const footerCols = [
  {
    heading: 'Product',
    links: [
      { label: 'Studio',     to: '/studio'          },
      { label: 'Templates',  to: '/templates'        },
      { label: 'Pipeline',   to: '/studio/pipeline'  },
      { label: 'Signatures', to: '/studio/sign'      },
      { label: 'Vault',      to: '/studio/vault'     },
      { label: 'Pricing',    to: '/pricing'          },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About',            to: '/about'   },
      { label: 'Blog',             to: '/blog'    },
      { label: 'Careers',          to: '/careers' },
      { label: 'Become a Partner', to: '/partner' },
      { label: 'Press',            to: '/press'   },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Terms of Service', to: '/terms'    },
      { label: 'Privacy Policy',   to: '/privacy'  },
      { label: 'Cookie Policy',    to: '/cookies'  },
      { label: 'Security',         to: '/security' },
    ],
  },
  {
    heading: 'Developers',
    links: [
      { label: 'API Reference', to: '/api'       },
      { label: 'Webhooks',      to: '/api#hooks' },
      { label: 'Status Page',   to: '/status'    },
      { label: 'Changelog',     to: '/changelog' },
    ],
  },
]

const badges = ['SOC 2 Type II', 'GDPR', 'HIPAA-ready', 'ISO 27001']

export function PublicFooter() {
  return (
    <footer className="lp-footer">
      <div className="lp-footer-top">
        <div>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            <div className="lp-header-logo">M</div>
            <span className="lp-header-name">MyTypist</span>
          </Link>
          <p className="lp-footer-brand-desc">
            Enterprise document infrastructure.<br />
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
                  <Link key={link.label} to={link.to} className="lp-footer-link">
                    {link.label}
                  </Link>
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
