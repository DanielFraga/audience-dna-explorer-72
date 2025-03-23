
import { useState, useEffect } from 'react';
import { MessageSquare, Info, Settings, MessageCircle } from 'lucide-react';
import { MenuItem } from '@/types/sidebar';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { NavigationMenu } from './sidebar/NavigationMenu';
import { useIsMobile } from '@/hooks/use-mobile';

const MainSidebar = ({ isOpen = false, onToggle }: { isOpen?: boolean, onToggle?: () => void }) => {
  const [sidebarOpen, setSidebarOpen] = useState(isOpen);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();

  // Update local state when prop changes
  useEffect(() => {
    setSidebarOpen(isOpen);
  }, [isOpen]);

  const handleNavigation = (path: string) => {
    navigate(path, { state: { preserveSearch: true } });
    if (isMobile && onToggle) {
      onToggle();
    }
  };

  const menuItems: MenuItem[] = [
    {
      title: "About Us",
      icon: <Info className="w-4 h-4" />,
      path: "/survey-audience"
    },
    {
      title: "Chat",
      icon: <MessageSquare className="w-4 h-4" />,
      path: "/chat"
    },
    {
      title: "Feedback",
      icon: <MessageCircle className="w-4 h-4" />,
      path: "#"
    }
  ];

  if (!sidebarOpen) return null;

  return (
    <>
      <div 
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onToggle}
      />

      <div className="fixed left-0 top-0 h-full bg-gray-900 shadow-lg transition-all duration-300 z-50 w-64 md:w-52">
        <div className="p-4 flex flex-col h-full">
          <SidebarHeader 
            isOpen={true}
            isMobile={isMobile}
            onToggle={onToggle}
          />

          <div className="mt-8">
            <NavigationMenu 
              items={menuItems}
              isOpen={true}
              isMobile={isMobile}
              onMobileItemClick={onToggle}
            />
          </div>

          <div className="mt-auto pt-4">
            <button
              onClick={() => handleNavigation('/settings')}
              className={`flex items-center px-3 py-2 rounded-lg transition-colors text-[11px] w-full
                hover:bg-gray-800/50 ${location.pathname === '/settings' 
                  ? 'bg-blue-600/20 text-blue-400' 
                  : 'bg-gray-800/50 text-gray-300'}`}
            >
              <div className="flex items-center justify-center w-full">
                <Settings className="w-4 h-4" />
                <span className="ml-2.5">Settings</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainSidebar;
