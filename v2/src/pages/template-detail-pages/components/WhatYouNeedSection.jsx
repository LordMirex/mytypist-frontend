import React from 'react';
import Icon from '../../../components/AppIcon';

const WhatYouNeedSection = ({ requirements }) => {
  return (
    <div className="bg-surface py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What You'll Need
          </h2>
          <p className="text-lg text-text-secondary">
            Gather this information before you start to create your document quickly
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {requirements?.map((category, index) => (
            <div key={index} className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name={category?.icon} size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category?.title}
                </h3>
              </div>
              
              <ul className="space-y-3">
                {category?.items?.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <Icon 
                      name="Check" 
                      size={16} 
                      className="text-success mt-1 flex-shrink-0" 
                    />
                    <div>
                      <span className="text-foreground font-medium">
                        {item?.name}
                      </span>
                      {item?.description && (
                        <p className="text-sm text-text-secondary mt-1">
                          {item?.description}
                        </p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-muted rounded-xl">
          <div className="flex items-start space-x-3">
            <Icon name="Info" size={20} className="text-primary mt-1" />
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                Pro Tip
              </h4>
              <p className="text-text-secondary">
                Having all this information ready will help you complete your document in under 3 minutes. 
                Don't worry if you don't have everything - you can always save your progress and come back later.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouNeedSection;