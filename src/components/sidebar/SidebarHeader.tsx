
import { Box } from 'lucide-react';

interface SidebarHeaderProps {
  isOpen: boolean;
  isMobile: boolean;
  onToggle: () => void;
}

export const SidebarHeader = ({ isOpen, isMobile, onToggle }: SidebarHeaderProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center h-8 px-3">
        <Box className="w-4 h-4 text-blue-500" />
        {(isOpen || isMobile) && (
          <span className="text-gray-100 font-medium text-xs ml-2.5">
            CUBULAR
          </span>
        )}
      </div>
    </div>
  );
};
