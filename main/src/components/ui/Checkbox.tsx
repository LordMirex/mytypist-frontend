import { Check } from 'lucide-react'

interface CheckboxProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export function Checkbox({ checked, onChange, label, disabled }: CheckboxProps) {
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
    }}>
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={disabled ? -1 : 0}
        onClick={() => { if (!disabled) onChange(!checked) }}
        onKeyDown={(e) => { if (!disabled && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); onChange(!checked) } }}
        style={{
          width: 15, height: 15, borderRadius: 3, flexShrink: 0,
          border: checked ? 'none' : '1.5px solid var(--color-text-quaternary)',
          background: checked ? 'var(--color-accent)' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 100ms, border-color 100ms',
        }}
      >
        {checked && <Check size={10} color="#fff" strokeWidth={3} />}
      </div>
      {label && <span style={{ fontSize: 13, color: 'var(--color-text-primary)' }}>{label}</span>}
    </label>
  )
}
