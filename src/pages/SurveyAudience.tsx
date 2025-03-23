
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import MainSidebar from "@/components/MainSidebar";
import IconTabs from "@/components/IconTabs";
import { SurveyTab } from "@/components/survey/SurveyTab";

const SurveyAudience = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen md:h-screen bg-gray-950 font-grotesk text-[13px] md:overflow-hidden">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 p-3 md:p-4 animate-fade-in h-[100vh] overflow-auto md:overflow-hidden">
        <div className="flex flex-col items-center mb-6">
          <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700 pr-2 gradient-stroke">
            <span className="mr-1">450 out of 10000 respondents</span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-5 w-5 p-0 ml-1 hover:bg-gray-700 rounded-full"
              onClick={() => navigate('/', { replace: true, state: { resetSearch: true } })}
            >
              <X className="h-3 w-3 text-gray-400" />
            </Button>
          </Badge>
          
          <IconTabs currentTab="responses" />
        </div>
        
        <div className="space-y-3">
          <h1 className="text-2xl font-display font-semibold text-gray-100">Survey Responses</h1>
        </div>
        
        <div className="mt-6">
          <Card className="bg-gray-800/50 border-gray-700">
            <CardContent className="p-6">
              <SurveyTab />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SurveyAudience;
