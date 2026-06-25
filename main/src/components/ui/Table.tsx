import type { ReactNode } from 'react'

interface Column {
  key: string
  label: string
  width?: string
  render?: (value: unknown, row: Record<string, unknown>) => ReactNode
}

interface TableProps {
  columns: Column[]
  rows: Record<string, unknown>[]
}

export function Table({ columns, rows }: TableProps) {
  return (
    <div className="vault-table-container">
      <table className="vault-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key} style={col.width ? { width: col.width } : undefined}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.length === 0 ? (
            <tr>
              <td colSpan={columns.length} style={{
                textAlign: 'center', padding: '48px 24px',
                color: 'var(--color-text-tertiary)', fontSize: 13,
              }}>
                No data
              </td>
            </tr>
          ) : rows.map((row, i) => (
            <tr key={i}>
              {columns.map((col) => (
                <td key={col.key}>
                  {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
