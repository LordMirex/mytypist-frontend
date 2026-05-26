
import { ReactNode } from 'react';
import SEO from './SEO';

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description: string;
}

const AuthLayout = ({ children, title, description }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-50 via-white to-brand-100">
      <SEO title={title} description={description} />
      <div className="flex flex-col justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <div className="flex justify-center mb-8">
            <div className="relative group">
              {/* Enhanced layered logo design */}
              <div className="relative">
                {/* Background "My" */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl sm:text-7xl font-black text-brand-100/30 select-none transform -rotate-3">
                    My
                  </span>
                </div>
                
                {/* Foreground "Typist" */}
                <div className="relative z-10 bg-gradient-to-br from-brand-600 to-brand-700 rounded-2xl px-6 py-4 shadow-2xl transform group-hover:scale-105 transition-all duration-300">
                  <div className="flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      Typist
                    </span>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse shadow-lg"></div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-brand-300 rounded-full opacity-60"></div>
                <div className="absolute -top-1 left-1/2 w-2 h-2 bg-brand-400 rounded-full opacity-40"></div>
              </div>
              
              {/* Tagline */}
              <div className="text-center mt-4">
                <span className="text-sm sm:text-base text-gray-600 font-medium">
                  Professional Documents Made Simple
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
