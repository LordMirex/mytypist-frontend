import React from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const SearchFilters = ({ 
  searchQuery, 
  onSearchChange, 
  industryFilter, 
  onIndustryChange,
  formalityFilter,
  onFormalityChange,
  lengthFilter,
  onLengthChange,
  onClearFilters 
}) => {
  const industryOptions = [
    { value: 'all', label: 'All Industries' },
    { value: 'technology', label: 'Technology' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'education', label: 'Education' },
    { value: 'retail', label: 'Retail' },
    { value: 'consulting', label: 'Consulting' }
  ];

  const formalityOptions = [
    { value: 'all', label: 'All Levels' },
    { value: 'formal', label: 'Formal' },
    { value: 'semi-formal', label: 'Semi-formal' },
    { value: 'casual', label: 'Casual' }
  ];

  const lengthOptions = [
    { value: 'all', label: 'Any Length' },
    { value: 'short', label: 'Short (1 page)' },
    { value: 'medium', label: 'Medium (2-3 pages)' },
    { value: 'long', label: 'Long (4+ pages)' }
  ];

  const hasActiveFilters = industryFilter !== 'all' || formalityFilter !== 'all' || lengthFilter !== 'all';

  return (
    <div className="space-y-4">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search templates..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e?.target?.value)}
          className="pl-10"
        />
        <Icon 
          name="Search" 
          size={18} 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" 
        />
      </div>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-medium text-foreground">Filters</h4>
          {hasActiveFilters && (
            <button
              onClick={onClearFilters}
              className="text-xs text-primary hover:text-primary/80 transition-brand"
            >
              Clear all
            </button>
          )}
        </div>

        <Select
          label="Industry"
          options={industryOptions}
          value={industryFilter}
          onChange={onIndustryChange}
        />

        <Select
          label="Formality Level"
          options={formalityOptions}
          value={formalityFilter}
          onChange={onFormalityChange}
        />

        <Select
          label="Document Length"
          options={lengthOptions}
          value={lengthFilter}
          onChange={onLengthChange}
        />
      </div>
    </div>
  );
};

export default SearchFilters;