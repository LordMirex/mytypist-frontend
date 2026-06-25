import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail, Lock, ArrowRight, Eye, EyeOff,
  Check, Shield, Zap, GitBranch,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { LogoMark } from '@/components/brand/LogoMark'

const pipeline = [
  { label: 'Draft',    done: true  },
  { label: 'Fidelity', done: true  },
  { label: 'Approve',  done: true  },
  { label: 'Sign',     active: true },
  { label: 'Archive',  done: false },
]

const metrics = [
  { value: '< 90s', label: 'Template → signed PDF' },
  { value: '100+',  label: 'Ready-to-use templates' },
  { value: '₦0',    label: 'Per-document fee'       },
]

const testimonial = {
  quote: '"We replaced Word, DocuSign, and SharePoint with one tool. The audit trail alone saved us an external audit last quarter."',
  author: 'Director of Operations',
  org: 'West African University Consortium',
}

export function AuthPage() {
  const [mode, setMode]               = useState<'signin' | 'signup'>('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail]             = useState('')
  const [password, setPassword]       = useState('')
  const [loading, setLoading]         = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <div className="auth-shell">

      {/* ── Left brand panel ── */}
      <div className="auth-brand">
        <div className="auth-brand-inner">

          {/* Logo */}
          <Link to="/" className="auth-brand-logo-row" style={{ textDecoration: 'none' }}>
            <LogoMark size={28} variant="white" />
            <span className="auth-brand-name">MyTypist</span>
          </Link>

          {/* Headline */}
          <div className="auth-brand-body">
            <p className="auth-brand-tagline">
              One pipeline.<br />Zero document errors.
            </p>
            <p className="auth-brand-sub">
              From first draft to archived signed record · without stitching five tools together.
            </p>

            {/* Mini pipeline visualization */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 10,
              padding: '14px 16px',
              marginTop: 24,
            }}>
              <div style={{ fontSize: 9, fontWeight: 700, letterSpacing: 0.8, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', marginBottom: 12 }}>
                Document Pipeline
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                {pipeline.map((stage, i) => (
                  <div key={stage.label} style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                    <div style={{
                      flex: 1,
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5,
                    }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: 6,
                        background: stage.active
                          ? 'rgba(108,71,255,0.5)'
                          : stage.done
                          ? 'rgba(5,150,105,0.25)'
                          : 'rgba(255,255,255,0.06)',
                        border: stage.active
                          ? '1.5px solid rgba(108,71,255,0.8)'
                          : stage.done
                          ? '1.5px solid rgba(5,150,105,0.4)'
                          : '1.5px solid rgba(255,255,255,0.1)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {stage.done
                          ? <Check size={11} color="#059669" />
                          : stage.active
                          ? <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#9B72FF' }} />
                          : <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                        }
                      </div>
                      <span style={{
                        fontSize: 9, fontWeight: 600,
                        color: stage.active ? '#9B72FF' : stage.done ? 'rgba(5,150,105,0.8)' : 'rgba(255,255,255,0.2)',
                        letterSpacing: 0.2, textAlign: 'center',
                      }}>
                        {stage.label}
                      </span>
                    </div>
                    {i < pipeline.length - 1 && (
                      <div style={{ width: 14, height: 1, background: stage.done ? 'rgba(5,150,105,0.3)' : 'rgba(255,255,255,0.07)', flexShrink: 0, marginBottom: 14 }} />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics */}
            <div style={{
              display: 'flex', gap: 0,
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 8,
              overflow: 'hidden',
              marginTop: 12,
            }}>
              {metrics.map((m, i) => (
                <div key={m.label} style={{
                  flex: 1, padding: '12px 10px',
                  borderRight: i < metrics.length - 1 ? '1px solid rgba(255,255,255,0.07)' : 'none',
                  textAlign: 'center',
                }}>
                  <div style={{ fontSize: 17, fontWeight: 800, letterSpacing: -0.5, color: '#fff', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontSize: 9, color: 'rgba(255,255,255,0.35)', marginTop: 4, lineHeight: 1.4 }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <div style={{
              marginTop: 16,
              padding: '14px 16px',
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 8,
              borderLeft: '2px solid rgba(108,71,255,0.5)',
            }}>
              <p style={{ fontSize: 11, lineHeight: 1.65, color: 'rgba(255,255,255,0.5)', margin: 0, fontStyle: 'italic' }}>
                {testimonial.quote}
              </p>
              <div style={{ marginTop: 10, fontSize: 10, color: 'rgba(255,255,255,0.25)', fontWeight: 600 }}>
                {testimonial.author} · {testimonial.org}
              </div>
            </div>
          </div>

          {/* Footer badges */}
          <div className="auth-brand-footer">
            <div className="auth-brand-badges">
              {[
                { icon: Shield, label: 'Encrypted storage' },
                { icon: Zap, label: 'AES-256 at rest' },
                { icon: GitBranch, label: 'Audit trail' },
              ].map(({ icon: Icon, label }) => (
                <span key={label} className="auth-brand-badge" style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Icon size={9} />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="auth-form-panel">
        <div className="auth-form-inner">

          {/* Mobile logo */}
          <Link to="/" className="auth-mobile-logo" style={{ textDecoration: 'none' }}>
            <LogoMark size={28} variant="tonal" />
            <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.3px' }}>MyTypist</span>
          </Link>

          {/* Heading */}
          <div className="auth-form-heading">
            <h1 className="auth-form-title">
              {mode === 'signin' ? 'Welcome back' : 'Create your account'}
            </h1>
            <p className="auth-form-sub">
              {mode === 'signin'
                ? 'Sign in to your MyTypist workspace.'
                : 'Start your 14-day free trial. No credit card required.'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            {mode === 'signup' && (
              <div className="input-wrapper">
                <label className="input-label">Full Name</label>
                <input
                  className="input"
                  style={{ height: 42, fontSize: 14 }}
                  type="text"
                  placeholder="Amaka Obi"
                  autoComplete="name"
                />
              </div>
            )}

            <div className="input-wrapper">
              <label className="input-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={14} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }} />
                <input
                  className="input"
                  style={{ height: 42, fontSize: 14, paddingLeft: 34, width: '100%', boxSizing: 'border-box' }}
                  type="email"
                  placeholder="you@company.com"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="input-wrapper">
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
                <label className="input-label" style={{ marginBottom: 0 }}>Password</label>
                {mode === 'signin' && (
                  <button type="button" className="auth-forgot">Forgot password?</button>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={14} style={{ position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-tertiary)', pointerEvents: 'none' }} />
                <input
                  className="input"
                  style={{ height: 42, fontSize: 14, paddingLeft: 34, paddingRight: 40, width: '100%', boxSizing: 'border-box' }}
                  type={showPassword ? 'text' : 'password'}
                  placeholder={mode === 'signup' ? 'Min. 8 characters' : '••••••••'}
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(v => !v)}
                  style={{ position: 'absolute', right: 11, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-tertiary)', display: 'flex', padding: 2 }}
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            {mode === 'signup' && (
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, padding: '10px 12px', background: 'rgba(108,71,255,0.05)', border: '1px solid rgba(108,71,255,0.12)', borderRadius: 6 }}>
                <Check size={13} color="var(--color-accent)" style={{ flexShrink: 0, marginTop: 1 }} />
                <p style={{ fontSize: 12, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.5 }}>
                  14-day full-feature trial. No credit card. No usage limits.
                </p>
              </div>
            )}

            <Button
              type="submit"
              loading={loading}
              style={{ height: 44, fontSize: 14, fontWeight: 600, marginTop: 8, width: '100%' }}
            >
              <span>{mode === 'signin' ? 'Sign in' : 'Create account'}</span>
              {!loading && <ArrowRight size={15} />}
            </Button>
          </form>

          {/* Divider */}
          <div className="auth-divider">
            <div className="auth-divider-line" />
            <span className="auth-divider-text">or continue with</span>
            <div className="auth-divider-line" />
          </div>

          {/* SSO */}
          <div className="auth-sso-row">
            {(['Google', 'Microsoft'] as const).map(provider => (
              <button key={provider} className="auth-sso-btn">
                {provider === 'Google' ? (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                ) : (
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
                    <path d="M11.5 2H2v9.5h9.5V2z" fill="#F35325"/>
                    <path d="M22 2h-9.5v9.5H22V2z" fill="#81BC06"/>
                    <path d="M11.5 12.5H2V22h9.5v-9.5z" fill="#05A6F0"/>
                    <path d="M22 12.5h-9.5V22H22v-9.5z" fill="#FFBA08"/>
                  </svg>
                )}
                {provider}
              </button>
            ))}
          </div>

          {/* Toggle */}
          <p className="auth-toggle-text">
            {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
            <button type="button" onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')} className="auth-toggle-btn">
              {mode === 'signin' ? 'Start free trial' : 'Sign in'}
            </button>
          </p>

          {/* Terms */}
          <p className="auth-terms">
            By continuing, you agree to our{' '}
            <Link to="/terms" className="auth-terms-link">Terms of Service</Link>
            {' '}and{' '}
            <Link to="/privacy" className="auth-terms-link">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </div>
  )
}
