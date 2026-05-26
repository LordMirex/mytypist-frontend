import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownItem {
  name: string;
  href: string;
  description: string;
  icon?: React.ReactNode;
}

interface NavigationDropdownProps {
  title: string;
  items: DropdownItem[];
  className?: string;
}

const NavigationDropdown = ({ title, items, className }: NavigationDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={cn("relative group", className)}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="flex items-center space-x-1 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 py-2 px-3 rounded-md">
        <span>{title}</span>
        <ChevronDown 
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )} 
        />
      </button>

      {/* Dropdown Content */}
      <div className={cn(
        "absolute top-full left-0 mt-2 w-80 bg-card rounded-lg shadow-lg border border-border z-50 transition-all duration-200 will-change-transform",
        isOpen 
          ? "opacity-100 visible translate-y-0" 
          : "opacity-0 invisible -translate-y-2 pointer-events-none"
      )}>
        <div className="p-4 space-y-2">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="flex items-start space-x-3 p-3 rounded-lg hover:bg-muted transition-colors duration-150 group/item"
            >
              {item.icon && (
                <div className="text-primary mt-0.5">
                  {item.icon}
                </div>
              )}
              <div className="flex-1">
                <div className="font-medium text-foreground group-hover/item:text-primary transition-colors">
                  {item.name}
                </div>
                <div className="text-sm text-muted-foreground mt-0.5">
                  {item.description}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavigationDropdown;