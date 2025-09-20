import React from "react";
import DiagnosisCard from "../components/DiagnosisCard";
import WeatherWidget from "../components/WeatherWidget";
import { getDiagnosis, getWeather } from "../services/api";

function Result() {
  const diagnosis = getDiagnosis();
  const weather = getWeather();

  return (
    <div className="space-y-6">
      <DiagnosisCard diagnosis={diagnosis} />
      <WeatherWidget weather={weather} />
    </div>
  );
}

export default Result;
