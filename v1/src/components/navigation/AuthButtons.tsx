
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, User, LogOut, Shield } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';

interface AuthButtonsProps {
  role: 'guest' | 'user' | 'admin';
}

const AuthButtons = ({ role }: AuthButtonsProps) => {
  if (role === "guest") {
    return (
      <div className="hidden lg:flex items-center space-x-3">
        <Link to="/login">
          <Button variant="ghost" size="sm" className="text-gray-700 hover:text-brand-600">
            Sign In
          </Button>
        </Link>
        <Link to="/signup">
          <Button size="sm" className="bg-brand-600 hover:bg-brand-700 shadow-md">
            Get Started Free
          </Button>
        </Link>
      </div>
    );
  }

  if (role === "user") {
    return (
      <div className="hidden lg:flex items-center space-x-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center space-x-2">
              <User className="w-4 h-4" />
              <span>Account</span>
              <ChevronDown className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white">
            <DropdownMenuItem asChild>
              <Link to="/profile" className="cursor-pointer">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings" className="cursor-pointer">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  if (role === "admin") {
    return (
      <div className="hidden lg:flex items-center space-x-2">
        <Link to="/admin">
          <Button variant="destructive" size="sm" className="shadow-md">
            <Shield className="w-4 h-4 mr-2" />
            Admin Panel
          </Button>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm">
              <User className="w-4 h-4" />
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-48 bg-white">
            <DropdownMenuItem asChild>
              <Link to="/profile" className="cursor-pointer">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link to="/settings" className="cursor-pointer">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }

  return null;
};

export default AuthButtons;
