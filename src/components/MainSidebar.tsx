import { useState, useEffect } from 'react';
import { MessageSquare, Info, Settings, MessageCircle, X } from 'lucide-react';
import { MenuItem } from '@/types/sidebar';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { SidebarHeader } from './sidebar/SidebarHeader';
import { NavigationMenu } from './sidebar/NavigationMenu';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from './ui/button';
const MainSidebar = ({
  isOpen = false,
  onToggle
}: {
  isOpen?: boolean;
  onToggle?: () => void;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(isOpen);
  const mobileInfo = useIsMobile();
  const isMobile = mobileInfo.isMobile;
  const location = useLocation();
  const navigate = useNavigate();

  // Update local state when prop changes
  useEffect(() => {
    setSidebarOpen(isOpen);
  }, [isOpen]);
  const handleNavigation = (path: string) => {
    navigate(path, {
      state: {
        preserveSearch: true
      }
    });
    if (isMobile && onToggle) {
      onToggle();
    }
  };
  const menuItems: MenuItem[] = [{
    title: "About Us",
    icon: <Info className="w-4 h-4" />,
    path: "/about"
  }, {
    title: "Settings",
    icon: <Settings className="w-4 h-4" />,
    path: "/settings"
  }, {
    title: "Feedback",
    icon: <MessageCircle className="w-4 h-4" />,
    path: "#"
  }];
  if (!sidebarOpen) return null;
  return <>
      <div className="fixed inset-0 bg-black/50 z-40" onClick={onToggle} />

      <div className="fixed left-0 top-0 h-full bg-gray-900 shadow-lg transition-all duration-300 z-50 w-64 md:w-52">
        <div className="p-4 flex flex-col h-full">
          <div className="flex items-center justify-between">
            <SidebarHeader isOpen={true} isMobile={isMobile} onToggle={onToggle} />
            
            <Button variant="ghost" size="icon" onClick={onToggle} className="h-8 w-8 p-0 rounded-full text-gray-400 hover:text-white hover:bg-gray-800">
              <X className="h-4 w-4" />
            </Button>
          </div>

          <div className="mt-8">
            <NavigationMenu items={menuItems} isOpen={true} isMobile={isMobile} onMobileItemClick={onToggle} />
          </div>

          <div className="mt-auto pt-4">
            
          </div>
        </div>
      </div>
    </>;
};
export default MainSidebar;