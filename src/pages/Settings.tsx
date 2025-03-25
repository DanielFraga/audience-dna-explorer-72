
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MainSidebar from "@/components/MainSidebar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreditCard, Mail, UserIcon, X } from "lucide-react";

const Settings = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const navigate = useNavigate();
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="main-container transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 p-4 md:p-6">
        <div className="flex flex-col h-full max-w-4xl mx-auto">
          <div className="mb-6 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-100">Settings</h1>
              <p className="text-gray-400">Manage your account settings and preferences.</p>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={handleGoBack}
              className="h-8 w-8 rounded-full text-gray-400 hover:text-white hover:bg-gray-800"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          
          <div className="space-y-6">
            {/* Profile Information */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Profile Information</CardTitle>
                <CardDescription className="text-gray-400">
                  Manage your personal information and profile settings.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                  <Avatar className="h-20 w-20 mb-4 md:mb-0">
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
                
                <div className="grid gap-6">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-x-4 items-center">
                    <Label htmlFor="name" className="md:text-right text-gray-300">
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
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-y-4 md:gap-x-4 items-center">
                    <Label htmlFor="email" className="md:text-right text-gray-300">
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
            
            {/* Subscription Details */}
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-gray-100">Subscription Details</CardTitle>
                <CardDescription className="text-gray-400">
                  View your current subscription information.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-blue-900/20 border border-blue-700/30 rounded-lg p-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                    <div className="text-lg font-semibold text-blue-400">Pilot Program</div>
                    <div className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs font-semibold">
                      ACTIVE
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    You are now on a Pilot subscription, which includes enhanced features and priority support. 
                    For more information contact the Cubular Pilot Program team.
                  </p>
                  <Button className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white">
                    <Mail className="w-4 h-4" />
                    Contact Cubular Pilot Program Team
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
