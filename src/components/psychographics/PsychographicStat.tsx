
import { ChevronDown } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { PsychographicPoint, ColorScheme } from "./types";

type PsychographicStatProps = {
  point: PsychographicPoint;
  colorMap: ColorScheme;
  descriptions: string[];
  isHovered: boolean;
  onHover: (subject: string | null) => void;
};

export function PsychographicStat({
  point,
  colorMap,
  descriptions,
  isHovered,
  onHover
}: PsychographicStatProps) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="w-full">
        <div 
          className={`flex justify-between items-center transition-colors duration-150 hover:bg-gray-800 rounded px-2 py-1 cursor-pointer group ${isHovered ? 'bg-gray-800' : ''}`}
          onMouseEnter={() => onHover(point.subject)}
          onMouseLeave={() => onHover(null)}
        >
          <div className="flex items-center gap-1.5">
            <span className={`w-2 h-2 rounded-full ${colorMap[point.subject].split(' ')[0]}`} />
            <span className="text-gray-400">{point.fullName}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-300">{point.A}</span>
            <ChevronDown className="w-3 h-3 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="px-2 py-2 space-y-1">
          {descriptions.map((desc, i) => (
            <p key={i} className="text-gray-500 text-[10px] leading-relaxed pl-3 border-l border-gray-800">
              {desc}
            </p>
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
