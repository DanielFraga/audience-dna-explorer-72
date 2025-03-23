
import { useState, useEffect } from "react";
import { Search, Download, Users, Globe, Sparkles } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate, useLocation } from "react-router-dom";
import MainSidebar from "../components/MainSidebar";
import { tabs } from "../constants/tabs";
import { DemographicsTab } from "../components/demographics/DemographicsTab";
import { PsychographicsTab } from "../components/psychographics/PsychographicsTab";
import { SurveyTab } from "../components/survey/SurveyTab";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("WHO_DEMO");
  const [showResults, setShowResults] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [dnaName, setDnaName] = useState(`Audience: ${searchTerm}`);
  const [dnaDescription, setDnaDescription] = useState("");
  
  useEffect(() => {
    // Check if we should reset the search when navigating here
    if (location.state?.resetSearch) {
      setSearchTerm("");
      setShowResults(false);
      
      // Clear the location state to prevent resetting on subsequent renders
      navigate('/', { replace: true, state: {} });
    }
  }, [location.state, navigate]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setShowResults(true);
      console.log("Searching for:", searchTerm);
    }
  };

  const handleSaveDna = () => {
    // Here you would actually save the DNA with the provided name
    console.log("Saving DNA with name:", dnaName);
    // Navigate to chat with this audience
    navigate("/chat");
  };

  const renderContent = () => {
    if (!showResults) {
      return (
        <div className="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
          <div className="mb-10 relative">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0,transparent_70%)]"></div>
              <Sparkles className="w-12 h-12 text-white" />
            </div>
            <div className="absolute -right-6 -top-6">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="absolute -left-4 -bottom-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-white mb-3 tracking-tight">Cubular</h1>
          <h2 className="text-xl font-medium text-gray-300 mb-3">
            Explore Your Global Audience
          </h2>
          <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
            Discover insights about your audience's demographics, psychographics, and behaviors. Start by typing a keyword in the search bar above.
          </p>
          
          <div className="relative w-full max-w-md mx-auto mb-8">
            <input
              type="text"
              placeholder="What audience do you want to explore?"
              className="w-full px-4 py-3 pl-10 rounded-lg border border-gray-700 bg-gray-800 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
            <Search className="absolute left-3 top-3.5 text-gray-500 w-4 h-4" />
            <button 
              className="absolute right-2 top-2 px-3 py-1.5 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          
          <div className="space-y-4 text-gray-500 text-sm">
            <p>Try searching for:</p>
            <div className="flex gap-2 justify-center flex-wrap">
              {["holiday", "gaming", "fashion", "technology", "health", "food"].map((suggestion) => (
                <button 
                  key={suggestion}
                  className="px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
                  onClick={() => {
                    setSearchTerm(suggestion);
                    setTimeout(() => handleSearch(), 100);
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        </div>
      );
    }

    switch(activeTab) {
      case "WHO_DEMO":
        return <DemographicsTab />;
      case "WHO_PSYCHO":
        return <PsychographicsTab />;
      case "WHAT":
        return <SurveyTab />;
      default:
        return (
          <div className="p-4 text-center text-gray-500">
            Content for {activeTab} tab coming soon...
          </div>
        );
    }
  };

  return (
    <TooltipProvider>
      <div className="min-h-screen bg-gray-950 font-grotesk text-[13px]">
        <MainSidebar />
        
        <div className="transition-all duration-300 md:ml-[208px] md:collapsed:ml-16 p-4 md:p-6 animate-fade-in">
          {/* Top Section */}
          <div className="mb-8 mt-14 md:mt-0">
            <div className="relative flex flex-col md:flex-row gap-3 md:gap-0 items-start md:items-center">
              <input
                type="text"
                placeholder="Explore your audience..."
                className="w-full md:w-[calc(100%-260px)] px-4 py-2 pl-10 rounded-lg border border-gray-800 bg-gray-900 text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-700 placeholder-gray-500 text-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              />
              <Search className="absolute left-3 top-2.5 text-gray-500 w-4 h-4" />
              
              <div className="flex items-center space-x-2 w-full md:w-auto md:ml-3">
                <button 
                  className="flex-1 md:flex-none px-3 py-1.5 text-[11px] font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors whitespace-nowrap"
                  onClick={handleSearch}
                >
                  Search
                </button>
                <button 
                  className="flex-1 md:flex-none px-3 py-1.5 text-[11px] font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center whitespace-nowrap"
                >
                  <Download className="w-3 h-3 mr-1" />
                  Export
                </button>
              </div>
            </div>
            
            {showResults && (
              <Button 
                className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-[11px] font-medium p-2 px-3 rounded-lg flex items-center gap-1.5 shadow-md animate-fade-in"
              >
                <span>Showing results for <span className="font-semibold">"{searchTerm}"</span></span>
                <span>•</span>
                <span>Applicable to</span>
                <span className="px-2 py-0.5 bg-blue-700 rounded-full text-blue-100">450 out of 10000</span>
                <span>respondents</span>
              </Button>
            )}
          </div>

          {/* Tabs and Content Container */}
          {showResults ? (
            <div className="transition-all duration-300 opacity-100">
              {/* Tabs */}
              <div className="overflow-x-auto -mx-4 md:mx-0 px-4 md:px-0">
                <div className="flex w-full bg-gray-800 rounded-t-lg min-w-[600px]">
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
              <div className="bg-gray-900 rounded-b-lg p-4 md:p-6 overflow-x-auto">
                <div className="min-w-[600px]">
                  {renderContent()}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-900 rounded-lg p-4 md:p-6 min-h-[500px] flex items-center justify-center">
              {renderContent()}
            </div>
          )}
        </div>

        <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
          <DialogContent className="bg-gray-900 border border-gray-800 text-gray-100">
            <DialogHeader>
              <DialogTitle className="text-lg font-medium text-gray-100">Save Audience DNA</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="dna-name" className="block text-sm font-medium text-gray-300">
                  Name your audience DNA
                </label>
                <Input
                  id="dna-name"
                  value={dnaName}
                  onChange={(e) => setDnaName(e.target.value)}
                  className="bg-gray-800 border-gray-700 focus:ring-blue-600 text-gray-100"
                  placeholder="Enter a name for this audience DNA"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="dna-description" className="block text-sm font-medium text-gray-300">
                  Description (optional)
                </label>
                <Textarea
                  id="dna-description"
                  value={dnaDescription}
                  onChange={(e) => setDnaDescription(e.target.value)}
                  className="bg-gray-800 border-gray-700 focus:ring-blue-600 text-gray-100 min-h-[80px]"
                  placeholder="Add a description for this audience DNA"
                />
              </div>
              
              <div className="pt-4 flex flex-col space-y-2">
                <button
                  onClick={handleSaveDna}
                  className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium"
                >
                  Save & Chat with this Audience
                </button>
                <button
                  onClick={() => setShowSaveDialog(false)}
                  className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  );
};

export default Index;
