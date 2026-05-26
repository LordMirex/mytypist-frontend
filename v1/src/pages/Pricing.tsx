import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { CheckCircle, Star, X } from 'lucide-react';

const Pricing = () => {
  const [annually, setAnnually] = useState(false);
  const [billing, setBilling] = useState<'monthly' | 'quarterly'>('monthly');

  const plans = [
    {
      name: 'Free',
      monthlyPrice: '₦0',
      quarterlyPrice: '₦0',
      description: 'Perfect for individuals getting started',
      features: [
        { name: 'Documents per month', value: '5', included: true },
        { name: 'E-signatures per month', value: '2', included: true },
        { name: 'Template library', value: 'Basic (10)', included: true },
        { name: 'Storage', value: '100MB', included: true },
        { name: 'Email support', value: 'Yes', included: true },
        { name: 'Mobile app', value: 'Yes', included: true },
        { name: 'Team collaboration', value: 'No', included: false },
        { name: 'Custom branding', value: 'No', included: false },
        { name: 'Advanced integrations', value: 'No', included: false },
        { name: 'Priority support', value: 'No', included: false }
      ],
      cta: 'Start Free',
      href: '/signup',
      popular: false
    },
    {
      name: 'Professional',
      monthlyPrice: '₦7,500',
      quarterlyPrice: '₦21,000',
      description: 'Ideal for small teams and growing businesses',
      features: [
        { name: 'Documents per month', value: 'Unlimited', included: true },
        { name: 'E-signatures per month', value: 'Unlimited', included: true },
        { name: 'Template library', value: 'Premium (100+)', included: true },
        { name: 'Storage', value: '10GB', included: true },
        { name: 'Email support', value: 'Yes', included: true },
        { name: 'Mobile app', value: 'Yes', included: true },
        { name: 'Team collaboration', value: 'Up to 10 users', included: true },
        { name: 'Custom branding', value: 'Yes', included: true },
        { name: 'Advanced integrations', value: 'Yes', included: true },
        { name: 'Priority support', value: 'Yes', included: true }
      ],
      cta: 'Start Professional',
      href: '/signup?plan=professional',
      popular: true
    },
    {
      name: 'Enterprise',
      monthlyPrice: '₦12,000',
      quarterlyPrice: '₦33,000',
      description: 'For large organizations with advanced needs',
      features: [
        { name: 'Documents per month', value: 'Unlimited', included: true },
        { name: 'E-signatures per month', value: 'Unlimited', included: true },
        { name: 'Template library', value: 'Premium + Custom', included: true },
        { name: 'Storage', value: '100GB', included: true },
        { name: 'Email support', value: 'Yes', included: true },
        { name: 'Mobile app', value: 'Yes', included: true },
        { name: 'Team collaboration', value: 'Unlimited users', included: true },
        { name: 'Custom branding', value: 'Advanced', included: true },
        { name: 'Advanced integrations', value: 'Yes + Custom', included: true },
        { name: 'Priority support', value: 'Dedicated manager', included: true }
      ],
      cta: 'Contact Sales',
      href: '/contact',
      popular: false
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Choose Your{' '}
              <span className="gradient-text">Perfect Plan</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Simple, transparent pricing that grows with your business. 
              Start free and upgrade when you're ready.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center space-x-4 mb-8">
              <span className={`text-sm font-medium ${billing === 'monthly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBilling(billing === 'monthly' ? 'quarterly' : 'monthly')}
                className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                  billing === 'quarterly' ? 'bg-brand-600' : 'bg-gray-200'
                }`}
                aria-label="Toggle monthly/quarterly"
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition duration-200 ease-in-out ${
                    billing === 'quarterly' ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${billing === 'quarterly' ? 'text-gray-900' : 'text-gray-500'}`}>
                Quarterly
              </span>
              {billing === 'quarterly' && (
                <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full ml-2">
                  Save 12%
                </span>
              )}
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <Card 
                  key={plan.name}
                  className={`relative hover:shadow-xl transition-all duration-300 ${
                    plan.popular 
                      ? 'border-brand-500 shadow-lg scale-105' 
                      : 'border-gray-200 hover:scale-105'
                  }`}
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
                      <span className="text-4xl font-bold text-gray-900">
                        {billing === 'monthly' ? plan.monthlyPrice : plan.quarterlyPrice}
                      </span>
                      <span className="text-gray-500 ml-1">
                        /{billing === 'monthly' ? 'month' : 'quarter'}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="px-8 pb-8">
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          {feature.included ? (
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="w-5 h-5 text-gray-400 mr-3 flex-shrink-0 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <span className={`text-sm ${feature.included ? 'text-gray-700' : 'text-gray-400'}`}>
                              {feature.name}
                            </span>
                            <div className={`text-xs ${feature.included ? 'text-gray-500' : 'text-gray-400'}`}>
                              {feature.value}
                            </div>
                          </div>
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

            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                All Plans Include
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {[
                  '14-day free trial',
                  'No setup fees',
                  'Cancel anytime',
                  '99.9% uptime SLA'
                ].map((feature) => (
                  <div key={feature} className="flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Pricing;
