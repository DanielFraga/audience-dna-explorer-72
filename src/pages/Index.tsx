import { useState, useEffect, useRef } from "react";
import { Sparkles, Users, Globe, Search, Download, Menu, Radar, ChartBar } from "lucide-react";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useNavigate, useLocation } from "react-router-dom";
import { DemographicsTab } from "../components/demographics/DemographicsTab";
import { PsychographicsTab } from "../components/psychographics/PsychographicsTab";
import { SurveyTab } from "../components/survey/SurveyTab";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { useIsMobile } from "../hooks/use-mobile";
import { ScrollArea } from "../components/ui/scroll-area";
import { Tooltip, TooltipContent, TooltipTrigger } from "../components/ui/tooltip";
import AppHeader from "@/components/AppHeader";
import IconTabs from "@/components/IconTabs";
import MainSidebar from "@/components/MainSidebar";
import GlassCard from "@/components/ui/GlassCard";

const Index = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState(() => {
    return sessionStorage.getItem('searchTerm') || "";
  });
  const [showResults, setShowResults] = useState(false);
  const [showSaveDialog, setShowSaveDialog] = useState(false);
  const [dnaName, setDnaName] = useState(`Audience: ${searchTerm}`);
  const [dnaDescription, setDnaDescription] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const [activeView, setActiveView] = useState("stats");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const isMobile = useIsMobile();
  const resultsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const storedTerm = sessionStorage.getItem('searchTerm');
    if (storedTerm) {
      setSearchTerm(storedTerm);
      setShowResults(true);
    }
  }, []);
  useEffect(() => {
    if (location.state?.preserveSearch) {
      navigate('/', {
        replace: true,
        state: {}
      });
      const storedTerm = sessionStorage.getItem('searchTerm');
      if (storedTerm && !showResults) {
        setSearchTerm(storedTerm);
        setShowResults(true);
      }
    } else if (location.state?.resetSearch) {
      setSearchTerm("");
      setShowResults(false);
      sessionStorage.removeItem('searchTerm');
      navigate('/', {
        replace: true,
        state: {}
      });
    }
  }, [location.state, navigate, showResults]);
  const handleSearch = () => {
    if (searchTerm.trim()) {
      setIsAnimating(true);
      sessionStorage.setItem('searchTerm', searchTerm);
      setTimeout(() => {
        setShowResults(true);
        setIsAnimating(false);
      }, 800);
      console.log("Searching for:", searchTerm);
    }
  };
  const handleResetSearch = () => {
    setSearchTerm("");
    setShowResults(false);
    sessionStorage.removeItem('searchTerm');
  };
  const handleSaveDna = () => {
    console.log("Saving DNA with name:", dnaName);
    navigate("/chat");
  };
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  
  const renderContent = () => {
    if (!showResults) {
      return <div className={`flex flex-col items-center justify-center min-h-screen py-6 md:py-12 text-center px-4 h-full animate-fade-in ${isAnimating ? 'animate-fade-out' : ''}`}>
          <div className="absolute top-4 left-4">
            <Button variant="ghost" size="icon" className="h-8 w-8 p-0 rounded-full text-gray-400 hover:text-white" onClick={toggleSidebar}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
          
          <div className="mb-6 md:mb-8 relative w-40 h-40 flex items-center justify-center">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_0,transparent_70%)]"></div>
              <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            
            <div className="animate-orbit z-20">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
            </div>
            
            <div className="animate-orbit-reverse z-20" style={{
            animationDelay: "-3s"
          }}>
              <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Globe className="w-4 h-4 md:w-5 md:h-5 text-white" />
              </div>
            </div>
            
            <div className="animate-orbit z-20" style={{
            animationDelay: "-5s"
          }}>
              <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                <Search className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-xl md:text-2xl font-bold text-white mb-1.5 md:mb-2 tracking-tight">Find the Signals That Drive Bets</h1>
          <h2 className="text-base md:text-lg font-medium text-gray-300 mb-6 md:mb-8 max-w-2xl">Live audience psychographics, triggering moments, and activation tactics from real human data — built for iGaming marketers.</h2>
          
          <div className="relative w-full max-w-md mx-auto mb-4 md:mb-6">
            <input type="text" placeholder="Type a bettor profile, sport, or market…" className="w-full px-4 py-2.5 rounded-lg border border-gray-700 bg-gray-800/80 text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-500 text-xs md:text-sm shadow-lg transition-all duration-300 hover:bg-gray-800 focus:bg-gray-800" value={searchTerm} onChange={e => setSearchTerm(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSearch()} />
            <button className="absolute right-2 top-1.5 px-2.5 py-1 text-xs font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors" onClick={handleSearch}>
              Search
            </button>
          </div>
          
          <div className="space-y-3 text-gray-500 text-xs">
            <p>Try:</p>
            <div className="flex flex-wrap gap-1.5 justify-center max-w-2xl mx-auto">
              {["Underdog Football Bettors in Madrid", "Ego-Driven Bettors in São Paulo", "Casual Social Bettors in Toronto", "High-LTV Esports Bettors UK", "In-Play Bettors Post-Penalty Decisions"].map(suggestion => <button key={suggestion} className="px-2.5 py-1 bg-gray-800/90 hover:bg-gray-700 rounded-full transition-colors text-[10px] border border-gray-700/50 shadow-sm hover:shadow" onClick={() => {
              setSearchTerm(suggestion);
              setTimeout(() => handleSearch(), 100);
            }}>
                  {suggestion}
                </button>)}
            </div>
            <p className="text-center text-gray-500 text-[10px] mt-4 max-w-lg mx-auto">
              3 clicks to activation: 1) Search any bettor segment → 2) See live psychographics & moments → 3) Push to Meta, DV360, or Google Ads.
            </p>
          </div>
        </div>;
    }
    return null;
  };
  
  const renderVerticalFeed = () => {
    if (activeView === "stats") {
      return <div className="audience-profile space-y-6 pb-24 pt-4">
          {/* Desktop Layout: Psychographics side-by-side with robust grid */}
          <div className="lg:block hidden">
            {/* Psychographics Section - Custom Grid Layout */}
            <div className="psychographics-grid">
              {/* Radar Chart Card */}
              <GlassCard 
                title={
                  <div className="flex items-center gap-1.5">
                    <Radar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm md:text-base text-white">Psychographics</span>
                  </div>
                }
                className="RadarChart glass-card"
              >
                <PsychographicsTab isRadarOnly={true} />
              </GlassCard>
              
              {/* iGaming Traits Card */}
              <GlassCard 
                title={
                  <div className="flex items-center gap-1.5">
                    <ChartBar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm md:text-base text-white">Psychographics – iGaming Traits</span>
                  </div>
                }
                className="TraitsList glass-card"
              >
                <PsychographicsTab isDetailOnly={true} />
              </GlassCard>
            </div>
            
            {/* Demographics Section - 2x2 grid with improved spacing */}
            <div className="demographics-grid">
              <DemographicsTab isDesktopGrid={true} />
            </div>
          </div>
          
          {/* Mobile/Tablet Layout: Single-column stacked layout */}
          <div className="lg:hidden space-y-6">
            <PsychographicsTab />
            <DemographicsTab />
          </div>
        </div>;
    } else if (activeView === "responses") {
      return <div className="space-y-8 pb-24 max-w-7xl mx-auto px-6 lg:px-8">
          <SurveyTab />
        </div>;
    }
    return null;
  };
  
  return <TooltipProvider>
      <div className={`min-h-screen font-grotesk text-[13px] gradient-background max-w-[1440px] mx-auto`}>
        <MainSidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />
        
        <div className={`animate-fade-in`}>
          {showResults && <AppHeader searchTerm={searchTerm} currentTab="stats" onResetSearch={handleResetSearch} />}

          <div className={`p-3 md:p-6 pt-0 ${!showResults ? "mt-0" : ""}`}>
            {!showResults ? <div className="gradient-background min-h-screen flex items-center justify-center h-full">
                {renderContent()}
              </div> : <div className={`${isAnimating ? 'backdrop-blur-sm' : ''} transition-all duration-300`}>
                <ScrollArea className="h-[calc(100vh-180px)] pr-4 -mr-4">
                  {renderVerticalFeed()}
                </ScrollArea>
              </div>}
          </div>
          
          {showResults && <IconTabs currentTab="stats" />}
        </div>

        <Dialog open={showSaveDialog} onOpenChange={setShowSaveDialog}>
          <DialogContent className="bg-gray-900 border border-gray-800 text-gray-100 w-[95%] max-w-md mx-auto">
            <DialogHeader>
              <DialogTitle className="text-lg font-medium text-gray-100">Save Audience DNA</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <label htmlFor="dna-name" className="block text-sm font-medium text-gray-300">
                  Name your audience DNA
                </label>
                <Input id="dna-name" value={dnaName} onChange={e => setDnaName(e.target.value)} className="bg-gray-800 border-gray-700 focus:ring-blue-600 text-gray-100" placeholder="Enter a name for this audience DNA" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="dna-description" className="block text-sm font-medium text-gray-300">
                  Description (optional)
                </label>
                <Textarea id="dna-description" value={dnaDescription} onChange={e => setDnaDescription(e.target.value)} className="bg-gray-800 border-gray-700 focus:ring-blue-600 text-gray-100 min-h-[80px]" placeholder="Add a description for this audience DNA" />
              </div>
              
              <div className="pt-4 flex flex-col space-y-2">
                <button onClick={handleSaveDna} className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors text-sm font-medium">
                  Save & Chat with this Audience
                </button>
                <button onClick={() => setShowSaveDialog(false)} className="w-full px-4 py-2 bg-gray-800 hover:bg-gray-700 text-gray-300 rounded-lg transition-colors text-sm">
                  Cancel
                </button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>;
};

export default Index;
