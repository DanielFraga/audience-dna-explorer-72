import { useNavigate } from "react-router-dom";
import { SurveyTab } from "@/components/survey/SurveyTab";
import { DemographicsTab } from "@/components/demographics/DemographicsTab";
import { useState } from "react";
import AppHeader from "@/components/AppHeader";
import IconTabs from "@/components/IconTabs";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Download, FileText, Table } from "lucide-react";
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

  // Handle export actions
  const handleExportEssentialsPdf = () => {
    console.log("Exporting essentials-only PDF...");
    // TODO: Implement Essentials-only PDF export
  };

  const handleExportFullPdf = () => {
    console.log("Exporting essentials + advanced PDF...");
    // TODO: Implement full PDF export
  };
  return <div className="min-h-screen gradient-background font-grotesk text-[13px]">
      <div className="h-[100vh] overflow-auto">
        <AppHeader searchTerm="holiday" currentTab="responses" onResetSearch={handleResetSearch} />
        
        <div className="p-3 md:p-6 pt-4 relative">
          {/* Export Button */}
          <div className="absolute top-4 right-6 z-50">
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
                className="w-56 bg-gray-900 border-gray-700 z-50"
                aria-label="Export options"
              >
                <DropdownMenuItem 
                  onClick={handleExportEssentialsPdf}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-800"
                  aria-label="Export essentials-only PDF"
                >
                  <FileText className="h-4 w-4" />
                  Essentials only (PDF)
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleExportFullPdf}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-800"
                  aria-label="Export essentials and advanced PDF"
                >
                  <FileText className="h-4 w-4" />
                  Essentials + Advanced (PDF)
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="mt-6 pb-24">
            {activeTab === 'survey' ? <SurveyTab /> : <DemographicsTab />}
          </div>
        </div>
        
        <IconTabs currentTab="responses" />
      </div>
    </div>;
};
export default SurveyAudience;