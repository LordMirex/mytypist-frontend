interface AvatarProps {
  initials: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
}

const sizeMap = { sm: 24, md: 32, lg: 40 }
const fontSizeMap = { sm: 10, md: 12, lg: 15 }

export function Avatar({ initials, color = 'var(--color-accent)', size = 'md' }: AvatarProps) {
  const px = sizeMap[size]
  const fs = fontSizeMap[size]
  return (
    <div style={{
      width: px, height: px, borderRadius: px / 4, flexShrink: 0,
      background: `${color}18`,
      border: `1px solid ${color}30`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      fontSize: fs, fontWeight: 700, color,
    }}>
      {initials.slice(0, 2).toUpperCase()}
    </div>
  )
}
