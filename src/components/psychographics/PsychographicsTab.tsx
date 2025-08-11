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
  { subject: 'Lf', A: 85, fullName: 'Loyalty-first', color: '#3B82F6' },
  { subject: 'Sm', A: 72, fullName: 'Suspicious of mainstream', color: '#F97316' },
  { subject: 'Ed', A: 78, fullName: 'Emotion-driven', color: '#3B82F6' },
  { subject: 'Sb', A: 65, fullName: 'Social bettors', color: '#F97316' },
  { subject: 'Rm', A: 69, fullName: 'Risk-maximizers', color: '#10B981' },
  { subject: 'Ma', A: 58, fullName: 'Methodical analyzers', color: '#10B981' },
];

const psychographicGroups = [
  {
    id: 'igaming',
    name: 'iGaming Traits',
    items: ['Lf', 'Sm', 'Ed', 'Sb', 'Rm', 'Ma']
  }
];

const fullPsychographicData = psychographicData;

const colorMap = {
  'Lf': 'bg-[#3B82F6] text-white',
  'Sm': 'bg-[#F97316] text-white',
  'Ed': 'bg-[#3B82F6] text-white',
  'Sb': 'bg-[#F97316] text-white',
  'Rm': 'bg-[#10B981] text-white',
  'Ma': 'bg-[#10B981] text-white',
} as const;

interface PsychographicDescription {
  interpretation: string[];
}

