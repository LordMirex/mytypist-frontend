import { 
  Plus, 
  Search, 
  Layout, 
  FileText, 
  Shield, 
  Tag, 
  Clock,
  ArrowUpRight
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const categories = [
  { id: 'all', label: 'All Templates', icon: Layout },
  { id: 'legal', label: 'Legal & Contracts', icon: Shield },
  { id: 'academic', label: 'Academic Docs', icon: FileText },
  { id: 'business', label: 'Business Forms', icon: Tag },
]

const templates = [
  { 
    id: '1', 
    title: 'Employment Agreement', 
    description: 'Standard full-time employment contract with IP protection.',
    category: 'legal',
    pages: 4,
    lastUsed: '2d ago'
  },
  { 
    id: '2', 
    title: 'Student ID Request', 
    description: 'Automated request form for faculty identification cards.',
    category: 'academic',
    pages: 1,
    lastUsed: '1h ago'
  },
  { 
    id: '3', 
    title: 'Acceptance Letter', 
    description: 'Official university admission letter with dynamic fields.',
    category: 'academic',
    pages: 2,
    lastUsed: '5d ago'
  },
  { 
    id: '4', 
    title: 'Service Level Agreement', 
    description: 'Comprehensive SLA for technology service providers.',
    category: 'legal',
    pages: 8,
    lastUsed: '1w ago'
  },
  { 
    id: '5', 
    title: 'Vendor Master Form', 
    description: 'Standard onboarding form for new supply chain partners.',
    category: 'business',
    pages: 3,
    lastUsed: '3d ago'
  },
  { 
    id: '6', 
    title: 'Mutual NDA', 
    description: 'Standard non-disclosure agreement for initial discussions.',
    category: 'legal',
    pages: 2,
    lastUsed: '12h ago'
  },
]

export function TemplatesPage() {
  return (
    <div className="page">
      <header style={{ marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Templates</h1>
          <p className="page-subtitle">Select a pre-built template or create your own</p>
        </div>
        <div className="flex-center gap-2">
          <Button variant="secondary" size="sm">
            <Search size={14} />
            <span style={{ marginLeft: 6 }}>Search</span>
          </Button>
          <Button size="sm">
            <Plus size={14} />
            <span style={{ marginLeft: 6 }}>Create Template</span>
          </Button>
        </div>
      </header>

      <div className="templates-layout">
        <aside className="templates-sidebar">
          {categories.map(cat => (
            <div 
              key={cat.id} 
              className={`templates-category-item ${cat.id === 'all' ? 'templates-category-item--active' : ''}`}
            >
              <cat.icon size={16} />
              {cat.label}
            </div>
          ))}
          
          <div style={{ marginTop: 32, padding: '0 12px', fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            My Templates
          </div>
          <div className="templates-category-item">
            <Clock size={16} />
            Recently Edited
          </div>
        </aside>

        <main className="templates-grid">
          {templates.map(template => (
            <div key={template.id} className="template-card">
              <div className="template-card-preview">
                <div className="template-card-thumbnail">
                  <div style={{ height: 4, width: '60%', background: 'var(--color-border)', borderRadius: 1 }} />
                  <div style={{ height: 4, width: '100%', background: 'var(--color-border)', borderRadius: 1 }} />
                  <div style={{ height: 4, width: '80%', background: 'var(--color-border)', borderRadius: 1 }} />
                  <div style={{ height: 4, width: '90%', background: 'var(--color-border)', borderRadius: 1, marginTop: 8 }} />
                  <div style={{ height: 4, width: '100%', background: 'var(--color-border)', borderRadius: 1 }} />
                  <div style={{ height: 20, width: '100%', background: 'var(--color-accent-muted)', borderRadius: 2, marginTop: 12 }} />
                </div>
              </div>
              <div className="template-card-content">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 className="template-card-title">{template.title}</h3>
                  <ArrowUpRight size={14} color="var(--color-text-tertiary)" />
                </div>
                <p className="template-card-description">{template.description}</p>
              </div>
              <div className="template-card-footer">
                <Badge status={template.category === 'legal' ? 'complete' : 'draft'} label={template.category} />
                <span style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>{template.pages} pages</span>
              </div>
            </div>
          ))}
          
          <div className="template-card" style={{ borderStyle: 'dashed', background: 'transparent', justifyContent: 'center', alignItems: 'center', minHeight: 280 }}>
            <div className="flex-center" style={{ flexDirection: 'column', gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--color-bg-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="flex-center">
                <Plus size={20} color="var(--color-text-secondary)" />
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>New Template</div>
                <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>Import or build from scratch</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
