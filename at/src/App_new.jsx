import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Weather from "./pages/Weather";
import Activity from "./pages/Activity";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import Result from "./pages/Result";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/result" element={<Result />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
