import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TemplatePreviewModal = ({ template, isOpen, onClose, onCreateDocument }) => {
  if (!isOpen || !template) return null;

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < Math.floor(rating) ? 'text-warning fill-current' : 'text-muted'}
      />
    ));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-card rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">{template?.name}</h2>
            <div className="flex items-center space-x-4 mt-2">
              <div className="flex items-center space-x-1">
                {renderStars(template?.rating)}
                <span className="text-sm text-text-secondary ml-1">
                  ({template?.reviewCount} reviews)
                </span>
              </div>
              <span className="text-sm text-text-secondary">
                Downloaded {template?.downloadCount} times
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-foreground hover:bg-muted rounded-lg transition-brand"
          >
            <Icon name="X" size={24} />
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row max-h-[calc(90vh-140px)]">
          {/* Preview Image */}
          <div className="lg:w-1/2 p-6 flex items-center justify-center bg-muted/30">
            <div className="max-w-md w-full">
              <Image
                src={template?.previewImage}
                alt={`${template?.name} preview`}
                className="w-full rounded-lg shadow-brand"
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-1/2 p-6 overflow-y-auto">
            <div className="space-y-6">
              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Description</h3>
                <p className="text-text-secondary leading-relaxed">
                  {template?.description}
                </p>
              </div>

              {/* Template Info */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">Completion Time</h4>
                  <div className="flex items-center space-x-1 text-text-secondary">
                    <Icon name="Clock" size={14} />
                    <span className="text-sm">{template?.estimatedTime}</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-1">Difficulty</h4>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    template?.difficulty === 'Easy' ? 'text-success bg-success/10' :
                    template?.difficulty === 'Medium'? 'text-warning bg-warning/10' : 'text-error bg-error/10'
                  }`}>
                    {template?.difficulty}
                  </span>
                </div>
              </div>

              {/* Features */}
              {template?.features && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">What's Included</h3>
                  <ul className="space-y-2">
                    {template?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              {template?.tags && template?.tags?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {template?.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Templates */}
              {template?.relatedTemplates && template?.relatedTemplates?.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">You Might Also Like</h3>
                  <div className="grid grid-cols-2 gap-3">
                    {template?.relatedTemplates?.slice(0, 4)?.map((related) => (
                      <div key={related?.id} className="flex items-center space-x-2 p-2 bg-muted/50 rounded-lg">
                        <div className="w-12 h-12 rounded overflow-hidden bg-muted">
                          <Image
                            src={related?.previewImage}
                            alt={related?.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground truncate">
                            {related?.name}
                          </p>
                          <p className="text-xs text-text-secondary">
                            {related?.downloadCount} downloads
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted/30">
          <div className="text-sm text-text-secondary">
            {template?.isPremium ? (
              <span className="flex items-center space-x-1">
                <Icon name="Crown" size={16} className="text-accent" />
                <span>Premium Template</span>
              </span>
            ) : (
              <span>Free Template</span>
            )}
          </div>
          <div className="flex space-x-3">
            <Button variant="outline" onClick={onClose}>
              Close
            </Button>
            <Button 
              variant="default" 
              onClick={() => onCreateDocument(template)}
              iconName="Plus"
              iconPosition="left"
              className="shadow-conversion"
            >
              Create Document
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewModal;