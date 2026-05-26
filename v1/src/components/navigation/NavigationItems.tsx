
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { FileText, Zap, BookOpen, Mail, Users, Scale, CreditCard } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavigationDropdown from './NavigationDropdown';

// Guest navigation structure as requested
const guestDropdownItems = {
  products: [
    { 
      name: 'AutoSign', 
      href: '/autosign', 
      description: 'Automated digital signature workflows',
      icon: <FileText className="h-5 w-5" />
    },
    { 
      name: 'AutoType', 
      href: '/autotype', 
      description: 'AI-powered document generation',
      icon: <Zap className="h-5 w-5" />
    },
  ],
  resources: [
    { 
      name: 'How to Use', 
      href: '/how-to-use', 
      description: 'Learn to maximize MyTypist features',
      icon: <BookOpen className="h-5 w-5" />
    },
    { 
      name: 'Blog', 
      href: '/blog', 
      description: 'Latest insights and best practices',
      icon: <BookOpen className="h-5 w-5" />
    },
    { 
      name: 'About', 
      href: '/about', 
      description: 'Our mission and company story',
      icon: <Users className="h-5 w-5" />
    },
  ],
  company: [
    { 
      name: 'Contact Us', 
      href: '/contact', 
      description: 'Get in touch with our team',
      icon: <Mail className="h-5 w-5" />
    },
    { 
      name: 'Become a Partner', 
      href: '/become-partner', 
      description: 'Join our partner program',
      icon: <Users className="h-5 w-5" />
    },
    { 
      name: 'Legals', 
      href: '/legals', 
      description: 'Privacy policy and terms of service',
      icon: <Scale className="h-5 w-5" />
    },
  ],
};

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

interface NavigationItemsProps {
  role: 'guest' | 'user' | 'admin';
}

const NavigationItems = ({ role }: NavigationItemsProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  if (role === 'guest') {
    return (
      <div className="hidden lg:flex items-center space-x-8">
        <Link
          to="/"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary relative px-3 py-2 rounded-md",
            isActive('/') ? "text-primary bg-primary/10" : "text-foreground"
          )}
        >
          Home
        </Link>

        <NavigationDropdown
          title="Products"
          items={guestDropdownItems.products}
        />

        <NavigationDropdown
          title="Resources"
          items={guestDropdownItems.resources}
        />

        <NavigationDropdown
          title="Company"
          items={guestDropdownItems.company}
        />

        <Link
          to="/pricing"
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary relative px-3 py-2 rounded-md",
            isActive('/pricing') ? "text-primary bg-primary/10" : "text-foreground"
          )}
        >
          <CreditCard className="inline h-4 w-4 mr-1" />
          Plans and Pricing
        </Link>
      </div>
    );
  }

  // User and Admin navigation (existing logic)
  let primaryNavItems;
  switch (role) {
    case 'admin':
      primaryNavItems = adminNavItems;
      break;
    case 'user':
      primaryNavItems = userNavItems;
      break;
    default:
      primaryNavItems = [];
  }

  return (
    <div className="hidden lg:flex items-center space-x-6">
      {primaryNavItems.map((item) => (
        <Link
          key={item.name}
          to={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-primary relative px-3 py-2 rounded-md",
            isActive(item.href)
              ? role === 'admin' 
                ? "text-red-600 bg-red-50" 
                : "text-primary bg-primary/10"
              : "text-foreground"
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default NavigationItems;
