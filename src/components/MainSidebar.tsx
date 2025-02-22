
import { useState, useEffect } from 'react';
import { Search, Users, MessageSquare, Settings, Target } from 'lucide-react';
import { MenuItem } from '@/types/sidebar';
import { useLocation } from 'react-router-dom';
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
        <div className="p-4 mt-14 md:mt-0">
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
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
