import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Route definitions - centralized configuration
export const routes = [
  {
    path: "/",
    name: "Dashboard",
    displayName: "Dashboard",
    icon: "🏠",
    description: "FarmSense Dashboard Overview",
    color: "from-green-400 to-blue-500"
  },
  {
    path: "/analytics",
    name: "Analytics",
    displayName: "Analytics",
    icon: "📊",
    description: "Detailed analytics and insights",
    color: "from-purple-400 to-pink-500"
  },
  {
    path: "/weather",
    name: "Weather",
    displayName: "Weather",
    icon: "🌤️",
    description: "Weather conditions and forecasts",
    color: "from-blue-400 to-cyan-500"
  },
  {
    path: "/activity",
    name: "Activity",
    displayName: "Activity",
    icon: "📋",
    description: "System activities and logs",
    color: "from-yellow-400 to-orange-500"
  },
  {
    path: "/upload",
    name: "Upload",
    displayName: "Upload",
    icon: "📤",
    description: "Upload plant images for diagnosis",
    color: "from-indigo-400 to-purple-500"
  },
  {
    path: "/result",
    name: "Result",
    displayName: "Results",
    icon: "🔍",
    description: "View diagnosis results",
    color: "from-green-500 to-teal-500"
  },
  {
    path: "/about",
    name: "About",
    displayName: "About",
    icon: "ℹ️",
    description: "About FarmSense",
    color: "from-gray-400 to-gray-600"
  },
];

// Navigation hook - provides navigation utilities
export const useNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateTo = (path) => {
    navigate(path);
  };

  const navigateToHome = () => {
    navigateTo("/");
  };

  const navigateToUpload = () => {
    navigateTo("/upload");
  };

  const navigateToResult = () => {
    navigateTo("/result");
  };

  const navigateToAbout = () => {
    navigateTo("/about");
  };

  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  const getCurrentRoute = () => {
    return routes.find(route => route.path === location.pathname) || routes[0];
  };

  const getNavigationHistory = () => {
    // This could be enhanced to track actual navigation history
    return routes.filter(route => route.path !== location.pathname);
  };

  return {
    navigateTo,
    navigateToHome,
    navigateToUpload,
    navigateToResult,
    navigateToAbout,
    isActiveRoute,
    getCurrentRoute,
    getNavigationHistory,
    currentPath: location.pathname,
  };
};

// Enhanced Navigation component with modern styling
const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const {
    navigateTo,
    isActiveRoute,
    getCurrentRoute
  } = useNavigation();

  const currentRoute = getCurrentRoute();

  return (
    <>
      {/* Enhanced Navigation Bar */}
      <nav className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white shadow-lg backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Enhanced Brand/Logo */}
            <Link
              to="/"
              className="text-2xl font-bold hover:text-green-200 transition-all duration-300 flex items-center gap-3 group"
            >
              <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">🌱</span>
              <span className="bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent">
                FarmSense
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-2">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 transform hover:scale-105
                    ${isActiveRoute(route.path)
                      ? 'bg-white bg-opacity-20 text-white shadow-lg backdrop-blur-sm border border-white border-opacity-30'
                      : 'hover:bg-white hover:bg-opacity-10 hover:text-green-100'
                    }
                  `}
                  title={route.description}
                >
                  <span className="text-lg">{route.icon}</span>
                  <span className="font-medium">{route.displayName}</span>
                  {isActiveRoute(route.path) && (
                    <div className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></div>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center px-3 py-2 rounded-md text-green-200 hover:text-white hover:bg-green-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Current Page Indicator - Desktop */}
            <div className="hidden md:flex text-sm text-green-100 bg-white bg-opacity-10 px-3 py-2 rounded-full backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <span className="text-lg">{currentRoute.icon}</span>
                <span className="font-medium">{currentRoute.displayName}</span>
              </span>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300
                    ${isActiveRoute(route.path)
                      ? 'bg-white bg-opacity-20 text-white shadow-md'
                      : 'hover:bg-white hover:bg-opacity-10 text-green-100'
                    }
                  `}
                >
                  <span className="text-xl">{route.icon}</span>
                  <div>
                    <div className="font-medium">{route.displayName}</div>
                    <div className="text-xs text-green-200">{route.description}</div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Background Pattern - Fixed */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 opacity-50"></div>
        </div>
      </div>
    </>
  );
};

