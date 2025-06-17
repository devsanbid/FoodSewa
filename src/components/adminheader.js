"use client"

import React from 'react';
import { Search, Globe, Maximize, Bell } from 'lucide-react';

export default function YumHeader() {
  return (
    <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search for items..."
              className="w-full bg-gray-700 border border-gray-600 rounded-full pl-12 pr-6 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            />
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-6 ml-8">
          {/* Globe Icon */}
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors duration-200">
            <Globe size={20} />
          </button>

          {/* Maximize Icon */}
          <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors duration-200">
            <Maximize size={20} />
          </button>

          {/* Notifications */}
          <div className="relative">
            <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-full transition-colors duration-200">
              <Bell size={20} />
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gray-600">
              <img
                src="/api/placeholder/40/40"
                alt="Kaiya Botosh"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-full h-full bg-gray-600 flex items-center justify-center text-white font-semibold" style={{display: 'none'}}>
                KB
              </div>
            </div>
            <div className="hidden sm:block">
              <div className="text-white font-medium">Kaiya Botosh</div>
              <div className="text-gray-400 text-sm">Admin</div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}