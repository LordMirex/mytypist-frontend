
import { useState } from 'react';
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Handshake, 
  TrendingUp, 
  Users, 
  DollarSign,
  Award,
  CheckCircle,
  Star,
  Globe,
  Zap,
  Target
} from 'lucide-react';

const BecomePartner = () => {
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    partnerType: '',
    experience: '',
    description: ''
  });

  const partnerTypes = [
    {
      title: 'Reseller Partner',
      description: 'Sell MyTypist to your clients with exclusive pricing',
      commission: '30%',
      benefits: ['Dedicated support', 'Marketing materials', 'Co-branded solutions'],
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'Integration Partner',
      description: 'Build integrations and extend MyTypist functionality',
      commission: 'Revenue Share',
      benefits: ['Technical support', 'API access', 'Joint marketing'],
      icon: Zap,
      color: 'purple'
    },
    {
      title: 'Agency Partner',
      description: 'Offer MyTypist as part of your service portfolio',
      commission: '25%',
      benefits: ['White-label options', 'Training programs', 'Lead sharing'],
      icon: Users,
      color: 'green'
    },
    {
      title: 'Referral Partner',
      description: 'Earn commissions by referring new customers',
      commission: '20%',
      benefits: ['Easy setup', 'Monthly payouts', 'Performance tracking'],
      icon: Target,
      color: 'orange'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Commissions',
      description: 'Earn up to 30% recurring commissions on all sales',
      icon: DollarSign
    },
    {
      title: 'Dedicated Support',
      description: 'Get priority support from our partner success team',
      icon: Users
    },
    {
      title: 'Marketing Resources',
      description: 'Access co-branded materials and marketing assets',
      icon: Globe
    },
    {
      title: 'Training & Certification',
      description: 'Comprehensive training programs for your team',
      icon: Award
    }
  ];

  const successStories = [
    {
      name: 'TechSolutions Inc.',
      type: 'Reseller Partner',
      growth: '150% revenue increase',
      testimonial: 'MyTypist has become a key part of our service offering. The support team is incredible.',
      logo: '🏢'
    },
    {
      name: 'Digital Marketing Pro',
      type: 'Agency Partner',
      growth: '50+ new clients',
      testimonial: 'Our clients love the document automation features. It saves them hours every week.',
      logo: '📈'
    },
    {
      name: 'DevCorp Solutions',
      type: 'Integration Partner',
      growth: '200+ integration users',
      testimonial: 'Building on MyTypist API was straightforward. Great developer experience.',
      logo: '⚡'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partner application submitted:', applicationForm);
    // Handle form submission
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-50 text-blue-600 border-blue-200';
      case 'purple':
        return 'bg-purple-50 text-purple-600 border-purple-200';
      case 'green':
        return 'bg-green-50 text-green-600 border-green-200';
      case 'orange':
        return 'bg-orange-50 text-orange-600 border-orange-200';
      default:
        return 'bg-gray-50 text-gray-600 border-gray-200';
    }
  };

  return (
    <Layout>
      <SEO title="Become a Partner - MyTypist" description="Join our partner program and grow your business with MyTypist" />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand-600 to-brand-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Handshake className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-4">Become a MyTypist Partner</h1>
            <p className="text-xl text-brand-100 max-w-3xl mx-auto">
              Join our growing ecosystem of partners and unlock new revenue opportunities while helping businesses streamline their document workflows.
            </p>
            <div className="mt-8 flex justify-center space-x-4">
              <Badge className="bg-white text-brand-600 text-sm px-4 py-2">
                500+ Active Partners
              </Badge>
              <Badge className="bg-brand-500 text-white text-sm px-4 py-2">
                $2M+ Partner Revenue
              </Badge>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Partner Types */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Partnership Path</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We offer multiple partnership opportunities designed to fit your business model and growth goals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {partnerTypes.map((type, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-brand-600">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${getColorClasses(type.color)}`}>
                        <type.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">{type.title}</h3>
                        <Badge className="bg-brand-100 text-brand-800 mt-1">
                          {type.commission} Commission
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    <div className="space-y-2">
                      {type.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Benefits</h2>
              <p className="text-lg text-gray-600">
                We invest in our partners' success with comprehensive support and resources.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-6 h-6 text-brand-600" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Success Stories */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner Success Stories</h2>
              <p className="text-lg text-gray-600">
                See how our partners are growing their businesses with MyTypist.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {successStories.map((story, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <div className="text-4xl mb-2">{story.logo}</div>
                      <h3 className="font-semibold text-gray-900">{story.name}</h3>
                      <Badge variant="outline" className="mt-1">{story.type}</Badge>
                    </div>
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-brand-600 font-semibold">{story.growth}</p>
                    </div>
                    <p className="text-gray-600 text-sm italic">"{story.testimonial}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Apply to Become a Partner</CardTitle>
                <p className="text-gray-600">
                  Start your partnership journey with MyTypist today. We'll review your application and get back to you within 48 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={applicationForm.name}
                        onChange={(e) => setApplicationForm({...applicationForm, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={applicationForm.email}
                        onChange={(e) => setApplicationForm({...applicationForm, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company">Company Name *</Label>
                      <Input
                        id="company"
                        value={applicationForm.company}
                        onChange={(e) => setApplicationForm({...applicationForm, company: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="website">Website</Label>
                      <Input
                        id="website"
                        type="url"
                        value={applicationForm.website}
                        onChange={(e) => setApplicationForm({...applicationForm, website: e.target.value})}
                        placeholder="https://"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="partnerType">Partner Type *</Label>
                    <select
                      id="partnerType"
                      value={applicationForm.partnerType}
                      onChange={(e) => setApplicationForm({...applicationForm, partnerType: e.target.value})}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Select a partner type</option>
                      <option value="reseller">Reseller Partner</option>
                      <option value="integration">Integration Partner</option>
                      <option value="agency">Agency Partner</option>
                      <option value="referral">Referral Partner</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="experience">Industry Experience *</Label>
                    <select
                      id="experience"
                      value={applicationForm.experience}
                      onChange={(e) => setApplicationForm({...applicationForm, experience: e.target.value})}
                      className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                      required
                    >
                      <option value="">Select your experience level</option>
                      <option value="startup">Startup (0-2 years)</option>
                      <option value="growing">Growing business (3-5 years)</option>
                      <option value="established">Established (5+ years)</option>
                      <option value="enterprise">Enterprise level</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="description">Tell us about your business *</Label>
                    <Textarea
                      id="description"
                      value={applicationForm.description}
                      onChange={(e) => setApplicationForm({...applicationForm, description: e.target.value})}
                      placeholder="Describe your business, target market, and why you want to partner with MyTypist..."
                      rows={4}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700">
                    Submit Partnership Application
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Questions about our partner program?{' '}
                    <a href="mailto:partners@mytypist.com" className="text-brand-600 underline">
                      Contact our partner team
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BecomePartner;
