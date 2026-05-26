
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Activity, 
  Server, 
  Database, 
  Wifi, 
  AlertTriangle,
  CheckCircle,
  XCircle,
  RefreshCw,
  TrendingUp,
  HardDrive,
  Cpu,
  MemoryStick
} from 'lucide-react';

const AdminHealth = () => {
  const systemMetrics = [
    {
      name: 'API Response Time',
      value: '142ms',
      status: 'healthy',
      trend: '+5ms',
      icon: Activity
    },
    {
      name: 'Database Connections',
      value: '87/100',
      status: 'healthy',
      trend: '+3',
      icon: Database
    },
    {
      name: 'Server Uptime',
      value: '99.9%',
      status: 'healthy',
      trend: '+0.1%',
      icon: Server
    },
    {
      name: 'Memory Usage',
      value: '68%',
      status: 'warning',
      trend: '+12%',
      icon: MemoryStick
    }
  ];

  const services = [
    {
      name: 'Authentication Service',
      status: 'online',
      uptime: '99.95%',
      lastCheck: '2 min ago'
    },
    {
      name: 'Document Processing',
      status: 'online',
      uptime: '99.88%',
      lastCheck: '1 min ago'
    },
    {
      name: 'Email Service',
      status: 'online',
      uptime: '99.92%',
      lastCheck: '3 min ago'
    },
    {
      name: 'File Storage',
      status: 'degraded',
      uptime: '98.12%',
      lastCheck: '1 min ago'
    },
    {
      name: 'Payment Gateway',
      status: 'online',
      uptime: '99.99%',
      lastCheck: '30 sec ago'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'online':
      case 'healthy':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning':
      case 'degraded':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'offline':
      case 'critical':
        return <XCircle className="w-4 h-4 text-red-600" />;
      default:
        return <Activity className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
      case 'healthy':
        return 'bg-green-100 text-green-800';
      case 'warning':
      case 'degraded':
        return 'bg-yellow-100 text-yellow-800';
      case 'offline':
      case 'critical':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="min-h-screen bg-gray-50 animate-fade-in">
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Activity className="w-6 h-6 mr-2 text-red-600" />
                  System Health
                </h1>
                <p className="text-gray-600 mt-1">
                  Monitor system performance and service status
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <RefreshCw className="w-4 h-4 mr-2" />
                  Refresh Status
                </Button>
                <Button className="bg-red-600 hover:bg-red-700" size="sm">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  View Alerts
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* System Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {systemMetrics.map((metric, index) => (
              <Card key={metric.name} className="animate-slide-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-600">{metric.name}</p>
                      <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center`}>
                      <metric.icon className="w-6 h-6 text-gray-600" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center">
                    {getStatusIcon(metric.status)}
                    <TrendingUp className="w-4 h-4 text-green-500 ml-1 mr-1" />
                    <span className="text-sm text-green-600">{metric.trend}</span>
                    <span className="text-sm text-gray-500 ml-1">from last hour</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Service Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Server className="w-5 h-5 mr-2 text-red-600" />
                  Service Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div 
                      key={service.name}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg animate-slide-in"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(service.status)}
                        <div>
                          <h4 className="font-medium text-gray-900">{service.name}</h4>
                          <p className="text-sm text-gray-500">Last check: {service.lastCheck}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge className={getStatusColor(service.status)}>
                          {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">Uptime: {service.uptime}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resource Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <HardDrive className="w-5 h-5 mr-2 text-red-600" />
                  Resource Usage
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">CPU Usage</span>
                      <span className="text-sm text-gray-600">45%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Memory Usage</span>
                      <span className="text-sm text-gray-600">68%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Disk Usage</span>
                      <span className="text-sm text-gray-600">32%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full" style={{ width: '32%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Network I/O</span>
                      <span className="text-sm text-gray-600">89%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-red-600 h-2 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHealth;
