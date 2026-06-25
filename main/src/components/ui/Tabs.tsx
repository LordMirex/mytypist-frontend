interface Tab {
  id: string
  label: string
}

interface TabsProps {
  tabs: Tab[]
  active: string
  onChange: (id: string) => void
}

export function Tabs({ tabs, active, onChange }: TabsProps) {
  return (
    <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid var(--color-border)' }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '8px 14px',
            fontSize: 13, fontWeight: active === tab.id ? 600 : 400,
            color: active === tab.id ? 'var(--color-accent)' : 'var(--color-text-secondary)',
            background: 'none', border: 'none',
            borderBottom: `2px solid ${active === tab.id ? 'var(--color-accent)' : 'transparent'}`,
            marginBottom: -1,
            cursor: 'pointer', transition: 'color 80ms',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
