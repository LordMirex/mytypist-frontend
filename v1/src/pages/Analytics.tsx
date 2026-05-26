
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  TrendingUp, 
  FileText, 
  Users, 
  Download,
  BarChart3,
  PieChart,
  Calendar,
  Filter
} from 'lucide-react';

const Analytics = () => {
  const stats = [
    {
      title: 'Total Documents',
      value: '156',
      change: '+23%',
      trend: 'up',
      icon: FileText,
      color: 'text-blue-600'
    },
    {
      title: 'Documents This Month',
      value: '34',
      change: '+12%',
      trend: 'up',
      icon: Calendar,
      color: 'text-green-600'
    },
    {
      title: 'Template Downloads',
      value: '89',
      change: '+45%',
      trend: 'up',
      icon: Download,
      color: 'text-purple-600'
    },
    {
      title: 'Collaborators',
      value: '12',
      change: '+3',
      trend: 'up',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      action: 'Created',
      document: 'Service Agreement Template',
      date: '2 hours ago',
      type: 'create'
    },
    {
      id: 2,
      action: 'Downloaded',
      document: 'Invoice Template',
      date: '5 hours ago',
      type: 'download'
    },
    {
      id: 3,
      action: 'Shared',
      document: 'NDA Template',
      date: '1 day ago',
      type: 'share'
    },
    {
      id: 4,
      action: 'Updated',
      document: 'Employment Contract',
      date: '2 days ago',
      type: 'update'
    }
  ];

  const documentTypes = [
    { name: 'Legal Documents', count: 45, percentage: 29 },
    { name: 'Business Proposals', count: 32, percentage: 21 },
    { name: 'HR Documents', count: 28, percentage: 18 },
    { name: 'Financial Reports', count: 25, percentage: 16 },
    { name: 'Marketing Materials', count: 15, percentage: 10 },
    { name: 'Others', count: 11, percentage: 6 }
  ];

  const monthlyData = [
    { month: 'Jan', documents: 12 },
    { month: 'Feb', documents: 18 },
    { month: 'Mar', documents: 15 },
    { month: 'Apr', documents: 22 },
    { month: 'May', documents: 28 },
    { month: 'Jun', documents: 34 }
  ];

  return (
    <Layout>
      <SEO title="Analytics - MyTypist" description="Track your document creation and productivity analytics" />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
              <p className="text-gray-600">Track your document creation and productivity metrics</p>
            </div>
            <div className="flex space-x-3">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button className="bg-brand-600 hover:bg-brand-700">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={stat.title} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center ${stat.color}`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
                    <span className="text-sm text-green-600">{stat.change}</span>
                    <span className="text-sm text-gray-500 ml-1">from last period</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Document Creation Trend */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle className="text-xl font-semibold flex items-center">
                    <BarChart3 className="w-5 h-5 mr-2 text-brand-600" />
                    Document Creation Trend
                  </CardTitle>
                  <Badge variant="outline">Last 6 months</Badge>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-end space-x-2">
                    {monthlyData.map((data, index) => (
                      <div key={data.month} className="flex-1 flex flex-col items-center">
                        <div 
                          className="w-full bg-brand-200 rounded-t transition-all hover:bg-brand-300"
                          style={{ height: `${(data.documents / 34) * 200}px` }}
                        ></div>
                        <div className="mt-2 text-sm text-gray-600">{data.month}</div>
                        <div className="text-xs font-medium text-gray-900">{data.documents}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                          <FileText className="w-4 h-4 text-brand-600" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-gray-900">
                            <span className="font-medium">{activity.action}</span> {activity.document}
                          </p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                        <Badge 
                          variant="outline"
                          className={
                            activity.type === 'create' ? 'border-green-200 text-green-700' :
                            activity.type === 'download' ? 'border-blue-200 text-blue-700' :
                            activity.type === 'share' ? 'border-purple-200 text-purple-700' :
                            'border-orange-200 text-orange-700'
                          }
                        >
                          {activity.type}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Document Types Breakdown */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold flex items-center">
                    <PieChart className="w-5 h-5 mr-2 text-brand-600" />
                    Document Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {documentTypes.map((type, index) => (
                      <div key={type.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600">{type.name}</span>
                          <span className="font-medium">{type.count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-brand-600 h-2 rounded-full transition-all"
                            style={{ width: `${type.percentage}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-500">{type.percentage}% of total</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Average docs/week</span>
                      <span className="font-semibold">8.5</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Most productive day</span>
                      <span className="font-semibold">Tuesday</span>
                    </div>
                    <div className="flex justify-between py-2 border-b border-gray-100">
                      <span className="text-gray-600">Favorite template</span>
                      <span className="font-semibold">Invoice</span>
                    </div>
                    <div className="flex justify-between py-2">
                      <span className="text-gray-600">Time saved</span>
                      <span className="font-semibold text-green-600">24.5 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Analytics;
