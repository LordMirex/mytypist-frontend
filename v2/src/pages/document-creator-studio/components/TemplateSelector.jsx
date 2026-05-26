import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const TemplateSelector = ({ selectedTemplate, onTemplateSelect, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock template data
  const templates = [
    {
      id: 'business-letter-1',
      name: 'Professional Business Letter',
      type: 'business-letter',
      category: 'business',
      description: 'Formal business correspondence template',
      thumbnail: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=400&fit=crop',
      downloads: 15420,
      rating: 4.8,
      tags: ['business', 'formal', 'correspondence']
    },
    {
      id: 'resume-modern-1',
      name: 'Modern Professional Resume',
      type: 'resume',
      category: 'career',
      description: 'Clean, modern resume template',
      thumbnail: 'https://images.unsplash.com/photo-1586281380614-67ca8b3f618c?w=300&h=400&fit=crop',
      downloads: 28350,
      rating: 4.9,
      tags: ['resume', 'modern', 'professional']
    },
    {
      id: 'invoice-standard-1',
      name: 'Standard Business Invoice',
      type: 'invoice',
      category: 'business',
      description: 'Professional invoice template',
      thumbnail: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=400&fit=crop',
      downloads: 12890,
      rating: 4.7,
      tags: ['invoice', 'billing', 'business']
    },
    {
      id: 'cover-letter-1',
      name: 'Executive Cover Letter',
      type: 'cover-letter',
      category: 'career',
      description: 'Professional cover letter template',
      thumbnail: 'https://images.unsplash.com/photo-1586281380923-c0d5b9b2f0c8?w=300&h=400&fit=crop',
      downloads: 9650,
      rating: 4.6,
      tags: ['cover-letter', 'career', 'professional']
    },
    {
      id: 'proposal-1',
      name: 'Business Proposal',
      type: 'proposal',
      category: 'business',
      description: 'Comprehensive business proposal template',
      thumbnail: 'https://images.unsplash.com/photo-1554224154-26032fced8bd?w=300&h=400&fit=crop',
      downloads: 7230,
      rating: 4.5,
      tags: ['proposal', 'business', 'presentation']
    },
    {
      id: 'contract-1',
      name: 'Service Agreement',
      type: 'contract',
      category: 'legal',
      description: 'Professional service contract template',
      thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=300&h=400&fit=crop',
      downloads: 5480,
      rating: 4.4,
      tags: ['contract', 'legal', 'agreement']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Templates', icon: 'Grid3x3' },
    { id: 'business', name: 'Business', icon: 'Briefcase' },
    { id: 'career', name: 'Career', icon: 'User' },
    { id: 'legal', name: 'Legal', icon: 'Scale' },
    { id: 'personal', name: 'Personal', icon: 'Heart' }
  ];

  const filteredTemplates = templates?.filter(template => {
    const matchesSearch = template?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
                         template?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || template?.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleTemplateSelect = (template) => {
    onTemplateSelect(template);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-surface rounded-xl shadow-brand max-w-6xl w-full max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Choose a Template</h2>
            <p className="text-sm text-text-secondary mt-1">
              Select a template to start creating your document
            </p>
          </div>
          <Button variant="ghost" size="sm" iconName="X" onClick={onClose} />
        </div>

        {/* Search and Filters */}
        <div className="p-6 border-b border-border">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e?.target?.value)}
                className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto">
              {categories?.map(category => (
                <button
                  key={category?.id}
                  onClick={() => setSelectedCategory(category?.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category?.id
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-text-secondary hover:text-foreground'
                  }`}
                >
                  <Icon name={category?.icon} size={16} />
                  {category?.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Templates Grid */}
        <div className="flex-1 overflow-y-auto p-6">
          {filteredTemplates?.length === 0 ? (
            <div className="text-center py-12">
              <Icon name="Search" size={48} className="mx-auto mb-4 text-text-secondary opacity-50" />
              <h3 className="text-lg font-medium text-foreground mb-2">No templates found</h3>
              <p className="text-text-secondary">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredTemplates?.map(template => (
                <div
                  key={template?.id}
                  className={`group cursor-pointer bg-card rounded-lg border-2 transition-all hover:shadow-brand ${
                    selectedTemplate?.id === template?.id
                      ? 'border-primary shadow-brand'
                      : 'border-border hover:border-primary/50'
                  }`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  {/* Template Thumbnail */}
                  <div className="aspect-[3/4] overflow-hidden rounded-t-lg">
                    <Image
                      src={template?.thumbnail}
                      alt={template?.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                  </div>

                  {/* Template Info */}
                  <div className="p-4">
                    <h3 className="font-medium text-foreground mb-1 line-clamp-1">
                      {template?.name}
                    </h3>
                    <p className="text-sm text-text-secondary mb-3 line-clamp-2">
                      {template?.description}
                    </p>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-xs text-text-secondary">
                      <div className="flex items-center gap-1">
                        <Icon name="Download" size={12} />
                        <span>{template?.downloads?.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Star" size={12} className="text-accent" />
                        <span>{template?.rating}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mt-2">
                      {template?.tags?.slice(0, 2)?.map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted text-xs text-text-secondary rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Selection Indicator */}
                  {selectedTemplate?.id === template?.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Icon name="Check" size={14} color="white" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-border">
          <div className="flex items-center justify-between">
            <p className="text-sm text-text-secondary">
              {filteredTemplates?.length} template{filteredTemplates?.length !== 1 ? 's' : ''} available
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" onClick={onClose}>
                Cancel
              </Button>
              <Button
                variant="default"
                disabled={!selectedTemplate}
                onClick={() => selectedTemplate && onClose()}
                className="shadow-conversion"
              >
                Use Template
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;