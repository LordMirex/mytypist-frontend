import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Plus,
  Search,
  LayoutGrid,
  Shield,
  FileText,
  Briefcase,
  GraduationCap,
  Clock,
  SlidersHorizontal,
  Upload,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const categories = [
  { id: 'all',      label: 'All Templates', icon: LayoutGrid,    count: 24 },
  { id: 'legal',    label: 'Legal',          icon: Shield,        count: 9  },
  { id: 'academic', label: 'Academic',       icon: GraduationCap, count: 7  },
  { id: 'business', label: 'Business',       icon: Briefcase,     count: 6  },
  { id: 'hr',       label: 'HR & People',    icon: FileText,      count: 2  },
]

type Template = {
  id: string
  title: string
  description: string
  category: string
  pages: number
  fields: number
  lastUsed: string
  accent: string
  fieldColor: string
}

const templates: Template[] = [
  {
    id: '1', title: 'Employment Agreement',
    description: 'Full-time employment contract with IP clause and probation terms.',
    category: 'legal', pages: 4, fields: 12, lastUsed: '2d ago',
    accent: '#059669', fieldColor: 'rgba(5,150,105,0.12)',
  },
  {
    id: '2', title: 'Student ID Request',
    description: 'Faculty ID card request form with auto-populated student data.',
    category: 'academic', pages: 1, fields: 6, lastUsed: '1h ago',
    accent: '#6C47FF', fieldColor: 'rgba(108,71,255,0.1)',
  },
  {
    id: '3', title: 'Acceptance Letter',
    description: 'University admission letter with dynamic student and programme fields.',
    category: 'academic', pages: 2, fields: 8, lastUsed: '5d ago',
    accent: '#6C47FF', fieldColor: 'rgba(108,71,255,0.1)',
  },
  {
    id: '4', title: 'Service Level Agreement',
    description: 'Comprehensive SLA for technology services with SLA schedules.',
    category: 'legal', pages: 8, fields: 18, lastUsed: '1w ago',
    accent: '#059669', fieldColor: 'rgba(5,150,105,0.12)',
  },
  {
    id: '5', title: 'Vendor Master Form',
    description: 'Standard onboarding form for new supply chain partners.',
    category: 'business', pages: 3, fields: 14, lastUsed: '3d ago',
    accent: '#D97706', fieldColor: 'rgba(217,119,6,0.1)',
  },
  {
    id: '6', title: 'Mutual NDA',
    description: 'Non-disclosure agreement for initial commercial discussions.',
    category: 'legal', pages: 2, fields: 7, lastUsed: '12h ago',
    accent: '#059669', fieldColor: 'rgba(5,150,105,0.12)',
  },
  {
    id: '7', title: 'Offer Letter',
    description: 'Job offer letter with salary, start date, and benefits fields.',
    category: 'hr', pages: 2, fields: 10, lastUsed: '4d ago',
    accent: '#D97706', fieldColor: 'rgba(217,119,6,0.1)',
  },
  {
    id: '8', title: 'Board Resolution',
    description: 'Corporate resolution template for board decisions and approvals.',
    category: 'legal', pages: 1, fields: 9, lastUsed: '2w ago',
    accent: '#059669', fieldColor: 'rgba(5,150,105,0.12)',
  },
]

/* ── Document thumbnail ── */
function TemplateThumbnail({ template }: { template: Template }) {
  return (
    <div className="template-thumb">
      {/* Category accent bar */}
      <div className="template-thumb-accent" style={{ background: template.accent }} />

      {/* Letterhead row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 3, marginBottom: 2 }}>
        <div style={{ width: 2, height: 10, background: template.accent, borderRadius: 1 }} />
        <div className="template-thumb-bar template-thumb-bar--title" style={{ background: 'var(--color-bg-tertiary)', width: 52 }} />
      </div>

      {/* Title */}
      <div className="template-thumb-bar" style={{ height: 4, width: '65%', background: 'var(--color-bg-tertiary)' }} />

      {/* Body lines */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 3, marginTop: 4 }}>
        <div className="template-thumb-bar" style={{ width: '100%' }} />
        <div className="template-thumb-bar" style={{ width: '90%' }} />

        {/* Placeholder field */}
        <div
          className="template-thumb-field"
          style={{ background: template.fieldColor, border: `1px solid ${template.accent}33`, marginTop: 2 }}
        >
          <div className="template-thumb-field-text" style={{ color: template.accent }}>
            {template.category === 'academic' ? 'Student Name' : template.category === 'legal' ? 'Party Name' : 'Recipient'}
          </div>
        </div>

        <div className="template-thumb-bar" style={{ width: '95%' }} />
        <div className="template-thumb-bar" style={{ width: '80%' }} />
        <div className="template-thumb-bar" style={{ width: '70%' }} />
      </div>

      {/* Signature line */}
      <div style={{ marginTop: 'auto', borderTop: '1px solid var(--color-border)', paddingTop: 5, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <div className="template-thumb-bar" style={{ width: '55%' }} />
        <div style={{ fontSize: 5, color: 'var(--color-text-quaternary)', letterSpacing: '0.04em', textTransform: 'uppercase' }}>Authorized Signature</div>
      </div>
    </div>
  )
}

/* ── Category badge ── */
function CategoryBadge({ category, accent }: { category: string; accent: string }) {
  return (
    <span style={{
      display: 'inline-flex',
      alignItems: 'center',
      height: 18,
      padding: '0 7px',
      borderRadius: 9,
      fontSize: 10,
      fontWeight: 600,
      background: `${accent}14`,
      color: accent,
      letterSpacing: '0.02em',
      textTransform: 'capitalize',
    }}>
      {category}
    </span>
  )
}

export function TemplatesPage() {
  const [activeCat, setActiveCat] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filtered = templates.filter((t) => {
    const matchCat = activeCat === 'all' || t.category === activeCat
    const matchSearch = !searchQuery || t.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <div className="page" style={{ maxWidth: 1100 }}>
      {/* ── Header ── */}
      <header style={{ marginBottom: 28, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Templates</h1>
          <p className="page-subtitle">
            {templates.length} curated templates · hand-built with correct typography and structure
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <Button variant="secondary" size="sm">
            <Upload size={13} />
            <span>Import DOCX</span>
          </Button>
          <Button size="sm">
            <Plus size={13} />
            <span>New Template</span>
          </Button>
        </div>
      </header>

      <div className="templates-layout">
        {/* ── Category sidebar ── */}
        <aside className="templates-sidebar" style={{ gap: 2 }}>
          {/* Search */}
          <div style={{ position: 'relative', marginBottom: 12 }}>
            <Search
              size={12}
              style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }}
            />
            <input
              className="input"
              style={{ width: '100%', height: 28, paddingLeft: 30, fontSize: 12 }}
              placeholder="Search templates…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--color-text-quaternary)', textTransform: 'uppercase', letterSpacing: '0.6px', padding: '2px 8px', marginBottom: 2 }}>
            Categories
          </div>

          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`templates-category-item${activeCat === cat.id ? ' templates-category-item--active' : ''}`}
              onClick={() => setActiveCat(cat.id)}
              style={{ justifyContent: 'space-between' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <cat.icon size={14} />
                {cat.label}
              </div>
              <span style={{ fontSize: 10, fontWeight: 600, color: activeCat === cat.id ? 'var(--color-accent)' : 'var(--color-text-quaternary)', fontFamily: 'var(--font-mono)' }}>
                {cat.count}
              </span>
            </div>
          ))}

          <div style={{ height: 1, background: 'var(--color-border)', margin: '12px 0' }} />

          <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--color-text-quaternary)', textTransform: 'uppercase', letterSpacing: '0.6px', padding: '2px 8px', marginBottom: 2 }}>
            Recent
          </div>

          <div className="templates-category-item">
            <Clock size={14} />
            Recently Used
          </div>
        </aside>

        {/* ── Template grid ── */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Toolbar */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
            <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>
              {filtered.length} template{filtered.length !== 1 ? 's' : ''}
              {activeCat !== 'all' && <span> in <strong style={{ color: 'var(--color-text-secondary)' }}>{categories.find((c) => c.id === activeCat)?.label}</strong></span>}
            </div>
            <Button variant="ghost" size="sm">
              <SlidersHorizontal size={13} />
              <span>Sort</span>
            </Button>
          </div>

          <main className="templates-grid">
            {filtered.map((template) => (
              <Link key={template.id} to="/studio/new" style={{ textDecoration: 'none' }}>
                <div className="template-card">
                  <div className="template-card-preview">
                    <TemplateThumbnail template={template} />
                  </div>
                  <div className="template-card-content">
                    <h3 className="template-card-title">{template.title}</h3>
                    <p className="template-card-description">{template.description}</p>
                  </div>
                  <div className="template-card-footer">
                    <CategoryBadge category={template.category} accent={template.accent} />
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 11, color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>
                        <span>{template.fields} fields</span>
                        <span>{template.pages}p</span>
                      </div>
                      <span className="btn btn--primary btn--sm" style={{ height: 22, fontSize: 10, padding: '0 8px' }}>
                        Use template
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}

            {/* Create new card */}
            <div
              className="template-card"
              style={{ borderStyle: 'dashed', background: 'transparent', cursor: 'pointer', minHeight: 260 }}
            >
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, padding: 24 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  border: '1px solid var(--color-border)',
                  background: 'var(--color-bg)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Plus size={18} color="var(--color-text-secondary)" />
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 2 }}>New Template</div>
                  <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', lineHeight: 1.4 }}>Import DOCX or build from scratch</div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
