
import { useNavigate } from "react-router-dom";
import { SurveyTab } from "@/components/survey/SurveyTab";
import { DemographicsTab } from "@/components/demographics/DemographicsTab";
import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import IconTabs from "@/components/IconTabs";

const SurveyAudience = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'survey' | 'demographics'>('survey');

  // Handle the X button click to reset search
  const handleResetSearch = () => {
    navigate('/', {
      state: {
        resetSearch: true
      }
    });
  };

  return (
    <div className="min-h-screen gradient-background font-grotesk text-[13px]">
      <div className="h-[100vh] overflow-auto">
        <AppHeader searchTerm="holiday" currentTab="responses" onResetSearch={handleResetSearch} />
        
        <div className="p-3 md:p-6">
          <div className="space-y-3">
            <h1 className="text-2xl font-display font-semibold text-gray-100">Most Related Quotes</h1>
          </div>
          
          {/* Simple tab buttons */}
          <div className="flex gap-4 mt-4 mb-2">
            <button 
              onClick={() => setActiveTab('survey')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'survey' 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Survey Results
            </button>
            <button 
              onClick={() => setActiveTab('demographics')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'demographics' 
                  ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              Demographics
            </button>
          </div>
          
          <div className="mt-6 pb-24">
            {activeTab === 'survey' ? <SurveyTab /> : <DemographicsTab />}
          </div>
        </div>
        
        <IconTabs currentTab="responses" />
      </div>
    </div>
  );
};

export default SurveyAudience;
