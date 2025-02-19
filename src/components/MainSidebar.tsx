
import { useState } from 'react';
import {
  Search,
  Users,
  MessageSquare,
  Settings,
  Box,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const MainSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

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
    <div className={`fixed left-0 top-0 h-full bg-gray-900 shadow-lg transition-all duration-300 ${
      isOpen ? "w-52" : "w-16"
    }`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-2">
            <Box className="w-4 h-4 text-blue-500" />
            {isOpen && (
              <span className="text-gray-100 font-medium text-xs">
                CUBULAR
              </span>
            )}
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-full hover:bg-gray-800 transition-colors text-gray-400"
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
              title={!isOpen ? item.title : undefined}
            >
              {item.icon}
              {isOpen && (
                <span className="ml-2.5">
                  {item.title}
                </span>
              )}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainSidebar;
