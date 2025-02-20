
import { FC } from 'react';
import { Info, CheckCircle, XCircle } from 'lucide-react';
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
              Guidelines for effective audience communication
            </TooltipContent>
          </Tooltip>
          <h3 className="text-sm font-medium text-white mb-4">Communication Guidelines</h3>
          
          {/* Do Section */}
          <div className="mb-6">
            <h4 className="text-xs font-medium text-green-500 mb-3">Do</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Emphasize early planning and organization for holiday shopping</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Focus on digital-first solutions and online convenience</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Highlight value propositions that combine quality with smart spending</span>
              </li>
            </ul>
          </div>

          {/* Don't Section */}
          <div>
            <h4 className="text-xs font-medium text-red-500 mb-3">Don't</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Push last-minute shopping or rushed decision making</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Focus solely on in-store experiences</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Emphasize price as the only deciding factor</span>
              </li>
            </ul>
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
