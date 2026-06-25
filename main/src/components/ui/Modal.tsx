import { useEffect, useRef, type ReactNode } from 'react'

interface ModalProps {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
}

export function Modal({ open, onClose, title, children, footer }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const prevFocus = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    if (open) {
      prevFocus.current = document.activeElement as HTMLElement
      el.showModal()
    } else {
      el.close()
      prevFocus.current?.focus()
    }
  }, [open])

  useEffect(() => {
    const el = dialogRef.current
    if (!el) return
    function onCancel(e: Event) { e.preventDefault(); onClose() }
    function onDown(e: KeyboardEvent) { if (e.key === 'Escape') onClose() }
    el.addEventListener('cancel', onCancel)
    document.addEventListener('keydown', onDown)
    return () => { el.removeEventListener('cancel', onCancel); document.removeEventListener('keydown', onDown) }
  }, [onClose])

  if (!open) return null

  return (
    <dialog
      ref={dialogRef}
      onClick={(e) => { if (e.target === dialogRef.current) onClose() }}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        width: '100%', maxWidth: 520,
        padding: 0, border: '1px solid var(--color-border)',
        borderRadius: 10, background: 'var(--color-surface)',
        boxShadow: 'var(--shadow-modal)',
      }}
    >
      <div style={{ padding: '20px 24px 0', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: 15, fontWeight: 700, color: 'var(--color-text-primary)', margin: 0 }}>
          {title}
        </h2>
        <button
          onClick={onClose}
          style={{
            width: 24, height: 24, border: 'none', background: 'none',
            cursor: 'pointer', borderRadius: 4, color: 'var(--color-text-tertiary)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 15, lineHeight: 1,
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-hover)'; e.currentTarget.style.color = 'var(--color-text-primary)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'none'; e.currentTarget.style.color = 'var(--color-text-tertiary)' }}
          aria-label="Close"
        >
          &times;
        </button>
      </div>
      <div style={{ padding: '16px 24px', fontSize: 13, color: 'var(--color-text-secondary)', lineHeight: 1.5 }}>
        {children}
      </div>
      {footer && (
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 8,
          padding: '0 24px 16px',
        }}>
          {footer}
        </div>
      )}
    </dialog>
  )
}
