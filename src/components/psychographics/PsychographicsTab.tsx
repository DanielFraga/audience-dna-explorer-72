
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
  },
  RT: {
    empirical: "79% of high risk tolerance respondents have tried new product categories in the last 6 months, compared to 31% of risk-averse individuals.",
    interpretation: [
      "Prospect Theory (Kahneman & Tversky) indicates risk-tolerant individuals weigh potential gains more heavily than potential losses.",
      "Neurobiological research shows decreased amygdala activation in risk-tolerant individuals when facing uncertain outcomes.",
      "This trait strongly predicts early adoption behaviors and willingness to experiment with novel offerings."
    ]
  },
  In: {
    empirical: "63% of innovation-focused respondents actively seek out beta programs and product testing opportunities.",
    interpretation: [
      "Rogers' Diffusion of Innovation theory places these individuals in the 'Early Adopter' or 'Innovator' categories of the adoption curve.",
      "Psychology of creativity research shows these individuals score higher on divergent thinking metrics and cognitive flexibility.",
      "From a marketing perspective, these users respond most positively to messaging highlighting novelty and pioneering aspects."
    ]
  },
  PS: {
    empirical: "47% of price-sensitive respondents report postponing purchases until sales events, compared to 18% of non-price-sensitive individuals.",
    interpretation: [
      "Behavioral economics research shows price sensitivity correlates with increased comparative shopping behaviors.",
      "The psychological principle of anchoring explains why these individuals are more influenced by reference pricing and discount framing.",
      "Scarcity theory suggests these individuals experience heightened value perception when items are presented as limited-time offers."
    ]
  },
  BL: {
    empirical: "71% of brand-loyal respondents will pay a premium of up to 25% for their preferred brands, even when functionally equivalent alternatives exist.",
    interpretation: [
      "Identity-based consumer theory suggests brand loyalty stems from self-concept alignment with perceived brand values.",
      "Cognitive psychology research shows these individuals experience reduced cognitive load through habitual purchasing patterns.",
      "The endowment effect explains why these consumers place higher value on brands they've previously invested in emotionally or financially."
    ]
  },
  SI: {
    empirical: "82% of socially-conscious respondents research a company's ethical practices before making significant purchases.",
    interpretation: [
      "Value theory (Schwartz) indicates these individuals prioritize universalism and benevolence values in their decision-making.",
      "Social identity theory explains how these consumers use purchasing decisions as expressions of their ethical and social values.",
      "Research shows these individuals demonstrate higher willingness-to-pay for products with transparent supply chains and ethical practices."
    ]
  },
  TA: {
    empirical: "93% of tech adopters own 5+ connected devices and replace technology twice as frequently as late adopters.",
    interpretation: [
      "Technology Acceptance Model research shows these individuals have higher perceived usefulness and ease-of-use expectations for new technologies.",
      "Cognitive studies indicate these users have developed advanced mental models for technology interaction, reducing learning curve friction.",
      "From a consumer behavior perspective, they show higher tolerance for early-stage product issues in exchange for novelty and functionality."
    ]
  },
  QF: {
    empirical: "76% of quality-focused respondents cite durability as more important than price when making purchasing decisions.",
    interpretation: [
      "Consumer behavior theory suggests quality focus stems from long-term utility maximization rather than short-term cost minimization.",
      "The psychology of luxury consumption explains how these individuals derive value from craftsmanship and performance excellence.",
      "Research indicates these consumers engage in more extensive pre-purchase research and place higher value on expert reviews and technical specifications."
    ]
  },
  Su: {
    empirical: "58% of sustainability-minded respondents have boycotted brands due to environmental concerns in the past year.",
    interpretation: [
      "Environmental psychology research shows sustainable consumption ties closely to personal values and social identity construction.",
      "The theory of planned behavior explains how these individuals align purchasing decisions with environmental value systems.",
      "Studies indicate these consumers are more receptive to lifecycle messaging and respond positively to transparent impact metrics."
    ]
  },
  SS: {
    empirical: "42% of status-seeking respondents follow luxury brands on social media, compared to 12% of non-status-seeking individuals.",
    interpretation: [
      "Veblen's theory of conspicuous consumption explains how these individuals use purchases as signals of social position.",
      "Social comparison theory (Festinger) shows how status-seeking drives upward comparison behaviors and aspirational consumption.",
      "From a psychological perspective, these individuals show heightened sensitivity to social validation and exclusivity messaging."
    ]
  },
  Im: {
    empirical: "67% of impulsive respondents report making unplanned purchases weekly, compared to 23% of non-impulsive individuals.",
    interpretation: [
      "Neurobiological research indicates impulsivity stems from reduced prefrontal inhibitory control during decision-making processes.",
      "The psychology of delayed gratification shows these individuals place higher value on immediate rewards versus future benefits.",
      "From a marketing perspective, these consumers are more responsive to point-of-sale promotions and limited-time offers."
    ]
  },
  Tr: {
    empirical: "73% of traditional respondents prefer established brands with long histories over newer market entrants.",
    interpretation: [
      "Stability theory in psychology suggests traditionalism provides cognitive security through familiar patterns and established norms.",
      "Research shows these individuals place higher value on heritage, authenticity, and consistent brand experiences.",
      "From a cultural perspective, traditional consumers often serve as anchors against rapid market shifts, valuing continuity over disruption."
    ]
  },
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
