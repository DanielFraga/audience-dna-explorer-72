import { FC, useState, useRef } from 'react';
import { Info, ChartBar, Radar, ChevronDown } from 'lucide-react';
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PsychographicRadar from "../PsychographicRadar";
import { useIsMobile } from "@/hooks/use-mobile";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Label } from "@/components/ui/label";

const psychographicData = [
  { subject: 'Op', A: 80, fullName: 'Openness' },
  { subject: 'Co', A: 65, fullName: 'Conscientiousness' },
  { subject: 'Ex', A: 45, fullName: 'Extraversion' },
  { subject: 'Ag', A: 70, fullName: 'Agreeableness' },
  { subject: 'Ne', A: 30, fullName: 'Neuroticism' },
];

const psychographicGroups = [
  {
    id: 'big5',
    name: 'BIG 5',
    items: ['Op', 'Co', 'Ex', 'Ag', 'Ne']
  }
];

const fullPsychographicData = psychographicData;

const colorMap = {
  'Op': 'bg-[#0EA5E9] text-white',
  'Co': 'bg-[#1EAEDB] text-white',
  'Ex': 'bg-[#33C3F0] text-white',
  'Ag': 'bg-[#0FA0CE] text-white',
  'Ne': 'bg-[#ea384c] text-white',
} as const;

interface PsychographicDescription {
  interpretation: string[];
}

const psychographicDescriptions: Record<string, PsychographicDescription> = {
  Op: {
    interpretation: [
      "At 80, this is a high value on the 0-100 scale, indicating a strong tendency towards this trait.",
      "Scores above 75 on the 0-100 scale represent the top quartile for this dimension.",
      "This score indicates that this trait is a defining characteristic of the audience."
    ]
  },
  Co: {
    interpretation: [
      "At 65, this is moderately high on the 0-100 scale, above the midpoint of 50.",
      "Scores between 60-75 on the 0-100 scale indicate an above-average presence of this trait.",
      "This score suggests this trait is notable but not dominant in the audience profile."
    ]
  },
  Ex: {
    interpretation: [
      "At 45, this is slightly below the midpoint on the 0-100 scale.",
      "Scores between 40-50 on the 0-100 scale indicate a moderate presence of this trait.",
      "This score suggests a balanced distribution of this trait within the audience."
    ]
  },
  Ag: {
    interpretation: [
      "At 70, this is relatively high on the 0-100 scale.",
      "Scores between 65-80 on the 0-100 scale represent a strong presence of this trait.",
      "This score indicates this trait is a significant characteristic in the audience profile."
    ]
  },
  Ne: {
    interpretation: [
      "At 30, this is relatively low on the 0-100 scale.",
      "Scores below 40 on the 0-100 scale indicate a minimal presence of this trait.",
      "This score suggests this trait is less prominent in the audience profile."
    ]
  }
};

const findGroupForTrait = (trait: string): string | null => {
  for (const group of psychographicGroups) {
    if (group.items.includes(trait)) {
      return group.id;
    }
  }
  return null;
};

const getGroupData = (groupId: string): any[] => {
  const group = psychographicGroups.find(g => g.id === groupId);
  if (!group) return [];
  
  return fullPsychographicData.filter(item => 
    group.items.includes(item.subject)
  );
};

export const PsychographicsTab: FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
  const [activePoint, setActivePoint] = useState<string | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['big5']);
  const [selectedGroup, setSelectedGroup] = useState<string>('big5');
  const statsRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';
  const isMobile = useIsMobile();

  const selectedGroupData = getGroupData('big5');

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative w-full">
        <div className="flex items-center gap-1.5 mb-4">
          <Radar className="w-3.5 h-3.5 text-gray-400" />
          <Label className="text-xs font-semibold text-white">Psychographics</Label>
        </div>
        
        <InteractiveTooltip 
          content={`This radar chart visualizes how audiences interested in ${searchTerm} score across the Big 5 personality traits.`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        
        <div className="space-y-3 mb-4">
          <div className="px-1 space-y-2 text-gray-300 text-xs">
            <p>People interested in holiday topics score high in openness and agreeableness, with moderate conscientiousness.</p>
            <p>They show below average neuroticism and moderate extraversion, suggesting they enjoy new experiences while valuing harmony.</p>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          <div className={isMobile ? "w-[90%] mx-auto" : "w-full"}>
            <PsychographicRadar data={selectedGroupData} />
          </div>
        </div>
      </div>

      <Carousel className="w-full relative">
        <CarouselContent className="h-full">
          <CarouselItem className="flex items-center justify-center">
            <div ref={statsRef} className="h-full w-full">
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
                <InteractiveTooltip 
                  content={`Detailed breakdown of personality traits for audiences interested in ${searchTerm}, with empirical data and interpretations.`}
                  searchTerm={searchTerm}
                >
                  <button className="absolute top-2 right-2">
                    <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                  </button>
                </InteractiveTooltip>
                
                <div className="flex items-center gap-1.5 mb-4">
                  <ChartBar className="w-3.5 h-3.5 text-gray-400" />
                  <h3 className="text-xs font-semibold text-white">Psychographics - Description</h3>
                </div>

                <div className="space-y-2 text-[11px] max-h-[460px] overflow-y-auto pr-1">
                  <div className="space-y-1 p-1.5">
                    {psychographicData.map((point) => (
                      <Collapsible key={point.subject}>
                        <CollapsibleTrigger className="w-full">
                          <div 
                            ref={el => itemRefs.current[point.subject] = el}
                            className={`flex justify-between items-center transition-colors duration-150 rounded px-2 py-1 cursor-pointer group 
                              ${activePoint === point.subject ? 'bg-gray-700' : hoveredPoint === point.subject ? 'bg-gray-800' : ''}
                              ${activePoint === point.subject ? 'border-l-2 border-blue-500' : ''}
                            `}
                            onMouseEnter={() => setHoveredPoint(point.subject)}
                            onMouseLeave={() => setHoveredPoint(null)}
                            onClick={() => setActivePoint(point.subject)}
                          >
                            <div className="flex items-center gap-1.5">
                              <span className={`w-2 h-2 rounded-full ${colorMap[point.subject as keyof typeof colorMap]?.split(' ')[0] || 'bg-gray-500'}`} />
                              <span className={`${activePoint === point.subject ? 'text-white' : 'text-gray-400'}`}>
                                {point.fullName}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className={`font-medium ${activePoint === point.subject ? 'text-white' : 'text-gray-300'}`}>
                                {point.A}
                              </span>
                              <ChevronDown className="w-3 h-3 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                            </div>
                          </div>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          {psychographicDescriptions[point.subject] ? (
                            <div className="px-2 py-2 space-y-1">
                              <div className="space-y-1.5">
                                {psychographicDescriptions[point.subject].interpretation.map((desc, i) => (
                                  <p key={i} className="text-gray-500 text-[10px] leading-relaxed pl-3 border-l border-gray-800">
                                    {desc}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="px-2 py-2">
                              <p className="text-gray-500 text-[10px] leading-relaxed">
                                No detailed information available.
                              </p>
                            </div>
                          )}
                        </CollapsibleContent>
                      </Collapsible>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        
        <div className="absolute z-10 flex justify-center w-full bottom-2">
          <div className="flex gap-2 items-center">
            <CarouselPrevious className="relative left-0 h-7 w-7 border-gray-700 bg-gray-800/70 hover:bg-gray-700" />
            <CarouselNext className="relative right-0 h-7 w-7 border-gray-700 bg-gray-800/70 hover:bg-gray-700" />
          </div>
        </div>
      </Carousel>
    </div>
  );
};
