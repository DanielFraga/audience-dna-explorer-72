
import { useState, useEffect } from 'react';
import { Search, Users, MessageSquare, Settings, FileText } from 'lucide-react';
import { MenuItem } from '@/types/sidebar';
import { useLocation, Link } from 'react-router-dom';
import { MobileMenuButton } from './sidebar/MobileMenuButton';
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

  const menuItems: MenuItem[] = [
    {
      title: "Explore Audience",
      icon: <Search className="w-4 h-4" />,
      path: "/"
    },
    {
      title: "Saved Audiences",
      icon: <Users className="w-4 h-4" />,
      path: "/saved-audiences"
    },
    {
      title: "Chat",
      icon: <MessageSquare className="w-4 h-4" />,
      path: "/chat"
    },
    {
      title: "Survey Settings",
      icon: <FileText className="w-4 h-4" />,
      path: "/survey-audience"
    }
  ];

  return (
    <>
      <MobileMenuButton isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />

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
        <div className="p-4 mt-14 md:mt-0 flex flex-col h-full">
          <SidebarHeader 
            isOpen={isOpen}
            isMobile={isMobile}
            onToggle={() => setIsOpen(!isOpen)}
          />

          <NavigationMenu 
            items={menuItems}
            isOpen={isOpen}
            isMobile={isMobile}
            onMobileItemClick={() => isMobile && setIsOpen(false)}
          />

          {(isOpen || isMobile) && location.pathname === '/chat' && (
            <AudienceSection
              selectedAudience={selectedAudience}
              onAudienceChange={setSelectedAudience}
            />
          )}

          {/* Settings Button */}
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
              <div className="flex items-center">
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
