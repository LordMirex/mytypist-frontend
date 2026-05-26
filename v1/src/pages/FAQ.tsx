
import Layout from '@/components/Layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HelpCircle, MessageCircle, Mail } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      title: 'Getting Started',
      faqs: [
        {
          question: 'How do I get started with MyTypist?',
          answer: 'Getting started is easy! Simply sign up for a free account, choose a template or start from scratch, and begin creating your documents. No credit card required for the free plan.'
        },
        {
          question: 'Do I need to install any software?',
          answer: 'No installation required! MyTypist is a cloud-based platform that works directly in your web browser. You can access it from any device with an internet connection.'
        },
        {
          question: 'Can I import existing documents?',
          answer: 'Yes, you can upload existing documents in various formats including PDF, Word, and text files. Our system will convert them into editable templates.'
        }
      ]
    },
    {
      title: 'AutoType Features',
      faqs: [
        {
          question: 'What types of documents can I create with AutoType?',
          answer: 'AutoType supports a wide range of document types including contracts, agreements, invoices, letters, forms, reports, and more. We have templates for most business use cases.'
        },
        {
          question: 'How do dynamic fields work?',
          answer: 'Dynamic fields automatically populate with data you provide, eliminating manual typing. You can set up fields for names, dates, amounts, addresses, and custom variables.'
        },
        {
          question: 'Can I create custom templates?',
          answer: 'Absolutely! You can create custom templates from scratch or modify existing ones to match your specific needs and branding requirements.'
        }
      ]
    },
    {
      title: 'AutoSign E-Signatures',
      faqs: [
        {
          question: 'Are MyTypist e-signatures legally binding?',
          answer: 'Yes, our e-signatures are legally binding and compliant with international standards including ESIGN Act, eIDAS, and other global e-signature laws.'
        },
        {
          question: 'How do I send documents for signature?',
          answer: 'Simply upload or create your document, add signature fields where needed, enter signer email addresses, and click send. Signers will receive an email with signing instructions.'
        },
        {
          question: 'Can multiple people sign the same document?',
          answer: 'Yes, you can add multiple signers to a document. You can also set signing order if signatures need to be collected in a specific sequence.'
        },
        {
          question: 'What happens after a document is signed?',
          answer: 'Once all parties have signed, everyone receives a copy of the completed document via email. The signed document is also stored securely in your MyTypist account.'
        }
      ]
    },
    {
      title: 'Pricing & Plans',
      faqs: [
        {
          question: 'Is there a free plan available?',
          answer: 'Yes, we offer a generous free plan that includes 5 documents and 2 e-signatures per month, perfect for individuals and small businesses getting started.'
        },
        {
          question: 'Can I upgrade or downgrade my plan?',
          answer: 'Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at the next billing cycle.'
        },
        {
          question: 'Do you offer annual discounts?',
          answer: 'Yes, annual subscriptions come with a 17% discount compared to monthly billing. You can switch to annual billing in your account settings.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept all major credit cards, debit cards, and bank transfers. All payments are processed securely through our encrypted payment system.'
        }
      ]
    },
    {
      title: 'Security & Compliance',
      faqs: [
        {
          question: 'How secure is my data with MyTypist?',
          answer: 'We use bank-level encryption (AES-256) to protect your data both in transit and at rest. We are SOC 2 compliant and regularly undergo security audits.'
        },
        {
          question: 'Where is my data stored?',
          answer: 'Your data is stored in secure, geographically distributed data centers with multiple backups. We comply with GDPR, HIPAA, and other data protection regulations.'
        },
        {
          question: 'Can I delete my account and data?',
          answer: 'Yes, you can delete your account and all associated data at any time through your account settings. We will permanently remove all your information within 30 days.'
        }
      ]
    },
    {
      title: 'Integration & Support',
      faqs: [
        {
          question: 'What integrations does MyTypist support?',
          answer: 'We integrate with Google Drive, Dropbox, Microsoft OneDrive, Slack, and many other popular business tools. More integrations are added regularly.'
        },
        {
          question: 'How can I get help if I need it?',
          answer: 'We offer email support for all users, with priority support for paid plans. You can also access our knowledge base, video tutorials, and community forum.'
        },
        {
          question: 'Do you offer API access?',
          answer: 'Yes, our REST API is available for Professional and Enterprise plans, allowing you to integrate MyTypist functionality into your existing applications.'
        }
      ]
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HelpCircle className="w-16 h-16 text-brand-600 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h1>
            <p className="text-xl text-gray-600">
              Find quick answers to common questions about MyTypist. 
              Can't find what you're looking for? We're here to help!
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div 
                  key={category.title}
                  className="animate-slide-in"
                  style={{ animationDelay: `${categoryIndex * 150}ms` }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-brand-200">
                    {category.title}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border border-gray-200 rounded-lg px-6 hover:border-brand-300 transition-colors"
                      >
                        <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-brand-600">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Help Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Still Need Help?
              </h2>
              <p className="text-xl text-gray-600">
                We're here to support you every step of the way
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-8 h-8 text-brand-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Live Chat
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Get instant help from our support team during business hours.
                  </p>
                  <Button className="bg-brand-600 hover:bg-brand-700">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Email Support
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Send us a detailed message and we'll respond within 24 hours.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="/contact">
                      Send Email
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <HelpCircle className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Help Center
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Browse our comprehensive knowledge base and video tutorials.
                  </p>
                  <Button variant="outline">
                    Visit Help Center
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default FAQ;
