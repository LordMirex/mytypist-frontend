import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Search, BookOpen, FileText, PenSquare, GitBranch,
  Archive, CreditCard, ArrowRight, Mail, ChevronDown, ChevronUp, ExternalLink,
} from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const categories = [
  {
    icon: BookOpen,
    title: 'Getting Started',
    desc: 'Set up your workspace and send your first document.',
    articles: [
      'Quick start: your first document in 3 minutes',
      'Understanding the 5-stage pipeline',
      'Inviting team members and setting roles',
      'Importing a DOCX template',
      'How billing works',
    ],
  },
  {
    icon: FileText,
    title: 'Documents & Studio',
    desc: 'Creating, editing, and managing documents.',
    articles: [
      'Using the block editor in Studio',
      'Working with fields and field types',
      'Live PDF preview — what you see is what prints',
      'Fidelity check: what it validates',
      'Exporting documents as PDF',
    ],
  },
  {
    icon: PenSquare,
    title: 'Signatures',
    desc: 'Sending, tracking, and managing signature requests.',
    articles: [
      'Sending a signature request',
      'Sequential vs. parallel signing flows',
      'What recipients see (no account needed)',
      'Downloading signed copies and audit trails',
      'Expiry dates and automatic reminders',
    ],
  },
  {
    icon: GitBranch,
    title: 'Pipeline',
    desc: 'Managing your document pipeline and approvals.',
    articles: [
      'How pipeline stages work',
      'Stage permissions and role gates',
      'Moving a document through approval',
      'Viewing pipeline throughput in Admin',
      'Handling stuck or rejected documents',
    ],
  },
  {
    icon: Archive,
    title: 'Vault',
    desc: 'Storing, searching, and versioning documents.',
    articles: [
      'How the Vault stores documents',
      'Searching across all documents',
      'Viewing and comparing versions',
      'Restoring a previous version',
      'Setting document retention policies',
    ],
  },
  {
    icon: CreditCard,
    title: 'Billing & Plans',
    desc: 'Subscriptions, invoices, and upgrades.',
    articles: [
      'What\'s included in each plan',
      'Upgrading from Professional to Enterprise',
      'Downloading invoices',
      'Cancelling your subscription',
      'Custom pricing for large teams',
    ],
  },
]

const popularArticles = [
  { title: 'Quick start: your first document in 3 minutes', category: 'Getting Started' },
  { title: 'Sending a signature request', category: 'Signatures' },
  { title: 'What recipients see (no account needed)', category: 'Signatures' },
  { title: 'How pipeline stages work', category: 'Pipeline' },
  { title: 'Live PDF preview — what you see is what prints', category: 'Documents' },
  { title: 'Upgrading from Professional to Enterprise', category: 'Billing' },
]

const faqs = [
  { q: 'How do I invite my team?', a: 'Go to Admin Console → Users & Roles → Invite User. Enter their email and assign a role. They\'ll receive an invitation link that\'s valid for 7 days.' },
  { q: 'Can recipients sign without a MyTypist account?', a: 'Yes. Recipients receive a secure signing link via email and sign directly in the browser. No account, no download, no friction.' },
  { q: 'What happens if a fidelity check fails?', a: 'The document is flagged and cannot advance to the Approval stage until all errors are resolved. You\'ll see a detailed error report in Studio.' },
  { q: 'How do I export a document with its audit trail?', a: 'Open the document in Studio → Export → select "PDF with audit trail". This bundles the signed PDF with a tamper-evident event log.' },
  { q: 'Is my data backed up?', a: 'Yes. All documents are stored with geographic redundancy and daily snapshots. Every version is retained indefinitely unless you explicitly delete it.' },
]

