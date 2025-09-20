import React from "react";
import { BreadcrumbNavigation } from "../components/Navigation";

function About() {
  const features = [
    {
      icon: "🤖",
      title: "AI-Powered Diagnosis",
      description: "Advanced machine learning algorithms trained on thousands of crop images to provide accurate disease detection."
    },
    {
      icon: "⚡",
      title: "Real-Time Analysis",
      description: "Get instant results and treatment recommendations within seconds of uploading your images."
    },
    {
      icon: "📱",
      title: "Mobile Friendly",
      description: "Access FarmSense anywhere, anytime with our responsive design that works on all devices."
    },
    {
      icon: "🌾",
      title: "Comprehensive Coverage",
      description: "Supports diagnosis for a wide variety of crops including tomatoes, lettuce, corn, wheat, and more."
    },
    {
      icon: "📊",
      title: "Progress Tracking",
      description: "Monitor your crop health over time with detailed analytics and historical data."
    },
    {
      icon: "💡",
      title: "Expert Recommendations",
      description: "Receive treatment plans and preventive measures tailored to your specific crop conditions."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief AI Researcher",
      description: "Leading expert in agricultural AI with 15+ years of experience in crop disease detection.",
      avatar: "👩‍🔬"
    },
    {
      name: "Michael Rodriguez",
      role: "Full Stack Developer",
      description: "Passionate developer creating intuitive user experiences for modern farming solutions.",
      avatar: "👨‍💻"
    },
    {
      name: "Dr. James Wilson",
      role: "Agricultural Scientist",
      description: "Plant pathologist specializing in disease management and sustainable farming practices.",
      avatar: "👨‍🌾"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Farmers Served" },
    { value: "50+", label: "Crop Types Supported" },
    { value: "95%", label: "Accuracy Rate" },
    { value: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumb */}
        <BreadcrumbNavigation />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              FarmSense
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            FarmSense is revolutionizing agriculture through artificial intelligence.
            We're on a mission to help farmers worldwide detect crop diseases early,
            optimize yields, and practice sustainable farming.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Section */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We believe that every farmer deserves access to cutting-edge technology to protect their crops and maximize their harvest.
              By combining artificial intelligence with agricultural expertise, we're making professional-grade crop diagnosis accessible to farmers everywhere.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🌍
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Global Impact</h3>
                <p className="text-sm text-gray-600">Helping farmers worldwide improve their yields</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🔬
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Pushing the boundaries of agricultural technology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  🤝
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Community</h3>
                <p className="text-sm text-gray-600">Building a supportive network of farmers and experts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Why Choose FarmSense?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white bg-opacity-90 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 text-center">
                <div className="text-6xl mb-4">{member.avatar}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technology Section */}
        <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white shadow-xl mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Powered by Advanced Technology</h2>
            <p className="text-xl mb-8 opacity-90">
              Our AI models are trained on millions of crop images and continuously updated with the latest research in plant pathology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Machine Learning</h3>
                <p className="text-sm opacity-80">Deep neural networks for accurate disease detection</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Computer Vision</h3>
                <p className="text-sm opacity-80">Advanced image processing for crop analysis</p>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-4 backdrop-blur-sm">
                <h3 className="font-semibold mb-2">Cloud Computing</h3>
                <p className="text-sm opacity-80">Scalable infrastructure for global accessibility</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Have questions about FarmSense? Want to learn more about our technology?
            We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl font-bold hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
              📧 Contact Support
            </button>
            <button className="px-8 py-4 bg-white text-gray-700 border border-gray-300 rounded-xl font-medium hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              📖 Read Documentation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
