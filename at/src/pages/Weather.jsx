import React, { useState, useEffect } from "react";
import { BreadcrumbNavigation } from "../components/Navigation";

function Weather() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState("Farm Location");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const currentWeather = {
    location: selectedLocation,
    temp: "24°C",
    condition: "Sunny",
    humidity: "65%",
    windSpeed: "12 km/h",
    pressure: "1013 hPa",
    uvIndex: "High",
    visibility: "10 km",
    irrigationTip: "Water crops in the morning for best results"
  };

  const hourlyForecast = [
    { time: "Now", temp: "24°C", condition: "Sunny", icon: "☀️" },
    { time: "2 PM", temp: "26°C", condition: "Sunny", icon: "☀️" },
    { time: "4 PM", temp: "25°C", condition: "Partly Cloudy", icon: "⛅" },
    { time: "6 PM", temp: "22°C", condition: "Cloudy", icon: "☁️" },
    { time: "8 PM", temp: "20°C", condition: "Cloudy", icon: "☁️" },
    { time: "10 PM", temp: "18°C", condition: "Light Rain", icon: "🌦️" }
  ];

  const weeklyForecast = [
    { day: "Today", high: "26°C", low: "18°C", condition: "Sunny", icon: "☀️", precipitation: "10%" },
    { day: "Tomorrow", high: "24°C", low: "16°C", condition: "Partly Cloudy", icon: "⛅", precipitation: "20%" },
    { day: "Wednesday", high: "22°C", low: "15°C", condition: "Cloudy", icon: "☁️", precipitation: "30%" },
    { day: "Thursday", high: "25°C", low: "17°C", condition: "Sunny", icon: "☀️", precipitation: "5%" },
    { day: "Friday", high: "27°C", low: "19°C", condition: "Sunny", icon: "☀️", precipitation: "0%" },
    { day: "Saturday", high: "23°C", low: "16°C", condition: "Light Rain", icon: "🌦️", precipitation: "60%" },
    { day: "Sunday", high: "21°C", low: "14°C", condition: "Cloudy", icon: "☁️", precipitation: "40%" }
  ];

  const locations = [
    "Farm Location",
    "North Field",
    "South Field",
    "Greenhouse A",
    "Greenhouse B"
  ];

  const getUVColor = (uvIndex) => {
    switch (uvIndex.toLowerCase()) {
      case 'low': return 'text-green-600 bg-green-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'high': return 'text-orange-600 bg-orange-100';
      case 'very high': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNavigation />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Weather{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Overview
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real-time weather conditions and forecasts to optimize your farming decisions.
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

        {/* Location Selector */}
        <div className="flex justify-center mb-8">
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-2 bg-white bg-opacity-90 backdrop-blur-sm border border-gray-200 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Current Weather */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-200 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-8xl mb-4">{hourlyForecast[0].icon}</div>
              <div className="text-5xl font-bold text-gray-800 mb-2">{currentWeather.temp}</div>
              <div className="text-xl text-gray-600 mb-4">{currentWeather.condition}</div>
              <div className="text-gray-500">{currentWeather.location}</div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Current Conditions</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl mb-2">💧</div>
                  <div className="text-sm text-gray-600">Humidity</div>
                  <div className="font-semibold text-gray-800">{currentWeather.humidity}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl mb-2">🌬️</div>
                  <div className="text-sm text-gray-600">Wind Speed</div>
                  <div className="font-semibold text-gray-800">{currentWeather.windSpeed}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl mb-2">📊</div>
                  <div className="text-sm text-gray-600">Pressure</div>
                  <div className="font-semibold text-gray-800">{currentWeather.pressure}</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl mb-2">👁️</div>
                  <div className="text-sm text-gray-600">Visibility</div>
                  <div className="font-semibold text-gray-800">{currentWeather.visibility}</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">💡</span>
                  <span className="font-semibold text-blue-800">Farming Tip</span>
                </div>
                <p className="text-blue-700">{currentWeather.irrigationTip}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>📅</span>
            Hourly Forecast
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {hourlyForecast.map((hour, index) => (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="font-medium text-gray-800 mb-2">{hour.time}</div>
                <div className="text-3xl mb-2">{hour.icon}</div>
                <div className="font-semibold text-gray-800">{hour.temp}</div>
                <div className="text-sm text-gray-600">{hour.condition}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Forecast */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>📆</span>
            7-Day Forecast
          </h3>
          <div className="space-y-4">
            {weeklyForecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 text-center">
                    <div className="font-medium text-gray-800">{day.day}</div>
                  </div>
                  <div className="text-3xl">{day.icon}</div>
                  <div className="font-medium text-gray-800">{day.condition}</div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-sm text-gray-600">
                    <span className="text-blue-600">💧</span> {day.precipitation}
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-gray-800">{day.high}</div>
                    <div className="text-sm text-gray-500">{day.low}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weather Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center gap-2">
              <span>⚠️</span>
              Weather Advisory
            </h3>
            <ul className="text-sm text-yellow-700 space-y-2">
              <li>• Light rain expected tonight - consider covering sensitive crops</li>
              <li>• UV index is high today - protect workers during peak hours</li>
              <li>• Wind speeds may increase in the afternoon</li>
            </ul>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h3 className="text-lg font-semibold text-green-800 mb-3 flex items-center gap-2">
              <span>✅</span>
              Optimal Conditions
            </h3>
            <ul className="text-sm text-green-700 space-y-2">
              <li>• Perfect temperature range for crop growth</li>
              <li>• Good humidity levels for most plants</li>
              <li>• Excellent visibility for field work</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
