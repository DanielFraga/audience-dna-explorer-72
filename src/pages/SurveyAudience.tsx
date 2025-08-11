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
  const handleExportPDF = () => {
    console.log("Exporting as PDF...");
    // TODO: Implement PDF export functionality
  };

  const handleExportCSV = () => {
    console.log("Exporting as CSV...");
    // TODO: Implement CSV export functionality
  };
  return <div className="min-h-screen gradient-background font-grotesk text-[13px]">
      <div className="h-[100vh] overflow-auto">
        <AppHeader searchTerm="holiday" currentTab="responses" onResetSearch={handleResetSearch} />
        
        <div className="p-3 md:p-6 pt-4 relative">
          {/* Export Button */}
          <div className="absolute top-4 right-6 z-10">
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
                className="w-48 bg-gray-900 border-gray-700 z-50"
                aria-label="Export options"
              >
                <DropdownMenuItem 
                  onClick={handleExportPDF}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-800"
                  aria-label="Export as PDF"
                >
                  <FileText className="h-4 w-4" />
                  Export as PDF
                </DropdownMenuItem>
                <DropdownMenuItem 
                  onClick={handleExportCSV}
                  className="flex items-center gap-2 cursor-pointer hover:bg-gray-800"
                  aria-label="Export as CSV"
                >
                  <Table className="h-4 w-4" />
                  Export as CSV
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