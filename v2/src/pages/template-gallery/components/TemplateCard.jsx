import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TemplateCard = ({ template, onPreview, onQuickCreate }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getDifficultyColor = (level) => {
    switch (level) {
      case 'Easy': return 'text-success bg-success/10';
      case 'Medium': return 'text-warning bg-warning/10';
      case 'Hard': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={12}
        className={i < Math.floor(rating) ? 'text-warning fill-current' : 'text-muted'}
      />
    ));
  };

  return (
    <div
      className="bg-card border border-border rounded-lg overflow-hidden shadow-brand hover:shadow-lg transition-all duration-300 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Template Preview Image */}
      <div className="relative aspect-[3/4] overflow-hidden bg-muted">
        <Image
          src={template?.previewImage}
          alt={`${template?.name} template preview`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Overlay on hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-2 transition-opacity duration-300">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onPreview(template)}
              iconName="Eye"
              iconPosition="left"
            >
              Preview
            </Button>
            <Button
              variant="default"
              size="sm"
              onClick={() => onQuickCreate(template)}
              iconName="Plus"
              iconPosition="left"
            >
              Create
            </Button>
          </div>
        )}

        {/* Premium Badge */}
        {template?.isPremium && (
          <div className="absolute top-2 right-2 bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-medium">
            Premium
          </div>
        )}

        {/* New Badge */}
        {template?.isNew && (
          <div className="absolute top-2 left-2 bg-success text-success-foreground px-2 py-1 rounded text-xs font-medium">
            New
          </div>
        )}
      </div>
      {/* Template Info */}
      <div className="p-4 space-y-3">
        <div>
          <Link
            to={`/template-detail-pages?id=${template?.id}`}
            className="text-base font-semibold text-foreground hover:text-primary transition-brand line-clamp-2"
          >
            {template?.name}
          </Link>
          <p className="text-sm text-text-secondary mt-1 line-clamp-2">
            {template?.description}
          </p>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-between text-xs text-text-secondary">
          <div className="flex items-center space-x-1">
            <Icon name="Download" size={12} />
            <span>{template?.downloadCount}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            {renderStars(template?.rating)}
            <span className="ml-1">({template?.reviewCount})</span>
          </div>
        </div>

        {/* Completion Time & Difficulty */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-xs text-text-secondary">
            <Icon name="Clock" size={12} />
            <span>{template?.estimatedTime}</span>
          </div>
          
          <span className={`px-2 py-1 rounded text-xs font-medium ${getDifficultyColor(template?.difficulty)}`}>
            {template?.difficulty}
          </span>
        </div>

        {/* Tags */}
        {template?.tags && template?.tags?.length > 0 && (
          <div className="flex flex-wrap gap-1">
            {template?.tags?.slice(0, 3)?.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-muted text-text-secondary text-xs rounded"
              >
                {tag}
              </span>
            ))}
            {template?.tags?.length > 3 && (
              <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded">
                +{template?.tags?.length - 3}
              </span>
            )}
          </div>
        )}

        {/* Quick Action Buttons - Mobile */}
        <div className="flex space-x-2 md:hidden">
          <Button
            variant="outline"
            size="sm"
            fullWidth
            onClick={() => onPreview(template)}
            iconName="Eye"
            iconPosition="left"
          >
            Preview
          </Button>
          <Button
            variant="default"
            size="sm"
            fullWidth
            onClick={() => onQuickCreate(template)}
            iconName="Plus"
            iconPosition="left"
          >
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TemplateCard;