// Enhanced Quick Navigation Component
export const QuickNavigation = ({ className = "" }) => {
  const { navigateTo, isActiveRoute } = useNavigation();

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {routes.map((route) => (
        <button
          key={route.path}
          onClick={() => navigateTo(route.path)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 shadow-md
            ${isActiveRoute(route.path)
              ? `bg-gradient-to-r ${route.color} text-white shadow-lg`
              : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
            }
          `}
          title={route.description}
        >
          <span className="text-base">{route.icon}</span>
          <span className="font-medium">{route.displayName}</span>
        </button>
      ))}
    </div>
  );
};

// Enhanced Breadcrumb Navigation Component
export const BreadcrumbNavigation = () => {
  const { getCurrentRoute } = useNavigation();
  const currentRoute = getCurrentRoute();

  return (
    <div className="flex items-center space-x-3 text-sm text-gray-600 mb-6 bg-white bg-opacity-70 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
      <Link
        to="/"
        className="hover:text-green-600 transition-colors duration-200 flex items-center gap-1"
      >
        <span>🏠</span>
        <span>Home</span>
      </Link>
      <span className="text-gray-400">→</span>
      <span className="flex items-center gap-2 text-gray-800 font-medium">
        <span className="text-base">{currentRoute.icon}</span>
        <span>{currentRoute.displayName}</span>
      </span>
    </div>
  );
};

// Enhanced Navigation Menu Component - dropdown style
export const NavigationMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const { navigateTo, getCurrentRoute } = useNavigation();
  const currentRoute = getCurrentRoute();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${currentRoute.color} text-white rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
      >
        <span className="text-lg">{currentRoute.icon}</span>
        <span className="font-medium">{currentRoute.displayName}</span>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-200 rounded-xl shadow-xl z-50 overflow-hidden backdrop-blur-sm">
          {routes.map((route, index) => (
            <button
              key={route.path}
              onClick={() => {
                navigateTo(route.path);
                setIsOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-gradient-to-r hover:${route.color} hover:text-white transition-all duration-300 group ${
                index !== routes.length - 1 ? 'border-b border-gray-100' : ''
              }`}
            >
              <span className="text-xl group-hover:scale-110 transition-transform duration-300">{route.icon}</span>
              <div className="flex-1">
                <div className="font-medium text-gray-900 group-hover:text-white">{route.displayName}</div>
                <div className="text-xs text-gray-500 group-hover:text-gray-200">{route.description}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// New Feature: Navigation Stats Component
export const NavigationStats = () => {
  const { getCurrentRoute } = useNavigation();
  const currentRoute = getCurrentRoute();
  const [visitCount, setVisitCount] = React.useState(() => {
    // In a real app, this would come from a state management system or API
    return Math.floor(Math.random() * 100) + 1;
  });

  return (
    <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 bg-gradient-to-r ${currentRoute.color} rounded-xl flex items-center justify-center text-white text-xl`}>
            {currentRoute.icon}
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Current Page</h3>
            <p className="text-sm text-gray-600">{currentRoute.description}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-gray-800">{visitCount}</div>
          <div className="text-xs text-gray-500">Page visits</div>
        </div>
      </div>
    </div>
  );
};

// New Feature: Quick Actions Component
export const QuickActions = () => {
  const { navigateTo } = useNavigation();

  const quickActions = [
    {
      label: "Quick Scan",
      icon: "📸",
      action: () => navigateTo("/upload"),
      color: "from-green-400 to-blue-500"
    },
    {
      label: "View Analytics",
      icon: "📊",
      action: () => navigateTo("/analytics"),
      color: "from-purple-400 to-pink-500"
    },
    {
      label: "Check Weather",
      icon: "🌤️",
      action: () => navigateTo("/weather"),
      color: "from-blue-400 to-cyan-500"
    },
    {
      label: "View Activity",
      icon: "📋",
      action: () => navigateTo("/activity"),
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {quickActions.map((action, index) => (
        <button
          key={index}
          onClick={action.action}
          className={`bg-gradient-to-r ${action.color} text-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-3`}
        >
          <span className="text-2xl">{action.icon}</span>
          <span className="font-medium">{action.label}</span>
        </button>
      ))}
    </div>
  );
};

// Export the main Navigation component as default
export default Navigation;
