import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SavedDrafts = ({ drafts }) => {
  const getCompletionColor = (percentage) => {
    if (percentage >= 80) return 'text-success';
    if (percentage >= 50) return 'text-warning';
    return 'text-error';
  };

  const getProgressColor = (percentage) => {
    if (percentage >= 80) return 'bg-success';
    if (percentage >= 50) return 'bg-warning';
    return 'bg-error';
  };

  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Icon name="Edit3" size={24} className="text-accent mr-2" />
          <h3 className="text-lg font-semibold text-foreground">Saved Drafts</h3>
          <span className="ml-2 px-2 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
            {drafts?.length}
          </span>
        </div>
        <Link to="/user-dashboard" className="text-primary hover:text-primary/80 text-sm font-medium">
          View All
        </Link>
      </div>
      {drafts?.length === 0 ? (
        <div className="text-center py-8">
          <Icon name="Edit3" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-medium text-foreground mb-2">No drafts saved</h4>
          <p className="text-text-secondary mb-4">Start creating a document and save it as draft</p>
          <Link to="/template-gallery">
            <Button variant="outline">
              <Icon name="Plus" size={16} className="mr-2" />
              Start Creating
            </Button>
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {drafts?.map((draft) => (
            <div key={draft?.id} className="group border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-1 min-w-0">
                  <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <Icon name="FileText" size={20} className="text-accent" />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-foreground text-sm truncate">{draft?.title}</h4>
                    <div className="flex items-center space-x-4 mt-1">
                      <span className="text-text-secondary text-xs">{draft?.templateType}</span>
                      <span className="text-text-secondary text-xs">
                        Last edited {formatDate(draft?.lastModified)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 ml-4">
                  <div className="text-right">
                    <div className={`text-sm font-medium ${getCompletionColor(draft?.completionPercentage)}`}>
                      {draft?.completionPercentage}%
                    </div>
                    <div className="w-16 bg-muted rounded-full h-1.5 mt-1">
                      <div 
                        className={`h-1.5 rounded-full transition-all duration-300 ${getProgressColor(draft?.completionPercentage)}`}
                        style={{ width: `${draft?.completionPercentage}%` }}
                      ></div>
                    </div>
                  </div>

                  <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Link to={`/document-creator-studio?draft=${draft?.id}`}>
                      <Button variant="outline" size="sm">
                        <Icon name="Edit3" size={14} className="mr-1" />
                        Continue
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <Icon name="Trash2" size={14} />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SavedDrafts;