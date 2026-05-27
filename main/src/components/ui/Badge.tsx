type BadgeStatus = 'draft' | 'pending' | 'in-progress' | 'in_progress' | 'complete' | 'failed'

interface BadgeProps {
  status: BadgeStatus
  label?: string
}

const statusLabels: Record<string, string> = {
  draft: 'Draft',
  pending: 'Pending',
  'in-progress': 'In Progress',
  in_progress: 'In Progress',
  complete: 'Complete',
  failed: 'Failed',
}

const statusClasses: Record<string, string> = {
  draft: 'draft',
  pending: 'pending',
  'in-progress': 'in-progress',
  in_progress: 'in-progress',
  complete: 'complete',
  failed: 'failed',
}

export function Badge({ status, label }: BadgeProps) {
  const cls = statusClasses[status] || 'draft'
  const displayLabel = label || statusLabels[status] || status

  return (
    <span className={`badge badge--${cls}`}>
      <span className="badge-dot" />
      {displayLabel}
    </span>
  )
}
