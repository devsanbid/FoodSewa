"use client"

import React, { useState } from 'react';
import { Eye, EyeOff, Sun } from 'lucide-react';

export default function YumRegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: 'Yum Coderthemes',
    email: 'user@demo.com',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Registration submitted:', formData);
    alert('Registration form submitted! Check console for details.');
  };

  const handleSocialLogin = (provider) => {
    console.log(`${provider} login clicked`);
    alert(`${provider} login clicked!`);
  };

  const handleLoginClick = () => {
    console.log('Login clicked');
    alert('Redirecting to login page...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated floating food images */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Ramen bowl */}
        <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-white p-4 shadow-2xl animate-bounce" style={{animationDelay: '0s', animationDuration: '3s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
            <div className="w-16 h-16 rounded-full bg-white opacity-80"></div>
          </div>
        </div>
        
        {/* Grilled meat */}
        <div className="absolute top-32 right-40 w-28 h-28 rounded-full bg-white p-3 shadow-2xl animate-pulse" style={{animationDelay: '1s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-amber-700 to-yellow-600"></div>
        </div>
        
        {/* Breakfast plate */}
        <div className="absolute bottom-40 left-20 w-24 h-24 rounded-full bg-white p-3 shadow-2xl animate-bounce" style={{animationDelay: '2s', animationDuration: '2.5s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-300 to-orange-400"></div>
        </div>
        
        {/* Center main dish */}
        <div className="absolute bottom-20 right-32 w-40 h-40 rounded-full bg-white p-4 shadow-2xl animate-pulse" style={{animationDelay: '0.5s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 via-yellow-300 to-orange-400 flex items-center justify-center">
            <div className="w-20 h-20 rounded bg-white opacity-90"></div>
          </div>
        </div>
        
        {/* Taco */}
        <div className="absolute top-60 right-10 w-20 h-20 rounded-full bg-white p-2 shadow-2xl animate-bounce" style={{animationDelay: '1.5s', animationDuration: '2s'}}>
          <div className="w-full h-full rounded-full bg-gradient-to-br from-yellow-400 to-orange-500"></div>
        </div>

        {/* Connecting dashed lines */}
        <div className="absolute top-40 right-36 w-20 h-0.5 border-t-2 border-dashed border-orange-400 opacity-60 animate-pulse"></div>
        <div className="absolute top-52 right-28 w-16 h-0.5 border-t-2 border-dashed border-orange-400 opacity-60 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 right-40 w-24 h-0.5 border-t-2 border-dashed border-orange-400 opacity-60 animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="w-full max-w-md z-10">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">Y</span>
            </div>
            <h1 className="text-white text-3xl font-bold">Yum</h1>
          </div>
          
          <h2 className="text-white text-2xl font-semibold mb-2">Register</h2>
          <p className="text-gray-400 text-sm">
            Don't have an account? Create your account, it takes less than a minute at Yum
          </p>
        </div>

        {/* Registration Form */}
        <div className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300 transition-colors duration-200"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Register Button */}
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Register
          </button>

          {/* Social Login Buttons */}
          <div className="flex space-x-4 mt-6">
            <button
              onClick={() => handleSocialLogin('Google')}
              className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 active:scale-95"
            >
              <div className="w-5 h-5 bg-gradient-to-r from-blue-400 via-red-400 to-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">G</span>
              </div>
              <span>Google</span>
            </button>
            
            <button
              onClick={() => handleSocialLogin('Facebook')}
              className="flex-1 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 hover:scale-105 active:scale-95"
            >
              <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-xs font-bold text-white">f</span>
              </div>
              <span>Facebook</span>
            </button>
          </div>

          {/* Login Link */}
          <div className="text-center mt-8">
            <span className="text-gray-400">Already have an account? </span>
            <button
              onClick={handleLoginClick}
              className="text-orange-500 hover:text-orange-400 font-medium transition-colors duration-200 hover:underline"
            >
              Login
            </button>
          </div>
        </div>
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={() => alert('Theme toggle clicked!')}
        className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 active:scale-95 z-20"
      >
        <Sun size={20} />
      </button>
    </div>
  );
}