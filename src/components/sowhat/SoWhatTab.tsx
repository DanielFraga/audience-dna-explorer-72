
import { FC } from 'react';
import { Info, CheckCircle, XCircle } from 'lucide-react';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

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
                <span className="text-gray-300 text-xs">Because premium audience segments (30-45 age group, 75k-120k income) have an unseen longing for prestige brands, then emphasize early planning that allows them to budget for premium products.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Because tech-savvy segments (predominantly from Copenhagen and London) demonstrate 40% higher interaction rates on innovative features, then focus on digital-first solutions that leverage cutting-edge functionality like TikTok and Netflix.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Because creative professionals with high curiosity drive 50% of early adoption rates, then highlight value propositions that emphasize both quality and longevity to capture their attention during the discovery phase.</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium text-red-500 mb-3">Don't</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Because eco-conscious users (particularly the European and Asian ancestry demographics) experience cognitive dissonance between their values and impulse purchases, then avoid pushing last-minute shopping that may trigger non-sustainable buying decisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Because 85% of users navigate seamlessly between mobile and desktop interfaces and prefer online holiday shopping, then don't focus solely on in-store experiences that limit cross-platform engagement.</span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-xs">Because younger demographics (16-29 age group) are influenced by peer recommendations for 70% of purchase decisions and use words like "Excited" and "Impressed", then don't emphasize price as the only deciding factor instead of social validation.</span>
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
              <h4 className="text-xs font-medium text-blue-400 mb-1">
                Drive Personalization for Tech-Savvy Users
              </h4>
              <p className="text-gray-400 text-xs">
                Hey, your audience loves technology and new features, so let's make each digital touchpoint uniquely tailored to their preferences and behaviors!
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700/50">
              <h4 className="text-xs font-medium text-purple-400 mb-1">
                Showcase Quality and Value for Premium Buyers
              </h4>
              <p className="text-gray-400 text-xs">
                Your customers care about quality but still want smart deals, so we should focus on showing them how premium features translate to long-term value!
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-md p-3 border border-gray-700/50">
              <h4 className="text-xs font-medium text-emerald-400 mb-1">
                Highlight Eco-Impact for Conscious Consumers
              </h4>
              <p className="text-gray-400 text-xs">
                With your audience being super passionate about sustainability, let's make sure they know about all the amazing eco-friendly initiatives we're working on!
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 p-6 text-center">
          <p className="text-gray-300 text-sm mb-4">Want to know more about this audience?</p>
          <Button 
            variant="default" 
            className="bg-indigo-600 hover:bg-indigo-700"
          >
            Chat to Audience
          </Button>
        </div>
      </div>
    </TooltipProvider>
  );
};
