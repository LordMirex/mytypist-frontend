import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const SocialShare = ({ template }) => {
  const [copied, setCopied] = useState(false);
  
  const shareUrl = `${window.location?.origin}/template-detail-pages?template=${template?.id}`;
  const shareText = `Check out this ${template?.name} template on MyTypist - create professional documents in minutes!`;

  const socialPlatforms = [
    {
      name: 'Twitter',
      icon: 'Twitter',
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-50 hover:text-blue-600'
    },
    {
      name: 'LinkedIn',
      icon: 'Linkedin',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-50 hover:text-blue-700'
    },
    {
      name: 'Facebook',
      icon: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      color: 'hover:bg-blue-50 hover:text-blue-800'
    },
    {
      name: 'WhatsApp',
      icon: 'MessageCircle',
      url: `https://wa.me/?text=${encodeURIComponent(`${shareText} ${shareUrl}`)}`,
      color: 'hover:bg-green-50 hover:text-green-600'
    }
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard?.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleSocialShare = (url) => {
    window.open(url, '_blank', 'width=600,height=400');
  };

  return (
    <div className="bg-gradient-to-r from-primary/5 to-accent/5 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Share This Template
          </h3>
          <p className="text-text-secondary">
            Help others discover this professional template
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          {/* Social Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {socialPlatforms?.map((platform, index) => (
              <button
                key={index}
                onClick={() => handleSocialShare(platform?.url)}
                className={`flex items-center space-x-2 px-4 py-3 bg-surface border border-border rounded-lg transition-all duration-200 ${platform?.color} hover:shadow-sm`}
              >
                <Icon name={platform?.icon} size={18} />
                <span className="font-medium">{platform?.name}</span>
              </button>
            ))}
          </div>

          {/* Copy Link */}
          <div className="flex items-center space-x-3 w-full max-w-md">
            <div className="flex-1 flex items-center space-x-2 px-4 py-3 bg-surface border border-border rounded-lg">
              <Icon name="Link" size={18} className="text-text-secondary" />
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 bg-transparent text-sm text-text-secondary outline-none"
              />
            </div>
            <Button
              variant={copied ? "success" : "outline"}
              size="default"
              onClick={copyToClipboard}
              iconName={copied ? "Check" : "Copy"}
              className="flex-shrink-0"
            >
              {copied ? 'Copied!' : 'Copy'}
            </Button>
          </div>

          {/* Share Stats */}
          <div className="flex items-center space-x-6 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Share" size={16} />
              <span>{template?.shareCount} shares</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Eye" size={16} />
              <span>{template?.viewCount} views this week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialShare;