import { Search, Download, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainSidebar from "./MainSidebar";
interface AppHeaderProps {
  searchTerm?: string;
  currentTab: "stats" | "responses" | "chat";
  onResetSearch?: () => void;
}
const AppHeader = ({
  searchTerm = "holiday",
  currentTab,
  onResetSearch
}: AppHeaderProps) => {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleResetSearch = () => {
    if (onResetSearch) {
      onResetSearch();
    } else {
      navigate('/', {
        state: {
          resetSearch: true
        }
      });
    }
  };
  const navigateToHome = () => {
    navigate('/', {
      state: {
        resetSearch: true
      }
    });
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return <>
      <MainSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
      
      <div className="sticky top-0 z-10 bg-gray-950 border-b border-gray-800/60">
        {/* Header container with consistent padding and spacing */}
        <div className="flex flex-col">
          {/* First frame - search term */}
          <div className="h-[50px] px-3 md:px-6">
            <div className="h-full flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="h-8 w-8 p-0 rounded-full text-gray-400 hover:text-white" onClick={toggleSidebar}>
                  <Menu className="h-5 w-5" />
                </Button>
                <h2 className="text-2xl font-grotesk font-semibold text-white pb-0.5 translate-y-[2px]">"{searchTerm}"</h2>
              </div>
              
              {/* Added Cubular logo */}
              <Button variant="ghost" className="h-8 p-1 rounded-md text-blue-500 hover:bg-gray-800 transition-colors" onClick={navigateToHome}>
                <div className="flex items-center gap-1.5">
                  
                  <span className="text-xs font-medium text-gray-100">CUBULAR</span>
                </div>
              </Button>
            </div>
          </div>
          
          {/* Second frame - respondent count and action buttons */}
          <div className="h-[50px] px-3 md:px-6">
            <div className="h-full flex items-center justify-between">
              <Badge variant="outline" className="bg-gray-800 text-gray-300 border-gray-700 pr-2 gradient-stroke">
                <span className="mr-1">450 out of 10000 respondents</span>
                <Button variant="ghost" size="icon" className="h-5 w-5 p-0 ml-1 hover:bg-gray-700 rounded-full" onClick={handleResetSearch}>
                  <X className="h-3 w-3 text-gray-400" />
                </Button>
              </Badge>
              
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700">
                  <Search className="w-4 h-4 text-gray-300" />
                </Button>
                
                <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700">
                  <Download className="w-4 h-4 text-gray-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default AppHeader;