
import React from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, IconTabsTrigger } from "@/components/ui/tabs";
import { BarChart3, MessageSquare, ClipboardList, Users } from "lucide-react";

const IconTabs = ({ currentTab }: { currentTab: "stats" | "responses" | "chat" | "audiences" }) => {
  const navigate = useNavigate();

  return (
    <div className="flex justify-center mt-2">
      <Tabs value={currentTab} className="w-auto">
        <TabsList className="bg-gray-800/60 border border-gray-700">
          <IconTabsTrigger 
            value="stats" 
            onClick={() => navigate("/")}
            aria-label="Stats"
          >
            <BarChart3 className="h-4 w-4" />
          </IconTabsTrigger>
          
          <IconTabsTrigger 
            value="responses" 
            onClick={() => navigate("/survey-audience")}
            aria-label="Survey Responses"
            className="mx-4"
          >
            <ClipboardList className="h-4 w-4" />
          </IconTabsTrigger>
          
          <IconTabsTrigger 
            value="audiences" 
            onClick={() => navigate("/saved-audiences")}
            aria-label="Saved Audiences"
            className="mr-4"
          >
            <Users className="h-4 w-4" />
          </IconTabsTrigger>
          
          <IconTabsTrigger 
            value="chat" 
            onClick={() => navigate("/chat")}
            aria-label="Chat"
          >
            <MessageSquare className="h-4 w-4" />
          </IconTabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
};

export default IconTabs;
