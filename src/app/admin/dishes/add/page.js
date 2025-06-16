"use client"

import React, { useState } from 'react';
import { ChevronDown, Upload, X, Save, Calendar, Bold, Italic, Underline, Link, AlignLeft, AlignCenter, Type } from 'lucide-react';

export default function AddDishForm() {
  const [formData, setFormData] = useState({
    productName: '',
    description: '',
    category: '',
    sellingPrice: '',
    costPrice: '',
    quantity: '',
    deliveryType: '',
    longDescription: 'Add a long description for your product',
    discount: false,
    expiryDate: false,
    returnable: false,
    saleStartDate: '12/9/2022',
    saleEndDate: '12/10/2022'
  });

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const toggleSwitch = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
     
      

      {/* Main Content */}
      <div className="ml-64">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search for items..."
              className="bg-gray-800 border border-gray-600 rounded-lg px-4 py-2 w-80 text-white placeholder-gray-400"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
            <div className="relative">
              <div className="w-8 h-8 bg-gray-700 rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-xs">2</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div>
                <div className="text-sm font-medium">Kalya Botosh</div>
                <div className="text-xs text-gray-400">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="p-6 pb-4">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Dishes</span>
            <span></span>
            <span className="text-orange-500">Add Dish</span>
          </div>
        </div>

        {/* Form Content */}
        <div className="px-6 pb-6">
          <h1 className="text-2xl font-semibold mb-6">Add Dish</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Image Upload Section */}
            <div className="space-y-6">
              <div className="border-2 border-dashed border-orange-500 rounded-lg p-8 text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-400">Upload Image</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium mb-4">Additional Images</h3>
                <div className="border-2 border-dashed border-orange-500 rounded-lg p-6 text-center">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-400">Upload Image</p>
                </div>
              </div>
            </div>

            {/* Form Fields */}
            <div className="lg:col-span-2 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Product Name</label>
                  <input
                    type="text"
                    placeholder="Product Name"
                    value={formData.productName}
                    onChange={(e) => handleInputChange('productName', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <input
                    type="text"
                    placeholder="Short Description"
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Product Category</label>
                <div className="relative">
                  <select
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="appetizer">Appetizer</option>
                    <option value="main">Main Course</option>
                    <option value="dessert">Dessert</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Selling Price</label>
                  <input
                    type="text"
                    placeholder="Selling Price"
                    value={formData.sellingPrice}
                    onChange={(e) => handleInputChange('sellingPrice', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Cost Price</label>
                  <input
                    type="text"
                    placeholder="Cost Price"
                    value={formData.costPrice}
                    onChange={(e) => handleInputChange('costPrice', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Quantity</label>
                  <input
                    type="text"
                    placeholder="Quantity in Stock"
                    value={formData.quantity}
                    onChange={(e) => handleInputChange('quantity', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Delivery Type</label>
                <div className="relative">
                  <select
                    value={formData.deliveryType}
                    onChange={(e) => handleInputChange('deliveryType', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white appearance-none"
                  >
                    <option value="">Select...</option>
                    <option value="pickup">Pickup</option>
                    <option value="delivery">Delivery</option>
                    <option value="both">Both</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Product Long Description</label>
                <div className="bg-gray-800 border border-gray-600 rounded-lg">
                  <div className="flex items-center gap-2 p-3 border-b border-gray-600">
                    <select className="bg-gray-700 text-white px-2 py-1 rounded text-sm">
                      <option>Normal</option>
                    </select>
                    <div className="flex items-center gap-1 ml-2">
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Bold className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Italic className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Underline className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Link className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="flex items-center gap-1 ml-2">
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <AlignLeft className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <AlignCenter className="w-4 h-4" />
                      </button>
                      <button className="p-1 hover:bg-gray-700 rounded">
                        <Type className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <textarea
                    value={formData.longDescription}
                    onChange={(e) => handleInputChange('longDescription', e.target.value)}
                    className="w-full bg-transparent p-4 text-white placeholder-gray-400 resize-none"
                    rows={4}
                  />
                </div>
              </div>

              {/* Toggle Switches */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span>Return Policy</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm">Returnable</span>
                      <button
                        onClick={() => toggleSwitch('returnable')}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                          formData.returnable ? 'bg-green-500' : 'bg-gray-600'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.returnable ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span>Discount</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Add Discount</span>
                    <button
                      onClick={() => toggleSwitch('discount')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        formData.discount ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.discount ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span>Expiry Date</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Add Expiry Date</span>
                    <button
                      onClick={() => toggleSwitch('expiryDate')}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        formData.expiryDate ? 'bg-green-500' : 'bg-gray-600'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          formData.expiryDate ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Sale Dates */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Sale Start On</label>
                  <input
                    type="text"
                    value={formData.saleStartDate}
                    onChange={(e) => handleInputChange('saleStartDate', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Sale End On</label>
                  <input
                    type="text"
                    value={formData.saleEndDate}
                    onChange={(e) => handleInputChange('saleEndDate', e.target.value)}
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between pt-6">
                <button className="flex items-center gap-2 px-6 py-3 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors">
                  <X className="w-4 h-4" />
                  Clear
                </button>
                
                <button className="flex items-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  <Save className="w-4 h-4" />
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-700 text-center text-sm text-gray-400">
          Designed, crafted and coded with ❤️ by Coderthemes.com
        </div>
      </div>
    </div>
  );
}