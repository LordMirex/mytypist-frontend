import { useState } from 'react'
import {
  Share2,
  Eye,
  PenSquare,
  History,
  ChevronRight,
  FileText,
  Type,
  AlignLeft,
  Minus,
  Image,
  Download,
  MoreHorizontal,
  LayoutList,
  ScanText,
  Settings2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const blocks = [
  { id: 'b1', type: 'header',    label: 'Letterhead',       icon: Image,     depth: 0, active: false },
  { id: 'b2', type: 'title',     label: 'Document Title',   icon: Type,      depth: 0, active: false },
  { id: 'b3', type: 'meta',      label: 'Reference / Date', icon: Minus,     depth: 1, active: false },
  { id: 'b4', type: 'paragraph', label: 'Opening Para',     icon: AlignLeft, depth: 0, active: false },
  { id: 'b5', type: 'paragraph', label: 'Body — Details',   icon: AlignLeft, depth: 0, active: true  },
  { id: 'b6', type: 'paragraph', label: 'Closing Para',     icon: AlignLeft, depth: 0, active: false },
  { id: 'b7', type: 'divider',   label: 'Rule',             icon: Minus,     depth: 0, active: false },
  { id: 'b8', type: 'signature', label: 'Signature Block',  icon: PenSquare, depth: 0, active: false },
]

const selectedPlaceholder = {
  name: 'Student Name',
  type: 'Text',
  value: 'John Adeyemi Okafor',
  pattern: '',
  required: true,
  maxLength: 120,
}

type MobilePanel = 'structure' | 'document' | 'inspector'

export function StudioPage() {
  const [activeBlock, setActiveBlock] = useState('b5')
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>('document')

  return (
    <div className="studio">
      {/* ── Mega toolbar ── */}
      <div className="studio-mega-toolbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0, flex: 1, overflow: 'hidden' }}>
          <div className="toolbar-breadcrumb" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}>
            <span className="studio-breadcrumb-prefix">Documents</span>
            <ChevronRight size={12} style={{ display: 'inline', verticalAlign: 'middle', margin: '0 2px' }} />
            <strong style={{ color: 'var(--color-text-primary)', fontWeight: 500 }}>Acceptance Letter</strong>
          </div>
          <Badge status="draft" label="Draft" />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 4, flexShrink: 0 }}>
          <Button variant="ghost" size="sm" className="studio-toolbar-btn--hide-xs">
            <History size={14} />
            <span className="studio-toolbar-label">History</span>
          </Button>
          <div style={{ width: 1, height: 18, background: 'var(--color-border)', margin: '0 2px' }} className="studio-toolbar-btn--hide-xs" />
          <Button variant="secondary" size="sm" className="studio-toolbar-btn--hide-sm">
            <Eye size={14} />
            <span className="studio-toolbar-label">Preview</span>
          </Button>
          <Button variant="secondary" size="sm" className="studio-toolbar-btn--hide-sm">
            <Share2 size={14} />
            <span className="studio-toolbar-label">Share</span>
          </Button>
          <Button variant="secondary" size="sm" className="studio-toolbar-btn--hide-xs">
            <Download size={14} />
            <span className="studio-toolbar-label">Export</span>
          </Button>
          <Button variant="primary" size="sm">
            <PenSquare size={14} />
            <span className="studio-toolbar-label">Sign</span>
          </Button>
        </div>
      </div>

      {/* ── Body ── */}
      <div className="studio-body">
        {/* ── Left: Structure panel ── */}
        <aside className={`studio-panel studio-panel--left${mobilePanel !== 'structure' ? ' studio-panel--mobile-hidden' : ''}`}>
          <div className="studio-panel-header" style={{ justifyContent: 'space-between' }}>
            <span>Structure</span>
            <button style={{
              width: 22, height: 22, borderRadius: 3, border: '1px solid var(--color-border)',
              background: 'var(--color-surface)', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'var(--color-text-tertiary)',
            }}>
              <span style={{ fontSize: 16, lineHeight: 1, marginTop: -1 }}>+</span>
            </button>
          </div>

          <div className="studio-block-list" style={{ padding: '8px 0' }}>
            {blocks.map((block) => (
              <div
                key={block.id}
                className={`studio-block-item${activeBlock === block.id ? ' studio-block-item--active' : ''}`}
                style={{ paddingLeft: 12 + block.depth * 14 }}
                onClick={() => { setActiveBlock(block.id); setMobilePanel('document') }}
              >
                {block.depth > 0 && (
                  <div style={{ width: 1, height: 20, background: 'var(--color-border)', flexShrink: 0, marginRight: 4 }} />
                )}
                <block.icon size={12} style={{ flexShrink: 0, opacity: 0.7 }} />
                <span style={{ flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                  {block.label}
                </span>
                <MoreHorizontal size={12} style={{ opacity: 0, flexShrink: 0, transition: 'opacity 80ms' }} />
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 'auto', padding: '10px 12px',
            borderTop: '1px solid var(--color-border)',
            display: 'flex', gap: 16,
          }}>
            {[['Blocks', '8'], ['Fields', '6'], ['Pages', '2']].map(([label, val]) => (
              <div key={label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <span style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-text-primary)', lineHeight: 1, fontFamily: 'var(--font-mono)' }}>{val}</span>
                <span style={{ fontSize: 9.5, color: 'var(--color-text-quaternary)', textTransform: 'uppercase', letterSpacing: '0.4px' }}>{label}</span>
              </div>
            ))}
          </div>
        </aside>

        {/* ── Center: Document canvas ── */}
        <main className={`studio-panel studio-panel--center${mobilePanel !== 'document' ? ' studio-panel--mobile-hidden' : ''}`}>
          <div className="doc-canvas" style={{ padding: '72px 80px', fontFamily: "'Inter', sans-serif" }}>

            {/* Letterhead */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 40, paddingBottom: 24, borderBottom: '2px solid var(--color-border)' }}>
              <div>
                <div style={{ width: 3, height: 32, background: 'var(--color-accent)', borderRadius: 2, marginBottom: 8 }} />
                <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '-0.5px', color: 'var(--color-text-primary)', fontFamily: "'Instrument Serif', serif" }}>
                  University of Lagos
                </div>
                <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 2 }}>Academic Affairs Division</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 11, color: 'var(--color-text-quaternary)', fontFamily: 'var(--font-mono)', letterSpacing: '0.04em' }}>REF · 2026/ACC/0047</div>
                <div style={{ fontSize: 11, color: 'var(--color-text-quaternary)', fontFamily: 'var(--font-mono)', marginTop: 3 }}>27 May 2026 · CONFIDENTIAL</div>
              </div>
            </div>

            {/* Document title */}
            <div style={{ marginBottom: 28 }}>
              <div style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.6px', textTransform: 'uppercase', color: 'var(--color-text-tertiary)', marginBottom: 8 }}>
                LETTER OF ADMISSION
              </div>
              <h1 style={{ fontSize: 26, fontWeight: 700, letterSpacing: '-0.6px', color: 'var(--color-text-primary)', fontFamily: "'Instrument Serif', serif", lineHeight: 1.15 }}>
                Acceptance Letter
              </h1>
            </div>

            {/* Body */}
            <div style={{ fontSize: 15, lineHeight: 1.75, color: 'var(--color-text-primary)', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <p>
                Dear <span className="doc-placeholder doc-placeholder--filled">Student Name</span>,
              </p>
              <p>
                We are pleased to inform you that your application to the{' '}
                <span className="doc-placeholder doc-placeholder--filled">Department</span>{' '}
                programme at the University of Lagos has been reviewed and formally accepted for
                the <span className="doc-placeholder doc-placeholder--filled">Academic Year</span> session.
              </p>
              <p>
                Your student identification number is{' '}
                <span className="doc-placeholder doc-placeholder--selected">Student ID</span>.
                Please report to the Academic Affairs office no later than{' '}
                <span className="doc-placeholder">Deadline Date</span>{' '}
                to complete registration formalities.
              </p>
              <p>
                This offer is conditional upon the verification of all submitted credentials. Your
                acceptance is subject to the payment of the <span className="doc-placeholder">Tuition Amount</span>{' '}
                acceptance fee by <span className="doc-placeholder">Payment Deadline</span>.
              </p>
              <p style={{ marginTop: 8, color: 'var(--color-text-secondary)' }}>
                Congratulations and welcome to the University of Lagos community.
              </p>

              {/* Signature block */}
              <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
                {[
                  { label: 'Authorized Signatory', name: 'Prof. A.O. Animashaun', title: 'Dean, Academic Affairs' },
                  { label: 'Date of Issue', name: '27 May 2026', title: '' },
                ].map((sig) => (
                  <div key={sig.label}>
                    <div style={{ height: 36, borderBottom: '1px solid var(--color-border)', marginBottom: 8 }} />
                    <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)' }}>{sig.name}</div>
                    {sig.title && <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginTop: 2 }}>{sig.title}</div>}
                    <div style={{ fontSize: 10, color: 'var(--color-text-quaternary)', textTransform: 'uppercase', letterSpacing: '0.4px', marginTop: 4 }}>{sig.label}</div>
                  </div>
                ))}
              </div>

              <div style={{
                marginTop: 24, padding: '10px 14px',
                background: 'var(--color-bg-secondary)',
                border: '1px dashed var(--color-border-strong)',
                borderRadius: 2, fontSize: 11,
                color: 'var(--color-text-quaternary)',
                display: 'flex', alignItems: 'center', gap: 8,
              }}>
                <FileText size={12} />
                <span>Official seal and stamp — applied on final export</span>
              </div>
            </div>
          </div>
        </main>

        {/* ── Right: Inspector ── */}
        <aside className={`studio-panel studio-panel--right${mobilePanel !== 'inspector' ? ' studio-panel--mobile-hidden' : ''}`}>
          <div className="studio-panel-header">Inspector</div>

          <div style={{ padding: '12px 14px', overflowY: 'auto', flex: 1 }}>
            <div style={{
              padding: '8px 10px',
              background: 'rgba(108,71,255,0.05)',
              border: '1px solid rgba(108,71,255,0.15)',
              borderRadius: 3, marginBottom: 16,
            }}>
              <div style={{ fontSize: 9.5, fontWeight: 700, color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: 4 }}>
                Selected field
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>
                {selectedPlaceholder.name}
              </div>
            </div>

            <div className="inspector-field">
              <div className="inspector-field-label">Field Name</div>
              <input className="input" style={{ height: 28, fontSize: 12 }} defaultValue={selectedPlaceholder.name} />
            </div>
            <div className="inspector-field">
              <div className="inspector-field-label">Type</div>
              <select className="input" style={{ width: '100%', height: 28, fontSize: 12 }}>
                <option>Text</option><option>Date</option><option>Number</option>
                <option>Currency</option><option>Email</option><option>URL</option>
              </select>
            </div>
            <div className="inspector-field">
              <div className="inspector-field-label">Preview Value</div>
              <input className="input" style={{ height: 28, fontSize: 12 }} defaultValue={selectedPlaceholder.value} />
            </div>

            <div className="inspector-divider" />
            <div className="inspector-section-head">Validation</div>

            {[{ label: 'Required', on: true }, { label: 'Trim whitespace', on: true }, { label: 'Regex pattern', on: false }].map((t) => (
              <div key={t.label} className="inspector-toggle-row">
                <span className="inspector-toggle-label">{t.label}</span>
                <div className={`inspector-toggle${t.on ? '' : ' inspector-toggle--off'}`} />
              </div>
            ))}

            <div style={{ marginTop: 10 }}>
              <div className="inspector-field">
                <div className="inspector-field-label">Max Length</div>
                <input className="input" style={{ height: 28, fontSize: 12 }} type="number" defaultValue={120} />
              </div>
            </div>

            <div className="inspector-divider" />
            <div className="inspector-section-head">Document</div>

            <div className="inspector-field">
              <div className="inspector-field-label">Document Name</div>
              <input className="input" style={{ height: 28, fontSize: 12 }} defaultValue="Acceptance Letter" />
            </div>
            <div className="inspector-field">
              <div className="inspector-field-label">Document Type</div>
              <select className="input" style={{ width: '100%', height: 28, fontSize: 12 }}>
                <option>Academic Letter</option><option>Contract</option>
                <option>Invoice</option><option>Proposal</option>
              </select>
            </div>

            <div className="inspector-divider" />

            <div style={{ display: 'flex', gap: 12, marginTop: 4 }}>
              {[['6', 'Fields'], ['2', 'Filled'], ['4', 'Pending']].map(([n, l]) => (
                <div key={l} style={{ flex: 1, padding: '8px 0', textAlign: 'center', background: 'var(--color-bg)', borderRadius: 3, border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', fontFamily: 'var(--font-mono)' }}>{n}</div>
                  <div style={{ fontSize: 9, color: 'var(--color-text-quaternary)', textTransform: 'uppercase', letterSpacing: '0.4px', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      {/* ── Mobile panel tab bar ── */}
      <div className="studio-mobile-tabs">
        {([
          { id: 'structure', label: 'Structure', icon: LayoutList },
          { id: 'document',  label: 'Document',  icon: ScanText   },
          { id: 'inspector', label: 'Inspector', icon: Settings2  },
        ] as { id: MobilePanel; label: string; icon: typeof LayoutList }[]).map(tab => (
          <button
            key={tab.id}
            className={`studio-mobile-tab${mobilePanel === tab.id ? ' studio-mobile-tab--active' : ''}`}
            onClick={() => setMobilePanel(tab.id)}
          >
            <tab.icon size={18} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
