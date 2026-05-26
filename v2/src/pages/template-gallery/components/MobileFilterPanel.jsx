import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import CategoryFilter from './CategoryFilter';
import SearchFilters from './SearchFilters';

const MobileFilterPanel = ({ 
  isOpen, 
  onClose, 
  categories,
  selectedCategory,
  onCategoryChange,
  expandedCategories,
  onToggleExpanded,
  searchQuery,
  onSearchChange,
  industryFilter,
  onIndustryChange,
  formalityFilter,
  onFormalityChange,
  lengthFilter,
  onLengthChange,
  onClearFilters,
  activeFiltersCount
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      
      {/* Panel */}
      <div className="absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-surface shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border sticky top-0 bg-surface z-10">
          <h2 className="text-lg font-semibold text-foreground">Filters</h2>
          <div className="flex items-center space-x-2">
            {activeFiltersCount > 0 && (
              <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                {activeFiltersCount}
              </span>
            )}
            <button
              onClick={onClose}
              className="p-2 text-text-secondary hover:text-foreground hover:bg-muted rounded-lg transition-brand"
            >
              <Icon name="X" size={20} />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-6">
          {/* Search Filters */}
          <SearchFilters
            searchQuery={searchQuery}
            onSearchChange={onSearchChange}
            industryFilter={industryFilter}
            onIndustryChange={onIndustryChange}
            formalityFilter={formalityFilter}
            onFormalityChange={onFormalityChange}
            lengthFilter={lengthFilter}
            onLengthChange={onLengthChange}
            onClearFilters={onClearFilters}
          />

          {/* Category Filter */}
          <div className="border-t border-border pt-6">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={onCategoryChange}
              expandedCategories={expandedCategories}
              onToggleExpanded={onToggleExpanded}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-surface border-t border-border p-4">
          <div className="flex space-x-3">
            <Button
              variant="outline"
              fullWidth
              onClick={onClearFilters}
              disabled={activeFiltersCount === 0}
            >
              Clear All
            </Button>
            <Button
              variant="default"
              fullWidth
              onClick={onClose}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileFilterPanel;