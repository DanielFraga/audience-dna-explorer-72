
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, TabsList, IconTabsTrigger } from "@/components/ui/tabs";
import { BarChart3, MessageSquare, ClipboardList } from "lucide-react";

const IconTabs = ({ currentTab }: { currentTab: "stats" | "responses" | "chat" }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (value: string) => {
    if (value === "stats") {
      // Always preserve search when navigating between tabs
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
        <TabsList className="bg-gray-800/60 border border-gray-700 relative px-1 w-full">
          {/* Toggle button that moves behind active tab */}
          <div 
            className="absolute bg-gray-700 rounded-md transition-all duration-300 h-[85%] top-[7.5%]"
            style={{
              left: currentTab === "stats" ? "16.67%" : currentTab === "responses" ? "50%" : "83.33%",
              width: "10%",
              transform: "translateX(-50%)"
            }}
          />
          
          <div className="flex justify-between w-full">
            <div className="flex-1 flex justify-center">
              <IconTabsTrigger 
                value="stats" 
                aria-label="Stats"
                className="z-10"
              >
                <BarChart3 className="h-4 w-4" />
              </IconTabsTrigger>
            </div>
            
            <div className="flex-1 flex justify-center">
              <IconTabsTrigger 
                value="responses" 
                aria-label="Survey Responses"
                className="z-10"
              >
                <ClipboardList className="h-4 w-4" />
              </IconTabsTrigger>
            </div>
            
            <div className="flex-1 flex justify-center">
              <IconTabsTrigger 
                value="chat" 
                aria-label="Chat"
                className="z-10"
              >
                <MessageSquare className="h-4 w-4" />
              </IconTabsTrigger>
            </div>
          </div>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default IconTabs;
