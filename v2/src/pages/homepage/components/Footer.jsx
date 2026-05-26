import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date()?.getFullYear();

  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Templates", path: "/template-gallery" },
        { name: "Create Document", path: "/document-creator-studio" },
        { name: "Dashboard", path: "/user-dashboard" },
        { name: "Pricing", path: "/pricing-upgrade" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Help Center", path: "/help" },
        { name: "Documentation", path: "/docs" },
        { name: "API Reference", path: "/api" },
        { name: "Tutorials", path: "/tutorials" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" },
        { name: "Careers", path: "/careers" },
        { name: "Blog", path: "/blog" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy" },
        { name: "Terms of Service", path: "/terms" },
        { name: "Cookie Policy", path: "/cookies" },
        { name: "GDPR", path: "/gdpr" }
      ]
    }
  ];

  const socialLinks = [
    { name: "Twitter", icon: "Twitter", url: "https://twitter.com/mytypist" },
    { name: "LinkedIn", icon: "Linkedin", url: "https://linkedin.com/company/mytypist" },
    { name: "Facebook", icon: "Facebook", url: "https://facebook.com/mytypist" },
    { name: "Instagram", icon: "Instagram", url: "https://instagram.com/mytypist" }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/homepage" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-brand-authority rounded-lg flex items-center justify-center">
                <Icon name="FileText" size={24} color="white" />
              </div>
              <span className="text-2xl font-bold font-accent">MyTypist</span>
            </Link>
            
            <p className="text-gray-300 leading-relaxed max-w-md">
              Transform your ideas into professional documents instantly. 
              Join thousands of users who trust MyTypist for their document creation needs.
            </p>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-white">Stay Updated</h4>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
                <Button variant="default" size="sm">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks?.map((social) => (
                <a
                  key={social?.name}
                  href={social?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-brand group"
                >
                  <Icon 
                    name={social?.icon} 
                    size={18} 
                    className="text-gray-300 group-hover:text-white transition-brand" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections?.map((section) => (
              <div key={section?.title} className="space-y-4">
                <h4 className="font-semibold text-white">{section?.title}</h4>
                <ul className="space-y-3">
                  {section?.links?.map((link) => (
                    <li key={link?.name}>
                      <Link
                        to={link?.path}
                        className="text-gray-300 hover:text-white transition-brand text-sm"
                      >
                        {link?.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6 text-sm text-gray-300">
              <span>© {currentYear} MyTypist. All rights reserved.</span>
              <div className="flex items-center space-x-1">
                <Icon name="Shield" size={14} className="text-success" />
                <span>SSL Secured</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon name="Globe" size={14} className="text-primary" />
                <span>GDPR Compliant</span>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <div className="flex items-center space-x-2 text-gray-300">
                <Icon name="MapPin" size={14} />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-300">
                <Icon name="Mail" size={14} />
                <span>hello@mytypist.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Trust Badges */}
      <div className="bg-white/5 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Icon name="Award" size={16} />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Icon name="Lock" size={16} />
              <span>256-bit Encryption</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Icon name="CheckCircle" size={16} />
              <span>99.9% Uptime</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <Icon name="Users" size={16} />
              <span>127K+ Users</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;