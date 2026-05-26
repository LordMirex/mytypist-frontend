import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="bg-surface py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-text-secondary">
            Everything you need to know about this template
          </p>
        </div>

        <div className="space-y-4">
          {faqs?.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl border border-border overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq?.question}
                </h3>
                <Icon 
                  name={openIndex === index ? "ChevronUp" : "ChevronDown"} 
                  size={20} 
                  className="text-text-secondary flex-shrink-0 transition-transform duration-200"
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="pt-2 border-t border-border">
                    <p className="text-text-secondary leading-relaxed">
                      {faq?.answer}
                    </p>
                    
                    {faq?.additionalInfo && (
                      <div className="mt-4 p-4 bg-primary/5 rounded-lg border border-primary/10">
                        <div className="flex items-start space-x-3">
                          <Icon name="Info" size={16} className="text-primary mt-1 flex-shrink-0" />
                          <p className="text-sm text-foreground">
                            {faq?.additionalInfo}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 text-text-secondary">
            <div className="flex items-center space-x-2">
              <Icon name="HelpCircle" size={20} />
              <span>Still have questions?</span>
            </div>
            <button className="text-primary hover:text-primary/80 font-medium transition-colors">
              Contact our support team
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;