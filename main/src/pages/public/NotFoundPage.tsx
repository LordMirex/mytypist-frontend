import { Link } from 'react-router-dom'
import { ArrowLeft, FileX } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

export function NotFoundPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)', display: 'flex', flexDirection: 'column' }}>
      <PublicHeader />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '80px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: 'rgba(108,71,255,0.08)',
            border: '1px solid rgba(108,71,255,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            margin: '0 auto 24px',
          }}>
            <FileX size={28} color="var(--color-accent)" />
          </div>

          <div style={{
            display: 'inline-block',
            fontSize: 11, fontWeight: 700, letterSpacing: 0.6,
            textTransform: 'uppercase', color: 'var(--color-accent)',
            background: 'rgba(108,71,255,0.06)',
            border: '1px solid rgba(108,71,255,0.15)',
            padding: '4px 12px', borderRadius: 9999,
            marginBottom: 20,
          }}>
            404 — Page not found
          </div>

          <h1 style={{
            fontSize: 36, fontWeight: 800, letterSpacing: -1.5,
            color: 'var(--color-text-primary)', lineHeight: 1.1,
            marginBottom: 14,
          }}>
            This page doesn't exist.
          </h1>
          <p style={{
            fontSize: 15, lineHeight: 1.68,
            color: 'var(--color-text-secondary)',
            marginBottom: 36,
          }}>
            The page you're looking for may have been moved, renamed, or
            never created. Check the URL or navigate back to safety.
          </p>

          <div style={{ display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/">
              <button className="btn btn--primary" style={{ height: 42, padding: '0 22px', fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 7 }}>
                <ArrowLeft size={14} />
                Back to home
              </button>
            </Link>
            <Link to="/support">
              <button className="btn btn--secondary" style={{ height: 42, padding: '0 22px', fontSize: 14 }}>
                Visit support
              </button>
            </Link>
          </div>

          <div style={{ marginTop: 56, display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {[
              { label: 'Studio', to: '/studio' },
              { label: 'Pricing', to: '/pricing' },
              { label: 'Templates', to: '/templates' },
              { label: 'About', to: '/about' },
            ].map(item => (
              <Link key={item.label} to={item.to}>
                <span style={{
                  display: 'inline-block',
                  padding: '5px 13px',
                  border: '1px solid var(--color-border)',
                  borderRadius: 9999,
                  fontSize: 12,
                  color: 'var(--color-text-secondary)',
                  background: 'var(--color-surface)',
                  cursor: 'pointer',
                  transition: 'border-color 100ms, color 100ms',
                }}>
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <PublicFooter />
    </div>
  )
}
