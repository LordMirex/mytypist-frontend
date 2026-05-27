import { useState } from 'react'
import {
  Plus, Search, Send, Clock, CheckCircle, XCircle,
  MoreHorizontal, FileText, User, Mail, Filter, ChevronDown,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'

type SignStatus = 'pending' | 'complete' | 'failed' | 'draft'

type SignRequest = {
  id: string
  document: string
  recipient: string
  email: string
  initials: string
  avatarColor: string
  status: SignStatus
  sent: string
  expires: string
  pages: number
}

const requests: SignRequest[] = [
  { id: '1', document: 'Vendor Master Agreement', recipient: 'Sarah Mitchell', email: 'sarah@acmecorp.com', initials: 'SM', avatarColor: '#6C47FF', status: 'pending', sent: '2h ago', expires: 'in 5 days', pages: 3 },
  { id: '2', document: 'Acceptance Letter — J. Okafor', recipient: 'John Adeyemi Okafor', email: 'j.okafor@university.edu', initials: 'JO', avatarColor: '#059669', status: 'pending', sent: '1d ago', expires: 'in 4 days', pages: 2 },
  { id: '3', document: 'Mutual NDA — Acme Corp', recipient: 'David Chen', email: 'dchen@acmecorp.com', initials: 'DC', avatarColor: '#D97706', status: 'complete', sent: '3d ago', expires: 'Signed', pages: 4 },
  { id: '4', document: 'Board Resolution — May 2026', recipient: 'Emma Rodriguez', email: 'e.rodriguez@board.io', initials: 'ER', avatarColor: '#6C47FF', status: 'pending', sent: '2d ago', expires: 'in 3 days', pages: 1 },
  { id: '5', document: 'Employment Agreement — John Doe', recipient: 'John Doe', email: 'john.doe@email.com', initials: 'JD', avatarColor: '#059669', status: 'complete', sent: '1w ago', expires: 'Signed', pages: 6 },
  { id: '6', document: 'Service Level Agreement', recipient: 'Priya Sharma', email: 'priya@techpartner.io', initials: 'PS', avatarColor: '#DC2626', status: 'failed', sent: '1w ago', expires: 'Expired', pages: 8 },
  { id: '7', document: 'Q4 Consulting Contract', recipient: 'Mark Johnson', email: 'mark.j@consulting.com', initials: 'MJ', avatarColor: '#6C47FF', status: 'draft', sent: '—', expires: '—', pages: 5 },
]

const tabs = [
  { id: 'all', label: 'All', count: requests.length },
  { id: 'pending', label: 'Pending', count: requests.filter(r => r.status === 'pending').length },
  { id: 'complete', label: 'Signed', count: requests.filter(r => r.status === 'complete').length },
  { id: 'failed', label: 'Expired', count: requests.filter(r => r.status === 'failed').length },
]

const statusIcon = {
  pending: <Clock size={13} color="var(--color-status-pending)" />,
  complete: <CheckCircle size={13} color="var(--color-status-complete)" />,
  failed: <XCircle size={13} color="var(--color-status-failed)" />,
  draft: <FileText size={13} color="var(--color-text-quaternary)" />,
}

export function SignPage() {
  const [activeTab, setActiveTab] = useState('all')
  const [search, setSearch] = useState('')

  const filtered = requests.filter(r => {
    if (activeTab !== 'all' && r.status !== activeTab) return false
    if (search && !r.document.toLowerCase().includes(search.toLowerCase()) && !r.recipient.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="page" style={{ maxWidth: 900 }}>
      {/* Header */}
      <header style={{ marginBottom: 28, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <h1 className="page-title">Sign</h1>
          <p className="page-subtitle">Send, track, and manage signature requests</p>
        </div>
        <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
          <Button variant="secondary" size="sm">
            <Filter size={13} />
            <span>Filter</span>
          </Button>
          <Button size="sm">
            <Plus size={13} />
            <span>New Request</span>
          </Button>
        </div>
      </header>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 28 }}>
        {[
          { label: 'Awaiting signature', value: '3', accent: '#6C47FF', bg: 'rgba(108,71,255,0.06)' },
          { label: 'Signed this month', value: '18', accent: '#059669', bg: 'rgba(5,150,105,0.06)' },
          { label: 'Expiring soon', value: '2', accent: '#D97706', bg: 'rgba(217,119,6,0.06)' },
          { label: 'Avg. turnaround', value: '1.4d', accent: 'var(--color-text-secondary)', bg: 'var(--color-bg-secondary)' },
        ].map(stat => (
          <div key={stat.label} style={{
            background: stat.bg,
            border: '1px solid var(--color-border)',
            borderRadius: 6,
            padding: '14px 16px',
          }}>
            <div style={{ fontSize: 22, fontWeight: 700, color: stat.accent, letterSpacing: '-0.5px', lineHeight: 1 }}>
              {stat.value}
            </div>
            <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginTop: 5, lineHeight: 1.3 }}>
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tabs + Search */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16, gap: 16 }}>
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--color-border)', flex: 1 }}>
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '8px 14px',
                fontSize: 13, fontWeight: activeTab === tab.id ? 600 : 400,
                color: activeTab === tab.id ? 'var(--color-accent)' : 'var(--color-text-secondary)',
                background: 'none', border: 'none', borderBottom: `2px solid ${activeTab === tab.id ? 'var(--color-accent)' : 'transparent'}`,
                marginBottom: -1,
                cursor: 'pointer', transition: 'color 80ms',
              }}
            >
              {tab.label}
              <span style={{
                display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                minWidth: 18, height: 16, padding: '0 5px',
                background: activeTab === tab.id ? 'var(--color-accent-muted)' : 'var(--color-bg-tertiary)',
                color: activeTab === tab.id ? 'var(--color-accent)' : 'var(--color-text-quaternary)',
                borderRadius: 8, fontSize: 10, fontWeight: 700,
                fontFamily: 'var(--font-mono)',
              }}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div style={{ position: 'relative', flexShrink: 0 }}>
          <Search size={14} style={{
            position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
            color: 'var(--color-text-tertiary)', pointerEvents: 'none',
          }} />
          <input
            className="input"
            style={{ height: 32, paddingLeft: 32, width: 220 }}
            placeholder="Search documents or recipients…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      <div className="vault-table-container">
        <table className="vault-table">
          <thead>
            <tr>
              <th>Document</th>
              <th>Recipient</th>
              <th>Status</th>
              <th>Sent</th>
              <th>Expires / Signed</th>
              <th style={{ width: 36 }}></th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', padding: '48px 24px', color: 'var(--color-text-tertiary)', fontSize: 13 }}>
                  No requests match your filter.
                </td>
              </tr>
            ) : filtered.map(req => (
              <tr key={req.id}>
                {/* Document */}
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 28, height: 34,
                      background: 'var(--color-bg-secondary)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 2,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <FileText size={13} color="var(--color-text-tertiary)" />
                    </div>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--color-text-primary)' }}>{req.document}</div>
                      <div style={{ fontSize: 11, color: 'var(--color-text-quaternary)', fontFamily: 'var(--font-mono)', marginTop: 1 }}>{req.pages}p</div>
                    </div>
                  </div>
                </td>
                {/* Recipient */}
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                    <div style={{
                      width: 26, height: 26, borderRadius: 6,
                      background: `${req.avatarColor}14`,
                      border: `1px solid ${req.avatarColor}30`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 700, color: req.avatarColor, flexShrink: 0,
                    }}>
                      {req.initials}
                    </div>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-text-primary)' }}>{req.recipient}</div>
                      <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', display: 'flex', alignItems: 'center', gap: 4, marginTop: 1 }}>
                        <Mail size={10} />
                        {req.email}
                      </div>
                    </div>
                  </div>
                </td>
                {/* Status */}
                <td>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {statusIcon[req.status]}
                    <Badge status={req.status} />
                  </div>
                </td>
                {/* Sent */}
                <td>
                  <span style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{req.sent}</span>
                </td>
                {/* Expires */}
                <td>
                  <span style={{
                    fontSize: 12,
                    color: req.status === 'failed' ? 'var(--color-status-failed)' :
                      req.status === 'complete' ? 'var(--color-status-complete)' :
                      'var(--color-text-tertiary)',
                  }}>
                    {req.expires}
                  </span>
                </td>
                {/* Actions */}
                <td>
                  <div style={{ display: 'flex', gap: 4 }}>
                    {req.status === 'pending' && (
                      <button title="Resend" style={{
                        width: 26, height: 26, border: 'none', background: 'none', borderRadius: 4,
                        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: 'var(--color-text-quaternary)', transition: 'background 60ms, color 60ms',
                      }}
                        onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-hover)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-accent)' }}
                        onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'none'; (e.currentTarget as HTMLElement).style.color = 'var(--color-text-quaternary)' }}
                      >
                        <Send size={12} />
                      </button>
                    )}
                    <button style={{
                      width: 26, height: 26, border: 'none', background: 'none', borderRadius: 4,
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--color-text-quaternary)', transition: 'background 60ms, color 60ms',
                    }}
                      onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-hover)'; (e.currentTarget as HTMLElement).style.color = 'var(--color-text-secondary)' }}
                      onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'none'; (e.currentTarget as HTMLElement).style.color = 'var(--color-text-quaternary)' }}
                    >
                      <MoreHorizontal size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Empty state for drafts hint */}
      {activeTab === 'all' && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          marginTop: 16, padding: '12px 16px',
          background: 'var(--color-accent-muted)',
          border: '1px solid var(--color-accent-border)',
          borderRadius: 6,
        }}>
          <Send size={14} color="var(--color-accent)" style={{ flexShrink: 0 }} />
          <p style={{ fontSize: 13, color: 'var(--color-accent)', margin: 0 }}>
            <strong>1 draft</strong> is ready to send — open it in Studio or click <strong>New Request</strong> to send directly.
          </p>
        </div>
      )}
    </div>
  )
}
