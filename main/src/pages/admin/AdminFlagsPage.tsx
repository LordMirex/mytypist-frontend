import { useState } from 'react'
import { AlertTriangle } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'

type FlagEnv = 'production' | 'staging' | 'all'

interface FeatureFlag {
  id: string
  key: string
  label: string
  description: string
  enabled: boolean
  env: FlagEnv
  risk: 'low' | 'medium' | 'high'
}

const initFlags: FeatureFlag[] = [
  {
    id: 'f1', key: 'bulk_export',
    label: 'Bulk Export',
    description: 'Allow users to export multiple documents at once as a ZIP archive.',
    enabled: true, env: 'all', risk: 'low',
  },
  {
    id: 'f2', key: 'ai_fidelity_check',
    label: 'AI Fidelity Check',
    description: 'Run an automated fidelity check on documents before advancing to the Sign stage.',
    enabled: true, env: 'all', risk: 'low',
  },
  {
    id: 'f3', key: 'e_signature_v2',
    label: 'E-Signature v2',
    description: 'New signature flow with biometric confirmation and witness support.',
    enabled: false, env: 'staging', risk: 'medium',
  },
  {
    id: 'f4', key: 'template_ai_fill',
    label: 'Template AI Autofill',
    description: 'Let users describe a document and have AI fill template fields automatically.',
    enabled: false, env: 'staging', risk: 'medium',
  },
  {
    id: 'f5', key: 'multi_workspace',
    label: 'Multi-Workspace',
    description: 'Support for a single user account linked to multiple organisations.',
    enabled: false, env: 'staging', risk: 'high',
  },
  {
    id: 'f6', key: 'realtime_collab',
    label: 'Real-time Collaboration',
    description: 'Live co-editing on documents using operational transforms.',
    enabled: false, env: 'staging', risk: 'high',
  },
]

const riskColors: Record<FeatureFlag['risk'], { color: string; bg: string; border: string }> = {
  low:    { color: '#059669', bg: 'rgba(5,150,105,0.06)',   border: 'rgba(5,150,105,0.15)'   },
  medium: { color: '#D97706', bg: 'rgba(217,119,6,0.06)',   border: 'rgba(217,119,6,0.15)'   },
  high:   { color: '#DC2626', bg: 'rgba(220,38,38,0.06)',   border: 'rgba(220,38,38,0.15)'   },
}

export function AdminFlagsPage() {
  const [flags, setFlags] = useState<FeatureFlag[]>(initFlags)

  function toggle(id: string) {
    setFlags(prev => prev.map(f => f.id === id ? { ...f, enabled: !f.enabled } : f))
  }

  const highRisk = flags.filter(f => f.risk === 'high' && f.enabled)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className="admin-page-header">
        <div>
          <h1 className="admin-page-title">Feature Flags</h1>
          <p className="admin-page-subtitle">Enable or disable features across the workspace</p>
        </div>
      </div>

      {highRisk.length > 0 && (
        <div style={{
          display: 'flex', alignItems: 'flex-start', gap: 10,
          padding: '12px 16px',
          background: 'rgba(220,38,38,0.04)',
          border: '1px solid rgba(220,38,38,0.2)',
          borderRadius: 6,
        }}>
          <AlertTriangle size={14} color="#DC2626" style={{ flexShrink: 0, marginTop: 1 }} />
          <p style={{ margin: 0, fontSize: 13, color: '#DC2626' }}>
            {highRisk.length} high-risk {highRisk.length === 1 ? 'flag is' : 'flags are'} enabled on production.
            Verify behaviour before rolling out to all users.
          </p>
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {flags.map(flag => {
          const rc = riskColors[flag.risk]
          return (
            <div key={flag.id} style={{
              background: 'var(--color-surface)',
              border: `1px solid ${flag.enabled ? 'var(--color-accent-border)' : 'var(--color-border)'}`,
              borderRadius: 6, padding: '16px 18px',
              display: 'flex', alignItems: 'flex-start', gap: 14,
              transition: 'border-color 100ms',
            }}>
              {/* Toggle */}
              <button
                onClick={() => toggle(flag.id)}
                style={{
                  width: 40, height: 22, flexShrink: 0, borderRadius: 11,
                  background: flag.enabled ? 'var(--color-accent)' : 'var(--color-bg-tertiary)',
                  border: `1px solid ${flag.enabled ? 'var(--color-accent)' : 'var(--color-border)'}`,
                  cursor: 'pointer', position: 'relative',
                  transition: 'background 120ms, border-color 120ms',
                  marginTop: 1,
                }}
                aria-label={flag.enabled ? `Disable ${flag.label}` : `Enable ${flag.label}`}
              >
                <div style={{
                  width: 14, height: 14, borderRadius: '50%', background: '#fff',
                  position: 'absolute', top: 3,
                  left: flag.enabled ? 22 : 3,
                  transition: 'left 120ms',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                }} />
              </button>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-text-primary)' }}>{flag.label}</span>
                  <code style={{
                    fontSize: 10, fontFamily: 'var(--font-mono)', padding: '1px 5px',
                    background: 'var(--color-bg-tertiary)', border: '1px solid var(--color-border)',
                    borderRadius: 3, color: 'var(--color-text-tertiary)',
                  }}>
                    {flag.key}
                  </code>
                  <span style={{
                    fontSize: 10, fontWeight: 700, padding: '1px 6px',
                    background: rc.bg, border: `1px solid ${rc.border}`,
                    borderRadius: 3, color: rc.color, textTransform: 'uppercase', letterSpacing: '0.3px',
                  }}>
                    {flag.risk} risk
                  </span>
                  <Badge
                    status={flag.env === 'all' ? 'complete' : 'pending'}
                    label={flag.env === 'all' ? 'All envs' : flag.env}
                  />
                </div>
                <p style={{ margin: 0, fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
                  {flag.description}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
