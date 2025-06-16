"use client"

import { useState } from 'react';
import { Search, Globe, Maximize2, Bell, User, ChevronDown, ChevronRight, Wallet, FileText, Shield, AlertCircle, Grid3X3, Zap, Sun, ArrowUp } from 'lucide-react';

export default function YumAdminDashboard() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: 'demoexample@mail.com',
    phone: '+1-123-XXX-4567',
    country: '',
    state: '',
    zip: '',
    description: 'Jot something down...'
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClear = () => {
    setFormData({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      phone: '',
      country: '',
      state: '',
      zip: '',
      description: ''
    });
  };

  const handleSave = () => {
    console.log('Saving seller data:', formData);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Search */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <span className="text-xl font-semibold">Yum</span>
            </div>
            
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search for items..."
                className="bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 w-64 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* Right Header Icons */}
          <div className="flex items-center space-x-4">
            <Globe className="w-5 h-5 text-slate-400 cursor-pointer" />
            <Maximize2 className="w-5 h-5 text-slate-400 cursor-pointer" />
            <div className="relative">
              <Bell className="w-5 h-5 text-slate-400 cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                <User className="w-4 h-4" />
              </div>
              <div className="text-sm">
                <div className="font-medium">Kalya Botosh</div>
                <div className="text-slate-400 text-xs">Admin</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">


        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-semibold">Add Seller</h1>
            <div className="flex items-center space-x-2 text-sm text-slate-400">
              <span>Sellers</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-orange-500">Add Seller</span>
            </div>
          </div>

          {/* Form */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <div className="grid grid-cols-2 gap-6">
              {/* First Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter Your First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter Your Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* User Name */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter Your Last Name"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* Country/Region */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  Country/Region
                </label>
                <div className="relative">
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* State/Province */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  State/Province
                </label>
                <div className="relative">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="ca">California</option>
                    <option value="ny">New York</option>
                    <option value="tx">Texas</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>

              {/* ZIP/Postal Code */}
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">
                  ZIP/Postal Code
                </label>
                <div className="relative">
                  <select
                    name="zip"
                    value={formData.zip}
                    onChange={handleInputChange}
                    className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="12345">12345</option>
                    <option value="67890">67890</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Description
              </label>
              <textarea
                name="description"
                rows={6}
                value={formData.description}
                onChange={handleInputChange}
                className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-slate-400 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-6">
              <button
                onClick={handleClear}
                className="flex items-center space-x-2 px-6 py-2 text-red-400 hover:text-red-300 transition-colors"
              >
                <AlertCircle className="w-4 h-4" />
                <span>Clear</span>
              </button>
              <button
                onClick={handleSave}
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white transition-colors"
              >
                <FileText className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-slate-400">
            Designed, crafted and coded with ❤️ by Coderthemes.com
          </div>
        </main>
      </div>

      {/* Theme Toggle Button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
        <Sun className="w-6 h-6" />
      </button>

      {/* Scroll to Top Button */}
      <button className="fixed bottom-24 right-6 w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center text-white shadow-lg transition-colors">
        <ArrowUp className="w-4 h-4" />
      </button>
    </div>
  );
}