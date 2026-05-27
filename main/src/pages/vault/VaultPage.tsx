import { 
  Search, 
  FileText, 
  MoreVertical, 
  Filter,
  FileDown
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

const documents = [
  { id: '1', name: 'Acme Corp SLA.pdf', status: 'complete', size: '1.2 MB', updated: '2h ago', type: 'Contract' },
  { id: '2', name: 'John Doe Offer Letter.docx', status: 'pending', size: '450 KB', updated: '5h ago', type: 'Legal' },
  { id: '3', name: 'University Admission.pdf', status: 'complete', size: '2.1 MB', updated: '1d ago', type: 'Academic' },
  { id: '4', name: 'Q4 Budget Proposal.xlsx', status: 'draft', size: '890 KB', updated: '3d ago', type: 'Business' },
  { id: '5', name: 'Project Timeline.pdf', status: 'failed', size: '1.5 MB', updated: '1w ago', type: 'Business' },
  { id: '6', name: 'Vendor Agreement.docx', status: 'complete', size: '2.8 MB', updated: '2w ago', type: 'Contract' },
]

export function VaultPage() {
  return (
    <div className="page">
      <header style={{ marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Vault</h1>
          <p className="page-subtitle">Secure storage for all generated artifacts</p>
        </div>
        <div className="flex-center gap-2">
          <Button variant="secondary" size="sm">
            <FileDown size={14} />
            <span style={{ marginLeft: 6 }}>Export All</span>
          </Button>
        </div>
      </header>

      <div className="vault-search-bar">
        <div className="vault-search-input-wrapper">
          <Search size={16} className="vault-search-icon" />
          <input 
            className="vault-search-input" 
            placeholder="Search documents by name, type, or status..." 
          />
        </div>
        <Button variant="secondary" size="sm" style={{ height: 36 }}>
          <Filter size={14} />
          <span style={{ marginLeft: 6 }}>Filter</span>
        </Button>
      </div>

      <div className="vault-table-container">
        <table className="vault-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Type</th>
              <th>Size</th>
              <th>Updated</th>
              <th style={{ width: 40 }}></th>
            </tr>
          </thead>
          <tbody>
            {documents.map(doc => (
              <tr key={doc.id}>
                <td>
                  <div className="flex-center" style={{ justifyContent: 'flex-start' }}>
                    <FileText size={16} className="vault-table-icon" />
                    <span style={{ fontWeight: 600 }}>{doc.name}</span>
                  </div>
                </td>
                <td>
                  <Badge status={doc.status as any} />
                </td>
                <td>
                  <span style={{ color: 'var(--color-text-secondary)' }}>{doc.type}</span>
                </td>
                <td>
                  <span style={{ color: 'var(--color-text-tertiary)' }}>{doc.size}</span>
                </td>
                <td>
                  <span style={{ color: 'var(--color-text-tertiary)' }}>{doc.updated}</span>
                </td>
                <td>
                  <Button variant="ghost" size="sm" style={{ width: 24, height: 24, padding: 0 }}>
                    <MoreVertical size={14} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
