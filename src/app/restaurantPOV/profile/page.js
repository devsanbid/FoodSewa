'use client'
import React, { useState } from 'react';
import { Home, Mail, Bell, Settings, ArrowLeft, Edit3, Camera, Star, TrendingUp, Users, DollarSign, Clock, MapPin, Phone, Globe, Save, X } from 'lucide-react';

export default function RestaurantOwnerProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('Overview');
  const [profileData, setProfileData] = useState({
    restaurantName: 'Food Sewa',
    ownerName: 'Rajesh Kumar',
    email: 'rajesh@foodsewa.com',
    phone: '+977-1-4567890',
    address: 'Thamel, Kathmandu, Nepal',
    website: 'www.foodsewa.com',
    description: 'Authentic Nepalese and Asian cuisine serving fresh, flavorful dishes since 2018. We specialize in traditional noodles, dumplings, and seasonal seafood.',
    openingHours: '10:00 AM - 10:00 PM',
    cuisine: 'Nepalese, Asian, Seafood'
  });

  const [tempData, setTempData] = useState({ ...profileData });

  const tabs = ['Overview', 'Menu Management', 'Orders', 'Analytics', 'Settings'];

  const stats = [
    { label: 'Total Orders', value: '1,247', icon: <TrendingUp size={20} />, color: 'text-green-500' },
    { label: 'Active Customers', value: '456', icon: <Users size={20} />, color: 'text-blue-500' },
    { label: 'Monthly Revenue', value: '$3,240', icon: <DollarSign size={20} />, color: 'text-orange-500' },
    { label: 'Avg Rating', value: '4.8', icon: <Star size={20} />, color: 'text-yellow-500' }
  ];

  const recentOrders = [
    { id: '#34562', customer: 'Sita Sharma', items: 3, total: '$21.03', status: 'Completed', time: '2 min ago' },
    { id: '#34561', customer: 'Ram Bahadur', items: 2, total: '$15.50', status: 'Preparing', time: '5 min ago' },
    { id: '#34560', customer: 'Maya Gurung', items: 4, total: '$28.75', status: 'Delivered', time: '12 min ago' },
    { id: '#34559', customer: 'Arjun Thapa', items: 1, total: '$8.99', status: 'Pending', time: '18 min ago' }
  ];

  const handleSave = () => {
    setProfileData({ ...tempData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...profileData });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setTempData({ ...tempData, [field]: value });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'Preparing': return 'bg-yellow-500';
      case 'Delivered': return 'bg-blue-500';
      case 'Pending': return 'bg-gray-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-20 bg-gray-900 min-h-screen flex flex-col items-center py-6 space-y-4 border-r border-gray-800">
          <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
            <span className="text-white font-bold text-xl">🍽️</span>
          </div>
          
          <button className="relative p-3 bg-orange-500 rounded-xl hover:bg-orange-600 transition-colors">
            <Home size={20} />
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-orange-500 rounded-l"></div>
          </button>
          
          <button className="p-3 text-gray-400 hover:text-orange-500 hover:bg-gray-800 rounded-xl transition-colors relative group">
            <Mail size={20} />
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-orange-500 rounded-l opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button className="p-3 text-gray-400 hover:text-orange-500 hover:bg-gray-800 rounded-xl transition-colors relative group">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-xs flex items-center justify-center text-white font-bold">3</span>
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-orange-500 rounded-l opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <button className="p-3 text-gray-400 hover:text-orange-500 hover:bg-gray-800 rounded-xl transition-colors relative group">
            <Settings size={20} />
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-orange-500 rounded-l opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
          
          <div className="flex-1"></div>
          
          <div className="w-1 h-12 bg-gray-700 rounded-full"></div>
          
          <button className="p-3 text-gray-400 hover:text-orange-500 hover:bg-gray-800 rounded-xl transition-colors relative group">
            <span className="text-lg font-bold">N</span>
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-orange-500 rounded-l opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Dashboard Overview</h1>
            <p className="text-gray-400">Tuesday, 2 Feb 2021</p>
          </div>
          {/* Profile Header */}
          <div className="bg-gray-800 rounded-lg p-6 mb-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
              <div className="flex items-center space-x-4 mb-4 md:mb-0">
                <div className="relative">
                  <div className="w-20 h-20 bg-gray-600 rounded-full flex items-center justify-center text-2xl">
                    🍽️
                  </div>
                  <button className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Camera size={12} />
                  </button>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{profileData.restaurantName}</h2>
                  <p className="text-gray-400">{profileData.ownerName}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <Star size={16} className="text-yellow-500 fill-current" />
                    <span className="text-sm">4.8 (234 reviews)</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors"
              >
                <Edit3 size={16} />
                <span>Edit Profile</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className={stat.color}>{stat.icon}</span>
                  </div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 mb-6 border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-orange-500 border-b-2 border-orange-500'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          {activeTab === 'Overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Restaurant Info */}
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold">Restaurant Information</h3>
                  {isEditing && (
                    <div className="flex space-x-2">
                      <button
                        onClick={handleSave}
                        className="p-2 bg-green-500 hover:bg-green-600 rounded-lg transition-colors"
                      >
                        <Save size={16} />
                      </button>
                      <button
                        onClick={handleCancel}
                        className="p-2 bg-gray-500 hover:bg-gray-600 rounded-lg transition-colors"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Restaurant Name</label>
                    {isEditing ? (
                      <input
                        value={tempData.restaurantName}
                        onChange={(e) => handleInputChange('restaurantName', e.target.value)}
                        className="w-full bg-gray-700 p-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-white">{profileData.restaurantName}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Owner Name</label>
                    {isEditing ? (
                      <input
                        value={tempData.ownerName}
                        onChange={(e) => handleInputChange('ownerName', e.target.value)}
                        className="w-full bg-gray-700 p-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-white">{profileData.ownerName}</p>
                    )}
                  </div>

                  <div>
                    <label className="text-sm text-gray-400 mb-1 block">Description</label>
                    {isEditing ? (
                      <textarea
                        value={tempData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        rows="3"
                        className="w-full bg-gray-700 p-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
                      />
                    ) : (
                      <p className="text-white">{profileData.description}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block flex items-center">
                        <MapPin size={14} className="mr-1" /> Address
                      </label>
                      {isEditing ? (
                        <input
                          value={tempData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full bg-gray-700 p-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
                        />
                      ) : (
                        <p className="text-white">{profileData.address}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm text-gray-400 mb-1 block flex items-center">
                        <Phone size={14} className="mr-1" /> Phone
                      </label>
                      {isEditing ? (
                        <input
                          value={tempData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full bg-gray-700 p-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
                        />
                      ) : (
                        <p className="text-white">{profileData.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block flex items-center">
                        <Clock size={14} className="mr-1" /> Opening Hours
                      </label>
                      {isEditing ? (
                        <input
                          value={tempData.openingHours}
                          onChange={(e) => handleInputChange('openingHours', e.target.value)}
                          className="w-full bg-gray-700 p-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
                        />
                      ) : (
                        <p className="text-white">{profileData.openingHours}</p>
                      )}
                    </div>

                    <div>
                      <label className="text-sm text-gray-400 mb-1 block flex items-center">
                        <Globe size={14} className="mr-1" /> Website
                      </label>
                      {isEditing ? (
                        <input
                          value={tempData.website}
                          onChange={(e) => handleInputChange('website', e.target.value)}
                          className="w-full bg-gray-700 p-2 rounded border border-gray-600 focus:border-orange-500 focus:outline-none"
                        />
                      ) : (
                        <p className="text-white">{profileData.website}</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Recent Orders */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Recent Orders</h3>
                <div className="space-y-3">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-650 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${getStatusColor(order.status)}`}></div>
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-gray-400">{order.customer}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold">{order.total}</p>
                        <p className="text-sm text-gray-400">{order.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors">
                  View All Orders
                </button>
              </div>
            </div>
          )}

          {activeTab !== 'Overview' && (
            <div className="bg-gray-800 rounded-lg p-8 text-center">
              <h3 className="text-xl font-bold mb-2">{activeTab}</h3>
              <p className="text-gray-400">This section is under development</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}