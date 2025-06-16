"use client"
import React, { useState } from 'react';
import { 
  Search, 
  ChevronDown, 
  Menu,
  X,
  Globe,
  Maximize2,
  Bell,
  User,
  BarChart3,
  Users,
  ShoppingCart,
  UserCheck,
  Building2,
  UtensilsCrossed,
  Wallet,
  FileText,
  Shield,
  Settings,
  HelpCircle,
  Zap,
  LogOut,
  Star,
  StarHalf
} from 'lucide-react';

export default function SellerDetails() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sortBy, setSortBy] = useState('Ascending');
  const [statusFilter, setStatusFilter] = useState('All');

  const orderHistory = [
    { 
      date: '12/03/2022', 
      orderId: '#C0E4F7', 
      dish: 'Italian Pizza', 
      rating: 4.5, 
      reviews: 231, 
      amount: '$359.69', 
      status: 'Refunded',
      image: '🍕'
    },
    { 
      date: '04/25/2023', 
      orderId: '#12393F', 
      dish: 'Veg Burger', 
      rating: 5, 
      reviews: 523, 
      amount: '$350.3', 
      status: 'Paid',
      image: '🍔'
    },
    { 
      date: '06/20/2023', 
      orderId: '#9F36CA', 
      dish: 'Spaghetti', 
      rating: 4.5, 
      reviews: 6667, 
      amount: '$67.99', 
      status: 'Cancelled',
      image: '🍝'
    },
    { 
      date: '03/02/2023', 
      orderId: '#A657A0', 
      dish: 'Mix Salad', 
      rating: 5, 
      reviews: 4325, 
      amount: '$21.49', 
      status: 'Paid',
      image: '🥗'
    },
    { 
      date: '05/05/2023', 
      orderId: '#8CD211', 
      dish: 'Red Velvet Cake', 
      rating: 4.5, 
      reviews: 6667, 
      amount: '$463.61', 
      status: 'Refunded',
      image: '🍰'
    },
    { 
      date: '06/07/2023', 
      orderId: '#51911A8', 
      dish: 'Espresso Coffee', 
      rating: 5, 
      reviews: 1055, 
      amount: '$333.31', 
      status: 'Refunded',
      image: '☕'
    },
    { 
      date: '09/23/2023', 
      orderId: '#6AF783', 
      dish: 'Steamed Dumplings', 
      rating: 4.5, 
      reviews: 1921, 
      amount: '$391', 
      status: 'Paid',
      image: '🥟'
    },
    { 
      date: '05/02/2023', 
      orderId: '#A6C5AA', 
      dish: 'Gujarati Thali', 
      rating: 4.5, 
      reviews: 1021, 
      amount: '$150.63', 
      status: 'Paid',
      image: '🍛'
    },
    { 
      date: '05/22/2023', 
      orderId: '#B07041', 
      dish: 'Chickenpea Hummus', 
      rating: 4, 
      reviews: 1021, 
      amount: '$24.61', 
      status: 'Cancelled',
      image: '🧆'
    },
    { 
      date: '04/13/2023', 
      orderId: '#94516A', 
      dish: 'Butter Cookies', 
      rating: 5, 
      reviews: 223, 
      amount: '$72.21', 
      status: 'Paid',
      image: '🍪'
    }
  ];

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', href: '#' },
    { icon: Settings, label: 'Manage', href: '#' },
    { icon: ShoppingCart, label: 'Orders', href: '#', hasSubmenu: true },
    { icon: Users, label: 'Customers', href: '#', hasSubmenu: true },
    { icon: Building2, label: 'Restaurants', href: '#', hasSubmenu: true },
    { icon: UtensilsCrossed, label: 'Dishes', href: '#', hasSubmenu: true },
    { icon: UserCheck, label: 'Sellers', href: '#', active: true, hasSubmenu: true, submenu: [
      { label: 'Sellers List', href: '#' },
      { label: 'Seller Details', href: '#', active: true },
      { label: 'Add Seller', href: '#' },
      { label: 'Edit Seller', href: '#' }
    ]},
    { icon: Wallet, label: 'Wallet', href: '#' },
    { icon: FileText, label: 'Extra Pages', href: '#', hasSubmenu: true },
    { icon: Shield, label: 'Authentication', href: '#', hasSubmenu: true },
    { icon: HelpCircle, label: 'Error Pages', href: '#', hasSubmenu: true },
    { icon: Settings, label: 'UI Elements', href: '#', hasSubmenu: true },
    { icon: FileText, label: 'Forms', href: '#', hasSubmenu: true },
    { icon: BarChart3, label: 'Apex Charts', href: '#', hasSubmenu: true },
    { icon: FileText, label: 'Tables', href: '#', hasSubmenu: true },
    { icon: Globe, label: 'Maps', href: '#', hasSubmenu: true }
  ];

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  const renderStars = (rating, reviewCount) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />);
    }

    return (
      <div className="flex items-center space-x-1">
        <div className="flex">{stars}</div>
        <span className="text-gray-400 text-sm">({reviewCount})</span>
      </div>
    );
  };

  const getStatusBadge = (status) => {
    const statusClasses = {
      'Paid': 'bg-green-900 text-green-300 border border-green-700',
      'Refunded': 'bg-purple-900 text-purple-300 border border-purple-700',
      'Cancelled': 'bg-orange-900 text-orange-300 border border-orange-700'
    };

    return (
      <span className={`px-2 py-1 rounded text-xs font-medium ${statusClasses[status]}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}



      {/* Main content */}
      <div className="lg:ml-64">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={toggleSidebar}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-700"
              >
                <Menu className="w-5 h-5" />
              </button>
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search for items..."
                  className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 rounded-lg hover:bg-gray-700">
                <Globe className="w-5 h-5" />
              </button>
              <button className="p-2 rounded-lg hover:bg-gray-700">
                <Maximize2 className="w-5 h-5" />
              </button>
              <div className="relative">
                <button className="p-2 rounded-lg hover:bg-gray-700">
                  <Bell className="w-5 h-5" />
                </button>
                <span className="absolute -top-1 -right-1 bg-orange-500 text-xs rounded-full w-5 h-5 flex items-center justify-center">1</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div className="hidden md:block">
                  <div className="text-sm font-medium">Katya Botosh</div>
                  <div className="text-xs text-gray-400">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page content */}
        <div className="p-4 md:p-6">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-gray-400 mb-6">
            <span>Sellers</span>
            <ChevronDown className="w-4 h-4 rotate-[-90deg]" />
            <span className="text-orange-400">Sellers Details</span>
          </div>

          {/* Page header */}
          <h1 className="text-2xl font-bold mb-6">Sellers Details</h1>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Profile Card */}
            <div className="xl:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gray-700">
                    <img 
                      src="/api/placeholder/96/96" 
                      alt="Karlyn Newsome"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h2 className="text-xl font-semibold text-white">Karlyn Newsome</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-300 mb-2">ABOUT ME :</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Hi I'm Katya Botosh has been the industry's standard dummy text ever 
                      since the 1500s, when an unknown printer took a galley of type.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <span className="text-sm font-medium text-gray-300 min-w-[80px]">Full Name :</span>
                      <span className="text-sm text-gray-400">Karlyn Newsome</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-sm font-medium text-gray-300 min-w-[80px]">Mobile :</span>
                      <span className="text-sm text-gray-400">1102607941</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-sm font-medium text-gray-300 min-w-[80px]">Email :</span>
                      <span className="text-sm text-gray-400">knewsome3@alexa.com</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <span className="text-sm font-medium text-gray-300 min-w-[80px]">Location :</span>
                      <span className="text-sm text-gray-400">Gaoyan</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sales Order History */}
            <div className="xl:col-span-2">
              <div className="bg-gray-800 rounded-lg">
                {/* Table Header */}
                <div className="p-4 border-b border-gray-700">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h2 className="text-lg font-semibold">Sales Order History</h2>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="relative">
                        <select 
                          value={sortBy}
                          onChange={(e) => setSortBy(e.target.value)}
                          className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none pr-8"
                        >
                          <option>Sort : Ascending</option>
                          <option>Sort : Descending</option>
                          <option>Sort : Date</option>
                          <option>Sort : Amount</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                      </div>

                      <div className="relative">
                        <select 
                          value={statusFilter}
                          onChange={(e) => setStatusFilter(e.target.value)}
                          className="bg-gray-700 text-white px-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none pr-8"
                        >
                          <option>Status : All</option>
                          <option>Status : Paid</option>
                          <option>Status : Refunded</option>
                          <option>Status : Cancelled</option>
                        </select>
                        <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Table */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-700">
                      <tr>
                        <th className="p-4 text-left text-sm font-medium text-gray-300">Date</th>
                        <th className="p-4 text-left text-sm font-medium text-gray-300">Order ID</th>
                        <th className="p-4 text-left text-sm font-medium text-gray-300">Dish</th>
                        <th className="p-4 text-left text-sm font-medium text-gray-300 hidden lg:table-cell">Amount</th>
                        <th className="p-4 text-left text-sm font-medium text-gray-300">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                      {orderHistory.map((order, index) => (
                        <tr key={index} className="hover:bg-gray-700 transition-colors">
                          <td className="p-4 text-gray-300 text-sm">{order.date}</td>
                          <td className="p-4 text-gray-300 text-sm font-mono">{order.orderId}</td>
                          <td className="p-4">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-lg">
                                {order.image}
                              </div>
                              <div>
                                <div className="text-white font-medium text-sm">{order.dish}</div>
                                <div className="hidden sm:block">
                                  {renderStars(order.rating, order.reviews)}
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="p-4 text-white font-medium hidden lg:table-cell">{order.amount}</td>
                          <td className="p-4">
                            <div className="flex flex-col space-y-1">
                              {getStatusBadge(order.status)}
                              <span className="text-white font-medium text-sm lg:hidden">{order.amount}</span>
                            </div>
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
            <p>Designed, crafted and coded with ❤️ by Coderthemes.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}