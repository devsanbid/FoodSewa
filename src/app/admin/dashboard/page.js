"use client"

import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Maximize, 
  Bell, 
  ChevronDown, 
  ChevronRight,
  BarChart3,
  Users,
  ShoppingCart,
  User,
  Utensils,
  Coffee,
  Pizza,
  Star,
  Heart
} from 'lucide-react';

export default function YumDashboard() {
  const [sortBy, setSortBy] = useState('Ascending');
  const [statusFilter, setStatusFilter] = useState('All');

  const stats = [
    { value: '325.7K', label: 'Total Revenue', change: '10% Increase', positive: true },
    { value: '2.6K', label: 'New Orders', change: '50% Increase', positive: true },
    { value: '12.6K', label: 'Received Orders', change: '34% Increase', positive: true },
    { value: '476', label: 'Reviews', change: '5% Decrease', positive: false },
    { value: '865', label: 'New Reach', change: '48% Increase', positive: true },
    { value: '9.2K', label: 'Successful Orders', change: '8% Decrease', positive: false }
  ];

  const categories = [
    { name: 'Coffee', icon: Coffee, color: 'bg-orange-500' },
    { name: 'Burger', icon: () => <div className="text-2xl">🍔</div>, color: 'bg-orange-500' },
    { name: 'Noodles', icon: () => <div className="text-2xl">🍜</div>, color: 'bg-red-500' },
    { name: 'Pizza', icon: Pizza, color: 'bg-yellow-500' }
  ];

  const bestSelling = [
    { name: 'Italian Pizza', price: '$39.5', image: '🍕' },
    { name: 'Veg Burger', price: '$483', image: '🍔' },
    { name: 'Spaghetti', price: '$23', image: '🍝' }
  ];

  const recentOrders = [
    { id: '#C0E4F7', dish: 'Italian Pizza', rating: 4.5, reviews: 431, total: '$359.69', image: '🍕' },
    { id: '#1293F', dish: 'Veg Burger', rating: 4.5, reviews: 623, total: '$350.3', image: '🍔' },
    { id: '#9F36CA', dish: 'Spaghetti', rating: 4.5, reviews: 1687, total: '$87.59', image: '🍝' },
    { id: '#A657A0', dish: 'Mix Salad', rating: 4.5, reviews: 4325, total: '$21.49', image: '🥗' },
    { id: '#BCD211', dish: 'Red Velvet Cake', rating: 4.5, reviews: 6687, total: '$463.61', image: '🍰' },
    { id: '#1521A5', dish: 'Espresso Coffee', rating: 4.5, reviews: 1065, total: '$333.31', image: '☕' }
  ];

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: true },
    { icon: Users, label: 'Manage', hasSubmenu: true },
    { icon: ShoppingCart, label: 'Orders', hasSubmenu: true },
    { icon: Users, label: 'Customers', hasSubmenu: true },
    { icon: Utensils, label: 'Restaurants', hasSubmenu: true },
    { icon: Pizza, label: 'Dishes', hasSubmenu: true },
    { icon: User, label: 'Sellers', hasSubmenu: true },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'Wallet' },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'Extra Pages', hasSubmenu: true },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'Authentication', hasSubmenu: true },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'Error Pages', hasSubmenu: true },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'UI Elements' },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'Widget' },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'Icons', hasSubmenu: true },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'Forms', hasSubmenu: true },
    { icon: BarChart3, label: 'Apex Charts', hasSubmenu: true },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'Tables', hasSubmenu: true },
    { icon: () => <div className="w-5 h-5 bg-gray-600 rounded"></div>, label: 'Maps', hasSubmenu: true }
  ];

  const StatCard = ({ stat }) => (
    <div className="bg-gray-800 p-6 rounded-lg">
      <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
      <div className="text-gray-400 text-sm mb-2">{stat.label}</div>
      <div className={`text-sm ${stat.positive ? 'text-green-400' : 'text-red-400'}`}>
        {stat.change}
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4 overflow-y-auto">
        {/* Logo */}
        <div className="flex items-center mb-8">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold mr-3">
            Y
          </div>
          <span className="text-xl font-bold">Yum</span>
        </div>

        {/* Menu Items */}
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <div key={index} className={`flex items-center justify-between p-2 rounded hover:bg-gray-700 cursor-pointer ${item.active ? 'bg-gray-700 text-orange-500' : 'text-gray-300'}`}>
              <div className="flex items-center">
                <item.icon className="w-5 h-5 mr-3" />
                <span className="text-sm">{item.label}</span>
              </div>
              {item.hasSubmenu && <ChevronDown className="w-4 h-4" />}
            </div>
          ))}
        </nav>

        {/* Upgrade Section */}
        <div className="mt-8 p-4 bg-gray-700 rounded-lg">
          <div className="flex items-center mb-2">
            <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center mr-2">
              <span className="text-xs">⚡</span>
            </div>
            <span className="text-sm font-medium">Upgrade Your Plan. Find Out here</span>
          </div>
          <button className="w-full mt-2 py-2 bg-orange-500 text-white rounded text-sm font-medium hover:bg-orange-600">
            Contact Support
          </button>
        </div>

        {/* Profile */}
        <div className="mt-4 flex items-center text-sm">
          <User className="w-4 h-4 mr-2" />
          <span>Profile</span>
        </div>
        <div className="mt-2 flex items-center text-sm text-red-400">
          <span className="mr-2">🚪</span>
          <span>Logout</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold mr-4">Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search for items..." 
                className="pl-10 pr-4 py-2 bg-gray-800 rounded-lg text-sm w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            
            {/* Icons */}
            <button className="p-2 hover:bg-gray-800 rounded">
              <Globe className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded">
              <Maximize className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded relative">
              <Bell className="w-5 h-5" />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
            </button>
            
            {/* Profile */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-600 rounded-full"></div>
              <div>
                <div className="text-sm font-medium">Kalyo Botosh</div>
                <div className="text-xs text-gray-400">Admin</div>
              </div>
            </div>
          </div>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-400 mb-6">
          <span>Admin</span>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-orange-500">Dashboard</span>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} />
          ))}
        </div>

        {/* Categories */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Category</h2>
            <button className="text-orange-500 text-sm hover:underline">View all →</button>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg text-center hover:bg-gray-700 cursor-pointer">
                <div className={`w-12 h-12 ${category.color} rounded-full mx-auto mb-3 flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-sm text-gray-300">{category.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Best Selling Products */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Best Selling Products</h2>
            <button className="text-orange-500 text-sm hover:underline">View all →</button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {bestSelling.map((product, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg">
                <div className="text-6xl mb-4 text-center">{product.image}</div>
                <h3 className="font-semibold mb-2">{product.name}</h3>
                <div className="text-orange-500 font-bold">{product.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Orders */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Recent Orders</h2>
            <div className="flex space-x-4">
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-gray-800 text-sm px-3 py-1 rounded border border-gray-600 focus:outline-none focus:border-orange-500"
              >
                <option>Sort : Ascending</option>
                <option>Sort : Descending</option>
              </select>
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="bg-gray-800 text-sm px-3 py-1 rounded border border-gray-600 focus:outline-none focus:border-orange-500"
              >
                <option>Status : All</option>
                <option>Status : Pending</option>
                <option>Status : Completed</option>
              </select>
            </div>
          </div>

          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 border-b border-gray-700 text-sm text-gray-400">
              <div>Order ID</div>
              <div>Dish</div>
              <div className="text-right">Total</div>
            </div>
            
            {recentOrders.map((order, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 border-b border-gray-700 hover:bg-gray-750">
                <div className="text-gray-400 text-sm">{order.id}</div>
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{order.image}</div>
                  <div>
                    <div className="font-medium text-sm">{order.dish}</div>
                    <div className="flex items-center text-xs text-gray-400 mt-1">
                      <div className="flex items-center mr-2">
                        {[...Array(4)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        ))}
                        <Star className="w-3 h-3 fill-yellow-400/50 text-yellow-400" />
                      </div>
                      <span>({order.reviews})</span>
                    </div>
                  </div>
                </div>
                <div className="text-right font-medium">{order.total}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-400">
          <div className="flex items-center justify-center">
            Designed, crafted and coded with <Heart className="w-4 h-4 text-red-500 mx-1" /> by Coderthemes.com
          </div>
        </div>
      </div>
    </div>
  );
}