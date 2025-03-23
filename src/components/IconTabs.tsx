
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, TabsList, IconTabsTrigger } from "@/components/ui/tabs";
import { BarChart3, MessageSquare, ClipboardList } from "lucide-react";

const IconTabs = ({ currentTab }: { currentTab: "stats" | "responses" | "chat" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (value: string) => {
    // Always preserve search when navigating between tabs
    if (value === "stats") {
      navigate("/", { 
        state: { preserveSearch: true } 
      });
    } else if (value === "responses") {
      navigate("/survey-audience", {
        state: { preserveSearch: true }
      });
    } else if (value === "chat") {
      navigate("/chat", {
        state: { preserveSearch: true }
      });
    }
  };

  return (
    <div className="flex justify-center w-full">
      <Tabs value={currentTab} className="w-full" onValueChange={handleTabChange}>
        <TabsList className="bg-gray-800/60 border border-gray-700 relative px-1 w-full h-[60px]">
          {/* Toggle button that moves behind active tab */}
          <div 
            className="absolute bg-gray-700 rounded-md transition-all duration-300 h-[48px] top-[6px]"
            style={{
              left: currentTab === "stats" ? "16.67%" : currentTab === "responses" ? "50%" : "83.33%",
              width: "80px",
              transform: "translateX(-50%)"
            }}
          />
          
          <div className="tab-container">
            <div className="tab-section">
              <IconTabsTrigger 
                value="stats" 
                aria-label="Stats"
                className="z-10 h-12 w-20 flex flex-col items-center justify-center"
              >
                <BarChart3 className="h-5 w-5 mb-1" />
                <span className="text-[10px] font-medium">Stats</span>
              </IconTabsTrigger>
            </div>
            
            <div className="tab-section">
              <IconTabsTrigger 
                value="responses" 
                aria-label="Survey Responses"
                className="z-10 h-12 w-20 flex flex-col items-center justify-center"
              >
                <ClipboardList className="h-5 w-5 mb-1" />
                <span className="text-[10px] font-medium">Responses</span>
              </IconTabsTrigger>
            </div>
            
            <div className="tab-section">
              <IconTabsTrigger 
                value="chat" 
                aria-label="Chat"
                className="z-10 h-12 w-20 flex flex-col items-center justify-center"
              >
                <MessageSquare className="h-5 w-5 mb-1" />
                <span className="text-[10px] font-medium">Chat</span>
              </IconTabsTrigger>
            </div>
          </div>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default IconTabs;
