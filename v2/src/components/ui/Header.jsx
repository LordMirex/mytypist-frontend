import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Templates', path: '/template-gallery', icon: 'Layout' },
    { name: 'Create', path: '/document-creator-studio', icon: 'FileText' },
    { name: 'Dashboard', path: '/user-dashboard', icon: 'BarChart3' },
    { name: 'Pricing', path: '/pricing-upgrade', icon: 'CreditCard' },
  ];

  const moreMenuItems = [
    { name: 'Help Center', path: '/help', icon: 'HelpCircle' },
    { name: 'Settings', path: '/settings', icon: 'Settings' },
    { name: 'Contact', path: '/contact', icon: 'Mail' },
  ];

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-b border-border shadow-subtle">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo - Enhanced */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 transition-all duration-200 hover:opacity-80 group"
          >
            <div className="w-9 h-9 bg-gradient-to-br from-primary to-brand-authority rounded-xl flex items-center justify-center shadow-brand group-hover:shadow-conversion transition-all duration-200">
              <Icon name="FileText" size={20} color="white" />
            </div>
            <span className="text-xl font-bold text-foreground font-accent">
              MyTypist
            </span>
          </Link>

          {/* Desktop Navigation - Enhanced */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  isActivePath(item?.path)
                    ? 'bg-primary/10 text-primary shadow-subtle' 
                    : 'text-text-secondary hover:text-foreground hover:bg-muted hover:shadow-subtle'
                }`}
              >
                <Icon name={item?.icon} size={16} />
                <span>{item?.name}</span>
              </Link>
            ))}
            
            {/* More Menu - Enhanced */}
            <div className="relative group">
              <button className="flex items-center space-x-2 px-4 py-2.5 rounded-xl text-sm font-medium text-text-secondary hover:text-foreground hover:bg-muted hover:shadow-subtle transition-all duration-200">
                <Icon name="MoreHorizontal" size={16} />
                <span>More</span>
                <Icon name="ChevronDown" size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </button>
              
              {/* Dropdown - Enhanced */}
              <div className="absolute right-0 top-full mt-2 w-52 bg-popover border border-border rounded-xl shadow-brand opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 animate-slide-up">
                <div className="py-3">
                  {moreMenuItems?.map((item, index) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className="flex items-center space-x-3 px-4 py-3 text-sm text-text-secondary hover:text-foreground hover:bg-muted transition-brand group"
                    >
                      <Icon name={item?.icon} size={16} className="group-hover:text-primary transition-colors duration-200" />
                      <span>{item?.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Desktop CTA - Enhanced */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="hover:shadow-subtle transition-all duration-200">
              Sign In
            </Button>
            <Button variant="default" size="sm" className="shadow-conversion hover:shadow-brand transition-all duration-300 transform hover:-translate-y-0.5">
              Start Free
            </Button>
          </div>

          {/* Mobile Menu Button - Enhanced */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden p-2.5 rounded-xl text-text-secondary hover:text-foreground hover:bg-muted hover:shadow-subtle transition-all duration-200"
          >
            <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {/* Mobile Menu - Enhanced */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-surface/95 backdrop-blur-md animate-slide-up">
            <div className="px-4 py-6 space-y-4">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 px-4 py-4 rounded-xl text-base font-medium transition-all duration-200 ${
                    isActivePath(item?.path)
                      ? 'bg-primary/10 text-primary shadow-subtle' 
                      : 'text-text-secondary hover:text-foreground hover:bg-muted hover:shadow-subtle'
                  }`}
                >
                  <Icon name={item?.icon} size={20} />
                  <span>{item?.name}</span>
                </Link>
              ))}
              
              <div className="border-t border-border pt-4 mt-6">
                {moreMenuItems?.map((item) => (
                  <Link
                    key={item?.path}
                    to={item?.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-4 rounded-xl text-base font-medium text-text-secondary hover:text-foreground hover:bg-muted hover:shadow-subtle transition-all duration-200"
                  >
                    <Icon name={item?.icon} size={20} />
                    <span>{item?.name}</span>
                  </Link>
                ))}
              </div>
              
              <div className="border-t border-border pt-6 mt-6 space-y-4">
                <Button variant="ghost" fullWidth className="justify-center hover:shadow-subtle transition-all duration-200">
                  Sign In
                </Button>
                <Button variant="default" fullWidth className="justify-center shadow-conversion hover:shadow-brand transition-all duration-300">
                  Start Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;