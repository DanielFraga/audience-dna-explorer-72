
import { ChartBar, Users, MapPin, DollarSign, User, Info } from "lucide-react";
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import DemographicsMap from "@/components/DemographicsMap";

export function DemographicsTab() {
  return (
    <div className="grid grid-cols-2 gap-6 animate-slide-up">
      <div className="space-y-3">
        {/* Age Distribution Card */}
        <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Detailed breakdown of age groups across all respondents
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center gap-1.5 mb-2">
            <ChartBar className="w-3.5 h-3.5 text-gray-400" />
            <h3 className="text-xs font-semibold text-white">Age Distribution</h3>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { percent: "28%", label: "16-29" },
              { percent: "35%", label: "30-45" },
              { percent: "22%", label: "45-60" },
              { percent: "15%", label: "60+" }
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Gender Distribution Card */}
        <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Distribution of gender identities in the respondent pool
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center gap-1.5 mb-2">
            <Users className="w-3.5 h-3.5 text-gray-400" />
            <h3 className="text-xs font-semibold text-white">Gender Distribution</h3>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              { percent: "48%", label: "Male" },
              { percent: "51%", label: "Female" },
              { percent: "1%", label: "Other" }
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Location Distribution Card */}
        <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Geographical distribution of respondents by area type
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center gap-1.5 mb-2">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <h3 className="text-xs font-semibold text-white">Location Distribution</h3>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { percent: "42%", label: "Copenhagen, DK" },
              { percent: "35%", label: "London, UK" },
              { percent: "15%", label: "New York, US" },
              { percent: "8%", label: "Other" }
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Income Distribution Card */}
        <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Income range distribution across all respondents
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center gap-1.5 mb-2">
            <DollarSign className="w-3.5 h-3.5 text-gray-400" />
            <h3 className="text-xs font-semibold text-white">Income Distribution</h3>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { percent: "18%", label: "<30k" },
              { percent: "45%", label: "30k-75k" },
              { percent: "25%", label: "75k-120k" },
              { percent: "12%", label: ">120k" }
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Ancestry Distribution Card */}
        <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Distribution of ancestral backgrounds among respondents
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center gap-1.5 mb-2">
            <User className="w-3.5 h-3.5 text-gray-400" />
            <h3 className="text-xs font-semibold text-white">Ancestry Distribution</h3>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { percent: "32%", label: "European" },
              { percent: "28%", label: "Asian" },
              { percent: "22%", label: "African" },
              { percent: "18%", label: "Other" }
            ].map((item) => (
              <div key={item.label} className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                <span className="text-white text-xs font-bold">{item.percent}</span>
                <span className="text-gray-400 text-[9px] mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        {/* Map Card */}
        <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2 z-10" />
              </TooltipTrigger>
              <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                Geographic distribution of respondents across major cities
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          <div className="flex items-center gap-1.5 mb-4">
            <MapPin className="w-3.5 h-3.5 text-gray-400" />
            <h3 className="text-xs font-semibold text-white">Geographic Distribution</h3>
          </div>
          <DemographicsMap />
        </div>
      </div>
    </div>
  );
}
