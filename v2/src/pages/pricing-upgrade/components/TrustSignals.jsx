import React from 'react';
import Icon from '../../../components/AppIcon';

const TrustSignals = () => {
  const trustFeatures = [
    {
      icon: "Shield",
      title: "30-Day Money Back",
      description: "Full refund if you're not satisfied"
    },
    {
      icon: "Lock",
      title: "Secure Payments",
      description: "256-bit SSL encryption & PCI compliant"
    },
    {
      icon: "Headphones",
      title: "24/7 Support",
      description: "Expert help when you need it"
    },
    {
      icon: "Users",
      title: "50K+ Happy Users",
      description: "Join thousands of satisfied customers"
    }
  ];

  const securityBadges = [
    {
      name: "SSL Secured",
      icon: "Shield",
      color: "var(--color-success)"
    },
    {
      name: "GDPR Compliant",
      icon: "FileCheck",
      color: "var(--color-primary)"
    },
    {
      name: "SOC 2 Certified",
      icon: "Award",
      color: "var(--color-accent)"
    },
    {
      name: "99.9% Uptime",
      icon: "Activity",
      color: "var(--color-success)"
    }
  ];

  const paymentMethods = [
    {
      name: "Visa",
      icon: "CreditCard"
    },
    {
      name: "Mastercard",
      icon: "CreditCard"
    },
    {
      name: "PayPal",
      icon: "Wallet"
    },
    {
      name: "Stripe",
      icon: "CreditCard"
    }
  ];

  return (
    <div className="py-16 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures?.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Icon name={feature?.icon} size={32} color="var(--color-primary)" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature?.title}</h3>
              <p className="text-sm text-text-secondary">{feature?.description}</p>
            </div>
          ))}
        </div>

        {/* Security & Compliance */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-semibold text-foreground mb-8">
            Enterprise-Grade Security & Compliance
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {securityBadges?.map((badge, index) => (
              <div key={index} className="flex items-center space-x-2 bg-card px-4 py-2 rounded-lg border border-border">
                <Icon name={badge?.icon} size={20} color={badge?.color} />
                <span className="text-sm font-medium text-foreground">{badge?.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6">
            Secure Payment Methods
          </h3>
          <div className="flex justify-center items-center space-x-8">
            {paymentMethods?.map((method, index) => (
              <div key={index} className="flex items-center space-x-2 text-text-secondary hover:text-foreground transition-colors">
                <Icon name={method?.icon} size={24} />
                <span className="text-sm font-medium">{method?.name}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-6 bg-card rounded-xl border border-border max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Icon name="Lock" size={16} color="var(--color-success)" />
              <span className="text-sm font-medium text-success">Secure Checkout</span>
            </div>
            <p className="text-sm text-text-secondary">
              Your payment information is encrypted and secure. We never store your credit card details on our servers. 
              All transactions are processed through industry-leading payment processors with bank-level security.
            </p>
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-success/10 to-primary/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="ShieldCheck" size={40} color="var(--color-success)" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Risk-Free 30-Day Guarantee
            </h3>
            <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
              Try MyTypist risk-free for 30 days. If you're not completely satisfied with your experience, 
              we'll refund your money, no questions asked.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Check" size={16} />
                <span className="text-sm font-medium">No setup fees</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Check" size={16} />
                <span className="text-sm font-medium">Cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2 text-success">
                <Icon name="Check" size={16} />
                <span className="text-sm font-medium">Full refund guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSignals;