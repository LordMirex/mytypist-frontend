import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const QuickStartCards = ({ popularTemplates, newFeatures }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Popular Templates Card */}
      <div className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Icon name="TrendingUp" size={24} className="text-primary mr-2" />
          <h3 className="text-lg font-semibold text-foreground">Popular This Week</h3>
        </div>
        
        <div className="space-y-3 mb-4">
          {popularTemplates?.map((template, index) => (
            <div key={template?.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-6 h-6 bg-primary text-white text-xs font-bold rounded-full flex items-center justify-center mr-3">
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-medium text-foreground text-sm">{template?.name}</h4>
                  <p className="text-text-secondary text-xs">{template?.usageCount} uses this week</p>
                </div>
              </div>
              <Link to={`/document-creator-studio?template=${template?.id}`}>
                <Button variant="ghost" size="sm">
                  <Icon name="ArrowRight" size={14} />
                </Button>
              </Link>
            </div>
          ))}
        </div>
        
        <Link to="/template-gallery?sort=popular">
          <Button variant="outline" fullWidth>
            <Icon name="TrendingUp" size={16} className="mr-2" />
            View All Popular
          </Button>
        </Link>
      </div>
      {/* New Features Card */}
      <div className="bg-gradient-to-br from-success/5 to-success/10 border border-success/20 rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Icon name="Sparkles" size={24} className="text-success mr-2" />
          <h3 className="text-lg font-semibold text-foreground">What's New</h3>
          <span className="ml-2 px-2 py-1 bg-success text-white text-xs font-medium rounded-full">
            NEW
          </span>
        </div>
        
        <div className="space-y-4 mb-4">
          {newFeatures?.map((feature) => (
            <div key={feature?.id} className="border-l-2 border-success pl-4">
              <h4 className="font-medium text-foreground text-sm mb-1">{feature?.title}</h4>
              <p className="text-text-secondary text-xs mb-2">{feature?.description}</p>
              <span className="text-success text-xs font-medium">{feature?.releaseDate}</span>
            </div>
          ))}
        </div>
        
        <Button variant="outline" fullWidth>
          <Icon name="ExternalLink" size={16} className="mr-2" />
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default QuickStartCards;