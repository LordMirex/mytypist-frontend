import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MobilePreviewToggle = ({ 
  currentView, 
  onViewChange, 
  progress, 
  onSaveDraft, 
  onDownload 
}) => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-surface border-t border-border shadow-brand z-40">
      {/* Progress Bar */}
      <div className="w-full bg-muted h-1">
        <div 
          className="bg-primary h-1 transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Controls */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          {/* View Toggle */}
          <div className="flex bg-muted rounded-lg p-1">
            <button
              onClick={() => onViewChange('form')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'form'
                  ? 'bg-surface text-foreground shadow-sm' :'text-text-secondary hover:text-foreground'
              }`}
            >
              <Icon name="Edit3" size={16} />
              Form
            </button>
            <button
              onClick={() => onViewChange('preview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                currentView === 'preview' ?'bg-surface text-foreground shadow-sm' :'text-text-secondary hover:text-foreground'
              }`}
            >
              <Icon name="Eye" size={16} />
              Preview
            </button>
          </div>

          {/* Progress Info */}
          <div className="text-right">
            <div className="text-sm font-medium text-foreground">{progress}%</div>
            <div className="text-xs text-text-secondary">Complete</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            iconName="Save"
            onClick={onSaveDraft}
            className="flex-1"
          >
            Save Draft
          </Button>
          <Button
            variant="default"
            size="sm"
            iconName="Download"
            onClick={onDownload}
            className="flex-1 shadow-conversion"
          >
            Download
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobilePreviewToggle;