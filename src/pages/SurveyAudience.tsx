import { useNavigate } from "react-router-dom";
import { SurveyTab } from "@/components/survey/SurveyTab";
import AppHeader from "@/components/AppHeader";
import IconTabs from "@/components/IconTabs";
const SurveyAudience = () => {
  const navigate = useNavigate();

  // Handle the X button click to reset search
  const handleResetSearch = () => {
    navigate('/', {
      state: {
        resetSearch: true
      }
    });
  };
  return <div className="min-h-screen gradient-background font-grotesk text-[13px]">
      <div className="h-[100vh] overflow-auto">
        <AppHeader searchTerm="holiday" currentTab="responses" onResetSearch={handleResetSearch} />
        
        <div className="p-3 md:p-6">
          <div className="space-y-3">
            <h1 className="text-2xl font-display font-semibold text-gray-100">Most Related Quotes</h1>
          </div>
          
          <div className="mt-6 pb-24">
            <SurveyTab />
          </div>
        </div>
        
        <IconTabs currentTab="responses" />
      </div>
    </div>;
};
export default SurveyAudience;