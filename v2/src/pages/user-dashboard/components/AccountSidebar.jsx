import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const AccountSidebar = ({ userPlan, accountBenefits, upgradeOpportunities }) => {
  const getPlanIcon = (plan) => {
    const iconMap = {
      'free': 'User',
      'pro': 'Crown',
      'enterprise': 'Building'
    };
    return iconMap?.[plan] || 'User';
  };

  const getPlanColor = (plan) => {
    const colorMap = {
      'free': 'text-text-secondary',
      'pro': 'text-accent',
      'enterprise': 'text-primary'
    };
    return colorMap?.[plan] || 'text-text-secondary';
  };

  return (
    <div className="space-y-6">
      {/* Account Status */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Icon name={getPlanIcon(userPlan?.type)} size={24} className={`mr-2 ${getPlanColor(userPlan?.type)}`} />
          <div>
            <h3 className="font-semibold text-foreground">{userPlan?.name} Plan</h3>
            <p className="text-text-secondary text-sm">{userPlan?.description}</p>
          </div>
        </div>

        {userPlan?.type === 'free' && (
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-4 mb-4">
            <h4 className="font-medium text-foreground mb-2">Upgrade Benefits</h4>
            <ul className="space-y-1 text-sm text-text-secondary">
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-success mr-2" />
                Unlimited documents
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-success mr-2" />
                Premium templates
              </li>
              <li className="flex items-center">
                <Icon name="Check" size={14} className="text-success mr-2" />
                Priority support
              </li>
            </ul>
          </div>
        )}

        <Link to="/pricing-upgrade">
          <Button 
            variant={userPlan?.type === 'free' ? 'default' : 'outline'} 
            fullWidth 
            className={userPlan?.type === 'free' ? 'shadow-conversion' : ''}
          >
            <Icon name="Zap" size={16} className="mr-2" />
            {userPlan?.type === 'free' ? 'Upgrade Now' : 'Manage Plan'}
          </Button>
        </Link>
      </div>
      {/* Account Benefits */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Icon name="Gift" size={24} className="text-success mr-2" />
          <h3 className="font-semibold text-foreground">Your Benefits</h3>
        </div>

        <div className="space-y-3">
          {accountBenefits?.map((benefit) => (
            <div key={benefit?.id} className="flex items-center justify-between">
              <div className="flex items-center">
                <Icon name={benefit?.icon} size={16} className="text-success mr-2" />
                <span className="text-sm text-foreground">{benefit?.title}</span>
              </div>
              <span className="text-xs text-text-secondary">{benefit?.value}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-card border border-border rounded-xl p-6">
        <div className="flex items-center mb-4">
          <Icon name="Zap" size={24} className="text-primary mr-2" />
          <h3 className="font-semibold text-foreground">Quick Actions</h3>
        </div>

        <div className="space-y-3">
          <Link to="/template-gallery">
            <Button variant="outline" fullWidth>
              <Icon name="Plus" size={16} className="mr-2" />
              Create Document
            </Button>
          </Link>
          
          <Button variant="ghost" fullWidth>
            <Icon name="Settings" size={16} className="mr-2" />
            Account Settings
          </Button>
          
          <Button variant="ghost" fullWidth>
            <Icon name="HelpCircle" size={16} className="mr-2" />
            Help & Support
          </Button>
        </div>
      </div>
      {/* Upgrade Opportunities */}
      {upgradeOpportunities?.length > 0 && (
        <div className="bg-gradient-to-br from-accent/5 to-accent/10 border border-accent/20 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <Icon name="TrendingUp" size={24} className="text-accent mr-2" />
            <h3 className="font-semibold text-foreground">Unlock More</h3>
          </div>

          <div className="space-y-3">
            {upgradeOpportunities?.map((opportunity) => (
              <div key={opportunity?.id} className="border-l-2 border-accent pl-3">
                <h4 className="font-medium text-foreground text-sm">{opportunity?.title}</h4>
                <p className="text-text-secondary text-xs mb-1">{opportunity?.description}</p>
                <span className="text-accent text-xs font-medium">{opportunity?.benefit}</span>
              </div>
            ))}
          </div>

          <Link to="/pricing-upgrade" className="block mt-4">
            <Button variant="outline" fullWidth className="border-accent text-accent hover:bg-accent hover:text-white">
              <Icon name="ArrowRight" size={16} className="mr-2" />
              Explore Upgrades
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AccountSidebar;