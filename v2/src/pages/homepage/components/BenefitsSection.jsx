import React from 'react';
import Icon from '../../../components/AppIcon';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "Eye",
      title: "Instant Preview",
      description: "See your document come to life in real-time as you fill out the form. No surprises, just perfect results every time.",
      features: [
        "Live form-to-PDF generation",
        "Real-time formatting updates",
        "Mobile-responsive previews",
        "Multiple format options"
      ],
      color: "primary"
    },
    {
      icon: "Award",
      title: "Professional Quality",
      description: "Enterprise-grade templates designed by professionals. Every document meets industry standards and best practices.",
      features: [
        "Industry-standard formatting",
        "Professional typography",
        "Consistent branding options",
        "Print-ready quality"
      ],
      color: "success"
    },
    {
      icon: "Zap",
      title: "No Design Skills Required",
      description: "Simply fill in your information and let our intelligent system handle all the formatting, styling, and layout automatically.",
      features: [
        "Smart auto-formatting",
        "Intelligent field validation",
        "One-click customization",
        "Beginner-friendly interface"
      ],
      color: "accent"
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'primary':
        return {
          icon: 'text-primary bg-primary/10',
          title: 'text-primary',
          feature: 'text-primary'
        };
      case 'success':
        return {
          icon: 'text-success bg-success/10',
          title: 'text-success',
          feature: 'text-success'
        };
      case 'accent':
        return {
          icon: 'text-accent bg-accent/10',
          title: 'text-accent',
          feature: 'text-accent'
        };
      default:
        return {
          icon: 'text-text-secondary bg-muted',
          title: 'text-foreground',
          feature: 'text-primary'
        };
    }
  };

  return (
    <section className="py-20 bg-canvas">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Why Choose MyTypist?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Experience the perfect blend of simplicity and professionalism. 
            Create stunning documents without the complexity.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits?.map((benefit, index) => {
            const colorClasses = getColorClasses(benefit?.color);
            
            return (
              <div
                key={index}
                className="bg-surface border border-border rounded-2xl p-8 shadow-brand hover:shadow-lg transition-all duration-300 group"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl ${colorClasses?.icon} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon name={benefit?.icon} size={28} />
                </div>
                {/* Content */}
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className={`text-2xl font-bold ${colorClasses?.title}`}>
                      {benefit?.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {benefit?.description}
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3">
                    {benefit?.features?.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 rounded-full ${colorClasses?.icon} flex items-center justify-center flex-shrink-0`}>
                          <Icon name="Check" size={12} />
                        </div>
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Decorative Element */}
                <div className="mt-8 pt-6 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Available now</span>
                    <div className={`flex items-center space-x-1 ${colorClasses?.feature}`}>
                      <Icon name="ArrowRight" size={14} />
                      <span className="font-medium">Learn more</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">127K+</div>
              <div className="text-sm text-text-secondary">Documents Created</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-success">4.9/5</div>
              <div className="text-sm text-text-secondary">User Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-accent">30s</div>
              <div className="text-sm text-text-secondary">Average Creation Time</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-foreground">50+</div>
              <div className="text-sm text-text-secondary">Template Categories</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;