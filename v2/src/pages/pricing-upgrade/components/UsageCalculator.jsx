import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const UsageCalculator = ({ onRecommendation }) => {
  const [documentsPerMonth, setDocumentsPerMonth] = useState(10);
  const [teamSize, setTeamSize] = useState(1);
  const [businessType, setBusinessType] = useState('individual');

  const calculateRecommendation = () => {
    const totalDocuments = documentsPerMonth * teamSize;
    
    if (totalDocuments <= 5) {
      return {
        plan: 'Free',
        reason: 'Perfect for light usage and getting started',
        savings: '$0/month'
      };
    } else if (totalDocuments <= 50 && teamSize === 1) {
      return {
        plan: 'Pro',
        reason: 'Ideal for individual professionals with regular document needs',
        savings: 'Save $20/month vs per-document pricing'
      };
    } else {
      return {
        plan: 'Business',
        reason: 'Best value for teams and high-volume users',
        savings: 'Save $50+/month with unlimited access'
      };
    }
  };

  const recommendation = calculateRecommendation();

  const handleGetRecommendation = () => {
    onRecommendation(recommendation);
  };

  return (
    <div className="bg-muted rounded-2xl p-8">
      <div className="text-center mb-8">
        <Icon name="Calculator" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
        <h3 className="text-2xl font-semibold text-foreground mb-2">Usage Calculator</h3>
        <p className="text-text-secondary">Find the perfect plan for your needs</p>
      </div>
      <div className="space-y-6 mb-8">
        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            How many documents do you create per month?
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="1"
              max="100"
              value={documentsPerMonth}
              onChange={(e) => setDocumentsPerMonth(parseInt(e?.target?.value))}
              className="flex-1 h-2 bg-border rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="bg-primary text-primary-foreground px-3 py-1 rounded-lg font-medium min-w-[60px] text-center">
              {documentsPerMonth}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Team size
          </label>
          <div className="flex items-center space-x-4">
            <input
              type="range"
              min="1"
              max="20"
              value={teamSize}
              onChange={(e) => setTeamSize(parseInt(e?.target?.value))}
              className="flex-1 h-2 bg-border rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg font-medium min-w-[60px] text-center">
              {teamSize}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-3">
            Business type
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              { value: 'individual', label: 'Individual', icon: 'User' },
              { value: 'small-business', label: 'Small Business', icon: 'Building2' },
              { value: 'enterprise', label: 'Enterprise', icon: 'Building' }
            ]?.map((type) => (
              <button
                key={type?.value}
                onClick={() => setBusinessType(type?.value)}
                className={`flex items-center space-x-2 p-3 rounded-lg border transition-all ${
                  businessType === type?.value
                    ? 'border-primary bg-primary/10 text-primary' :'border-border hover:border-primary/50 text-text-secondary hover:text-foreground'
                }`}
              >
                <Icon name={type?.icon} size={16} />
                <span className="text-sm font-medium">{type?.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-card border border-border rounded-xl p-6 mb-6">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
            <Icon name="Target" size={20} color="var(--color-success)" />
          </div>
          <div>
            <h4 className="font-semibold text-foreground">Recommended Plan</h4>
            <p className="text-sm text-text-secondary">{recommendation?.reason}</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <div className="text-2xl font-bold text-success">{recommendation?.plan}</div>
            <div className="text-sm text-text-secondary">{recommendation?.savings}</div>
          </div>
          <Button variant="success" onClick={handleGetRecommendation}>
            Get Started
          </Button>
        </div>
      </div>
      <div className="text-center">
        <p className="text-xs text-text-secondary">
          Calculations based on typical usage patterns. Actual needs may vary.
        </p>
      </div>
    </div>
  );
};

export default UsageCalculator;