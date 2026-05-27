import { useState } from 'react'
import { Plus, Clock, Filter, MoreHorizontal, ArrowRight, FileText } from 'lucide-react'
import { Button } from '@/components/ui/Button'

type StageId = 'draft' | 'review' | 'signing' | 'complete'

const stages: {
  id: StageId
  title: string
  count: number
  accent: string
  bg: string
  label: string
}[] = [
  { id: 'draft',    title: 'Drafting',             count: 3,  accent: '#B8B8B0', bg: 'rgba(184,184,176,0.08)', label: 'DRAFT'    },
  { id: 'review',   title: 'Under Review',          count: 2,  accent: '#D97706', bg: 'rgba(217,119,6,0.08)',   label: 'REVIEW'   },
  { id: 'signing',  title: 'Awaiting Signatures',   count: 4,  accent: '#6C47FF', bg: 'rgba(108,71,255,0.08)',  label: 'SIGN'     },
  { id: 'complete', title: 'Completed',             count: 12, accent: '#059669', bg: 'rgba(5,150,105,0.08)',   label: 'DONE'     },
]

type DocCard = {
  id: string
  title: string
  stage: StageId
  date: string
  user: string
  initials: string
  userColor: string
  template: string
  pages: number
}

const documents: DocCard[] = [
  { id: '1', title: 'Employment Agreement — John Doe', stage: 'draft',    date: '2h ago',  user: 'Admin',   initials: 'A', userColor: '#6C47FF', template: 'Employment Agreement', pages: 4 },
  { id: '2', title: 'Service Level Agreement',         stage: 'draft',    date: '5h ago',  user: 'Admin',   initials: 'A', userColor: '#6C47FF', template: 'SLA Template', pages: 8 },
  { id: '3', title: 'Mutual NDA — Acme Corp',          stage: 'review',   date: '1d ago',  user: 'Legal',   initials: 'L', userColor: '#D97706', template: 'Mutual NDA', pages: 2 },
  { id: '4', title: 'Q4 Budget Proposal',              stage: 'review',   date: '30m ago', user: 'Finance', initials: 'F', userColor: '#059669', template: 'Budget Proposal', pages: 6 },
  { id: '5', title: 'Vendor Master Agreement',         stage: 'signing',  date: '3d ago',  user: 'Admin',   initials: 'A', userColor: '#6C47FF', template: 'Vendor Form', pages: 3 },
  { id: '6', title: 'Acceptance Letter — J. Okafor',  stage: 'signing',  date: '1d ago',  user: 'Admin',   initials: 'A', userColor: '#6C47FF', template: 'Acceptance Letter', pages: 2 },
  { id: '7', title: 'Student ID Request — Batch 12',  stage: 'signing',  date: '6h ago',  user: 'Admin',   initials: 'A', userColor: '#6C47FF', template: 'ID Request', pages: 1 },
  { id: '8', title: 'Board Resolution — May 2026',    stage: 'signing',  date: '2d ago',  user: 'Legal',   initials: 'L', userColor: '#D97706', template: 'Board Resolution', pages: 1 },
  { id: '9', title: 'Offer Letter — Maria Santos',    stage: 'complete', date: '3d ago',  user: 'HR',      initials: 'H', userColor: '#059669', template: 'Offer Letter', pages: 2 },
]

function PipelineCard({ doc, stage }: { doc: DocCard; stage: typeof stages[0] }) {
  return (
    <div className="pipeline-card" style={{ gap: 0 }}>
      {/* Top accent bar */}
      <div style={{ height: 2, background: stage.accent, borderRadius: '2px 2px 0 0', margin: '-16px -16px 12px' }} />

      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 10 }}>
        <div className="pipeline-card-doc-icon">
          <FileText size={11} color="var(--color-text-tertiary)" />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="pipeline-card-title" style={{ fontSize: 13, lineHeight: 1.35, marginBottom: 2 }}>
            {doc.title}
          </div>
          <div style={{ fontSize: 10, color: 'var(--color-text-quaternary)', fontFamily: 'var(--font-mono)' }}>
            {doc.template}
          </div>
        </div>
        <button style={{ width: 20, height: 20, borderRadius: 3, border: 'none', background: 'none', cursor: 'pointer', color: 'var(--color-text-quaternary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <MoreHorizontal size={13} />
        </button>
      </div>

      {/* Footer row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {/* Assignee avatar */}
          <div
            className="pipeline-card-assignee"
            style={{ background: `${doc.userColor}14`, borderColor: `${doc.userColor}30`, color: doc.userColor }}
            title={doc.user}
          >
            {doc.initials}
          </div>
          {/* Time */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, color: 'var(--color-text-quaternary)' }}>
            <Clock size={10} />
            {doc.date}
          </div>
        </div>
        {/* Pages */}
        <div style={{ fontSize: 10, color: 'var(--color-text-quaternary)', fontFamily: 'var(--font-mono)' }}>
          {doc.pages}p
        </div>
      </div>
    </div>
  )
}

