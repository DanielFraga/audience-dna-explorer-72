import { useState } from "react";
import { Search, Download } from "lucide-react";
import MainSidebar from "@/components/MainSidebar";

const tabs = ["WHO", "WHAT", "WHY", "SO WHAT"];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("WHO");
  const totalRespondents = 1234; // This would come from your backend

  return (
    <div className="min-h-screen bg-gray-950">
      <MainSidebar />
      
      <div className="ml-64 p-8 animate-fade-in">
        {/* Top Section */}
        <div className="mb-8">
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Explore your audience..."
              className="w-[calc(100%-260px)] px-4 py-2.5 pl-12 rounded-lg border border-gray-800 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500 text-xs"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-2.5 text-gray-500 w-4 h-4" />
            
            <div className="flex items-center space-x-2 ml-3">
              <button className="px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap">
                Save DNA
              </button>
              <button className="px-3 py-2 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center whitespace-nowrap">
                <Download className="w-3 h-3 mr-1" />
                Export
              </button>
            </div>
          </div>
          
          <p className="mt-3 text-xs text-gray-400">
            Showing results from{" "}
            <button className="font-medium text-gray-300 hover:underline">
              {totalRespondents.toLocaleString()} respondents
            </button>
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex w-full bg-gray-800 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-xs font-medium transition-colors relative rounded-lg ${
                  activeTab === tab
                    ? "text-white bg-gray-900"
                    : "text-gray-500 hover:text-gray-300 hover:bg-gray-800/80"
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
        <div className="bg-gray-900 rounded-lg p-8">
          {/* Content Grid */}
          <div className="grid grid-cols-3 gap-8 animate-slide-up">
            {/* Column 1 */}
            <div className="space-y-6">
              {/* Age Group Card */}
              <div className="p-6 bg-gray-900 rounded-xl border border-gray-800">
                <h3 className="text-sm font-semibold mb-4 text-white">Age Distribution</h3>
                {/* Add age distribution chart here */}
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
                {/* Add cobweb graph here */}
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
  );
};

export default Index;
