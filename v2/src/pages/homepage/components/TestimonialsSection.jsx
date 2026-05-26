import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Small Business Owner",
      company: "Chen Marketing Solutions",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      content: `MyTypist saved me hours every week. I used to struggle with formatting business proposals, but now I can create professional documents in minutes. The live preview feature is a game-changer – I can see exactly how my document will look before downloading.`,
      rating: 5,
      timeUsing: "6 months",
      documentsCreated: 47
    },
    {
      id: 2,
      name: "Marcus Rodriguez",
      role: "Freelance Consultant",
      company: "Independent",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      content: `As a consultant, I need to create contracts, proposals, and reports regularly. MyTypist's template quality is outstanding – my clients always comment on how professional my documents look. The time savings alone pays for itself.`,
      rating: 5,
      timeUsing: "1 year",
      documentsCreated: 89
    },
    {
      id: 3,
      name: "Jennifer Park",
      role: "HR Manager",
      company: "TechStart Inc.",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
      content: `We use MyTypist for all our HR documentation – offer letters, policies, and employee handbooks. The consistency across all our documents has improved our professional image significantly. Highly recommend for any business.`,
      rating: 5,
      timeUsing: "8 months",
      documentsCreated: 156
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Graduate Student",
      company: "Stanford University",
      avatar: "https://randomuser.me/api/portraits/men/56.jpg",
      content: `Perfect for academic work! I've used MyTypist for research proposals, thesis formatting, and recommendation letter requests. The academic templates are exactly what universities expect. Saved me countless hours of formatting.`,
      rating: 5,
      timeUsing: "4 months",
      documentsCreated: 23
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials?.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-accent fill-current' : 'text-border'}
      />
    ));
  };

  const handleDotClick = (index) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Loved by Professionals Worldwide
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Join thousands of satisfied users who have transformed their document creation process. 
            Here's what they have to say about MyTypist.
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 shadow-brand">
            <div className="space-y-8">
              {/* Quote */}
              <div className="relative">
                <Icon 
                  name="Quote" 
                  size={48} 
                  className="text-primary/20 absolute -top-4 -left-2" 
                />
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed pl-8">
                  "{testimonials?.[currentTestimonial]?.content}"
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <img
                    src={testimonials?.[currentTestimonial]?.avatar}
                    alt={testimonials?.[currentTestimonial]?.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-success rounded-full flex items-center justify-center border-2 border-surface">
                    <Icon name="Check" size={12} color="white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-2">
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonials?.[currentTestimonial]?.name}
                    </h4>
                    <div className="flex items-center space-x-1">
                      {renderStars(testimonials?.[currentTestimonial]?.rating)}
                    </div>
                  </div>
                  
                  <p className="text-text-secondary">
                    {testimonials?.[currentTestimonial]?.role} at {testimonials?.[currentTestimonial]?.company}
                  </p>
                  
                  <div className="flex items-center space-x-4 mt-3 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>Using for {testimonials?.[currentTestimonial]?.timeUsing}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="FileText" size={14} />
                      <span>{testimonials?.[currentTestimonial]?.documentsCreated} documents created</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' :'bg-border hover:bg-text-secondary'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Shield" size={24} className="text-success" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-foreground">Secure & Private</div>
                <div className="text-sm text-text-secondary">Your data is protected</div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Zap" size={24} className="text-primary" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-foreground">Lightning Fast</div>
                <div className="text-sm text-text-secondary">Documents in seconds</div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="Award" size={24} className="text-accent" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-foreground">Professional Quality</div>
                <div className="text-sm text-text-secondary">Enterprise-grade results</div>
              </div>
            </div>

            <div className="text-center space-y-3">
              <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center mx-auto">
                <Icon name="HeadphonesIcon" size={24} className="text-success" />
              </div>
              <div className="space-y-1">
                <div className="font-semibold text-foreground">24/7 Support</div>
                <div className="text-sm text-text-secondary">Always here to help</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;