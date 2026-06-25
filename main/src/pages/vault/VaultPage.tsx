import { useState } from 'react'
import {
  Search, FileText, MoreHorizontal, FileDown,
  Download, Eye, Clock, Archive, HardDrive, CheckCircle2, TrendingUp,
  GitBranch, ChevronUp, ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

type DocStatus = 'complete' | 'pending' | 'draft' | 'failed'
type DocType = 'Contract' | 'Legal' | 'Academic' | 'Business' | 'HR'

type Doc = {
  id: string
  name: string
  status: DocStatus
  type: DocType
  size: string
  updated: string
  version: number
  pages: number
  modBy: string
  modByInitials: string
  modByColor: string
  signedBy?: string
}

const typeColors: Record<DocType, { text: string; bg: string }> = {
  Contract: { text: '#D97706', bg: 'rgba(217,119,6,0.10)' },
  Legal:    { text: '#DC2626', bg: 'rgba(220,38,38,0.10)'  },
  Academic: { text: '#6C47FF', bg: 'rgba(108,71,255,0.10)' },
  Business: { text: '#0891B2', bg: 'rgba(8,145,178,0.10)'  },
  HR:       { text: '#059669', bg: 'rgba(5,150,105,0.10)'  },
}

const documents: Doc[] = [
  { id: '1',  name: 'Eko Provisions SLA.pdf',                status: 'complete', type: 'Contract', size: '1.2 MB', updated: '2h ago',  version: 3, pages: 8,  modBy: 'Admin',   modByInitials: 'AU', modByColor: '#6C47FF', signedBy: 'Adaeze Okonkwo' },
  { id: '2',  name: 'Ibrahim Bello Offer Letter.pdf',        status: 'pending',  type: 'HR',       size: '450 KB', updated: '5h ago',  version: 2, pages: 2,  modBy: 'HR Team', modByInitials: 'HR', modByColor: '#059669' },
  { id: '3',  name: 'University Admission Letter.pdf',  status: 'complete', type: 'Academic', size: '2.1 MB', updated: '1d ago',  version: 1, pages: 1,  modBy: 'Admin',   modByInitials: 'AU', modByColor: '#6C47FF', signedBy: 'J. Okafor' },
  { id: '4',  name: 'Q4 Budget Proposal.pdf',           status: 'draft',    type: 'Business', size: '890 KB', updated: '3d ago',  version: 4, pages: 6,  modBy: 'Finance', modByInitials: 'FN', modByColor: '#0891B2' },
  { id: '5',  name: 'Employment Agreement · I. Bello.pdf',status: 'complete', type: 'Legal',    size: '1.5 MB', updated: '1w ago',  version: 2, pages: 4,  modBy: 'Legal',   modByInitials: 'LG', modByColor: '#DC2626', signedBy: 'Ibrahim Bello' },
  { id: '6',  name: 'Vendor Master Agreement.pdf',       status: 'complete', type: 'Contract', size: '2.8 MB', updated: '2w ago',  version: 5, pages: 12, modBy: 'Admin',   modByInitials: 'AU', modByColor: '#6C47FF', signedBy: 'T. Bakare' },
  { id: '7',  name: 'Board Resolution · May 2026.pdf',  status: 'complete', type: 'Legal',    size: '640 KB', updated: '2w ago',  version: 1, pages: 1,  modBy: 'Legal',   modByInitials: 'LG', modByColor: '#DC2626', signedBy: 'N. Adeyemi' },
  { id: '8',  name: 'Student ID Batch 12.pdf',          status: 'pending',  type: 'Academic', size: '320 KB', updated: '3w ago',  version: 1, pages: 1,  modBy: 'Admin',   modByInitials: 'AU', modByColor: '#6C47FF' },
  { id: '9',  name: 'Internship Offer · F. Adebayo.pdf',status: 'failed',   type: 'HR',       size: '410 KB', updated: '1mo ago', version: 2, pages: 2,  modBy: 'HR Team', modByInitials: 'HR', modByColor: '#059669' },
]

const tabs: { id: 'all' | DocType; label: string }[] = [
  { id: 'all',      label: 'All' },
  { id: 'Contract', label: 'Contracts' },
  { id: 'Legal',    label: 'Legal' },
  { id: 'Academic', label: 'Academic' },
  { id: 'Business', label: 'Business' },
  { id: 'HR',       label: 'HR' },
]

type SortField = 'name' | 'updated' | 'version' | 'size'

export function VaultPage() {
  const [activeTab, setActiveTab] = useState<'all' | DocType>('all')
  const [query, setQuery] = useState('')
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const [sort, setSort] = useState<{ field: SortField; asc: boolean }>({ field: 'updated', asc: true })

  const filtered = documents.filter(d => {
    if (activeTab !== 'all' && d.type !== activeTab) return false
    if (query && !d.name.toLowerCase().includes(query.toLowerCase())) return false
    return true
  })

  const stats = [
    { label: 'Total documents', value: `${documents.length}`, icon: Archive, color: 'var(--color-accent)', bg: 'rgba(108,71,255,0.06)' },
    { label: 'Storage used', value: '8.1 GB', sub: 'of 50 GB', icon: HardDrive, color: '#0891B2', bg: 'rgba(8,145,178,0.06)' },
    { label: 'Signed & archived', value: `${documents.filter(d => d.status === 'complete').length}`, icon: CheckCircle2, color: '#059669', bg: 'rgba(5,150,105,0.06)' },
    { label: 'Added this month', value: '6', icon: TrendingUp, color: '#D97706', bg: 'rgba(217,119,6,0.06)' },
  ]

  function toggleSort(field: SortField) {
    setSort(s => s.field === field ? { field, asc: !s.asc } : { field, asc: true })
  }

  function SortIcon({ field }: { field: SortField }) {
    if (sort.field !== field) return <ChevronUp size={11} style={{ opacity: 0.2 }} />
    return sort.asc
      ? <ChevronUp size={11} style={{ color: 'var(--color-accent)' }} />
      : <ChevronDown size={11} style={{ color: 'var(--color-accent)' }} />
  }

  return (
    <div className="page" style={{ maxWidth: 'none' }}>

      {/* ── Header ── */}
      <header style={{ marginBottom: 24, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Vault</h1>
          <p className="page-subtitle">Secure, versioned storage for every generated document</p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <Button variant="secondary" size="sm">
            <FileDown size={13} />
            <span>Export All</span>
          </Button>
        </div>
      </header>

      {/* ── Stats strip ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
        gap: 12,
        marginBottom: 24,
      }}>
        {stats.map(stat => (
          <div key={stat.label} style={{
            background: stat.bg,
            border: '1px solid var(--color-border)',
            borderRadius: 8,
            padding: '14px 16px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
          }}>
            <div style={{
              width: 30, height: 30, borderRadius: 7,
              background: stat.bg,
              border: `1px solid ${stat.color}28`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <stat.icon size={14} color={stat.color} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4 }}>
                <span style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.8, color: stat.color, lineHeight: 1 }}>{stat.value}</span>
                {stat.sub && <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)' }}>{stat.sub}</span>}
              </div>
              <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginTop: 3, lineHeight: 1.3 }}>{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Tabs + Search ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, marginBottom: 0, flexWrap: 'wrap' }}>
        {/* Tabs */}
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--color-border)', flex: '1 1 auto', minWidth: 0 }}>
          {tabs.map(tab => {
            const count = tab.id === 'all' ? documents.length : documents.filter(d => d.type === tab.id).length
            const isActive = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 5,
                  padding: '8px 12px',
                  fontSize: 12, fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                  background: 'none', border: 'none',
                  borderBottom: `2px solid ${isActive ? 'var(--color-accent)' : 'transparent'}`,
                  marginBottom: -1,
                  cursor: 'pointer', whiteSpace: 'nowrap', transition: 'color 80ms',
                }}
              >
                {tab.label}
                <span style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                  minWidth: 16, height: 15, padding: '0 4px',
                  background: isActive ? 'var(--color-accent-muted)' : 'var(--color-bg-tertiary)',
                  color: isActive ? 'var(--color-accent)' : 'var(--color-text-quaternary)',
                  borderRadius: 8, fontSize: 10, fontWeight: 700, fontFamily: 'var(--font-mono)',
                }}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Search */}
        <div style={{ position: 'relative', flexShrink: 0, width: 220 }}>
          <Search size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }} />
          <input
            className="input"
            style={{ height: 32, paddingLeft: 30, fontSize: 12, width: '100%' }}
            placeholder="Search documents…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* ── Table ── */}
      <div className="vault-table-container" style={{ marginTop: 0 }}>
        <table className="vault-table">
          <thead>
            <tr>
              <th>
                <button onClick={() => toggleSort('name')} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.4 }}>
                  Name <SortIcon field="name" />
                </button>
              </th>
              <th>
                <button onClick={() => toggleSort('version')} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.4 }}>
                  Ver <SortIcon field="version" />
                </button>
              </th>
              <th style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.4 }}>Status</th>
              <th style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.4 }}>Type</th>
              <th style={{ fontSize: 11, textTransform: 'uppercase', letterSpacing: 0.4 }}>Modified By</th>
              <th>
                <button onClick={() => toggleSort('size')} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.4 }}>
                  Size <SortIcon field="size" />
                </button>
              </th>
              <th>
                <button onClick={() => toggleSort('updated')} style={{ display: 'flex', alignItems: 'center', gap: 4, background: 'none', border: 'none', cursor: 'pointer', fontSize: 11, fontWeight: 600, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.4 }}>
                  Updated <SortIcon field="updated" />
                </button>
              </th>
              <th style={{ width: 80 }}></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={8} style={{ textAlign: 'center', padding: '56px 24px' }}>
                  <Archive size={28} style={{ color: 'var(--color-text-quaternary)', display: 'block', margin: '0 auto 12px' }} />
                  <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-secondary)', marginBottom: 4 }}>No documents found</div>
                  <div style={{ fontSize: 12, color: 'var(--color-text-quaternary)' }}>Try adjusting your search or category filter</div>
                </td>
              </tr>
            ) : filtered.map(doc => {
              const tc = typeColors[doc.type]
              return (
                <tr
                  key={doc.id}
                  onMouseEnter={() => setHoveredId(doc.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  style={{ cursor: 'default', background: hoveredId === doc.id ? 'var(--color-hover)' : 'transparent', transition: 'background 100ms' }}
                >
                  {/* Name */}
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{
                        width: 28, height: 34,
                        background: `${tc.bg}`,
                        border: `1px solid ${tc.text}28`,
                        borderRadius: 2,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        flexShrink: 0, position: 'relative',
                      }}>
                        <FileText size={12} color={tc.text} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-text-primary)', lineHeight: 1.3 }}>{doc.name}</div>
                        {doc.signedBy && (
                          <div style={{ fontSize: 11, color: 'var(--color-status-complete)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 3 }}>
                            <CheckCircle2 size={10} />
                            Signed · {doc.signedBy}
                          </div>
                        )}
                        {!doc.signedBy && (
                          <div style={{ fontSize: 11, color: 'var(--color-text-quaternary)', marginTop: 2, display: 'flex', alignItems: 'center', gap: 3 }}>
                            <FileText size={10} />
                            {doc.pages}p
                          </div>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Version */}
                  <td>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 3,
                      padding: '2px 7px', borderRadius: 4,
                      background: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                      fontSize: 10, fontWeight: 700, color: 'var(--color-text-tertiary)',
                      fontFamily: 'var(--font-mono)',
                    }}>
                      <GitBranch size={9} />
                      v{doc.version}
                    </span>
                  </td>

                  {/* Status */}
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{
                        width: 5, height: 5, borderRadius: '50%',
                        background: doc.status === 'complete' ? 'var(--color-status-complete)'
                          : doc.status === 'pending' ? 'var(--color-status-pending)'
                          : doc.status === 'failed' ? 'var(--color-status-failed)'
                          : 'var(--color-status-draft)',
                      }} />
                      <Badge status={doc.status} />
                    </div>
                  </td>

                  {/* Type */}
                  <td>
                    <span style={{
                      padding: '2px 8px', borderRadius: 4,
                      background: tc.bg, color: tc.text,
                      fontSize: 10, fontWeight: 700, letterSpacing: 0.2,
                    }}>
                      {doc.type}
                    </span>
                  </td>

                  {/* Modified By */}
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                      <div style={{
                        width: 22, height: 22, borderRadius: 5,
                        background: `${doc.modByColor}14`,
                        border: `1px solid ${doc.modByColor}30`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 8, fontWeight: 700, color: doc.modByColor, flexShrink: 0,
                      }}>
                        {doc.modByInitials}
                      </div>
                      <span style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>{doc.modBy}</span>
                    </div>
                  </td>

                  {/* Size */}
                  <td>
                    <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)', fontFamily: 'var(--font-mono)' }}>{doc.size}</span>
                  </td>

                  {/* Updated */}
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--color-text-tertiary)' }}>
                      <Clock size={10} />
                      {doc.updated}
                    </div>
                  </td>

                  {/* Actions */}
                  <td>
                    <div style={{ display: 'flex', gap: 2 }}>
                      {[
                        { icon: Eye, title: 'Preview' },
                        { icon: Download, title: 'Download' },
                        { icon: MoreHorizontal, title: 'More' },
                      ].map(({ icon: Icon, title }) => (
                        <button
                          key={title}
                          title={title}
                          style={{
                            width: 26, height: 26, border: 'none', borderRadius: 4,
                            background: 'none', cursor: 'pointer',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            color: 'var(--color-text-tertiary)', transition: 'background 60ms, color 60ms',
                          }}
                          onMouseEnter={e => {
                            const el = e.currentTarget
                            el.style.background = 'var(--color-hover)'
                            el.style.color = 'var(--color-text-primary)'
                          }}
                          onMouseLeave={e => {
                            const el = e.currentTarget
                            el.style.background = 'none'
                            el.style.color = 'var(--color-text-tertiary)'
                          }}
                        >
                          <Icon size={12} />
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      {/* ── Footer row ── */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 16, padding: '10px 0' }}>
        <span style={{ fontSize: 12, color: 'var(--color-text-quaternary)' }}>
          Showing {filtered.length} of {documents.length} documents
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--color-text-quaternary)' }}>
          <CheckCircle2 size={11} color="var(--color-status-complete)" />
          All documents encrypted at rest · AES-256 · full audit trail
        </div>
      </div>
    </div>
  )
}
