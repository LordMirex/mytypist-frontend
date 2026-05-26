
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, PenTool, Upload, Users, CheckCircle, ArrowRight } from 'lucide-react';

const HowToUse = () => {
  const autoTypeSteps = [
    {
      step: '1',
      title: 'Choose a Template',
      description: 'Select from our library of professional templates or start from scratch.',
      icon: FileText
    },
    {
      step: '2',
      title: 'Customize Your Document',
      description: 'Add your content, insert dynamic fields, and format your document.',
      icon: Upload
    },
    {
      step: '3',
      title: 'Generate & Share',
      description: 'Create your document instantly and share it with your team or clients.',
      icon: Users
    }
  ];

  const autoSignSteps = [
    {
      step: '1',
      title: 'Upload Document',
      description: 'Upload your document or use one created with AutoType.',
      icon: Upload
    },
    {
      step: '2',
      title: 'Add Signature Fields',
      description: 'Drag and drop signature fields where signatures are needed.',
      icon: PenTool
    },
    {
      step: '3',
      title: 'Send for Signatures',
      description: 'Send to signers and track progress in real-time.',
      icon: CheckCircle
    }
  ];

  const features = [
    {
      title: 'Template Library',
      description: 'Access hundreds of professional templates for contracts, agreements, forms, and more.',
      benefits: ['Legal compliance', 'Professional formatting', 'Industry-specific options']
    },
    {
      title: 'Dynamic Fields',
      description: 'Insert smart fields that auto-populate with data to eliminate manual typing.',
      benefits: ['Reduce errors', 'Save time', 'Consistent formatting']
    },
    {
      title: 'Collaboration Tools',
      description: 'Work together with your team in real-time with comments and version control.',
      benefits: ['Real-time editing', 'Version history', 'Team permissions']
    },
    {
      title: 'Integration Hub',
      description: 'Connect with Google Drive, Dropbox, and other tools you already use.',
      benefits: ['Seamless workflow', 'Automatic syncing', 'Single sign-on']
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How to Use{' '}
              <span className="gradient-text">MyTypist</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Learn how to streamline your document workflow with AutoType and AutoSign. 
              Get started in minutes, not hours.
            </p>
            <Button size="lg" className="bg-brand-600 hover:bg-brand-700">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>

        {/* AutoType Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-brand-100 text-brand-800 rounded-full text-sm font-medium mb-4">
                <FileText className="w-4 h-4 mr-2" />
                AutoType
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Document Automation Made Simple
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Create professional documents in seconds with our intelligent automation tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {autoTypeSteps.map((step, index) => (
                <Card 
                  key={step.step}
                  className="text-center hover:shadow-lg transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-8 h-8 text-brand-600" />
                    </div>
                    <div className="text-3xl font-bold text-brand-600 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Demo Placeholder */}
            <div className="bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-bold text-brand-900 mb-4">
                See AutoType in Action
              </h3>
              <p className="text-brand-700 mb-6">
                Watch how easy it is to create professional documents
              </p>
              <div className="aspect-video bg-white rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-16 h-16 text-brand-400 mx-auto mb-4" />
                  <p className="text-brand-600">Interactive Demo Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AutoSign Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                <PenTool className="w-4 h-4 mr-2" />
                AutoSign
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                E-Signatures That Just Work
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get documents signed quickly with legally binding e-signatures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {autoSignSteps.map((step, index) => (
                <Card 
                  key={step.step}
                  className="text-center hover:shadow-lg transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-blue-600 mb-4">
                      {step.step}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Demo Placeholder */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                See AutoSign in Action
              </h3>
              <p className="text-blue-700 mb-6">
                Experience the signing process from both sides
              </p>
              <div className="aspect-video bg-white rounded-xl shadow-inner flex items-center justify-center">
                <div className="text-center">
                  <PenTool className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                  <p className="text-blue-600">Interactive Demo Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Powerful Features to Boost Productivity
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to streamline your document workflow
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  className="hover:shadow-lg transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-700">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-brand-600 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 text-brand-100">
              Join thousands of businesses already using MyTypist to streamline their workflows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-brand-600 hover:bg-gray-100">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-brand-600">
                Watch Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default HowToUse;
