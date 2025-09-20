import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How it Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Bug Reports", href: "#bugs" },
      { name: "Feature Requests", href: "#features" }
    ],
    company: [
      { name: "About Us", href: "/about" },
      { name: "Our Team", href: "#team" },
      { name: "Careers", href: "#careers" },
      { name: "Press", href: "#press" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", icon: "🐦", href: "#twitter" },
    { name: "Facebook", icon: "📘", href: "#facebook" },
    { name: "LinkedIn", icon: "💼", href: "#linkedin" },
    { name: "YouTube", icon: "📺", href: "#youtube" }
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 text-white">
      <div className="container mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <span className="text-3xl">🌱</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                FarmSense
              </span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering farmers with AI-driven crop disease detection and agricultural insights.
              Built for the modern farmer who wants to maximize yields and practice sustainable agriculture.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                  title={social.name}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-green-400">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-semibold mb-4 text-green-400">Stay Updated</h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on new features, crop insights, and farming tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg font-medium hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} FarmSense. Built for Hackathon. All rights reserved.
          </div>

          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span>🤖</span>
              Powered by AI
            </span>
            <span className="flex items-center gap-2">
              <span>🌱</span>
              Sustainable Farming
            </span>
            <span className="flex items-center gap-2">
              <span>💚</span>
              Made with Love
            </span>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-500 rounded-full opacity-10"></div>
        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-500 rounded-full opacity-10"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500 rounded-full opacity-5"></div>
      </div>
    </footer>
  );
}

export default Footer;
