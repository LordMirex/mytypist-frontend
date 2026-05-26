import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Users, 
  FileText, 
  DollarSign, 
  Activity,
  Search,
  Filter,
  MoreHorizontal,
  UserCheck,
  UserX,
  Shield,
  TrendingUp,
  AlertTriangle,
  Upload,
  Settings
} from 'lucide-react';

const AdminDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const stats = [
    {
      title: 'Total Users',
      value: '2,847',
      change: '+12.5%',
      icon: Users,
      color: 'text-blue-600'
    },
    {
      title: 'Documents Created',
      value: '18,492',
      change: '+8.2%',
      icon: FileText,
      color: 'text-green-600'
    },
    {
      title: 'Monthly Revenue',
      value: '$24,856',
      change: '+15.3%',
      icon: DollarSign,
      color: 'text-purple-600'
    },
    {
      title: 'Active Sessions',
      value: '1,234',
      change: '+5.7%',
      icon: Activity,
      color: 'text-orange-600'
    }
  ];

  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      role: 'Premium',
      status: 'Active',
      documents: 45,
      joinDate: 'Jan 15, 2024',
      lastActive: '2 hours ago'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      role: 'Free',
      status: 'Active',
      documents: 12,
      joinDate: 'Feb 3, 2024',
      lastActive: '1 day ago'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike@example.com',
      role: 'Business',
      status: 'Inactive',
      documents: 78,
      joinDate: 'Dec 8, 2023',
      lastActive: '1 week ago'
    },
    {
      id: 4,
      name: 'Sarah Wilson',
      email: 'sarah@example.com',
      role: 'Premium',
      status: 'Active',
      documents: 23,
      joinDate: 'Mar 12, 2024',
      lastActive: '30 min ago'
    }
  ];

  const recentActivity = [
    {
      id: 1,
      user: 'John Doe',
      action: 'Created document',
      target: 'Service Agreement #2024-001',
      time: '2 minutes ago',
      type: 'create'
    },
    {
      id: 2,
      user: 'Jane Smith',
      action: 'Upgraded to',
      target: 'Premium Plan',
      time: '1 hour ago',
      type: 'upgrade'
    },
    {
      id: 3,
      user: 'Mike Johnson',
      action: 'Sent for signature',
      target: 'NDA Template',
      time: '3 hours ago',
      type: 'signature'
    },
    {
      id: 4,
      user: 'Sarah Wilson',
      action: 'Downloaded template',
      target: 'Invoice Template',
      time: '5 hours ago',
      type: 'download'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Inactive':
        return 'bg-gray-100 text-gray-800';
      case 'Suspended':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Premium':
        return 'bg-purple-100 text-purple-800';
      case 'Business':
        return 'bg-blue-100 text-blue-800';
      case 'Free':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-gray-50 animate-fade-in">
        {/* Responsive Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-xl lg:text-2xl font-bold text-gray-900 flex items-center">
                  <Shield className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-red-600" />
                  Admin Dashboard
                </h1>
                <p className="text-sm lg:text-base text-gray-600 mt-1">
                  Manage users, monitor activity, and oversee platform operations
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 lg:gap-3">
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <Upload className="w-4 h-4 mr-2" />
                  Upload Template
                </Button>
                <Button variant="outline" size="sm" className="w-full sm:w-auto">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  System Alerts
                </Button>
                <Button className="bg-red-600 hover:bg-red-700 w-full sm:w-auto" size="sm">
                  <Settings className="w-4 h-4 mr-2" />
                  Generate Report
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
          {/* Responsive Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
            {stats.map((stat, index) => (
              <Card 
                key={stat.title}
                className="hover:shadow-lg transition-shadow animate-slide-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="p-4 lg:p-6">
                  <div className="flex items-center justify-between">
                    <div className="min-w-0 flex-1">
                      <p className="text-xs lg:text-sm font-medium text-gray-600 truncate">{stat.title}</p>
                      <p className="text-xl lg:text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gray-50 flex items-center justify-center ${stat.color} flex-shrink-0`}>
                      <stat.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                    </div>
                  </div>
                  <div className="mt-3 lg:mt-4 flex items-center">
                    <TrendingUp className="w-3 h-3 lg:w-4 lg:h-4 text-green-500 mr-1" />
                    <span className="text-xs lg:text-sm text-green-600">{stat.change}</span>
                    <span className="text-xs lg:text-sm text-gray-500 ml-1">from last month</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Responsive Layout */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
            {/* User Management - Full width on mobile/tablet */}
            <div className="xl:col-span-2">
              <Card>
                <CardHeader className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <CardTitle className="text-lg lg:text-xl font-semibold">User Management</CardTitle>
                  <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <div className="relative flex-1 sm:flex-none">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search users..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 w-full sm:w-64"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="w-full sm:w-auto">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 lg:space-y-4">
                    {users.map((user, index) => (
                      <div 
                        key={user.id}
                        className="flex flex-col lg:flex-row lg:items-center lg:justify-between p-3 lg:p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors animate-slide-in gap-3 lg:gap-0"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex items-center space-x-3 lg:space-x-4 min-w-0 flex-1">
                          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Users className="w-4 h-4 lg:w-5 lg:h-5 text-red-600" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-gray-900 text-sm lg:text-base truncate">{user.name}</h4>
                            <p className="text-xs lg:text-sm text-gray-500 truncate">{user.email}</p>
                            <div className="flex flex-wrap items-center gap-1 lg:gap-2 mt-1">
                              <span className="text-xs text-gray-500">
                                {user.documents} docs
                              </span>
                              <span className="text-gray-300 hidden sm:inline">•</span>
                              <span className="text-xs text-gray-500">
                                Joined {user.joinDate}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between lg:justify-end space-x-2 lg:space-x-3">
                          <div className="flex space-x-2">
                            <Badge className={getRoleColor(user.role)}>
                              {user.role}
                            </Badge>
                            <Badge className={getStatusColor(user.status)}>
                              {user.status}
                            </Badge>
                          </div>
                          <Button variant="ghost" size="sm">
                            <MoreHorizontal className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar - Full width on mobile/tablet */}
            <div className="space-y-6">
              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg lg:text-xl font-semibold">Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 lg:space-y-4">
                    {recentActivity.map((activity, index) => (
                      <div 
                        key={activity.id}
                        className="flex items-start space-x-3 animate-slide-in"
                        style={{ animationDelay: `${index * 150}ms` }}
                      >
                        <div className="w-6 h-6 lg:w-8 lg:h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Activity className="w-3 h-3 lg:w-4 lg:h-4 text-red-600" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs lg:text-sm text-gray-900">
                            <span className="font-medium">{activity.user}</span>{' '}
                            {activity.action}{' '}
                            <span className="font-medium">{activity.target}</span>
                          </p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg lg:text-xl font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 lg:space-y-3">
                    <Button className="w-full justify-start text-sm" variant="outline" size="sm">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload New Template
                    </Button>
                    <Button className="w-full justify-start text-sm" variant="outline" size="sm">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Approve Pending Users
                    </Button>
                    <Button className="w-full justify-start text-sm" variant="outline" size="sm">
                      <UserX className="w-4 h-4 mr-2" />
                      Review Suspended Accounts
                    </Button>
                    <Button className="w-full justify-start text-sm" variant="outline" size="sm">
                      <FileText className="w-4 h-4 mr-2" />
                      Moderate Templates
                    </Button>
                    <Button className="w-full justify-start text-sm" variant="outline" size="sm">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      System Health Check
                    </Button>
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

export default AdminDashboard;
