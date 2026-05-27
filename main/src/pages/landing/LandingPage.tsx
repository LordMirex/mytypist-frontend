import { Shield, Zap, Layout } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Link } from 'react-router-dom'

export function LandingPage() {
  return (
    <div className="page" style={{ maxWidth: '100%', padding: 0 }}>
      {/* Landing Nav */}
      <nav style={{ 
        height: 'var(--toolbar-height)', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        padding: '0 var(--space-8)',
        borderBottom: '1px solid var(--color-border)',
        background: 'var(--color-surface)',
        position: 'sticky',
        top: 0,
        zIndex: 10
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ 
            width: 24, 
            height: 24, 
            background: 'var(--color-accent)', 
            borderRadius: 4, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: 'white',
            fontWeight: 700,
            fontSize: 14
          }}>M</div>
          <span style={{ fontWeight: 600, fontSize: 16, letterSpacing: '-0.3px' }}>MyTypist</span>
        </div>

        <div className="flex-center gap-6">
          <div style={{ display: 'flex', gap: 24 }}>
            <a href="#features" style={{ fontSize: 13, color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Features</a>
            <a href="#pricing" style={{ fontSize: 13, color: 'var(--color-text-secondary)', textDecoration: 'none' }}>Pricing</a>
            <a href="#about" style={{ fontSize: 13, color: 'var(--color-text-secondary)', textDecoration: 'none' }}>About</a>
          </div>
          <div style={{ width: 1, height: 16, background: 'var(--color-border)' }} />
          <div className="flex-center gap-2">
            <Link to="/auth" style={{ textDecoration: 'none' }}>
              <Button variant="ghost" size="sm">Log in</Button>
            </Link>
            <Link to="/studio" style={{ textDecoration: 'none' }}>
              <Button size="sm">Enter Studio</Button>
            </Link>
          </div>
        </div>
      </nav>

      <div className="page page--centered" style={{ gap: 0, padding: 0 }}>
...
      <section style={{ 
        maxWidth: 800, 
        margin: '0 auto', 
        padding: 'var(--space-16) var(--space-8)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <div style={{ 
          background: 'var(--color-accent-muted)', 
          color: 'var(--color-accent)', 
          padding: '4px 12px', 
          borderRadius: 'var(--radius-full)',
          fontSize: 12,
          fontWeight: 600,
          marginBottom: 24
        }}>
          Introducing MyTypist Precision Engine
        </div>
        
        <h1 className="page-title" style={{ fontSize: 56, lineHeight: 1.1, marginBottom: 24 }}>
          The Operating System for <span style={{ color: 'var(--color-accent)' }}>Documents</span>.
        </h1>
        
        <p className="page-subtitle" style={{ fontSize: 18, maxWidth: 540, marginBottom: 40 }}>
          Precision drafting, secure signing, and automated pipelines. 
          Built for teams who treat documents as code.
        </p>
        
        <div className="flex-center gap-2">
          <Link to="/studio">
            <Button size="lg">Start Building</Button>
          </Link>
          <Button variant="secondary" size="lg">Request Demo</Button>
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ 
        width: '100%', 
        background: 'var(--color-bg-secondary)', 
        padding: 'var(--space-16) var(--space-8)',
        borderTop: '1px solid var(--color-border)'
      }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 40 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="flex-center">
              <Layout size={20} color="var(--color-accent)" />
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 600 }}>Precision Studio</h3>
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              A block-based editor designed for structure and formatting fidelity.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="flex-center">
              <Zap size={20} color="var(--color-accent)" />
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 600 }}>Automated Pipelines</h3>
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Orchestrate your document lifecycle with trigger-based workflows.
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ width: 40, height: 40, borderRadius: 8, background: 'var(--color-surface)', border: '1px solid var(--color-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }} className="flex-center">
              <Shield size={20} color="var(--color-accent)" />
            </div>
            <h3 style={{ fontSize: 16, fontWeight: 600 }}>Vault Security</h3>
            <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
              Enterprise-grade encryption and governance for every artifact.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  )
}
