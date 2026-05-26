
import { useState } from 'react';
import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Gift, 
  Plus, 
  DollarSign, 
  Users, 
  Calendar,
  Edit,
  Trash2,
  Send,
  Target,
  TrendingUp
} from 'lucide-react';

const AdminBonuses = () => {
  const [isCreating, setIsCreating] = useState(false);

  const bonusCampaigns = [
    {
      id: 1,
      name: 'New User Welcome Bonus',
      description: 'Welcome bonus for new user registrations',
      type: 'signup',
      amount: '$10',
      status: 'active',
      recipients: 2847,
      claimed: 1923,
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      budget: '$28,470',
      spent: '$19,230'
    },
    {
      id: 2,
      name: 'Premium Upgrade Incentive',
      description: '20% discount for upgrading to premium',
      type: 'upgrade',
      amount: '20%',
      status: 'active',
      recipients: 5432,
      claimed: 1087,
      startDate: '2024-02-01',
      endDate: '2024-06-30',
      budget: '$15,000',
      spent: '$3,261'
    },
    {
      id: 3,
      name: 'Holiday Special',
      description: 'Christmas holiday bonus campaign',
      type: 'seasonal',
      amount: '$25',
      status: 'completed',
      recipients: 12000,
      claimed: 8400,
      startDate: '2023-12-15',
      endDate: '2024-01-05',
      budget: '$300,000',
      spent: '$210,000'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'paused':
        return 'bg-yellow-100 text-yellow-800';
      case 'draft':
        return 'bg-gray-100 text-gray-800';
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
                  <Gift className="w-6 h-6 mr-2 text-red-600" />
                  Admin Bonuses
                </h1>
                <p className="text-gray-600 mt-1">
                  Manage bonus campaigns and user incentives
                </p>
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </Button>
                <Button 
                  className="bg-red-600 hover:bg-red-700" 
                  size="sm"
                  onClick={() => setIsCreating(true)}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Create Campaign
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Budget</p>
                    <p className="text-2xl font-bold text-gray-900">$343,470</p>
                  </div>
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Amount Spent</p>
                    <p className="text-2xl font-bold text-gray-900">$232,491</p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Recipients</p>
                    <p className="text-2xl font-bold text-gray-900">20,279</p>
                  </div>
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Claims Rate</p>
                    <p className="text-2xl font-bold text-gray-900">56.8%</p>
                  </div>
                  <Target className="w-8 h-8 text-purple-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {isCreating ? (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Create New Bonus Campaign</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="campaign-name">Campaign Name</Label>
                      <Input id="campaign-name" placeholder="Enter campaign name" />
                    </div>
                    <div>
                      <Label htmlFor="campaign-type">Campaign Type</Label>
                      <select id="campaign-type" className="w-full border border-gray-300 rounded-md px-3 py-2">
                        <option value="signup">New User Signup</option>
                        <option value="upgrade">Premium Upgrade</option>
                        <option value="seasonal">Seasonal Campaign</option>
                        <option value="referral">Referral Bonus</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="bonus-amount">Bonus Amount</Label>
                      <Input id="bonus-amount" placeholder="$10 or 20%" />
                    </div>
                    <div>
                      <Label htmlFor="budget">Total Budget</Label>
                      <Input id="budget" placeholder="$10,000" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="start-date">Start Date</Label>
                      <Input id="start-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="end-date">End Date</Label>
                      <Input id="end-date" type="date" />
                    </div>
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea id="description" placeholder="Campaign description..." rows={3} />
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end space-x-3 mt-6">
                  <Button variant="outline" onClick={() => setIsCreating(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-red-600 hover:bg-red-700">
                    Create Campaign
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : null}

          {/* Campaigns List */}
          <Card>
            <CardHeader>
              <CardTitle>Bonus Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {bonusCampaigns.map((campaign, index) => (
                  <div 
                    key={campaign.id}
                    className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow animate-slide-in"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                          <Badge className={getStatusColor(campaign.status)}>
                            {campaign.status}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-3">{campaign.description}</p>
                        
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Bonus:</span>
                            <div className="font-semibold text-green-600">{campaign.amount}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Recipients:</span>
                            <div className="font-semibold">{campaign.recipients.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Claimed:</span>
                            <div className="font-semibold">{campaign.claimed.toLocaleString()}</div>
                          </div>
                          <div>
                            <span className="text-gray-500">Spent:</span>
                            <div className="font-semibold text-red-600">{campaign.spent}</div>
                          </div>
                        </div>
                        
                        <div className="mt-3">
                          <div className="flex justify-between text-sm text-gray-500 mb-1">
                            <span>Progress: {campaign.claimed}/{campaign.recipients}</span>
                            <span>{Math.round((campaign.claimed / campaign.recipients) * 100)}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-red-600 h-2 rounded-full" 
                              style={{ width: `${(campaign.claimed / campaign.recipients) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Send className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default AdminBonuses;
