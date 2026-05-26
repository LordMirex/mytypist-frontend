
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { User, LogOut, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mobile navigation structure (simplified for mobile)
const guestMobileNavItems = [
  { name: 'Home', href: '/' },
  { name: 'AutoSign', href: '/autosign' },
  { name: 'AutoType', href: '/autotype' },
  { name: 'How to Use', href: '/how-to-use' },
  { name: 'Blog', href: '/blog' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact Us', href: '/contact' },
  { name: 'Become a Partner', href: '/become-partner' },
  { name: 'Support', href: '/support' },
  { name: 'Legals', href: '/legals' },
];

const userNavItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Templates', href: '/templates' },
  { name: 'Documents', href: '/create-document' },
  { name: 'Analytics', href: '/analytics' },
  { name: 'Bonuses', href: '/bonuses' },
];

const adminNavItems = [
  { name: 'Admin Dashboard', href: '/admin' },
  { name: 'User Management', href: '/admin/users' },
  { name: 'System Health', href: '/admin/health' },
  { name: 'Admin Bonuses', href: '/admin/bonuses' },
  { name: 'Document Preview', href: '/admin/preview' },
  { name: 'Signature Management', href: '/admin/signatures' },
];

interface MobileMenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
  role: 'guest' | 'user' | 'admin';
  isActive: (path: string) => boolean;
}

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, role, isActive }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  let primaryNavItems;
  switch (role) {
    case 'admin':
      primaryNavItems = adminNavItems;
      break;
    case 'user':
      primaryNavItems = userNavItems;
      break;
    default:
      primaryNavItems = guestMobileNavItems;
  }

  return (
    <div className="lg:hidden animate-fade-in">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border shadow-lg">
        {/* Primary Nav Items */}
        <div className="space-y-1">
          {primaryNavItems.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "block px-3 py-2 text-base font-medium transition-colors rounded-md",
                isActive(item.href)
                  ? role === 'admin'
                    ? "text-red-600 bg-red-50"
                    : "text-primary bg-primary/10"
                  : "text-foreground hover:text-primary hover:bg-muted"
              )}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="pt-4 border-t border-border space-y-2 px-3">
          {role === "guest" && (
            <>
              <Link to="/login" onClick={() => setIsMenuOpen(false)} className="block">
                <Button variant="outline" size="sm" className="w-full">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="block">
                <Button size="sm" className="w-full">
                  Get Started Free
                </Button>
              </Link>
            </>
          )}

          {(role === "user" || role === "admin") && (
            <>
              <Link to="/profile" onClick={() => setIsMenuOpen(false)} className="block">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Profile
                </Button>
              </Link>
              <Link to="/settings" onClick={() => setIsMenuOpen(false)} className="block">
                <Button variant="outline" size="sm" className="w-full justify-start">
                  Settings
                </Button>
              </Link>
              {role === "admin" && (
                <Link to="/admin" onClick={() => setIsMenuOpen(false)} className="block">
                  <Button variant="destructive" size="sm" className="w-full justify-start">
                    <Shield className="w-4 h-4 mr-2" />
                    Admin Dashboard
                  </Button>
                </Link>
              )}
              <Button variant="ghost" size="sm" className="w-full justify-start text-destructive hover:text-destructive hover:bg-destructive/10">
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
