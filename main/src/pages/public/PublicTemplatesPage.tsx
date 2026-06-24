import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Search } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

type Category = 'All' | 'Legal' | 'Academic' | 'Business' | 'HR & People' | 'Finance'

const categories: Category[] = ['All', 'Legal', 'Academic', 'Business', 'HR & People', 'Finance']

const templates = [
  { id: 1, name: 'Employment Agreement', desc: 'Full-time employment contract with IP clause, probation terms, and confidentiality provisions.', category: 'HR & People', fields: 14, pages: 4, color: '#059669' },
  { id: 2, name: 'Student Acceptance Letter', desc: 'University admission offer letter with programme details, student ID field, and reporting instructions.', category: 'Academic', fields: 8, pages: 1, color: '#6C47FF' },
  { id: 3, name: 'Mutual Non-Disclosure Agreement', desc: 'Two-party NDA covering confidential information, permitted disclosures, and governing law.', category: 'Legal', fields: 12, pages: 3, color: '#DC2626' },
  { id: 4, name: 'Vendor Master Agreement', desc: 'Comprehensive vendor contract covering services, payment terms, warranties, and dispute resolution.', category: 'Business', fields: 18, pages: 6, color: '#D97706' },
  { id: 5, name: 'Faculty ID Request Form', desc: 'Academic staff ID card request with auto-populated department and employee data fields.', category: 'Academic', fields: 6, pages: 1, color: '#6C47FF' },
  { id: 6, name: 'Board Resolution', desc: 'Corporate board resolution document for approving major decisions, with signatory blocks.', category: 'Business', fields: 10, pages: 2, color: '#D97706' },
  { id: 7, name: 'Service Level Agreement', desc: 'SLA template defining service scope, uptime commitments, response times, and remedies.', category: 'Legal', fields: 16, pages: 5, color: '#DC2626' },
  { id: 8, name: 'Invoice Template', desc: 'Professional invoice with itemized line items, tax calculation, and payment terms.', category: 'Finance', fields: 9, pages: 1, color: '#0891B2' },
  { id: 9, name: 'Offer Letter', desc: 'Job offer letter with position title, compensation, start date, and conditions of employment.', category: 'HR & People', fields: 11, pages: 2, color: '#059669' },
  { id: 10, name: 'Student ID Request', desc: 'Undergraduate and graduate student ID card request with programme and photo submission fields.', category: 'Academic', fields: 7, pages: 1, color: '#6C47FF' },
  { id: 11, name: 'Freelance Contract', desc: 'Independent contractor agreement covering scope, deliverables, payment, and intellectual property.', category: 'Legal', fields: 13, pages: 3, color: '#DC2626' },
  { id: 12, name: 'Budget Proposal', desc: 'Departmental or project budget request with itemized cost breakdown and approval signature blocks.', category: 'Finance', fields: 8, pages: 2, color: '#0891B2' },
  { id: 13, name: 'Performance Review', desc: 'Annual or mid-year employee performance evaluation with rating scales and development plan.', category: 'HR & People', fields: 15, pages: 3, color: '#059669' },
  { id: 14, name: 'Partnership Agreement', desc: 'Business partnership agreement defining roles, profit sharing, decision rights, and exit terms.', category: 'Business', fields: 20, pages: 7, color: '#D97706' },
  { id: 15, name: 'Internship Offer Letter', desc: 'Formal internship offer with duration, stipend, department, and supervisor assignment fields.', category: 'HR & People', fields: 9, pages: 1, color: '#059669' },
  { id: 16, name: 'Purchase Order', desc: 'Vendor purchase order with item description, quantity, unit price, delivery terms, and approval.', category: 'Finance', fields: 11, pages: 1, color: '#0891B2' },
]

function TemplateMiniPreview({ color }: { color: string }) {
  return (
    <div style={{
      height: 160, background: '#F3F3F0',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 20,
    }}>
      <div style={{
        width: '100%', maxWidth: 160,
        background: '#fff',
        borderRadius: 2,
        padding: '14px 16px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
      }}>
        <div style={{ height: 4, background: color, borderRadius: 2, marginBottom: 10, width: '40%' }} />
        <div style={{ height: 3, background: '#e5e5e3', borderRadius: 1, marginBottom: 6, width: '80%' }} />
        <div style={{ height: 3, background: '#e5e5e3', borderRadius: 1, marginBottom: 6, width: '65%' }} />
        <div style={{ height: 2, background: '#f0f0ee', borderRadius: 1, marginBottom: 10, width: '90%' }} />
        <div style={{
          height: 12, background: `${color}18`, border: `1px solid ${color}30`,
          borderRadius: 2, marginBottom: 4, width: '60%',
        }} />
        <div style={{
          height: 12, background: `${color}18`, border: `1px solid ${color}30`,
          borderRadius: 2, marginBottom: 8, width: '75%',
        }} />
        <div style={{ height: 1, background: '#e5e5e3', marginBottom: 8 }} />
        <div style={{ height: 3, background: '#e5e5e3', borderRadius: 1, width: '40%' }} />
      </div>
    </div>
  )
}

const catColors: Record<string, string> = {
  Legal: '#DC2626',
  Academic: '#6C47FF',
  Business: '#D97706',
  'HR & People': '#059669',
  Finance: '#0891B2',
}

