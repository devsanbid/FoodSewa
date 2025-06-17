"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Calendar, 
  ChevronDown, 
  Plus, 
  Menu,
  X,
  Globe,
  Maximize2,
  Bell,
  User,
  BarChart3,
  Settings,
  ShoppingCart,
  Users,
  Store,
  Utensils,
  Wallet,
  FileText,
  Shield,
  AlertCircle,
  Layers,
  Zap,
  Map,
  Table,
  PieChart,
  File,
  Lightbulb,
  Star
} from 'lucide-react';

const CustomerDetailsPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Ascending');
  const [statusFilter, setStatusFilter] = useState('All');

  const orderHistory = [
    {
      date: "12/03/2022",
      orderId: "#C0E4F7",
      dish: "Italian Pizza",
      dishImage: "🍕",
      rating: 4.5,
      reviews: 231,
      amount: "$359.69",
      status: "Refunded"
    },
    {
      date: "04/25/2023",
      orderId: "#12933F",
      dish: "Veg Burger",
      dishImage: "🍔",
      rating: 5.0,
      reviews: 523,
      amount: "$350.3",
      status: "Paid"
    },
    {
      date: "06/20/2023",
      orderId: "#9F36CA",
      dish: "Spaghetti",
      dishImage: "🍝",
      rating: 4.5,
      reviews: 6667,
      amount: "$67.99",
      status: "Cancelled"
    },
    {
      date: "03/02/2023",
      orderId: "#A657A0",
      dish: "Mix Salad",
      dishImage: "🥗",
      rating: 5.0,
      reviews: 4325,
      amount: "$21.49",
      status: "Paid"
    },
    {
      date: "05/05/2023",
      orderId: "#8CD211",
      dish: "Red Velvet Cake",
      dishImage: "🍰",
      rating: 4.5,
      reviews: 6667,
      amount: "$463.61",
      status: "Refunded"
    },
    {
      date: "06/07/2023",
      orderId: "#5191A8",
      dish: "Espresso Coffee",
      dishImage: "☕",
      rating: 5.0,
      reviews: 1055,
      amount: "$333.31",
      status: "Refunded"
    },
    {
      date: "09/23/2023",
      orderId: "#6AF783",
      dish: "Steamed Dumplings",
      dishImage: "🥟",
      rating: 4.0,
      reviews: 1921,
      amount: "$391",
      status: "Paid"
    },
    {
      date: "05/02/2023",
      orderId: "#A6C5AA",
      dish: "Gujarati Thali",
      dishImage: "🍛",
      rating: 4.5,
      reviews: 1921,
      amount: "$150.63",
      status: "Paid"
    },
    {
      date: "05/22/2023",
      orderId: "#B07041",
      dish: "Chickenpea Hummus",
      dishImage: "🧄",
      rating: 4.0,
      reviews: 1921,
      amount: "$24.61",
      status: "Cancelled"
    },
    {
      date: "04/13/2023",
      orderId: "#94516A",
      dish: "Butter Cookies",
      dishImage: "🍪",
      rating: 5.0,
      reviews: 223,
      amount: "$72.21",
      status: "Paid"
    }
  ];

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: false },
    { icon: Settings, label: 'Manage', active: false },
    { icon: ShoppingCart, label: 'Orders', active: false, hasSubmenu: true },
    { icon: Users, label: 'Customers', active: true, hasSubmenu: true, submenu: [
      { label: 'Customers List', active: false },
      { label: 'Customer Details', active: true },
      { label: 'Add Customer', active: false },
      { label: 'Edit Customer', active: false }
    ]},
    { icon: Store, label: 'Restaurants', active: false, hasSubmenu: true },
    { icon: Utensils, label: 'Dishes', active: false, hasSubmenu: true },
    { icon: Users, label: 'Sellers', active: false, hasSubmenu: true },
    { icon: Wallet, label: 'Wallet', active: false },
    { icon: FileText, label: 'Extra Pages', active: false, hasSubmenu: true },
    { icon: Shield, label: 'Authentication', active: false, hasSubmenu: true },
    { icon: AlertCircle, label: 'Error Pages', active: false, hasSubmenu: true },
    { icon: Layers, label: 'UI Elements', active: false },
    { icon: Lightbulb, label: 'Widget', active: false },
    { icon: Zap, label: 'Icons', active: false, hasSubmenu: true },
    { icon: File, label: 'Forms', active: false, hasSubmenu: true },
    { icon: PieChart, label: 'Apex Charts', active: false, hasSubmenu: true },
    { icon: Table, label: 'Tables', active: false, hasSubmenu: true },
    { icon: Map, label: 'Maps', active: false, hasSubmenu: true }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={14} className="text-yellow-400 fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={14} className="text-yellow-400 fill-current opacity-50" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={14} className="text-gray-600" />);
    }

    return stars;
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'paid':
        return 'bg-green-500 text-white';
      case 'refunded':
        return 'bg-red-500 text-white';
      case 'cancelled':
        return 'bg-yellow-500 text-black';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">


      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">


        {/* Page Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900">
          <div className="container mx-auto px-4 py-6">
            {/* Breadcrumb */}
            <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
              <span>Customers</span>
              <span>›</span>
              <span className="text-orange-400">Customers Details</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <h1 className="text-2xl font-bold mb-4 lg:mb-0">Customers Details</h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Customer Profile Card */}
              <div className="lg:col-span-1">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 bg-gray-600 rounded-full mb-4 overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face" 
                        alt="Hollie Bruggen"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h2 className="text-xl font-bold mb-2">Hollie Bruggen</h2>
                    
                    <div className="w-full space-y-3 mt-4">
                      <div className="text-left">
                        <p className="text-sm font-medium text-gray-400 mb-1">ABOUT ME :</p>
                        <p className="text-sm text-gray-300 leading-relaxed">
                          Hi I'm Katya Botosh has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                        </p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-400">Full Name :</span>
                          <span className="text-sm text-white">Hollie Bruggen</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-400">Mobile :</span>
                          <span className="text-sm text-white">1078332848</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-400">Email :</span>
                          <span className="text-sm text-white">hbruggen0@narod.ru</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm font-medium text-gray-400">Location :</span>
                          <span className="text-sm text-white">Maa Lan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order History */}
              <div className="lg:col-span-2">
                <div className="bg-gray-800 rounded-lg p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                    <h2 className="text-lg font-semibold mb-4 sm:mb-0">Customer Order history</h2>
                    <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                      <div className="relative">
                        <select 
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none pr-8 w-full sm:w-auto"
                        >
                          <option>Sort : Ascending</option>
                          <option>Sort : Descending</option>
                          <option>Sort : Date</option>
                          <option>Sort : Amount</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                      </div>
                      
                      <div className="relative">
                        <select 
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none pr-8 w-full sm:w-auto"
                        >
                          <option>Status : All</option>
                          <option>Status : Paid</option>
                          <option>Status : Refunded</option>
                          <option>Status : Cancelled</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                      </div>
                    </div>
                  </div>

                  {/* Order History Table */}
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-700">
                        <tr>
                          <th className="px-3 py-3 text-left text-sm font-medium text-gray-300">Date</th>
                          <th className="px-3 py-3 text-left text-sm font-medium text-gray-300">Order ID</th>
                          <th className="px-3 py-3 text-left text-sm font-medium text-gray-300">Dish</th>
                          <th className="px-3 py-3 text-left text-sm font-medium text-gray-300">Amount</th>
                          <th className="px-3 py-3 text-left text-sm font-medium text-gray-300">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-700">
                        {orderHistory.map((order, index) => (
                          <tr key={index} className="hover:bg-gray-700 transition-colors">
                            <td className="px-3 py-4 text-sm text-gray-300">{order.date}</td>
                            <td className="px-3 py-4 text-sm text-gray-300">{order.orderId}</td>
                            <td className="px-3 py-4">
                              <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center text-lg">
                                  {order.dishImage}
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-white">{order.dish}</p>
                                  <div className="flex items-center space-x-1">
                                    <div className="flex items-center space-x-1">
                                      {renderStars(order.rating)}
                                    </div>
                                    <span className="text-xs text-gray-400">({order.reviews})</span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-3 py-4 text-sm font-medium text-white">{order.amount}</td>
                            <td className="px-3 py-4">
                              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                                {order.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-400">
              Designed, crafted and coded with ❤️ by Coderthemes.com
            </div>
          </div>
        </main>
      </div>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default CustomerDetailsPage;