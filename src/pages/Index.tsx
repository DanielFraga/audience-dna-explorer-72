
import { useState } from "react";
import { Search, Download } from "lucide-react";
import MainSidebar from "@/components/MainSidebar";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const tabs = ["WHO", "WHAT", "WHY", "SO WHAT"];

const psychographicData = [
  { subject: 'Openness', A: 80 },
  { subject: 'Conscientiousness', A: 65 },
  { subject: 'Extraversion', A: 45 },
  { subject: 'Agreeableness', A: 70 },
  { subject: 'Neuroticism', A: 30 },
  { subject: 'Risk Tolerance', A: 85 },
  { subject: 'Innovation', A: 75 },
  { subject: 'Price Sensitivity', A: 40 },
  { subject: 'Brand Loyalty', A: 60 },
  { subject: 'Social Impact', A: 72 },
  { subject: 'Tech Adoption', A: 88 },
  { subject: 'Quality Focus', A: 78 },
  { subject: 'Sustainability', A: 65 },
  { subject: 'Status Seeking', A: 45 },
  { subject: 'Impulsiveness', A: 35 },
  { subject: 'Traditionalism', A: 25 },
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
          <div className="bg-gray-900 rounded-b-lg p-8">
            {/* Content Grid - Now split into two halves */}
            <div className="grid grid-cols-2 gap-8 animate-slide-up">
              {/* Left Half - List View */}
              <div className="space-y-4">
                {/* Age Distribution Card */}
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 h-[120px]">
                  <h3 className="text-sm font-semibold mb-3 text-white">Age Distribution</h3>
                  <div className="grid grid-cols-4 gap-3">
                    <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-bold">28%</span>
                      <span className="text-gray-400 text-[10px] mt-0.5">16-29</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-bold">35%</span>
                      <span className="text-gray-400 text-[10px] mt-0.5">30-45</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-bold">22%</span>
                      <span className="text-gray-400 text-[10px] mt-0.5">45-60</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-bold">15%</span>
                      <span className="text-gray-400 text-[10px] mt-0.5">60+</span>
                    </div>
                  </div>
                </div>

                {/* Gender Distribution Card */}
                <div className="p-4 bg-gray-900 rounded-xl border border-gray-800 h-[120px]">
                  <h3 className="text-sm font-semibold mb-3 text-white">Gender Distribution</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-bold">48%</span>
                      <span className="text-gray-400 text-[10px] mt-0.5">Male</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-bold">51%</span>
                      <span className="text-gray-400 text-[10px] mt-0.5">Female</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-2 flex flex-col items-center justify-center">
                      <span className="text-white text-sm font-bold">1%</span>
                      <span className="text-gray-400 text-[10px] mt-0.5">Other</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Half */}
              <div className="space-y-6">
                {/* Cobweb Graph Card */}
                <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-sm font-semibold mb-4 text-white">Psychographic Overview</h3>
                  <div className="w-full h-[400px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={psychographicData}>
                        <PolarGrid stroke="#374151" />
                        <PolarAngleAxis
                          dataKey="subject"
                          tick={{ fill: '#9CA3AF', fontSize: 10 }}
                        />
                        <Radar
                          name="Psychographic Profile"
                          dataKey="A"
                          stroke="#3B82F6"
                          fill="#3B82F6"
                          fillOpacity={0.3}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["Adventurous", "Creative", "Tech-savvy"].map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                      >
                        {trait}
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

export default Index;
