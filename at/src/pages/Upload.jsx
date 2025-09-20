import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ImageUpload from "../components/ImageUpload";
import { BreadcrumbNavigation } from "../components/Navigation";

function Upload() {
  const [files, setFiles] = useState([]);
  const [uploadStatus, setUploadStatus] = useState('idle'); // idle, uploading, success, error
  const navigate = useNavigate();

  const handleUpload = (uploadedFiles) => {
    setFiles(uploadedFiles);
    setUploadStatus('idle');
  };

  const handleSubmit = async () => {
    if (files.length === 0) {
      alert('Please select at least one image to upload.');
      return;
    }

    setUploadStatus('uploading');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      setUploadStatus('success');

      // Navigate to results after a short delay
      setTimeout(() => {
        navigate("/result", {
          state: {
            uploadedFiles: files,
            diagnosisResults: generateMockResults(files)
          }
        });
      }, 1000);

    } catch (error) {
      setUploadStatus('error');
      console.error('Upload failed:', error);
    }
  };

  const generateMockResults = (uploadedFiles) => {
    const mockDiseases = [
      { name: "Healthy", confidence: 95, action: "Continue regular care" },
      { name: "Early Blight", confidence: 87, action: "Apply fungicide treatment" },
      { name: "Powdery Mildew", confidence: 92, action: "Improve air circulation" },
      { name: "Nutrient Deficiency", confidence: 78, action: "Apply balanced fertilizer" },
      { name: "Bacterial Spot", confidence: 85, action: "Remove affected leaves" }
    ];

    return uploadedFiles.map((file, index) => ({
      fileName: file.name,
      diagnosis: mockDiseases[index % mockDiseases.length],
      timestamp: new Date().toISOString()
    }));
  };

  const getStatusMessage = () => {
    switch (uploadStatus) {
      case 'uploading':
        return {
          icon: '⏳',
          title: 'Analyzing Images...',
          message: 'Our AI is processing your crop images for diagnosis.',
          color: 'blue'
        };
      case 'success':
        return {
          icon: '✅',
          title: 'Analysis Complete!',
          message: 'Redirecting to results page...',
          color: 'green'
        };
      case 'error':
        return {
          icon: '❌',
          title: 'Upload Failed',
          message: 'Please try again or check your internet connection.',
          color: 'red'
        };
      default:
        return null;
    }
  };

  const statusInfo = getStatusMessage();

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNavigation />

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Upload Crop Images
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Upload clear photos of your crops for instant AI-powered disease diagnosis and treatment recommendations.
          </p>
        </div>

        {/* Status Message */}
        {statusInfo && (
          <div className={`mb-8 p-6 rounded-xl shadow-lg border-l-4 bg-white bg-opacity-90 backdrop-blur-sm ${
            statusInfo.color === 'blue' ? 'border-blue-500 bg-blue-50' :
            statusInfo.color === 'green' ? 'border-green-500 bg-green-50' :
            'border-red-500 bg-red-50'
          }`}>
            <div className="flex items-center gap-4">
              <span className="text-3xl">{statusInfo.icon}</span>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">{statusInfo.title}</h3>
                <p className="text-gray-600">{statusInfo.message}</p>
              </div>
            </div>
          </div>
        )}

        {/* Upload Component */}
        <div className="mb-8">
          <ImageUpload onUpload={handleUpload} maxFiles={5} />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleSubmit}
            disabled={files.length === 0 || uploadStatus === 'uploading'}
            className={`
              px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform shadow-lg
              ${files.length === 0 || uploadStatus === 'uploading'
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-green-500 to-blue-500 text-white hover:from-green-600 hover:to-blue-600 hover:scale-105 hover:shadow-xl'
              }
            `}
          >
            {uploadStatus === 'uploading' ? (
              <>
                <span className="animate-spin inline-block mr-2">⟳</span>
                Analyzing Images...
              </>
            ) : (
              <>
                🔍 Analyze Crops
              </>
            )}
          </button>

          <button
            onClick={() => navigate("/")}
            className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🏠 Back to Home
          </button>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
              🤖
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Analysis</h3>
            <p className="text-gray-600">
              Advanced machine learning algorithms detect diseases with high accuracy
            </p>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
              ⚡
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Instant Results</h3>
            <p className="text-gray-600">
              Get diagnosis results and treatment recommendations in seconds
            </p>
          </div>

          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
              📱
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Easy to Use</h3>
            <p className="text-gray-600">
              Simple drag-and-drop interface works on all devices
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Upload;
