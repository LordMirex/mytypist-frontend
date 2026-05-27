import { 
  Plus, 
  Clock, 
  User, 
  Circle, 
  Filter
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'

const stages = [
  { id: 'draft', title: 'Drafting', count: 3, status: 'draft' },
  { id: 'review', title: 'Under Review', count: 2, status: 'pending' },
  { id: 'signing', title: 'Awaiting Signatures', count: 4, status: 'in-progress' },
  { id: 'complete', title: 'Completed', count: 12, status: 'complete' },
]

const documents = [
  { id: '1', title: 'Employment Agreement - John Doe', stage: 'draft', date: '2h ago', user: 'Admin' },
  { id: '2', title: 'Service Level Agreement', stage: 'draft', date: '5h ago', user: 'Admin' },
  { id: '3', title: 'Mutual NDA - Acme Corp', stage: 'review', date: '1d ago', user: 'Legal' },
  { id: '4', title: 'Q4 Budget Proposal', stage: 'signing', date: '30m ago', user: 'Finance' },
  { id: '5', title: 'Vendor Master Agreement', stage: 'complete', date: '3d ago', user: 'Admin' },
]

export function PipelinePage() {
  return (
    <div className="page">
      <header style={{ marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Pipeline</h1>
          <p className="page-subtitle">Track documents through their workflow stages</p>
        </div>
        <div className="flex-center gap-2">
          <Button variant="secondary" size="sm">
            <Filter size={14} />
            <span style={{ marginLeft: 6 }}>Filter</span>
          </Button>
          <Button size="sm">
            <Plus size={14} />
            <span style={{ marginLeft: 6 }}>New Document</span>
          </Button>
        </div>
      </header>

      <div className="pipeline-container">
        {stages.map(stage => (
          <div key={stage.id} className="pipeline-col">
            <div className="pipeline-col-header">
              <div className="pipeline-col-title">
                <Circle size={10} fill={stage.status === 'complete' ? 'var(--color-status-complete)' : 'none'} stroke={stage.status === 'complete' ? 'none' : 'currentColor'} />
                {stage.title}
                <span style={{ color: 'var(--color-text-tertiary)', fontWeight: 400 }}>{stage.count}</span>
              </div>
              <Button variant="ghost" size="sm" style={{ width: 24, height: 24, padding: 0 }}>
                <Plus size={14} />
              </Button>
            </div>

            <div className="pipeline-stage-items" style={{ gap: 12 }}>
              {documents.filter(doc => doc.stage === stage.id).map(doc => (
                <div key={doc.id} className="pipeline-card">
                  <div className="pipeline-card-title">{doc.title}</div>
                  <div className="pipeline-card-meta">
                    <div className="flex-center" style={{ gap: 4 }}>
                      <Clock size={12} />
                      {doc.date}
                    </div>
                    <div className="flex-center" style={{ gap: 4 }}>
                      <User size={12} />
                      {doc.user}
                    </div>
                  </div>
                  <div className="pipeline-card-tags">
                    <Badge status={stage.status as any} />
                  </div>
                </div>
              ))}
              
              <Button variant="ghost" size="sm" style={{ justifyContent: 'flex-start', color: 'var(--color-text-tertiary)', fontSize: 12 }}>
                <Plus size={14} style={{ marginRight: 6 }} />
                Add card
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
