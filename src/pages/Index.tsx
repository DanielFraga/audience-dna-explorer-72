
import { useState } from "react";
import { Search, Download } from "lucide-react";
import MainSidebar from "@/components/MainSidebar";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const tabs = ["WHO", "WHAT", "WHY", "SO WHAT"];

const psychographicData = [
  { subject: 'OP', fullName: 'Openness', A: 80 },
  { subject: 'CO', fullName: 'Conscientiousness', A: 65 },
  { subject: 'EX', fullName: 'Extraversion', A: 45 },
  { subject: 'AG', fullName: 'Agreeableness', A: 70 },
  { subject: 'NE', fullName: 'Neuroticism', A: 30 },
  { subject: 'RT', fullName: 'Risk Tolerance', A: 85 },
  { subject: 'IN', fullName: 'Innovation', A: 75 },
  { subject: 'PS', fullName: 'Price Sensitivity', A: 40 },
  { subject: 'BL', fullName: 'Brand Loyalty', A: 60 },
  { subject: 'SI', fullName: 'Social Impact', A: 72 },
  { subject: 'TA', fullName: 'Tech Adoption', A: 88 },
  { subject: 'QF', fullName: 'Quality Focus', A: 78 },
  { subject: 'SU', fullName: 'Sustainability', A: 65 },
  { subject: 'SS', fullName: 'Status Seeking', A: 45 },
  { subject: 'IM', fullName: 'Impulsiveness', A: 35 },
  { subject: 'TR', fullName: 'Traditionalism', A: 25 },
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
            {/* Content Grid */}
            <div className="grid grid-cols-3 gap-8 animate-slide-up">
              {/* Column 1 */}
              <div className="space-y-6">
                {/* Age Group Card */}
                <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-sm font-semibold mb-4 text-white">Age Distribution</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                      <span className="text-white font-bold">28%</span>
                      <span className="text-gray-400 text-xs mt-1">16-29</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                      <span className="text-white font-bold">35%</span>
                      <span className="text-gray-400 text-xs mt-1">30-45</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                      <span className="text-white font-bold">22%</span>
                      <span className="text-gray-400 text-xs mt-1">45-60</span>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-4 flex flex-col items-center justify-center">
                      <span className="text-white font-bold">15%</span>
                      <span className="text-gray-400 text-xs mt-1">60+</span>
                    </div>
                  </div>
                </div>

                {/* Gender Card */}
                <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-sm font-semibold mb-4 text-white">Gender Distribution</h3>
                  {/* Add gender distribution chart here */}
                </div>

                {/* Location Card */}
                <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-sm font-semibold mb-4 text-white">Top Locations</h3>
                  {/* Add location list here */}
                </div>

                {/* Ethnicity Card */}
                <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-sm font-semibold mb-4 text-white">Ancestry & Ethnicity</h3>
                  {/* Add ethnicity distribution here */}
                </div>
              </div>

              {/* Column 2 */}
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
                    {psychographicData.map((trait) => (
                      <span
                        key={trait.subject}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full cursor-help"
                        title={trait.fullName}
                      >
                        {trait.subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Column 3 */}
              <div className="space-y-6">
                {/* Cultural Interests Card */}
                <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-sm font-semibold mb-4 text-white">Cultural Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Music", "Art", "Technology", "Travel", "Food"].map((interest) => (
                      <span
                        key={interest}
                        className="px-3 py-1 text-xs bg-gray-800 text-gray-300 rounded-full"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Money Stats Card */}
                <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                  <h3 className="text-sm font-semibold mb-4 text-white">Income Distribution</h3>
                  {/* Add income distribution chart here */}
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
