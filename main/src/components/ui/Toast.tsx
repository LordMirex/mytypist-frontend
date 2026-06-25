import { create } from 'zustand'
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react'
import { useEffect, useState } from 'react'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface ToastItem {
  id: string
  type: ToastType
  message: string
}

interface ToastState {
  toasts: ToastItem[]
  addToast: (type: ToastType, message: string) => void
  removeToast: (id: string) => void
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],
  addToast: (type, message) => {
    const id = Date.now().toString(36) + Math.random().toString(36).slice(2, 6)
    set((s) => ({ toasts: [...s.toasts, { id, type, message }] }))
    setTimeout(() => {
      set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) }))
    }, 4000)
  },
  removeToast: (id) => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })),
}))

export function useToast() {
  return useToastStore((s) => ({ addToast: s.addToast, removeToast: s.removeToast }))
}

const icons = {
  success: CheckCircle,
  error: AlertCircle,
  info: Info,
  warning: AlertTriangle,
}

const colors = {
  success: '#059669',
  error: '#DC2626',
  info: '#6C47FF',
  warning: '#D97706',
}

const bgColors = {
  success: 'rgba(5,150,105,0.08)',
  error: 'rgba(220,38,38,0.08)',
  info: 'rgba(108,71,255,0.08)',
  warning: 'rgba(217,119,6,0.08)',
}

function ToastItem({ toast, onDismiss }: { toast: ToastItem; onDismiss: () => void }) {
  const [visible, setVisible] = useState(false)
  useEffect(() => { requestAnimationFrame(() => setVisible(true)) }, [])
  const Icon = icons[toast.type]

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 10,
      padding: '10px 14px', borderRadius: 8,
      background: bgColors[toast.type],
      border: `1px solid ${colors[toast.type]}30`,
      boxShadow: 'var(--shadow-floating)',
      transition: 'all 200ms ease',
      opacity: visible ? 1 : 0,
      transform: visible ? 'translateX(0)' : 'translateX(20px)',
      maxWidth: 380,
    }}>
      <Icon size={15} color={colors[toast.type]} style={{ flexShrink: 0 }} />
      <span style={{ flex: 1, fontSize: 13, color: 'var(--color-text-primary)', lineHeight: 1.4 }}>
        {toast.message}
      </span>
      <button
        onClick={onDismiss}
        style={{ flexShrink: 0, width: 20, height: 20, border: 'none', background: 'none', cursor: 'pointer', color: 'var(--color-text-tertiary)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--color-hover)' }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'none' }}
      >
        <X size={12} />
      </button>
    </div>
  )
}

export function ToastContainer() {
  const toasts = useToastStore((s) => s.toasts)
  const removeToast = useToastStore((s) => s.removeToast)

  if (toasts.length === 0) return null

  return (
    <div style={{
      position: 'fixed', bottom: 24, right: 24, zIndex: 200,
      display: 'flex', flexDirection: 'column-reverse', gap: 8,
      pointerEvents: 'none',
    }}>
      {toasts.map((toast) => (
        <div key={toast.id} style={{ pointerEvents: 'auto' }}>
          <ToastItem toast={toast} onDismiss={() => removeToast(toast.id)} />
        </div>
      ))}
    </div>
  )
}
