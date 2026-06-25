import { Link } from 'react-router-dom'
import {
  Plus, FileText, LayoutTemplate, Clock,
  ChevronRight, AlertCircle, Check,
} from 'lucide-react'

const statusConfig = {
  draft:    { label: 'Draft',     color: 'var(--color-status-draft)',    bg: 'var(--color-status-draft-bg)'    },
  pending:  { label: 'Pending',   color: 'var(--color-status-pending)',  bg: 'var(--color-status-pending-bg)'  },
  progress: { label: 'In review', color: 'var(--color-status-progress)', bg: 'var(--color-status-progress-bg)' },
  complete: { label: 'Archived',  color: 'var(--color-status-complete)', bg: 'var(--color-status-complete-bg)' },
} as const

type StatusKey = keyof typeof statusConfig

const attention = [
  { id: 'a1', doc: 'Employment Agreement', org: 'Eko Provisions Ltd', age: '3 days waiting', action: 'Sign now', path: '/studio/sign',     accentColor: 'var(--color-status-pending)'  },
  { id: 'a2', doc: 'Non-Disclosure Agreement', org: 'Meridian Logistics', age: '1 day waiting', action: 'Review', path: '/studio/pipeline', accentColor: 'var(--color-status-progress)' },
]

const recent: { id: string; name: string; status: StatusKey; meta: string; action: string; path: string }[] = [
  { id: 'r1', name: 'Service Agreement · Coastal Energy Services',   status: 'draft',    meta: 'Edited 2 hours ago',                         action: 'Continue', path: '/studio/new'      },
  { id: 'r2', name: 'Consulting Contract · Bakare & Associates',     status: 'pending',  meta: 'Awaiting approval from Tunde Bakare',         action: 'View',     path: '/studio/pipeline' },
  { id: 'r3', name: 'Employment Agreement · Eko Provisions Ltd',     status: 'pending',  meta: 'Awaiting signature from Ibrahim Bello',       action: 'Track',    path: '/studio/sign'     },
  { id: 'r4', name: 'Freelance Retainer · Chinedu Eze Design',       status: 'complete', meta: 'Signed by all parties · 12 Jun 2026',         action: 'View',     path: '/studio/vault'    },
]

const checklist = [
  { id: 'c1', done: true,  label: 'Create your workspace'                        },
  { id: 'c2', done: false, label: 'Create your first document from a template'   },
  { id: 'c3', done: false, label: 'Send a document for e-signature'               },
  { id: 'c4', done: false, label: 'Add a team member'                             },
]

function StatusPill({ status }: { status: StatusKey }) {
  const s = statusConfig[status]
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      padding: '2px 7px', borderRadius: 4,
      background: s.bg, fontSize: 11, fontWeight: 600, color: s.color,
      flexShrink: 0,
    }}>
      <span style={{ width: 5, height: 5, borderRadius: '50%', background: s.color }} />
      {s.label}
    </span>
  )
}

