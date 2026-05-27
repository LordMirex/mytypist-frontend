import { 
  User, 
  Shield, 
  Bell, 
  CreditCard, 
  Key, 
  Trash2,
  Mail,
  Smartphone
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const sections = [
  { id: 'account', label: 'Account', icon: User },
  { id: 'security', label: 'Security', icon: Shield },
  { id: 'billing', label: 'Billing', icon: CreditCard },
  { id: 'notifications', label: 'Notifications', icon: Bell },
]

export function SettingsPage() {
  return (
    <div className="page">
      <header style={{ marginBottom: 32 }}>
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account preferences and system configuration</p>
      </header>

      <div className="settings-layout">
        <aside className="settings-sidebar">
          {sections.map(sec => (
            <div 
              key={sec.id} 
              className={`templates-category-item ${sec.id === 'account' ? 'templates-category-item--active' : ''}`}
            >
              <sec.icon size={16} />
              {sec.label}
            </div>
          ))}
        </aside>

        <main className="settings-content">
          <div className="settings-section">
            <div className="settings-group">
              <div className="settings-group-header">
                <h2 className="settings-group-title">Profile Information</h2>
                <p className="settings-group-description">Update your personal details and how others see you.</p>
              </div>
              
              <div className="settings-card">
                <div className="input-wrapper">
                  <label className="input-label">Full Name</label>
                  <input className="input" defaultValue="Admin User" />
                </div>
                
                <div className="input-wrapper">
                  <label className="input-label">Email Address</label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={14} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)' }} />
                    <input className="input" style={{ paddingLeft: 32 }} defaultValue="admin@mytypist.com" />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
                  <Button size="sm">Save Changes</Button>
                </div>
              </div>
            </div>

            <div className="settings-group">
              <div className="settings-group-header">
                <h2 className="settings-group-title">Security</h2>
                <p className="settings-group-description">Manage your password and two-factor authentication.</p>
              </div>
              
              <div className="settings-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className="flex-center" style={{ width: 32, height: 32, borderRadius: 6, background: 'var(--color-bg-tertiary)' }}>
                      <Key size={16} color="var(--color-text-secondary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>Password</div>
                      <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>Last changed 3 months ago</div>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">Update</Button>
                </div>
                
                <div style={{ height: 1, background: 'var(--color-border-subtle)' }} />
                
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div className="flex-center" style={{ width: 32, height: 32, borderRadius: 6, background: 'var(--color-bg-tertiary)' }}>
                      <Smartphone size={16} color="var(--color-text-secondary)" />
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600 }}>Two-factor Authentication</div>
                      <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>Add an extra layer of security to your account.</div>
                    </div>
                  </div>
                  <Button variant="secondary" size="sm">Enable</Button>
                </div>
              </div>
            </div>

            <div className="settings-group">
              <div className="settings-group-header" style={{ borderColor: 'rgba(239, 68, 68, 0.2)' }}>
                <h2 className="settings-group-title" style={{ color: 'var(--color-status-failed)' }}>Danger Zone</h2>
                <p className="settings-group-description">Irreversible actions for your account.</p>
              </div>
              
              <div className="settings-card settings-card--danger">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>Delete Account</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-secondary)' }}>Permanently delete your account and all associated data.</div>
                  </div>
                  <Button variant="danger" size="sm">
                    <Trash2 size={14} />
                    <span style={{ marginLeft: 6 }}>Delete</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
