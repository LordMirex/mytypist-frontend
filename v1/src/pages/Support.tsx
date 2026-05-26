import { useState } from 'react';
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  FileQuestion,
  Clock,
  CheckCircle,
  AlertCircle,
  Search,
  Book,
  Video,
  Users
} from 'lucide-react';

const Support = () => {
  const [ticketForm, setTicketForm] = useState({
    subject: '',
    category: '',
    priority: '',
    description: ''
  });

  const [searchTerm, setSearchTerm] = useState('');

  const tickets = [
    {
      id: 'TK-001',
      subject: 'Unable to download document',
      status: 'Open',
      priority: 'High',
      created: '2 hours ago',
      category: 'Technical'
    },
    {
      id: 'TK-002',
      subject: 'Billing question about upgrade',
      status: 'In Progress',
      priority: 'Medium',
      created: '1 day ago',
      category: 'Billing'
    },
    {
      id: 'TK-003',
      subject: 'Template customization help',
      status: 'Resolved',
      priority: 'Low',
      created: '3 days ago',
      category: 'General'
    }
  ];

  const faqItems = [
    {
      question: 'How do I create my first document?',
      answer: 'Navigate to the Templates page, choose a template that suits your needs, and click "Use Template". You can then customize it with your information.',
      category: 'Getting Started'
    },
    {
      question: 'Can I share documents with my team?',
      answer: 'Yes! With a Pro or Business plan, you can share documents with team members and collaborate in real-time.',
      category: 'Collaboration'
    },
    {
      question: 'How do I upgrade my plan?',
      answer: 'Go to Settings > Billing and click on the plan you want to upgrade to. You\'ll be charged the prorated amount.',
      category: 'Billing'
    },
    {
      question: 'Is my data secure?',
      answer: 'Absolutely. We use industry-standard encryption and security measures to protect your documents and personal information.',
      category: 'Security'
    },
    {
      question: 'Can I export my documents?',
      answer: 'Yes, you can export documents in multiple formats including PDF, Word, and plain text from the document editor.',
      category: 'Features'
    }
  ];

  const resources = [
    {
      title: 'Getting Started Guide',
      description: 'Learn the basics of MyTypist in 5 minutes',
      icon: Book,
      type: 'Guide'
    },
    {
      title: 'Video Tutorials',
      description: 'Watch step-by-step video tutorials',
      icon: Video,
      type: 'Video'
    },
    {
      title: 'Community Forum',
      description: 'Connect with other users and get help',
      icon: Users,
      type: 'Community'
    },
    {
      title: 'API Documentation',
      description: 'Integrate MyTypist with your apps',
      icon: FileQuestion,
      type: 'Documentation'
    }
  ];

  const handleTicketSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Ticket submitted:', ticketForm);
    // Handle ticket submission
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Open':
        return 'bg-blue-100 text-blue-800';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-800';
      case 'Resolved':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredFAQ = faqItems.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Layout>
      <SEO title="Support - MyTypist" description="Get help and support for your MyTypist account" />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
            <p className="text-gray-600">Get help when you need it, how you need it</p>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-sm text-gray-600 mb-4">Get instant help from our support team</p>
                <Button className="bg-brand-600 hover:bg-brand-700">Start Chat</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Mail className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-sm text-gray-600 mb-4">Send us a detailed message</p>
                <Button variant="outline">support@mytypist.com</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <Phone className="w-12 h-12 text-brand-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-sm text-gray-600 mb-4">Call us during business hours</p>
                <Button variant="outline">+1 (555) 123-4567</Button>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="tickets" className="space-y-6">
            <TabsList className="grid grid-cols-2 lg:grid-cols-4 w-full">
              <TabsTrigger value="tickets">Support Tickets</TabsTrigger>
              <TabsTrigger value="faq">FAQ</TabsTrigger>
              <TabsTrigger value="resources">Resources</TabsTrigger>
              <TabsTrigger value="contact">Contact</TabsTrigger>
            </TabsList>

            <TabsContent value="tickets">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Create Ticket */}
                <Card>
                  <CardHeader>
                    <CardTitle>Create Support Ticket</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleTicketSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          value={ticketForm.subject}
                          onChange={(e) => setTicketForm({...ticketForm, subject: e.target.value})}
                          placeholder="Brief description of your issue"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="category">Category</Label>
                          <select
                            id="category"
                            value={ticketForm.category}
                            onChange={(e) => setTicketForm({...ticketForm, category: e.target.value})}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            required
                          >
                            <option value="">Select category</option>
                            <option value="technical">Technical Issue</option>
                            <option value="billing">Billing</option>
                            <option value="feature">Feature Request</option>
                            <option value="general">General Question</option>
                          </select>
                        </div>
                        
                        <div>
                          <Label htmlFor="priority">Priority</Label>
                          <select
                            id="priority"
                            value={ticketForm.priority}
                            onChange={(e) => setTicketForm({...ticketForm, priority: e.target.value})}
                            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
                            required
                          >
                            <option value="">Select priority</option>
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                            <option value="urgent">Urgent</option>
                          </select>
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          value={ticketForm.description}
                          onChange={(e) => setTicketForm({...ticketForm, description: e.target.value})}
                          placeholder="Describe your issue in detail..."
                          rows={4}
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700">
                        Submit Ticket
                      </Button>
                    </form>
                  </CardContent>
                </Card>

                {/* Existing Tickets */}
                <Card>
                  <CardHeader>
                    <CardTitle>Your Tickets</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tickets.map((ticket) => (
                        <div key={ticket.id} className="p-4 border border-gray-200 rounded-lg">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-medium text-gray-900">{ticket.id}</span>
                            <div className="flex space-x-2">
                              <Badge className={getStatusColor(ticket.status)}>
                                {ticket.status}
                              </Badge>
                              <Badge className={getPriorityColor(ticket.priority)}>
                                {ticket.priority}
                              </Badge>
                            </div>
                          </div>
                          <h4 className="font-medium text-gray-900 mb-1">{ticket.subject}</h4>
                          <div className="flex items-center justify-between text-sm text-gray-500">
                            <span>{ticket.category}</span>
                            <span>{ticket.created}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="faq">
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input
                      placeholder="Search FAQ..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {filteredFAQ.map((item, index) => (
                      <div key={index} className="pb-6 border-b border-gray-200 last:border-b-0">
                        <div className="flex items-start space-x-3">
                          <FileQuestion className="w-5 h-5 text-brand-600 mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">{item.question}</h4>
                            <p className="text-gray-600 mb-2">{item.answer}</p>
                            <Badge variant="outline">{item.category}</Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center">
                          <resource.icon className="w-6 h-6 text-brand-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 mb-1">{resource.title}</h3>
                          <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="contact">
              <div className="max-w-2xl mx-auto">
                <Card>
                  <CardHeader>
                    <CardTitle>Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center space-x-3">
                        <Mail className="w-5 h-5 text-brand-600" />
                        <div>
                          <h4 className="font-medium">Email Support</h4>
                          <p className="text-sm text-gray-600">support@mytypist.com</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Phone className="w-5 h-5 text-brand-600" />
                        <div>
                          <h4 className="font-medium">Phone Support</h4>
                          <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-brand-600" />
                        <div>
                          <h4 className="font-medium">Business Hours</h4>
                          <p className="text-sm text-gray-600">Mon-Fri 9AM-6PM PST</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <MessageCircle className="w-5 h-5 text-brand-600" />
                        <div>
                          <h4 className="font-medium">Live Chat</h4>
                          <p className="text-sm text-gray-600">Available 24/7</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-brand-50 p-4 rounded-lg">
                      <h4 className="font-medium text-brand-900 mb-2">Response Times</h4>
                      <div className="space-y-1 text-sm text-brand-700">
                        <p>• Live Chat: Immediate</p>
                        <p>• Email: Within 4 hours</p>
                        <p>• Phone: Within 1 hour</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Support;
