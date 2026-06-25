import { useState, useRef, useEffect } from 'react'
import { ChevronDown } from 'lucide-react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps {
  value?: string
  onChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  disabled?: boolean
}

export function Select({ value, onChange, options, placeholder, disabled }: SelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const selected = options.find((o) => o.value === value)

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [])

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => setOpen(!open)}
        className="input"
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8,
          width: '100%', height: 38, padding: '0 10px', cursor: disabled ? 'not-allowed' : 'pointer',
          textAlign: 'left', fontSize: 13,
          color: selected ? 'var(--color-text-primary)' : 'var(--color-text-quaternary)',
        }}
      >
        <span>{selected ? selected.label : placeholder || 'Select...'}</span>
        <ChevronDown size={13} style={{
          color: 'var(--color-text-tertiary)',
          transition: 'transform 120ms',
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
        }} />
      </button>
      {open && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 50,
          marginTop: 2, background: 'var(--color-surface)',
          border: '1px solid var(--color-border)',
          borderRadius: 6, boxShadow: 'var(--shadow-dropdown)',
          overflow: 'hidden',
        }}>
          {options.map((opt) => (
            <button
              key={opt.value}
              type="button"
              onClick={() => { onChange(opt.value); setOpen(false) }}
              style={{
                display: 'block', width: '100%', padding: '8px 10px',
                fontSize: 13, textAlign: 'left', border: 'none',
                background: opt.value === value ? 'var(--color-accent-muted)' : 'transparent',
                color: opt.value === value ? 'var(--color-accent)' : 'var(--color-text-primary)',
                cursor: 'pointer', fontWeight: opt.value === value ? 600 : 400,
              }}
              onMouseEnter={(e) => { if (opt.value !== value) e.currentTarget.style.background = 'var(--color-hover)' }}
              onMouseLeave={(e) => { if (opt.value !== value) e.currentTarget.style.background = 'transparent' }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
