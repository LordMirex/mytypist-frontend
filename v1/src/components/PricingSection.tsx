
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: 'Free',
      price: '₦0',
      period: 'forever',
      description: 'Perfect for individuals getting started',
      features: [
        '5 documents per month',
        '2 e-signatures per month',
        'Basic templates',
        'Email support',
        'Basic integrations'
      ],
      cta: 'Start Free',
      href: '/signup',
      popular: false
    },
    {
      name: 'Professional',
      price: '₦7,500',
      period: 'per month',
      description: 'Ideal for small teams and growing businesses',
      features: [
        'Unlimited documents',
        'Unlimited e-signatures',
        'Premium templates',
        'Priority support',
        'Advanced integrations',
        'Team collaboration',
        'Custom branding',
        'Analytics dashboard'
      ],
      cta: 'Start Professional',
      href: '/signup?plan=professional',
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₦12,000',
      period: 'per month',
      description: 'For large organizations with advanced needs',
      features: [
        'Everything in Professional',
        'Advanced security features',
        'SSO integration',
        'Dedicated account manager',
        'Custom integrations',
        'SLA guarantee',
        'Advanced analytics',
        'White-label options'
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent{' '}
            <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business. Start free and upgrade as you grow.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={plan.name}
              className={`relative hover:shadow-xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-brand-500 shadow-lg scale-105' 
                  : 'border-gray-200 hover:scale-105'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-brand-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}

              <CardHeader className="text-center pb-8 pt-8">
                <h3 className={`text-2xl font-bold ${plan.popular ? 'text-brand-600' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="px-8 pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to={plan.href} className="block">
                  <Button 
                    className={`w-full py-3 ${
                      plan.popular 
                        ? 'bg-brand-600 hover:bg-brand-700 text-white' 
                        : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600">
            All plans include a 14-day free trial. No credit card required.{' '}
            <Link to="/pricing" className="text-brand-600 hover:text-brand-700 font-medium">
              View detailed comparison →
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
