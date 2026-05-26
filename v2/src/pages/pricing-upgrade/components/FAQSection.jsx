import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "How does the token-based system work?",
      answer: `Each document you create uses one token. Free users get 5 tokens per month, Pro users get 50 tokens, and Business users have unlimited tokens. Tokens reset monthly and don't roll over to the next month.`
    },
    {
      question: "Can I upgrade or downgrade my plan anytime?",
      answer: `Yes, you can change your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, changes take effect at your next billing cycle, and you'll retain access to premium features until then.`
    },
    {
      question: "What happens if I exceed my document limit?",
      answer: `Free users will be prompted to upgrade when they reach their limit. Pro users can purchase additional tokens at $0.50 each, or upgrade to Business for unlimited access. We'll always notify you before any charges.`
    },
    {
      question: "Is there a free trial for paid plans?",
      answer: `Yes! Pro and Business plans come with a 14-day free trial. You can access all premium features during the trial period. Cancel anytime before the trial ends and you won't be charged.`
    },
    {
      question: "What payment methods do you accept?",
      answer: `We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers for Business plans. All payments are processed securely through Stripe with 256-bit SSL encryption.`
    },
    {
      question: "Do you offer refunds?",
      answer: `Yes, we offer a 30-day money-back guarantee for all paid plans. If you're not satisfied with MyTypist, contact our support team within 30 days of your purchase for a full refund.`
    },
    {
      question: "Can I use MyTypist for commercial purposes?",
      answer: `Absolutely! All plans, including the free plan, allow commercial use of documents created with MyTypist. Business plans include additional features like custom branding and team collaboration tools.`
    },
    {
      question: "How does team billing work for Business plans?",
      answer: `Business plans support up to 10 team members for $29.99/month. Each additional member is $5/month. Team admins can manage billing, add/remove members, and control template access from the dashboard.`
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Everything you need to know about MyTypist pricing and features
        </p>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden hover:shadow-brand transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground pr-4">
                  {faq?.question}
                </h3>
                <div className="flex-shrink-0">
                  <Icon
                    name={openFAQ === index ? "ChevronUp" : "ChevronDown"}
                    size={20}
                    color="var(--color-text-secondary)"
                    className="transition-transform duration-200"
                  />
                </div>
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-border">
                    <p className="text-text-secondary leading-relaxed">
                      {faq?.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-muted rounded-2xl p-8">
            <Icon name="HelpCircle" size={48} color="var(--color-primary)" className="mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-text-secondary mb-6">
              Our support team is here to help you choose the right plan
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:support@mytypist.com"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Icon name="Mail" size={16} />
                <span>Email Support</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center space-x-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Icon name="MessageCircle" size={16} />
                <span>Live Chat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;