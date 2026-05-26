
import { FileText, PenTool, Clock, Shield, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      icon: FileText,
      title: 'AutoType Documents',
      description: 'Create professional documents instantly with our intelligent automation tools and pre-built templates.',
      color: 'text-brand-600'
    },
    {
      icon: PenTool,
      title: 'AutoSign E-Signatures',
      description: 'Get documents signed quickly with legally binding e-signatures that comply with global standards.',
      color: 'text-blue-600'
    },
    {
      icon: Clock,
      title: 'Save Hours Daily',
      description: 'Reduce document processing time by 90% with smart automation and streamlined workflows.',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards.',
      color: 'text-purple-600'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together seamlessly with real-time collaboration and role-based permissions.',
      color: 'text-orange-600'
    },
    {
      icon: Zap,
      title: 'Instant Integration',
      description: 'Connect with Google Drive, Dropbox, and other tools you already use daily.',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to{' '}
            <span className="gradient-text">Streamline Documents</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From creation to signature, MyTypist handles your entire document workflow 
            with enterprise-grade security and lightning-fast performance.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="hover:shadow-lg transition-all duration-300 border-0 shadow-md group hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-brand-50 transition-colors">
                    <feature.icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
