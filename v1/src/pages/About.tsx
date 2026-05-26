
import Layout from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Target, Zap, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Zap,
      title: 'Speed & Efficiency',
      description: 'We believe work should be fast and effortless. Our tools eliminate manual processes so you can focus on what matters most.'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'Your documents are precious. We protect them with enterprise-grade security and comply with global standards.'
    },
    {
      icon: Users,
      title: 'User-Centric Design',
      description: 'Every feature we build starts with understanding our users needs. Simple, intuitive, and powerful.'
    },
    {
      icon: Target,
      title: 'Continuous Innovation',
      description: 'Technology evolves rapidly, and so do we. Were constantly improving and adding new capabilities.'
    }
  ];

  return (
    <Layout>
      <div className="animate-fade-in">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-brand-50 to-white py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About{' '}
              <span className="gradient-text">MyTypist</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We're revolutionizing how businesses handle documents and signatures. 
              Our mission is to make document workflows so simple and fast that they become invisible.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Every day, millions of hours are wasted on manual document creation, 
                  chasing signatures, and managing paperwork. We believe this time could 
                  be better spent growing businesses and serving customers.
                </p>
                <p className="text-lg text-gray-600">
                  MyTypist combines the power of document automation (AutoType) with 
                  seamless e-signatures (AutoSign) to eliminate these friction points. 
                  We're not just building software – we're giving people their time back.
                </p>
              </div>
              <div className="bg-gradient-to-br from-brand-100 to-brand-50 rounded-2xl p-8 text-center">
                <div className="text-6xl font-bold text-brand-600 mb-4">90%</div>
                <p className="text-lg text-brand-800 font-medium">
                  Reduction in document processing time
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={value.title}
                  className="hover:shadow-lg transition-all duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center mb-6">
                      <value.icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Built by Document Experts
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our team combines years of experience in document management, 
                legal technology, and user experience design to create tools that actually work.
              </p>
            </div>

            <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Join Our Growing Community
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Thousands of businesses trust MyTypist to handle their most important documents. 
                From startups to enterprises, we're proud to serve organizations worldwide.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold text-brand-600">10,000+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-600">50,000+</div>
                  <div className="text-gray-600">Documents Created</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-brand-600">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
