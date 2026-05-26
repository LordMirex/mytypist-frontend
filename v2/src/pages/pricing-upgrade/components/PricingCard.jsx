import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const PricingCard = ({ plan, isPopular = false, onSelectPlan }) => {
  const {
    name,
    price,
    period,
    description,
    features,
    buttonText,
    buttonVariant = 'default',
    documentsLimit,
    badge
  } = plan;

  return (
    <div className={`relative bg-card border rounded-2xl p-8 transition-all duration-300 hover:shadow-brand ${
      isPopular ? 'border-primary shadow-conversion scale-105' : 'border-border hover:border-primary/50'
    }`}>
      {badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium shadow-conversion">
            {badge}
          </span>
        </div>
      )}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-semibold text-foreground mb-2">{name}</h3>
        <p className="text-text-secondary mb-4">{description}</p>
        
        <div className="mb-4">
          {price === 'Free' ? (
            <div className="text-4xl font-bold text-foreground">Free</div>
          ) : (
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold text-foreground">${price}</span>
              <span className="text-text-secondary ml-2">/{period}</span>
            </div>
          )}
        </div>
        
        <div className="text-sm text-text-secondary">
          {documentsLimit === 'Unlimited' ? (
            <span className="font-medium text-success">Unlimited documents</span>
          ) : (
            <span>{documentsLimit} documents per month</span>
          )}
        </div>
      </div>
      <div className="space-y-4 mb-8">
        {features?.map((feature, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="flex-shrink-0 mt-0.5">
              <Icon 
                name={feature?.included ? "Check" : "X"} 
                size={16} 
                color={feature?.included ? "var(--color-success)" : "var(--color-text-secondary)"} 
              />
            </div>
            <span className={`text-sm ${
              feature?.included ? 'text-foreground' : 'text-text-secondary line-through'
            }`}>
              {feature?.text}
            </span>
          </div>
        ))}
      </div>
      <Button
        variant={buttonVariant}
        fullWidth
        onClick={() => onSelectPlan(plan)}
        className={isPopular ? 'shadow-conversion' : ''}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default PricingCard;