export function DashboardPage() {
  const now = new Date()
  const hour = now.getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
  const dateStr = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
  const doneCount = checklist.filter(c => c.done).length

  return (
    <div style={{ padding: '32px 28px 64px', maxWidth: 900, margin: '0 auto' }}>

      {/* Greeting */}
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ fontSize: 22, fontWeight: 700, letterSpacing: -0.5, color: 'var(--color-text-primary)', margin: '0 0 4px' }}>
          {greeting}, Adaeze.
        </h1>
        <p style={{ fontSize: 13, color: 'var(--color-text-tertiary)', margin: 0 }}>{dateStr}</p>
      </div>

      {/* Quick actions */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
        <Link to="/studio/new" style={{ textDecoration: 'none' }}>
          <button className="btn btn--primary" style={{ height: 36, padding: '0 14px', fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Plus size={13} />
            New document
          </button>
        </Link>
        <Link to="/studio/templates" style={{ textDecoration: 'none' }}>
          <button className="btn btn--secondary" style={{ height: 36, padding: '0 14px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
            <LayoutTemplate size={13} />
            Browse templates
          </button>
        </Link>
        <Link to="/studio/pipeline" style={{ textDecoration: 'none' }}>
          <button className="btn btn--secondary" style={{ height: 36, padding: '0 14px', fontSize: 13, display: 'flex', alignItems: 'center', gap: 6 }}>
            <Clock size={13} />
            Pipeline
          </button>
        </Link>
      </div>

      {/* Needs attention */}
      <section style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 10 }}>
          <AlertCircle size={12} style={{ color: 'var(--color-status-pending)', flexShrink: 0 }} />
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.6, color: 'var(--color-text-tertiary)' }}>
            Needs your attention
          </span>
          <span style={{
            fontSize: 11, fontWeight: 700,
            background: 'var(--color-status-pending-bg)', color: 'var(--color-status-pending)',
            padding: '1px 6px', borderRadius: 3,
          }}>
            {attention.length}
          </span>
          <Link to="/studio/notifications" style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--color-accent)', fontWeight: 600, textDecoration: 'none' }}>
            View all
          </Link>
        </div>
        <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', background: 'var(--color-surface)' }}>
          {attention.map((item, i) => (
            <div
              key={item.id}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
                padding: '14px 16px',
                borderBottom: i < attention.length - 1 ? '1px solid var(--color-border)' : 'none',
                borderLeft: `3px solid ${item.accentColor}`,
              }}
            >
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 3 }}>{item.doc}</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>{item.org} · {item.age}</div>
              </div>
              <Link to={item.path} style={{ textDecoration: 'none', flexShrink: 0 }}>
                <button className="btn btn--primary" style={{ height: 30, padding: '0 12px', fontSize: 12, fontWeight: 600 }}>
                  {item.action}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Continue working */}
      <section style={{ marginBottom: 40 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <FileText size={12} style={{ color: 'var(--color-text-tertiary)', flexShrink: 0 }} />
            <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.6, color: 'var(--color-text-tertiary)' }}>
              Continue working
            </span>
          </div>
          <Link to="/studio/vault" style={{ fontSize: 12, color: 'var(--color-accent)', textDecoration: 'none', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 3 }}>
            All documents <ChevronRight size={12} />
          </Link>
        </div>
        <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', background: 'var(--color-surface)' }}>
          {recent.map((doc, i) => (
            <div
              key={doc.id}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px',
                borderBottom: i < recent.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                cursor: 'default',
                transition: 'background 100ms',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-hover)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <FileText size={13} style={{ color: 'var(--color-text-quaternary)', flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {doc.name}
                </div>
                <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)' }}>{doc.meta}</div>
              </div>
              <StatusPill status={doc.status} />
              <Link to={doc.path} style={{ textDecoration: 'none', flexShrink: 0 }}>
                <button className="btn btn--secondary" style={{ height: 28, padding: '0 10px', fontSize: 11 }}>
                  {doc.action}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Getting started */}
      <section>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
          <span style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.6, color: 'var(--color-text-tertiary)' }}>
            Getting started
          </span>
          <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{doneCount} of {checklist.length} complete</span>
          <div style={{ flex: 1, height: 3, background: 'var(--color-bg-tertiary)', borderRadius: 2, maxWidth: 80 }}>
            <div style={{ height: '100%', background: 'var(--color-status-complete)', borderRadius: 2, width: `${(doneCount / checklist.length) * 100}%`, transition: 'width 300ms ease' }} />
          </div>
        </div>
        <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', background: 'var(--color-surface)' }}>
          {checklist.map((item, i) => (
            <div
              key={item.id}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '12px 16px',
                borderBottom: i < checklist.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                opacity: item.done ? 0.5 : 1,
                cursor: item.done ? 'default' : 'pointer',
                transition: 'background 100ms',
              }}
              onMouseEnter={e => { if (!item.done) e.currentTarget.style.background = 'var(--color-hover)' }}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              <div style={{
                width: 18, height: 18, borderRadius: 4, flexShrink: 0,
                border: item.done ? 'none' : '1.5px solid var(--color-border-strong)',
                background: item.done ? 'var(--color-status-complete)' : 'transparent',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                {item.done && <Check size={11} color="white" strokeWidth={3} />}
              </div>
              <span style={{
                fontSize: 13,
                color: item.done ? 'var(--color-text-tertiary)' : 'var(--color-text-primary)',
                textDecoration: item.done ? 'line-through' : 'none',
                flex: 1,
              }}>
                {item.label}
              </span>
              {!item.done && <ChevronRight size={13} style={{ color: 'var(--color-text-quaternary)', flexShrink: 0 }} />}
            </div>
          ))}
        </div>
      </section>

    </div>
  )
}
