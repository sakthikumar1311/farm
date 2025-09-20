import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { QuickActions, BreadcrumbNavigation } from "../components/Navigation";

function Dashboard() {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const stats = [
    { label: "Crops Monitored", value: "150+", icon: "🌾", color: "from-green-400 to-green-600" },
    { label: "Diseases Detected", value: "25", icon: "🔬", color: "from-blue-400 to-blue-600" },
    { label: "Success Rate", value: "94%", icon: "✅", color: "from-purple-400 to-purple-600" },
    { label: "Farmers Helped", value: "500+", icon: "👥", color: "from-orange-400 to-orange-600" }
  ];

  const recentActivities = [
    { action: "Disease detected in tomato crop", time: "2 hours ago", type: "warning" },
    { action: "Weather forecast updated", time: "4 hours ago", type: "info" },
    { action: "New crop added to monitoring", time: "1 day ago", type: "success" },
    { action: "System maintenance completed", time: "2 days ago", type: "info" }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'warning': return '⚠️';
      case 'success': return '✅';
      case 'info': return 'ℹ️';
      default: return '📝';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNavigation />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            FarmSense{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Dashboard
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your comprehensive farming intelligence center. Monitor crop health, track performance,
            and make data-driven decisions for optimal yields.
          </p>

          {/* Current Time Display */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white bg-opacity-80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-200">
              <span className="text-2xl">🕐</span>
              <span className="text-gray-700 font-medium">
                {currentTime.toLocaleDateString()} - {currentTime.toLocaleTimeString()}
              </span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mb-12">
          <QuickActions />
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
                </div>
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  {stat.icon}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>📊</span>
              Recent Activities
            </h3>
            <div className="space-y-4">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <span className="text-xl">{getActivityIcon(activity.type)}</span>
                  <div className="flex-1">
                    <p className="text-gray-800 font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-500">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <span>🔗</span>
              Quick Access
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => navigate("/analytics")}
                className="p-4 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl hover:from-green-500 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className="text-2xl mb-2">📈</div>
                <div className="font-medium">View Analytics</div>
              </button>
              <button
                onClick={() => navigate("/weather")}
                className="p-4 bg-gradient-to-r from-blue-400 to-purple-500 text-white rounded-xl hover:from-blue-500 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className="text-2xl mb-2">🌤️</div>
                <div className="font-medium">Weather Info</div>
              </button>
              <button
                onClick={() => navigate("/activity")}
                className="p-4 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-xl hover:from-purple-500 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className="text-2xl mb-2">📋</div>
                <div className="font-medium">Activity Log</div>
              </button>
              <button
                onClick={() => navigate("/upload")}
                className="p-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white rounded-xl hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <div className="text-2xl mb-2">📤</div>
                <div className="font-medium">Upload Images</div>
              </button>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6 opacity-90">
              Upload your first crop image and get instant diagnosis results
            </p>
            <button
              onClick={() => navigate("/upload")}
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              📤 Start Diagnosis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
