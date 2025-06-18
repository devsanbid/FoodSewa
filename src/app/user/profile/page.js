"use client"

import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Edit3, Save, X, Camera, Bell, Shield, CreditCard, Heart, Clock, Settings } from 'lucide-react';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'John Smith',
    email: 'john.smith@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, New York, NY 10001',
    joinDate: 'January 2023',
    bio: 'Food enthusiast who loves trying new restaurants and cuisines.'
  });

  const [tempData, setTempData] = useState({ ...profileData });

  const handleEdit = () => {
    setIsEditing(true);
    setTempData({ ...profileData });
  };

  const handleSave = () => {
    setProfileData({ ...tempData });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempData({ ...profileData });
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setTempData(prev => ({ ...prev, [field]: value }));
  };

  const tabItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'Order History', icon: Clock },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'payment', label: 'Payment Methods', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const orderHistory = [
    { id: '#12345', restaurant: 'Pizza Palace', date: '2024-06-15', total: '$24.50', status: 'Delivered' },
    { id: '#12344', restaurant: 'Burger Barn', date: '2024-06-12', total: '$18.75', status: 'Delivered' },
    { id: '#12343', restaurant: 'Sushi Spot', date: '2024-06-10', total: '$32.25', status: 'Delivered' }
  ];

  const favoriteRestaurants = [
    { name: 'Pizza Palace', cuisine: 'Italian', rating: 4.8 },
    { name: 'Taco Time', cuisine: 'Mexican', rating: 4.6 },
    { name: 'Dragon Garden', cuisine: 'Chinese', rating: 4.7 }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <header className="bg-slate-800 border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">Y</span>
                </div>
                <h1 className="text-xl font-bold text-white">Yum</h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
              </button>
              <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-slate-800 rounded-lg p-6 sticky top-8">
              {/* Profile Image */}
              <div className="text-center mb-6">
                <div className="relative inline-block">
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-2xl font-bold">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <button className="absolute bottom-0 right-0 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                    <Camera className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="text-xl font-semibold mt-4">{profileData.name}</h2>
                <p className="text-slate-400 text-sm">Member since {profileData.joinDate}</p>
              </div>

              {/* Navigation */}
              <nav className="space-y-2">
                {tabItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-left transition-colors ${
                        activeTab === item.id
                          ? 'bg-orange-500 text-white'
                          : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-slate-800 rounded-lg">
              {/* Profile Tab */}
              {activeTab === 'profile' && (
                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-semibold">Profile Information</h3>
                    {!isEditing ? (
                      <button
                        onClick={handleEdit}
                        className="flex items-center space-x-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded-lg transition-colors"
                      >
                        <Edit3 className="w-4 h-4" />
                        <span>Edit Profile</span>
                      </button>
                    ) : (
                      <div className="flex space-x-2">
                        <button
                          onClick={handleSave}
                          className="flex items-center space-x-2 px-4 py-2 bg-green-600 hover:bg-green-700 rounded-lg transition-colors"
                        >
                          <Save className="w-4 h-4" />
                          <span>Save</span>
                        </button>
                        <button
                          onClick={handleCancel}
                          className="flex items-center space-x-2 px-4 py-2 bg-slate-600 hover:bg-slate-700 rounded-lg transition-colors"
                        >
                          <X className="w-4 h-4" />
                          <span>Cancel</span>
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Full Name
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={tempData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-500 focus:outline-none"
                        />
                      ) : (
                        <p className="px-4 py-3 bg-slate-700 rounded-lg">{profileData.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Mail className="w-4 h-4 inline mr-2" />
                        Email Address
                      </label>
                      {isEditing ? (
                        <input
                          type="email"
                          value={tempData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-500 focus:outline-none"
                        />
                      ) : (
                        <p className="px-4 py-3 bg-slate-700 rounded-lg">{profileData.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Phone className="w-4 h-4 inline mr-2" />
                        Phone Number
                      </label>
                      {isEditing ? (
                        <input
                          type="tel"
                          value={tempData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-500 focus:outline-none"
                        />
                      ) : (
                        <p className="px-4 py-3 bg-slate-700 rounded-lg">{profileData.phone}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <Calendar className="w-4 h-4 inline mr-2" />
                        Member Since
                      </label>
                      <p className="px-4 py-3 bg-slate-700 rounded-lg text-slate-400">{profileData.joinDate}</p>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        <MapPin className="w-4 h-4 inline mr-2" />
                        Address
                      </label>
                      {isEditing ? (
                        <input
                          type="text"
                          value={tempData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-500 focus:outline-none"
                        />
                      ) : (
                        <p className="px-4 py-3 bg-slate-700 rounded-lg">{profileData.address}</p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Bio
                      </label>
                      {isEditing ? (
                        <textarea
                          value={tempData.bio}
                          onChange={(e) => handleInputChange('bio', e.target.value)}
                          rows={3}
                          className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:border-orange-500 focus:outline-none"
                        />
                      ) : (
                        <p className="px-4 py-3 bg-slate-700 rounded-lg">{profileData.bio}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Order History Tab */}
              {activeTab === 'orders' && (
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Order History</h3>
                  <div className="space-y-4">
                    {orderHistory.map((order) => (
                      <div key={order.id} className="bg-slate-700 rounded-lg p-4 hover:bg-slate-650 transition-colors">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{order.restaurant}</p>
                            <p className="text-slate-400 text-sm">Order {order.id} • {order.date}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-orange-400">{order.total}</p>
                            <span className="inline-block px-2 py-1 bg-green-600 text-green-100 text-xs rounded-full">
                              {order.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Favorites Tab */}
              {activeTab === 'favorites' && (
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Favorite Restaurants</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {favoriteRestaurants.map((restaurant, index) => (
                      <div key={index} className="bg-slate-700 rounded-lg p-4 hover:bg-slate-650 transition-colors cursor-pointer">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold">{restaurant.name}</h4>
                          <Heart className="w-5 h-5 text-red-500 fill-current" />
                        </div>
                        <p className="text-slate-400 text-sm mb-2">{restaurant.cuisine}</p>
                        <div className="flex items-center">
                          <span className="text-orange-400">★</span>
                          <span className="ml-1 text-sm">{restaurant.rating}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Payment Methods Tab */}
              {activeTab === 'payment' && (
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Payment Methods</h3>
                  <div className="space-y-4">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <CreditCard className="w-6 h-6 text-blue-400" />
                          <div>
                            <p className="font-semibold">•••• •••• •••• 1234</p>
                            <p className="text-slate-400 text-sm">Expires 12/26</p>
                          </div>
                        </div>
                        <span className="px-2 py-1 bg-green-600 text-green-100 text-xs rounded-full">Primary</span>
                      </div>
                    </div>
                    <button className="w-full py-3 border-2 border-dashed border-slate-600 rounded-lg hover:border-orange-500 transition-colors text-slate-400 hover:text-orange-400">
                      + Add New Payment Method
                    </button>
                  </div>
                </div>
              )}

              {/* Settings Tab */}
              {activeTab === 'settings' && (
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-6">Settings</h3>
                  <div className="space-y-6">
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold mb-4">Notifications</h4>
                      <div className="space-y-3">
                        <label className="flex items-center justify-between">
                          <span>Email notifications</span>
                          <input type="checkbox" defaultChecked className="toggle" />
                        </label>
                        <label className="flex items-center justify-between">
                          <span>Push notifications</span>
                          <input type="checkbox" defaultChecked className="toggle" />
                        </label>
                        <label className="flex items-center justify-between">
                          <span>Order updates</span>
                          <input type="checkbox" defaultChecked className="toggle" />
                        </label>
                      </div>
                    </div>
                    
                    <div className="bg-slate-700 rounded-lg p-4">
                      <h4 className="font-semibold mb-4">Privacy & Security</h4>
                      <div className="space-y-3">
                        <button className="w-full text-left px-4 py-2 hover:bg-slate-600 rounded-lg transition-colors">
                          <Shield className="w-4 h-4 inline mr-2" />
                          Change Password
                        </button>
                        <button className="w-full text-left px-4 py-2 hover:bg-slate-600 rounded-lg transition-colors">
                          Enable Two-Factor Authentication
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}