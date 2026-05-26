import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecentlyViewed = ({ templates, onClearHistory }) => {
  if (!templates || templates?.length === 0) {
    return null;
  }

  return (
    <div className="bg-card border border-border rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
          <Icon name="History" size={20} />
          <span>Recently Viewed</span>
        </h3>
        <button
          onClick={onClearHistory}
          className="text-sm text-text-secondary hover:text-foreground transition-brand"
        >
          Clear
        </button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {templates?.map((template) => (
          <Link
            key={template?.id}
            to={`/template-detail-pages?id=${template?.id}`}
            className="group block"
          >
            <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted mb-2">
              <Image
                src={template?.previewImage}
                alt={`${template?.name} preview`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <h4 className="text-sm font-medium text-foreground group-hover:text-primary transition-brand line-clamp-2">
              {template?.name}
            </h4>
            <p className="text-xs text-text-secondary mt-1">
              Viewed {template?.viewedAt}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentlyViewed;