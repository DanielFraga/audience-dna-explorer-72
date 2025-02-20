import { FC, useState } from 'react';
import { Info, ChartBar, Radar, ChevronDown } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Radar as RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, RadarChart as RechartsRadarChart } from 'recharts';

const psychographicData = [
  { subject: 'Op', A: 80, fullName: 'Openness' },
  { subject: 'Co', A: 65, fullName: 'Conscientiousness' },
  { subject: 'Ex', A: 45, fullName: 'Extraversion' },
  { subject: 'Ag', A: 70, fullName: 'Agreeableness' },
  { subject: 'Ne', A: 30, fullName: 'Neuroticism' },
  { subject: 'RT', A: 85, fullName: 'Risk Tolerance' },
  { subject: 'In', A: 75, fullName: 'Innovation' },
  { subject: 'PS', A: 40, fullName: 'Price Sensitivity' },
  { subject: 'BL', A: 60, fullName: 'Brand Loyalty' },
  { subject: 'SI', A: 72, fullName: 'Social Impact' },
  { subject: 'TA', A: 88, fullName: 'Tech Adoption' },
  { subject: 'QF', A: 78, fullName: 'Quality Focus' },
  { subject: 'Su', A: 65, fullName: 'Sustainability' },
  { subject: 'SS', A: 45, fullName: 'Status Seeking' },
  { subject: 'Im', A: 35, fullName: 'Impulsiveness' },
  { subject: 'Tr', A: 25, fullName: 'Traditionalism' },
];

const colorMap = {
  'Op': 'bg-[#0EA5E9] text-white',
  'Co': 'bg-[#1EAEDB] text-white',
  'Ex': 'bg-[#33C3F0] text-white',
  'Ag': 'bg-[#0FA0CE] text-white',
  'Ne': 'bg-[#ea384c] text-white',
  'RT': 'bg-[#F2FCE2] text-gray-700',
  'In': 'bg-[#0EA5E9] text-white',
  'PS': 'bg-[#ea384c] text-white',
  'BL': 'bg-[#F2FCE2] text-gray-700',
  'SI': 'bg-[#0EA5E9] text-white',
  'TA': 'bg-[#1EAEDB] text-white',
  'QF': 'bg-[#F2FCE2] text-gray-700',
  'Su': 'bg-[#33C3F0] text-white',
  'SS': 'bg-[#ea384c] text-white',
  'Im': 'bg-[#0FA0CE] text-white',
  'Tr': 'bg-[#F2FCE2] text-gray-700',
} as const;

const psychographicDescriptions: Record<string, string[]> = {
  Op: [
    "Willingness to embrace new experiences and ideas",
    "Intellectual curiosity and creativity",
    "Appreciation for art, emotion, and unusual ideas",
    "Adventure seeking and variety preference"
  ],
  Co: [
    "Tendency to be organized and dependable",
    "Self-discipline and aim for achievement",
    "Planned rather than spontaneous behavior",
    "Detail-oriented approach to tasks"
  ],
  Ex: [
    "Sociability, talkativeness, and assertiveness",
    "Enjoyment of social gatherings and interactions",
    "Expressiveness and enthusiasm",
    "Preference for stimulation and excitement"
  ],
  Ag: [
    "Compassion and cooperativeness",
    "Empathy and concern for others",
    "Trusting and helpful nature",
    "Desire for social harmony"
  ],
  Ne: [
    "Tendency to experience negative emotions",
    "Anxiety, sadness, and moodiness",
    "Emotional instability and reactivity",
    "Vulnerability to stress"
  ],
  RT: [
    "Willingness to take chances and try new things",
    "Comfort with uncertainty and ambiguity",
    "Desire for thrilling and stimulating experiences",
    "Openness to potential losses or negative outcomes"
  ],
  In: [
    "Aptitude for generating novel ideas",
    "Creative problem-solving skills",
    "Visionary thinking and imagination",
    "Ability to challenge conventional approaches"
  ],
  PS: [
    "Sensitivity to the cost of products/services",
    "Tendency to seek discounts and promotions",
    "Value-driven purchasing decisions",
    "Careful budget management"
  ],
  BL: [
    "Commitment to specific brands",
    "Repetitive purchasing behavior",
    "Emotional connection to brands",
    "Resistance to switching brands"
  ],
  SI: [
    "Concern for the well-being of society",
    "Desire to make a positive impact",
    "Support for ethical and sustainable practices",
    "Engagement in charitable activities"
  ],
  TA: [
    "Enthusiasm for adopting new technologies",
    "Comfort with digital devices and platforms",
    "Willingness to experiment with tech innovations",
    "Desire to stay up-to-date with tech trends"
  ],
  QF: [
    "Emphasis on product/service excellence",
    "Attention to detail and craftsmanship",
    "Desire for durability and reliability",
    "Willingness to pay more for superior quality"
  ],
  Su: [
    "Concern for environmental protection",
    "Support for eco-friendly products/services",
    "Desire to reduce carbon footprint",
    "Engagement in conservation efforts"
  ],
  SS: [
    "Desire to impress others with possessions",
    "Focus on luxury brands and high-end products",
    "Concern for social image and status",
    "Willingness to spend more for prestige"
  ],
  Im: [
    "Tendency to act on sudden urges",
    "Spontaneous decision-making",
    "Preference for immediate gratification",
    "Difficulty delaying satisfaction"
  ],
  Tr: [
    "Respect for established customs",
    "Preference for familiar routines",
    "Resistance to change and innovation",
    "Emphasis on heritage and history"
  ],
};

export const PsychographicsTab: FC = () => {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 gap-6 animate-slide-up">
      {/* Left Stats Card */}
      <div>
        <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative h-full">
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
              Detailed breakdown of all psychographic variables
            </TooltipContent>
          </Tooltip>
          
          <div className="flex items-center gap-1.5 mb-4">
            <ChartBar className="w-3.5 h-3.5 text-gray-400" />
            <h3 className="text-xs font-semibold text-white">Stats</h3>
          </div>

          <div className="grid grid-cols-2 gap-4 text-[11px]">
            <div className="space-y-1.5">
              {psychographicData.slice(0, Math.ceil(psychographicData.length / 2)).map((point) => (
                <Collapsible key={point.subject}>
                  <CollapsibleTrigger className="w-full">
                    <div 
                      className={`flex justify-between items-center transition-colors duration-150 hover:bg-gray-800 rounded px-2 py-1 cursor-pointer group ${hoveredPoint === point.subject ? 'bg-gray-800' : ''}`}
                      onMouseEnter={() => setHoveredPoint(point.subject)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${colorMap[point.subject as keyof typeof colorMap].split(' ')[0]}`} />
                        <span className="text-gray-400">
                          {point.fullName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-300">
                          {point.A}
                        </span>
                        <ChevronDown className="w-3 h-3 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-2 py-2 space-y-1">
                      {psychographicDescriptions[point.subject].map((desc, i) => (
                        <p key={i} className="text-gray-500 text-[10px] leading-relaxed pl-3 border-l border-gray-800">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
            <div className="space-y-1.5">
              {psychographicData.slice(Math.ceil(psychographicData.length / 2)).map((point) => (
                <Collapsible key={point.subject}>
                  <CollapsibleTrigger className="w-full">
                    <div 
                      className={`flex justify-between items-center transition-colors duration-150 hover:bg-gray-800 rounded px-2 py-1 cursor-pointer group ${hoveredPoint === point.subject ? 'bg-gray-800' : ''}`}
                      onMouseEnter={() => setHoveredPoint(point.subject)}
                      onMouseLeave={() => setHoveredPoint(null)}
                    >
                      <div className="flex items-center gap-1.5">
                        <span className={`w-2 h-2 rounded-full ${colorMap[point.subject as keyof typeof colorMap].split(' ')[0]}`} />
                        <span className="text-gray-400">
                          {point.fullName}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-300">
                          {point.A}
                        </span>
                        <ChevronDown className="w-3 h-3 text-gray-500 transition-transform group-data-[state=open]:rotate-180" />
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="px-2 py-2 space-y-1">
                      {psychographicDescriptions[point.subject].map((desc, i) => (
                        <p key={i} className="text-gray-500 text-[10px] leading-relaxed pl-3 border-l border-gray-800">
                          {desc}
                        </p>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Cobweb Graph Card */}
      <div>
        <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
          <Tooltip>
            <TooltipTrigger asChild>
              <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
              Visual representation of key psychographic traits and their intensities
            </TooltipContent>
          </Tooltip>
          
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-1.5">
              <Radar className="w-3.5 h-3.5 text-gray-400" />
              <h3 className="text-xs font-semibold text-white">Psychographics</h3>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {[
                { text: "Adventurous", color: "bg-[#0EA5E9] text-white" },
                { text: "Creative", color: "bg-[#ea384c] text-white" },
                { text: "Tech-savvy", color: "bg-[#F2FCE2] text-gray-700" },
                { text: "Early Adopter", color: "bg-[#1EAEDB] text-white" },
                { text: "Quality-focused", color: "bg-[#ea384c] text-white" },
                { text: "Innovation-driven", color: "bg-[#F2FCE2] text-gray-700" }
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
          
          <div className="relative mb-4">
            <ResponsiveContainer width="100%" height={460}>
              <RechartsRadarChart data={psychographicData}>
                <defs>
                  <linearGradient id="psychographicGradient" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#33C3F0" stopOpacity={0.6} />
                    <stop offset="50%" stopColor="#1EAEDB" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="#0FA0CE" stopOpacity={0.3} />
                  </linearGradient>
                </defs>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis
                  dataKey="subject"
                  tick={({ x, y, payload }) => {
                    const point = psychographicData.find(p => p.subject === payload.value);
                    if (!point) return null;
                    
                    return (
                      <g transform={`translate(${x},${y})`}>
                        <g 
                          className="flex items-center gap-1 cursor-pointer"
                          onMouseEnter={() => setHoveredPoint(point.subject)}
                          onMouseLeave={() => setHoveredPoint(null)}
                        >
                          <circle
                            cx="-12"
                            cy="0"
                            r="3"
                            fill={colorMap[point.subject as keyof typeof colorMap].split(' ')[0].replace('bg-[', '').replace(']', '')}
                          />
                          <text
                            x="4"
                            y="0"
                            dy="0.35em"
                            textAnchor="middle"
                            fill="#9CA3AF"
                            style={{ fontSize: '11px' }}
                          >
                            {point.subject}
                          </text>
                        </g>
                      </g>
                    );
                  }}
                />
                <RadarChart
                  name="Psychographic Profile"
                  dataKey="A"
                  stroke="#3B82F6"
                  fill="url(#psychographicGradient)"
                  fillOpacity={0.6}
                />
              </RechartsRadarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
