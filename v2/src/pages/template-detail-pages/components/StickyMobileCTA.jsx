import React, { useState, useEffect } from 'react';
import Button from '../../../components/ui/Button';

const StickyMobileCTA = ({ template, onCreateDocument }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA after scrolling past the hero section
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <div className="bg-surface/95 backdrop-blur-sm border-t border-border p-4 shadow-lg">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1">
            <h4 className="font-semibold text-foreground text-sm line-clamp-1">
              {template?.name}
            </h4>
            <p className="text-xs text-text-secondary">
              {template?.completionTime} • {template?.downloads} downloads
            </p>
          </div>
          
          <Button
            variant="default"
            size="sm"
            className="shadow-conversion flex-shrink-0"
            iconName="FileText"
            iconPosition="left"
            onClick={onCreateDocument}
          >
            Create Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyMobileCTA;