'use client'
import React, { useState } from 'react';
import { 
  ChefHat, 
  Users, 
  ShoppingCart, 
  DollarSign, 
  Clock, 
  Calendar,
  TrendingUp,
  AlertCircle,
  Bell,
  Settings,
  Menu,
  X,
  Plus,
  Eye,
  Edit,
  Trash2,
  Star,
  Search,
  Filter,
  Upload,
  Home,
  Mail,
  ArrowUp,
  ArrowDown
} from 'lucide-react';

export default function RestaurantDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [notifications, setNotifications] = useState(3);
  const [orders, setOrders] = useState([
    { id: '#001', table: 'Table 5', items: 3, status: 'Preparing', time: '12:30 PM', total: '$45.50' },
    { id: '#002', table: 'Table 2', items: 2, status: 'Ready', time: '12:25 PM', total: '$32.00' },
    { id: '#003', table: 'Table 8', items: 4, status: 'Served', time: '12:15 PM', total: '$68.75' },
    { id: '#004', table: 'Table 1', items: 2, status: 'Preparing', time: '12:28 PM', total: '$28.99' },
    { id: '#005', table: 'Table 12', items: 5, status: 'Ready', time: '12:20 PM', total: '$89.25' },
  ]);

  const stats = [
    { title: 'Today\'s Revenue', value: '$2,847.50', change: '+12.5%', trend: 'up', icon: DollarSign, color: 'bg-green-500' },
    { title: 'Active Orders', value: '23', change: '+5', trend: 'up', icon: ShoppingCart, color: 'bg-blue-500' },
    { title: 'Customers Today', value: '156', change: '+8.2%', trend: 'up', icon: Users, color: 'bg-purple-500' },
    { title: 'Avg. Wait Time', value: '18 min', change: '-3 min', trend: 'down', icon: Clock, color: 'bg-orange-500' }
  ];

  const topMenuItems = [
    { name: 'Margherita Pizza', orders: 24, revenue: '$384.50', change: '+15%' },
    { name: 'Caesar Salad', orders: 18, revenue: '$234.00', change: '+8%' },
    { name: 'Grilled Salmon', orders: 15, revenue: '$374.85', change: '+12%' },
    { name: 'Beef Burger', orders: 21, revenue: '$294.00', change: '+5%' },
    { name: 'Chicken Pasta', orders: 12, revenue: '$180.00', change: '-2%' }
  ];

  const handleButtonClick = (action, item = null) => {
    const messages = {
      'view-orders': 'Opening orders management...',
      'add-order': 'Creating new order...',
      'edit-order': `Editing order ${item}...`,
      'delete-order': `Canceling order ${item}...`,
      'view-analytics': 'Loading detailed analytics...',
      'manage-reservations': 'Opening reservations system...',
      'check-inventory': 'Checking inventory levels...',
      'view-reports': 'Generating reports...',
      'home': 'Dashboard home',
      'mail': 'Opening messages...',
      'notifications': 'Checking notifications...',
      'settings': 'Opening settings...',
      'menu-management': 'Opening menu management...',
      'staff-management': 'Managing staff schedules...',
    };
    
    alert(messages[action] || `${action} clicked!`);
    
    if (action === 'notifications') {
      setNotifications(0);
    }
  };

  const renderOverviewDashboard = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white">Dashboard Overview</h1>
          <p className="text-gray-400 mt-1">Tuesday, 2 Feb 2021</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => handleButtonClick('add-order')}
            className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>New Order</span>
          </button>
          <button 
            onClick={() => handleButtonClick('view-reports')}
            className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <TrendingUp className="h-4 w-4" />
            <span>Reports</span>
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-gray-800 rounded-xl p-6 hover:bg-gray-750 transition-colors">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${stat.color}`}>
                <stat.icon className="h-6 w-6 text-white" />
              </div>
              <div className={`flex items-center gap-1 text-sm ${
                stat.trend === 'up' ? 'text-green-400' : 'text-red-400'
              }`}>
                {stat.trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">{stat.title}</p>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-gray-800 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <button 
            onClick={() => handleButtonClick('manage-reservations')}
            className="flex flex-col items-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
          >
            <Calendar className="h-8 w-8 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-300">Reservations</span>
          </button>
          <button 
            onClick={() => handleButtonClick('menu-management')}
            className="flex flex-col items-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
          >
            <ChefHat className="h-8 w-8 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-300">Menu</span>
          </button>
          <button 
            onClick={() => handleButtonClick('check-inventory')}
            className="flex flex-col items-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
          >
            <ShoppingCart className="h-8 w-8 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-300">Inventory</span>
          </button>
          <button 
            onClick={() => handleButtonClick('staff-management')}
            className="flex flex-col items-center p-4 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors group"
          >
            <Users className="h-8 w-8 text-orange-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-gray-300">Staff</span>
          </button>
        </div>
      </div>

      {/* Recent Orders and Top Menu Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Recent Orders</h3>
              <button 
                onClick={() => handleButtonClick('view-orders')}
                className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors"
              >
                View All
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            {orders.slice(0, 5).map((order) => (
              <div key={order.id} className="p-4 border-b border-gray-700 hover:bg-gray-750 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="text-white font-medium">{order.id}</span>
                      <span className="text-gray-400 text-sm">{order.table}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-400">
                      <span>{order.items} items</span>
                      <span>{order.time}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium mb-1">{order.total}</div>
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      order.status === 'Ready' ? 'bg-green-900 text-green-300' :
                      order.status === 'Preparing' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-gray-700 text-gray-300'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                  <div className="ml-4 flex gap-1">
                    <button 
                      onClick={() => handleButtonClick('edit-order', order.id)}
                      className="p-1 text-gray-400 hover:text-orange-400 transition-colors"
                    >
                      <Edit className="h-4 w-4" />
                    </button>
                    <button 
                      onClick={() => handleButtonClick('delete-order', order.id)}
                      className="p-1 text-gray-400 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Menu Items */}
        <div className="bg-gray-800 rounded-xl overflow-hidden">
          <div className="p-6 border-b border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">Top Menu Items</h3>
              <button 
                onClick={() => handleButtonClick('view-analytics')}
                className="text-orange-400 hover:text-orange-300 font-medium text-sm transition-colors"
              >
                View Analytics
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {topMenuItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <p className="text-white font-medium text-sm">{item.name}</p>
                      <p className="text-gray-400 text-xs">{item.orders} orders</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-medium text-sm">{item.revenue}</p>
                    <p className={`text-xs ${item.change.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>
                      {item.change}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <div className={`fixed inset-y-0 left-0 z-50 w-16 bg-gray-800 shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
        <div className="flex flex-col items-center py-6 space-y-6">
          {/* Logo */}
          <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
            <ChefHat className="h-6 w-6 text-white" />
          </div>
          
          {/* Navigation Icons */}
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => handleButtonClick('home')}
              className="p-3 bg-orange-500 text-white rounded-lg transition-colors"
            >
              <Home className="h-5 w-5" />
            </button>
            <button 
              onClick={() => handleButtonClick('mail')}
              className="p-3 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Mail className="h-5 w-5" />
            </button>
            <button 
              onClick={() => handleButtonClick('notifications')}
              className="relative p-3 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Bell className="h-5 w-5" />
              {notifications > 0 && (
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {notifications}
                </span>
              )}
            </button>
            <button 
              onClick={() => handleButtonClick('settings')}
              className="p-3 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <Settings className="h-5 w-5" />
            </button>
          </nav>
          
          {/* Bottom Navigation Indicator */}
          <div className="mt-auto">
            <div className="w-1 h-8 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Mobile Header */}
        <header className="lg:hidden bg-gray-800 border-b border-gray-700">
          <div className="flex items-center justify-between h-16 px-6">
            <button
              onClick={() => setSidebarOpen(true)}
              className="text-gray-400 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
            <h1 className="text-white font-semibold">RestaurantOS</h1>
            <div className="w-6"></div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {renderOverviewDashboard()}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
}