
import { useState } from 'react';
import {
  Search,
  Users,
  MessageSquare,
  Settings,
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
      isOpen ? "w-64" : "w-20"
    }`}>
      <div className="p-4">
        <div className="flex items-center justify-between mb-8">
          <img
            src="/placeholder.svg"
            alt="Logo"
            className={`transition-all duration-300 ${isOpen ? "w-32" : "w-12"}`}
          />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:bg-gray-800 transition-colors text-gray-400"
          >
            <svg
              className="w-4 h-4"
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

        <nav className="space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="flex items-center px-4 py-2.5 text-gray-300 rounded-full hover:bg-gray-800 transition-colors text-sm bg-gray-800/50"
            >
              {item.icon}
              <span
                className={`ml-3 transition-all duration-300 text-sm ${
                  isOpen ? "opacity-100" : "opacity-0 w-0"
                }`}
              >
                {item.title}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default MainSidebar;
