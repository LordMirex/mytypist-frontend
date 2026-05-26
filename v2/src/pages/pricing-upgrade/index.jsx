import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import PricingCard from './components/PricingCard';
import UsageCalculator from './components/UsageCalculator';
import ComparisonTable from './components/ComparisonTable';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import TrustSignals from './components/TrustSignals';

const PricingUpgrade = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [showMobileComparison, setShowMobileComparison] = useState(false);

  const pricingPlans = [
    {
      name: 'Free',
      price: 'Free',
      period: 'forever',
      description: 'Perfect for getting started with document creation',
      documentsLimit: '5',
      buttonText: 'Get Started Free',
      buttonVariant: 'outline',
      features: [
        { text: '5 documents per month', included: true },
        { text: 'Basic template library', included: true },
        { text: 'PDF downloads', included: true },
        { text: 'Live preview', included: true },
        { text: 'Community support', included: true },
        { text: 'Custom branding', included: false },
        { text: 'Advanced templates', included: false },
        { text: 'Priority support', included: false }
      ]
    },
    {
      name: 'Pro',
      price: '9.99',
      period: 'month',
      description: 'Ideal for professionals and small businesses',
      documentsLimit: '50',
      buttonText: 'Start Free Trial',
      buttonVariant: 'default',
      badge: 'Most Popular',
      features: [
        { text: '50 documents per month', included: true },
        { text: 'All template library', included: true },
        { text: 'PDF downloads', included: true },
        { text: 'Live preview', included: true },
        { text: 'Email support', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Advanced formatting', included: true },
        { text: '30-day version history', included: true }
      ]
    },
    {
      name: 'Business',
      price: '29.99',
      period: 'month',
      description: 'Perfect for teams and high-volume users',
      documentsLimit: 'Unlimited',
      buttonText: 'Start Free Trial',
      buttonVariant: 'default',
      features: [
        { text: 'Unlimited documents', included: true },
        { text: 'All templates + Premium', included: true },
        { text: 'PDF downloads', included: true },
        { text: 'Live preview', included: true },
        { text: 'Priority support', included: true },
        { text: 'Custom branding', included: true },
        { text: 'Team collaboration (10 users)', included: true },
        { text: 'API access', included: true }
      ]
    }
  ];

  const handleSelectPlan = (plan) => {
    setSelectedPlan(plan);
    // Here you would typically redirect to checkout or show a modal
    console.log('Selected plan:', plan);
  };

  const handleRecommendation = (recommendation) => {
    const recommendedPlan = pricingPlans?.find(plan => plan?.name === recommendation?.plan);
    if (recommendedPlan) {
      setSelectedPlan(recommendedPlan);
      // Scroll to pricing cards
      document.getElementById('pricing-cards')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Choose Your Perfect
              <span className="text-primary block">Document Creation Plan</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Start free and upgrade as you grow. Our token-based system ensures you only pay for what you use, 
              with transparent pricing and no hidden fees.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Check" size={16} />
                <span className="text-sm font-medium">14-day free trial</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Check" size={16} />
                <span className="text-sm font-medium">No setup fees</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Check" size={16} />
                <span className="text-sm font-medium">Cancel anytime</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/document-creator-studio">
                <Button variant="default" size="lg" className="shadow-conversion">
                  Try Free Now
                </Button>
              </Link>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('pricing-cards')?.scrollIntoView({ behavior: 'smooth' })}>
                View Pricing
              </Button>
            </div>
          </div>
        </div>
      </section>
      {/* Usage Calculator */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <UsageCalculator onRecommendation={handleRecommendation} />
        </div>
      </section>
      {/* Pricing Cards */}
      <section id="pricing-cards" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Choose the plan that fits your document creation needs. All plans include our core features with no hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {pricingPlans?.map((plan, index) => (
              <PricingCard
                key={plan?.name}
                plan={plan}
                isPopular={plan?.badge === 'Most Popular'}
                onSelectPlan={handleSelectPlan}
              />
            ))}
          </div>

          {/* Mobile Comparison Toggle */}
          <div className="lg:hidden text-center mb-8">
            <Button
              variant="outline"
              onClick={() => setShowMobileComparison(!showMobileComparison)}
              iconName={showMobileComparison ? "ChevronUp" : "ChevronDown"}
              iconPosition="right"
            >
              {showMobileComparison ? 'Hide' : 'Show'} Feature Comparison
            </Button>
          </div>
        </div>
      </section>
      {/* Comparison Table */}
      <section className={`py-16 px-4 sm:px-6 lg:px-8 bg-muted ${showMobileComparison || window.innerWidth >= 1024 ? 'block' : 'hidden lg:block'}`}>
        <div className="max-w-7xl mx-auto">
          <ComparisonTable onSelectPlan={handleSelectPlan} />
        </div>
      </section>
      {/* Testimonials */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TestimonialSection />
        </div>
      </section>
      {/* Trust Signals */}
      <TrustSignals />
      {/* FAQ Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <FAQSection />
        </div>
      </section>
      {/* Final CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-brand-authority/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Transform Your Document Creation?
          </h2>
          <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who've streamlined their workflow with MyTypist. 
            Start your free trial today and experience the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/document-creator-studio">
              <Button variant="default" size="lg" className="shadow-conversion">
                Start Free Trial
              </Button>
            </Link>
            <Link to="/template-gallery">
              <Button variant="outline" size="lg">
                Browse Templates
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-text-secondary">
            <p>No credit card required • 14-day free trial • Cancel anytime</p>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-brand-authority rounded-lg flex items-center justify-center">
                  <Icon name="FileText" size={20} color="white" />
                </div>
                <span className="text-xl font-semibold font-accent">MyTypist</span>
              </div>
              <p className="text-background/80 mb-4 max-w-md">
                Professional document creation made simple. Transform your ideas into polished documents in minutes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Icon name="Twitter" size={20} />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
                <a href="#" className="text-background/60 hover:text-background transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-background/80">
                <li><Link to="/template-gallery" className="hover:text-background transition-colors">Templates</Link></li>
                <li><Link to="/document-creator-studio" className="hover:text-background transition-colors">Create Document</Link></li>
                <li><Link to="/user-dashboard" className="hover:text-background transition-colors">Dashboard</Link></li>
                <li><Link to="/pricing-upgrade" className="hover:text-background transition-colors">Pricing</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-background/80">
                <li><a href="#" className="hover:text-background transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-background transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; {new Date()?.getFullYear()} MyTypist. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PricingUpgrade;