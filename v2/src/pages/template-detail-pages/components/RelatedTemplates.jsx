import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedTemplates = ({ templates }) => {
  return (
    <div className="bg-canvas py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            You Might Also Like
          </h2>
          <p className="text-lg text-text-secondary">
            Similar templates that professionals love
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {templates?.map((template, index) => (
            <div 
              key={index}
              className="bg-surface rounded-xl shadow-sm border border-border hover:shadow-brand transition-all duration-300 group overflow-hidden"
            >
              {/* Template Preview */}
              <div className="relative overflow-hidden">
                <Image
                  src={template?.previewImage}
                  alt={template?.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <Button
                    variant="default"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                    iconName="Eye"
                    iconPosition="left"
                  >
                    Quick Preview
                  </Button>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <span className="bg-primary/90 text-primary-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {template?.category}
                  </span>
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-md px-2 py-1 flex items-center space-x-1">
                  <Icon name="Star" size={12} className="text-accent fill-current" />
                  <span className="text-xs font-medium text-foreground">
                    {template?.rating}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                    {template?.name}
                  </h3>
                  <p className="text-text-secondary text-sm line-clamp-2">
                    {template?.description}
                  </p>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Download" size={14} />
                      <span>{template?.downloads}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{template?.completionTime}</span>
                    </div>
                  </div>
                  
                  {template?.isPremium && (
                    <div className="flex items-center space-x-1 text-xs text-accent font-medium">
                      <Icon name="Crown" size={12} />
                      <span>Premium</span>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link 
                    to={`/template-detail-pages?template=${template?.id}`}
                    className="flex-1"
                  >
                    <Button variant="outline" size="sm" fullWidth>
                      View Details
                    </Button>
                  </Link>
                  <Link 
                    to={`/document-creator-studio?template=${template?.id}`}
                    className="flex-1"
                  >
                    <Button variant="default" size="sm" fullWidth>
                      Create Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/template-gallery">
            <Button 
              variant="outline" 
              size="lg"
              iconName="ArrowRight"
              iconPosition="right"
            >
              Browse All Templates
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RelatedTemplates;