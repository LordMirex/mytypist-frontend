import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'
import { Button } from '@/components/ui/Button'
import { MapPin } from 'lucide-react'

const roles = [
  {
    title: 'Senior Frontend Engineer',
    location: 'Lagos / Remote',
    description: 'React, TypeScript, and a keen eye for detail. You will own the developer experience and help shape our design system.',
  },
  {
    title: 'Backend Engineer',
    location: 'Lagos / Remote',
    description: 'Node.js, PostgreSQL, and document processing. You will build the engine that powers Nigerian business workflows.',
  },
  {
    title: 'Product Designer',
    location: 'Lagos / Remote',
    description: 'Own the end-to-end product experience. From wireframes to production UI, you will define how document workflows feel.',
  },
  {
    title: 'Customer Success Manager',
    location: 'Lagos',
    description: 'Help Nigerian businesses get the most out of MyTypist. Onboarding, training, and advocacy.',
  },
]

export function CareersPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PublicHeader />
      <main style={{ maxWidth: 640, margin: '0 auto', padding: '80px 24px 120px' }}>
        {/* Hero */}
        <h1 style={{ fontSize: 28, fontWeight: 700, color: 'var(--color-text-primary)', letterSpacing: '-0.5px', margin: '0 0 12px', fontFamily: 'var(--font-display)' }}>
          Build the document OS for Africa.
        </h1>
        <p style={{ fontSize: 15, color: 'var(--color-text-secondary)', lineHeight: 1.6, margin: '0 0 48px', maxWidth: 480 }}>
          We are a small team in Lagos building infrastructure for Nigerian businesses. If you care about craft, we want to hear from you.
        </p>

        {/* Roles */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {roles.map((role) => (
            <div
              key={role.title}
              style={{
                border: '1px solid var(--color-border)', borderRadius: 8,
                padding: '20px 24px', background: 'var(--color-surface)',
                display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16,
              }}
            >
              <div style={{ minWidth: 0, flex: 1 }}>
                <h2 style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: '0 0 6px', letterSpacing: '-0.2px' }}>
                  {role.title}
                </h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 8 }}>
                  <MapPin size={11} color="var(--color-text-tertiary)" />
                  <span style={{ fontSize: 11, color: 'var(--color-text-tertiary)', fontWeight: 500 }}>
                    {role.location}
                  </span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5, margin: 0 }}>
                  {role.description}
                </p>
              </div>
              <a href="mailto:careers@mytypist.com" style={{ textDecoration: 'none', flexShrink: 0, marginTop: 2 }}>
                <Button size="sm">Apply</Button>
              </a>
            </div>
          ))}
        </div>
      </main>
      <PublicFooter />
    </div>
  )
}
