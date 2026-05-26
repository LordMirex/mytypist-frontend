import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PreviewSection = ({ selectedTemplate, formData, onFullScreen }) => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const previewRef = useRef(null);

  const totalPages = 1; // Mock single page for now

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 25, 200));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 25, 50));
  };

  const handleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
    onFullScreen?.(!isFullScreen);
  };

  // Generate preview content based on template type and form data
  const generatePreviewContent = () => {
    const templateType = selectedTemplate?.type || 'business-letter';
    
    switch (templateType) {
      case 'business-letter':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-right">
              <div className="text-sm">
                <div>{formData?.senderName || '[Your Name]'}</div>
                <div>{formData?.senderTitle || '[Your Title]'}</div>
                <div>{formData?.senderCompany || '[Company Name]'}</div>
                <div className="whitespace-pre-line mt-2">
                  {formData?.senderAddress || '[Your Address]'}
                </div>
              </div>
            </div>
            {/* Date */}
            <div className="text-right">
              <div className="text-sm">
                {formData?.date ? new Date(formData.date)?.toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                }) : '[Date]'}
              </div>
            </div>
            {/* Recipient */}
            <div>
              <div className="text-sm">
                <div>{formData?.recipientName || '[Recipient Name]'}</div>
                <div>{formData?.recipientTitle || '[Recipient Title]'}</div>
                <div>{formData?.recipientCompany || '[Recipient Company]'}</div>
                <div className="whitespace-pre-line mt-2">
                  {formData?.recipientAddress || '[Recipient Address]'}
                </div>
              </div>
            </div>
            {/* Subject */}
            <div>
              <div className="text-sm font-medium">
                <strong>Re: {formData?.subject || '[Subject Line]'}</strong>
              </div>
            </div>
            {/* Body */}
            <div>
              <div className="text-sm mb-4">
                {formData?.salutation || 'Dear'} {formData?.recipientName || '[Recipient Name]'},
              </div>
              <div className="text-sm whitespace-pre-line leading-relaxed">
                {formData?.bodyContent || '[Letter content will appear here as you type...]'}
              </div>
            </div>
            {/* Closing */}
            <div className="mt-8">
              <div className="text-sm">
                <div>{formData?.closing || 'Sincerely'},</div>
                <div className="mt-8">{formData?.senderName || '[Your Name]'}</div>
                <div>{formData?.senderTitle || '[Your Title]'}</div>
              </div>
            </div>
          </div>
        );

      case 'resume':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="text-center border-b border-gray-300 pb-4">
              <h1 className="text-2xl font-bold">{formData?.fullName || '[Your Name]'}</h1>
              <div className="text-sm mt-2 space-y-1">
                <div>{formData?.email || '[Email Address]'} | {formData?.phone || '[Phone Number]'}</div>
                <div>{formData?.address || '[Address]'}</div>
                {formData?.linkedin && <div>{formData?.linkedin}</div>}
              </div>
            </div>
            {/* Summary */}
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">
                PROFESSIONAL SUMMARY
              </h2>
              <div className="text-sm whitespace-pre-line">
                {formData?.summary || '[Professional summary will appear here...]'}
              </div>
            </div>
            {/* Experience */}
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">
                WORK EXPERIENCE
              </h2>
              <div className="text-sm whitespace-pre-line">
                {formData?.experience || '[Work experience will appear here...]'}
              </div>
            </div>
            {/* Education */}
            <div>
              <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">
                EDUCATION
              </h2>
              <div className="text-sm whitespace-pre-line">
                {formData?.education || '[Education details will appear here...]'}
              </div>
            </div>
            {/* Skills */}
            {formData?.skills && (
              <div>
                <h2 className="text-lg font-semibold border-b border-gray-300 pb-1 mb-3">
                  SKILLS
                </h2>
                <div className="text-sm">
                  {formData?.skills}
                </div>
              </div>
            )}
          </div>
        );

      case 'invoice':
        return (
          <div className="space-y-6">
            {/* Header */}
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl font-bold">INVOICE</h1>
                <div className="text-sm mt-2">
                  <div>Invoice #: {formData?.invoiceNumber || '[Invoice Number]'}</div>
                  <div>Date: {formData?.invoiceDate ? new Date(formData.invoiceDate)?.toLocaleDateString() : '[Invoice Date]'}</div>
                  <div>Due Date: {formData?.dueDate ? new Date(formData.dueDate)?.toLocaleDateString() : '[Due Date]'}</div>
                </div>
              </div>
            </div>
            {/* Bill From/To */}
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-2">Bill From:</h3>
                <div className="text-sm">
                  <div>{formData?.billFromName || '[Your Business Name]'}</div>
                  <div className="whitespace-pre-line mt-1">
                    {formData?.billFromAddress || '[Your Address]'}
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Bill To:</h3>
                <div className="text-sm">
                  <div>{formData?.billToName || '[Client Name]'}</div>
                  <div className="whitespace-pre-line mt-1">
                    {formData?.billToAddress || '[Client Address]'}
                  </div>
                </div>
              </div>
            </div>
            {/* Services */}
            <div>
              <h3 className="font-semibold mb-3">Description of Services:</h3>
              <div className="border border-gray-300">
                <div className="bg-gray-50 p-3 font-semibold text-sm border-b border-gray-300">
                  Description
                </div>
                <div className="p-3 text-sm whitespace-pre-line">
                  {formData?.description || '[Service description will appear here...]'}
                </div>
              </div>
            </div>
            {/* Total */}
            <div className="flex justify-end">
              <div className="w-64">
                <div className="border border-gray-300">
                  <div className="bg-gray-50 p-3 font-semibold text-sm border-b border-gray-300">
                    Total Amount
                  </div>
                  <div className="p-3 text-lg font-bold">
                    {formData?.currency || 'USD'} ${formData?.amount || '0.00'}
                  </div>
                </div>
              </div>
            </div>
            {/* Payment Terms */}
            {formData?.paymentTerms && (
              <div>
                <h3 className="font-semibold mb-2">Payment Terms:</h3>
                <div className="text-sm whitespace-pre-line">
                  {formData?.paymentTerms}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="text-center text-text-secondary py-12">
            <Icon name="FileText" size={48} className="mx-auto mb-4 opacity-50" />
            <p>Your document preview will appear here as you fill out the form.</p>
          </div>
        );
    }
  };

  return (
    <div className={`h-full flex flex-col bg-canvas ${isFullScreen ? 'fixed inset-0 z-50' : ''}`}>
      {/* Header */}
      <div className="flex-shrink-0 p-4 border-b border-border bg-surface">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Eye" size={20} className="text-primary" />
            <h3 className="font-medium text-foreground">Live Preview</h3>
          </div>
          
          <div className="flex items-center gap-2">
            {/* Zoom Controls */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <Button
                variant="ghost"
                size="sm"
                iconName="Minus"
                onClick={handleZoomOut}
                disabled={zoomLevel <= 50}
              />
              <span className="text-xs font-medium px-2 min-w-[50px] text-center">
                {zoomLevel}%
              </span>
              <Button
                variant="ghost"
                size="sm"
                iconName="Plus"
                onClick={handleZoomIn}
                disabled={zoomLevel >= 200}
              />
            </div>

            {/* Page Navigation */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ChevronLeft"
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage <= 1}
                />
                <span className="text-xs px-2">
                  {currentPage} of {totalPages}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  iconName="ChevronRight"
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage >= totalPages}
                />
              </div>
            )}

            {/* Full Screen */}
            <Button
              variant="ghost"
              size="sm"
              iconName={isFullScreen ? "Minimize2" : "Maximize2"}
              onClick={handleFullScreen}
            />
          </div>
        </div>
      </div>

      {/* Preview Content */}
      <div className="flex-1 overflow-auto p-6">
        <div className="flex justify-center">
          <div
            ref={previewRef}
            className="bg-white shadow-brand rounded-lg transition-transform duration-200"
            style={{
              transform: `scale(${zoomLevel / 100})`,
              transformOrigin: 'top center',
              width: '8.5in',
              minHeight: '11in',
              padding: '1in'
            }}
          >
            {generatePreviewContent()}
          </div>
        </div>
      </div>

      {/* Mobile Preview Toggle (Hidden on Desktop) */}
      <div className="md:hidden flex-shrink-0 p-4 border-t border-border bg-surface">
        <Button
          variant="outline"
          fullWidth
          iconName="Eye"
          onClick={() => {/* Toggle preview mode on mobile */}}
        >
          Switch to Form
        </Button>
      </div>
    </div>
  );
};

export default PreviewSection;