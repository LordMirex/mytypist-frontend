import { useState } from 'react'
import { PenSquare, Archive, Check, Bell, AlertCircle } from 'lucide-react'

type NotifType = 'sign' | 'approve' | 'signed' | 'archived' | 'system'

interface Notif {
  id: string
  type: NotifType
  title: string
  body: string
  time: string
  read: boolean
}

const initNotifs: Notif[] = [
  { id: 'n1', type: 'sign',     title: 'Action required',               body: 'Employment Agreement · Eko Provisions Ltd is awaiting your signature.',               time: '2 hours ago',   read: false },
  { id: 'n2', type: 'approve',  title: 'Approval requested',            body: 'Non-Disclosure Agreement · Meridian Logistics has been routed to you for review.',     time: '5 hours ago',   read: false },
  { id: 'n3', type: 'signed',   title: 'All parties have signed',       body: 'Freelance Retainer · Chinedu Eze Design is fully executed and archived.',               time: '1 day ago',     read: true  },
  { id: 'n4', type: 'sign',     title: 'Reminder · pending signature',  body: 'Service Agreement · Coastal Energy Services has been waiting 3 days for your review.',  time: '1 day ago',     read: true  },
  { id: 'n5', type: 'archived', title: 'Document archived',             body: 'Board Resolution · Q2 2026 has been sealed and moved to the Vault.',                    time: '3 days ago',    read: true  },
  { id: 'n6', type: 'signed',   title: 'Signed by Ibrahim Bello',       body: 'Consulting Contract · Bakare & Associates received a signature from Ibrahim Bello.',    time: '4 days ago',    read: true  },
  { id: 'n7', type: 'system',   title: 'Welcome to MyTypist',           body: 'Your 14-day Pro trial is active. Explore the Studio, Templates, and Pipeline.',         time: '6 days ago',    read: true  },
]

const typeIcon: Record<NotifType, typeof PenSquare> = {
  sign:     PenSquare,
  approve:  AlertCircle,
  signed:   Check,
  archived: Archive,
  system:   Bell,
}

const typeColor: Record<NotifType, string> = {
  sign:     'var(--color-status-progress)',
  approve:  'var(--color-status-pending)',
  signed:   'var(--color-status-complete)',
  archived: 'var(--color-status-neutral)',
  system:   'var(--color-accent)',
}

const typeBg: Record<NotifType, string> = {
  sign:     'var(--color-status-progress-bg)',
  approve:  'var(--color-status-pending-bg)',
  signed:   'var(--color-status-complete-bg)',
  archived: 'var(--color-status-neutral-bg)',
  system:   'var(--color-accent-muted)',
}

function group(notifs: Notif[]): { label: string; items: Notif[] }[] {
  const today: Notif[] = []
  const week: Notif[]  = []
  const older: Notif[] = []
  notifs.forEach(n => {
    if (n.time.includes('hour') || n.time === 'Just now') today.push(n)
    else if (n.time.includes('day') && parseInt(n.time) <= 3)    week.push(n)
    else older.push(n)
  })
  return [
    { label: 'Today',      items: today },
    { label: 'This week',  items: week  },
    { label: 'Earlier',    items: older },
  ].filter(g => g.items.length > 0)
}

export function NotificationsPage() {
  const [notifs, setNotifs] = useState<Notif[]>(initNotifs)

  const unread = notifs.filter(n => !n.read).length

  function markAllRead() {
    setNotifs(prev => prev.map(n => ({ ...n, read: true })))
  }

  function markRead(id: string) {
    setNotifs(prev => prev.map(n => n.id === id ? { ...n, read: true } : n))
  }

  const groups = group(notifs)

  return (
    <div style={{ padding: '32px 28px 64px', maxWidth: 700, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 32 }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 700, letterSpacing: -0.4, color: 'var(--color-text-primary)', margin: '0 0 2px' }}>
            Notifications
          </h1>
          <p style={{ fontSize: 13, color: 'var(--color-text-tertiary)', margin: 0 }}>
            {unread > 0 ? `${unread} unread` : 'All caught up'}
          </p>
        </div>
        {unread > 0 && (
          <button
            onClick={markAllRead}
            style={{ fontSize: 12, fontWeight: 600, color: 'var(--color-accent)', background: 'none', border: 'none', cursor: 'pointer', padding: '6px 0' }}
          >
            Mark all as read
          </button>
        )}
      </div>

      {/* Grouped list */}
      {groups.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--color-text-quaternary)' }}>
          <Bell size={28} style={{ marginBottom: 12, opacity: 0.4 }} />
          <p style={{ fontSize: 14, margin: 0 }}>No notifications yet.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {groups.map(g => (
            <div key={g.label}>
              <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.6, color: 'var(--color-text-quaternary)', marginBottom: 8 }}>
                {g.label}
              </div>
              <div style={{ border: '1px solid var(--color-border)', borderRadius: 8, overflow: 'hidden', background: 'var(--color-surface)' }}>
                {g.items.map((notif, i) => {
                  const Icon = typeIcon[notif.type]
                  return (
                    <div
                      key={notif.id}
                      onClick={() => markRead(notif.id)}
                      style={{
                        display: 'flex', alignItems: 'flex-start', gap: 14,
                        padding: '16px 18px',
                        borderBottom: i < g.items.length - 1 ? '1px solid var(--color-border-subtle)' : 'none',
                        background: notif.read ? 'transparent' : 'rgba(108,71,255,0.02)',
                        cursor: notif.read ? 'default' : 'pointer',
                        transition: 'background 100ms',
                        position: 'relative',
                      }}
                      onMouseEnter={e => { if (!notif.read) e.currentTarget.style.background = 'var(--color-hover)' }}
                      onMouseLeave={e => { if (!notif.read) e.currentTarget.style.background = 'rgba(108,71,255,0.02)' }}
                    >
                      {/* Unread dot */}
                      {!notif.read && (
                        <div style={{ position: 'absolute', left: 6, top: '50%', transform: 'translateY(-50%)', width: 5, height: 5, borderRadius: '50%', background: 'var(--color-accent)' }} />
                      )}

                      {/* Icon */}
                      <div style={{
                        width: 32, height: 32, borderRadius: 6, flexShrink: 0,
                        background: typeBg[notif.type],
                        border: `1px solid ${typeColor[notif.type]}33`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={14} style={{ color: typeColor[notif.type] }} />
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8, marginBottom: 3 }}>
                          <span style={{ fontSize: 13, fontWeight: notif.read ? 500 : 700, color: 'var(--color-text-primary)' }}>
                            {notif.title}
                          </span>
                          <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)', flexShrink: 0 }}>{notif.time}</span>
                        </div>
                        <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.55 }}>
                          {notif.body}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
