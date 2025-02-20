import { useState } from "react";
import { Search, Download, ChartBar, Users, MapPin, DollarSign, User, Radar, Info, ChevronDown, CircleIcon } from "lucide-react";
import MainSidebar from "@/components/MainSidebar";
import { Radar as RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, RadarChart as RechartsRadarChart } from 'recharts';
import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from "@/components/ui/tooltip";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import DemographicsMap from "@/components/DemographicsMap";

const tabs = [
  { id: "WHO_DEMO", label: "WHO", subLabel: "demographics" },
  { id: "WHO_PSYCHO", label: "WHO", subLabel: "psychographics" },
  { id: "WHAT", label: "WHAT", subLabel: "responses" },
  { id: "WHY", label: "WHY", subLabel: "interpretation" },
  { id: "SO_WHAT", label: "SO WHAT", subLabel: "advice" }
];

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
};

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
    "Energy derived from social interactions",
    "Tendency to seek stimulation in others' company",
    "Assertiveness and talkativeness",
    "Enthusiasm in social situations"
  ],
  Ag: [
    "Tendency to be compassionate and cooperative",
    "Concern with others' well-being",
    "Helpful and trusting nature",
    "Preference for social harmony"
  ],
  Ne: [
    "Tendency to experience negative emotions",
    "Sensitivity to stress and emotional triggers",
    "Susceptibility to mood swings",
    "Emotional response intensity"
  ],
  RT: [
    "Comfort level with uncertainty",
    "Willingness to take calculated risks",
    "Decision-making in ambiguous situations",
    "Investment and opportunity approach"
  ],
  In: [
    "Early adoption of new technologies",
    "Creative problem-solving abilities",
    "Drive to improve existing solutions",
    "Forward-thinking mindset"
  ],
  PS: [
    "Importance of price in decision making",
    "Value consciousness in purchases",
    "Deal-seeking behavior",
    "Budget consciousness"
  ],
  BL: [
    "Commitment to preferred brands",
    "Resistance to brand switching",
    "Trust in established relationships",
    "Value of brand reputation"
  ],
  SI: [
    "Concern for environmental impact",
    "Interest in social responsibility",
    "Support for ethical business practices",
    "Community involvement focus"
  ],
  TA: [
    "Speed of technology adoption",
    "Digital tool proficiency",
    "Interest in tech innovations",
    "Smart device integration"
  ],
  QF: [
    "Preference for premium products",
    "Attention to product durability",
    "Value of craftsmanship",
    "Long-term investment mindset"
  ],
  Su: [
    "Environmental consciousness",
    "Eco-friendly product preference",
    "Support for sustainable practices",
    "Interest in renewable resources"
  ],
  SS: [
    "Importance of social recognition",
    "Brand prestige sensitivity",
    "Luxury orientation",
    "Image consciousness"
  ],
  Im: [
    "Spontaneous decision making",
    "Quick purchasing behavior",
    "Emotional buying triggers",
    "Resistance to planning"
  ],
  Tr: [
    "Preference for established methods",
    "Resistance to change",
    "Value of cultural norms",
    "Conservative approach"
  ],
};

type InsightReference = {
  id: number;
  text: string;
};

type Insight = {
  headline: string;
  explanation: string;
  references: InsightReference[];
};

const insights: Insight[] = [
  {
    headline: "Brand Trust Dominates Decisions",
    explanation: "Clear indication that brand reputation¹ significantly influences purchase behavior. Trust metrics² show strong correlation with conversion rates³.",
    references: [
      { id: 1, text: "87% cite brand reputation as 'very important' in decision making" },
      { id: 2, text: "Trust scores directly correlate with purchase likelihood (r=0.82)" },
      { id: 3, text: "Trusted brands see 2.4x higher conversion rates" }
    ]
  },
  {
    headline: "Digital-First Preference",
    explanation: "Strong bias towards digital channels¹ with high mobile engagement². Tech adoption rates³ suggest advanced digital literacy.",
    references: [
      { id: 1, text: "92% prefer digital touchpoints over traditional channels" },
      { id: 2, text: "Mobile interaction rate 3.1x higher than desktop" },
      { id: 3, text: "Tech adoption score 65% above market average" }
    ]
  },
  {
    headline: "Value-Quality Balance",
    explanation: "Notable price sensitivity¹ balanced against strong quality focus². Premium segment³ shows distinct behavioral patterns.",
    references: [
      { id: 1, text: "75% actively compare prices before purchase" },
      { id: 2, text: "82% willing to pay more for guaranteed quality" },
      { id: 3, text: "Premium segment represents 28% of total audience" }
    ]
  },
  {
    headline: "Community-Driven Choices",
    explanation: "Heavy reliance on peer recommendations¹ and social validation². Community engagement³ strongly influences decisions.",
    references: [
      { id: 1, text: "91% check reviews before significant purchases" },
      { id: 2, text: "Social proof elements increase conversion by 2.8x" },
      { id: 3, text: "Active community members show 3.2x higher loyalty" }
    ]
  },
  {
    headline: "Sustainability Focus",
    explanation: "Environmental impact¹ is a key decision factor. Strong preference for eco-friendly options² with willingness to pay premiums³.",
    references: [
      { id: 1, text: "84% consider environmental impact in purchases" },
      { id: 2, text: "Eco-friendly alternatives preferred 2.5x more" },
      { id: 3, text: "Average 18% premium accepted for sustainable options" }
    ]
  },
  {
    headline: "Innovation Receptivity",
    explanation: "High openness to new features¹ and experimental products². Early adopter characteristics³ prominent in key segments.",
    references: [
      { id: 1, text: "73% express interest in trying new features" },
      { id: 2, text: "Beta feature adoption rate 2.1x above average" },
      { id: 3, text: "Early adopter segment comprises 42% of audience" }
    ]
  }
];

const surveyData = [
  {
    question: "What factors influence your holiday purchase decisions?",
    response: "I typically plan my holiday shopping months in advance to find the best deals and ensure availability.",
    confidence: 0.87
  },
  {
    question: "How do you prefer to spend your holiday budget?",
    response: "Most of my holiday spending goes towards gifts for family, with some reserved for holiday decorations.",
    confidence: 0.92
  },
  {
    question: "What's your preferred holiday shopping channel?",
    response: "I prefer online shopping during the holiday season to avoid crowded stores and save time.",
    confidence: 0.78
  },
  {
    question: "How important are holiday promotions to you?",
    response: "I actively seek out holiday deals and special offers, especially during major shopping events.",
    confidence: 0.85
  },
  {
    question: "What challenges do you face during holiday shopping?",
    response: "Finding unique holiday gifts within budget and managing delivery times are my main concerns.",
    confidence: 0.95
  },
  {
    question: "How far in advance do you plan holiday purchases?",
    response: "I start my holiday planning at least 2-3 months before to avoid last-minute stress.",
    confidence: 0.83
  },
  {
    question: "What influences your holiday gift choices?",
    response: "Personal preferences and holiday wish lists from family members guide my gift selections.",
    confidence: 0.89
  },
  {
    question: "How do you manage holiday season stress?",
    response: "I create detailed holiday shopping lists and stick to a predetermined budget.",
    confidence: 0.91
  },
  {
    question: "What's your holiday shopping strategy?",
    response: "I combine online and in-store holiday shopping to get the best of both experiences.",
    confidence: 0.88
  },
  {
    question: "How has your holiday shopping changed recently?",
    response: "I've shifted more towards online holiday shopping and started planning earlier than before.",
    confidence: 0.86
  },
  {
    question: "What matters most in holiday gift selection?",
    response: "Finding meaningful holiday gifts that reflect personal connections is my priority.",
    confidence: 0.82
  },
  {
    question: "How do you track holiday expenses?",
    response: "I use a dedicated app to monitor holiday spending and stay within my budget.",
    confidence: 0.84
  }
].map(item => ({
  ...item,
  confidence: Math.random().toFixed(2)
}));

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("WHO_DEMO");
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);
  const totalRespondents = 1234;

  const renderContent = () => {
    switch(activeTab) {
      case "WHO_DEMO":
        return (
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            <div className="space-y-3">
              {/* Age Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Detailed breakdown of age groups across all respondents
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <ChartBar className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Age Distribution</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">28%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">16-29</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">35%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">30-45</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">22%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">45-60</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">15%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">60+</span>
                    </div>
                  </div>
                </div>

              {/* Gender Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Distribution of gender identities in the respondent pool
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Users className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Gender Distribution</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">48%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Male</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">51%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Female</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">1%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
                    </div>
                  </div>
                </div>

              {/* Location Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Geographical distribution of respondents by area type
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Location Distribution</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">42%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Copenhagen, DK</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">35%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">London, UK</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">15%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">New York, US</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">8%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
                    </div>
                  </div>
                </div>

              {/* Income Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Income range distribution across all respondents
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <DollarSign className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Income Distribution</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">18%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">&lt;30k</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">45%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">30k-75k</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">25%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">75k-120k</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">12%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">&gt;120k</span>
                    </div>
                  </div>
                </div>

              {/* Ancestry Distribution Card */}
              <div className="p-3 bg-gray-900 rounded-lg border border-gray-800 h-[90px] relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Distribution of ancestral backgrounds among respondents
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Ancestry Distribution</h3>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">32%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">European</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">28%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Asian</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">22%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">African</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">18%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Other</span>
                    </div>
                  </div>
                </div>
            </div>
            
            {/* Right Column - Map Card */}
            <div>
              {/* Map Card */}
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2 z-10" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                    Geographic distribution of respondents across major cities
                  </TooltipContent>
                </Tooltip>
                <div className="flex items-center gap-1.5 mb-4">
                  <MapPin className="w-3.5 h-3.5 text-gray-400" />
                  <h3 className="text-xs font-semibold text-white">Geographic Distribution</h3>
                </div>
                <DemographicsMap />
              </div>
            </div>
          </div>
        );
      
      case "WHO_PSYCHO":
        return (
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {/* Left Stats Card */}
            <div>
              {/* Stats Card */}
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative h-full">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Detailed breakdown of all psychographic variables
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              
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

          <div>
            {/* Cobweb Graph Card */}
            <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                    Visual representation of key psychographic traits and their intensities
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              {/* Title and chips */}
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
              
              {/* Radar Chart */}
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
