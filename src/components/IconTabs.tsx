
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, TabsList, IconTabsTrigger } from "@/components/ui/tabs";
import { BarChart3, MessageSquare, ClipboardList } from "lucide-react";

interface IconTabsProps {
  currentTab: "stats" | "responses" | "chat";
  inlineTop?: boolean; // When true, render inline (for header). Otherwise, render mobile bottom bar.
}

const IconTabs = ({ currentTab, inlineTop = false }: IconTabsProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleTabChange = (value: string) => {
    // Always preserve search when navigating between tabs
    if (value === "stats") {
      navigate("/", {
        state: { preserveSearch: true },
      });
    } else if (value === "responses") {
      navigate("/survey-audience", {
        state: { preserveSearch: true },
      });
    } else if (value === "chat") {
      navigate("/chat", {
        state: { preserveSearch: true },
      });
    }
  };

  return (
    <>
      {/* Inline Top Tabs for desktop/tablet (placed inside AppHeader) */}
      {inlineTop && (
        <div className="hidden md:block">
          <Tabs value={currentTab} className="w-full" onValueChange={handleTabChange}>
            <TabsList className="bg-transparent border-b border-gray-800/60 px-0 w-full h-[36px] justify-start gap-6">
              <IconTabsTrigger
                value="stats"
                aria-label="Audience Profile"
                className="h-9 px-6 flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white text-gray-400 data-[state=active]:text-white"
              >
                <span className="text-sm font-medium">Audience Profile</span>
              </IconTabsTrigger>

              <IconTabsTrigger
                value="responses"
                aria-label="Targeting & Activation"
                className="h-9 px-6 flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white text-gray-400 data-[state=active]:text-white"
              >
                <span className="text-sm font-medium">Targeting & Activation</span>
              </IconTabsTrigger>

              <IconTabsTrigger
                value="chat"
                aria-label="Chat"
                className="h-9 px-6 flex items-center gap-2 rounded-none border-b-2 border-transparent data-[state=active]:border-white text-gray-400 data-[state=active]:text-white"
              >
                <span className="text-sm font-medium">Chat</span>
              </IconTabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      )}

      {/* Mobile: Bottom tabs (original design) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-gray-950 border-t border-gray-800/60 pb-safe">
        <div className="w-full max-w-lg mx-auto">
          <Tabs value={currentTab} className="w-full" onValueChange={handleTabChange}>
            <TabsList className="bg-gray-950 border border-gray-800/60 relative px-1 w-full h-[60px]">
              {/* Toggle button that moves behind active tab */}
              <div
                className="absolute bg-gray-800 rounded-md transition-all duration-300 h-[48px] top-[6px]"
                style={{
                  left:
                    currentTab === "stats"
                      ? "16.67%"
                      : currentTab === "responses"
                      ? "50%"
                      : "83.33%",
                  width: "70px",
                  transform: "translateX(-50%)",
                }}
              />

              <div className="tab-container flex w-full justify-around">
                <div className="tab-section">
                  <IconTabsTrigger
                    value="stats"
                    aria-label="Audience Profile"
                    className={`z-10 h-12 w-16 flex flex-col items-center justify-center ${currentTab === "stats" ? "z-20 scale-110 transition-transform" : ""}`}
                  >
                    <BarChart3 className={`h-5 w-5 mb-1 ${currentTab === "stats" ? "text-white" : ""}`} />
                    <span className={`text-xs font-medium ${currentTab === "stats" ? "text-white" : ""}`}>Audience Profile</span>
                  </IconTabsTrigger>
                </div>

                <div className="tab-section">
                  <IconTabsTrigger
                    value="responses"
                    aria-label="Targeting & Activation"
                    className={`z-10 h-12 w-16 flex flex-col items-center justify-center ${currentTab === "responses" ? "z-20 scale-110 transition-transform" : ""}`}
                  >
                    <ClipboardList className={`h-5 w-5 mb-1 ${currentTab === "responses" ? "text-white" : ""}`} />
                    <span className={`text-xs font-medium ${currentTab === "responses" ? "text-white" : ""}`}>Targeting & Activation</span>
                  </IconTabsTrigger>
                </div>

                <div className="tab-section">
                  <IconTabsTrigger
                    value="chat"
                    aria-label="Chat"
                    className={`z-10 h-12 w-16 flex flex-col items-center justify-center ${currentTab === "chat" ? "z-20 scale-110 transition-transform" : ""}`}
                  >
                    <MessageSquare className={`h-5 w-5 mb-1 ${currentTab === "chat" ? "text-white" : ""}`} />
                    <span className={`text-xs font-medium ${currentTab === "chat" ? "text-white" : ""}`}>Chat</span>
                  </IconTabsTrigger>
                </div>
              </div>
            </TabsList>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default IconTabs;
