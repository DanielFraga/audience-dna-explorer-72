
import { Link } from 'react-router-dom';
import { MenuItem } from '@/types/sidebar';
import { useLocation } from 'react-router-dom';

interface NavigationMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  isMobile: boolean;
  onMobileItemClick: () => void;
}

export const NavigationMenu = ({ items, isOpen, isMobile, onMobileItemClick }: NavigationMenuProps) => {
  const location = useLocation();
  
  return (
    <nav className="space-y-1.5">
      {items.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.title}
            to={item.path}
            className={`flex items-center px-3 py-2 text-gray-300 rounded-lg transition-colors text-[11px]
              ${isActive 
                ? 'bg-gray-800 text-white' 
                : 'hover:bg-gray-800/50 bg-gray-800/50'
              }`}
            title={!isOpen && !isMobile ? item.title : undefined}
            onClick={() => isMobile && onMobileItemClick()}
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
        )
      })}
    </nav>
  );
};
