import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { BreadcrumbNavigation } from "../components/Navigation";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading results
    const timer = setTimeout(() => {
      if (location.state?.diagnosisResults) {
        setResults(location.state.diagnosisResults);
      } else {
        // Mock data if no results provided
        setResults([
          {
            fileName: "tomato_plant_1.jpg",
            diagnosis: {
              name: "Early Blight",
              confidence: 87,
              action: "Apply fungicide treatment immediately",
              severity: "Medium",
              treatment: "Use copper-based fungicide every 7-10 days"
            },
            timestamp: new Date().toISOString()
          },
          {
            fileName: "lettuce_crop_2.jpg",
            diagnosis: {
              name: "Healthy",
              confidence: 95,
              action: "Continue regular care and monitoring",
              severity: "None",
              treatment: "Maintain current watering and fertilization schedule"
            },
            timestamp: new Date().toISOString()
          }
        ]);
      }
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location.state]);

  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'high': return 'text-red-600 bg-red-100';
      case 'medium': return 'text-yellow-600 bg-yellow-100';
      case 'low': return 'text-blue-600 bg-blue-100';
      case 'none': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 90) return 'text-green-600';
    if (confidence >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-green-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Analyzing Results...</h2>
          <p className="text-gray-600">Processing your crop images with AI</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNavigation />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Diagnosis Results
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are the AI-powered analysis results for your uploaded crop images.
          </p>
        </div>

        {/* Results Summary */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-800">{results.length}</div>
              <div className="text-gray-600">Images Analyzed</div>
            </div>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">
                {results.filter(r => r.diagnosis.name === 'Healthy').length}
              </div>
              <div className="text-gray-600">Healthy Crops</div>
            </div>
          </div>
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">
                {results.filter(r => r.diagnosis.name !== 'Healthy').length}
              </div>
              <div className="text-gray-600">Need Attention</div>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="space-y-6">
          {results.map((result, index) => (
            <div key={index} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Image Section */}
                <div className="lg:w-1/3">
                  <div className="bg-gray-100 rounded-xl p-4">
                    <div className="bg-gray-200 rounded-lg h-48 flex items-center justify-center text-gray-500">
                      📷 {result.fileName}
                    </div>
                  </div>
                </div>

                {/* Diagnosis Details */}
                <div className="lg:w-2/3 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-gray-800">{result.fileName}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getSeverityColor(result.diagnosis.severity)}`}>
                      {result.diagnosis.severity} Risk
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Diagnosis</h4>
                      <p className="text-lg text-gray-800">{result.diagnosis.name}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Confidence</h4>
                      <p className={`text-lg font-medium ${getConfidenceColor(result.diagnosis.confidence)}`}>
                        {result.diagnosis.confidence}%
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Recommended Action</h4>
                    <p className="text-gray-800 bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
                      {result.diagnosis.action}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-700 mb-2">Treatment Plan</h4>
                    <p className="text-gray-800 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
                      {result.diagnosis.treatment}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span>📅 Analyzed: {new Date(result.timestamp).toLocaleDateString()}</span>
                    <span>🕐 {new Date(result.timestamp).toLocaleTimeString()}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => navigate("/upload")}
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            📤 Analyze More Images
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🏠 Back to Home
          </button>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <h3 className="text-lg font-semibold text-yellow-800 mb-3 flex items-center gap-2">
            <span>💡</span>
            Important Notes
          </h3>
          <ul className="text-sm text-yellow-700 space-y-2">
            <li>• These results are AI-generated recommendations and should be verified by agricultural experts</li>
            <li>• Treatment effectiveness may vary based on local conditions and crop variety</li>
            <li>• For critical crop health issues, consult with local agricultural extension services</li>
            <li>• Regular monitoring and early detection are key to successful crop management</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Result;
