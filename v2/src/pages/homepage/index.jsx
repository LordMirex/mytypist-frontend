import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import TrendingTemplates from './components/TrendingTemplates';
import BenefitsSection from './components/BenefitsSection';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>MyTypist - Professional Documents, Instantly | Document Creation Platform</title>
        <meta 
          name="description" 
          content="Create professional documents instantly with MyTypist. Choose from 50+ templates, get live previews, and download in seconds. No design skills required. Start free today!" 
        />
        <meta name="keywords" content="document templates, professional documents, business letters, invoices, resumes, document creator, PDF generator" />
        <meta property="og:title" content="MyTypist - Professional Documents, Instantly" />
        <meta property="og:description" content="Transform your ideas into polished documents with our intelligent template system. Join 127K+ users creating professional documents in seconds." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://mytypist.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        
        <main>
          <HeroSection />
          <TrendingTemplates />
          <BenefitsSection />
          <TestimonialsSection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Homepage;