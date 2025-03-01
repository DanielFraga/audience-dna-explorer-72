
import MainSidebar from "@/components/MainSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, CreditCard, Mail, Shield, UserIcon } from "lucide-react";
import { useState } from "react";

const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  
  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="main-container transition-all duration-300 md:ml-[208px] md:collapsed:ml-16">
        <div className="flex flex-col h-full">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-100">Settings</h1>
            <p className="text-gray-400">Manage your account settings and preferences.</p>
          </div>
          
          <Tabs defaultValue="profile" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="profile" className="text-sm">
                <UserIcon className="w-4 h-4 mr-2" />
                Profile
              </TabsTrigger>
              <TabsTrigger value="data" className="text-sm">
                <Shield className="w-4 h-4 mr-2" />
                Data & Privacy
              </TabsTrigger>
              <TabsTrigger value="subscription" className="text-sm">
                <CreditCard className="w-4 h-4 mr-2" />
                Subscription
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="profile" className="space-y-4">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Profile Information</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage your personal information and profile settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="h-20 w-20">
                      <AvatarImage src="/placeholder.svg" alt="Profile" />
                      <AvatarFallback className="bg-blue-600 text-white text-lg">JD</AvatarFallback>
                    </Avatar>
                    <div>
                      <Button variant="outline" size="sm" className="text-gray-300 border-gray-600">
                        Change Avatar
                      </Button>
                    </div>
                  </div>
                  
                  <Separator className="bg-gray-700" />
                  
                  <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <Label htmlFor="name" className="text-right md:pt-2 text-gray-300">
                        Full Name
                      </Label>
                      <div className="md:col-span-3">
                        <Input 
                          id="name" 
                          value={name} 
                          onChange={(e) => setName(e.target.value)} 
                          className="bg-gray-700/50 border-gray-600 text-gray-200"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      <Label htmlFor="email" className="text-right md:pt-2 text-gray-300">
                        Email
                      </Label>
                      <div className="md:col-span-3">
                        <Input 
                          id="email" 
                          type="email" 
                          value={email} 
                          onChange={(e) => setEmail(e.target.value)} 
                          className="bg-gray-700/50 border-gray-600 text-gray-200"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                      Save Changes
                    </Button>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Notification Preferences</CardTitle>
                  <CardDescription className="text-gray-400">
                    Manage how you receive notifications.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Bell className="w-4 h-4 text-gray-400" />
                        <Label htmlFor="email-notifs" className="text-gray-300">Email Notifications</Label>
                      </div>
                      <Switch id="email-notifs" defaultChecked />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Bell className="w-4 h-4 text-gray-400" />
                        <Label htmlFor="product-notifs" className="text-gray-300">Product Updates</Label>
                      </div>
                      <Switch id="product-notifs" defaultChecked />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="data" className="space-y-4">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Data Management</CardTitle>
                  <CardDescription className="text-gray-400">
                    Control your data usage and privacy settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium text-gray-200">Data Sharing</div>
                      <div className="text-xs text-gray-400">Allow anonymous usage data to improve our services</div>
                    </div>
                    <Switch id="data-sharing" defaultChecked />
                  </div>
                  
                  <Separator className="bg-gray-700" />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium text-gray-200">Data Export</div>
                      <div className="text-xs text-gray-400">Download all your data</div>
                    </div>
                    <Button variant="outline" size="sm" className="text-gray-300 border-gray-600">
                      Export
                    </Button>
                  </div>
                  
                  <Separator className="bg-gray-700" />
                  
                  <div className="flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="text-sm font-medium text-gray-200">Account Deletion</div>
                      <div className="text-xs text-gray-400">Permanently delete your account and all data</div>
                    </div>
                    <Button variant="destructive" size="sm">
                      Delete Account
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="subscription" className="space-y-4">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-gray-100">Subscription Details</CardTitle>
                  <CardDescription className="text-gray-400">
                    View and manage your subscription information.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-lg font-semibold text-blue-400">Custom Plan</div>
                      <div className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-semibold">
                        ACTIVE
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">
                      You are currently on a custom plan tailored for pilot program participants. 
                      This includes enhanced features and priority support.
                    </p>
                    <div className="mb-4">
                      <div className="text-sm text-gray-400 mb-1">Plan Features:</div>
                      <ul className="text-gray-300 list-disc list-inside space-y-1 ml-2">
                        <li>Unlimited audience analysis</li>
                        <li>Premium insights dashboard</li>
                        <li>Advanced demographic targeting</li>
                        <li>Priority customer support</li>
                      </ul>
                    </div>
                    <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                      <Mail className="w-4 h-4" />
                      Contact Cubular Pilot Program Team
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Settings;
