import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SampleOutputs = ({ samples }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="bg-canvas py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            See It In Action
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Explore different variations of this template to see how versatile and professional your documents can look
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {samples?.map((sample, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-lg font-medium transition-brand ${
                activeTab === index
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-surface text-text-secondary hover:text-foreground hover:bg-muted'
              }`}
            >
              {sample?.title}
            </button>
          ))}
        </div>

        {/* Active Sample */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Sample Preview */}
          <div className="relative">
            <div className="bg-white rounded-xl shadow-brand p-6 lg:p-8">
              <Image
                src={samples?.[activeTab]?.image}
                alt={`${samples?.[activeTab]?.title} sample`}
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            {/* Download Badge */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-success text-success-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg flex items-center space-x-2">
                <Icon name="Download" size={16} />
                <span>PDF Ready</span>
              </div>
            </div>
          </div>

          {/* Sample Details */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {samples?.[activeTab]?.title}
              </h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                {samples?.[activeTab]?.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">
                Key Features:
              </h4>
              <ul className="space-y-3">
                {samples?.[activeTab]?.features?.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Icon 
                      name="CheckCircle" 
                      size={20} 
                      className="text-success mt-0.5 flex-shrink-0" 
                    />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Use Case */}
            <div className="p-4 bg-primary/5 rounded-lg border border-primary/10">
              <div className="flex items-start space-x-3">
                <Icon name="Lightbulb" size={20} className="text-primary mt-1" />
                <div>
                  <h5 className="font-semibold text-foreground mb-1">
                    Perfect For:
                  </h5>
                  <p className="text-text-secondary">
                    {samples?.[activeTab]?.useCase}
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {samples?.[activeTab]?.completionTime}
                </div>
                <div className="text-sm text-text-secondary">
                  Avg. completion
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">
                  {samples?.[activeTab]?.satisfaction}%
                </div>
                <div className="text-sm text-text-secondary">
                  User satisfaction
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleOutputs;