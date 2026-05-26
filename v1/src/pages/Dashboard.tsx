

  import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  FileText,
  PenTool,
  Plus,
  Clock,
  CheckCircle,
  Users,
  TrendingUp,
  Search,
  Filter
} from 'lucide-react';

const Dashboard = () => {
  const stats = [
    {
      title: 'Documents Created',
      value: '24',
      change: '+12%',
      icon: FileText,
      color: 'text-brand-600'
    },
    {
      title: 'Signatures Pending',
      value: '3',
      change: '-2',
      icon: Clock,
      color: 'text-yellow-600'
    },
    {
      title: 'Completed This Month',
      value: '18',
      change: '+8',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      title: 'Team Members',
      value: '1',
      change: '0',
      icon: Users,
      color: 'text-purple-600'
    }
  ];

  const recentDocuments = [
    {
      id: 1,
      name: 'Service Agreement - TechCorp',
      type: 'Contract',
      status: 'Pending Signature',
      date: 'Dec 10, 2024',
      progress: 75
    },
    {
      id: 2,
      name: 'Invoice #2024-001',
      type: 'Invoice',
      status: 'Completed',
      date: 'Dec 8, 2024',
      progress: 100
    },
    {
      id: 3,
      name: 'NDA - New Client',
      type: 'Legal',
      status: 'Draft',
      date: 'Dec 7, 2024',
      progress: 50
    },
    {
      id: 4,
      name: 'Proposal - Website Design',
      type: 'Proposal',
      status: 'Sent',
      date: 'Dec 5, 2024',
      progress: 80
    }
  ];

  const quickActions = [
    {
      title: 'Create Document',
      description: 'Start with a template or from scratch',
      icon: FileText,
      action: '/create-document',
      color: 'bg-brand-600'
    },
    {
      title: 'Send for Signature',
      description: 'Upload and get documents signed',
      icon: PenTool,
      action: '/send-signature',
      color: 'bg-blue-600'
    },
    {
      title: 'Browse Templates',
      description: 'Explore our template library',
      icon: Search,
      action: '/templates',
      color: 'bg-green-600'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Pending Signature':
        return 'bg-yellow-100 text-yellow-800';
      case 'Draft':
        return 'bg-gray-100 text-gray-800';
      case 'Sent':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const [search, setSearch] = useState('');
  const [showError, setShowError] = useState(false);

  const filteredDocuments = recentDocuments.filter(doc =>
    doc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 animate-fade-in">

        {/* Header */}
        <div className="bg-white border-b border-brand-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-gray-900">Dashboard</h1>
              <p className="text-sm lg:text-base text-gray-600 mt-1">
                Welcome back! Here are your main actions and stats.
              </p>
            </div>
            <Button className="bg-brand-600 hover:bg-brand-700 w-full sm:w-auto">
              <Plus className="w-4 h-4 mr-2" />
              New Document
            </Button>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8 space-y-8">

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg lg:text-xl font-semibold">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                {quickActions.map((action, index) => (
                  <button
                    key={action.title}
                    className="flex-1 text-left p-4 rounded-lg border border-gray-200 hover:border-brand-300 hover:shadow-md transition duration-200"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 ${action.color} rounded-lg flex items-center justify-center`}>
                        <action.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 text-base">{action.title}</h4>
                        <p className="text-sm text-gray-500">{action.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-2 flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent Documents */}
          <Card>
            <CardHeader className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <CardTitle className="text-lg lg:text-xl font-semibold">Recent Documents</CardTitle>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="search"
                  className="border border-gray-300 bg-white px-4 py-2 rounded shadow-sm outline-none focus:ring-2 focus:ring-brand-200 w-56"
                  placeholder="Search documents"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                />
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowError(!showError)}
                  className="text-red-600 border-red-300"
                >
                  Toggle Error
                </Button>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {showError ? (
                  <div className="p-8 text-center text-red-500">
                    <div className="font-semibold text-lg">Error loading documents.</div>
                    <div className="text-base">Please try again later.</div>
                  </div>
                ) : filteredDocuments.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    <div className="text-base">
                      No documents found{search ? ` for "${search}"` : ""}.
                    </div>
                  </div>
                ) : (
                  filteredDocuments.map(doc => (
                    <div
                      key={doc.id}
                      className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="flex items-center space-x-4 flex-1">
                        <div className="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-brand-600" />
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 text-base truncate">{doc.name}</h4>
                          <div className="flex gap-2 mt-1">
                            <span className="text-sm text-gray-500">{doc.type}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500">{doc.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 mt-2 lg:mt-0">
                        <Badge className={getStatusColor(doc.status)}>
                          {doc.status}
                        </Badge>
                        <div className="w-16 h-2 bg-gray-200 rounded-full">
                          <div
                            className="h-2 bg-brand-600 rounded-full"
                            style={{ width: `${doc.progress}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </CardContent>
          </Card>

          {/* Upgrade Prompt */}
          <Card className="bg-gradient-to-br from-brand-50 to-brand-100">
            <CardContent className="p-6">
              <div className="text-center">
                <h3 className="font-semibold text-brand-900 mb-2 text-base">Upgrade to Professional</h3>
                <p className="text-sm text-brand-700 mb-4">
                  Get unlimited documents, advanced templates, and priority support.
                </p>
                <Button className="bg-brand-600 hover:bg-brand-700 text-white w-full sm:w-auto" size="sm">
                  Upgrade Now
                </Button>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
