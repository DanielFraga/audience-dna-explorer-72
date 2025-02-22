
import { FC } from 'react';
import { Info, CheckCircle, XCircle } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

export const SoWhatTab: FC = () => {
  return (
    <TooltipProvider>
      <div className="flex flex-col gap-4 animate-slide-up">
        {/* Communication Guidelines card */}
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

        {/* Action Items card */}
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
          
          <div className="space-y-4">
            <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700/50">
              <h4 className="text-xs font-medium text-blue-400 mb-1">Develop Targeted Email Campaigns</h4>
              <p className="text-gray-400 text-xs">
                Create segmented email campaigns for each identified audience group, focusing on their specific interests and behaviors.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700/50">
              <h4 className="text-xs font-medium text-purple-400 mb-1">Optimize Digital Touchpoints</h4>
              <p className="text-gray-400 text-xs">
                Enhance website and mobile app experiences to better serve the digital-first preferences of the target audience.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700/50">
              <h4 className="text-xs font-medium text-emerald-400 mb-1">Launch Value-Based Content Strategy</h4>
              <p className="text-gray-400 text-xs">
                Develop content that emphasizes the intersection of quality and smart spending across all marketing channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

