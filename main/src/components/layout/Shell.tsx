import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Toolbar } from './Toolbar'
import { CommandPalette } from '@/components/features/CommandPalette'
import { useUIStore } from '@/stores'

export function Shell() {
  const commandPaletteOpen = useUIStore((s) => s.commandPaletteOpen)
  const sidebarOpen = useUIStore((s) => s.sidebarOpen)
  const toggleSidebar = useUIStore((s) => s.toggleSidebar)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'b') {
        e.preventDefault()
        toggleSidebar()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [toggleSidebar])

  return (
    <div className={`shell${sidebarOpen ? '' : ' shell--sidebar-collapsed'}`}>
      {/* Mobile backdrop — tap to close */}
      <div
        className={`sidebar-backdrop${sidebarOpen ? ' sidebar-backdrop--visible' : ''}`}
        onClick={toggleSidebar}
      />
      <Sidebar />
      <div className="shell-content">
        <Toolbar />
        <main className="shell-main">
          <Outlet />
        </main>
      </div>
      {commandPaletteOpen && <CommandPalette />}
    </div>
  )
}
