import { Search, Bell, User } from 'lucide-react'

export function Toolbar() {
  return (
    <header className="toolbar">
      <div className="toolbar-left">
        <span className="toolbar-breadcrumb">Studio</span>
      </div>
      <div className="toolbar-right">
        <button className="toolbar-icon-btn" title="Search (Cmd+K)">
          <Search size={16} />
        </button>
        <button className="toolbar-icon-btn" title="Notifications">
          <Bell size={16} />
        </button>
        <button className="toolbar-icon-btn" title="Profile">
          <User size={16} />
        </button>
      </div>
    </header>
  )
}
