import React from 'react';
import Icon from '../../../components/AppIcon';

const CategoryFilter = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange, 
  expandedCategories, 
  onToggleExpanded 
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-foreground mb-4">Categories</h3>
      {categories?.map((category) => (
        <div key={category?.id} className="space-y-2">
          <div className="flex items-center justify-between">
            <button
              onClick={() => onCategoryChange(category?.id)}
              className={`flex items-center space-x-2 text-sm font-medium transition-brand ${
                selectedCategory === category?.id
                  ? 'text-primary' :'text-text-secondary hover:text-foreground'
              }`}
            >
              <Icon name={category?.icon} size={16} />
              <span>{category?.name}</span>
              <span className="text-xs text-text-secondary">({category?.count})</span>
            </button>
            
            {category?.subcategories && (
              <button
                onClick={() => onToggleExpanded(category?.id)}
                className="p-1 text-text-secondary hover:text-foreground transition-brand"
              >
                <Icon 
                  name={expandedCategories?.includes(category?.id) ? "ChevronDown" : "ChevronRight"} 
                  size={14} 
                />
              </button>
            )}
          </div>
          
          {category?.subcategories && expandedCategories?.includes(category?.id) && (
            <div className="ml-6 space-y-1">
              {category?.subcategories?.map((sub) => (
                <button
                  key={sub?.id}
                  onClick={() => onCategoryChange(sub?.id)}
                  className={`block text-sm transition-brand ${
                    selectedCategory === sub?.id
                      ? 'text-primary' :'text-text-secondary hover:text-foreground'
                  }`}
                >
                  {sub?.name} ({sub?.count})
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryFilter;