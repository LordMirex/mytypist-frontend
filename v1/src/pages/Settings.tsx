
import { useState } from 'react';
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Palette, 
  Download,
  Trash2,
  Save,
  Eye,
  EyeOff
} from 'lucide-react';

const Settings = () => {
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Acme Corp',
    title: 'Product Manager'
  });

  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    documentSharing: true,
    systemUpdates: false,
    marketingEmails: true
  });

  const [security, setSecurity] = useState({
    twoFactorAuth: false,
    sessionTimeout: '30',
    showPassword: false
  });

  const [preferences, setPreferences] = useState({
    theme: 'light',
    language: 'en',
    timezone: 'UTC',
    autoSave: true
  });

  const handleProfileUpdate = () => {
    console.log('Profile updated:', profile);
    // Handle profile update
  };

  const handlePasswordChange = () => {
    console.log('Password change requested');
    // Handle password change
  };

  const handleDeleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      console.log('Account deletion requested');
      // Handle account deletion
    }
  };

  return (
    <Layout>
      <SEO title="Settings - MyTypist" description="Manage your account settings and preferences" />
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Account Settings</h1>
            <p className="text-gray-600">Manage your account preferences and security settings</p>
          </div>

          <Tabs defaultValue="profile" className="space-y-6">
            <TabsList className="grid grid-cols-2 lg:grid-cols-5 w-full">
              <TabsTrigger value="profile" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span className="hidden sm:inline">Profile</span>
              </TabsTrigger>
              <TabsTrigger value="notifications" className="flex items-center space-x-2">
                <Bell className="w-4 h-4" />
                <span className="hidden sm:inline">Notifications</span>
              </TabsTrigger>
              <TabsTrigger value="security" className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span className="hidden sm:inline">Security</span>
              </TabsTrigger>
              <TabsTrigger value="billing" className="flex items-center space-x-2">
                <CreditCard className="w-4 h-4" />
                <span className="hidden sm:inline">Billing</span>
              </TabsTrigger>
              <TabsTrigger value="preferences" className="flex items-center space-x-2">
                <Palette className="w-4 h-4" />
                <span className="hidden sm:inline">Preferences</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={profile.name}
                        onChange={(e) => setProfile({...profile, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={profile.company}
                        onChange={(e) => setProfile({...profile, company: e.target.value})}
                      />
                    </div>
                    <div>
                      <Label htmlFor="title">Job Title</Label>
                      <Input
                        id="title"
                        value={profile.title}
                        onChange={(e) => setProfile({...profile, title: e.target.value})}
                      />
                    </div>
                  </div>
                  <Button onClick={handleProfileUpdate} className="bg-brand-600 hover:bg-brand-700">
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Notification Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Email Alerts</Label>
                      <p className="text-sm text-gray-600">Receive notifications via email</p>
                    </div>
                    <Switch
                      checked={notifications.emailAlerts}
                      onCheckedChange={(checked) => setNotifications({...notifications, emailAlerts: checked})}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Document Sharing</Label>
                      <p className="text-sm text-gray-600">Notifications when documents are shared with you</p>
                    </div>
                    <Switch
                      checked={notifications.documentSharing}
                      onCheckedChange={(checked) => setNotifications({...notifications, documentSharing: checked})}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>System Updates</Label>
                      <p className="text-sm text-gray-600">Product updates and maintenance notifications</p>
                    </div>
                    <Switch
                      checked={notifications.systemUpdates}
                      onCheckedChange={(checked) => setNotifications({...notifications, systemUpdates: checked})}
                    />
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Marketing Emails</Label>
                      <p className="text-sm text-gray-600">Tips, promotions, and feature announcements</p>
                    </div>
                    <Switch
                      checked={notifications.marketingEmails}
                      onCheckedChange={(checked) => setNotifications({...notifications, marketingEmails: checked})}
                    />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="security">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Password & Authentication</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <Label>Two-Factor Authentication</Label>
                        <p className="text-sm text-gray-600">Add an extra layer of security to your account</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Badge variant={security.twoFactorAuth ? "default" : "secondary"}>
                          {security.twoFactorAuth ? "Enabled" : "Disabled"}
                        </Badge>
                        <Switch
                          checked={security.twoFactorAuth}
                          onCheckedChange={(checked) => setSecurity({...security, twoFactorAuth: checked})}
                        />
                      </div>
                    </div>
                    <Separator />
                    <div>
                      <Label htmlFor="session-timeout">Session Timeout (minutes)</Label>
                      <Input
                        id="session-timeout"
                        type="number"
                        value={security.sessionTimeout}
                        onChange={(e) => setSecurity({...security, sessionTimeout: e.target.value})}
                        className="w-32 mt-2"
                      />
                    </div>
                    <Button onClick={handlePasswordChange} variant="outline">
                      Change Password
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-red-600">Danger Zone</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between p-4 border border-red-200 rounded-lg bg-red-50">
                      <div>
                        <Label className="text-red-800">Delete Account</Label>
                        <p className="text-sm text-red-600">Permanently delete your account and all data</p>
                      </div>
                      <Button onClick={handleDeleteAccount} variant="destructive" size="sm">
                        <Trash2 className="w-4 h-4 mr-2" />
                        Delete Account
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="billing">
              <Card>
                <CardHeader>
                  <CardTitle>Billing & Subscription</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-brand-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-brand-900">Free Plan</h3>
                        <p className="text-sm text-brand-600">5 documents per month</p>
                      </div>
                      <Badge className="bg-brand-100 text-brand-800">Current Plan</Badge>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Pro Plan</h4>
                        <p className="text-2xl font-bold mb-2">$9<span className="text-sm font-normal">/month</span></p>
                        <ul className="text-sm space-y-1 mb-4">
                          <li>• Unlimited documents</li>
                          <li>• Advanced templates</li>
                          <li>• Priority support</li>
                        </ul>
                        <Button className="w-full bg-brand-600 hover:bg-brand-700">Upgrade to Pro</Button>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-4">
                        <h4 className="font-semibold mb-2">Business Plan</h4>
                        <p className="text-2xl font-bold mb-2">$29<span className="text-sm font-normal">/month</span></p>
                        <ul className="text-sm space-y-1 mb-4">
                          <li>• Everything in Pro</li>
                          <li>• Team collaboration</li>
                          <li>• Custom branding</li>
                        </ul>
                        <Button className="w-full" variant="outline">Upgrade to Business</Button>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-4">Usage This Month</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Documents Created</span>
                        <span>3 / 5</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-brand-600 h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="preferences">
              <Card>
                <CardHeader>
                  <CardTitle>Application Preferences</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="theme">Theme</Label>
                      <select 
                        id="theme"
                        value={preferences.theme}
                        onChange={(e) => setPreferences({...preferences, theme: e.target.value})}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                      >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                        <option value="system">System</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="language">Language</Label>
                      <select 
                        id="language"
                        value={preferences.language}
                        onChange={(e) => setPreferences({...preferences, language: e.target.value})}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timezone">Timezone</Label>
                      <select 
                        id="timezone"
                        value={preferences.timezone}
                        onChange={(e) => setPreferences({...preferences, timezone: e.target.value})}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-md"
                      >
                        <option value="UTC">UTC</option>
                        <option value="EST">Eastern Time</option>
                        <option value="PST">Pacific Time</option>
                        <option value="CET">Central European Time</option>
                      </select>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <Label>Auto-save Documents</Label>
                      <p className="text-sm text-gray-600">Automatically save changes every 30 seconds</p>
                    </div>
                    <Switch
                      checked={preferences.autoSave}
                      onCheckedChange={(checked) => setPreferences({...preferences, autoSave: checked})}
                    />
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <h4 className="font-semibold mb-4">Data Export</h4>
                    <p className="text-sm text-gray-600 mb-4">Download all your documents and data</p>
                    <Button variant="outline">
                      <Download className="w-4 h-4 mr-2" />
                      Export My Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
