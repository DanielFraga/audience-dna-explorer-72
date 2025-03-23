
import { Search, Download, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import IconTabs from "@/components/IconTabs";

interface AppHeaderProps {
  searchTerm?: string;
  currentTab: "stats" | "responses" | "chat";
  onResetSearch?: () => void;
  onToggleSidebar?: () => void;
}

const AppHeader = ({ 
  searchTerm = "holiday", 
  currentTab, 
  onResetSearch,
  onToggleSidebar 
}: AppHeaderProps) => {
  const navigate = useNavigate();

  const handleResetSearch = () => {
    if (onResetSearch) {
      onResetSearch();
    } else {
      navigate('/', { 
        state: { resetSearch: true } 
      });
    }
  };

  return (
    <div className="sticky top-0 z-10 bg-gray-950 border-b border-gray-800/60">
      {/* Header container with consistent padding and spacing */}
      <div className="flex flex-col">
        {/* First frame - search term */}
        <div className="h-[50px] px-3 md:px-6">
          <div className="h-full flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 p-0 rounded-full text-gray-400 hover:text-white md:hidden"
                onClick={onToggleSidebar}
              >
                <Menu className="h-5 w-5" />
              </Button>
              <h2 className="text-2xl font-grotesk font-semibold text-white pb-0.5 translate-y-[2px]">"{ searchTerm }"</h2>
            </div>
            <div className="w-10"></div> {/* Empty space for balance */}
          </div>
        </div>
        
        {/* Second frame - respondent count and action buttons */}
        <div className="h-[50px] px-3 md:px-6">
          <div className="h-full flex items-center justify-between">
            <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700 pr-2 gradient-stroke">
              <span className="mr-1">450 out of 10000 respondents</span>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-5 w-5 p-0 ml-1 hover:bg-gray-700 rounded-full"
                onClick={handleResetSearch}
              >
                <X className="h-3 w-3 text-gray-400" />
              </Button>
            </Badge>
            
            <div className="flex items-center gap-2">
              <Button 
                size="icon" 
                variant="ghost" 
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Search className="w-4 h-4 text-gray-300" />
              </Button>
              
              <Button 
                size="icon" 
                variant="ghost" 
                className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700"
              >
                <Download className="w-4 h-4 text-gray-300" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Third frame - navigation tabs */}
        <div className="h-[60px]">
          <div className="h-full flex items-center justify-center">
            <div className="w-full max-w-lg px-4">
              <IconTabs currentTab={currentTab} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
