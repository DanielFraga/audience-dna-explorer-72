
import { FC } from 'react';
import { Info } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const SoWhatTab: FC = () => {
  return (
    <div className="flex flex-col gap-4 animate-slide-up">
      {/* Top row with two cards */}
      <div className="grid grid-cols-2 gap-4">
        {/* Left Card */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 relative min-h-[300px]">
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
              Strategic recommendations based on audience analysis
            </TooltipContent>
          </Tooltip>
          <h3 className="text-sm font-medium text-white mb-4">Strategic Recommendations</h3>
          <div className="text-gray-400 text-xs">
            Content for left card coming soon...
          </div>
        </div>

        {/* Right Card */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 relative min-h-[300px]">
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
              Key opportunities identified from the analysis
            </TooltipContent>
          </Tooltip>
          <h3 className="text-sm font-medium text-white mb-4">Key Opportunities</h3>
          <div className="text-gray-400 text-xs">
            Content for right card coming soon...
          </div>
        </div>
      </div>

      {/* Bottom card spanning full width */}
      <div className="bg-gray-900 rounded-lg border border-gray-800 p-4 relative min-h-[200px]">
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
          </TooltipTrigger>
          <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
            Action items and next steps based on the insights
          </TooltipContent>
        </Tooltip>
        <h3 className="text-sm font-medium text-white mb-4">Action Items</h3>
        <div className="text-gray-400 text-xs">
          Content for bottom card coming soon...
        </div>
      </div>
    </div>
  );
};
