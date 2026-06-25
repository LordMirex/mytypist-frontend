import { useState, useRef, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { FileText, Shield, Check, ChevronRight, AlertCircle, Pen } from 'lucide-react'
import { LogoMark } from '@/components/brand/LogoMark'

/* Simulate a token → document lookup.
   In production this hits the API with the token. */
const mockLookup: Record<string, {
  title: string
  sender: string
  company: string
  sentAt: string
  pages: number
  recipientName: string
  recipientEmail: string
}> = {
  'demo-vendor-2026':  { title: 'Vendor Master Agreement', sender: 'Admin User', company: 'Meridian Lagos Ltd', sentAt: 'Sent 2 hours ago', pages: 12, recipientName: 'Adaeze Okonkwo', recipientEmail: 'adaeze@ekoprovisions.com' },
  'demo-nda-2026':     { title: 'Mutual NDA · Eko Provisions', sender: 'Chinedu Eze', company: 'MyTypist Demo Co.', sentAt: 'Sent 1 day ago', pages: 4, recipientName: 'Ibrahim Bello', recipientEmail: 'ibrahim.bello@email.com' },
  'demo-offer-2026':   { title: 'Offer Letter · J. Adeyemi', sender: 'HR Team', company: 'Coastal Energy Services', sentAt: 'Sent 3 days ago', pages: 2, recipientName: 'John Adeyemi Okafor', recipientEmail: 'j.okafor@university.edu' },
}

type Mode = 'type' | 'draw'
type Phase = 'review' | 'sign' | 'done' | 'expired'

function DrawPad({ onDraw }: { onDraw: (hasContent: boolean) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const drawing = useRef(false)
  const hasContent = useRef(false)

  function getPos(e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!
    const rect = canvas.getBoundingClientRect()
    if ('touches' in e) {
      return { x: e.touches[0].clientX - rect.left, y: e.touches[0].clientY - rect.top }
    }
    return { x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY }
  }

  function start(e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) {
    e.preventDefault()
    drawing.current = true
    const ctx = canvasRef.current!.getContext('2d')!
    ctx.beginPath()
    const pos = getPos(e)
    ctx.moveTo(pos.x, pos.y)
  }

  function move(e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) {
    e.preventDefault()
    if (!drawing.current) return
    const ctx = canvasRef.current!.getContext('2d')!
    const pos = getPos(e)
    ctx.lineWidth = 2
    ctx.lineCap = 'round'
    ctx.strokeStyle = '#1a1a1a'
    ctx.lineTo(pos.x, pos.y)
    ctx.stroke()
    hasContent.current = true
    onDraw(true)
  }

  function end() {
    drawing.current = false
  }

  function clear() {
    const canvas = canvasRef.current!
    const ctx = canvas.getContext('2d')!
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    hasContent.current = false
    onDraw(false)
  }

  useEffect(() => {
    const canvas = canvasRef.current!
    canvas.width  = canvas.offsetWidth
    canvas.height = canvas.offsetHeight
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{ display: 'block', width: '100%', height: 120, borderRadius: 6, background: '#fafaf9', border: '1px solid #e2e2dd', touchAction: 'none', cursor: 'crosshair' }}
        onMouseDown={start}
        onMouseMove={move}
        onMouseUp={end}
        onMouseLeave={end}
        onTouchStart={start}
        onTouchMove={move}
        onTouchEnd={end}
      />
      <button
        onClick={clear}
        style={{ position: 'absolute', top: 6, right: 8, fontSize: 11, color: '#9999a0', background: 'none', border: 'none', cursor: 'pointer', padding: '2px 4px' }}
      >
        Clear
      </button>
    </div>
  )
}

export function SigningPage() {
  const { token = '' } = useParams<{ token: string }>()
  const doc = mockLookup[token] ?? null

  const [phase, setPhase] = useState<Phase>(doc ? 'review' : 'expired')
  const [mode, setMode] = useState<Mode>('type')
  const [typedSig, setTypedSig] = useState('')
  const [drawHasContent, setDrawHasContent] = useState(false)
  const [agreed, setAgreed] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const sigReady = agreed && (mode === 'type' ? typedSig.trim().length > 0 : drawHasContent)

  function submit() {
    if (!sigReady) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setPhase('done')
    }, 1400)
  }

  if (phase === 'expired' || !doc) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f8f6', padding: 24 }}>
        <div style={{ maxWidth: 440, width: '100%', textAlign: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: 10, background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <AlertCircle size={22} style={{ color: '#DC2626' }} />
          </div>
          <h1 style={{ fontSize: 18, fontWeight: 700, letterSpacing: -0.4, color: '#1a1a1a', marginBottom: 8 }}>Link unavailable</h1>
          <p style={{ fontSize: 14, color: '#6b6b6b', lineHeight: 1.65, marginBottom: 28 }}>
            This signing link has expired, been revoked, or does not exist. Contact the sender to request a new link.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: 0.5 }}>
            <LogoMark size={18} variant="tonal" />
            <span style={{ fontSize: 12, color: '#6b6b6b' }}>MyTypist · Secure Document Signing</span>
          </div>
        </div>
      </div>
    )
  }

  if (phase === 'done') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f8f8f6', padding: 24 }}>
        <div style={{ maxWidth: 440, width: '100%', textAlign: 'center' }}>
          <div style={{ width: 52, height: 52, borderRadius: 10, background: 'rgba(5,150,105,0.08)', border: '1px solid rgba(5,150,105,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
            <Check size={24} style={{ color: '#059669' }} />
          </div>
          <h1 style={{ fontSize: 20, fontWeight: 800, letterSpacing: -0.5, color: '#1a1a1a', marginBottom: 8 }}>Document signed.</h1>
          <p style={{ fontSize: 14, color: '#6b6b6b', lineHeight: 1.65, marginBottom: 6 }}>
            <strong style={{ color: '#1a1a1a' }}>{doc.title}</strong> has been signed and sealed. A confirmation and PDF copy will be sent to <strong style={{ color: '#1a1a1a' }}>{doc.recipientEmail}</strong>.
          </p>
          <p style={{ fontSize: 12, color: '#9999a0', marginBottom: 32 }}>
            The completed document is stored with a full audit trail.
          </p>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 6, background: 'rgba(5,150,105,0.06)', border: '1px solid rgba(5,150,105,0.15)', fontSize: 12, color: '#059669', fontWeight: 600 }}>
            <Shield size={13} /> AES-256 encrypted · Cryptographic timestamp applied
          </div>
          <div style={{ marginTop: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, opacity: 0.45 }}>
            <LogoMark size={16} variant="tonal" />
            <span style={{ fontSize: 11, color: '#6b6b6b' }}>Powered by MyTypist</span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f8f6', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 16px 64px' }}>

      {/* Logo + trust header */}
      <div style={{ width: '100%', maxWidth: 520, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <LogoMark size={22} variant="purple" />
          <span style={{ fontSize: 13, fontWeight: 600, color: '#1a1a1a', letterSpacing: -0.2 }}>
            <span style={{ color: '#6C47FF' }}>My</span>Typist
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: '#059669', fontWeight: 600 }}>
          <Shield size={12} /> Secure signing
        </div>
      </div>

      <div style={{ width: '100%', maxWidth: 520, display: 'flex', flexDirection: 'column', gap: 14 }}>

        {/* Document info card */}
        <div style={{ background: '#ffffff', border: '1px solid #e5e5e0', borderRadius: 10, padding: '20px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
            <div style={{ width: 40, height: 48, background: '#f1f0ec', border: '1px solid #e5e5e0', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <FileText size={16} style={{ color: '#6C47FF' }} />
            </div>
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, letterSpacing: -0.3, color: '#1a1a1a', lineHeight: 1.3, marginBottom: 4 }}>
                {doc.title}
              </div>
              <div style={{ fontSize: 12, color: '#6b6b6b', lineHeight: 1.5 }}>
                Sent by <strong style={{ color: '#1a1a1a' }}>{doc.sender}</strong> from <strong style={{ color: '#1a1a1a' }}>{doc.company}</strong>
              </div>
              <div style={{ fontSize: 11, color: '#9999a0', marginTop: 3 }}>
                {doc.sentAt} · {doc.pages} {doc.pages === 1 ? 'page' : 'pages'}
              </div>
            </div>
          </div>
          {phase === 'review' && (
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid #f0f0eb' }}>
              <p style={{ fontSize: 13, color: '#4b4b4b', lineHeight: 1.65, margin: 0 }}>
                You have been asked to review and sign this document. Your signature is legally binding and will be applied with a cryptographic timestamp.
              </p>
            </div>
          )}
        </div>

        {/* Recipient info */}
        <div style={{ background: '#ffffff', border: '1px solid #e5e5e0', borderRadius: 10, padding: '16px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
          <div style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, color: '#9999a0', marginBottom: 8 }}>Signing as</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: '#1a1a1a' }}>{doc.recipientName}</div>
          <div style={{ fontSize: 12, color: '#6b6b6b' }}>{doc.recipientEmail}</div>
        </div>

        {phase === 'review' && (
          <button
            onClick={() => setPhase('sign')}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              width: '100%', padding: '14px 0',
              background: '#6C47FF', color: '#ffffff',
              border: 'none', borderRadius: 8, cursor: 'pointer',
              fontSize: 14, fontWeight: 700, letterSpacing: -0.2,
              boxShadow: '0 2px 8px rgba(108,71,255,0.28)',
            }}
          >
            Review and sign <ChevronRight size={15} />
          </button>
        )}

        {phase === 'sign' && (
          <>
            {/* Signature input card */}
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e0', borderRadius: 10, padding: '20px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#1a1a1a', letterSpacing: -0.2, marginBottom: 14 }}>
                <Pen size={13} style={{ verticalAlign: 'middle', marginRight: 6, color: '#6C47FF' }} />
                Your signature
              </div>

              {/* Mode toggle */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 14, background: '#f5f5f0', borderRadius: 6, padding: 3 }}>
                {(['type', 'draw'] as Mode[]).map(m => (
                  <button
                    key={m}
                    onClick={() => setMode(m)}
                    style={{
                      flex: 1, padding: '7px 0', borderRadius: 4, border: 'none', cursor: 'pointer',
                      fontSize: 12, fontWeight: mode === m ? 700 : 500,
                      background: mode === m ? '#ffffff' : 'transparent',
                      color: mode === m ? '#1a1a1a' : '#9999a0',
                      boxShadow: mode === m ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
                      transition: 'all 80ms',
                    }}
                  >
                    {m === 'type' ? 'Type name' : 'Draw'}
                  </button>
                ))}
              </div>

              {mode === 'type' ? (
                <input
                  type="text"
                  value={typedSig}
                  onChange={e => setTypedSig(e.target.value)}
                  placeholder={doc.recipientName}
                  style={{
                    width: '100%', boxSizing: 'border-box',
                    padding: '12px 14px',
                    border: '1px solid #e5e5e0',
                    borderRadius: 6,
                    fontSize: 22,
                    fontFamily: "'Instrument Serif', Georgia, serif",
                    color: '#1a1a1a',
                    background: '#fafaf9',
                    outline: 'none',
                    letterSpacing: 0.3,
                  }}
                />
              ) : (
                <DrawPad onDraw={setDrawHasContent} />
              )}

              <p style={{ fontSize: 11, color: '#9999a0', marginTop: 10, marginBottom: 0, lineHeight: 1.5 }}>
                {mode === 'type'
                  ? 'Type your full legal name as it appears on the document. This constitutes your electronic signature.'
                  : 'Draw your signature using your mouse or finger. This constitutes your electronic signature.'}
              </p>
            </div>

            {/* Agreement card */}
            <div style={{ background: '#ffffff', border: '1px solid #e5e5e0', borderRadius: 10, padding: '16px 20px', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 12, cursor: 'pointer' }}>
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={e => setAgreed(e.target.checked)}
                  style={{ marginTop: 2, accentColor: '#6C47FF', flexShrink: 0, width: 15, height: 15, cursor: 'pointer' }}
                />
                <span style={{ fontSize: 13, color: '#4b4b4b', lineHeight: 1.6 }}>
                  I have read, understand, and agree to electronically sign <strong style={{ color: '#1a1a1a' }}>{doc.title}</strong>. I understand that my electronic signature is legally binding under applicable law.
                </span>
              </label>
            </div>

            {/* Submit */}
            <button
              onClick={submit}
              disabled={!sigReady || submitting}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                width: '100%', padding: '14px 0',
                background: sigReady ? '#6C47FF' : '#ddd',
                color: sigReady ? '#ffffff' : '#999',
                border: 'none', borderRadius: 8,
                cursor: sigReady ? 'pointer' : 'not-allowed',
                fontSize: 14, fontWeight: 700, letterSpacing: -0.2,
                boxShadow: sigReady ? '0 2px 8px rgba(108,71,255,0.28)' : 'none',
                transition: 'all 100ms',
              }}
            >
              {submitting ? 'Signing...' : 'Sign document'}
            </button>

            <p style={{ fontSize: 11, color: '#9999a0', textAlign: 'center', lineHeight: 1.55, margin: 0 }}>
              Your signature will be encrypted and timestamped. A signed copy will be sent to {doc.recipientEmail}.
            </p>
          </>
        )}

        {/* Footer trust line */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginTop: 8, opacity: 0.5 }}>
          <LogoMark size={14} variant="tonal" />
          <span style={{ fontSize: 11, color: '#6b6b6b' }}>Powered by MyTypist · Secure document platform</span>
        </div>
      </div>
    </div>
  )
}
