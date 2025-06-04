"use client"

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Globe, 
  Maximize2, 
  Bell, 
  Plus, 
  Edit3, 
  Eye, 
  Trash2,
  BarChart3,
  Users,
  Wallet,
  FileText,
  Shield,
  AlertCircle,
  Zap,
  HelpCircle,
  User,
  LogOut,
  Utensils,
  UtensilsCrossed
} from 'lucide-react';

export default function RestaurantDashboard() {
  const [activeMenu, setActiveMenu] = useState({
    restaurants: false,
    dishes: true,
    sellers: false,
    extraPages: false,
    authentication: false,
    errorPages: false,
    icons: false,
    forms: false,
    apexCharts: false
  });

  const [sortOrder, setSortOrder] = useState('Ascending');

  const dishes = [
    {
      id: 1,
      name: 'Italian Pizza',
      category: 'Pizza',
      price: '$79',
      quantity: 16,
      createdBy: 'Admin',
      status: 'Published',
      icon: '🍕'
    },
    {
      id: 2,
      name: 'Veg Burger',
      category: 'Burger',
      price: '$488',
      quantity: 20,
      createdBy: 'Restaurant',
      status: 'Published',
      icon: '🍔'
    },
    {
      id: 3,
      name: 'Spaghetti',
      category: 'Noodles',
      price: '$23',
      quantity: 10,
      createdBy: 'Admin',
      status: 'Published',
      icon: '🍝'
    },
    {
      id: 4,
      name: 'Red Velvet Cake',
      category: 'Dessert',
      price: '$350',
      quantity: 230,
      createdBy: 'Admin',
      status: 'Draft',
      icon: '🍰'
    },
    {
      id: 5,
      name: 'Mix Salad',
      category: 'Appetizers',
      price: '$645.2',
      quantity: 0,
      createdBy: 'Admin',
      status: 'Reviewing',
      icon: '🥗'
    },
    {
      id: 6,
      name: 'Espresso Coffee',
      category: 'Coffee',
      price: '$419.45',
      quantity: 23,
      createdBy: 'Restaurant',
      status: 'Published',
      icon: '☕'
    },
    {
      id: 7,
      name: 'Steamed Dumplings',
      category: 'Appetizers',
      price: '$58.5',
      quantity: 34,
      createdBy: 'Admin',
      status: 'Published',
      icon: '🥟'
    },
    {
      id: 8,
      name: 'Gujarati Thali',
      category: 'Appetizers',
      price: '$58.5',
      quantity: 34,
      createdBy: 'Admin',
      status: 'Published',
      icon: '🍛'
    },
    {
      id: 9,
      name: 'Chickenpea Hummus',
      category: 'Appetizers',
      price: '$58.5',
      quantity: 34,
      createdBy: 'Admin',
      status: 'Draft',
      icon: '🫘'
    },
    {
      id: 10,
      name: 'Butter Cookies',
      category: 'Dessert',
      price: '$665',
      quantity: 209,
      createdBy: 'Admin',
      status: 'Published',
      icon: '🍪'
    }
  ];

  const toggleMenu = (menu) => {
    setActiveMenu(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      'Published': 'bg-green-500/20 text-green-400 border border-green-500/30',
      'Draft': 'bg-purple-500/20 text-purple-400 border border-purple-500/30',
      'Reviewing': 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="flex h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-slate-800 border-r border-slate-700">
        {/* Logo */}
        <div className="flex items-center p-4 border-b border-slate-700">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
            <Utensils className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-semibold">Yum</span>
        </div>

        {/* Navigation */}
        <nav className="p-4 space-y-2">
          {/* Restaurants */}
          <div>
            <button
              onClick={() => toggleMenu('restaurants')}
              className="flex items-center justify-between w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex items-center">
                <UtensilsCrossed className="w-5 h-5 mr-3" />
                <span>Restaurants</span>
              </div>
              {activeMenu.restaurants ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Dishes */}
          <div>
            <button
              onClick={() => toggleMenu('dishes')}
              className="flex items-center justify-between w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex items-center">
                <Utensils className="w-5 h-5 mr-3" />
                <span>Dishes</span>
              </div>
              {activeMenu.dishes ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
            {activeMenu.dishes && (
              <div className="ml-8 mt-2 space-y-1">
                <div className="flex items-center p-2 text-orange-400 bg-slate-700/50 rounded-lg">
                  <div className="w-2 h-2 bg-orange-400 rounded-full mr-3"></div>
                  <span className="text-sm">Dishes List</span>
                </div>
                <button className="flex items-center p-2 text-slate-400 hover:bg-slate-700 rounded-lg w-full">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mr-3"></div>
                  <span className="text-sm">Dish Details</span>
                </button>
                <button className="flex items-center p-2 text-slate-400 hover:bg-slate-700 rounded-lg w-full">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mr-3"></div>
                  <span className="text-sm">Add Dish</span>
                </button>
                <button className="flex items-center p-2 text-slate-400 hover:bg-slate-700 rounded-lg w-full">
                  <div className="w-2 h-2 bg-slate-600 rounded-full mr-3"></div>
                  <span className="text-sm">Edit Dish</span>
                </button>
              </div>
            )}
          </div>

          {/* Sellers */}
          <div>
            <button
              onClick={() => toggleMenu('sellers')}
              className="flex items-center justify-between w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3" />
                <span>Sellers</span>
              </div>
              {activeMenu.sellers ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Wallet */}
          <button className="flex items-center w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg">
            <Wallet className="w-5 h-5 mr-3" />
            <span>Wallet</span>
          </button>

          {/* Extra Pages */}
          <div>
            <button
              onClick={() => toggleMenu('extraPages')}
              className="flex items-center justify-between w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-3" />
                <span>Extra Pages</span>
              </div>
              {activeMenu.extraPages ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Authentication */}
          <div>
            <button
              onClick={() => toggleMenu('authentication')}
              className="flex items-center justify-between w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex items-center">
                <Shield className="w-5 h-5 mr-3" />
                <span>Authentication</span>
              </div>
              {activeMenu.authentication ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Error Pages */}
          <div>
            <button
              onClick={() => toggleMenu('errorPages')}
              className="flex items-center justify-between w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 mr-3" />
                <span>Error Pages</span>
              </div>
              {activeMenu.errorPages ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* UI Elements */}
          <button className="flex items-center w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg">
            <Zap className="w-5 h-5 mr-3" />
            <span>UI Elements</span>
          </button>

          {/* Widget */}
          <button className="flex items-center w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg">
            <div className="w-5 h-5 mr-3 bg-slate-600 rounded"></div>
            <span>Widget</span>
          </button>

          {/* Icons */}
          <div>
            <button
              onClick={() => toggleMenu('icons')}
              className="flex items-center justify-between w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex items-center">
                <div className="w-5 h-5 mr-3 bg-slate-600 rounded"></div>
                <span>Icons</span>
              </div>
              {activeMenu.icons ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Forms */}
          <div>
            <button
              onClick={() => toggleMenu('forms')}
              className="flex items-center justify-between w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-3" />
                <span>Forms</span>
              </div>
              {activeMenu.forms ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>

          {/* Apex Charts */}
          <div>
            <button
              onClick={() => toggleMenu('apexCharts')}
              className="flex items-center justify-between w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg"
            >
              <div className="flex items-center">
                <BarChart3 className="w-5 h-5 mr-3" />
                <span>Apex Charts</span>
              </div>
              {activeMenu.apexCharts ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        </nav>


        {/* Bottom Section */}
        <div className="absolute bottom-4 left-4 right-4 space-y-2">
          <button className="flex items-center w-full p-2 text-slate-300 hover:bg-slate-700 rounded-lg">
            <User className="w-5 h-5 mr-3" />
            <span>Profile</span>
          </button>
          <button className="flex items-center w-full p-2 text-red-400 hover:bg-slate-700 rounded-lg">
            <LogOut className="w-5 h-5 mr-3" />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="bg-slate-700 border border-slate-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 w-80"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-slate-400 hover:text-white">
                <Globe className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white">
                <Maximize2 className="w-5 h-5" />
              </button>
              <button className="p-2 text-slate-400 hover:text-white relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">2</span>
              </button>
              <div className="flex items-center space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face"
                  alt="Profile"
                  className="w-8 h-8 rounded-full"
                />
                <div className="text-sm">
                  <div className="text-white">Kaiya Botosh</div>
                  <div className="text-slate-400">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Breadcrumb */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-white">Dishes List</h1>
            <div className="flex items-center text-sm text-slate-400">
              <span>Dishes</span>
              <span className="mx-2">›</span>
              <span className="text-orange-400">Dishes List</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="bg-slate-800 rounded-lg border border-slate-700">
            {/* Table Header */}
            <div className="p-6 border-b border-slate-700">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-white">Dishes List</h2>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-slate-400">Sort :</span>
                    <select
                      value={sortOrder}
                      onChange={(e) => setSortOrder(e.target.value)}
                      className="bg-slate-700 border border-slate-600 rounded-lg px-3 py-1 text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option>Ascending</option>
                      <option>Descending</option>
                    </select>
                  </div>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Dish</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-4 text-slate-300 font-medium">Dish Name</th>
                    <th className="text-left p-4 text-slate-300 font-medium">Category</th>
                    <th className="text-left p-4 text-slate-300 font-medium">Price</th>
                    <th className="text-left p-4 text-slate-300 font-medium">Quantity</th>
                    <th className="text-left p-4 text-slate-300 font-medium">Created By</th>
                    <th className="text-left p-4 text-slate-300 font-medium">Status</th>
                    <th className="text-left p-4 text-slate-300 font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {dishes.map((dish) => (
                    <tr key={dish.id} className="border-b border-slate-700 hover:bg-slate-700/50">
                      <td className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-xl">
                            {dish.icon}
                          </div>
                          <span className="text-white font-medium">{dish.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-slate-300">{dish.category}</td>
                      <td className="p-4 text-slate-300">{dish.price}</td>
                      <td className="p-4 text-slate-300">{dish.quantity}</td>
                      <td className="p-4 text-slate-300">{dish.createdBy}</td>
                      <td className="p-4">
                        {getStatusBadge(dish.status)}
                      </td>
                      <td className="p-4">
                        <div className="flex items-center space-x-2">
                          <button className="p-1 text-slate-400 hover:text-orange-400">
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-blue-400">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button className="p-1 text-slate-400 hover:text-red-400">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-slate-700">
              <div className="text-center text-slate-400 text-sm">
                Designed, crafted and coded with ❤️ by Coderthemes.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}