import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Zap, Brain, FileText, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AutoType = () => {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-muted/30 via-background to-muted/30">
        {/* Hero Section */}
        <section className="hero-height flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center px-6 py-3 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
                <Brain className="w-4 h-4 mr-2" />
                <span className="font-semibold">AutoType - AI Document Generation</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                <span className="text-foreground">Generate Documents</span>
                <br />
                <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  Instantly with AI
                </span>
              </h1>

              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed">
                AutoType harnesses advanced AI to create professional documents from simple prompts, 
                saving you hours of manual work and ensuring perfect formatting every time.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link to="/signup">
                  <Button size="lg" className="px-10 py-6 text-lg font-semibold group">
                    Try AutoType Free
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-semibold">
                    See Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                The Power of AI Document Creation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Experience document generation that understands context, maintains consistency, and delivers professional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Smart AI Engine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Advanced language models understand context and generate accurate, professional content every time.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Instant Generation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Create complex documents in seconds. What used to take hours now takes minutes with AutoType.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-border hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Multiple Formats</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Generate contracts, reports, proposals, and more in various formats with consistent professional styling.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How AutoType Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Three simple steps to professional documents
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">1</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Describe Your Document</h3>
                <p className="text-muted-foreground">
                  Simply tell AutoType what kind of document you need and provide key details in plain language.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">AI Generates Content</h3>
                <p className="text-muted-foreground">
                  Our advanced AI analyzes your requirements and generates professional, accurate content instantly.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-primary-foreground">3</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Review & Customize</h3>
                <p className="text-muted-foreground">
                  Review the generated document, make any adjustments, and export in your preferred format.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="bg-card rounded-2xl p-8 shadow-lg border">
                  <div className="aspect-video bg-gradient-to-br from-muted/50 to-muted rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Zap className="h-16 w-16 text-primary mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground">AutoType Interface</h3>
                      <p className="text-muted-foreground">AI-powered document creation</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Why Businesses Choose AutoType
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">95% Time Savings</h3>
                      <p className="text-muted-foreground">Dramatically reduce document creation time</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Consistent Quality</h3>
                      <p className="text-muted-foreground">Every document meets professional standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Custom Templates</h3>
                      <p className="text-muted-foreground">Train the AI on your company's style and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-foreground">Multi-Language Support</h3>
                      <p className="text-muted-foreground">Generate documents in over 50 languages</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
              Ready to Experience AI-Powered Document Creation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join innovative teams who are already saving hours every week with AutoType
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup">
                <Button size="lg" className="px-10 py-6 text-lg font-semibold group">
                  Start Creating Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" size="lg" className="px-10 py-6 text-lg font-semibold">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AutoType;