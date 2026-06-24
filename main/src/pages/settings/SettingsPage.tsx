import { useState } from 'react'
import {
  User, Shield, Bell, CreditCard, Key,
  Trash2, Mail, Smartphone, Check, ChevronRight,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

const sections = [
  { id: 'account',       label: 'Account',       icon: User       },
  { id: 'security',      label: 'Security',       icon: Shield     },
  { id: 'billing',       label: 'Billing',        icon: CreditCard },
  { id: 'notifications', label: 'Notifications',  icon: Bell       },
]

type Section = 'account' | 'security' | 'billing' | 'notifications'

function SidebarItem({ id, label, icon: Icon, active, onClick }: { id: string; label: string; icon: any; active: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        width: '100%', padding: '9px 12px', borderRadius: 7,
        fontSize: 13, fontWeight: active ? 600 : 400,
        color: active ? 'var(--color-accent)' : 'var(--color-text-secondary)',
        background: active ? 'var(--color-accent-muted)' : 'none',
        border: 'none', cursor: 'pointer', textAlign: 'left',
        transition: 'background 80ms, color 80ms',
      }}
    >
      <Icon size={15} style={{ flexShrink: 0, color: active ? 'var(--color-accent)' : 'var(--color-text-tertiary)' }} />
      {label}
    </button>
  )
}

function GroupHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={{ marginBottom: 16 }}>
      <h2 style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: -0.2 }}>{title}</h2>
      <p style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 3, lineHeight: 1.5 }}>{desc}</p>
    </div>
  )
}

function SettingsCard({ children, danger }: { children: React.ReactNode; danger?: boolean }) {
  return (
    <div style={{
      background: danger ? 'rgba(220,38,38,0.02)' : 'var(--color-surface)',
      border: `1px solid ${danger ? 'rgba(220,38,38,0.2)' : 'var(--color-border)'}`,
      borderRadius: 8, padding: '20px 20px',
      display: 'flex', flexDirection: 'column', gap: 16,
    }}>
      {children}
    </div>
  )
}

function Row({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
      {children}
    </div>
  )
}

