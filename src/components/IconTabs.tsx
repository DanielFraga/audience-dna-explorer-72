
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
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800/60 pb-safe">
      <div className="w-full max-w-lg mx-auto">
        <Tabs value={currentTab} className="w-full" onValueChange={handleTabChange}>
          <TabsList className="bg-gray-800/60 border border-gray-700 relative px-1 w-full h-[70px]">
            {/* Toggle button that moves behind active tab */}
            <div 
              className="absolute bg-gray-700 rounded-md transition-all duration-300 h-[58px] top-[6px]"
              style={{
                left: currentTab === "stats" ? "16.67%" : currentTab === "responses" ? "50%" : "83.33%",
                width: "85px",
                transform: "translateX(-50%)"
              }}
            />
            
            <div className="tab-container flex w-full justify-around">
              <div className="tab-section">
                <IconTabsTrigger 
                  value="stats" 
                  aria-label="Stats"
                  className="z-10 h-14 w-20 flex flex-col items-center justify-center"
                >
                  <BarChart3 className="h-6 w-6 mb-1.5" />
                  <span className="text-xs font-medium">Stats</span>
                </IconTabsTrigger>
              </div>
              
              <div className="tab-section">
                <IconTabsTrigger 
                  value="responses" 
                  aria-label="Survey Responses"
                  className="z-10 h-14 w-20 flex flex-col items-center justify-center"
                >
                  <ClipboardList className="h-6 w-6 mb-1.5" />
                  <span className="text-xs font-medium">Responses</span>
                </IconTabsTrigger>
              </div>
              
              <div className="tab-section">
                <IconTabsTrigger 
                  value="chat" 
                  aria-label="Chat"
                  className="z-10 h-14 w-20 flex flex-col items-center justify-center"
                >
                  <MessageSquare className="h-6 w-6 mb-1.5" />
                  <span className="text-xs font-medium">Chat</span>
                </IconTabsTrigger>
              </div>
            </div>
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default IconTabs;
