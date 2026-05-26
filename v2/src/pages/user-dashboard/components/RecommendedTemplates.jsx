import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecommendedTemplates = ({ templates }) => {
  const getTemplateIcon = (category) => {
    const iconMap = {
      'business': 'Briefcase',
      'personal': 'User',
      'academic': 'GraduationCap',
      'legal': 'Scale',
      'creative': 'Palette'
    };
    return iconMap?.[category] || 'FileText';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Icon name="Sparkles" size={24} className="text-success mr-2" />
          <h3 className="text-lg font-semibold text-foreground">Recommended for You</h3>
          <span className="ml-2 px-2 py-1 bg-success/10 text-success text-xs font-medium rounded-full">
            Based on your usage
          </span>
        </div>
        <Link to="/template-gallery" className="text-primary hover:text-primary/80 text-sm font-medium">
          Browse All
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {templates?.map((template) => (
          <div key={template?.id} className="group border border-border rounded-lg overflow-hidden hover:shadow-brand transition-all duration-200">
            <div className="relative">
              <Image 
                src={template?.preview} 
                alt={`${template?.name} template preview`}
                className="w-full h-32 object-cover"
              />
              <div className="absolute top-2 right-2">
                <span className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                  {template?.category}
                </span>
              </div>
              {template?.isPopular && (
                <div className="absolute top-2 left-2">
                  <span className="px-2 py-1 bg-success text-white text-xs rounded-full flex items-center">
                    <Icon name="TrendingUp" size={12} className="mr-1" />
                    Popular
                  </span>
                </div>
              )}
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center">
                  <Icon name={getTemplateIcon(template?.category)} size={16} className="text-primary mr-2" />
                  <h4 className="font-medium text-foreground text-sm line-clamp-1">{template?.name}</h4>
                </div>
              </div>

              <p className="text-text-secondary text-xs mb-3 line-clamp-2">{template?.description}</p>

              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3 text-xs text-text-secondary">
                  <span className="flex items-center">
                    <Icon name="Users" size={12} className="mr-1" />
                    {template?.usageCount}
                  </span>
                  <span className="flex items-center">
                    <Icon name="Star" size={12} className="mr-1" />
                    {template?.rating}
                  </span>
                </div>
                <span className="text-xs text-success font-medium">
                  {template?.matchPercentage}% match
                </span>
              </div>

              <div className="flex space-x-2">
                <Link to={`/template-detail-pages?id=${template?.id}`} className="flex-1">
                  <Button variant="outline" size="sm" fullWidth>
                    <Icon name="Eye" size={14} className="mr-1" />
                    Preview
                  </Button>
                </Link>
                <Link to={`/document-creator-studio?template=${template?.id}`}>
                  <Button variant="default" size="sm" className="shadow-conversion">
                    <Icon name="Plus" size={14} className="mr-1" />
                    Use
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendedTemplates;