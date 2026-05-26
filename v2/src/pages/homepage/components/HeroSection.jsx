import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const HeroSection = () => {
  const [currentTemplate, setCurrentTemplate] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const templatePreviews = [
    {
      id: 1,
      name: "Business Letter",
      preview: "Professional business correspondence template with company letterhead formatting",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Invoice Template",
      preview: "Clean invoice format with itemized billing and payment terms",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?w=400&h=300&fit=crop"
    },
    {
      id: 3,
      name: "Resume Template",
      preview: "Modern resume layout with skills section and professional formatting",
      image: "https://images.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_1280.jpg?w=400&h=300&fit=crop"
    }
  ];

  const searchSuggestions = [
    { name: "Business Letter", icon: "FileText", count: "2.3k uses" },
    { name: "Invoice Template", icon: "Receipt", count: "1.8k uses" },
    { name: "Resume Builder", icon: "User", count: "3.1k uses" },
    { name: "Cover Letter", icon: "Mail", count: "1.2k uses" },
    { name: "Contract Template", icon: "FileCheck", count: "890 uses" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTemplate((prev) => (prev + 1) % templatePreviews?.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSearchFocus = () => {
    setShowSuggestions(true);
  };

  const handleSearchBlur = () => {
    setTimeout(() => setShowSuggestions(false), 200);
  };

  return (
    <section className="relative bg-gradient-to-br from-canvas via-background to-muted min-h-[calc(100vh-4rem)] flex items-center py-20">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 lg:space-y-10">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight">
                  Professional documents,{' '}
                  <span className="text-primary font-accent bg-gradient-to-r from-primary to-brand-authority bg-clip-text text-transparent">
                    instantly
                  </span>
                </h1>
                
                <p className="text-xl sm:text-2xl lg:text-xl text-text-secondary leading-relaxed max-w-2xl">
                  Transform your ideas into polished documents with our intelligent template system. 
                  No design skills required – just fill, preview, and download.
                </p>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl">
              <div className="relative">
                <Input
                  type="search"
                  placeholder="Search templates... (e.g., business letter, invoice)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e?.target?.value)}
                  onFocus={handleSearchFocus}
                  onBlur={handleSearchBlur}
                  className="pl-14 pr-6 py-4 text-lg border-2 border-border focus:border-primary rounded-xl shadow-subtle hover:shadow-brand transition-all duration-200"
                />
                <Icon 
                  name="Search" 
                  size={22} 
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary"
                />
              </div>

              {/* Search Suggestions */}
              {showSuggestions && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-popover border border-border rounded-xl shadow-brand z-50 animate-fade-in">
                  <div className="p-2">
                    {searchSuggestions?.map((suggestion, index) => (
                      <Link
                        key={index}
                        to="/template-gallery"
                        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-muted transition-brand group"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-brand">
                          <Icon name={suggestion?.icon} size={18} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{suggestion?.name}</div>
                          <div className="text-sm text-text-secondary">{suggestion?.count}</div>
                        </div>
                        <Icon name="ArrowRight" size={16} className="text-text-secondary group-hover:text-primary transition-brand" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
              <Link to="/document-creator-studio">
                <Button 
                  variant="default" 
                  size="lg" 
                  className="shadow-conversion hover:shadow-brand transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
                  iconName="Plus"
                  iconPosition="left"
                >
                  Create Free Document
                </Button>
              </Link>
              
              <Link to="/template-gallery">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="hover:shadow-subtle transition-all duration-300 transform hover:-translate-y-0.5 w-full sm:w-auto"
                  iconName="Grid3X3"
                  iconPosition="left"
                >
                  Browse Templates
                </Button>
              </Link>
            </div>

            {/* Social Proof Counter */}
            <div className="flex items-center space-x-4 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4]?.map((i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-brand-authority border-2 border-background shadow-subtle"
                  ></div>
                ))}
              </div>
              <div className="text-sm text-text-secondary">
                <span className="font-semibold text-foreground">127,439</span> documents created this month
              </div>
            </div>
          </div>

          {/* Right Content - Template Preview */}
          <div className="relative lg:mt-0 mt-12">
            <div className="bg-surface rounded-2xl shadow-brand p-6 sm:p-8 border border-border hover:shadow-elevation transition-all duration-300">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-foreground">Live Preview</h3>
                  <div className="flex space-x-1">
                    {templatePreviews?.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-200 ${
                          index === currentTemplate ? 'bg-primary w-6' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <div className="relative h-64 sm:h-72 bg-muted rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-background to-muted p-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                          <Icon name="FileText" size={16} color="white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            {templatePreviews?.[currentTemplate]?.name}
                          </h4>
                          <p className="text-sm text-text-secondary">Professional Template</p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <div className="h-3 bg-border rounded-full w-3/4 animate-pulse-slow"></div>
                        <div className="h-3 bg-border rounded-full w-1/2 animate-pulse-slow"></div>
                        <div className="h-3 bg-border rounded-full w-5/6 animate-pulse-slow"></div>
                      </div>
                      
                      <div className="pt-4">
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {templatePreviews?.[currentTemplate]?.preview}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-2 text-text-secondary">
                    <Icon name="MousePointer" size={14} />
                    <span>Form → Preview → Download</span>
                  </div>
                  <div className="flex items-center space-x-2 text-success">
                    <Icon name="CheckCircle" size={16} />
                    <span className="font-medium">Ready in 30 seconds</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-accent to-conversion rounded-full flex items-center justify-center shadow-conversion animate-bounce-gentle">
              <Icon name="Zap" size={24} color="white" />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-success to-trust rounded-full flex items-center justify-center shadow-trust animate-pulse-slow">
              <Icon name="Star" size={16} color="white" />
            </div>

            {/* Decorative blur elements */}
            <div className="absolute -z-10 top-1/4 left-1/4 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -z-10 bottom-1/4 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;