function IconBox({ icon: Icon, color }: { icon: any; color: string }) {
  return (
    <div style={{ width: 34, height: 34, borderRadius: 8, background: `${color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
      <Icon size={16} color={color} />
    </div>
  )
}

function Divider() {
  return <div style={{ height: 1, background: 'var(--color-border-subtle)' }} />
}

export function SettingsPage() {
  const [active, setActive] = useState<Section>('account')
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="page" style={{ maxWidth: 1040 }}>
      <header style={{ marginBottom: 28 }}>
        <h1 className="page-title">Settings</h1>
        <p className="page-subtitle">Manage your account, security, and workspace preferences</p>
      </header>

      <div style={{ display: 'flex', gap: 32, alignItems: 'flex-start' }}>

        {/* ── Sidebar ── */}
        <aside style={{
          width: 180, flexShrink: 0,
          background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 10, padding: 8,
          display: 'flex', flexDirection: 'column', gap: 2,
        }}>
          {sections.map(sec => (
            <SidebarItem
              key={sec.id}
              id={sec.id}
              label={sec.label}
              icon={sec.icon}
              active={active === sec.id}
              onClick={() => setActive(sec.id as Section)}
            />
          ))}
        </aside>

        {/* ── Main content ── */}
        <main style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: 28 }}>

          {/* ACCOUNT */}
          {active === 'account' && (
            <>
              <div>
                <GroupHeader title="Profile Information" desc="Update your name, email, and how you appear in your workspace." />
                <SettingsCard>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, paddingBottom: 16, borderBottom: '1px solid var(--color-border-subtle)' }}>
                    <div style={{ width: 52, height: 52, borderRadius: 12, background: 'var(--color-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, fontWeight: 700, color: '#fff', flexShrink: 0 }}>
                      U
                    </div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>My Workspace</div>
                      <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 2 }}>admin@mytypist.com</div>
                    </div>
                    <div style={{ marginLeft: 'auto' }}>
                      <Button variant="secondary" size="sm">Change avatar</Button>
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label className="input-label">Full Name</label>
                    <input className="input" style={{ height: 38 }} defaultValue="Admin User" />
                  </div>
                  <div className="input-wrapper">
                    <label className="input-label">Email Address</label>
                    <div style={{ position: 'relative' }}>
                      <Mail size={13} style={{ position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }} />
                      <input className="input" style={{ height: 38, paddingLeft: 30 }} defaultValue="admin@mytypist.com" />
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <label className="input-label">Display Language</label>
                    <select className="input" style={{ height: 38 }}>
                      <option>English (US)</option>
                      <option>English (UK)</option>
                    </select>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button size="sm" onClick={handleSave}>
                      {saved ? <><Check size={13} /> Saved</> : 'Save changes'}
                    </Button>
                  </div>
                </SettingsCard>
              </div>

              <div>
                <GroupHeader title="Workspace" desc="Your current plan and workspace details." />
                <SettingsCard>
                  <Row>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <IconBox icon={CreditCard} color="var(--color-accent)" />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Professional Plan</div>
                        <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 2 }}>$49/month · renews July 1, 2026</div>
                      </div>
                    </div>
                    <Link to="/pricing">
                      <Button variant="secondary" size="sm">Upgrade</Button>
                    </Link>
                  </Row>
                </SettingsCard>
              </div>

              <div>
                <GroupHeader title="Danger Zone" desc="Irreversible actions for your account." />
                <SettingsCard danger>
                  <Row>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)' }}>Delete Account</div>
                      <div style={{ fontSize: 12, color: 'var(--color-text-secondary)', marginTop: 2 }}>Permanently delete your account and all associated data. This cannot be undone.</div>
                    </div>
                    <Button variant="danger" size="sm">
                      <Trash2 size={13} />
                      Delete
                    </Button>
                  </Row>
                </SettingsCard>
              </div>
            </>
          )}

          {/* SECURITY */}
          {active === 'security' && (
            <>
              <div>
                <GroupHeader title="Password" desc="Keep your account secure with a strong, unique password." />
                <SettingsCard>
                  <Row>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <IconBox icon={Key} color="var(--color-accent)" />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>Password</div>
                        <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 2 }}>Last changed 3 months ago</div>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">Update</Button>
                  </Row>
                </SettingsCard>
              </div>

              <div>
                <GroupHeader title="Two-Factor Authentication" desc="Add an extra layer of security to your account." />
                <SettingsCard>
                  <Row>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <IconBox icon={Smartphone} color="#D97706" />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>Authenticator App</div>
                        <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 2 }}>Not enabled · Requires Google Authenticator or similar</div>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">Enable</Button>
                  </Row>
                  <Divider />
                  <Row>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <IconBox icon={Mail} color="#D97706" />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>Email OTP</div>
                        <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 2 }}>One-time code sent to admin@mytypist.com</div>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">Enable</Button>
                  </Row>
                </SettingsCard>
              </div>

              <div>
                <GroupHeader title="Active Sessions" desc="Devices currently signed in to your account." />
                <SettingsCard>
                  {[
                    { device: 'Chrome · macOS', loc: 'Lagos, Nigeria', time: 'Active now', current: true },
                    { device: 'Safari · iOS 17', loc: 'Lagos, Nigeria', time: '2 days ago', current: false },
                  ].map((s, i) => (
                    <div key={i}>
                      {i > 0 && <Divider />}
                      <Row>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', gap: 7 }}>
                            {s.device}
                            {s.current && <span style={{ fontSize: 10, fontWeight: 700, color: '#059669', background: 'rgba(5,150,105,0.1)', padding: '1px 7px', borderRadius: 9999 }}>Current</span>}
                          </div>
                          <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginTop: 2 }}>{s.loc} · {s.time}</div>
                        </div>
                        {!s.current && <Button variant="danger" size="sm">Revoke</Button>}
                      </Row>
                    </div>
                  ))}
                </SettingsCard>
              </div>
            </>
          )}

          {/* BILLING */}
          {active === 'billing' && (
            <>
              <div>
                <GroupHeader title="Current Plan" desc="Your subscription and upcoming billing." />
                <SettingsCard>
                  <div style={{
                    background: 'rgba(108,71,255,0.04)', border: '1px solid rgba(108,71,255,0.15)',
                    borderRadius: 8, padding: '16px 20px',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                        <span style={{ background: 'var(--color-accent)', color: '#fff', fontSize: 9, fontWeight: 700, padding: '2px 7px', borderRadius: 3, letterSpacing: 0.3 }}>PROFESSIONAL</span>
                      </div>
                      <div style={{ fontSize: 22, fontWeight: 800, letterSpacing: -0.5, color: 'var(--color-text-primary)' }}>$49 <span style={{ fontSize: 13, fontWeight: 400, color: 'var(--color-text-tertiary)' }}>/month</span></div>
                      <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 4 }}>Next billing: July 1, 2026 · 1 of 10 seats used</div>
                    </div>
                    <Link to="/pricing"><Button variant="secondary" size="sm">Upgrade plan</Button></Link>
                  </div>
                </SettingsCard>
              </div>

              <div>
                <GroupHeader title="Payment Method" desc="Your saved card for subscription billing." />
                <SettingsCard>
                  <Row>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <IconBox icon={CreditCard} color="#6C47FF" />
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600 }}>Visa ending in 4242</div>
                        <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 2 }}>Expires 12 / 2028</div>
                      </div>
                    </div>
                    <Button variant="secondary" size="sm">Update</Button>
                  </Row>
                </SettingsCard>
              </div>

              <div>
                <GroupHeader title="Invoice History" desc="Download previous invoices." />
                <SettingsCard>
                  {['Jun 2026', 'May 2026', 'Apr 2026', 'Mar 2026'].map((month, i) => (
                    <div key={month}>
                      {i > 0 && <Divider />}
                      <Row>
                        <div>
                          <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{month} · $49.00</div>
                          <div style={{ fontSize: 11, color: 'var(--color-text-tertiary)', marginTop: 2 }}>Professional · monthly</div>
                        </div>
                        <button style={{ fontSize: 12, color: 'var(--color-accent)', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 4 }}>
                          Download <ChevronRight size={12} />
                        </button>
                      </Row>
                    </div>
                  ))}
                </SettingsCard>
              </div>
            </>
          )}

          {/* NOTIFICATIONS */}
          {active === 'notifications' && (
            <div>
              <GroupHeader title="Notification Preferences" desc="Choose what you're notified about and how." />
              <SettingsCard>
                {[
                  { label: 'Signature request sent', desc: 'When a recipient receives a signature request', on: true },
                  { label: 'Document signed', desc: 'When a recipient completes signing', on: true },
                  { label: 'Signature expired', desc: 'When a signature request expires without action', on: true },
                  { label: 'Pipeline stage change', desc: 'When a document moves to the next stage', on: false },
                  { label: 'Team member invited', desc: 'When someone accepts your workspace invite', on: true },
                  { label: 'Fidelity check failed', desc: 'When a document fails the layout fidelity check before advancing', on: true },
                  { label: 'Weekly digest', desc: 'Summary of pipeline activity every Monday', on: false },
                ].map((item, i, arr) => (
                  <div key={item.label}>
                    {i > 0 && <Divider />}
                    <Row>
                      <div>
                        <div style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{item.label}</div>
                        <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)', marginTop: 2 }}>{item.desc}</div>
                      </div>
                      <button
                        style={{
                          width: 40, height: 22, borderRadius: 11,
                          background: item.on ? 'var(--color-accent)' : 'var(--color-border)',
                          border: 'none', cursor: 'pointer', position: 'relative',
                          flexShrink: 0, transition: 'background 120ms',
                        }}
                      >
                        <span style={{
                          position: 'absolute', top: 3, left: item.on ? 21 : 3,
                          width: 16, height: 16, borderRadius: '50%', background: '#fff',
                          transition: 'left 120ms',
                          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
                        }} />
                      </button>
                    </Row>
                  </div>
                ))}
              </SettingsCard>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}
