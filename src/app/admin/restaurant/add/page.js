"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Maximize, 
  Bell, 
  Users, 
  Store, 
  UtensilsCrossed, 
  User, 
  Wallet, 
  FileText, 
  Shield, 
  AlertCircle, 
  Zap, 
  Gift,
  UserCircle,
  LogOut,
  ChevronDown,
  X
} from 'lucide-react';

export default function RestaurantForm() {
  const [activeTab, setActiveTab] = useState('Personal Detail');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    panCard: '',
    email: '',
    birthDate: '12/9/2000',
    city: '',
    country: '',
    zipCode: '',
    description: '',
    // Business Detail fields
    businessName: '',
    businessType: '',
    businessContactNumber: '',
    gstNumber: '',
    website: '',
    businessEmail: '',
    businessDescription: '',
    // Bank Detail fields
    bankName: '',
    branch: '',
    accountHolderName: '',
    accountNumber: '',
    ifscCode: ''
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const tabs = ['Personal Detail', 'Business Detail', 'Bank Detail'];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 px-6 py-4 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <UtensilsCrossed className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Yum</span>
          </div>
          <div className="relative">
            <Search className="w-5 h-5 absolute left-3 top-3 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search for items..."
              className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Globe className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
          <Maximize className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
          <div className="relative">
            <Bell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-white" />
            <span className="absolute -top-1 -right-1 bg-[#1e1e2e] text-xs rounded-full w-4 h-4 flex items-center justify-center">2</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">KB</span>
            </div>
            <div>
              <div className="text-sm font-medium">Kaiya Botosh</div>
              <div className="text-xs text-gray-400">Admin</div>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">

        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
            <span className="text-white">Restaurants</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <span className="text-orange-500">Add Restaurant</span>
          </div>

          {/* Page Header */}
          <h1 className="text-2xl font-bold mb-8">Add Restaurant</h1>

          {/* Tab Navigation */}
          <div className="flex space-x-0 mb-8">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-t-lg font-medium ${
                  activeTab === tab 
                    ? 'bg-[#1e1e2e] text-white' 
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                } ${index === 0 ? 'rounded-tl-lg' : ''} ${index === tabs.length - 1 ? 'rounded-tr-lg' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Form Content */}
          <div className="bg-gray-800 rounded-lg p-8">
            <h2 className="text-lg font-semibold mb-6">
              {activeTab === 'Personal Detail' ? 'Step 1:' : activeTab === 'Business Detail' ? 'Step 2:' : 'Step 3:'}
            </h2>
            
            {activeTab === 'Personal Detail' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* First Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your First Name"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Last Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Last Name"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Number</label>
                    <input
                      type="tel"
                      placeholder="Enter Your Contact Number"
                      value={formData.contactNumber}
                      onChange={(e) => handleInputChange('contactNumber', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* PAN Card Number */}
                  <div>
                    <label className="block text-sm font-medium mb-2">PAN Card Number</label>
                    <input
                      type="text"
                      placeholder="Enter Your PAN Card Number"
                      value={formData.panCard}
                      onChange={(e) => handleInputChange('panCard', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Birth Date */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Birth of Date</label>
                    <input
                      type="text"
                      placeholder="12/9/2000"
                      value={formData.birthDate}
                      onChange={(e) => handleInputChange('birthDate', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* City */}
                  <div>
                    <label className="block text-sm font-medium mb-2">City</label>
                    <div className="relative">
                      <select
                        value={formData.city}
                        onChange={(e) => handleInputChange('city', e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
                      >
                        <option value="">Select...</option>
                        <option value="kathmandu">Kathmandu</option>
                        <option value="pokhara">Pokhara</option>
                        <option value="chitwan">Chitwan</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Country/Region */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Country/Region</label>
                    <div className="relative">
                      <select
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
                      >
                        <option value="">Select...</option>
                        <option value="nepal">Nepal</option>
                        <option value="india">India</option>
                        <option value="usa">USA</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* ZIP/Postal Code */}
                  <div>
                    <label className="block text-sm font-medium mb-2">ZIP/Postal Code</label>
                    <div className="relative">
                      <select
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange('zipCode', e.target.value)}
                        className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none"
                      >
                        <option value="">Select...</option>
                        <option value="44600">44600</option>
                        <option value="33700">33700</option>
                        <option value="56600">56600</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    placeholder="Enter Description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  />
                </div>
              </>
            )}

            {activeTab === 'Business Detail' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Business Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Business Name"
                      value={formData.businessName}
                      onChange={(e) => handleInputChange('businessName', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Business Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Business Type</label>
                    <input
                      type="text"
                      placeholder="Enter Your Business Type"
                      value={formData.businessType}
                      onChange={(e) => handleInputChange('businessType', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Contact Number</label>
                    <input
                      type="tel"
                      placeholder="Enter Your Contact Number"
                      value={formData.businessContactNumber}
                      onChange={(e) => handleInputChange('businessContactNumber', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* GST Number */}
                  <div>
                    <label className="block text-sm font-medium mb-2">GST Number</label>
                    <input
                      type="text"
                      placeholder="Enter Your GST Number"
                      value={formData.gstNumber}
                      onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Website */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Website</label>
                    <input
                      type="url"
                      placeholder="Enter Website.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="Enter Your Email"
                      value={formData.businessEmail}
                      onChange={(e) => handleInputChange('businessEmail', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    placeholder="Enter Description"
                    value={formData.businessDescription}
                    onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                    rows={4}
                    className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 resize-none"
                  />
                </div>
              </>
            )}

            {activeTab === 'Bank Detail' && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Bank Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Bank Name</label>
                    <input
                      type="text"
                      placeholder="Enter Your Bank Name"
                      value={formData.bankName}
                      onChange={(e) => handleInputChange('bankName', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Branch */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Branch</label>
                    <input
                      type="text"
                      placeholder="Enter Your Branch Name"
                      value={formData.branch}
                      onChange={(e) => handleInputChange('branch', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Account Holder Name */}
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium mb-2">Account Holder Name</label>
                    <input
                      type="text"
                      placeholder="Enter Account Holder Name"
                      value={formData.accountHolderName}
                      onChange={(e) => handleInputChange('accountHolderName', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* Account Number */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Account Number</label>
                    <input
                      type="text"
                      placeholder="Enter Your Account Number"
                      value={formData.accountNumber}
                      onChange={(e) => handleInputChange('accountNumber', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>

                  {/* IFSC Code */}
                  <div>
                    <label className="block text-sm font-medium mb-2">IFSC Code</label>
                    <input
                      type="text"
                      placeholder="Enter IFSC Code"
                      value={formData.ifscCode}
                      onChange={(e) => handleInputChange('ifscCode', e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    />
                  </div>
                </div>
              </>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 mt-8">
              <button className="flex items-center space-x-2 px-6 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg font-medium">
                <X className="w-4 h-4" />
                <span>Clear</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium">
                <FileText className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>

        
        </main>
      </div>
    </div>
  );
}