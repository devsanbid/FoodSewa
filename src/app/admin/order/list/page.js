"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Maximize, 
  Bell, 
  ChevronDown, 
  Star, 
  Eye,
  BarChart3,
  Users,
  ShoppingBag,
  FileText,
  User,
  Store,
  Utensils,
  UserCheck,
  Wallet,
  FileImage,
  Shield,
  AlertTriangle,
  Palette,
  HelpCircle,
  BarChart,
  Table,
  Map,
  Settings,
  LogOut
} from 'lucide-react';

const Dashboard = () => {
  const [selectedSort, setSelectedSort] = useState('Ascending');
  const [selectedStatus, setSelectedStatus] = useState('All');

  const orderHistory = [
    {
      date: '12/03/2022',
      orderId: '#C0E4F7',
      dish: 'Italian Pizza',
      rating: 4.5,
      reviews: 731,
      total: '$359.89',
      status: 'Refunded',
      statusColor: 'bg-red-500'
    },
    {
      date: '04/25/2023',
      orderId: '#12939F',
      dish: 'Veg Burger',
      rating: 5.0,
      reviews: 529,
      total: '$350.3',
      status: 'Paid',
      statusColor: 'bg-green-500'
    },
    {
      date: '06/20/2023',
      orderId: '#9F36CA',
      dish: 'Spaghetti',
      rating: 4.5,
      reviews: 6667,
      total: '$67.99',
      status: 'Cancelled',
      statusColor: 'bg-yellow-500'
    },
    {
      date: '03/02/2023',
      orderId: '#A657A0',
      dish: 'Mix Salad',
      rating: 5.0,
      reviews: 4325,
      total: '$21.49',
      status: 'Paid',
      statusColor: 'bg-green-500'
    },
    {
      date: '06/05/2023',
      orderId: '#9CD211',
      dish: 'Red Velvet Cake',
      rating: 4.5,
      reviews: 6667,
      total: '$463.61',
      status: 'Refunded',
      statusColor: 'bg-red-500'
    },
    {
      date: '06/07/2023',
      orderId: '#51918B',
      dish: 'Espresso Coffee',
      rating: 5.0,
      reviews: 1056,
      total: '$333.31',
      status: 'Refunded',
      statusColor: 'bg-red-500'
    },
    {
      date: '08/23/2023',
      orderId: '#5AF783',
      dish: 'Steamed Dumplings',
      rating: 5.0,
      reviews: 1521,
      total: '$391',
      status: 'Paid',
      statusColor: 'bg-green-500'
    },
    {
      date: '05/02/2023',
      orderId: '#A6C5AA',
      dish: 'Gujarati Thali',
      rating: 4.5,
      reviews: 1521,
      total: '$150.63',
      status: 'Paid',
      statusColor: 'bg-green-500'
    },
    {
      date: '05/22/2023',
      orderId: '#B07041',
      dish: 'Chickenpea Hummus',
      rating: 4.0,
      reviews: 1521,
      total: '$24.81',
      status: 'Cancelled',
      statusColor: 'bg-yellow-500'
    },
    {
      date: '04/13/2023',
      orderId: '#34516A',
      dish: 'Butter Cookies',
      rating: 5.0,
      reviews: 523,
      total: '$72.21',
      status: 'Paid',
      statusColor: 'bg-green-500'
    }
  ];

  const ongoingOrders = [
    {
      type: 'Italian Pizza',
      id: '#C0E4F7',
      time: '8:25 AM',
      status: 'Waiting'
    },
    {
      type: 'Veg Burger',
      id: '#12939F',
      time: '6:35 AM',
      status: 'Waiting'
    },
    {
      type: 'Spaghetti',
      id: '#9F36CA',
      time: '6:25 AM',
      status: 'Cooking'
    },
    {
      type: 'Butter Cookies',
      id: '#34516A',
      time: '6:26 AM',
      status: 'Cooking'
    },
    {
      type: 'Espresso Coffee',
      id: '#51918B',
      time: '08:30 PM',
      status: 'Packed'
    }
  ];

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: false },
    { icon: Settings, label: 'Manage', active: false },
    { icon: ShoppingBag, label: 'Orders', active: true, hasSubmenu: true },
    { icon: Users, label: 'Customers', active: false },
    { icon: Store, label: 'Restaurants', active: false },
    { icon: Utensils, label: 'Dishes', active: false },
    { icon: UserCheck, label: 'Sellers', active: false },
    { icon: Wallet, label: 'Wallet', active: false },
    { icon: FileImage, label: 'Extra Pages', active: false },
    { icon: Shield, label: 'Authentication', active: false },
    { icon: AlertTriangle, label: 'Error Pages', active: false },
    { icon: Palette, label: 'UI Elements', active: false },
    { icon: HelpCircle, label: 'Widget', active: false },
    { icon: Settings, label: 'Icons', active: false },
    { icon: FileText, label: 'Forms', active: false },
    { icon: BarChart, label: 'Apex Charts', active: false },
    { icon: Table, label: 'Tables', active: false },
    { icon: Map, label: 'Maps', active: false }
  ];

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-3 h-3 ${
              i < fullStars 
                ? 'fill-yellow-400 text-yellow-400' 
                : i === fullStars && hasHalfStar 
                ? 'fill-yellow-400 text-yellow-400' 
                : 'text-gray-600'
            }`}
          />
        ))}
      </div>
    );
  };

  const getDishIcon = (dish) => {
    const iconClass = "w-6 h-6 text-orange-400";
    if (dish.includes('Pizza')) return '🍕';
    if (dish.includes('Burger')) return '🍔';
    if (dish.includes('Spaghetti')) return '🍝';
    if (dish.includes('Salad')) return '🥗';
    if (dish.includes('Cake')) return '🎂';
    if (dish.includes('Coffee')) return '☕';
    if (dish.includes('Dumplings')) return '🥟';
    if (dish.includes('Thali')) return '🍛';
    if (dish.includes('Hummus')) return '🫘';
    if (dish.includes('Cookies')) return '🍪';
    return '🍽️';
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white">


      {/* Main Content */}
      <div className="flex-1 flex flex-col">


        <div className="flex flex-1">
          {/* Main Dashboard Content */}
          <div className="flex-1 p-6">
            {/* Breadcrumb */}
            <div className="flex items-center text-sm text-gray-400 mb-6">
              <span>Orders</span>
              <ChevronDown className="w-4 h-4 mx-2 rotate-[-90deg]" />
              <span className="text-orange-500">Orders List</span>
            </div>

            <h1 className="text-2xl font-bold mb-6">Orders List</h1>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">📦</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Food Delivered</div>
                    <div className="text-2xl font-bold">23,568</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center mr-4">
                    <span className="text-xl">💰</span>
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Your Balance</div>
                    <div className="text-2xl font-bold">$8,904.80</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-white fill-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400">Satisfaction Rating</div>
                    <div className="text-2xl font-bold">98%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Order History */}
            <div className="bg-gray-800 rounded-lg">
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <h2 className="text-xl font-bold">Order History</h2>
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-400 mr-2">Sort:</span>
                    <select 
                      value={selectedSort}
                      onChange={(e) => setSelectedSort(e.target.value)}
                      className="bg-gray-700 text-white rounded px-3 py-1 text-sm border border-gray-600"
                    >
                      <option>Ascending</option>
                      <option>Descending</option>
                    </select>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm text-gray-400 mr-2">Status:</span>
                    <select 
                      value={selectedStatus}
                      onChange={(e) => setSelectedStatus(e.target.value)}
                      className="bg-gray-700 text-white rounded px-3 py-1 text-sm border border-gray-600"
                    >
                      <option>All</option>
                      <option>Paid</option>
                      <option>Refunded</option>
                      <option>Cancelled</option>
                    </select>
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">Date</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">Order ID</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">Dish</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">Total</th>
                      <th className="text-left p-4 text-sm font-medium text-gray-300">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((order, index) => (
                      <tr key={index} className="border-b border-gray-700 hover:bg-gray-700">
                        <td className="p-4 text-sm text-gray-300">{order.date}</td>
                        <td className="p-4 text-sm text-gray-300">{order.orderId}</td>
                        <td className="p-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-lg">{getDishIcon(order.dish)}</span>
                            </div>
                            <div>
                              <div className="text-sm font-medium text-white">{order.dish}</div>
                              <div className="flex items-center mt-1">
                                {renderStars(order.rating)}
                                <span className="text-xs text-gray-400 ml-2">({order.reviews})</span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="p-4 text-sm font-medium text-white">{order.total}</td>
                        <td className="p-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === 'Paid' ? 'bg-green-500 text-white' :
                            order.status === 'Refunded' ? 'bg-red-500 text-white' :
                            'bg-yellow-500 text-black'
                          }`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-sm text-gray-400">
              Thank you
            </div>
          </div>

          {/* Right Sidebar - Ongoing Orders */}
          <div className="w-80 bg-gray-800 border-l border-gray-700 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold">Ongoing Orders</h3>
              <span className="text-sm text-gray-400">28/05/25</span>
            </div>

            <div className="space-y-6">
              {/* Waiting Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-300">Waiting</h4>
                  <Eye className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-3">
                  {ongoingOrders.filter(order => order.status === 'Waiting').map((order, index) => (
                    <div key={index} className="flex items-center bg-gray-700 rounded-lg p-3">
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-lg">{getDishIcon(order.type)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{order.type}</div>
                        <div className="text-xs text-gray-400">{order.id}</div>
                      </div>
                      <div className="text-xs text-gray-400">{order.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cooking Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-300">Cooking</h4>
                  <Eye className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-3">
                  {ongoingOrders.filter(order => order.status === 'Cooking').map((order, index) => (
                    <div key={index} className="flex items-center bg-gray-700 rounded-lg p-3">
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-lg">{getDishIcon(order.type)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{order.type}</div>
                        <div className="text-xs text-gray-400">{order.id}</div>
                      </div>
                      <div className="text-xs text-gray-400">{order.time}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Packed Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-medium text-gray-300">Packed</h4>
                  <Eye className="w-4 h-4 text-gray-400" />
                </div>
                <div className="space-y-3">
                  {ongoingOrders.filter(order => order.status === 'Packed').map((order, index) => (
                    <div key={index} className="flex items-center bg-gray-700 rounded-lg p-3">
                      <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center mr-3">
                        <span className="text-lg">{getDishIcon(order.type)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="text-sm font-medium text-white">{order.type}</div>
                        <div className="text-xs text-gray-400">{order.id}</div>
                      </div>
                      <div className="text-xs text-gray-400">{order.time}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;