export function PipelinePage() {
  const [activeStage] = useState<StageId | null>(null)

  return (
    <div className="page" style={{ maxWidth: 'none' }}>
      {/* ── Header ── */}
      <header style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Pipeline</h1>
          <p className="page-subtitle">
            {documents.length} documents across {stages.length} stages
          </p>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
          <Button variant="secondary" size="sm">
            <Filter size={13} />
            <span>Filter</span>
          </Button>
          <Button size="sm">
            <Plus size={13} />
            <span>New Document</span>
          </Button>
        </div>
      </header>

      {/* ── Stage flow indicator ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 0,
        marginBottom: 24,
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 3,
        overflow: 'hidden',
      }}>
        {stages.map((stage, i) => (
          <div key={stage.id} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
            <div style={{
              flex: 1,
              padding: '10px 16px',
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              background: activeStage === stage.id ? stage.bg : 'transparent',
              cursor: 'pointer',
              transition: 'background 80ms',
            }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: stage.accent, flexShrink: 0 }} />
              <span style={{ fontSize: 11, fontWeight: 700, color: 'var(--color-text-secondary)', textTransform: 'uppercase', letterSpacing: '0.4px' }}>
                {stage.title}
              </span>
              <span style={{ fontSize: 12, fontWeight: 700, color: stage.accent, fontFamily: 'var(--font-mono)', marginLeft: 2 }}>
                {stage.count}
              </span>
            </div>
            {i < stages.length - 1 && (
              <ArrowRight size={12} style={{ color: 'var(--color-border-strong)', flexShrink: 0 }} />
            )}
          </div>
        ))}
      </div>

      {/* ── Kanban board ── */}
      <div className="pipeline-container">
        {stages.map((stage) => {
          const stageDocs = documents.filter((d) => d.stage === stage.id)
          return (
            <div key={stage.id} className="pipeline-col">
              {/* Stage header */}
              <div className="pipeline-col-header" style={{ paddingBottom: 8 }}>
                <div className="pipeline-col-title" style={{ gap: 6 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: stage.accent, flexShrink: 0 }} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-primary)' }}>
                    {stage.title}
                  </span>
                  <span
                    style={{
                      height: 18, minWidth: 22, padding: '0 6px',
                      background: stage.bg,
                      color: stage.accent,
                      borderRadius: 9,
                      fontSize: 10, fontWeight: 700,
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    {stage.count}
                  </span>
                </div>
                <Button variant="ghost" size="sm" style={{ width: 24, height: 24, padding: 0 }}>
                  <Plus size={13} />
                </Button>
              </div>

              {/* Cards */}
              <div className="pipeline-stage-items" style={{ gap: 8 }}>
                {stageDocs.map((doc) => (
                  <PipelineCard key={doc.id} doc={doc} stage={stage} />
                ))}

                <button style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  height: 28, padding: '0 8px',
                  background: 'none', border: 'none', cursor: 'pointer',
                  fontSize: 12, color: 'var(--color-text-quaternary)',
                  borderRadius: 3, width: '100%',
                  transition: 'background 60ms, color 60ms',
                }}
                  onMouseOver={(e) => { e.currentTarget.style.background = 'var(--color-hover)'; e.currentTarget.style.color = 'var(--color-text-secondary)' }}
                  onMouseOut={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--color-text-quaternary)' }}
                >
                  <Plus size={12} />
                  Add document
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
