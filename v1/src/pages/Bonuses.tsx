
import { useState } from 'react';
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Gift, 
  Users, 
  Copy, 
  Share2, 
  Trophy,
  Star,
  Zap,
  Target,
  CheckCircle
} from 'lucide-react';

const Bonuses = () => {
  const [referralCode] = useState('JOHN2024');
  const [copied, setCopied] = useState(false);

  const copyReferralCode = () => {
    navigator.clipboard.writeText(`https://mytypist.com/signup?ref=${referralCode}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const referralStats = {
    totalReferrals: 12,
    successfulReferrals: 8,
    bonusEarned: 240,
    nextReward: 50
  };

  const bonusPrograms = [
    {
      id: 1,
      title: 'Referral Bonus',
      description: 'Earn $30 for each friend who signs up for a paid plan',
      icon: Users,
      reward: '$30 per referral',
      progress: 8,
      maxProgress: 10,
      status: 'active'
    },
    {
      id: 2,
      title: 'Document Master',
      description: 'Create 50 documents to unlock premium templates',
      icon: Target,
      reward: 'Premium Templates',
      progress: 34,
      maxProgress: 50,
      status: 'active'
    },
    {
      id: 3,
      title: 'Power User',
      description: 'Use MyTypist for 30 consecutive days',
      icon: Zap,
      reward: '1 Month Free Pro',
      progress: 23,
      maxProgress: 30,
      status: 'active'
    },
    {
      id: 4,
      title: 'Social Sharer',
      description: 'Share 5 documents with team members',
      icon: Share2,
      reward: 'Team Features',
      progress: 5,
      maxProgress: 5,
      status: 'completed'
    }
  ];

  const recentReferrals = [
    {
      id: 1,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      status: 'Signed up',
      bonus: '$30',
      date: '2 days ago'
    },
    {
      id: 2,
      name: 'Mike Chen',
      email: 'mike@example.com',
      status: 'Paid plan',
      bonus: '$30',
      date: '1 week ago'
    },
    {
      id: 3,
      name: 'Lisa Brown',
      email: 'lisa@example.com',
      status: 'Pending',
      bonus: 'Pending',
      date: '3 days ago'
    }
  ];

  const achievements = [
    {
      id: 1,
      title: 'First Document',
      description: 'Created your first document',
      icon: CheckCircle,
      unlocked: true,
      date: '3 weeks ago'
    },
    {
      id: 2,
      title: 'Template Explorer',
      description: 'Used 10 different templates',
      icon: Star,
      unlocked: true,
      date: '2 weeks ago'
    },
    {
      id: 3,
      title: 'Referral Champion',
      description: 'Referred 5+ successful users',
      icon: Trophy,
      unlocked: true,
      date: '1 week ago'
    },
    {
      id: 4,
      title: 'Document Ninja',
      description: 'Created 100+ documents',
      icon: Zap,
      unlocked: false,
      progress: 34
    }
  ];

  return (
    <Layout>
      <SEO title="Bonuses & Referrals - MyTypist" description="Earn rewards and bonuses by referring friends" />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Gift className="w-8 h-8 mr-3 text-brand-600" />
              Bonuses & Referrals
            </h1>
            <p className="text-gray-600">Earn rewards by referring friends and completing achievements</p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Referrals</p>
                    <p className="text-2xl font-bold text-gray-900">{referralStats.totalReferrals}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Successful Referrals</p>
                    <p className="text-2xl font-bold text-gray-900">{referralStats.successfulReferrals}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Bonus Earned</p>
                    <p className="text-2xl font-bold text-gray-900">${referralStats.bonusEarned}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center">
                    <Gift className="w-6 h-6 text-purple-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Next Reward</p>
                    <p className="text-2xl font-bold text-gray-900">${referralStats.nextReward}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-orange-50 flex items-center justify-center">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Referral Program */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Your Referral Link</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex space-x-2">
                      <Input 
                        value={`https://mytypist.com/signup?ref=${referralCode}`}
                        readOnly
                        className="flex-1"
                      />
                      <Button 
                        onClick={copyReferralCode}
                        variant="outline"
                        className="flex items-center space-x-2"
                      >
                        <Copy className="w-4 h-4" />
                        <span>{copied ? 'Copied!' : 'Copy'}</span>
                      </Button>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <Button className="bg-brand-600 hover:bg-brand-700">
                        <Share2 className="w-4 h-4 mr-2" />
                        Share via Email
                      </Button>
                      <Button variant="outline">
                        <Users className="w-4 h-4 mr-2" />
                        Share on Social
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Bonus Programs */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Active Bonus Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {bonusPrograms.map((program) => (
                      <div key={program.id} className="p-4 border border-gray-200 rounded-lg">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-brand-50 rounded-lg flex items-center justify-center">
                              <program.icon className="w-5 h-5 text-brand-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{program.title}</h4>
                              <p className="text-sm text-gray-600">{program.description}</p>
                            </div>
                          </div>
                          <Badge 
                            className={program.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-brand-100 text-brand-800'}
                          >
                            {program.status === 'completed' ? 'Completed' : program.reward}
                          </Badge>
                        </div>
                        
                        {program.status !== 'completed' && (
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="text-gray-600">Progress</span>
                              <span className="font-medium">{program.progress} / {program.maxProgress}</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-brand-600 h-2 rounded-full transition-all"
                                style={{ width: `${(program.progress / program.maxProgress) * 100}%` }}
                              ></div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Referrals */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Recent Referrals</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentReferrals.map((referral) => (
                      <div key={referral.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-brand-100 rounded-full flex items-center justify-center">
                            <Users className="w-4 h-4 text-brand-600" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{referral.name}</p>
                            <p className="text-sm text-gray-500">{referral.email}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            className={
                              referral.status === 'Paid plan' ? 'bg-green-100 text-green-800' :
                              referral.status === 'Signed up' ? 'bg-blue-100 text-blue-800' :
                              'bg-gray-100 text-gray-800'
                            }
                          >
                            {referral.status}
                          </Badge>
                          <p className="text-sm text-gray-500 mt-1">{referral.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {achievements.map((achievement) => (
                      <div 
                        key={achievement.id} 
                        className={`p-3 rounded-lg border ${
                          achievement.unlocked 
                            ? 'border-green-200 bg-green-50' 
                            : 'border-gray-200 bg-gray-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            achievement.unlocked 
                              ? 'bg-green-100' 
                              : 'bg-gray-100'
                          }`}>
                            <achievement.icon className={`w-4 h-4 ${
                              achievement.unlocked 
                                ? 'text-green-600' 
                                : 'text-gray-400'
                            }`} />
                          </div>
                          <div className="flex-1">
                            <h4 className={`font-medium ${
                              achievement.unlocked 
                                ? 'text-green-900' 
                                : 'text-gray-600'
                            }`}>
                              {achievement.title}
                            </h4>
                            <p className={`text-sm ${
                              achievement.unlocked 
                                ? 'text-green-600' 
                                : 'text-gray-500'
                            }`}>
                              {achievement.description}
                            </p>
                            {achievement.unlocked && achievement.date && (
                              <p className="text-xs text-green-500 mt-1">
                                Unlocked {achievement.date}
                              </p>
                            )}
                            {!achievement.unlocked && achievement.progress && (
                              <div className="mt-2">
                                <div className="w-full bg-gray-200 rounded-full h-1">
                                  <div 
                                    className="bg-brand-600 h-1 rounded-full"
                                    style={{ width: `${(achievement.progress / 100) * 100}%` }}
                                  ></div>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">
                                  {achievement.progress}/100 progress
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
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

export default Bonuses;
