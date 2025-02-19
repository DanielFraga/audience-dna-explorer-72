
import { useState } from "react";
import { Search, Download } from "lucide-react";
import MainSidebar from "@/components/MainSidebar";

const tabs = ["WHO", "WHAT", "WHY", "SO WHAT"];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("WHO");
  const totalRespondents = 1234; // This would come from your backend

  return (
    <div className="min-h-screen bg-gray-50">
      <MainSidebar />
      
      <div className="ml-64 p-8 animate-fade-in">
        {/* Top Section */}
        <div className="mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Explore your audience..."
              className="w-[calc(100%-200px)] px-4 py-3 pl-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-3.5 text-gray-400 w-5 h-5" />
            
            <div className="absolute right-0 top-0 space-x-4">
              <button className="px-6 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Save Audience DNA
              </button>
              <button className="px-6 py-3 text-sm font-medium text-white bg-black rounded-lg hover:bg-gray-900 transition-colors flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </button>
            </div>
          </div>
          
          <p className="mt-3 text-sm text-gray-600">
            Showing results from{" "}
            <button className="font-medium hover:underline">
              {totalRespondents.toLocaleString()} respondents
            </button>
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-8 border-b border-gray-200">
          <div className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 text-sm font-medium transition-colors relative ${
                  activeTab === tab
                    ? "text-black"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-3 gap-8 animate-slide-up">
          {/* Column 1 */}
          <div className="space-y-6">
            {/* Age Group Card */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Age Distribution</h3>
              {/* Add age distribution chart here */}
            </div>

            {/* Gender Card */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Gender Distribution</h3>
              {/* Add gender distribution chart here */}
            </div>

            {/* Location Card */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Top Locations</h3>
              {/* Add location list here */}
            </div>

            {/* Ethnicity Card */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Ancestry & Ethnicity</h3>
              {/* Add ethnicity distribution here */}
            </div>
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {/* Cobweb Graph Card */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Psychographic Overview</h3>
              {/* Add cobweb graph here */}
              <div className="mt-4 flex flex-wrap gap-2">
                {["Adventurous", "Creative", "Tech-savvy"].map((trait) => (
                  <span
                    key={trait}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
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
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Cultural Interests</h3>
              <div className="flex flex-wrap gap-2">
                {["Music", "Art", "Technology", "Travel", "Food"].map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Money Stats Card */}
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold mb-4">Income Distribution</h3>
              {/* Add income distribution chart here */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
