
import { useState } from "react";
import { Search, Download } from "lucide-react";
import MainSidebar from "@/components/MainSidebar";
import { tabs } from "@/constants/tabs";
import { DemographicsTab } from "@/components/demographics/DemographicsTab";
import { PsychographicsTab } from "@/components/psychographics/PsychographicsTab";
import { SurveyTab } from "@/components/survey/SurveyTab";
import { InsightsTab } from "@/components/insights/InsightsTab";

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("WHO_DEMO");
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
  const totalRespondents = 1234;

  const renderContent = () => {
    switch(activeTab) {
      case "WHO_DEMO":
        return <DemographicsTab />;
      case "WHO_PSYCHO":
        return <PsychographicsTab />;
      case "WHAT":
        return <SurveyTab />;
      case "WHY":
        return <InsightsTab />;
      default:
        return (
          <div className="p-4 text-center text-gray-500">
            Content for {activeTab} tab coming soon...
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="transition-all duration-300 md:ml-52 p-4 md:p-6 animate-fade-in">
        {/* Top Section */}
        <div className="mb-8 mt-14 md:mt-0">
          <div className="relative flex flex-col md:flex-row gap-3 md:gap-0 items-start md:items-center">
            <input
              type="text"
              placeholder="Explore your audience..."
              className="w-full md:w-[calc(100%-260px)] px-4 py-2 pl-10 rounded-lg border border-gray-800 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500 text-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
            
            <div className="flex items-center space-x-2 w-full md:w-auto md:ml-3">
              <button className="flex-1 md:flex-none px-3 py-1.5 text-[11px] font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Save DNA
              </button>
              <button className="flex-1 md:flex-none px-3 py-1.5 text-[11px] font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center whitespace-nowrap">
                <Download className="w-3 h-3 mr-1" />
                Export
              </button>
            </div>
          </div>
          
          <p className="mt-2 text-[11px] text-gray-400">
            438 out of 10000 survey respondents have responses relevant to the search term "Holiday". Here is their "DNA".
          </p>
        </div>

        {/* Tabs and Content Container */}
        <div>
          {/* Tabs */}
          <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
            <div className="flex w-full bg-gray-800 rounded-t-lg min-w-[600px]">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 text-xs font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? "text-white bg-gray-900"
                      : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/80"
                  } ${index === 0 ? "rounded-tl-lg" : ""} ${
                    index === tabs.length - 1 ? "rounded-tr-lg" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span>{tab.label}</span>
                    {tab.subLabel && (
                      <span className="text-[10px] text-gray-400 mt-0.5">
                        {tab.subLabel}
                      </span>
                    )}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-gray-900 rounded-b-lg p-4 md:p-6 overflow-x-auto">
            <div className="min-w-[600px]">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
