
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const userTools = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Templates', href: '/templates' },
  { name: 'Create Document', href: '/create-document' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Bonuses', href: '/bonuses' },
];

const adminTools = [
  { name: 'Admin Dashboard', href: '/admin' },
  { name: 'Upload Template', href: '/admin/upload-template' },
  { name: 'Manage Users', href: '/admin/users' },
  { name: 'System Settings', href: '/admin/settings' },
  { name: 'Reports', href: '/admin/reports' },
  ...userTools,
];

interface ToolsMenuProps {
  role: 'guest' | 'user' | 'admin';
}

const ToolsMenu = ({ role }: ToolsMenuProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  if (role === 'guest') return null;
  
  const toolsItems = role === "admin" ? adminTools : userTools;
  const menuTitle = role === "admin" ? "Admin Tools" : "Tools";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn(
            "text-gray-700 hover:text-brand-600 font-medium",
            toolsItems.some(item => isActive(item.href)) ? "text-brand-600 bg-brand-50" : ""
          )}
        >
          {menuTitle}
          <ChevronDown className="ml-1 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-white shadow-lg border border-gray-200">
        {role === "admin" && (
          <>
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Admin Functions
            </div>
            {adminTools.slice(0, 5).map((item) => (
              <DropdownMenuItem key={item.name} asChild>
                <Link
                  to={item.href}
                  className={cn(
                    "w-full cursor-pointer font-medium",
                    isActive(item.href) ? "text-red-600 bg-red-50" : "text-gray-700"
                  )}
                >
                  {item.name}
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              User Tools
            </div>
          </>
        )}
        {(role === "user" ? userTools : adminTools.slice(5)).map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link
              to={item.href}
              className={cn(
                "w-full cursor-pointer",
                isActive(item.href) ? "text-brand-600 bg-brand-50" : "text-gray-700"
              )}
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ToolsMenu;
