import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Marketing Director",
      company: "TechStart Inc.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `MyTypist saved me 15 hours per week on document creation. The ROI was immediate - I recovered my subscription cost in the first month just from time savings alone.`,
      metrics: {
        timeSaved: "15 hours/week",
        roiPeriod: "1 month",
        costSavings: "$2,400/month"
      },
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Small Business Owner",
      company: "Rodriguez Consulting",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `The professional templates helped me win 3 major clients this quarter. My proposals now look enterprise-grade, and clients notice the difference immediately.`,
      metrics: {
        clientsWon: "3 major clients",
        revenueIncrease: "40%",
        timeToCreate: "5 minutes"
      },
      rating: 5
    },
    {
      id: 3,
      name: "Jennifer Park",
      role: "HR Manager",
      company: "Global Solutions Ltd.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `Our team creates 200+ documents monthly. MyTypist Business plan reduced our document creation costs by 60% while improving consistency across all departments.`,
      metrics: {
        documentsMonthly: "200+",
        costReduction: "60%",
        teamSize: "25 people"
      },
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        color={index < rating ? "var(--color-accent)" : "var(--color-border)"}
        className={index < rating ? "fill-current" : ""}
      />
    ));
  };

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Trusted by 50,000+ Professionals
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          See how MyTypist is transforming document creation for businesses of all sizes
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials?.map((testimonial) => (
          <div
            key={testimonial?.id}
            className="bg-card border border-border rounded-2xl p-8 hover:shadow-brand transition-all duration-300"
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center">
                  <Icon name="Check" size={12} color="white" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">{testimonial?.name}</h4>
                <p className="text-sm text-text-secondary">{testimonial?.role}</p>
                <p className="text-sm text-primary font-medium">{testimonial?.company}</p>
              </div>
            </div>

            <div className="flex items-center space-x-1 mb-4">
              {renderStars(testimonial?.rating)}
            </div>

            <blockquote className="text-foreground mb-6 leading-relaxed">
              "{testimonial?.content}"
            </blockquote>

            <div className="grid grid-cols-1 gap-3">
              {Object.entries(testimonial?.metrics)?.map(([key, value]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                  <span className="text-sm text-text-secondary capitalize">
                    {key?.replace(/([A-Z])/g, ' $1')?.toLowerCase()}
                  </span>
                  <span className="text-sm font-semibold text-success">{value}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-8 p-6 bg-muted rounded-2xl">
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">4.9/5</div>
            <div className="text-sm text-text-secondary">Average rating</div>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">50K+</div>
            <div className="text-sm text-text-secondary">Happy users</div>
          </div>
          <div className="w-px h-12 bg-border"></div>
          <div className="text-center">
            <div className="text-2xl font-bold text-foreground">2M+</div>
            <div className="text-sm text-text-secondary">Documents created</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;