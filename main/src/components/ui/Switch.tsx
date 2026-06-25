interface SwitchProps {
  checked: boolean
  onChange: (checked: boolean) => void
  label?: string
  disabled?: boolean
}

export function Switch({ checked, onChange, label, disabled }: SwitchProps) {
  return (
    <label style={{
      display: 'inline-flex', alignItems: 'center', gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
    }}>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => { if (!disabled) onChange(!checked) }}
        style={{
          width: 36, height: 20, borderRadius: 10, flexShrink: 0,
          background: checked ? 'var(--color-accent)' : 'var(--color-border)',
          border: 'none', cursor: disabled ? 'not-allowed' : 'pointer',
          position: 'relative', transition: 'background 120ms',
        }}
      >
        <span style={{
          position: 'absolute', top: 2, left: checked ? 18 : 2,
          width: 16, height: 16, borderRadius: '50%', background: '#fff',
          transition: 'left 120ms',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        }} />
      </button>
      {label && <span style={{ fontSize: 13, color: 'var(--color-text-primary)' }}>{label}</span>}
    </label>
  )
}
