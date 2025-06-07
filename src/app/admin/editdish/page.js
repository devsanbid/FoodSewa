"use client"

import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Maximize2, 
  Bell, 
  ChevronDown, 
  Plus, 
  Users, 
  Wallet, 
  FileText, 
  Shield, 
  AlertTriangle, 
  Layers, 
  Calendar, 
  Shapes, 
  Zap, 
  User, 
  LogOut,
  Upload,
  Bold,
  Italic,
  Underline,
  Link,
  AlignLeft,
  AlignCenter,
  Hash
} from 'lucide-react';

export default function YumAdminInterface() {
  const [productName, setProductName] = useState('Burrito Bowl');
  const [description, setDescription] = useState('Mexican burritos are usually made with a wheat tortilla and contain grilled meat, cheese toppings, and fresh vegetables which are sources of vitamins, proteins, fiber...');
  const [longDescription, setLongDescription] = useState('Mexican burritos are usually made with a wheat tortilla and contain grilled meat, cheese toppings');
  const [sellingPrice, setSellingPrice] = useState('45');
  const [costPrice, setCostPrice] = useState('35');
  const [quantity, setQuantity] = useState('80');
  const [saleStartDate, setSaleStartDate] = useState('12/9/2022');
  const [saleEndDate, setSaleEndDate] = useState('12/10/2022');
  const [discountEnabled, setDiscountEnabled] = useState(false);
  const [expiryDateEnabled, setExpiryDateEnabled] = useState(false);
  const [returnableEnabled, setReturnableEnabled] = useState(true);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        {/* Logo */}
        <div className="flex items-center px-6 py-4 border-b border-gray-700">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold">Y</span>
          </div>
          <span className="text-xl font-bold">Yum</span>
        </div>

        {/* Navigation */}
        <nav className="mt-6">
          <div className="px-6 py-2">
            <div className="flex items-center text-gray-300 hover:text-white cursor-pointer">
              <Plus className="w-5 h-5 mr-3" />
              <span>Add Dish</span>
            </div>
          </div>
          
          <div className="px-6 py-2 bg-orange-500 bg-opacity-20 border-r-2 border-orange-500">
            <div className="flex items-center text-orange-500 cursor-pointer">
              <span className="w-5 h-5 mr-3 text-orange-500">•</span>
              <span>Edit Dish</span>
            </div>
          </div>

          <div className="px-6 py-2 mt-4">
            <div className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <span>Sellers</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center text-gray-300 hover:text-white cursor-pointer">
              <Wallet className="w-5 h-5 mr-3" />
              <span>Wallet</span>
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-3" />
                <span>Extra Pages</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-3" />
                <span>Authentication</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
              <div className="flex items-center">
                <AlertTriangle className="w-5 h-5 mr-3" />
                <span>Error Pages</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center text-gray-300 hover:text-white cursor-pointer">
              <Layers className="w-5 h-5 mr-3" />
              <span>UI Elements</span>
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center text-gray-300 hover:text-white cursor-pointer">
              <Calendar className="w-5 h-5 mr-3" />
              <span>Widget</span>
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
              <div className="flex items-center">
                <Shapes className="w-5 h-5 mr-3" />
                <span>Icons</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>

          <div className="px-6 py-2">
            <div className="flex items-center justify-between text-gray-300 hover:text-white cursor-pointer">
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-3" />
                <span>Forms</span>
              </div>
              <ChevronDown className="w-4 h-4" />
            </div>
          </div>
        </nav>

        {/* Upgrade Section */}
        <div className="mt-auto p-6">
          <div className="flex items-center mb-4">
            <Zap className="w-5 h-5 text-orange-500 mr-2" />
          </div>
          <div className="text-sm text-gray-400 mb-4">
            🔥 Upgrade Your Plan. Find Out here
          </div>
          <div className="text-orange-500 text-sm cursor-pointer">
            Contact Support
          </div>
        </div>

        {/* Profile Section */}
        <div className="border-t border-gray-700 p-4">
          <div className="flex items-center text-gray-300 hover:text-white cursor-pointer mb-2">
            <User className="w-5 h-5 mr-3" />
            <span>Profile</span>
          </div>
          <div className="flex items-center text-gray-300 hover:text-white cursor-pointer">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1 max-w-md">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search for items..."
                className="bg-transparent text-white placeholder-gray-400 w-full focus:outline-none"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              <Globe className="w-5 h-5 text-gray-400 cursor-pointer" />
              <Maximize2 className="w-5 h-5 text-gray-400 cursor-pointer" />
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-400 cursor-pointer" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-xs text-white">2</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-gray-600 rounded-full mr-2"></div>
                <div>
                  <div className="text-sm font-medium">Kalya Botosh</div>
                  <div className="text-xs text-gray-400">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="px-6 py-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Edit Dish</h1>
            <div className="flex items-center text-sm text-gray-400">
              <span>Dishes</span>
              <span className="mx-2">›</span>
              <span className="text-orange-500">Edit Dish</span>
            </div>
          </div>
        </div>

        {/* Form Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column - Image */}
            <div className="lg:col-span-1">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="w-full h-48 bg-gray-700 rounded-lg flex items-center justify-center mb-6">
                  <img 
                    src="/api/placeholder/200/150" 
                    alt="Burrito Bowl"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-4">Additional Images</h3>
                  <div className="border-2 border-dashed border-orange-500 rounded-lg p-8 text-center">
                    <Upload className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                    <div className="text-orange-500">Upload Image</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-2">
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Product Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Product Name</label>
                    <input
                      type="text"
                      value={productName}
                      onChange={(e) => setProductName(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500 resize-none"
                    />
                  </div>

                  {/* Product Category */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Product Category</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500">
                      <option>Select...</option>
                    </select>
                  </div>

                  {/* Product Long Description */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Product Long Description</label>
                    <div className="bg-gray-700 border border-gray-600 rounded-lg">
                      <div className="flex items-center space-x-2 p-2 border-b border-gray-600">
                        <select className="bg-gray-600 text-white text-sm px-2 py-1 rounded border-none">
                          <option>Normal</option>
                        </select>
                        <Bold className="w-4 h-4 text-gray-400 cursor-pointer" />
                        <Italic className="w-4 h-4 text-gray-400 cursor-pointer" />
                        <Underline className="w-4 h-4 text-gray-400 cursor-pointer" />
                        <Link className="w-4 h-4 text-gray-400 cursor-pointer" />
                        <AlignLeft className="w-4 h-4 text-gray-400 cursor-pointer" />
                        <AlignCenter className="w-4 h-4 text-gray-400 cursor-pointer" />
                        <Hash className="w-4 h-4 text-gray-400 cursor-pointer" />
                      </div>
                      <textarea
                        value={longDescription}
                        onChange={(e) => setLongDescription(e.target.value)}
                        rows={3}
                        className="w-full bg-transparent px-3 py-2 text-white focus:outline-none resize-none"
                      />
                    </div>
                  </div>

                  {/* Selling Price */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Selling Price</label>
                    <input
                      type="text"
                      value={sellingPrice}
                      onChange={(e) => setSellingPrice(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  {/* Cost Price */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Cost Price</label>
                    <input
                      type="text"
                      value={costPrice}
                      onChange={(e) => setCostPrice(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Quantity</label>
                    <input
                      type="text"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  {/* Delivery Type */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Delivery Type</label>
                    <select className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500">
                      <option>Select...</option>
                    </select>
                  </div>

                  {/* Return Policy */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Return Policy</span>
                    <div className="flex items-center">
                      <span className="text-sm mr-2">Returnable</span>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={returnableEnabled}
                          onChange={(e) => setReturnableEnabled(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-11 h-6 rounded-full cursor-pointer transition-colors ${
                            returnableEnabled ? 'bg-orange-500' : 'bg-gray-600'
                          }`}
                          onClick={() => setReturnableEnabled(!returnableEnabled)}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                              returnableEnabled ? 'translate-x-5' : 'translate-x-0.5'
                            } mt-0.5`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Discount */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Discount</span>
                    <div className="flex items-center">
                      <span className="text-sm mr-2">Add Discount</span>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={discountEnabled}
                          onChange={(e) => setDiscountEnabled(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-11 h-6 rounded-full cursor-pointer transition-colors ${
                            discountEnabled ? 'bg-orange-500' : 'bg-gray-600'
                          }`}
                          onClick={() => setDiscountEnabled(!discountEnabled)}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                              discountEnabled ? 'translate-x-5' : 'translate-x-0.5'
                            } mt-0.5`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Expiry Date */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Expiry Date</span>
                    <div className="flex items-center">
                      <span className="text-sm mr-2">Add Expiry Date</span>
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={expiryDateEnabled}
                          onChange={(e) => setExpiryDateEnabled(e.target.checked)}
                          className="sr-only"
                        />
                        <div
                          className={`w-11 h-6 rounded-full cursor-pointer transition-colors ${
                            expiryDateEnabled ? 'bg-orange-500' : 'bg-gray-600'
                          }`}
                          onClick={() => setExpiryDateEnabled(!expiryDateEnabled)}
                        >
                          <div
                            className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${
                              expiryDateEnabled ? 'translate-x-5' : 'translate-x-0.5'
                            } mt-0.5`}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Sale Start Date */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Sale Start On</label>
                    <input
                      type="text"
                      value={saleStartDate}
                      onChange={(e) => setSaleStartDate(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>

                  {/* Sale End Date */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Sale End On</label>
                    <input
                      type="text"
                      value={saleEndDate}
                      onChange={(e) => setSaleEndDate(e.target.value)}
                      className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-orange-500"
                    />
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-4 mt-8">
                  <button className="px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors">
                    Cancel
                  </button>
                  <button className="px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-gray-800 border-t border-gray-700 px-6 py-3">
          <div className="text-center text-sm text-gray-400">
            Designed, crafted and coded with ❤️ by Coderthemes.com
          </div>
        </footer>
      </div>
    </div>
  );
}