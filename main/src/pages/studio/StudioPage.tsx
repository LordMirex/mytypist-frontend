import { 
  Share2, 
  Eye, 
  PenSquare, 
  History, 
  Layers,
  ChevronRight,
  Plus
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

export function StudioPage() {
  return (
    <div className="studio">
      {/* Megaverb Toolbar */}
      <div className="studio-mega-toolbar">
        <div className="flex-center gap-2">
          <div className="toolbar-breadcrumb">
            Documents <ChevronRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} /> <strong>Untitled Document</strong>
          </div>
          <Badge status="draft" />
        </div>
        
        <div className="flex-center gap-2">
          <Button variant="ghost" size="sm">
            <History size={16} />
            <span style={{ marginLeft: 6 }}>History</span>
          </Button>
          <div style={{ width: 1, height: 20, background: 'var(--color-border)', margin: '0 8px' }} />
          <Button variant="secondary" size="sm">
            <Eye size={16} />
            <span style={{ marginLeft: 6 }}>Preview</span>
          </Button>
          <Button variant="secondary" size="sm">
            <Share2 size={16} />
            <span style={{ marginLeft: 6 }}>Share</span>
          </Button>
          <Button variant="primary" size="sm">
            <PenSquare size={16} />
            <span style={{ marginLeft: 6 }}>Sign</span>
          </Button>
        </div>
      </div>

      <div className="studio-body">
        {/* Left Panel: Form / Structure */}
        <aside className="studio-panel studio-panel--left">
          <div className="studio-panel-header">Structure</div>
          <div className="p-4">
            <div className="empty-state" style={{ padding: 'var(--space-8) 0' }}>
              <Layers size={32} color="var(--color-text-quaternary)" />
              <div className="empty-state-title" style={{ fontSize: 14 }}>No sections yet</div>
              <div className="empty-state-description" style={{ fontSize: 12 }}>
                Add blocks to build your document structure.
              </div>
              <Button variant="secondary" size="sm" style={{ marginTop: 16 }}>
                <Plus size={14} />
                Add Block
              </Button>
            </div>
          </div>
        </aside>

        {/* Center Panel: Canvas */}
        <main className="studio-panel studio-panel--center">
          <div className="doc-canvas">
            <header className="doc-header">
              <h1 className="doc-title">Untitled Document</h1>
              <div className="doc-meta">Created on May 27, 2026 • By Admin</div>
            </header>
            
            <div className="doc-content">
              <p>Start typing or select a block from the structure panel to begin building your document.</p>
              
              <div style={{ 
                marginTop: 40, 
                padding: 24, 
                border: '2px dashed var(--color-border)', 
                borderRadius: 'var(--doc-block-radius)',
                textAlign: 'center',
                color: 'var(--color-text-tertiary)'
              }}>
                Drop blocks here
              </div>
            </div>
          </div>
        </main>

        {/* Right Panel: Inspector */}
        <aside className="studio-panel studio-panel--right">
          <div className="studio-panel-header">Inspector</div>
          <div className="p-4">
            <div className="input-wrapper">
              <label className="input-label">Document Name</label>
              <input className="input" placeholder="Untitled Document" />
            </div>
            
            <div className="input-wrapper" style={{ marginTop: 20 }}>
              <label className="input-label">Document Type</label>
              <select className="input" style={{ width: '100%' }}>
                <option>Contract</option>
                <option>Invoice</option>
                <option>Proposal</option>
                <option>Other</option>
              </select>
            </div>

            <div style={{ marginTop: 32 }}>
              <div className="input-label" style={{ marginBottom: 12 }}>Permissions</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input type="checkbox" defaultChecked readOnly />
                  <span style={{ fontSize: 13 }}>Publicly viewable</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input type="checkbox" />
                  <span style={{ fontSize: 13 }}>Requires signature</span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
