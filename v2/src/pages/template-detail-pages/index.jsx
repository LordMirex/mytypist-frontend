import React, { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import TemplateHero from './components/TemplateHero';
import WhatYouNeedSection from './components/WhatYouNeedSection';
import SampleOutputs from './components/SampleOutputs';
import ReviewsSection from './components/ReviewsSection';
import RelatedTemplates from './components/RelatedTemplates';
import FAQSection from './components/FAQSection';
import SocialShare from './components/SocialShare';
import StickyMobileCTA from './components/StickyMobileCTA';

const TemplateDetailPages = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const templateId = searchParams?.get('template') || 'business-proposal';

  // Mock template data
  const templateData = {
    id: 'business-proposal',
    name: 'Professional Business Proposal Template',
    description: 'Create compelling business proposals that win clients and secure deals. This comprehensive template includes all essential sections with professional formatting and persuasive language structures.',
    category: 'Business',
    subcategory: 'Proposals',
    downloads: 15420,
    rating: 4.8,
    reviewCount: 342,
    completionTime: '8 minutes',
    shareCount: 1250,
    viewCount: 3420,
    previewImage: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=1000&fit=crop',
    isPremium: false
  };

  const requirementsData = [
    {
      title: 'Company Information',
      icon: 'Building2',
      items: [
        { 
          name: 'Company name and logo', 
          description: 'Your business name and brand logo for professional presentation' 
        },
        { 
          name: 'Contact details', 
          description: 'Address, phone, email, and website information' 
        },
        { 
          name: 'Company background', 
          description: 'Brief history and core competencies' 
        }
      ]
    },
    {
      title: 'Project Details',
      icon: 'FileText',
      items: [
        { 
          name: 'Project scope and objectives', 
          description: 'Clear definition of what you will deliver' 
        },
        { 
          name: 'Timeline and milestones', 
          description: 'Key dates and project phases' 
        },
        { 
          name: 'Budget and pricing', 
          description: 'Cost breakdown and payment terms' 
        }
      ]
    }
  ];

  const sampleOutputs = [
    {
      title: 'Consulting Services',
      description: 'A comprehensive proposal for management consulting services, showcasing strategic analysis and implementation roadmap.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=800&fit=crop',
      features: [
        'Executive summary with key value propositions',
        'Detailed methodology and approach',
        'Timeline with clear deliverables',
        'Competitive pricing structure'
      ],
      useCase: 'Management consultants, business advisors, and strategic planning professionals',
      completionTime: '6 min',
      satisfaction: 96
    },
    {
      title: 'Software Development',
      description: 'Technical proposal template for software projects, including technical specifications and development phases.',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=800&fit=crop',
      features: [
        'Technical requirements analysis',
        'Development methodology overview',
        'Resource allocation and team structure',
        'Risk assessment and mitigation'
      ],
      useCase: 'Software agencies, freelance developers, and tech consultants',
      completionTime: '10 min',
      satisfaction: 94
    },
    {
      title: 'Marketing Campaign',
      description: 'Creative proposal for marketing campaigns with strategy, creative concepts, and performance metrics.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=800&fit=crop',
      features: [
        'Market analysis and target audience',
        'Creative strategy and concepts',
        'Media planning and budget allocation',
        'Success metrics and KPIs'
      ],
      useCase: 'Marketing agencies, brand consultants, and creative professionals',
      completionTime: '7 min',
      satisfaction: 98
    }
  ];

  const reviewsData = [
    {
      name: 'Sarah Mitchell',
      role: 'Business Consultant',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
      rating: 5,
      date: 'Dec 15, 2024',
      comment: 'This template saved me hours of work! The structure is perfect and the formatting looks incredibly professional. My client was impressed with the proposal quality.',
      verified: true
    },
    {
      name: 'Michael Rodriguez',
      role: 'Software Developer',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg',
      rating: 5,
      date: 'Dec 12, 2024',
      comment: 'Excellent template with all the sections I needed. The technical requirements section was particularly well-structured. Highly recommend for any tech proposals.',
      verified: true
    },
    {
      name: 'Emily Chen',
      role: 'Marketing Director',
      avatar: 'https://randomuser.me/api/portraits/women/28.jpg',
      rating: 4,
      date: 'Dec 10, 2024',
      comment: 'Great starting point for our marketing proposals. Easy to customize and the client loved the professional appearance. Will definitely use again.',
      verified: true
    },
    {
      name: 'David Thompson',
      role: 'Freelance Consultant',
      avatar: 'https://randomuser.me/api/portraits/men/38.jpg',
      rating: 5,
      date: 'Dec 8, 2024',
      comment: 'As a freelancer, this template gives me the professional edge I need. The pricing section format helped me present my rates clearly and confidently.',
      verified: true
    },
    {
      name: 'Lisa Wang',
      role: 'Project Manager',
      avatar: 'https://randomuser.me/api/portraits/women/41.jpg',
      rating: 4,
      date: 'Dec 5, 2024',
      comment: 'Well-organized template that covers all essential elements. The timeline section is particularly useful for project-based proposals.',
      verified: false
    },
    {
      name: 'James Parker',
      role: 'Business Owner',
      avatar: 'https://randomuser.me/api/portraits/men/52.jpg',
      rating: 5,
      date: 'Dec 3, 2024',
      comment: 'This template helped me win my biggest client yet! The professional layout and comprehensive sections made all the difference.',
      verified: true
    }
  ];

  const ratingBreakdown = [
    { stars: 5, percentage: 78 },
    { stars: 4, percentage: 18 },
    { stars: 3, percentage: 3 },
    { stars: 2, percentage: 1 },
    { stars: 1, percentage: 0 }
  ];

  const relatedTemplates = [
    {
      id: 'project-proposal',
      name: 'Project Proposal Template',
      description: 'Comprehensive template for project-based proposals with detailed scope and deliverables.',
      category: 'Business',
      previewImage: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      rating: 4.7,
      downloads: '8.2k',
      completionTime: '6 min',
      isPremium: false
    },
    {
      id: 'service-agreement',
      name: 'Service Agreement Contract',
      description: 'Professional service agreement template with terms, conditions, and payment details.',
      category: 'Legal',
      previewImage: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop',
      rating: 4.9,
      downloads: '12.1k',
      completionTime: '4 min',
      isPremium: true
    },
    {
      id: 'invoice-template',
      name: 'Professional Invoice Template',
      description: 'Clean and professional invoice template for businesses and freelancers.',
      category: 'Finance',
      previewImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=300&fit=crop',
      rating: 4.6,
      downloads: '25.3k',
      completionTime: '2 min',
      isPremium: false
    }
  ];

  const faqData = [
    {
      question: 'Can I customize this template for my specific industry?',
      answer: 'Absolutely! This template is designed to be fully customizable. You can modify sections, add industry-specific content, and adjust the formatting to match your brand guidelines.',
      additionalInfo: 'The template includes placeholder text and guidance for various industries including consulting, technology, marketing, and professional services.'
    },
    {
      question: 'What file formats are available for download?',
      answer: 'You can download your completed proposal in PDF format for professional presentation, as well as editable Word document format for future modifications.',
      additionalInfo: 'Premium users also get access to PowerPoint presentation format for client meetings.'
    },
    {
      question: 'How long does it typically take to complete?',
      answer: 'Most users complete their proposal in 6-10 minutes. The time varies depending on the complexity of your project and how much detail you include in each section.',
      additionalInfo: 'You can save your progress and return later to complete any sections you need more time to prepare.'
    },
    {
      question: 'Can I use this template for multiple proposals?',
      answer: 'Yes! Once you create an account, you can use this template unlimited times. You can also save different versions for different types of proposals or clients.',
      additionalInfo: 'Premium users can create template variations and save them as custom templates for even faster proposal creation.'
    },
    {
      question: 'Is there any usage restriction or licensing requirement?',
      answer: 'You have full commercial usage rights for any proposals you create. There are no attribution requirements or licensing fees for the documents you generate.',
      additionalInfo: 'However, you cannot redistribute or resell the template itself to other users.'
    }
  ];

  const handleCreateDocument = () => {
    navigate(`/document-creator-studio?template=${templateId}`);
  };

  return (
    <>
      <Helmet>
        <title>{templateData?.name} - MyTypist</title>
        <meta name="description" content={templateData?.description} />
        <meta property="og:title" content={`${templateData?.name} - MyTypist`} />
        <meta property="og:description" content={templateData?.description} />
        <meta property="og:image" content={templateData?.previewImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${templateData?.name} - MyTypist`} />
        <meta name="twitter:description" content={templateData?.description} />
        <meta name="twitter:image" content={templateData?.previewImage} />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": templateData?.name,
            "description": templateData?.description,
            "image": templateData?.previewImage,
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": templateData?.rating,
              "reviewCount": templateData?.reviewCount
            },
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        <main className="pt-16">
          <TemplateHero 
            template={templateData} 
            onCreateDocument={handleCreateDocument}
          />
          
          <WhatYouNeedSection requirements={requirementsData} />
          
          <SampleOutputs samples={sampleOutputs} />
          
          <ReviewsSection 
            reviews={reviewsData}
            overallRating={templateData?.rating}
            ratingBreakdown={ratingBreakdown}
          />
          
          <SocialShare template={templateData} />
          
          <FAQSection faqs={faqData} />
          
          <RelatedTemplates templates={relatedTemplates} />
          
          <StickyMobileCTA 
            template={templateData}
            onCreateDocument={handleCreateDocument}
          />
        </main>
      </div>
    </>
  );
};

export default TemplateDetailPages;