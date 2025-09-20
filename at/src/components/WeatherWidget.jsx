import React from "react";

function WeatherWidget({ weather }) {
  return (
    <div className="p-4 bg-blue-100 rounded-lg shadow">
      <h3 className="font-semibold text-lg">Weather Info</h3>
      <p><b>Location:</b> {weather.location}</p>
      <p><b>Temperature:</b> {weather.temp}</p>
      <p><b>Condition:</b> {weather.condition}</p>
      <p className="mt-2 text-blue-700"><b>Irrigation Tip:</b> {weather.irrigationTip}</p>
    </div>
  );
}

export default WeatherWidget;
