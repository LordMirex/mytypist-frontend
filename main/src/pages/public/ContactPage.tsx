import { useState } from 'react'
import { Mail, MapPin, Clock, ArrowRight } from 'lucide-react'
import { PublicHeader } from '@/components/layout/PublicHeader'
import { PublicFooter } from '@/components/layout/PublicFooter'

const subjects = [
  'General inquiry',
  'Technical issue',
  'Billing question',
  'Enterprise / Partnership',
  'Press or media',
]

export function ContactPage() {
  const [name, setName]       = useState('')
  const [email, setEmail]     = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent]       = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setLoading(false); setSent(true) }, 1000)
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg)' }}>
      <PublicHeader />

      <section className="lp-section" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <div className="lp-section-inner">
          <h1 style={{ fontSize: 38, fontWeight: 800, letterSpacing: '-1.5px', color: 'var(--color-text-primary)', lineHeight: 1.1, marginBottom: 12 }}>
            Contact us.
          </h1>
          <p style={{ fontSize: 16, color: 'var(--color-text-secondary)', lineHeight: 1.65, maxWidth: 480 }}>
            We reply within one business day. For urgent technical issues, include your workspace URL and a short description of what is happening.
          </p>
        </div>
      </section>

      <section className="lp-section" style={{ paddingTop: 48 }}>
        <div className="lp-section-inner">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48 }}>

            {/* Form */}
            <div style={{ maxWidth: 560 }}>
              {sent ? (
                <div style={{ padding: '28px 24px', background: 'var(--color-surface)', border: '1px solid var(--color-border)', borderLeft: '3px solid var(--color-status-complete)', borderRadius: 8 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>Message sent.</div>
                  <p style={{ fontSize: 14, color: 'var(--color-text-secondary)', margin: 0, lineHeight: 1.65 }}>
                    We have received your message and will reply to <strong>{email}</strong> within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                    <div className="input-wrapper">
                      <label className="input-label">Full name</label>
                      <input
                        className="input"
                        style={{ height: 42, fontSize: 14 }}
                        type="text"
                        placeholder="Amaka Obi"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="input-wrapper">
                      <label className="input-label">Email address</label>
                      <input
                        className="input"
                        style={{ height: 42, fontSize: 14 }}
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Subject</label>
                    <select
                      className="input"
                      style={{ height: 42, fontSize: 14 }}
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      required
                    >
                      <option value="">Select a topic</option>
                      {subjects.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>

                  <div className="input-wrapper">
                    <label className="input-label">Message</label>
                    <textarea
                      className="input"
                      style={{ height: 120, fontSize: 14, resize: 'vertical', padding: '10px 12px', lineHeight: 1.6 }}
                      placeholder="Describe your question or issue..."
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn--primary"
                    disabled={loading}
                    style={{ height: 44, fontSize: 14, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6, alignSelf: 'flex-start', paddingLeft: 20, paddingRight: 20 }}
                  >
                    {loading ? 'Sending...' : <>Send message <ArrowRight size={14} /></>}
                  </button>
                </form>
              )}
            </div>

            {/* Contact info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {[
                { icon: Mail,   heading: 'Email',            body: 'support@mytypist.com', sub: 'For general and technical questions' },
                { icon: Clock,  heading: 'Response time',    body: 'Within 1 business day', sub: 'Monday to Friday, Lagos time (WAT)' },
                { icon: MapPin, heading: 'Based in',         body: 'Lagos, Nigeria', sub: 'Serving businesses across West Africa' },
              ].map(({ icon: Icon, heading, body, sub }) => (
                <div key={heading} style={{ display: 'flex', gap: 14 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 6, background: 'var(--color-accent-muted)', border: '1px solid var(--color-accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon size={15} style={{ color: 'var(--color-accent)' }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, fontWeight: 700, color: 'var(--color-text-tertiary)', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 3 }}>{heading}</div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 2 }}>{body}</div>
                    <div style={{ fontSize: 12, color: 'var(--color-text-tertiary)' }}>{sub}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      <PublicFooter />
    </div>
  )
}
