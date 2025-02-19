import { useState } from "react";
import { Search, Download, ChartBar, Users, MapPin, DollarSign, User, Radar, Info } from "lucide-react";
import MainSidebar from "@/components/MainSidebar";
import { Radar as RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, RadarChart as RechartsRadarChart } from 'recharts';
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const tabs = ["WHO", "WHAT", "WHY", "SO WHAT"];

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

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("WHO");
  const totalRespondents = 1234;

  return (
    <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
      <MainSidebar />
      
      <div className="ml-52 p-6 animate-fade-in">
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
            Showing results from{" "}
            <button className="font-medium text-gray-300 hover:underline">
              {totalRespondents.toLocaleString()} respondents
            </button>
          </p>
        </div>

        {/* Tabs and Content Container */}
        <div>
          {/* Tabs */}
          <div>
            <div className="flex w-full bg-gray-800 rounded-t-lg">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-xs font-medium transition-colors relative ${
                    activeTab === tab
                      ? "text-white bg-gray-900"
                      : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/80"
                  } ${tab === tabs[0] ? "rounded-tl-lg" : ""} ${
                    tab === tabs[tabs.length - 1] ? "rounded-tr-lg" : ""
                  }`}
                >
                  {tab}
                  {activeTab === tab && (
                    <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="bg-gray-900 rounded-b-lg p-6">
            {/* Content Grid - Now split into two halves */}
            <div className="grid grid-cols-2 gap-6 animate-slide-up">
              {/* Left Half - List View */}
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
                      <span className="text-gray-400 text-[9px] mt-0.5">Urban</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">35%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Suburban</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">15%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Rural</span>
                    </div>
                    <div className="bg-gray-800 rounded p-1.5 flex flex-col items-center justify-center">
                      <span className="text-white text-xs font-bold">8%</span>
                      <span className="text-gray-400 text-[9px] mt-0.5">Remote</span>
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

              {/* Right Half */}
              <div>
                {/* Cobweb Graph Card */}
                <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 relative">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Info className="w-3.5 h-3.5 text-gray-400 cursor-help absolute top-2 right-2" />
                    </TooltipTrigger>
                    <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
                      Visual representation of key psychographic traits and their intensities
                    </TooltipContent>
                  </Tooltip>
                  <div className="flex items-center gap-1.5 mb-2">
                    <Radar className="w-3.5 h-3.5 text-gray-400" />
                    <h3 className="text-xs font-semibold text-white">Psychographic Overview</h3>
                  </div>
                  
                  <PsychographicRadar data={psychographicData} />

                  {/* Primary trait chips at bottom */}
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {[
                      { text: "Adventurous", color: "bg-[#9b87f5] text-white" },
                      { text: "Creative", color: "bg-[#0EA5E9] text-white" },
                      { text: "Tech-savvy", color: "bg-[#F97316] text-white" },
                      { text: "Early Adopter", color: "bg-[#E5DEFF] text-gray-700" },
                      { text: "Quality-focused", color: "bg-[#FEC6A1] text-gray-700" },
                      { text: "Innovation-driven", color: "bg-[#D6BCFA] text-gray-700" }
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PsychographicRadar = ({ data }) => {
  return (
    <div className="w-full h-[460px] relative">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsRadarChart data={data}>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'transparent', fontSize: 10 }}
          />
          <RadarChart
            name="Psychographic Profile"
            dataKey="A"
            stroke="#3B82F6"
            fill="#3B82F6"
            fillOpacity={0.3}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>

      {/* Positioned Radar vertex chips */}
      {data.map((point, index) => {
        const angle = (index * 360) / data.length;
        const baseRadius = 140; // Base radius for scaling
        const scaledRadius = (baseRadius * point.A) / 100; // Scale based on the data point's value
        const x = scaledRadius * Math.cos((angle - 90) * (Math.PI / 180));
        const y = scaledRadius * Math.sin((angle - 90) * (Math.PI / 180));

        // Colors are arranged so nearby points have similar colors
        const colorMap = {
          // Purple family
          'Op': 'bg-[#9b87f5] text-white',
          'Co': 'bg-[#7E69AB] text-white',
          'Ex': 'bg-[#6E59A5] text-white',
          // Blue family
          'Ag': 'bg-[#0EA5E9] text-white',
          'Ne': 'bg-[#33C3F0] text-white',
          'RT': 'bg-[#1EAEDB] text-white',
          // Orange/Yellow family
          'In': 'bg-[#F97316] text-white',
          'PS': 'bg-[#FEC6A1] text-gray-700',
          'BL': 'bg-[#FEF7CD] text-gray-700',
          // Back to Purple (completing the circle)
          'SI': 'bg-[#D6BCFA] text-gray-700',
          'TA': 'bg-[#E5DEFF] text-gray-700',
          'QF': 'bg-[#9b87f5] text-white',
          'Su': 'bg-[#7E69AB] text-white',
          'SS': 'bg-[#6E59A5] text-white',
          'Im': 'bg-[#0EA5E9] text-white',
          'Tr': 'bg-[#33C3F0] text-white',
        };

        return (
          <Tooltip key={point.subject}>
            <TooltipTrigger asChild>
              <span
                className={`px-2 py-0.5 text-[10px] rounded-full cursor-help absolute transform -translate-x-1/2 -translate-y-1/2 ${colorMap[point.subject as keyof typeof colorMap]}`}
                style={{
                  left: `50%`,
                  top: `50%`,
                  transform: `translate(${x}px, ${y}px)`,
                }}
              >
                {point.subject}
              </span>
            </TooltipTrigger>
            <TooltipContent className="bg-gray-800 border-gray-700 text-[11px]">
              {point.fullName}
            </TooltipContent>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default Index;
