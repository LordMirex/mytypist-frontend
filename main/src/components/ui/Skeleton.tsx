interface SkeletonProps {
  width?: string | number
  height?: string | number
  borderRadius?: string | number
}

export function Skeleton({ width = '100%', height = 12, borderRadius = 4 }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      style={{
        width, height, borderRadius,
        background: 'var(--color-bg-tertiary)',
        animation: 'skeleton-shimmer 1s ease-in-out infinite',
      }}
    />
  )
}
