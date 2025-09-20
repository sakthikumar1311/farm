import React, { useState } from "react";
import { BreadcrumbNavigation } from "../components/Navigation";

function Activity() {
  const [filter, setFilter] = useState("all");

  const activities = [
    {
      id: 1,
      action: "Disease detected in tomato crop",
      time: "2 hours ago",
      type: "warning",
      details: "Early blight detected in Field A, Section 3. Confidence: 87%",
      user: "AI System",
      category: "diagnosis"
    },
    {
      id: 2,
      action: "Weather forecast updated",
      time: "4 hours ago",
      type: "info",
      details: "Light rain expected tonight at 10 PM. Temperature: 18°C",
      user: "Weather Service",
      category: "weather"
    },
    {
      id: 3,
      action: "New crop added to monitoring",
      time: "1 day ago",
      type: "success",
      details: "Lettuce crop in Greenhouse B added successfully",
      user: "John Farmer",
      category: "monitoring"
    },
    {
      id: 4,
      action: "System maintenance completed",
      time: "2 days ago",
      type: "info",
      details: "Database optimization and AI model updates completed",
      user: "System Admin",
      category: "system"
    },
    {
      id: 5,
      action: "Treatment recommendation generated",
      time: "2 days ago",
      type: "success",
      details: "Copper-based fungicide recommended for affected tomato plants",
      user: "AI System",
      category: "treatment"
    },
    {
      id: 6,
      action: "User login detected",
      time: "3 days ago",
      type: "info",
      details: "Successful login from mobile device",
      user: "Sarah Chen",
      category: "user"
    },
    {
      id: 7,
      action: "Crop health alert",
      time: "3 days ago",
      type: "warning",
      details: "Nutrient deficiency detected in corn field. Action required.",
      user: "AI System",
      category: "diagnosis"
    },
    {
      id: 8,
      action: "Data export completed",
      time: "4 days ago",
      type: "success",
      details: "Monthly analytics report exported successfully",
      user: "Michael Rodriguez",
      category: "export"
    }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'warning': return '⚠️';
      case 'success': return '✅';
      case 'info': return 'ℹ️';
      case 'error': return '❌';
      default: return '📝';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'diagnosis': return '🔬';
      case 'weather': return '🌤️';
      case 'monitoring': return '👁️';
      case 'system': return '⚙️';
      case 'treatment': return '💊';
      case 'user': return '👤';
      case 'export': return '📊';
      default: return '📋';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'warning': return 'border-l-yellow-500 bg-yellow-50';
      case 'success': return 'border-l-green-500 bg-green-50';
      case 'info': return 'border-l-blue-500 bg-blue-50';
      case 'error': return 'border-l-red-500 bg-red-50';
      default: return 'border-l-gray-500 bg-gray-50';
    }
  };

  const filteredActivities = filter === "all"
    ? activities
    : activities.filter(activity => activity.category === filter);

  const categories = [
    { key: "all", label: "All Activities", icon: "📋" },
    { key: "diagnosis", label: "Diagnosis", icon: "🔬" },
    { key: "weather", label: "Weather", icon: "🌤️" },
    { key: "monitoring", label: "Monitoring", icon: "👁️" },
    { key: "treatment", label: "Treatment", icon: "💊" },
    { key: "system", label: "System", icon: "⚙️" },
    { key: "user", label: "User", icon: "👤" },
    { key: "export", label: "Export", icon: "📊" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNavigation />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Activity{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Log
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track all system activities, user actions, and automated processes in real-time.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setFilter(category.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                filter === category.key
                  ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                  : "bg-white bg-opacity-90 backdrop-blur-sm text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Activity Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-gray-800">{activities.length}</div>
            <div className="text-gray-600">Total Activities</div>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-yellow-600">
              {activities.filter(a => a.type === 'warning').length}
            </div>
            <div className="text-gray-600">Warnings</div>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-green-600">
              {activities.filter(a => a.type === 'success').length}
            </div>
            <div className="text-gray-600">Success</div>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="text-3xl font-bold text-blue-600">
              {activities.filter(a => a.type === 'info').length}
            </div>
            <div className="text-gray-600">Info</div>
          </div>
        </div>

        {/* Activity List */}
        <div className="space-y-4 mb-8">
          {filteredActivities.map((activity) => (
            <div
              key={activity.id}
              className={`bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border-l-4 transition-all duration-300 hover:shadow-xl ${getTypeColor(activity.type)}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-xl">
                    {getActivityIcon(activity.type)}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{getCategoryIcon(activity.category)}</span>
                    <h3 className="text-lg font-semibold text-gray-800">{activity.action}</h3>
                  </div>
                  <p className="text-gray-600 mb-3">{activity.details}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-1">
                        <span>👤</span>
                        {activity.user}
                      </span>
                      <span className="flex items-center gap-1">
                        <span>🕐</span>
                        {activity.time}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      activity.type === 'warning' ? 'bg-yellow-100 text-yellow-800' :
                      activity.type === 'success' ? 'bg-green-100 text-green-800' :
                      activity.type === 'info' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {activity.type.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Export Options */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Export Activity Log</h3>
          <p className="text-gray-600 mb-6">Download activity logs for compliance and analysis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              📄 Export PDF Report
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              📋 Export CSV Data
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              📊 Export JSON Data
            </button>
          </div>
        </div>

        {/* Real-time Updates */}
        <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">🔄</span>
            <h3 className="text-lg font-semibold text-blue-800">Real-time Updates</h3>
          </div>
          <p className="text-blue-700 text-sm">
            Activity log updates automatically. New activities will appear here as they occur.
            The system tracks all user actions, AI decisions, and system events for complete transparency.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Activity;
