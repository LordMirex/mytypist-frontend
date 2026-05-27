import { useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import { useUIStore } from '@/stores'

export function CommandPalette() {
  const inputRef = useRef<HTMLInputElement>(null)
  const toggle = useUIStore((s) => s.toggleCommandPalette)

  useEffect(() => {
    inputRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') toggle()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [toggle])

  return (
    <div className="command-palette-overlay" onClick={toggle}>
      <div className="command-palette" onClick={(e) => e.stopPropagation()}>
        <div className="command-palette-input">
          <Search size={16} />
          <input ref={inputRef} type="text" placeholder="Search or run command..." />
        </div>
        <div className="command-palette-results">
          <p className="command-palette-empty">Type a command or search for documents</p>
        </div>
      </div>
    </div>
  )
}
