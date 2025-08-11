import { Search, Download, Menu, FileText, Table } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { X } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import MainSidebar from "./MainSidebar";
import IconTabs from "@/components/IconTabs";
interface AppHeaderProps {
  searchTerm?: string;
  currentTab: "stats" | "responses" | "chat";
  onResetSearch?: () => void;
  onExportPDF?: () => void;
  onExportCSV?: () => void;
}
const AppHeader = ({
  searchTerm = "holiday",
  currentTab,
  onResetSearch,
  onExportPDF,
  onExportCSV
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
  return (<>
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
              
              
              <div className="flex items-center gap-2">
                {/* Export Button - only show on responses tab */}
                {currentTab === "responses" && onExportPDF && onExportCSV && (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button 
                        variant="secondary" 
                        size="sm" 
                        className="flex items-center gap-2"
                        aria-label="Export targeting data"
                      >
                        <Download className="h-4 w-4" />
                        Export
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent 
                      align="end" 
                      className="w-48 bg-background border-border z-50"
                      aria-label="Export options"
                    >
                      <DropdownMenuItem 
                        onClick={onExportPDF}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-800"
                        aria-label="Export as PDF"
                      >
                        <FileText className="h-4 w-4" />
                        Export as PDF
                      </DropdownMenuItem>
                      <DropdownMenuItem 
                        onClick={onExportCSV}
                        className="flex items-center gap-2 cursor-pointer hover:bg-gray-800"
                        aria-label="Export as CSV"
                      >
                        <Table className="h-4 w-4" />
                        Export as CSV
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                )}
                
                <Button size="icon" variant="ghost" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700">
                  <Search className="w-4 h-4 text-gray-300" />
                </Button>
                
                
              </div>
            </div>
          </div>
          {/* Tabs row under the search bar (desktop/tablet) */}
          <div className="hidden md:block px-3 md:px-6">
            <IconTabs currentTab={currentTab} inlineTop />
          </div>
        </div>
      </div>
    </>
  );
};
export default AppHeader;