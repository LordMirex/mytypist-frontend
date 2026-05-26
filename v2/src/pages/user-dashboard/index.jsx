import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import WelcomeHeader from './components/WelcomeHeader';
import TokenBalance from './components/TokenBalance';
import RecentDocuments from './components/RecentDocuments';
import SavedDrafts from './components/SavedDrafts';
import RecommendedTemplates from './components/RecommendedTemplates';
import QuickStartCards from './components/QuickStartCards';
import AchievementBadges from './components/AchievementBadges';
import AccountSidebar from './components/AccountSidebar';
import DocumentHistory from './components/DocumentHistory';
import Icon from '../../components/AppIcon';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [notificationSettings, setNotificationSettings] = useState({
    newTemplates: true,
    featureAnnouncements: true,
    weeklyDigest: false
  });

  // Mock user data
  const userData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    joinDate: "2024-01-15",
    documentsCreated: 47,
    timeSaved: 23.5
  };

  // Mock token data
  const tokenData = {
    tokensRemaining: 3,
    totalTokens: 10,
    planType: "Free Plan"
  };

  // Mock recent documents
  const recentDocuments = [
    {
      id: 1,
      title: "Marketing Manager Resume",
      type: "resume",
      createdAt: "2024-09-05T10:30:00Z",
      thumbnail: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      downloadCount: 3,
      isShared: true
    },
    {
      id: 2,
      title: "Client Proposal - Q4 Campaign",
      type: "proposal",
      createdAt: "2024-09-04T14:15:00Z",
      thumbnail: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?w=400&h=300&fit=crop",
      downloadCount: 7,
      isShared: false
    },
    {
      id: 3,
      title: "Invoice #INV-2024-089",
      type: "invoice",
      createdAt: "2024-09-03T09:45:00Z",
      thumbnail: "https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg?w=400&h=300&fit=crop",
      downloadCount: 1,
      isShared: false
    }
  ];

  // Mock saved drafts
  const savedDrafts = [
    {
      id: 1,
      title: "Cover Letter - Tech Startup",
      templateType: "Cover Letter",
      lastModified: "2024-09-06T08:20:00Z",
      completionPercentage: 75
    },
    {
      id: 2,
      title: "Business Contract Template",
      templateType: "Contract",
      lastModified: "2024-09-05T16:30:00Z",
      completionPercentage: 45
    }
  ];

  // Mock recommended templates
  const recommendedTemplates = [
    {
      id: 1,
      name: "Executive Resume",
      category: "business",
      description: "Professional resume template for senior-level positions with modern design and ATS optimization.",
      preview: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      usageCount: "2.3k",
      rating: 4.8,
      matchPercentage: 95,
      isPopular: true
    },
    {
      id: 2,
      name: "Project Proposal",
      category: "business",
      description: "Comprehensive project proposal template with timeline, budget, and deliverables sections.",
      preview: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?w=400&h=300&fit=crop",
      usageCount: "1.8k",
      rating: 4.7,
      matchPercentage: 88,
      isPopular: false
    },
    {
      id: 3,
      name: "Professional Invoice",
      category: "business",
      description: "Clean and professional invoice template with automatic calculations and payment terms.",
      preview: "https://images.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg?w=400&h=300&fit=crop",
      usageCount: "3.1k",
      rating: 4.9,
      matchPercentage: 82,
      isPopular: true
    }
  ];

  // Mock popular templates
  const popularTemplates = [
    {
      id: 1,
      name: "Modern Resume",
      usageCount: "1,247"
    },
    {
      id: 2,
      name: "Business Proposal",
      usageCount: "892"
    },
    {
      id: 3,
      name: "Cover Letter",
      usageCount: "756"
    }
  ];

  // Mock new features
  const newFeatures = [
    {
      id: 1,
      title: "AI Content Suggestions",
      description: "Get smart content recommendations while creating documents",
      releaseDate: "Sep 1, 2024"
    },
    {
      id: 2,
      title: "Collaboration Tools",
      description: "Share drafts and collaborate with team members in real-time",
      releaseDate: "Aug 28, 2024"
    }
  ];

  // Mock achievements
  const achievements = [
    {
      id: 1,
      type: "first-document",
      title: "First Steps",
      description: "Created your first document",
      rarity: "common",
      unlocked: true,
      unlockedAt: "2024-01-15T10:00:00Z",
      progress: 1,
      target: 1
    },
    {
      id: 2,
      type: "power-user",
      title: "Power User",
      description: "Created 50+ documents",
      rarity: "rare",
      unlocked: false,
      progress: 47,
      target: 50
    },
    {
      id: 3,
      type: "template-explorer",
      title: "Template Explorer",
      description: "Used 10 different template types",
      rarity: "epic",
      unlocked: false,
      progress: 7,
      target: 10
    },
    {
      id: 4,
      type: "sharing-champion",
      title: "Sharing Champion",
      description: "Shared 25 documents",
      rarity: "rare",
      unlocked: false,
      progress: 12,
      target: 25
    }
  ];

  // Mock user plan data
  const userPlan = {
    type: "free",
    name: "Free",
    description: "Perfect for getting started"
  };

  // Mock account benefits
  const accountBenefits = [
    {
      id: 1,
      icon: "FileText",
      title: "Documents Created",
      value: "47"
    },
    {
      id: 2,
      icon: "Clock",
      title: "Time Saved",
      value: "23.5 hours"
    },
    {
      id: 3,
      icon: "Download",
      title: "Total Downloads",
      value: "156"
    },
    {
      id: 4,
      icon: "Share2",
      title: "Documents Shared",
      value: "12"
    }
  ];

  // Mock upgrade opportunities
  const upgradeOpportunities = [
    {
      id: 1,
      title: "Unlimited Documents",
      description: "Create as many documents as you need",
      benefit: "No monthly limits"
    },
    {
      id: 2,
      title: "Premium Templates",
      description: "Access to exclusive professional templates",
      benefit: "50+ premium designs"
    }
  ];

  // Mock all documents for history
  const allDocuments = [
    ...recentDocuments,
    {
      id: 4,
      title: "Employee Handbook 2024",
      type: "contract",
      createdAt: "2024-09-01T11:20:00Z",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      downloadCount: 15,
      isShared: true
    },
    {
      id: 5,
      title: "Quarterly Report Template",
      type: "proposal",
      createdAt: "2024-08-28T13:45:00Z",
      thumbnail: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?w=400&h=300&fit=crop",
      downloadCount: 8,
      isShared: false
    }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'LayoutDashboard' },
    { id: 'documents', label: 'All Documents', icon: 'FileText' },
    { id: 'achievements', label: 'Achievements', icon: 'Award' },
    { id: 'settings', label: 'Settings', icon: 'Settings' }
  ];

  const handleNotificationChange = (setting) => {
    setNotificationSettings(prev => ({
      ...prev,
      [setting]: !prev?.[setting]
    }));
  };

  useEffect(() => {
    // Simulate checking for push notification permissions
    if ('Notification' in window) {
      console.log('Notification permission:', Notification.permission);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <WelcomeHeader 
            userName={userData?.name}
            documentsCreated={userData?.documentsCreated}
            timeSaved={userData?.timeSaved}
          />

          {/* Mobile Tab Navigation */}
          <div className="lg:hidden mb-6">
            <div className="flex space-x-1 bg-muted p-1 rounded-lg overflow-x-auto">
              {tabs?.map((tab) => (
                <button
                  key={tab?.id}
                  onClick={() => setActiveTab(tab?.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-all ${
                    activeTab === tab?.id
                      ? 'bg-primary text-white' :'text-text-secondary hover:text-foreground'
                  }`}
                >
                  <Icon name={tab?.icon} size={16} />
                  <span>{tab?.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {activeTab === 'overview' && (
                <>
                  <TokenBalance 
                    tokensRemaining={tokenData?.tokensRemaining}
                    totalTokens={tokenData?.totalTokens}
                    planType={tokenData?.planType}
                  />

                  <QuickStartCards 
                    popularTemplates={popularTemplates}
                    newFeatures={newFeatures}
                  />

                  <RecentDocuments documents={recentDocuments} />

                  <SavedDrafts drafts={savedDrafts} />

                  <RecommendedTemplates templates={recommendedTemplates} />
                </>
              )}

              {activeTab === 'documents' && (
                <DocumentHistory documents={allDocuments} />
              )}

              {activeTab === 'achievements' && (
                <AchievementBadges achievements={achievements} />
              )}

              {activeTab === 'settings' && (
                <div className="bg-card border border-border rounded-xl p-6">
                  <div className="flex items-center mb-6">
                    <Icon name="Settings" size={24} className="text-primary mr-2" />
                    <h3 className="text-lg font-semibold text-foreground">Account Settings</h3>
                  </div>

                  {/* Notification Settings */}
                  <div className="mb-8">
                    <h4 className="font-medium text-foreground mb-4">Notification Preferences</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-foreground text-sm">New Template Alerts</h5>
                          <p className="text-text-secondary text-xs">Get notified when new templates are added</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings?.newTemplates}
                            onChange={() => handleNotificationChange('newTemplates')}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-foreground text-sm">Feature Announcements</h5>
                          <p className="text-text-secondary text-xs">Stay updated on new features and improvements</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings?.featureAnnouncements}
                            onChange={() => handleNotificationChange('featureAnnouncements')}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="font-medium text-foreground text-sm">Weekly Digest</h5>
                          <p className="text-text-secondary text-xs">Weekly summary of your document activity</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={notificationSettings?.weeklyDigest}
                            onChange={() => handleNotificationChange('weeklyDigest')}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Account Information */}
                  <div className="border-t border-border pt-6">
                    <h4 className="font-medium text-foreground mb-4">Account Information</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Email</label>
                        <p className="text-text-secondary text-sm">{userData?.email}</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1">Member Since</label>
                        <p className="text-text-secondary text-sm">
                          {new Date(userData.joinDate)?.toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar - Hidden on mobile when not on overview */}
            <div className={`lg:col-span-1 ${activeTab !== 'overview' ? 'hidden lg:block' : ''}`}>
              {/* Desktop Tab Navigation */}
              <div className="hidden lg:block mb-6">
                <div className="space-y-1">
                  {tabs?.map((tab) => (
                    <button
                      key={tab?.id}
                      onClick={() => setActiveTab(tab?.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                        activeTab === tab?.id
                          ? 'bg-primary text-white' :'text-text-secondary hover:text-foreground hover:bg-muted'
                      }`}
                    >
                      <Icon name={tab?.icon} size={16} />
                      <span>{tab?.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <AccountSidebar 
                userPlan={userPlan}
                accountBenefits={accountBenefits}
                upgradeOpportunities={upgradeOpportunities}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;