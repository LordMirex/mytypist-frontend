import React from 'react';
import Icon from '../../../components/AppIcon';
import Select from '../../../components/ui/Select';

const SortControls = ({ 
  sortBy, 
  onSortChange, 
  viewMode, 
  onViewModeChange, 
  totalResults 
}) => {
  const sortOptions = [
    { value: 'popularity', label: 'Most Popular' },
    { value: 'newest', label: 'Newest First' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'trending', label: 'Trending' },
    { value: 'downloads', label: 'Most Downloaded' },
    { value: 'alphabetical', label: 'A to Z' }
  ];

  return (
    <div className="flex items-center justify-between bg-card border border-border rounded-lg p-4">
      <div className="flex items-center space-x-4">
        <span className="text-sm text-text-secondary">
          {totalResults?.toLocaleString()} templates found
        </span>
      </div>
      <div className="flex items-center space-x-4">
        {/* Sort Dropdown */}
        <div className="flex items-center space-x-2">
          <span className="text-sm text-text-secondary hidden sm:block">Sort by:</span>
          <Select
            options={sortOptions}
            value={sortBy}
            onChange={onSortChange}
            className="min-w-[140px]"
          />
        </div>

        {/* View Mode Toggle */}
        <div className="flex items-center border border-border rounded-lg p-1">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 rounded transition-brand ${
              viewMode === 'grid' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-foreground hover:bg-muted'
            }`}
            title="Grid view"
          >
            <Icon name="Grid3X3" size={16} />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded transition-brand ${
              viewMode === 'list' ?'bg-primary text-primary-foreground' :'text-text-secondary hover:text-foreground hover:bg-muted'
            }`}
            title="List view"
          >
            <Icon name="List" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SortControls;