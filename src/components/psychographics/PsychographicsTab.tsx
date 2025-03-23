
import { FC, useState, useRef } from 'react';
import { Info, ChartBar, Radar, ChevronDown, ChevronRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { InteractiveTooltip } from "@/components/ui/interactive-tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import PsychographicRadar from "../PsychographicRadar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

// Original psychographic data - Only keeping Big5
const psychographicData = [
  { subject: 'Op', A: 80, fullName: 'Openness' },
  { subject: 'Co', A: 65, fullName: 'Conscientiousness' },
  { subject: 'Ex', A: 45, fullName: 'Extraversion' },
  { subject: 'Ag', A: 70, fullName: 'Agreeableness' },
  { subject: 'Ne', A: 30, fullName: 'Neuroticism' },
];

// Create group definitions - Only keeping Big5
const psychographicGroups = [
  {
    id: 'big5',
    name: 'BIG 5',
    items: ['Op', 'Co', 'Ex', 'Ag', 'Ne']
  }
];

// Full dataset - Only Big5
const fullPsychographicData = psychographicData;

const colorMap = {
  'Op': 'bg-[#0EA5E9] text-white',
  'Co': 'bg-[#1EAEDB] text-white',
  'Ex': 'bg-[#33C3F0] text-white',
  'Ag': 'bg-[#0FA0CE] text-white',
  'Ne': 'bg-[#ea384c] text-white',
} as const;

interface PsychographicDescription {
  empirical: string;
  interpretation: string[];
}

const psychographicDescriptions: Record<string, PsychographicDescription> = {
  Op: {
    empirical: "72% of respondents with high openness scores show significantly higher engagement with novel experiences and creative content.",
    interpretation: [
      "According to the Five Factor Model, high openness indicates heightened curiosity and receptivity to new ideas.",
      "Research by McCrae suggests these individuals prioritize exploration over familiarity, seeking intellectual stimulation.",
      "From a neuroscience perspective, this trait correlates with increased activity in prefrontal regions associated with cognitive flexibility."
    ]
  },
  Co: {
    empirical: "65% of conscientious respondents demonstrate stronger brand loyalty and 43% higher completion rates for loyalty programs.",
    interpretation: [
      "The trait-based theory of personality suggests conscientious individuals value order and achievement through deliberate planning.",
      "Costa & McCrae's research indicates these individuals emphasize reliability and are goal-directed in their approach to tasks.",
      "From a behavioral perspective, this manifests as preference for predictable systems and resistance to impulsive decision-making."
    ]
  },
  Ex: {
    empirical: "53% of extraverted users engage with social media advertising at twice the rate of introverted users.",
    interpretation: [
      "Eysenck's theory suggests extraversion stems from lower baseline arousal levels, driving these individuals to seek external stimulation.",
      "Social psychology research shows extraverts gain energy through interpersonal interaction and social validation.",
      "Consumer behavior studies indicate these individuals are more receptive to group-based marketing approaches."
    ]
  },
  Ag: {
    empirical: "68% of agreeable respondents prioritize ethical business practices and corporate social responsibility in purchasing decisions.",
    interpretation: [
      "The prosocial theory of agreeableness suggests these individuals place high value on harmonious relationships and social reciprocity.",
      "Research by Graziano indicates agreeable people emphasize cooperation over competition and are more susceptible to conformity pressures.",
      "From a consumer perspective, this translates to higher responsiveness to community-oriented and ethical messaging."
    ]
  },
  Ne: {
    empirical: "34% of respondents with high neuroticism scores show increased susceptibility to scarcity marketing and FOMO-based advertising.",
    interpretation: [
      "Gray's Reinforcement Sensitivity Theory suggests neurotic individuals have heightened behavioral inhibition systems, increasing vigilance to potential threats.",
      "Neurotic tendencies correlate with emotional reactivity and volatility in decision-making processes.",
      "Studies show these individuals often engage in anticipatory problem-solving, leading to risk-averse behaviors in uncertain situations."
    ]
  }
};

// Function to find which group a trait belongs to
const findGroupForTrait = (trait: string): string | null => {
  for (const group of psychographicGroups) {
    if (group.items.includes(trait)) {
      return group.id;
    }
  }
  return null;
};

// Function to get data for a specific group
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

  // Filter data based on selected group - always Big5
  const selectedGroupData = getGroupData('big5');

  return (
    <div className="space-y-6 animate-slide-up">
      <Carousel className="w-full relative">
        <CarouselContent className="h-full">
          {/* Cobweb Graph Card - First slide */}
          <CarouselItem className="flex items-center justify-center">
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative w-full">
              <InteractiveTooltip 
                content={`This radar chart visualizes how audiences interested in ${searchTerm} score across the Big 5 personality traits.`}
                searchTerm={searchTerm}
              >
                <button className="absolute top-2 right-2">
                  <Info className="w-3.5 h-3.5 text-gray-400 cursor-help" />
                </button>
              </InteractiveTooltip>
              
              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Radar className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">
                      BIG 5 Profile
                    </h3>
                  </div>
                  
                  <div className="text-xs text-gray-400">
                    5 traits
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {[
                    { text: "Adventurous", color: "bg-[#0EA5E9] text-white" },
                    { text: "Creative", color: "bg-[#ea384c] text-white" },
                    { text: "Analytical", color: "bg-[#7E69AB] text-white" },
                    { text: "Empathetic", color: "bg-[#F97316] text-white" },
                    { text: "Disciplined", color: "bg-[#33C3F0] text-white" },
                    { text: "Curious", color: "bg-[#9b87f5] text-white" },
                    { text: "Collaborative", color: "bg-[#0FA0CE] text-white" },
                  ].map((chip) => (
                    <span
                      key={chip.text}
                      className={`px-2 py-0.5 text-[10px] rounded-full ${chip.color}`}
                    >
                      {chip.text}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <PsychographicRadar data={selectedGroupData} />
              </div>
            </div>
          </CarouselItem>
          
          {/* Stats Card - Second slide */}
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
                  <h3 className="text-xs font-semibold text-white">Stats</h3>
                </div>

                <div className="space-y-2 text-[11px] max-h-[460px] overflow-y-auto pr-1">
                  <div className="border border-gray-800 rounded-md overflow-hidden">
                    <button 
                      className="w-full flex items-center justify-between p-2 bg-gray-700 text-white"
                    >
                      <span className="font-medium text-white">
                        BIG 5
                      </span>
                      <ChevronDown className="w-4 h-4 text-gray-400" />
                    </button>
                    
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
                                <p className="text-gray-300 text-[10px] font-medium leading-relaxed pl-3 border-l border-gray-700 mb-2">
                                  {psychographicDescriptions[point.subject].empirical}
                                </p>
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
