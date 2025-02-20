
import { ReactNode } from "react";
import { Info } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";

type DemographicCardProps = {
  title: string;
  icon: ReactNode;
  tooltip: string;
  children: ReactNode;
  className?: string;
};

export function DemographicCard({ title, icon, tooltip, children, className = "" }: DemographicCardProps) {
  return (
    <div className={`p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative ${className}`}>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
          </TooltipTrigger>
          <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
            {tooltip}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="flex items-center gap-1.5 mb-2">
        {icon}
        <h3 className="text-xs font-semibold text-white">{title}</h3>
      </div>
      {children}
    </div>
  );
}
