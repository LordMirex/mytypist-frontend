import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Input from '../../components/ui/Input';
import CategoryFilter from './components/CategoryFilter';
import SearchFilters from './components/SearchFilters';
import SortControls from './components/SortControls';
import TemplateCard from './components/TemplateCard';
import RecentlyViewed from './components/RecentlyViewed';
import TemplatePreviewModal from './components/TemplatePreviewModal';
import MobileFilterPanel from './components/MobileFilterPanel';

const TemplateGallery = () => {
  const navigate = useNavigate();
  
  // State management
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedCategories, setExpandedCategories] = useState(['business', 'personal']);
  const [searchQuery, setSearchQuery] = useState('');
  const [industryFilter, setIndustryFilter] = useState('all');
  const [formalityFilter, setFormalityFilter] = useState('all');
  const [lengthFilter, setLengthFilter] = useState('all');
  const [sortBy, setSortBy] = useState('popularity');
  const [viewMode, setViewMode] = useState('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);
  const [recentlyViewed, setRecentlyViewed] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Mock data
  const categories = [
    {
      id: 'all',
      name: 'All Templates',
      icon: 'Grid3X3',
      count: 247,
      subcategories: null
    },
    {
      id: 'business',
      name: 'Business',
      icon: 'Briefcase',
      count: 89,
      subcategories: [
        { id: 'business-letters', name: 'Business Letters', count: 23 },
        { id: 'proposals', name: 'Proposals', count: 18 },
        { id: 'invoices', name: 'Invoices', count: 15 },
        { id: 'contracts', name: 'Contracts', count: 12 },
        { id: 'reports', name: 'Reports', count: 21 }
      ]
    },
    {
      id: 'personal',
      name: 'Personal',
      icon: 'User',
      count: 67,
      subcategories: [
        { id: 'cover-letters', name: 'Cover Letters', count: 19 },
        { id: 'resumes', name: 'Resumes', count: 24 },
        { id: 'personal-letters', name: 'Personal Letters', count: 14 },
        { id: 'invitations', name: 'Invitations', count: 10 }
      ]
    },
    {
      id: 'academic',
      name: 'Academic',
      icon: 'GraduationCap',
      count: 54,
      subcategories: [
        { id: 'research-papers', name: 'Research Papers', count: 16 },
        { id: 'thesis', name: 'Thesis', count: 8 },
        { id: 'applications', name: 'Applications', count: 22 },
        { id: 'essays', name: 'Essays', count: 8 }
      ]
    },
    {
      id: 'legal',
      name: 'Legal',
      icon: 'Scale',
      count: 37,
      subcategories: [
        { id: 'agreements', name: 'Agreements', count: 15 },
        { id: 'notices', name: 'Notices', count: 12 },
        { id: 'affidavits', name: 'Affidavits', count: 10 }
      ]
    }
  ];

  const mockTemplates = [
    {
      id: 1,
      name: 'Professional Business Letter',
      description: 'A formal business letter template perfect for corporate communication and official correspondence.',
      previewImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop',
      category: 'business-letters',
      industry: 'all',
      formality: 'formal',
      length: 'short',
      downloadCount: '2.3K',
      rating: 4.8,
      reviewCount: 156,
      estimatedTime: '5 mins',
      difficulty: 'Easy',
      isPremium: false,
      isNew: false,
      tags: ['Business', 'Formal', 'Corporate'],
      features: [
        'Professional letterhead design',
        'Proper business formatting',
        'Multiple layout options',
        'Easy customization'
      ],
      relatedTemplates: [
        { id: 2, name: 'Business Proposal', previewImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=100&h=100&fit=crop', downloadCount: '1.8K' }
      ]
    },
    {
      id: 2,
      name: 'Modern Resume Template',
      description: 'Clean and modern resume template designed to make your professional experience stand out to employers.',
      previewImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop',
      category: 'resumes',
      industry: 'all',
      formality: 'formal',
      length: 'medium',
      downloadCount: '4.1K',
      rating: 4.9,
      reviewCount: 289,
      estimatedTime: '15 mins',
      difficulty: 'Medium',
      isPremium: true,
      isNew: true,
      tags: ['Resume', 'Professional', 'Modern'],
      features: [
        'ATS-friendly format',
        'Multiple color schemes',
        'Skills section templates',
        'Cover letter included'
      ],
      relatedTemplates: []
    },
    {
      id: 3,
      name: 'Project Proposal Template',
      description: 'Comprehensive project proposal template for presenting your ideas professionally to clients and stakeholders.',
      previewImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=500&fit=crop',
      category: 'proposals',
      industry: 'consulting',
      formality: 'formal',
      length: 'long',
      downloadCount: '1.7K',
      rating: 4.7,
      reviewCount: 98,
      estimatedTime: '25 mins',
      difficulty: 'Hard',
      isPremium: false,
      isNew: false,
      tags: ['Proposal', 'Project', 'Business'],
      features: [
        'Executive summary section',
        'Budget breakdown tables',
        'Timeline visualization',
        'Risk assessment framework'
      ],
      relatedTemplates: []
    },
    {
      id: 4,
      name: 'Invoice Template',
      description: 'Professional invoice template for freelancers and small businesses with automatic calculations.',
      previewImage: 'https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=400&h=500&fit=crop',
      category: 'invoices',
      industry: 'finance',
      formality: 'formal',
      length: 'short',
      downloadCount: '3.2K',
      rating: 4.6,
      reviewCount: 187,
      estimatedTime: '8 mins',
      difficulty: 'Easy',
      isPremium: false,
      isNew: false,
      tags: ['Invoice', 'Finance', 'Business'],
      features: [
        'Automatic tax calculations',
        'Multiple currency support',
        'Payment terms section',
        'Professional branding'
      ],
      relatedTemplates: []
    },
    {
      id: 5,
      name: 'Cover Letter Template',
      description: 'Compelling cover letter template that helps you make a strong first impression with potential employers.',
      previewImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=500&fit=crop',
      category: 'cover-letters',
      industry: 'all',
      formality: 'formal',
      length: 'short',
      downloadCount: '2.9K',
      rating: 4.5,
      reviewCount: 142,
      estimatedTime: '12 mins',
      difficulty: 'Medium',
      isPremium: false,
      isNew: true,
      tags: ['Cover Letter', 'Job Application', 'Professional'],
      features: [
        'Industry-specific examples',
        'Personalization guidelines',
        'ATS optimization',
        'Multiple formats'
      ],
      relatedTemplates: []
    },
    {
      id: 6,
      name: 'Research Paper Template',
      description: 'Academic research paper template with proper formatting for citations, references, and scholarly writing.',
      previewImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=500&fit=crop',
      category: 'research-papers',
      industry: 'education',
      formality: 'formal',
      length: 'long',
      downloadCount: '1.4K',
      rating: 4.8,
      reviewCount: 76,
      estimatedTime: '30 mins',
      difficulty: 'Hard',
      isPremium: true,
      isNew: false,
      tags: ['Research', 'Academic', 'Citation'],
      features: [
        'APA/MLA formatting',
        'Citation management',
        'Bibliography templates',
        'Abstract guidelines'
      ],
      relatedTemplates: []
    }
  ];

  const mockRecentlyViewed = [
    {
      id: 1,
      name: 'Professional Business Letter',
      previewImage: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=200&h=250&fit=crop',
      viewedAt: '2 hours ago'
    },
    {
      id: 3,
      name: 'Project Proposal Template',
      previewImage: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=200&h=250&fit=crop',
      viewedAt: '1 day ago'
    }
  ];

  // Filter and sort templates
  const filteredAndSortedTemplates = useMemo(() => {
    let filtered = mockTemplates?.filter(template => {
      // Category filter
      if (selectedCategory !== 'all' && template?.category !== selectedCategory) {
        return false;
      }

      // Search query
      if (searchQuery && !template?.name?.toLowerCase()?.includes(searchQuery?.toLowerCase()) &&
          !template?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) &&
          !template?.tags?.some(tag => tag?.toLowerCase()?.includes(searchQuery?.toLowerCase()))) {
        return false;
      }

      // Industry filter
      if (industryFilter !== 'all' && template?.industry !== industryFilter && template?.industry !== 'all') {
        return false;
      }

      // Formality filter
      if (formalityFilter !== 'all' && template?.formality !== formalityFilter) {
        return false;
      }

      // Length filter
      if (lengthFilter !== 'all' && template?.length !== lengthFilter) {
        return false;
      }

      return true;
    });

    // Sort templates
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'popularity':
          return parseInt(b?.downloadCount?.replace('K', '000')?.replace('.', '')) - 
                 parseInt(a?.downloadCount?.replace('K', '000')?.replace('.', ''));
        case 'newest':
          return b?.isNew - a?.isNew;
        case 'rating':
          return b?.rating - a?.rating;
        case 'trending':
          return (b?.isNew ? 1 : 0) + (b?.rating > 4.7 ? 1 : 0) - 
                 ((a?.isNew ? 1 : 0) + (a?.rating > 4.7 ? 1 : 0));
        case 'downloads':
          return parseInt(b?.downloadCount?.replace('K', '000')?.replace('.', '')) - 
                 parseInt(a?.downloadCount?.replace('K', '000')?.replace('.', ''));
        case 'alphabetical':
          return a?.name?.localeCompare(b?.name);
        default:
          return 0;
      }
    });

    return filtered;
  }, [selectedCategory, searchQuery, industryFilter, formalityFilter, lengthFilter, sortBy]);

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setPage(1);
  };

  // Handle category expansion
  const handleToggleExpanded = (categoryId) => {
    setExpandedCategories(prev => 
      prev?.includes(categoryId) 
        ? prev?.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  // Clear all filters
  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSearchQuery('');
    setIndustryFilter('all');
    setFormalityFilter('all');
    setLengthFilter('all');
  };

  // Template actions
  const handlePreviewTemplate = (template) => {
    setSelectedTemplate(template);
    setIsPreviewModalOpen(true);
    
    // Add to recently viewed
    setRecentlyViewed(prev => {
      const filtered = prev?.filter(item => item?.id !== template?.id);
      return [{
        id: template?.id,
        name: template?.name,
        previewImage: template?.previewImage,
        viewedAt: 'Just now'
      }, ...filtered]?.slice(0, 6);
    });
  };

  const handleQuickCreate = (template) => {
    navigate(`/document-creator-studio?template=${template?.id}`);
  };

  const handleCreateDocument = (template) => {
    setIsPreviewModalOpen(false);
    navigate(`/document-creator-studio?template=${template?.id}`);
  };

  const handleClearRecentlyViewed = () => {
    setRecentlyViewed([]);
  };

  // Calculate active filters count
  const activeFiltersCount = [
    selectedCategory !== 'all',
    searchQuery !== '',
    industryFilter !== 'all',
    formalityFilter !== 'all',
    lengthFilter !== 'all'
  ]?.filter(Boolean)?.length;

  // Initialize recently viewed from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('recentlyViewed');
    if (saved) {
      setRecentlyViewed(JSON.parse(saved));
    } else {
      setRecentlyViewed(mockRecentlyViewed);
    }
  }, []);

  // Save recently viewed to localStorage
  useEffect(() => {
    localStorage.setItem('recentlyViewed', JSON.stringify(recentlyViewed));
  }, [recentlyViewed]);

  return (
    <>
      <Helmet>
        <title>Template Gallery - MyTypist | 50+ Professional Document Templates</title>
        <meta 
          name="description" 
          content="Explore our collection of 50+ professional document templates. Business letters, invoices, resumes, contracts, and more. All customizable and ready to use."
        />
        <meta name="keywords" content="document templates, business templates, resume templates, invoice templates, letter templates" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Enhanced Hero Section */}
        <section className="pt-16 bg-gradient-to-br from-canvas via-background to-muted border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Professional Document{' '}
                  <span className="text-primary font-accent bg-gradient-to-r from-primary to-brand-authority bg-clip-text text-transparent">
                    Templates
                  </span>
                </h1>
                <p className="text-xl sm:text-2xl lg:text-xl text-text-secondary leading-relaxed">
                  Choose from our curated collection of templates designed for modern professionals
                </p>
              </div>
              
              {/* Enhanced Main Search */}
              <div className="max-w-2xl mx-auto relative">
                <Input
                  type="search"
                  placeholder="Search templates... (business letter, invoice, resume)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  className="pl-14 pr-6 py-4 text-lg border-2 border-border focus:border-primary rounded-xl shadow-subtle hover:shadow-brand transition-all duration-200"
                />
                <Icon 
                  name="Search" 
                  size={22} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary"
                />
              </div>
              
              {/* Enhanced Quick Stats */}
              <div className="flex items-center justify-center flex-wrap gap-6 sm:gap-8 text-sm text-text-secondary pt-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name="FileText" size={16} className="text-primary" />
                  </div>
                  <span className="font-medium">{mockTemplates?.length}+ Templates</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                    <Icon name="Users" size={16} className="text-success" />
                  </div>
                  <span className="font-medium">127K+ Users</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name="Star" size={16} className="text-accent" />
                  </div>
                  <span className="font-medium">4.8/5 Rating</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Recently Viewed */}
          {recentlyViewed?.length > 0 && (
            <div className="mb-10">
              <RecentlyViewed 
                templates={recentlyViewed}
                onClearHistory={handleClearRecentlyViewed}
              />
            </div>
          )}

          <div className="flex flex-col xl:flex-row gap-8">
            {/* Desktop Sidebar */}
            <div className="hidden xl:block w-80 flex-shrink-0">
              <div className="sticky top-24 space-y-6">
                {/* Search Filters */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-subtle hover:shadow-brand transition-all duration-200">
                  <SearchFilters
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    industryFilter={industryFilter}
                    onIndustryChange={setIndustryFilter}
                    formalityFilter={formalityFilter}
                    onFormalityChange={setFormalityFilter}
                    lengthFilter={lengthFilter}
                    onLengthChange={setLengthFilter}
                    onClearFilters={handleClearFilters}
                  />
                </div>

                {/* Category Filter */}
                <div className="bg-card border border-border rounded-xl p-6 shadow-subtle hover:shadow-brand transition-all duration-200">
                  <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={handleCategoryChange}
                    expandedCategories={expandedCategories}
                    onToggleExpanded={handleToggleExpanded}
                  />
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Mobile Filter Button & Sort Controls */}
              <div className="flex items-center justify-between mb-8 xl:hidden">
                <Button
                  variant="outline"
                  onClick={() => setIsMobileFilterOpen(true)}
                  iconName="Filter"
                  iconPosition="left"
                  className="hover:shadow-subtle transition-all duration-200"
                >
                  Filters
                  {activeFiltersCount > 0 && (
                    <span className="ml-2 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full animate-scale-in">
                      {activeFiltersCount}
                    </span>
                  )}
                </Button>
              </div>

              {/* Sort Controls */}
              <div className="mb-8">
                <SortControls
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  viewMode={viewMode}
                  onViewModeChange={setViewMode}
                  totalResults={filteredAndSortedTemplates?.length}
                />
              </div>

              {/* Templates Grid */}
              {filteredAndSortedTemplates?.length > 0 ? (
                <div className={`grid gap-6 ${
                  viewMode === 'grid' ?'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4' :'grid-cols-1'
                }`}>
                  {filteredAndSortedTemplates?.map((template, index) => (
                    <div key={template?.id} className="animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                      <TemplateCard
                        template={template}
                        onPreview={handlePreviewTemplate}
                        onQuickCreate={handleQuickCreate}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16 animate-fade-in">
                  <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="Search" size={32} className="text-text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">No templates found</h3>
                  <p className="text-text-secondary mb-6 max-w-md mx-auto">
                    Try adjusting your filters or search terms to find what you're looking for.
                  </p>
                  <Button 
                    variant="outline" 
                    onClick={handleClearFilters}
                    className="hover:shadow-subtle transition-all duration-200"
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}

              {/* Load More Button */}
              {filteredAndSortedTemplates?.length > 0 && (
                <div className="text-center mt-12">
                  <Button
                    variant="outline"
                    loading={isLoading}
                    onClick={() => setPage(prev => prev + 1)}
                    iconName="ChevronDown"
                    iconPosition="right"
                    className="hover:shadow-subtle transition-all duration-200"
                  >
                    Load More Templates
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Filter Panel */}
        <MobileFilterPanel
          isOpen={isMobileFilterOpen}
          onClose={() => setIsMobileFilterOpen(false)}
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
          expandedCategories={expandedCategories}
          onToggleExpanded={handleToggleExpanded}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          industryFilter={industryFilter}
          onIndustryChange={setIndustryFilter}
          formalityFilter={formalityFilter}
          onFormalityChange={setFormalityFilter}
          lengthFilter={lengthFilter}
          onLengthChange={setLengthFilter}
          onClearFilters={handleClearFilters}
          activeFiltersCount={activeFiltersCount}
        />
        
        {/* Template Preview Modal */}
        <TemplatePreviewModal
          template={selectedTemplate}
          isOpen={isPreviewModalOpen}
          onClose={() => setIsPreviewModalOpen(false)}
          onCreateDocument={handleCreateDocument}
        />
      </div>
    </>
  );
};

export default TemplateGallery;