export function PublicTemplatesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All')
  const [query, setQuery] = useState('')

  const filtered = templates.filter(t => {
    const matchCat = activeCategory === 'All' || t.category === activeCategory
    const matchQ = !query || t.name.toLowerCase().includes(query.toLowerCase()) || t.desc.toLowerCase().includes(query.toLowerCase())
    return matchCat && matchQ
  })

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />

      {/* ── Hero ── */}
      <section style={{
        padding: '72px 20px 56px',
        textAlign: 'center',
        background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(108,71,255,0.06) 0%, transparent 70%)',
        borderBottom: '1px solid var(--color-border)',
      }}>
        <div style={{ maxWidth: 640, margin: '0 auto' }}>
          <div className="lp-hero-eyebrow" style={{ margin: '0 auto 20px', justifyContent: 'center' }}>
            <div className="lp-hero-eyebrow-dot" />
            Template Library
          </div>
          <h1 style={{ fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 800, letterSpacing: -1.5, lineHeight: 1.1, color: 'var(--color-text-primary)', marginBottom: 16 }}>
            100+ professionally built<br />document templates.
          </h1>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--color-text-secondary)', marginBottom: 28 }}>
            Every template is hand-built with legally correct structure, proper typography,
            and pre-wired fields. Use as-is or customize in Studio.
          </p>

          {/* Search */}
          <div style={{ position: 'relative', maxWidth: 440, margin: '0 auto' }}>
            <Search size={15} style={{ position: 'absolute', left: 13, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }} />
            <input
              className="input"
              style={{ height: 44, paddingLeft: 40, fontSize: 14, width: '100%', boxSizing: 'border-box', boxShadow: 'var(--shadow-floating)' }}
              placeholder="Search templates…"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* ── Category filter + Grid ── */}
      <section style={{ padding: '48px 20px 80px', flex: 1 }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          {/* Category pills */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '7px 16px',
                  borderRadius: 9999,
                  fontSize: 13,
                  fontWeight: activeCategory === cat ? 600 : 400,
                  background: activeCategory === cat ? 'var(--color-accent)' : 'var(--color-surface)',
                  color: activeCategory === cat ? '#fff' : 'var(--color-text-secondary)',
                  border: activeCategory === cat ? '1px solid var(--color-accent)' : '1px solid var(--color-border)',
                  cursor: 'pointer',
                  transition: 'all 120ms',
                }}
              >
                {cat}
                {cat !== 'All' && (
                  <span style={{ marginLeft: 6, opacity: 0.65, fontSize: 11 }}>
                    {templates.filter(t => t.category === cat).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Results count */}
          <div style={{ marginBottom: 20, fontSize: 13, color: 'var(--color-text-tertiary)' }}>
            {filtered.length} template{filtered.length !== 1 ? 's' : ''}
            {activeCategory !== 'All' && ` in ${activeCategory}`}
            {query && ` matching "${query}"`}
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {filtered.map(template => (
              <div
                key={template.id}
                style={{
                  background: 'var(--color-surface)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 10,
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'border-color 120ms, box-shadow 120ms',
                  cursor: 'pointer',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = `${template.color}40`
                  el.style.boxShadow = `0 4px 20px ${template.color}14`
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.boxShadow = 'none'
                }}
              >
                <TemplateMiniPreview color={template.color} />

                <div style={{ padding: '16px 18px 18px', flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                    <h3 style={{ fontSize: 14, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1.3, letterSpacing: -0.2 }}>
                      {template.name}
                    </h3>
                    <Link to="/auth" style={{ flexShrink: 0 }}>
                      <button style={{
                        width: 28, height: 28, borderRadius: 6,
                        background: 'var(--color-bg-secondary)',
                        border: '1px solid var(--color-border)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', color: 'var(--color-text-tertiary)',
                        transition: 'all 80ms',
                      }}>
                        <ArrowRight size={12} />
                      </button>
                    </Link>
                  </div>
                  <p style={{ fontSize: 12, lineHeight: 1.6, color: 'var(--color-text-secondary)', flex: 1 }}>
                    {template.desc}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                    <span style={{
                      padding: '3px 9px', borderRadius: 9999, fontSize: 10, fontWeight: 700,
                      color: catColors[template.category] || 'var(--color-accent)',
                      background: `${catColors[template.category] || '#6C47FF'}12`,
                    }}>
                      {template.category}
                    </span>
                    <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{template.fields} fields</span>
                    <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>·</span>
                    <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{template.pages}p</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '64px 20px', color: 'var(--color-text-tertiary)' }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>🗂️</div>
              <p style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 6 }}>No templates found</p>
              <p style={{ fontSize: 13 }}>Try a different category or search term.</p>
            </div>
          )}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{
        padding: '48px 20px',
        background: 'var(--color-surface)',
        borderTop: '1px solid var(--color-border)',
        borderBottom: '1px solid var(--color-border)',
        textAlign: 'center',
      }}>
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2 style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)', marginBottom: 10 }}>
            Can't find the template you need?
          </h2>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.65, marginBottom: 24 }}>
            Enterprise plans include custom template creation by our document team.
            Or build your own in Studio — it takes under 10 minutes.
          </p>
          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/auth">
              <button className="btn btn--primary" style={{ height: 42, padding: '0 22px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                Build in Studio
                <ArrowRight size={14} />
              </button>
            </Link>
            <Link to="/support">
              <button className="btn btn--secondary" style={{ height: 42, padding: '0 22px', fontSize: 14 }}>
                Request a template
              </button>
            </Link>
          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
