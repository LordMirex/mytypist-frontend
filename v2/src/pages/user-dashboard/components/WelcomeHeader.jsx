import React from 'react';
import Icon from '../../../components/AppIcon';

const WelcomeHeader = ({ userName, documentsCreated, timeSaved }) => {
  const getGreeting = () => {
    const hour = new Date()?.getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 17) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="bg-gradient-to-r from-primary to-brand-authority rounded-xl p-6 text-white mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {getGreeting()}, {userName}!
          </h1>
          <p className="text-blue-100 text-lg">
            Ready to create your next professional document?
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon name="FileText" size={20} className="mr-2" />
              <span className="text-2xl font-bold">{documentsCreated}</span>
            </div>
            <p className="text-blue-100 text-sm">Documents Created</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
            <div className="flex items-center justify-center mb-2">
              <Icon name="Clock" size={20} className="mr-2" />
              <span className="text-2xl font-bold">{timeSaved}h</span>
            </div>
            <p className="text-blue-100 text-sm">Time Saved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeHeader;