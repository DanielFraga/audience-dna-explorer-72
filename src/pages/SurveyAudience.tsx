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
  const handleExportPDF = async () => {
    const element = document.getElementById('targeting-export-root');
    if (!element) return;
    const { default: html2canvas } = await import('html2canvas');
    const { jsPDF } = await import('jspdf');

    const canvas = await html2canvas(element, { scale: 2, backgroundColor: null });
    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF({ orientation: 'portrait', unit: 'pt', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();

    const ratio = Math.min(pageWidth / canvas.width, pageHeight / canvas.height);
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;
    const x = (pageWidth - imgWidth) / 2;
    const y = 24; // small top margin

    pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);
    pdf.save('targeting-activation.pdf');
  };

  const handleExportCSV = async () => {
    const { targetingCards } = await import('@/data/targeting');

    const rows: string[] = [];
    rows.push(['Card', 'Type', 'Bullet'].join(','));

    targetingCards.forEach(card => {
      card.essentials.forEach(b => rows.push([`"${card.title}"`, 'Essentials', `"${b.replace(/"/g, '""')}"`].join(',')));
      card.advanced.forEach(b => rows.push([`"${card.title}"`, 'Advanced', `"${b.replace(/"/g, '""')}"`].join(',')));
    });

    const csvContent = rows.join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'targeting-activation.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  return <div className="min-h-screen gradient-background font-grotesk text-[13px]">
      <div className="h-[100vh] overflow-auto">
        <AppHeader searchTerm="holiday" currentTab="responses" onResetSearch={handleResetSearch} onExportPDF={handleExportPDF} onExportCSV={handleExportCSV} />
        
        <div className="p-3 md:p-6 pt-4">
          <div className="pb-24">
            {activeTab === 'survey' ? <SurveyTab /> : <DemographicsTab />}
          </div>
        </div>
        
        <IconTabs currentTab="responses" />
      </div>
    </div>;
};
export default SurveyAudience;