
import { Link } from 'react-router-dom';
import { FileText, Crown } from 'lucide-react';

interface LogoProps {
  role: 'guest' | 'user' | 'admin';
}

const Logo = ({ role }: LogoProps) => {
  return (
    <Link to="/" className="flex items-center space-x-3 group will-change-transform">
      <div className="relative">
        {/* Professional logo icon with improved gradient */}
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-brand-primary to-brand-accent text-white shadow-lg shadow-primary/20 transform transition-all duration-200 group-hover:scale-105 group-hover:shadow-xl group-hover:shadow-primary/30">
          <FileText className="w-6 h-6 sm:w-7 sm:h-7" />
        </div>
        
        {/* Enhanced admin crown indicator */}
        {role === "admin" && (
          <div className="absolute -top-1 -right-1 w-5 h-5 sm:w-6 sm:h-6 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
            <Crown className="h-3 w-3 sm:h-3.5 sm:w-3.5 text-white" />
          </div>
        )}
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center">
          <span className="text-xl sm:text-2xl font-bold text-brand-secondary tracking-tight group-hover:text-brand-primary transition-colors duration-200">
            My
          </span>
          <span className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-200">
            Typist
          </span>
        </div>
        <span className="text-xs text-muted-foreground -mt-1 font-medium tracking-wide group-hover:text-primary transition-colors duration-200">
          Document Automation
        </span>
      </div>
    </Link>
  );
};

export default Logo;
