import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Button from '../../../components/ui/Button';

const FormSection = ({ 
  selectedTemplate, 
  formData, 
  onFormChange, 
  onSaveDraft, 
  isGuest, 
  onShowRegistration,
  progress 
}) => {
  const [showHelp, setShowHelp] = useState({});
  const [autoSuggestions, setAutoSuggestions] = useState({});

  // Mock form fields based on template type
  const getFormFields = (templateType) => {
    const commonFields = {
      'business-letter': [
        { id: 'senderName', label: 'Your Name', type: 'text', required: true, placeholder: 'John Smith' },
        { id: 'senderTitle', label: 'Your Title', type: 'text', placeholder: 'Marketing Manager' },
        { id: 'senderCompany', label: 'Company Name', type: 'text', placeholder: 'ABC Corporation' },
        { id: 'senderAddress', label: 'Your Address', type: 'textarea', placeholder: '123 Business St, Suite 100\nNew York, NY 10001' },
        { id: 'recipientName', label: 'Recipient Name', type: 'text', required: true, placeholder: 'Jane Doe' },
        { id: 'recipientTitle', label: 'Recipient Title', type: 'text', placeholder: 'Director of Operations' },
        { id: 'recipientCompany', label: 'Recipient Company', type: 'text', placeholder: 'XYZ Industries' },
        { id: 'recipientAddress', label: 'Recipient Address', type: 'textarea', placeholder: '456 Corporate Ave\nBoston, MA 02101' },
        { id: 'date', label: 'Date', type: 'date', required: true },
        { id: 'subject', label: 'Subject Line', type: 'text', required: true, placeholder: 'Partnership Proposal Discussion' },
        { id: 'salutation', label: 'Salutation', type: 'select', options: [
          { value: 'Dear', label: 'Dear' },
          { value: 'Hello', label: 'Hello' },
          { value: 'Greetings', label: 'Greetings' }
        ]},
        { id: 'bodyContent', label: 'Letter Content', type: 'textarea', required: true, placeholder: 'I am writing to discuss...' },
        { id: 'closing', label: 'Closing', type: 'select', options: [
          { value: 'Sincerely', label: 'Sincerely' },
          { value: 'Best regards', label: 'Best regards' },
          { value: 'Kind regards', label: 'Kind regards' }
        ]}
      ],
      'resume': [
        { id: 'fullName', label: 'Full Name', type: 'text', required: true, placeholder: 'John Smith' },
        { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'john.smith@email.com' },
        { id: 'phone', label: 'Phone Number', type: 'tel', required: true, placeholder: '(555) 123-4567' },
        { id: 'address', label: 'Address', type: 'text', placeholder: 'New York, NY' },
        { id: 'linkedin', label: 'LinkedIn Profile', type: 'url', placeholder: 'https://linkedin.com/in/johnsmith' },
        { id: 'summary', label: 'Professional Summary', type: 'textarea', required: true, placeholder: 'Experienced marketing professional with 5+ years...' },
        { id: 'experience', label: 'Work Experience', type: 'textarea', required: true, placeholder: 'Marketing Manager - ABC Corp (2020-Present)\n• Led digital marketing campaigns...' },
        { id: 'education', label: 'Education', type: 'textarea', required: true, placeholder: 'Bachelor of Business Administration\nUniversity of California, 2018' },
        { id: 'skills', label: 'Skills', type: 'textarea', placeholder: 'Digital Marketing, SEO, Google Analytics, Project Management' }
      ],
      'invoice': [
        { id: 'invoiceNumber', label: 'Invoice Number', type: 'text', required: true, placeholder: 'INV-2024-001' },
        { id: 'invoiceDate', label: 'Invoice Date', type: 'date', required: true },
        { id: 'dueDate', label: 'Due Date', type: 'date', required: true },
        { id: 'billFromName', label: 'Your Business Name', type: 'text', required: true, placeholder: 'ABC Services LLC' },
        { id: 'billFromAddress', label: 'Your Address', type: 'textarea', placeholder: '123 Business St\nNew York, NY 10001' },
        { id: 'billToName', label: 'Client Name', type: 'text', required: true, placeholder: 'XYZ Corporation' },
        { id: 'billToAddress', label: 'Client Address', type: 'textarea', placeholder: '456 Client Ave\nBoston, MA 02101' },
        { id: 'description', label: 'Service Description', type: 'textarea', required: true, placeholder: 'Web Development Services\nConsulting Hours\nProject Management' },
        { id: 'amount', label: 'Total Amount', type: 'number', required: true, placeholder: '2500.00' },
        { id: 'currency', label: 'Currency', type: 'select', options: [
          { value: 'USD', label: 'USD ($)' },
          { value: 'EUR', label: 'EUR (€)' },
          { value: 'GBP', label: 'GBP (£)' }
        ]},
        { id: 'paymentTerms', label: 'Payment Terms', type: 'textarea', placeholder: 'Payment due within 30 days of invoice date.' }
      ]
    };

    return commonFields?.[templateType] || commonFields?.['business-letter'];
  };

  const formFields = getFormFields(selectedTemplate?.type || 'business-letter');

  const toggleHelp = (fieldId) => {
    setShowHelp(prev => ({
      ...prev,
      [fieldId]: !prev?.[fieldId]
    }));
  };

  const getHelpText = (fieldId) => {
    const helpTexts = {
      senderName: "Enter your full name as it should appear on the document",
      subject: "A clear, concise subject line that summarizes the purpose of your letter",
      bodyContent: "The main content of your letter. Be clear, professional, and concise",
      amount: "Enter the total amount without currency symbols",
      summary: "A brief overview of your professional background and key achievements"
    };
    return helpTexts?.[fieldId] || "Additional information to help you complete this field";
  };

  const handleFieldChange = (fieldId, value) => {
    onFormChange(fieldId, value);
    
    // Show registration prompt for guests after significant progress
    if (isGuest && progress > 60 && Math.random() > 0.7) {
      setTimeout(() => onShowRegistration(), 1000);
    }
  };

  const renderField = (field) => {
    const value = formData?.[field?.id] || '';

    switch (field?.type) {
      case 'select':
        return (
          <Select
            key={field?.id}
            label={field?.label}
            required={field?.required}
            options={field?.options}
            value={value}
            onChange={(newValue) => handleFieldChange(field?.id, newValue)}
            placeholder={field?.placeholder}
            className="mb-4"
          />
        );

      case 'textarea':
        return (
          <div key={field?.id} className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              {field?.label}
              {field?.required && <span className="text-error ml-1">*</span>}
            </label>
            <textarea
              value={value}
              onChange={(e) => handleFieldChange(field?.id, e?.target?.value)}
              placeholder={field?.placeholder}
              required={field?.required}
              rows={4}
              className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none text-sm"
            />
          </div>
        );

      case 'checkbox':
        return (
          <Checkbox
            key={field?.id}
            label={field?.label}
            checked={value}
            onChange={(e) => handleFieldChange(field?.id, e?.target?.checked)}
            className="mb-4"
          />
        );

      default:
        return (
          <Input
            key={field?.id}
            label={field?.label}
            type={field?.type}
            value={value}
            onChange={(e) => handleFieldChange(field?.id, e?.target?.value)}
            placeholder={field?.placeholder}
            required={field?.required}
            className="mb-4"
          />
        );
    }
  };

  return (
    <div className="h-full flex flex-col bg-surface">
      {/* Header */}
      <div className="flex-shrink-0 p-6 border-b border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold text-foreground">
              {selectedTemplate?.name || 'Document Creator'}
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Fill out the form to generate your document
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            iconName="HelpCircle"
            onClick={() => setShowHelp(prev => ({ ...prev, general: !prev?.general }))}
          >
            Help
          </Button>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2">
          <div 
            className="bg-primary h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between text-xs text-text-secondary mt-2">
          <span>{progress}% Complete</span>
          <span>Est. {Math.max(1, Math.ceil((100 - progress) / 20))} min remaining</span>
        </div>
      </div>
      {/* Form Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <form className="space-y-4">
          {formFields?.map((field) => (
            <div key={field?.id} className="relative">
              <div className="flex items-start gap-2">
                <div className="flex-1">
                  {renderField(field)}
                </div>
                <button
                  type="button"
                  onClick={() => toggleHelp(field?.id)}
                  className="mt-8 p-1 text-text-secondary hover:text-foreground transition-colors"
                >
                  <Icon name="HelpCircle" size={16} />
                </button>
              </div>
              
              {showHelp?.[field?.id] && (
                <div className="mt-2 p-3 bg-muted rounded-lg text-sm text-text-secondary">
                  <Icon name="Info" size={14} className="inline mr-2" />
                  {getHelpText(field?.id)}
                </div>
              )}
            </div>
          ))}
        </form>

        {/* Guest Registration Prompt */}
        {isGuest && progress > 40 && (
          <div className="mt-8 p-4 bg-accent/10 border border-accent/20 rounded-lg">
            <div className="flex items-start gap-3">
              <Icon name="Save" size={20} className="text-accent mt-0.5" />
              <div className="flex-1">
                <h3 className="font-medium text-foreground mb-1">Save Your Progress</h3>
                <p className="text-sm text-text-secondary mb-3">
                  Create a free account to save your work and access it anytime.
                </p>
                <Button
                  variant="default"
                  size="sm"
                  onClick={onShowRegistration}
                  className="shadow-conversion"
                >
                  Create Free Account
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Floating Toolbar */}
      <div className="flex-shrink-0 p-4 border-t border-border bg-surface">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" iconName="Undo2">
              Undo
            </Button>
            <Button variant="ghost" size="sm" iconName="Redo2">
              Redo
            </Button>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              iconName="Save"
              onClick={onSaveDraft}
            >
              Save Draft
            </Button>
            <Button
              variant="default"
              size="sm"
              iconName="Download"
              className="shadow-conversion"
            >
              Download PDF
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;