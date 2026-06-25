import { useState } from 'react'
import { Save, AlertTriangle } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function AdminSettingsPage() {
  const [workspaceName, setWorkspaceName] = useState('My Organisation')
  const [domain, setDomain] = useState('myorg.com')
  const [sessionTimeout, setSessionTimeout] = useState('8')
  const [mfaRequired, setMfaRequired] = useState(false)
  const [auditRetention, setAuditRetention] = useState('365')
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Settings</h1>
          <p className="admin-page-subtitle">Workspace-level configuration and security policies</p>
        </div>
        <div className="admin-page-actions">
          <Button size="sm" onClick={handleSave}>
            <Save size={13} />
            <span>{saved ? 'Saved' : 'Save Changes'}</span>
          </Button>
        </div>
      </div>

      {/* Workspace identity */}
      <section>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 14px' }}>
          Workspace Identity
        </h3>
        <div className="settings-card">
          <div className="settings-field">
            <label className="settings-label">Workspace Name</label>
            <input
              className="input"
              value={workspaceName}
              onChange={e => setWorkspaceName(e.target.value)}
              style={{ maxWidth: 360 }}
            />
            <span className="settings-hint">Shown in the sidebar and on all documents.</span>
          </div>
          <div className="settings-field">
            <label className="settings-label">Organisation Domain</label>
            <input
              className="input"
              value={domain}
              onChange={e => setDomain(e.target.value)}
              style={{ maxWidth: 360 }}
            />
            <span className="settings-hint">Used to auto-match invited users. Must match your email domain.</span>
          </div>
        </div>
      </section>

      {/* Security policies */}
      <section>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', margin: '0 0 14px' }}>
          Security Policies
        </h3>
        <div className="settings-card">
          <div className="settings-field">
            <label className="settings-label">Session Timeout (hours)</label>
            <input
              className="input"
              type="number"
              min={1}
              max={72}
              value={sessionTimeout}
              onChange={e => setSessionTimeout(e.target.value)}
              style={{ maxWidth: 120 }}
            />
            <span className="settings-hint">Users are signed out after this many hours of inactivity.</span>
          </div>

          <div className="settings-field">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
              <label className="settings-label" style={{ margin: 0 }}>Require MFA for all users</label>
              <button
                onClick={() => setMfaRequired(v => !v)}
                style={{
                  width: 40, height: 22, borderRadius: 11,
                  background: mfaRequired ? 'var(--color-accent)' : 'var(--color-bg-tertiary)',
                  border: `1px solid ${mfaRequired ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  cursor: 'pointer', position: 'relative', flexShrink: 0,
                  transition: 'background 120ms, border-color 120ms',
                }}
              >
                <div style={{
                  width: 14, height: 14, borderRadius: '50%', background: '#fff',
                  position: 'absolute', top: 3,
                  left: mfaRequired ? 22 : 3,
                  transition: 'left 120ms',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                }} />
              </button>
            </div>
            <span className="settings-hint">When on, every member must set up two-factor authentication to access the workspace.</span>
          </div>

          <div className="settings-field">
            <label className="settings-label">Audit Log Retention (days)</label>
            <input
              className="input"
              type="number"
              min={30}
              max={1825}
              value={auditRetention}
              onChange={e => setAuditRetention(e.target.value)}
              style={{ maxWidth: 120 }}
            />
            <span className="settings-hint">Audit entries older than this value are purged from storage.</span>
          </div>
        </div>
      </section>

      {/* Danger zone */}
      <section>
        <h3 style={{ fontSize: 14, fontWeight: 600, color: '#DC2626', margin: '0 0 14px' }}>Danger Zone</h3>
        <div className="settings-card settings-card--danger">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <AlertTriangle size={16} color="#DC2626" style={{ flexShrink: 0, marginTop: 2 }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 3 }}>
                Delete Workspace
              </div>
              <p style={{ margin: '0 0 14px', fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.55 }}>
                Permanently deletes all documents, templates, audit logs, and user accounts linked to this workspace.
                This action cannot be undone.
              </p>
              <Button variant="secondary" size="sm" style={{ color: '#DC2626', borderColor: 'rgba(220,38,38,0.3)' }}>
                Delete Workspace
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
