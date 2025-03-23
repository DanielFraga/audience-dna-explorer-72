
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
    <div className="flex justify-center mt-2">
      <Tabs value={currentTab} className="w-auto" onValueChange={handleTabChange}>
        <TabsList className="bg-gray-800/60 border border-gray-700 relative px-1">
          {/* Toggle button that moves behind active tab */}
          <div 
            className="absolute bg-gray-700 rounded-md transition-all duration-300 h-[85%] top-[7.5%]"
            style={{
              left: currentTab === "stats" ? "5%" : currentTab === "responses" ? "35%" : "65%",
              width: "30%"
            }}
          />
          
          <IconTabsTrigger 
            value="stats" 
            aria-label="Stats"
            className="z-10"
          >
            <BarChart3 className="h-4 w-4" />
          </IconTabsTrigger>
          
          <IconTabsTrigger 
            value="responses" 
            aria-label="Survey Responses"
            className="mx-6 z-10"
          >
            <ClipboardList className="h-4 w-4" />
          </IconTabsTrigger>
          
          <IconTabsTrigger 
            value="chat" 
            aria-label="Chat"
            className="z-10"
          >
            <MessageSquare className="h-4 w-4" />
          </IconTabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default IconTabs;
