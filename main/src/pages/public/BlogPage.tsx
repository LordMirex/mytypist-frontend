import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const posts = [
  {
    slug: 'employment-contract-mistakes',
    category: 'HR & Legal',
    date: '18 June 2026',
    readTime: '6 min read',
    title: 'The employment contract errors that cost Nigerian companies the most',
    excerpt: 'Vague probation clauses, unsigned offer letters used as evidence, and salary fields left as "to be confirmed" — these are the document errors we see most often in Nigerian HR disputes. Here is how to fix them before they become problems.',
  },
  {
    slug: 'esignatures-legal-validity-nigeria',
    category: 'Legal',
    date: '10 June 2026',
    readTime: '8 min read',
    title: 'Are e-signatures legally valid in Nigeria?',
    excerpt: 'The Electronic Transactions Act and NITDA guidelines both recognize digital signatures in most commercial contexts. But there are specific transaction types where a wet signature is still required. We break down when an e-signature holds, and when it does not.',
  },
  {
    slug: 'document-pipeline-vs-email',
    category: 'Operations',
    date: '2 June 2026',
    readTime: '5 min read',
    title: 'Why email is the worst document approval system you are already using',
    excerpt: 'You send the draft as an attachment. It comes back with tracked changes in a different filename. Your colleague CC\'d someone who should not have seen it. The approved version is in someone\'s Downloads folder. There is a better way.',
  },
  {
    slug: 'nda-template-guide-nigeria',
    category: 'Templates',
    date: '25 May 2026',
    readTime: '4 min read',
    title: 'What a Nigerian NDA actually needs to be enforceable',
    excerpt: 'Many NDA templates circulating in Nigerian business circles were drafted for UK or US jurisdictions. They reference courts and governing laws that make no sense for a Lagos-based agreement. Here is what your NDA actually needs.',
  },
  {
    slug: 'freelance-contracts-lagos',
    category: 'Templates',
    date: '15 May 2026',
    readTime: '5 min read',
    title: 'Freelance contracts in Lagos: what every service provider should include',
    excerpt: 'Payment milestones, intellectual property ownership, revision limits, and what happens if the client goes quiet — the gaps in most freelance contracts are predictable. We walk through the clauses that protect your work and your payment.',
  },
  {
    slug: 'mytypist-launch',
    category: 'Company',
    date: '1 March 2026',
    readTime: '3 min read',
    title: 'We built the document OS we wished existed',
    excerpt: 'After watching teams lose deals, fail audits, and spend days on paperwork that should take minutes, we decided to build the document workflow tool that Nigerian businesses actually need. Here is the story of how MyTypist started.',
  },
]

const categoryColor: Record<string, string> = {
  'HR & Legal':  'var(--color-status-pending)',
  'Legal':       'var(--color-status-progress)',
  'Operations':  'var(--color-status-draft)',
  'Templates':   'var(--color-status-complete)',
  'Company':     'var(--color-accent)',
}

const categoryBg: Record<string, string> = {
  'HR & Legal':  'var(--color-status-pending-bg)',
  'Legal':       'var(--color-status-progress-bg)',
  'Operations':  'var(--color-status-draft-bg)',
  'Templates':   'var(--color-status-complete-bg)',
  'Company':     'var(--color-accent-muted)',
}

export function BlogPage() {
  const [featured, ...rest] = posts

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PublicHeader />

      {/* Header */}
      <section className="lp-section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="lp-section-inner">
          <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: 12 }}>
            Writing.
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: 480 }}>
            On document operations, legal clarity, and building better workflows for Nigerian businesses.
          </p>
        </div>
      </section>

      {/* Featured post */}
      <section className="lp-section" style={{ paddingBottom: 0 }}>
        <div className="lp-section-inner">
          <div style={{
            padding: '32px',
            background: 'var(--color-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 10,
            display: 'flex',
            flexDirection: 'column',
            gap: 16,
            marginBottom: 48,
            transition: 'border-color 120ms',
            cursor: 'default',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(108,71,255,0.25)')}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                fontSize: 10, fontWeight: 700, letterSpacing: 0.3,
                padding: '2px 7px', borderRadius: 3,
                color: categoryColor[featured.category] ?? 'var(--color-accent)',
                background: categoryBg[featured.category] ?? 'var(--color-accent-muted)',
              }}>
                {featured.category}
              </span>
              <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{featured.date} · {featured.readTime}</span>
            </div>
            <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--color-text-primary)', lineHeight: 1.25, margin: 0 }}>
              {featured.title}
            </h2>
            <p style={{ fontSize: 14, lineHeight: 1.75, color: 'var(--color-text-secondary)', margin: 0 }}>
              {featured.excerpt}
            </p>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontSize: 13, fontWeight: 600, color: 'var(--color-accent)', cursor: 'pointer' }}>
              Read article <ArrowRight size={13} />
            </span>
          </div>
        </div>
      </section>

      {/* Post grid */}
      <section className="lp-section" style={{ paddingTop: 0 }}>
        <div className="lp-section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 20 }}>
            {rest.map(post => (
              <div
                key={post.slug}
                style={{
                  padding: '24px',
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 8,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                  cursor: 'default',
                  transition: 'border-color 120ms',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(108,71,255,0.25)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--color-border)')}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, letterSpacing: 0.3,
                    padding: '2px 7px', borderRadius: 3,
                    color: categoryColor[post.category] ?? 'var(--color-accent)',
                    background: categoryBg[post.category] ?? 'var(--color-accent-muted)',
                  }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{post.readTime}</span>
                </div>
                <h3 style={{ fontSize: 15, fontWeight: 700, letterSpacing: '-0.2px', color: 'var(--color-text-primary)', lineHeight: 1.35, margin: 0 }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-secondary)', margin: 0, flex: 1 }}>
                  {post.excerpt}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                  <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{post.date}</span>
                  <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-accent)', display: 'flex', alignItems: 'center', gap: 4 }}>
                    Read <ArrowRight size={11} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="lp-section" style={{ background: 'var(--color-surface)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="lp-section-inner" style={{ maxWidth: 560 }}>
          <h2 style={{ fontSize: 20, fontWeight: 700, letterSpacing: '-0.4px', color: 'var(--color-text-primary)', marginBottom: 8 }}>
            New posts by email.
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', marginBottom: 20, lineHeight: 1.65 }}>
            We write about Nigerian document operations, legal practices, and product updates. No noise.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            <input
              className="input"
              style={{ height: 40, fontSize: 14, flex: 1, minWidth: 200, maxWidth: 300 }}
              type="email"
              placeholder="you@company.com"
            />
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 40, padding: '0 16px', fontSize: 13, fontWeight: 600 }}>
                Subscribe
              </button>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