const psychographicDescriptions: Record<string, PsychographicDescription> = {
  Lf: {
    interpretation: [
      "Definition: Bets align with personal/team identity.",
      "Creative Tip: \"Stand with your team — make it count tonight.\"",
      "Targeting Cue: Boost ads 1–2h before rivalry matches."
    ]
  },
  Sm: {
    interpretation: [
      "Definition: Prefers niche or alternative betting sources.",
      "Creative Tip: \"Where smart money really goes.\"",
      "Targeting Cue: Avoid mass media placements; use specialized forums."
    ]
  },
  Ed: {
    interpretation: [
      "Definition: Betting decisions driven by feelings and excitement.",
      "Creative Tip: \"Feel the rush — this is your moment.\"",
      "Targeting Cue: Target high-emotion game moments and underdog scenarios."
    ]
  },
  Sb: {
    interpretation: [
      "Definition: Bets influenced by friend groups and social validation.",
      "Creative Tip: \"Your crew is counting on this one.\"",
      "Targeting Cue: Amplify during group chat peaks and social events."
    ]
  },
  Rm: {
    interpretation: [
      "Definition: Seeks high-risk, high-reward betting opportunities.",
      "Creative Tip: \"Go big or go home — the jackpot awaits.\"",
      "Targeting Cue: Promote high-payout parlays and long-shot bets."
    ]
  },
  Ma: {
    interpretation: [
      "Definition: Uses data and analysis before placing bets.",
      "Creative Tip: \"The numbers don't lie — here's your edge.\"",
      "Targeting Cue: Highlight stats, trends, and analytical insights."
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

export const PsychographicsTab: FC<{ isRadarOnly?: boolean; isTraitsOnly?: boolean }> = ({ isRadarOnly = false, isTraitsOnly = false }) => {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
  const [activePoint, setActivePoint] = useState<string | null>(null);
  const [expandedGroups, setExpandedGroups] = useState<string[]>(['igaming']);
  const [selectedGroup, setSelectedGroup] = useState<string>('igaming');
  const statsRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const searchTerm = sessionStorage.getItem('searchTerm') || 'this topic';
  const isMobile = useIsMobile();

  const selectedGroupData = getGroupData('igaming');

  // Radar only view for desktop left column
  if (isRadarOnly) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-1.5 mb-4">
          <Radar className="w-4 h-4 text-gray-400" />
          <Label className="text-base font-semibold text-white">Psychographics</Label>
        </div>
        
        <InteractiveTooltip 
          content={`This radar chart visualizes how audiences interested in ${searchTerm} score across 6 iGaming-specific personality traits.`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        
        <div className="space-y-3 mb-4">
          <div className="px-1 space-y-2 text-gray-300 text-sm">
            <p>Your audience shows high loyalty to identity-driven bets, strong emotional triggers around underdog wins, and selective trust in betting sources. Social engagement spikes during friend group chats, with notable segments split between risk-maximizers and methodical analyzers.</p>
          </div>
        </div>
        
        <div className="relative flex justify-center items-center">
          <div className="w-full">
            <PsychographicRadar data={selectedGroupData} />
          </div>
        </div>
        
        <div className="text-center mt-3">
          <p className="text-[10px] text-gray-500 italic">Based on 1,248 bettor responses (SWE + EU, July 2025)</p>
        </div>
      </div>
    );
  }

  // Traits only view for desktop right column
  if (isTraitsOnly) {
    return (
      <div className="space-y-4">
        <div className="flex items-center gap-1.5 mb-4">
          <ChartBar className="w-4 h-4 text-gray-400" />
          <h3 className="text-base font-semibold text-white">Psychographics – iGaming Traits</h3>
        </div>

        <div className="space-y-3 text-sm max-h-[460px] overflow-y-auto pr-1">
          <div className="space-y-2 p-1.5">
            {psychographicData.map((point) => (
              <div key={point.subject} className="border border-gray-800 rounded-lg">
                <div className={`flex justify-between items-center p-3 rounded-lg bg-gray-800/50`}>
                  <div className="flex items-center gap-3">
                    <InteractiveTooltip 
                      content={`${point.subject} stands for ${point.fullName}`}
                      searchTerm={searchTerm}
                    >
                      <span 
                        className="w-3 h-3 rounded-full cursor-help" 
                        style={{ backgroundColor: point.color }}
                      />
                    </InteractiveTooltip>
                    <span className="text-gray-200 font-medium text-base">
                      {point.fullName}
                    </span>
                  </div>
                  <span className="font-semibold text-white text-base">
                    {point.A}
                  </span>
                </div>
                
                {/* Always expanded content */}
                {psychographicDescriptions[point.subject] && (
                  <div className="px-3 pb-3 space-y-2 border-t border-gray-700/50 pt-2">
                    <div className="space-y-2">
                      {psychographicDescriptions[point.subject].interpretation.map((desc, i) => (
                        <p key={i} className="text-gray-400 text-sm leading-relaxed pl-3 border-l-2 border-gray-700">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Original mobile layout

  return (
    <div className="space-y-6 animate-slide-up">
      <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative w-full">
        <div className="flex items-center gap-1.5 mb-4">
          <Radar className="w-3.5 h-3.5 text-gray-400" />
          <Label className="text-xs font-semibold text-white">Psychographics</Label>
        </div>
        
              <InteractiveTooltip 
                content={`This radar chart visualizes how audiences interested in ${searchTerm} score across 6 iGaming-specific personality traits.`}
          searchTerm={searchTerm}
        >
          <button className="absolute top-2 right-2">
            <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
          </button>
        </InteractiveTooltip>
        
              <div className="space-y-3 mb-4">
                <div className="px-1 space-y-2 text-gray-300 text-xs">
                  <p>Your audience shows high loyalty to identity-driven bets, strong emotional triggers around underdog wins, and selective trust in betting sources. Social engagement spikes during friend group chats, with notable segments split between risk-maximizers and methodical analyzers.</p>
                </div>
              </div>
        
                <div className="relative flex justify-center items-center">
                  <div className={isMobile ? "w-[90%] mx-auto" : "w-full"}>
                    <PsychographicRadar data={selectedGroupData} />
                  </div>
                </div>
                
                <div className="text-center mt-3">
                  <p className="text-[10px] text-gray-500 italic">Based on 1,248 bettor responses (SWE + EU, July 2025)</p>
                </div>
      </div>

      <Carousel className="w-full relative">
        <CarouselContent className="h-full">
          <CarouselItem className="flex items-center justify-center">
            <div ref={statsRef} className="h-full w-full">
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
              <InteractiveTooltip 
                content={`Detailed breakdown of iGaming personality traits for audiences interested in ${searchTerm}, with marketing insights and targeting cues.`}
                  searchTerm={searchTerm}
                >
                  <button className="absolute top-2 right-2">
                    <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                  </button>
                </InteractiveTooltip>
                
              <div className="flex items-center gap-1.5 mb-4">
                <ChartBar className="w-3.5 h-3.5 text-gray-400" />
                <h3 className="text-xs font-semibold text-white">Psychographics – iGaming Traits</h3>
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
                            <span className={`w-2 h-2 rounded-full`} style={{ backgroundColor: psychographicData.find(p => p.subject === point.subject)?.color || '#6B7280' }} />
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
                                  <p key={i} className="text-gray-400 text-[10px] leading-relaxed pl-3 border-l border-gray-800">
                                    {desc}
                                  </p>
                                ))}
                              </div>
                            </div>
                          ) : (
                            <div className="px-2 py-2">
                              <p className="text-gray-400 text-[10px] leading-relaxed">
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
