
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import MainSidebar from "@/components/MainSidebar";
import { SurveyTab } from "@/components/survey/SurveyTab";
import AppHeader from "@/components/AppHeader";

const SurveyAudience = () => {
  const navigate = useNavigate();

  // Handle the X button click to reset search
  const handleResetSearch = () => {
    navigate('/', { 
      state: { resetSearch: true } 
    });
  };

  return (
    <div className="min-h-screen md:h-screen bg-gray-950 font-grotesk text-[13px] md:overflow-hidden">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 animate-fade-in h-[100vh] overflow-auto md:overflow-hidden">
        <AppHeader 
          searchTerm="holiday" 
          currentTab="responses" 
          onResetSearch={handleResetSearch}
        />
        
        <div className="p-3 md:p-6">
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
    </div>
  );
};

export default SurveyAudience;
