import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { Toolbar } from './Toolbar'
import { CommandPalette } from '@/components/features/CommandPalette'
import { useUIStore } from '@/stores'

export function Shell() {
  const commandPaletteOpen = useUIStore((s) => s.commandPaletteOpen)

  return (
    <div className="shell">
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
