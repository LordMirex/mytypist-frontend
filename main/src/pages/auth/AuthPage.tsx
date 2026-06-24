import { useState } from 'react'
import { Mail, Lock, ArrowRight, Eye, EyeOff, CheckCircle2, FileText, GitBranch, Archive } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const brandFeatures = [
  { icon: FileText,  text: 'Draft with pixel-perfect layout guarantees' },
  { icon: GitBranch, text: 'Route, approve, and sign in one pipeline' },
  { icon: Archive,   text: 'Archive with full tamper-evident audit trail' },
]

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

      {/* ── Left brand panel (desktop only) ── */}
      <div className="auth-brand">
        <div className="auth-brand-inner">
          {/* Logo */}
          <a href="/" className="auth-brand-logo-row">
            <div className="auth-brand-icon">M</div>
            <span className="auth-brand-name">MyTypist</span>
          </a>

          <div className="auth-brand-body">
            <p className="auth-brand-tagline">
              One pipeline.<br />
              Zero document errors.
            </p>
            <p className="auth-brand-sub">
              From first draft to archived signed record — without stitching five tools together.
            </p>

            <div className="auth-brand-features">
              {brandFeatures.map(({ icon: Icon, text }) => (
                <div key={text} className="auth-brand-feature">
                  <div className="auth-brand-feature-icon">
                    <Icon size={13} />
                  </div>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="auth-brand-footer">
            <div className="auth-brand-badges">
              {['SOC 2 Type II', 'GDPR', 'AES-256'].map((b) => (
                <span key={b} className="auth-brand-badge">{b}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Right form panel ── */}
      <div className="auth-form-panel">
        <div className="auth-form-inner">

          {/* Mobile logo (hidden on desktop) */}
          <a href="/" className="auth-mobile-logo">
            <div className="auth-brand-icon" style={{ width: 32, height: 32, fontSize: 15, borderRadius: 7 }}>M</div>
            <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.3px' }}>MyTypist</span>
          </a>

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
                  style={{ height: 40, fontSize: 14 }}
                  type="text"
                  placeholder="Jane Smith"
                  autoComplete="name"
                />
              </div>
            )}

            <div className="input-wrapper">
              <label className="input-label">Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={14} style={{
                  position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)',
                  color: 'var(--color-text-tertiary)', pointerEvents: 'none',
                }} />
                <input
                  className="input"
                  style={{ height: 40, fontSize: 14, paddingLeft: 34, width: '100%', boxSizing: 'border-box' }}
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
                  <button type="button" className="auth-forgot">
                    Forgot password?
                  </button>
                )}
              </div>
              <div style={{ position: 'relative' }}>
                <Lock size={14} style={{
                  position: 'absolute', left: 11, top: '50%', transform: 'translateY(-50%)',
                  color: 'var(--color-text-tertiary)', pointerEvents: 'none',
                }} />
                <input
                  className="input"
                  style={{ height: 40, fontSize: 14, paddingLeft: 34, paddingRight: 38, width: '100%', boxSizing: 'border-box' }}
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
                  style={{
                    position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer',
                    color: 'var(--color-text-tertiary)', display: 'flex', padding: 2,
                  }}
                >
                  {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              loading={loading}
              style={{ height: 42, fontSize: 14, fontWeight: 600, marginTop: 8, width: '100%' }}
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
            {['Google', 'Microsoft'].map(provider => (
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

          {/* Toggle mode */}
          <p className="auth-toggle-text">
            {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
              className="auth-toggle-btn"
            >
              {mode === 'signin' ? 'Start free trial' : 'Sign in'}
            </button>
          </p>

          {/* Terms */}
          <p className="auth-terms">
            By continuing, you agree to our{' '}
            <span className="auth-terms-link">Terms of Service</span>
            {' '}and{' '}
            <span className="auth-terms-link">Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  )
}
