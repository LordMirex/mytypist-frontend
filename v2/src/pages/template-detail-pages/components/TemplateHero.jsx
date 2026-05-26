import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TemplateHero = ({ template, onCreateDocument }) => {
  return (
    <div className="bg-gradient-to-br from-canvas to-muted py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="FileText" size={16} />
                <span>{template?.category}</span>
                <Icon name="ChevronRight" size={14} />
                <span>{template?.subcategory}</span>
              </div>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                {template?.name}
              </h1>
              
              <p className="text-xl text-text-secondary leading-relaxed">
                {template?.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Download" size={20} className="text-primary" />
                <span className="text-lg font-semibold text-foreground">
                  {template?.downloads?.toLocaleString()}
                </span>
                <span className="text-text-secondary">downloads</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={20} className="text-accent fill-current" />
                <span className="text-lg font-semibold text-foreground">
                  {template?.rating}
                </span>
                <span className="text-text-secondary">
                  ({template?.reviewCount} reviews)
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg" 
                className="shadow-conversion"
                iconName="FileText"
                iconPosition="left"
                onClick={onCreateDocument}
              >
                Create This Document
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                iconName="Eye"
                iconPosition="left"
              >
                Preview Template
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Shield" size={16} className="text-success" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Clock" size={16} className="text-primary" />
                <span>Ready in 2 minutes</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-text-secondary">
                <Icon name="Download" size={16} className="text-accent" />
                <span>Instant PDF</span>
              </div>
            </div>
          </div>

          {/* Preview Image */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-brand p-8 transform rotate-1 hover:rotate-0 transition-transform duration-300">
              <Image
                src={template?.previewImage}
                alt={`${template?.name} preview`}
                className="w-full h-auto rounded-lg shadow-sm"
              />
              
              {/* Overlay Badge */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Most Popular
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateHero;