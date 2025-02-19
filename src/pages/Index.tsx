
import { useState } from "react";
import { Search, Download, ChartBar, Users, MapPin, DollarSign, User, Radar, Info, ChevronDown, CircleIcon } from "lucide-react";
import MainSidebar from "@/components/MainSidebar";
import { Radar as RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, RadarChart as RechartsRadarChart } from 'recharts';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
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
  'Op': 'bg-[#9b87f5] text-white',
  'Co': 'bg-[#7E69AB] text-white',
  'Ex': 'bg-[#6E59A5] text-white',
  'Ag': 'bg-[#0EA5E9] text-white',
  'Ne': 'bg-[#33C3F0] text-white',
  'RT': 'bg-[#1EAEDB] text-white',
  'In': 'bg-[#F97316] text-white',
  'PS': 'bg-[#FEC6A1] text-gray-700',
  'BL': 'bg-[#FEF7CD] text-gray-700',
  'SI': 'bg-[#D6BCFA] text-gray-700',
  'TA': 'bg-[#E5DEFF] text-gray-700',
  'QF': 'bg-[#9b87f5] text-white',
  'Su': 'bg-[#7E69AB] text-white',
  'SS': 'bg-[#6E59A5] text-white',
  'Im': 'bg-[#0EA5E9] text-white',
  'Tr': 'bg-[#33C3F0] text-white',
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
    switch (activeTab) {
      case "WHO_DEMO":
        return (
          <div>
            {/* Demographics content */}
            <DemographicsMap />
          </div>
        );
      
      case "WHO_PSYCHO":
        return (
          <div>
            {/* Psychographics content */}
            <div className="grid grid-cols-3 gap-4">
              {/* Your psychographic content */}
            </div>
          </div>
        );
      
      case "WHAT":
        return (
          <div className="grid grid-cols-3 gap-4 animate-slide-up">
            {surveyData.map((item, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg border border-gray-800 p-4 relative hover:border-gray-700 transition-colors"
              >
                {/* Confidence Score Circle */}
                <div className="absolute top-3 right-3">
                  <div className="relative w-10 h-10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div 
                        className={`w-full h-full rounded-full border-2 ${
                          Number(item.confidence) >= 0.9 ? 'border-green-500' :
                          Number(item.confidence) >= 0.7 ? 'border-blue-500' :
                          'border-yellow-500'
                        }`}
                      />
                      <span className="absolute text-xs font-medium text-gray-300">
                        {item.confidence}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Question */}
                <h3 
                  className="text-sm font-medium text-white mb-2 pr-12"
                  dangerouslySetInnerHTML={{
                    __html: item.question.replace(/holiday/gi, (match) => (
                      `<span class="text-blue-400">${match}</span>`
                    ))
                  }}
                />

                {/* Response */}
                <p 
                  className="text-xs text-gray-400 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: item.response.replace(/holiday/gi, (match) => (
                      `<span class="text-blue-400">${match}</span>`
                    ))
                  }}
                />
              </div>
            ))}
          </div>
        );
      
      case "WHY":
        return (
          <div>
            {/* Interpretation content */}
            <div className="space-y-4">
              {/* Your interpretation content */}
            </div>
          </div>
        );
      
      case "SO_WHAT":
        return (
          <div>
            {/* Advice content */}
            <div className="space-y-4">
              {/* Your advice content */}
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="transition-all duration-300 ml-[208px] sidebar-collapsed:ml-16 p-6 animate-fade-in">
        {/* Top Section */}
        <div className="mb-8">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Explore your audience..."
              className="w-[calc(100%-260px)] px-4 py-2 pl-10 rounded-lg border border-gray-800 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500 text-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2 text-gray-500 w-4 h-4" />
            
            <div className="flex items-center space-x-2 ml-3">
              <button className="px-3 py-1.5 text-[11px] font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Save DNA
              </button>
              <button className="px-3 py-1.5 text-[11px] font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center whitespace-nowrap">
                <Download className="w-3 h-3 mr-1" />
                Export
              </button>
            </div>
          </div>
          
          <p className="mt-2 text-[11px] text-gray-400">
            438 out of 10000 survey respondents have responses relevant to the search term "Holiday". Here is their "DNA".
          </p>
        </div>

        {/* Tabs and Content Container */}
        <div>
          {/* Tabs */}
          <div>
            <div className="flex w-full bg-gray-800 rounded-t-lg">
              {tabs.map((tab, index) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 py-4 text-xs font-medium transition-colors relative ${
                    activeTab === tab.id
                      ? "text-white bg-gray-900"
                      : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/80"
                  } ${index === 0 ? "rounded-tl-lg" : ""} ${
                    index === tabs.length - 1 ? "rounded-tr-lg" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <span>{tab.label}</span>
                    {tab.subLabel && (
                      <span className="text-[10px] text-gray-400 mt-0.5">
                        {tab.subLabel}
                      </span>
                    )}
                  </div>
                  {activeTab === tab.id && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-gray-900 rounded-b-lg p-6">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
