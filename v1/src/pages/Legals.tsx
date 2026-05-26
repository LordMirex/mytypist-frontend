import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  FileText, 
  Eye, 
  Users,
  Clock,
  Mail
} from 'lucide-react';

const Legals = () => {
  return (
    <Layout>
      <SEO title="Legal Information - MyTypist" description="Terms of service, privacy policy, and legal compliance information" />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center justify-center">
              <Shield className="w-8 h-8 mr-3 text-brand-600" />
              Legal Information
            </h1>
            <p className="text-gray-600 mt-2">Our commitment to transparency and compliance</p>
            <Badge className="mt-4 bg-green-100 text-green-800">Last Updated: June 15, 2025</Badge>
          </div>

          <Tabs defaultValue="terms" className="space-y-6">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full">
              <TabsTrigger value="terms" className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Terms</span>
              </TabsTrigger>
              <TabsTrigger value="privacy" className="flex items-center space-x-2">
                <Eye className="w-4 h-4" />
                <span className="hidden sm:inline">Privacy</span>
              </TabsTrigger>
              <TabsTrigger value="cookies" className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Cookies</span>
              </TabsTrigger>
              <TabsTrigger value="gdpr" className="flex items-center space-x-2">
                <Users className="w-4 h-4" />
                <span className="hidden sm:inline">GDPR</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="terms">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Terms of Service</CardTitle>
                  <p className="text-gray-600">Effective Date: June 15, 2025</p>
                </CardHeader>
                <CardContent className="space-y-6 prose max-w-none">
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">1. Agreement to Terms</h3>
                    <p className="text-gray-700 leading-relaxed">
                      By accessing and using MyTypist ("Service"), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2. Use License</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      Permission is granted to temporarily download one copy of MyTypist per device for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>modify or copy the materials</li>
                      <li>use the materials for any commercial purpose or for any public display</li>
                      <li>attempt to reverse engineer any software contained on the website</li>
                      <li>remove any copyright or other proprietary notations from the materials</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">3. User Accounts</h3>
                    <p className="text-gray-700 leading-relaxed">
                      When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">4. Content</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our Service allows you to create, upload, and share content. You retain ownership of any intellectual property rights that you hold in that content. By uploading content to our Service, you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, and distribute your content solely for the purpose of providing our Service.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">5. Termination</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever including without limitation if you breach the Terms.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">6. Contact Information</h3>
                    <p className="text-gray-700 leading-relaxed">
                      If you have any questions about these Terms, please contact us at <a href="mailto:legal@mytypist.com" className="text-brand-600 underline">legal@mytypist.com</a>.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Privacy Policy</CardTitle>
                  <p className="text-gray-600">Effective Date: June 15, 2025</p>
                </CardHeader>
                <CardContent className="space-y-6 prose max-w-none">
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Information We Collect</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Account information (name, email address, password)</li>
                      <li>Profile information (job title, company)</li>
                      <li>Content you create using our Service</li>
                      <li>Communications with us</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      We use the information we collect to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Provide, maintain, and improve our Service</li>
                      <li>Process transactions and send related information</li>
                      <li>Send you technical notices and support messages</li>
                      <li>Respond to your comments and questions</li>
                      <li>Monitor and analyze trends and usage</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Information Sharing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share your information in certain limited circumstances, such as with service providers who assist us in operating our Service.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Security</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      You have the right to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700 space-y-1">
                      <li>Access and update your personal information</li>
                      <li>Request deletion of your personal information</li>
                      <li>Object to processing of your personal information</li>
                      <li>Request portability of your personal information</li>
                    </ul>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cookies">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Cookie Policy</CardTitle>
                  <p className="text-gray-600">How we use cookies and similar technologies</p>
                </CardHeader>
                <CardContent className="space-y-6 prose max-w-none">
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">What Are Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and understanding how you use our Service.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Types of Cookies We Use</h3>
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Essential Cookies</h4>
                        <p className="text-sm text-gray-700">Required for the website to function properly. These cannot be disabled.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Analytics Cookies</h4>
                        <p className="text-sm text-gray-700">Help us understand how visitors interact with our website by collecting anonymous information.</p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">Functionality Cookies</h4>
                        <p className="text-sm text-gray-700">Remember your preferences and settings to provide a personalized experience.</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Managing Cookies</h3>
                    <p className="text-gray-700 leading-relaxed">
                      You can control and manage cookies in various ways. Please note that removing or blocking cookies can impact your user experience and parts of our website may no longer be fully accessible.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="gdpr">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">GDPR Compliance</CardTitle>
                  <p className="text-gray-600">Our commitment to European data protection standards</p>
                </CardHeader>
                <CardContent className="space-y-6 prose max-w-none">
                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Your Rights Under GDPR</h3>
                    <p className="text-gray-700 leading-relaxed mb-3">
                      If you are located in the European Union, you have the following rights regarding your personal data:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Right to Access</h4>
                        <p className="text-sm text-blue-700">Request access to your personal data</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-2">Right to Rectification</h4>
                        <p className="text-sm text-green-700">Correct inaccurate personal data</p>
                      </div>
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-medium text-orange-900 mb-2">Right to Erasure</h4>
                        <p className="text-sm text-orange-700">Request deletion of your data</p>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-2">Right to Portability</h4>
                        <p className="text-sm text-purple-700">Receive your data in a portable format</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Legal Basis for Processing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      We process your personal data based on the following legal grounds: legitimate interests, contract performance, consent, and legal obligations.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection Officer</h3>
                    <div className="bg-brand-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-brand-600" />
                        <div>
                          <h4 className="font-medium text-brand-900">Contact Our DPO</h4>
                          <p className="text-sm text-brand-700">dpo@mytypist.com</p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Exercising Your Rights</h3>
                    <p className="text-gray-700 leading-relaxed">
                      To exercise any of your rights, please contact us at <a href="mailto:privacy@mytypist.com" className="text-brand-600 underline">privacy@mytypist.com</a>. We will respond to your request within 30 days.
                    </p>
                  </section>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Contact Section */}
          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Questions About Our Legal Policies?</h3>
                <p className="text-gray-600 mb-4">Our legal team is here to help clarify any questions you may have.</p>
                <div className="flex justify-center space-x-4">
                  <a 
                    href="mailto:legal@mytypist.com" 
                    className="flex items-center space-x-2 text-brand-600 hover:text-brand-700"
                  >
                    <Mail className="w-4 h-4" />
                    <span>legal@mytypist.com</span>
                  </a>
                  <span className="text-gray-300">|</span>
                  <div className="flex items-center space-x-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span>Response within 48 hours</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default Legals;
