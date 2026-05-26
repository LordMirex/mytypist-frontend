import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TrendingTemplates = () => {
  const trendingTemplates = [
    {
      id: 1,
      name: "Business Proposal",
      category: "Business",
      description: "Professional proposal template with executive summary and financial projections",
      usageCount: "2,847",
      rating: 4.9,
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop",
      tags: ["Professional", "Business", "Proposal"]
    },
    {
      id: 2,
      name: "Modern Resume",
      category: "Career",
      description: "Clean, ATS-friendly resume template with skills section and modern design",
      usageCount: "3,921",
      rating: 4.8,
      difficulty: "Easy",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?w=300&h=200&fit=crop",
      tags: ["Resume", "Career", "Modern"]
    },
    {
      id: 3,
      name: "Invoice Template",
      category: "Finance",
      description: "Professional invoice with itemized billing, tax calculations, and payment terms",
      usageCount: "1,834",
      rating: 4.7,
      difficulty: "Easy",
      image: "https://images.pixabay.com/photo/2016/11/27/21/42/stock-1863880_1280.jpg?w=300&h=200&fit=crop",
      tags: ["Invoice", "Finance", "Business"]
    },
    {
      id: 4,
      name: "Cover Letter",
      category: "Career",
      description: "Compelling cover letter template that highlights your strengths and experience",
      usageCount: "1,567",
      rating: 4.6,
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=300&h=200&fit=crop",
      tags: ["Cover Letter", "Career", "Professional"]
    },
    {
      id: 5,
      name: "Contract Agreement",
      category: "Legal",
      description: "Standard contract template with terms, conditions, and signature blocks",
      usageCount: "892",
      rating: 4.5,
      difficulty: "Medium",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?w=300&h=200&fit=crop",
      tags: ["Contract", "Legal", "Agreement"]
    },
    {
      id: 6,
      name: "Project Report",
      category: "Academic",
      description: "Comprehensive project report template with research methodology and findings",
      usageCount: "1,234",
      rating: 4.4,
      difficulty: "Medium",
      image: "https://images.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_1280.jpg?w=300&h=200&fit=crop",
      tags: ["Report", "Academic", "Research"]
    },
    {
      id: 7,
      name: "Meeting Minutes",
      category: "Business",
      description: "Structured meeting minutes template with action items and follow-ups",
      usageCount: "756",
      rating: 4.3,
      difficulty: "Easy",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop",
      tags: ["Meeting", "Business", "Minutes"]
    },
    {
      id: 8,
      name: "Recommendation Letter",
      category: "Academic",
      description: "Professional recommendation letter template for academic and career purposes",
      usageCount: "643",
      rating: 4.2,
      difficulty: "Easy",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?w=300&h=200&fit=crop",
      tags: ["Recommendation", "Academic", "Professional"]
    }
  ];

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy': return 'text-success bg-success/10';
      case 'Medium': return 'text-accent bg-accent/10';
      case 'Hard': return 'text-error bg-error/10';
      default: return 'text-text-secondary bg-muted';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={12}
        className={i < Math.floor(rating) ? 'text-accent fill-current' : 'text-border'}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2">
            <Icon name="TrendingUp" size={24} className="text-primary" />
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
              Trending Templates
            </h2>
          </div>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Discover the most popular document templates used by professionals worldwide. 
            Start creating in seconds with our top-rated designs.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trendingTemplates?.map((template) => (
            <div
              key={template?.id}
              className="bg-surface border border-border rounded-xl overflow-hidden shadow-brand hover:shadow-lg transition-all duration-300 group"
            >
              {/* Template Image */}
              <div className="relative h-48 bg-muted overflow-hidden">
                <img
                  src={template?.image}
                  alt={template?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Difficulty Badge */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(template?.difficulty)}`}>
                    {template?.difficulty}
                  </span>
                </div>

                {/* Usage Count */}
                <div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-sm rounded-lg px-2 py-1">
                  <div className="flex items-center space-x-1 text-white text-xs">
                    <Icon name="Users" size={12} />
                    <span>{template?.usageCount} uses</span>
                  </div>
                </div>
              </div>

              {/* Template Info */}
              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                      {template?.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      {renderStars(template?.rating)}
                      <span className="text-xs text-text-secondary ml-1">
                        {template?.rating}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-brand">
                    {template?.name}
                  </h3>
                  
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {template?.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {template?.tags?.slice(0, 2)?.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs text-text-secondary bg-muted px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {template?.tags?.length > 2 && (
                    <span className="text-xs text-text-secondary">
                      +{template?.tags?.length - 2}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex space-x-2 pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1"
                    iconName="Play"
                    iconPosition="left"
                  >
                    <Link to="/document-creator-studio" className="flex items-center">
                      Quick Start
                    </Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Eye"
                  >
                    <Link to="/template-detail-pages">
                      Preview
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            iconName="ArrowRight"
            iconPosition="right"
          >
            <Link to="/template-gallery" className="flex items-center">
              View All Templates
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrendingTemplates;