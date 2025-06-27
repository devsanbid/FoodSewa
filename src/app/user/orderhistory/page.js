"use client"

import React, { useState } from 'react';
import { User, Edit3, MapPin, Phone, Mail, Calendar, ShoppingBag, Heart, Settings, Bell, LogOut, Camera, Save, X } from 'lucide-react';

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [userInfo, setUserInfo] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street, New York, NY 10001',
    joinDate: 'January 2023',
    avatar: null
  });

  const [tempUserInfo, setTempUserInfo] = useState(userInfo);

  const handleEdit = () => {
    setIsEditing(true);
    setTempUserInfo(userInfo);
  };

  const handleSave = () => {
    setUserInfo(tempUserInfo);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempUserInfo(userInfo);
    setIsEditing(false);
  };

  const handleInputChange = (field, value) => {
    setTempUserInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'orders', label: 'My Orders', icon: ShoppingBag },
    { id: 'favorites', label: 'Favorites', icon: Heart },
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'notifications', label: 'Notifications', icon: Bell },
  ];

  const recentOrders = [
    { id: 1, restaurant: 'Pizza Palace', items: 'Margherita Pizza, Garlic Bread', date: '2024-06-15', total: '$28.50', status: 'Delivered' },
    { id: 2, restaurant: 'Burger Barn', items: 'Classic Burger, Fries', date: '2024-06-12', total: '$15.99', status: 'Delivered' },
    { id: 3, restaurant: 'Sushi Station', items: 'California Roll, Miso Soup', date: '2024-06-10', total: '$22.00', status: 'Delivered' },
  ];

  const favoriteRestaurants = [
    { id: 1, name: 'Pizza Palace', cuisine: 'Italian', rating: 4.8 },
    { id: 2, name: 'Burger Barn', cuisine: 'American', rating: 4.5 },
    { id: 3, name: 'Sushi Station', cuisine: 'Japanese', rating: 4.9 },
    { id: 4, name: 'Taco Town', cuisine: 'Mexican', rating: 4.6 },
  ];

  const renderProfileContent = () => (
    <div className="space-y-6">
      {/* Profile Header */}
      <div className="bg-gray-800 rounded-lg p-6">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
          <div className="relative">
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {userInfo.avatar ? (
                <img src={userInfo.avatar} alt="Profile" className="w-full h-full rounded-full object-cover" />
              ) : (
                userInfo.name.split(' ').map(n => n[0]).join('')
              )}
            </div>
            {isEditing && (
              <button className="absolute -bottom-2 -right-2 bg-orange-500 text-white p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            )}
          </div>
          
          <div className="flex-1 text-center md:text-left">
            {isEditing ? (
              <input
                type="text"
                value={tempUserInfo.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="text-2xl font-bold bg-gray-700 text-white rounded px-3 py-1 mb-2 w-full md:w-auto"
              />
            ) : (
              <h1 className="text-2xl font-bold text-white mb-2">{userInfo.name}</h1>
            )}
            <p className="text-gray-400 mb-4">Member since {userInfo.joinDate}</p>
            
            {!isEditing ? (
              <button
                onClick={handleEdit}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors flex items-center space-x-2 mx-auto md:mx-0"
              >
                <Edit3 className="w-4 h-4" />
                <span>Edit Profile</span>
              </button>
            ) : (
              <div className="flex space-x-3 justify-center md:justify-start">
                <button
                  onClick={handleSave}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors flex items-center space-x-2"
                >
                  <Save className="w-4 h-4" />
                  <span>Save</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors flex items-center space-x-2"
                >
                  <X className="w-4 h-4" />
                  <span>Cancel</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-gray-800 rounded-lg p-6">
        <h2 className="text-xl font-semibold text-white mb-4">Contact Information</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-orange-500" />
            {isEditing ? (
              <input
                type="email"
                value={tempUserInfo.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-gray-700 text-white rounded px-3 py-2 flex-1"
              />
            ) : (
              <span className="text-gray-300">{userInfo.email}</span>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-orange-500" />
            {isEditing ? (
              <input
                type="tel"
                value={tempUserInfo.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className="bg-gray-700 text-white rounded px-3 py-2 flex-1"
              />
            ) : (
              <span className="text-gray-300">{userInfo.phone}</span>
            )}
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-orange-500 mt-1" />
            {isEditing ? (
              <textarea
                value={tempUserInfo.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                className="bg-gray-700 text-white rounded px-3 py-2 flex-1 resize-none"
                rows="2"
              />
            ) : (
              <span className="text-gray-300">{userInfo.address}</span>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-500 mb-1">42</div>
          <div className="text-gray-400 text-sm">Total Orders</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-500 mb-1">$1,250</div>
          <div className="text-gray-400 text-sm">Total Spent</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 text-center">
          <div className="text-2xl font-bold text-orange-500 mb-1">8</div>
          <div className="text-gray-400 text-sm">Favorite Places</div>
        </div>
      </div>
    </div>
  );

  const renderOrdersContent = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">Recent Orders</h2>
      {recentOrders.map((order) => (
        <div key={order.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750 transition-colors cursor-pointer">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-3 md:space-y-0">
            <div className="flex-1">
              <h3 className="text-white font-semibold mb-1">{order.restaurant}</h3>
              <p className="text-gray-400 text-sm mb-2">{order.items}</p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center space-x-1">
                  <Calendar className="w-4 h-4" />
                  <span>{order.date}</span>
                </span>
                <span className="text-orange-500 font-medium">{order.total}</span>
              </div>
            </div>
            <div className="text-right">
              <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                {order.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderFavoritesContent = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-white mb-4">Favorite Restaurants</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {favoriteRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="bg-gray-800 rounded-lg p-4 hover:bg-gray-750 transition-colors cursor-pointer">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-white font-semibold">{restaurant.name}</h3>
              <Heart className="w-5 h-5 text-orange-500 fill-current" />
            </div>
            <p className="text-gray-400 text-sm mb-2">{restaurant.cuisine} Cuisine</p>
            <div className="flex items-center space-x-1">
              <div className="flex text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={i < Math.floor(restaurant.rating) ? 'text-orange-500' : 'text-gray-600'}>★</span>
                ))}
              </div>
              <span className="text-gray-400 text-sm ml-2">{restaurant.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return renderProfileContent();
      case 'orders':
        return renderOrdersContent();
      case 'favorites':
        return renderFavoritesContent();
      case 'settings':
        return (
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Settings</h2>
            <p className="text-gray-400">Settings panel coming soon...</p>
          </div>
        );
      case 'notifications':
        return (
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-white mb-4">Notifications</h2>
            <p className="text-gray-400">Notification preferences coming soon...</p>
          </div>
        );
      default:
        return renderProfileContent();
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <div className="bg-orange-500 w-10 h-10 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">Y</span>
              </div>
              <span className="text-white text-xl font-semibold">Yum</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Dishes</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Menu</a>
              <a href="#" className="text-orange-500 font-medium">Profile</a>
            </nav>

            <button className="md:hidden text-gray-300 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg p-4">
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setActiveTab(item.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-left ${
                        activeTab === item.id
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                      }`}
                    >
                      <IconComponent className="w-5 h-5" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                
                <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-300 hover:bg-red-600 hover:text-white transition-colors text-left mt-8">
                  <LogOut className="w-5 h-5" />
                  <span>Log Out</span>
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}