import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RecentDocuments = ({ documents }) => {
  const formatDate = (date) => {
    return new Date(date)?.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const getDocumentIcon = (type) => {
    const iconMap = {
      'resume': 'User',
      'cover-letter': 'Mail',
      'invoice': 'Receipt',
      'contract': 'FileText',
      'proposal': 'Briefcase',
      'letter': 'MessageSquare'
    };
    return iconMap?.[type] || 'FileText';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Icon name="Clock" size={24} className="text-primary mr-2" />
          <h3 className="text-lg font-semibold text-foreground">Recent Documents</h3>
        </div>
        <Link to="/user-dashboard" className="text-primary hover:text-primary/80 text-sm font-medium">
          View All
        </Link>
      </div>
      {documents?.length === 0 ? (
        <div className="text-center py-8">
          <Icon name="FileText" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="text-lg font-medium text-foreground mb-2">No documents yet</h4>
          <p className="text-text-secondary mb-4">Create your first professional document to get started</p>
          <Link to="/template-gallery">
            <Button variant="default">
              <Icon name="Plus" size={16} className="mr-2" />
              Browse Templates
            </Button>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {documents?.map((doc) => (
            <div key={doc?.id} className="group border border-border rounded-lg p-4 hover:shadow-brand transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Icon name={getDocumentIcon(doc?.type)} size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground text-sm line-clamp-1">{doc?.title}</h4>
                    <p className="text-text-secondary text-xs">{doc?.type}</p>
                  </div>
                </div>
                
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="p-1 hover:bg-muted rounded">
                    <Icon name="MoreVertical" size={16} className="text-text-secondary" />
                  </button>
                </div>
              </div>

              <div className="mb-3">
                <Image 
                  src={doc?.thumbnail} 
                  alt={`${doc?.title} preview`}
                  className="w-full h-24 object-cover rounded border"
                />
              </div>

              <div className="flex items-center justify-between text-xs text-text-secondary mb-3">
                <span>{formatDate(doc?.createdAt)}</span>
                <div className="flex items-center space-x-3">
                  <span className="flex items-center">
                    <Icon name="Download" size={12} className="mr-1" />
                    {doc?.downloadCount}
                  </span>
                  {doc?.isShared && (
                    <span className="flex items-center">
                      <Icon name="Share2" size={12} className="mr-1" />
                      Shared
                    </span>
                  )}
                </div>
              </div>

              <div className="flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1">
                  <Icon name="Download" size={14} className="mr-1" />
                  Download
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Copy" size={14} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Icon name="Share2" size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecentDocuments;