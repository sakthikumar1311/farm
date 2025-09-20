import React, { useState } from "react";
import { BreadcrumbNavigation } from "../components/Navigation";

function Analytics() {
  const [selectedPeriod, setSelectedPeriod] = useState("7d");

  const stats = [
    { label: "Crops Monitored", value: "150+", icon: "🌾", color: "from-green-400 to-green-600", trend: "+12%" },
    { label: "Diseases Detected", value: "25", icon: "🔬", color: "from-blue-400 to-blue-600", trend: "+5%" },
    { label: "Success Rate", value: "94%", icon: "✅", color: "from-purple-400 to-purple-600", trend: "+2%" },
    { label: "Farmers Helped", value: "500+", icon: "👥", color: "from-orange-400 to-orange-600", trend: "+8%" }
  ];

  const monthlyData = [
    { month: "Jan", crops: 120, diseases: 18, success: 92 },
    { month: "Feb", crops: 135, diseases: 22, success: 93 },
    { month: "Mar", crops: 148, diseases: 25, success: 94 },
    { month: "Apr", crops: 152, diseases: 23, success: 95 },
    { month: "May", crops: 145, diseases: 21, success: 94 },
    { month: "Jun", crops: 150, diseases: 25, success: 94 }
  ];

  const diseaseTypes = [
    { name: "Early Blight", count: 8, percentage: 32, color: "bg-red-500" },
    { name: "Powdery Mildew", count: 6, percentage: 24, color: "bg-yellow-500" },
    { name: "Bacterial Spot", count: 5, percentage: 20, color: "bg-blue-500" },
    { name: "Nutrient Deficiency", count: 4, percentage: 16, color: "bg-green-500" },
    { name: "Other", count: 2, percentage: 8, color: "bg-purple-500" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNavigation />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            FarmSense{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Analytics
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Detailed insights and performance metrics for your farming operations.
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-2 shadow-lg border border-gray-200">
            {["7d", "30d", "90d", "1y"].map((period) => (
              <button
                key={period}
                onClick={() => setSelectedPeriod(period)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  selectedPeriod === period
                    ? "bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {period}
              </button>
            ))}
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center text-2xl`}>
                  {stat.icon}
                </div>
                <span className="text-green-600 text-sm font-medium">{stat.trend}</span>
              </div>
              <div>
                <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Monthly Trends */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>📈</span>
              Monthly Trends
            </h3>
            <div className="space-y-4">
              {monthlyData.map((data, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {data.month.slice(0, 1)}
                    </div>
                    <span className="font-medium text-gray-800">{data.month}</span>
                  </div>
                  <div className="flex gap-6 text-sm">
                    <div className="text-center">
                      <div className="text-green-600 font-semibold">{data.crops}</div>
                      <div className="text-gray-500">Crops</div>
                    </div>
                    <div className="text-center">
                      <div className="text-red-600 font-semibold">{data.diseases}</div>
                      <div className="text-gray-500">Diseases</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-semibold">{data.success}%</div>
                      <div className="text-gray-500">Success</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Disease Distribution */}
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
              <span>🔬</span>
              Disease Distribution
            </h3>
            <div className="space-y-4">
              {diseaseTypes.map((disease, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">{disease.name}</span>
                    <span className="text-sm text-gray-600">{disease.count} cases ({disease.percentage}%)</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`${disease.color} h-3 rounded-full transition-all duration-500`}
                      style={{ width: `${disease.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                📈
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Peak Performance</h3>
              <p className="text-gray-600 text-sm">
                April showed the highest success rate at 95% with optimal crop monitoring coverage.
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ⚠️
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Areas for Improvement</h3>
              <p className="text-gray-600 text-sm">
                Early blight detection increased by 15%. Focus on preventive measures for better results.
              </p>
            </div>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Recommendations</h3>
              <p className="text-gray-600 text-sm">
                Increase monitoring frequency during peak growing seasons for better disease prevention.
              </p>
            </div>
          </div>
        </div>

        {/* Export Options */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Export Analytics</h3>
          <p className="text-gray-600 mb-6">Download detailed reports for further analysis</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              📊 Export PDF Report
            </button>
            <button className="px-6 py-3 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              📈 Export CSV Data
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
