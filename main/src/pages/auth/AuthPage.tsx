import { useState } from 'react'
import { Mail, Lock, ArrowRight, Eye, EyeOff } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function AuthPage() {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin')
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => setLoading(false), 1200)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--color-bg)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px 16px',
    }}>
      {/* Logo */}
      <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 40, textDecoration: 'none' }}>
        <div style={{
          width: 32, height: 32,
          background: '#6C47FF',
          borderRadius: 7,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff', fontWeight: 800, fontSize: 16, letterSpacing: '-0.5px',
        }}>M</div>
        <span style={{ fontSize: 17, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.3px' }}>
          MyTypist
        </span>
      </a>

      {/* Card */}
      <div style={{
        width: '100%',
        maxWidth: 400,
        background: 'var(--color-surface)',
        border: '1px solid var(--color-border)',
        borderRadius: 10,
        padding: '32px',
        boxShadow: 'var(--shadow-modal)',
      }}>
        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <h1 style={{ fontSize: 22, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.4px', marginBottom: 6 }}>
            {mode === 'signin' ? 'Welcome back' : 'Create your account'}
          </h1>
          <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
            {mode === 'signin'
              ? 'Sign in to your MyTypist workspace.'
              : 'Start your 14-day free trial. No credit card required.'}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {mode === 'signup' && (
            <div className="input-wrapper">
              <label className="input-label">Full Name</label>
              <input
                className="input"
                style={{ height: 38, fontSize: 14 }}
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
                style={{ height: 38, fontSize: 14, paddingLeft: 34, width: '100%', boxSizing: 'border-box' }}
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
                <button type="button" style={{
                  fontSize: 12, color: 'var(--color-accent)', background: 'none', border: 'none',
                  cursor: 'pointer', padding: 0, fontWeight: 500,
                }}>
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
                style={{ height: 38, fontSize: 14, paddingLeft: 34, paddingRight: 38, width: '100%', boxSizing: 'border-box' }}
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
            style={{ height: 38, fontSize: 14, fontWeight: 600, marginTop: 6 }}
          >
            <span>{mode === 'signin' ? 'Sign in' : 'Create account'}</span>
            {!loading && <ArrowRight size={15} />}
          </Button>
        </form>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '22px 0' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
          <span style={{ fontSize: 11, color: 'var(--color-text-quaternary)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.5px' }}>
            or continue with
          </span>
          <div style={{ flex: 1, height: 1, background: 'var(--color-border)' }} />
        </div>

        {/* SSO options */}
        <div style={{ display: 'flex', gap: 10 }}>
          {['Google', 'Microsoft'].map(provider => (
            <button key={provider} style={{
              flex: 1, height: 38,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)',
              borderRadius: 6,
              fontSize: 13, fontWeight: 500,
              color: 'var(--color-text-primary)',
              cursor: 'pointer',
              transition: 'background 80ms, border-color 80ms',
            }}
              onMouseOver={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-bg-secondary)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border-strong)' }}
              onMouseOut={e => { (e.currentTarget as HTMLElement).style.background = 'var(--color-surface)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--color-border)' }}
            >
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
        <p style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--color-text-secondary)' }}>
          {mode === 'signin' ? "Don't have an account? " : 'Already have an account? '}
          <button
            type="button"
            onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')}
            style={{
              color: 'var(--color-accent)', background: 'none', border: 'none',
              cursor: 'pointer', fontWeight: 600, fontSize: 13, padding: 0,
            }}
          >
            {mode === 'signin' ? 'Start free trial' : 'Sign in'}
          </button>
        </p>
      </div>

      {/* Footer */}
      <p style={{ marginTop: 28, fontSize: 12, color: 'var(--color-text-quaternary)', textAlign: 'center', lineHeight: 1.6 }}>
        By continuing, you agree to our{' '}
        <span style={{ color: 'var(--color-text-tertiary)', cursor: 'pointer' }}>Terms of Service</span>
        {' '}and{' '}
        <span style={{ color: 'var(--color-text-tertiary)', cursor: 'pointer' }}>Privacy Policy</span>.
      </p>
    </div>
  )
}