export function SupportPage() {
  const [query, setQuery] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />

      {/* ── Hero + Search ── */}
      <section style={{
        padding: '72px 20px 64px',
        textAlign: 'center',
        background: 'linear-gradient(180deg, rgba(108,71,255,0.05) 0%, transparent 100%)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div className="lp-hero-eyebrow" style={{ margin: '0 auto 20px', justifyContent: 'center' }}>
            <div className="lp-hero-eyebrow-dot" />
            Support Center
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, color: 'var(--color-text-primary)', marginBottom: 14 }}>
            How can we help?
          </h1>
          <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 32 }}>
            Search our documentation, browse by category, or contact us directly.
          </p>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 480, margin: '0 auto' }}>
            <Search size={16} style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }} />
            <input
              className="input"
              style={{ height: 48, paddingLeft: 44, paddingRight: 16, fontSize: 15, width: '100%', boxSizing: 'border-box', boxShadow: 'var(--shadow-floating)' }}
              placeholder="Search documentation…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {query && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', left: 0, right: 0,
                background: 'var(--color-surface)', border: '1px solid var(--color-border)',
                borderRadius: 8, boxShadow: 'var(--shadow-modal)', overflow: 'hidden', zIndex: 10,
              }}>
                {popularArticles
                  .filter(a => a.title.toLowerCase().includes(query.toLowerCase()))
                  .slice(0, 5)
                  .map(a => (
                    <div key={a.title} style={{
                      padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10,
                      borderBottom: '1px solid var(--color-border-subtle)', cursor: 'pointer',
                      transition: 'background 80ms',
                    }}>
                      <BookOpen size={13} color="var(--color-text-tertiary)" style={{ flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 13, color: 'var(--color-text-primary)', fontWeight: 500 }}>{a.title}</div>
                        <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginTop: 2 }}>{a.category}</div>
                      </div>
                    </div>
                  ))}
                {popularArticles.filter(a => a.title.toLowerCase().includes(query.toLowerCase())).length === 0 && (
                  <div style={{ padding: '16px', fontSize: 13, color: 'var(--color-text-tertiary)', textAlign: 'center' }}>
                    No articles found. Try contacting us directly.
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Category grid ── */}
      <section style={{ padding: '64px 20px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>Browse by topic</div>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 32 }}>
            Documentation categories
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {categories.map(cat => (
              <div
                key={cat.title}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 10,
                  padding: '24px',
                  cursor: 'pointer',
                  transition: 'border-color 120ms, box-shadow 120ms',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(108,71,255,0.3)'; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 4px 20px rgba(108,71,255,0.08)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--color-border)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none'; }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'rgba(108,71,255,0.08)',
                  border: '1px solid rgba(108,71,255,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 14,
                }}>
                  <cat.icon size={16} color="var(--color-accent)" />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', marginBottom: 6 }}>{cat.title}</div>
                <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', lineHeight: 1.55, marginBottom: 16 }}>{cat.desc}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {cat.articles.slice(0, 3).map(article => (
                    <div key={article} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 12, color: 'var(--color-text-tertiary)', cursor: 'pointer' }}>
                      <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--color-border-strong)', flexShrink: 0 }} />
                      {article}
                    </div>
                  ))}
                  <div style={{ fontSize: 12, color: 'var(--color-accent)', fontWeight: 500, marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                    View all {cat.articles.length} articles
                    <ArrowRight size={11} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Popular articles ── */}
      <section style={{ padding: '64px 20px', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>Popular</div>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 28 }}>
            Most read articles
          </h2>
          <div style={{ border: '1px solid var(--color-border)', borderRadius: 10, overflow: 'hidden' }}>
            {popularArticles.map((article, i) => (
              <div
                key={article.title}
                style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '16px 20px',
                  borderBottom: i < popularArticles.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                  cursor: 'pointer', transition: 'background 80ms',
                  gap: 16,
                }}
                onMouseEnter={e => (e.currentTarget as HTMLDivElement).style.background = 'var(--color-bg-secondary)'}
                onMouseLeave={e => (e.currentTarget as HTMLDivElement).style.background = 'none'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, minWidth: 0 }}>
                  <span style={{
                    fontSize: 10, fontWeight: 700, color: 'var(--color-accent)',
                    background: 'rgba(108,71,255,0.08)', border: '1px solid rgba(108,71,255,0.15)',
                    padding: '2px 7px', borderRadius: 9999, flexShrink: 0,
                  }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: 13, color: 'var(--color-text-primary)', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {article.title}
                  </span>
                </div>
                <ExternalLink size={13} color="var(--color-text-quaternary)" style={{ flexShrink: 0 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ padding: '64px 20px', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto' }}>
          <div className="lp-section-eyebrow" style={{ marginBottom: 10 }}>FAQ</div>
          <h2 style={{ fontSize: 'clamp(20px, 3vw, 26px)', fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 32 }}>
            Frequently asked questions
          </h2>
          <div style={{ borderTop: '1px solid var(--color-border)' }}>
            {faqs.map((faq, i) => (
              <div key={i} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', padding: '18px 0',
                    background: 'none', border: 'none', cursor: 'pointer',
                    textAlign: 'left', gap: 16,
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>{faq.q}</span>
                  {openFaq === i
                    ? <ChevronUp size={15} color="var(--color-accent)" style={{ flexShrink: 0 }} />
                    : <ChevronDown size={15} color="var(--color-text-tertiary)" style={{ flexShrink: 0 }} />
                  }
                </button>
                {openFaq === i && (
                  <p style={{ fontSize: 13, lineHeight: 1.75, color: 'var(--color-text-secondary)', paddingBottom: 18, marginTop: -6 }}>{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section style={{ padding: '64px 20px', background: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 10 }}>
            Still need help?
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 36 }}>
            Our support team responds within 4 hours on Professional and 1 hour on Enterprise.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:support@mytypist.com" style={{ textDecoration: 'none' }}>
              <button className="btn btn--primary" style={{ height: 44, padding: '0 24px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 8 }}>
                <Mail size={15} />
                Email support
              </button>
            </a>
            <Link to="/pricing">
              <button className="btn btn--secondary" style={{ height: 44, padding: '0 24px', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                View plans & SLAs
                <ArrowRight size={14} />
              </button>
            </Link>
          </div>
          <p style={{ fontSize: 12, color: 'var(--color-text-quaternary)', marginTop: 20 }}>
            Enterprise customers: contact your dedicated account manager directly.
          </p>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
