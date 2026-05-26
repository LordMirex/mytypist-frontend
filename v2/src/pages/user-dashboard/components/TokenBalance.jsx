import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const TokenBalance = ({ tokensRemaining, totalTokens, planType }) => {
  const percentage = (tokensRemaining / totalTokens) * 100;
  
  const getProgressColor = () => {
    if (percentage > 50) return 'bg-success';
    if (percentage > 20) return 'bg-warning';
    return 'bg-error';
  };

  return (
    <div className="bg-card border border-border rounded-xl p-6 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center mb-2">
            <Icon name="Coins" size={24} className="text-accent mr-2" />
            <h3 className="text-lg font-semibold text-foreground">Token Balance</h3>
            <span className="ml-2 px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
              {planType}
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div>
              <span className="text-2xl font-bold text-foreground">{tokensRemaining}</span>
              <span className="text-text-secondary ml-1">/ {totalTokens} tokens</span>
            </div>
            
            <div className="flex-1 max-w-xs">
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className={`h-2 rounded-full transition-all duration-300 ${getProgressColor()}`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <p className="text-text-secondary text-sm mt-2">
            {tokensRemaining > 0 
              ? `${tokensRemaining} free documents remaining this month`
              : 'No free tokens remaining - upgrade for unlimited access'
            }
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3">
          {tokensRemaining <= 5 && (
            <Link to="/pricing-upgrade">
              <Button variant="default" className="shadow-conversion">
                <Icon name="Zap" size={16} className="mr-2" />
                Upgrade Now
              </Button>
            </Link>
          )}
          
          <Link to="/template-gallery">
            <Button variant="outline">
              <Icon name="Plus" size={16} className="mr-2" />
              Create Document
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TokenBalance;