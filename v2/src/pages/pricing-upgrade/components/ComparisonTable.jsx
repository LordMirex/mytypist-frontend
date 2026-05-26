import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonTable = ({ onSelectPlan }) => {
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  const plans = [
    {
      name: 'Free',
      price: 'Free',
      popular: false
    },
    {
      name: 'Pro',
      price: '$9.99/month',
      popular: true
    },
    {
      name: 'Business',
      price: '$29.99/month',
      popular: false
    }
  ];

  const features = [
    {
      category: 'Document Creation',
      items: [
        {
          name: 'Documents per month',
          free: '5',
          pro: '50',
          business: 'Unlimited'
        },
        {
          name: 'Template access',
          free: 'Basic templates',
          pro: 'All templates',
          business: 'All templates + Premium'
        },
        {
          name: 'PDF downloads',
          free: true,
          pro: true,
          business: true
        },
        {
          name: 'Live preview',
          free: true,
          pro: true,
          business: true
        }
      ]
    },
    {
      category: 'Customization',
      items: [
        {
          name: 'Custom branding',
          free: false,
          pro: true,
          business: true
        },
        {
          name: 'Advanced formatting',
          free: false,
          pro: true,
          business: true
        },
        {
          name: 'Custom templates',
          free: false,
          pro: false,
          business: true
        },
        {
          name: 'Bulk operations',
          free: false,
          pro: false,
          business: true
        }
      ]
    },
    {
      category: 'Collaboration',
      items: [
        {
          name: 'Team members',
          free: '1',
          pro: '1',
          business: 'Up to 10'
        },
        {
          name: 'Shared templates',
          free: false,
          pro: false,
          business: true
        },
        {
          name: 'Version history',
          free: false,
          pro: '30 days',
          business: 'Unlimited'
        },
        {
          name: 'Comments & reviews',
          free: false,
          pro: false,
          business: true
        }
      ]
    },
    {
      category: 'Support & Security',
      items: [
        {
          name: 'Support',
          free: 'Community',
          pro: 'Email support',
          business: 'Priority support'
        },
        {
          name: 'Data backup',
          free: false,
          pro: true,
          business: true
        },
        {
          name: 'Advanced security',
          free: false,
          pro: false,
          business: true
        },
        {
          name: 'API access',
          free: false,
          pro: false,
          business: true
        }
      ]
    }
  ];

  const visibleFeatures = showAllFeatures ? features : features?.slice(0, 2);

  const renderFeatureValue = (value) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Icon name="Check" size={16} color="var(--color-success)" />
      ) : (
        <Icon name="X" size={16} color="var(--color-text-secondary)" />
      );
    }
    return <span className="text-sm text-foreground">{value}</span>;
  };

  const handleSelectPlan = (planName) => {
    const planData = {
      Free: { name: 'Free', price: 'Free' },
      Pro: { name: 'Pro', price: '9.99' },
      Business: { name: 'Business', price: '29.99' }
    };
    onSelectPlan(planData?.[planName]);
  };

  return (
    <div className="bg-card border border-border rounded-2xl overflow-hidden">
      <div className="p-8 border-b border-border">
        <h3 className="text-2xl font-semibold text-foreground text-center mb-2">
          Compare All Features
        </h3>
        <p className="text-text-secondary text-center">
          Choose the plan that fits your document creation needs
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border">
              <th className="text-left p-6 font-medium text-foreground">Features</th>
              {plans?.map((plan) => (
                <th key={plan?.name} className="text-center p-6 min-w-[200px]">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <h4 className="font-semibold text-foreground">{plan?.name}</h4>
                      {plan?.popular && (
                        <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
                          Popular
                        </span>
                      )}
                    </div>
                    <div className="text-lg font-bold text-primary">{plan?.price}</div>
                    <Button
                      variant={plan?.popular ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => handleSelectPlan(plan?.name)}
                      className={plan?.popular ? 'shadow-conversion' : ''}
                    >
                      {plan?.name === 'Free' ? 'Get Started' : 'Choose Plan'}
                    </Button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleFeatures?.map((category) => (
              <React.Fragment key={category?.category}>
                <tr className="bg-muted">
                  <td colSpan={4} className="p-4">
                    <h5 className="font-semibold text-foreground">{category?.category}</h5>
                  </td>
                </tr>
                {category?.items?.map((feature, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50">
                    <td className="p-4 font-medium text-foreground">{feature?.name}</td>
                    <td className="p-4 text-center">{renderFeatureValue(feature?.free)}</td>
                    <td className="p-4 text-center">{renderFeatureValue(feature?.pro)}</td>
                    <td className="p-4 text-center">{renderFeatureValue(feature?.business)}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <div className="p-6 border-t border-border text-center">
        <Button
          variant="ghost"
          onClick={() => setShowAllFeatures(!showAllFeatures)}
          iconName={showAllFeatures ? "ChevronUp" : "ChevronDown"}
          iconPosition="right"
        >
          {showAllFeatures ? 'Show Less Features' : 'Show All Features'}
        </Button>
      </div>
    </div>
  );
};

export default ComparisonTable;