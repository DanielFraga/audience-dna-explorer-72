
import { Box } from 'lucide-react';

interface SidebarHeaderProps {
  isOpen: boolean;
  isMobile: boolean;
  onToggle: () => void;
}

export const SidebarHeader = ({ isOpen, isMobile, onToggle }: SidebarHeaderProps) => {
  return (
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
        onClick={onToggle}
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
  );
};
