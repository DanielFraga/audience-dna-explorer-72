
import { FC } from 'react';
import { Info, ChartBar, Users, MapPin, DollarSign, User } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import DemographicsMap from "../DemographicsMap";

export const DemographicsTab: FC = () => {
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';

  return (
    <div className="space-y-6 animate-slide-up">
      {/* Age Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
        <InteractiveTooltip 
          content={`Age distribution shows that ${searchTerm} is most popular among 30-45 year olds, who represent 35% of the audience.`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <ChartBar className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Age Distribution</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">28%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">16-29</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">35%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">30-45</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">22%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">45-60</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">15%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">60+</span>
          </div>
        </div>
      </div>

      {/* Gender Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
        <InteractiveTooltip 
          content={`Gender analysis reveals that ${searchTerm} slightly appeals more to females (51%) than males (48%).`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <Users className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Gender Distribution</h3>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">48%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">Male</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">51%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">Female</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">1%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
          </div>
        </div>
      </div>

      {/* Location Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[110px] relative">
        <InteractiveTooltip 
          content={`Geographic data suggests ${searchTerm} is most popular in Copenhagen (42%), followed by London (35%).`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Location Distribution</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">42%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">Copenhagen, DK</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">35%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">London, UK</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">15%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">New York, US</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">8%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
          </div>
        </div>
      </div>

      {/* Income Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
        <InteractiveTooltip 
          content={`Income analysis shows ${searchTerm} resonates most with middle-income groups (30k-75k), comprising 45% of respondents.`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <DollarSign className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Income Distribution</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">18%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">&lt;30k</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">45%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">30k-75k</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">25%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">75k-120k</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">12%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">&gt;120k</span>
          </div>
        </div>
      </div>

      {/* Ancestry Distribution Card */}
      <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
        <InteractiveTooltip 
          content={`Ancestry data shows ${searchTerm} is most popular among Europeans (32%) and Asians (28%).`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-2">
          <User className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Ancestry Distribution</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">32%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">European</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">28%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">Asian</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">22%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">African</span>
          </div>
          <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
            <span className="text-white text-xs font-bold">18%</span>
            <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
          </div>
        </div>
      </div>
      
      {/* Map Card */}
      <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative h-[280px]">
        <InteractiveTooltip 
          content={`Geographic heatmap visualizes where ${searchTerm} has the most engagement, with hotspots in Europe and North America.`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2 z-10">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        <div className="flex items-center gap-1.5 mb-4">
          <MapPin className="w-3.5 h-3.5 text-gray-400" />
          <h3 className="text-xs font-semibold text-white">Geographic Distribution</h3>
        </div>
        <DemographicsMap />
      </div>
    </div>
  );
};
