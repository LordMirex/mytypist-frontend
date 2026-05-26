import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import FormSection from './components/FormSection';
import PreviewSection from './components/PreviewSection';
import TemplateSelector from './components/TemplateSelector';
import RegistrationModal from './components/RegistrationModal';
import MobilePreviewToggle from './components/MobilePreviewToggle';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const DocumentCreatorStudio = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // State management
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [formData, setFormData] = useState({});
  const [showTemplateSelector, setShowTemplateSelector] = useState(false);
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);
  const [isGuest, setIsGuest] = useState(true);
  const [mobileView, setMobileView] = useState('form'); // 'form' or 'preview'
  const [isFullScreenPreview, setIsFullScreenPreview] = useState(false);

  // Initialize with template from URL params if available
  useEffect(() => {
    const templateId = searchParams?.get('template');
    if (templateId) {
      // Mock template data based on ID
      const mockTemplate = {
        id: templateId,
        name: getTemplateName(templateId),
        type: getTemplateType(templateId),
        category: 'business'
      };
      setSelectedTemplate(mockTemplate);
    } else {
      setShowTemplateSelector(true);
    }
  }, [searchParams]);

  // Helper functions for template data
  const getTemplateName = (id) => {
    const names = {
      'business-letter-1': 'Professional Business Letter',
      'resume-modern-1': 'Modern Professional Resume',
      'invoice-standard-1': 'Standard Business Invoice'
    };
    return names?.[id] || 'Professional Document';
  };

  const getTemplateType = (id) => {
    if (id?.includes('letter')) return 'business-letter';
    if (id?.includes('resume')) return 'resume';
    if (id?.includes('invoice')) return 'invoice';
    return 'business-letter';
  };

  // Calculate form completion progress
  const calculateProgress = () => {
    if (!selectedTemplate) return 0;
    
    const requiredFields = getRequiredFieldsCount(selectedTemplate?.type);
    const completedFields = Object.values(formData)?.filter(value => 
      value && value?.toString()?.trim() !== ''
    )?.length;
    
    return Math.min(Math.round((completedFields / requiredFields) * 100), 100);
  };

  const getRequiredFieldsCount = (templateType) => {
    const counts = {
      'business-letter': 8,
      'resume': 6,
      'invoice': 8
    };
    return counts?.[templateType] || 8;
  };

  // Event handlers
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setFormData({});
    // Update URL without navigation
    const newUrl = new URL(window.location);
    newUrl?.searchParams?.set('template', template?.id);
    window.history?.replaceState({}, '', newUrl);
  };

  const handleFormChange = (fieldId, value) => {
    setFormData(prev => ({
      ...prev,
      [fieldId]: value
    }));
  };

  const handleSaveDraft = () => {
    if (isGuest) {
      setShowRegistrationModal(true);
    } else {
      // Save draft logic for registered users
      console.log('Draft saved:', { template: selectedTemplate, data: formData });
    }
  };

  const handleDownload = () => {
    // Mock download functionality
    console.log('Downloading PDF:', { template: selectedTemplate, data: formData });
    
    // Show registration modal for guests after download
    if (isGuest) {
      setTimeout(() => setShowRegistrationModal(true), 1000);
    }
  };

  const handleRegistration = (userData) => {
    console.log('User registered:', userData);
    setIsGuest(false);
    // Handle successful registration
  };

  const handleChangeTemplate = () => {
    setShowTemplateSelector(true);
  };

  const handleBackToGallery = () => {
    navigate('/template-gallery');
  };

  const progress = calculateProgress();

  // If no template selected and selector is closed, redirect to gallery
  if (!selectedTemplate && !showTemplateSelector) {
    navigate('/template-gallery');
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {/* Main Content */}
      <div className="pt-16 h-screen flex flex-col">
        {/* Top Bar - Enhanced Design */}
        <div className="flex-shrink-0 bg-surface/95 backdrop-blur-sm border-b border-border px-4 sm:px-6 lg:px-8 py-4 shadow-subtle">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                size="sm"
                iconName="ArrowLeft"
                onClick={handleBackToGallery}
                className="hover:shadow-subtle transition-all duration-200"
              >
                Back to Gallery
              </Button>
              
              {selectedTemplate && (
                <>
                  {/* Breadcrumb separator */}
                  <div className="hidden sm:block w-px h-4 bg-border"></div>
                  
                  <div className="hidden sm:flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-brand-authority rounded-lg flex items-center justify-center shadow-subtle">
                      <Icon name="FileText" size={16} color="white" />
                    </div>
                    <div>
                      <h1 className="font-semibold text-foreground">{selectedTemplate?.name}</h1>
                      <p className="text-xs text-text-secondary">Document Creator Studio</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex items-center gap-3">
              {/* Progress indicator */}
              {selectedTemplate && (
                <div className="hidden md:flex items-center gap-2 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-success animate-pulse"></div>
                  <span>{progress}% complete</span>
                </div>
              )}

              {selectedTemplate && (
                <Button
                  variant="outline"
                  size="sm"
                  iconName="RefreshCw"
                  onClick={handleChangeTemplate}
                  className="hover:shadow-subtle transition-all duration-200"
                >
                  Change Template
                </Button>
              )}
              
              <Button
                variant="ghost"
                size="sm"
                iconName="HelpCircle"
                onClick={() => {/* Show help */}}
                className="hover:shadow-subtle transition-all duration-200"
              >
                Help
              </Button>
            </div>
          </div>
        </div>

        {/* Studio Layout */}
        {selectedTemplate && (
          <>
            {/* Desktop Layout - Enhanced */}
            <div className="hidden md:flex flex-1 overflow-hidden">
              {/* Form Section */}
              <div className="w-1/2 border-r border-border bg-surface/50">
                <FormSection
                  selectedTemplate={selectedTemplate}
                  formData={formData}
                  onFormChange={handleFormChange}
                  onSaveDraft={handleSaveDraft}
                  isGuest={isGuest}
                  onShowRegistration={() => setShowRegistrationModal(true)}
                  progress={progress}
                />
              </div>

              {/* Preview Section */}
              <div className="w-1/2 bg-canvas/50">
                <PreviewSection
                  selectedTemplate={selectedTemplate}
                  formData={formData}
                  onFullScreen={setIsFullScreenPreview}
                />
              </div>
            </div>

            {/* Mobile Layout - Enhanced */}
            <div className="md:hidden flex-1 overflow-hidden pb-20">
              {mobileView === 'form' ? (
                <div className="bg-surface/50 h-full">
                  <FormSection
                    selectedTemplate={selectedTemplate}
                    formData={formData}
                    onFormChange={handleFormChange}
                    onSaveDraft={handleSaveDraft}
                    isGuest={isGuest}
                    onShowRegistration={() => setShowRegistrationModal(true)}
                    progress={progress}
                  />
                </div>
              ) : (
                <div className="bg-canvas/50 h-full">
                  <PreviewSection
                    selectedTemplate={selectedTemplate}
                    formData={formData}
                    onFullScreen={setIsFullScreenPreview}
                  />
                </div>
              )}
            </div>

            {/* Mobile Bottom Controls - Enhanced */}
            <div className="md:hidden">
              <MobilePreviewToggle
                currentView={mobileView}
                onViewChange={setMobileView}
                progress={progress}
                onSaveDraft={handleSaveDraft}
                onDownload={handleDownload}
              />
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      {showTemplateSelector && (
        <TemplateSelector
          selectedTemplate={selectedTemplate}
          onTemplateSelect={handleTemplateSelect}
          onClose={() => setShowTemplateSelector(false)}
        />
      )}
      
      {showRegistrationModal && (
        <RegistrationModal
          isOpen={showRegistrationModal}
          onClose={() => setShowRegistrationModal(false)}
          onRegister={handleRegistration}
        />
      )}
      
      {/* Full Screen Preview Overlay - Enhanced */}
      {isFullScreenPreview && (
        <div className="fixed inset-0 z-50 bg-canvas/95 backdrop-blur-sm animate-fade-in">
          <PreviewSection
            selectedTemplate={selectedTemplate}
            formData={formData}
            onFullScreen={setIsFullScreenPreview}
            isFullScreen={true}
          />
        </div>
      )}
    </div>
  );
};

export default DocumentCreatorStudio;