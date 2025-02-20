
import { useState, useEffect } from 'react';
import {
  Search,
  Users,
  MessageSquare,
  Settings,
  Box,
  Menu,
  X,
  ChevronDown,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const MainSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [showAudienceDetails, setShowAudienceDetails] = useState(true);
  const [selectedAudience, setSelectedAudience] = useState("holiday");

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      }
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const menuItems = [
    {
      title: "Search by Audience DNA",
      icon: <Search className="w-4 h-4" />,
      path: "/"
    },
    {
      title: "My Saved Audiences",
      icon: <Users className="w-4 h-4" />,
      path: "/saved-audiences"
    },
    {
      title: "Chat with Audience",
      icon: <MessageSquare className="w-4 h-4" />,
      path: "/chat"
    },
    {
      title: "Survey & Audience Settings",
      icon: <Settings className="w-4 h-4" />,
      path: "/settings"
    }
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-gray-900 rounded-lg text-gray-400 hover:text-white"
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Menu className="w-5 h-5" />
        )}
      </button>

      {/* Mobile Backdrop */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed left-0 top-0 h-full bg-gray-900 shadow-lg transition-all duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isOpen ? "w-64 md:w-52" : "md:w-16"}
        `}
      >
        <div className="p-4 mt-14 md:mt-0">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <Box className="w-4 h-4 text-blue-500" />
              {(isOpen || isMobile) && (
                <span className="text-gray-100 font-medium text-xs">
                  CUBULAR
                </span>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="hidden md:block p-1.5 rounded-full hover:bg-gray-800 transition-colors text-gray-400"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 5l7 7-7 7M5 5l7 7-7 7"
                  />
                )}
              </svg>
            </button>
          </div>

          <nav className="space-y-1.5">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="flex items-center px-3 py-2 text-gray-300 rounded-lg hover:bg-gray-800 transition-colors text-[11px] bg-gray-800/50"
                title={!isOpen && !isMobile ? item.title : undefined}
                onClick={() => isMobile && setIsOpen(false)}
              >
                <div className="flex items-center">
                  {item.icon}
                  {(isOpen || isMobile) && (
                    <span className="ml-2.5">
                      {item.title}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </nav>

          {/* Audience Overview Section */}
          {(isOpen || isMobile) && (
            <div className="mt-6 pt-6 border-t border-gray-800">
              {/* Audience Selection Dropdown */}
              <div className="mb-4">
                <div className="text-[11px] font-medium text-gray-400 mb-2">Audience Selection</div>
                <Select value={selectedAudience} onValueChange={setSelectedAudience}>
                  <SelectTrigger className="w-full bg-gray-800 border-gray-700 text-[11px] text-gray-300">
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-700">
                    <SelectItem value="holiday" className="text-[11px] text-gray-300">holiday</SelectItem>
                    <SelectItem value="all" className="text-[11px] text-gray-300">all</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Collapsible
                open={showAudienceDetails}
                onOpenChange={setShowAudienceDetails}
                className="space-y-2"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full text-[11px] font-medium text-gray-400 hover:text-gray-300">
                  Audience Overview
                  <ChevronDown
                    className={`w-3 h-3 transition-transform ${
                      showAudienceDetails ? "transform rotate-180" : ""
                    }`}
                  />
                </CollapsibleTrigger>
                <CollapsibleContent className="space-y-4">
                  {/* Mini Psychographic Profile */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-gray-500">Key Traits</div>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-1.5 py-0.5 bg-[#0EA5E9] text-white rounded text-[9px]">Tech-savvy</span>
                      <span className="px-1.5 py-0.5 bg-[#ea384c] text-white rounded text-[9px]">Quality-focused</span>
                      <span className="px-1.5 py-0.5 bg-[#F2FCE2] text-gray-700 rounded text-[9px]">Early Adopter</span>
                    </div>
                  </div>

                  {/* Interests */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-gray-500">Interests</div>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Technology</span>
                      <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Innovation</span>
                      <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Digital</span>
                    </div>
                  </div>

                  {/* Do's and Don'ts */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-gray-500">Communication</div>
                    <div className="space-y-2">
                      <div className="space-y-1">
                        <div className="text-[9px] text-green-400">Do</div>
                        <div className="text-[9px] text-gray-400">Emphasize digital solutions</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-[9px] text-red-400">Don't</div>
                        <div className="text-[9px] text-gray-400">Focus on traditional only</div>
                      </div>
                    </div>
                  </div>

                  {/* Key Word Sets */}
                  <div className="space-y-2">
                    <div className="text-[10px] text-gray-500">Key Terms</div>
                    <div className="flex flex-wrap gap-1">
                      <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Digital-first</span>
                      <span className="px-1.5 py-0.5 bg-gray-800 text-gray-300 rounded text-[9px]">Innovation</span>
                    </div>
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
