
import { useState, useEffect } from 'react';
import { Search, MessageSquare, Info, Settings } from 'lucide-react';
import { MenuItem } from '@/types/sidebar';
import { useLocation, Link } from 'react-router-dom';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { NavigationMenu } from './sidebar/NavigationMenu';
import { AudienceSection } from './sidebar/AudienceSection';

const MainSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedAudience, setSelectedAudience] = useState("holiday");
  const location = useLocation();

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

  useEffect(() => {
    if (!isMobile) {
      document.body.classList.toggle('sidebar-collapsed', !isOpen);
    }
    return () => {
      document.body.classList.remove('sidebar-collapsed');
    };
  }, [isOpen, isMobile]);

  const menuItems: MenuItem[] = [
    {
      title: "Explore Audience",
      icon: <Search className="w-4 h-4" />,
      path: "/"
    },
    {
      title: "Chat",
      icon: <MessageSquare className="w-4 h-4" />,
      path: "/chat"
    },
    {
      title: "About Us",
      icon: <Info className="w-4 h-4" />,
      path: "/survey-audience"
    }
  ];

  return (
    <>
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div 
        className={`fixed left-0 top-0 h-full bg-gray-900 shadow-lg transition-all duration-300 z-50
          ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}
          ${isOpen ? "w-64 md:w-52" : "md:w-16"}
        `}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="hidden md:flex absolute -right-3 top-3 bg-gray-900 rounded-r-lg p-1 cursor-pointer shadow-md"
        >
          <svg
            className="w-3 h-3 text-gray-400"
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

        <div className="p-4 flex flex-col h-full">
          <SidebarHeader 
            isOpen={isOpen}
            isMobile={isMobile}
            onToggle={() => setIsOpen(!isOpen)}
          />

          <div className="mt-8">
            <NavigationMenu 
              items={menuItems}
              isOpen={isOpen}
              isMobile={isMobile}
              onMobileItemClick={() => isMobile && setIsOpen(false)}
            />
          </div>

          {(isOpen || isMobile) && location.pathname === '/chat' && (
            <AudienceSection
              selectedAudience={selectedAudience}
              onAudienceChange={setSelectedAudience}
            />
          )}

          <div className="mt-auto pt-4">
            <Link
              to="/settings"
              className={`flex items-center px-3 py-2 rounded-lg transition-colors text-[11px]
                hover:bg-gray-800/50 ${location.pathname === '/settings' 
                  ? 'bg-blue-600/20 text-blue-400' 
                  : 'bg-gray-800/50 text-gray-300'}`}
              onClick={() => isMobile && setIsOpen(false)}
              title={!isOpen && !isMobile ? "Settings" : undefined}
            >
              <div className="flex items-center justify-center w-full">
                <Settings className="w-4 h-4" />
                {(isOpen || isMobile) && (
                  <span className="ml-2.5">Settings</span>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
