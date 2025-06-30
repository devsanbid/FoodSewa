'use client'
import React, { useState } from 'react';
import { Home, Mail, Bell, Settings, DollarSign, Star, Percent, TrendingUp, TrendingDown, Calendar, Filter, Download, Eye, Edit3, Trash2, Plus, ArrowUpRight, ArrowDownRight } from 'lucide-react';

export default function RestaurantPayoutReviews() {
  const [activeTab, setActiveTab] = useState('Payout Earnings');
  const [selectedPeriod, setSelectedPeriod] = useState('This Month');
  const [discountModalOpen, setDiscountModalOpen] = useState(false);
  const [newDiscount, setNewDiscount] = useState({
    name: '',
    type: 'percentage',
    value: '',
    minOrder: '',
    expiryDate: '',
    isActive: true
  });

  const tabs = ['Payout Earnings', 'Reviews/Rating', 'Discount'];
  const periods = ['Today', 'This Week', 'This Month', 'Last Month', 'This Year'];

  // Payout Data
  const payoutStats = [
    { label: 'Total Earnings', value: '$12,847.50', change: '+12.5%', trend: 'up', icon: <DollarSign size={20} /> },
    { label: 'Pending Payout', value: '$2,340.80', change: '+5.2%', trend: 'up', icon: <TrendingUp size={20} /> },
    { label: 'Completed Payouts', value: '$45,230.20', change: '+8.7%', trend: 'up', icon: <ArrowUpRight size={20} /> },
    { label: 'Commission Fees', value: '$1,284.75', change: '-2.1%', trend: 'down', icon: <ArrowDownRight size={20} /> }
  ];

  const payoutHistory = [
    { id: 'PO-001', date: '2024-02-01', amount: '$2,847.50', status: 'Completed', method: 'Bank Transfer' },
    { id: 'PO-002', date: '2024-01-28', amount: '$3,240.80', status: 'Completed', method: 'Bank Transfer' },
    { id: 'PO-003', date: '2024-01-25', amount: '$1,950.30', status: 'Processing', method: 'Bank Transfer' },
    { id: 'PO-004', date: '2024-01-22', amount: '$4,120.45', status: 'Completed', method: 'Bank Transfer' },
    { id: 'PO-005', date: '2024-01-19', amount: '$2,680.90', status: 'Failed', method: 'Bank Transfer' }
  ];

  // Reviews Data
  const reviewStats = [
    { label: 'Average Rating', value: '4.8', change: '+0.2', trend: 'up', icon: <Star size={20} /> },
    { label: 'Total Reviews', value: '1,247', change: '+23', trend: 'up', icon: <TrendingUp size={20} /> },
    { label: '5 Star Reviews', value: '892', change: '+18', trend: 'up', icon: <Star size={20} /> },
    { label: 'Response Rate', value: '94%', change: '+3%', trend: 'up', icon: <ArrowUpRight size={20} /> }
  ];

  const recentReviews = [
    {
      id: 1,
      customer: 'Sita Sharma',
      rating: 5,
      comment: 'Excellent food quality and fast delivery. The seafood noodles were amazing!',
      date: '2 hours ago',
      replied: false
    },
    {
      id: 2,
      customer: 'Ram Bahadur',
      rating: 4,
      comment: 'Good taste but delivery was a bit delayed. Overall satisfied with the service.',
      date: '5 hours ago',
      replied: true
    },
    {
      id: 3,
      customer: 'Maya Gurung',
      rating: 5,
      comment: 'Best restaurant in town! Always fresh ingredients and great customer service.',
      date: '1 day ago',
      replied: true
    },
    {
      id: 4,
      customer: 'Arjun Thapa',
      rating: 3,
      comment: 'Food was okay but could be better. The portion size was smaller than expected.',
      date: '2 days ago',
      replied: false
    }
  ];

  // Discount Data
  const activeDiscounts = [
    {
      id: 1,
      name: 'Weekend Special',
      type: 'percentage',
      value: 20,
      minOrder: 25,
      used: 45,
      totalUses: 100,
      expiry: '2024-02-29',
      isActive: true
    },
    {
      id: 2,
      name: 'New Customer',
      type: 'fixed',
      value: 5,
      minOrder: 15,
      used: 23,
      totalUses: 50,
      expiry: '2024-03-15',
      isActive: true
    },
    {
      id: 3,
      name: 'Bulk Order',
      type: 'percentage',
      value: 15,
      minOrder: 50,
      used: 12,
      totalUses: 30,
      expiry: '2024-02-20',
      isActive: false
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'Processing': return 'bg-yellow-500';
      case 'Failed': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < rating ? 'text-yellow-500 fill-current' : 'text-gray-400'}
      />
    ));
  };

  const handleAddDiscount = () => {
    // Add discount logic here
    setDiscountModalOpen(false);
    setNewDiscount({
      name: '',
      type: 'percentage',
      value: '',
      minOrder: '',
      expiryDate: '',
      isActive: true
    });
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
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Financial Management</h1>
              <p className="text-gray-400">Tuesday, 2 Feb 2021</p>
            </div>
            <div className="flex items-center space-x-4">
              <select 
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-orange-500 focus:outline-none"
              >
                {periods.map(period => (
                  <option key={period} value={period}>{period}</option>
                ))}
              </select>
              <button className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors">
                <Download size={16} />
                <span>Export</span>
              </button>
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

          {/* Payout Earnings Tab */}
          {activeTab === 'Payout Earnings' && (
            <div>
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {payoutStats.map((stat, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-gray-700 rounded-lg text-orange-500">
                        {stat.icon}
                      </div>
                      <div className={`flex items-center space-x-1 ${stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                        <span className="text-sm">{stat.change}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Payout History */}
              <div className="bg-gray-800 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Payout History</h3>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <Filter size={16} />
                    </button>
                    <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
                      <Calendar size={16} />
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 text-gray-400 font-medium">Payout ID</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Date</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Amount</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Status</th>
                        <th className="text-left py-3 text-gray-400 font-medium">Method</th>
                        <th className="text-right py-3 text-gray-400 font-medium">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {payoutHistory.map((payout) => (
                        <tr key={payout.id} className="border-b border-gray-700 hover:bg-gray-750 transition-colors">
                          <td className="py-4 font-medium">{payout.id}</td>
                          <td className="py-4 text-gray-300">{payout.date}</td>
                          <td className="py-4 font-bold text-green-500">{payout.amount}</td>
                          <td className="py-4">
                            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(payout.status)} text-white`}>
                              {payout.status}
                            </span>
                          </td>
                          <td className="py-4 text-gray-300">{payout.method}</td>
                          <td className="py-4 text-right">
                            <button className="p-2 text-gray-400 hover:text-orange-500 hover:bg-gray-700 rounded-lg transition-colors">
                              <Eye size={16} />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Reviews/Rating Tab */}
          {activeTab === 'Reviews/Rating' && (
            <div>
              {/* Review Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {reviewStats.map((stat, index) => (
                  <div key={index} className="bg-gray-800 p-6 rounded-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-gray-700 rounded-lg text-yellow-500">
                        {stat.icon}
                      </div>
                      <div className="flex items-center space-x-1 text-green-500">
                        <TrendingUp size={16} />
                        <span className="text-sm">{stat.change}</span>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold mb-1">{stat.value}</h3>
                    <p className="text-gray-400 text-sm">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Reviews */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6">Recent Reviews</h3>
                <div className="space-y-4">
                  {recentReviews.map((review) => (
                    <div key={review.id} className="p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center">
                            {review.customer.charAt(0)}
                          </div>
                          <div>
                            <h4 className="font-medium">{review.customer}</h4>
                            <div className="flex items-center space-x-2">
                              <div className="flex space-x-1">
                                {renderStars(review.rating)}
                              </div>
                              <span className="text-sm text-gray-400">{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          {review.replied ? (
                            <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full">Replied</span>
                          ) : (
                            <span className="px-2 py-1 bg-yellow-500 text-white text-xs rounded-full">Pending</span>
                          )}
                          <button className="p-1 text-gray-400 hover:text-orange-500 transition-colors">
                            <Edit3 size={14} />
                          </button>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-3">{review.comment}</p>
                      {!review.replied && (
                        <button className="text-orange-500 hover:text-orange-400 text-sm font-medium">
                          Reply to Review
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Discount Tab */}
          {activeTab === 'Discount' && (
            <div>
              {/* Add Discount Button */}
              <div className="flex justify-end mb-6">
                <button 
                  onClick={() => setDiscountModalOpen(true)}
                  className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg transition-colors"
                >
                  <Plus size={16} />
                  <span>Create Discount</span>
                </button>
              </div>

              {/* Active Discounts */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-6">Active Discounts</h3>
                <div className="grid gap-4">
                  {activeDiscounts.map((discount) => (
                    <div key={discount.id} className="p-4 bg-gray-700 rounded-lg flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="p-3 bg-orange-500 rounded-lg">
                          <Percent size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{discount.name}</h4>
                          <p className="text-gray-400">
                            {discount.type === 'percentage' ? `${discount.value}% off` : `$${discount.value} off`} 
                            {' '}• Min order: ${discount.minOrder}
                          </p>
                          <div className="flex items-center space-x-4 mt-2">
                            <span className="text-sm text-gray-400">
                              Used: {discount.used}/{discount.totalUses}
                            </span>
                            <span className="text-sm text-gray-400">
                              Expires: {discount.expiry}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs ${discount.isActive ? 'bg-green-500' : 'bg-red-500'} text-white`}>
                              {discount.isActive ? 'Active' : 'Inactive'}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 text-gray-400 hover:text-orange-500 hover:bg-gray-600 rounded-lg transition-colors">
                          <Edit3 size={16} />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-red-500 hover:bg-gray-600 rounded-lg transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Discount Modal */}
      {discountModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-6 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Create New Discount</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Discount Name</label>
                <input
                  type="text"
                  value={newDiscount.name}
                  onChange={(e) => setNewDiscount({...newDiscount, name: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="e.g., Weekend Special"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Discount Type</label>
                <select
                  value={newDiscount.type}
                  onChange={(e) => setNewDiscount({...newDiscount, type: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none"
                >
                  <option value="percentage">Percentage</option>
                  <option value="fixed">Fixed Amount</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  {newDiscount.type === 'percentage' ? 'Percentage (%)' : 'Amount ($)'}
                </label>
                <input
                  type="number"
                  value={newDiscount.value}
                  onChange={(e) => setNewDiscount({...newDiscount, value: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder={newDiscount.type === 'percentage' ? '20' : '5'}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Minimum Order ($)</label>
                <input
                  type="number"
                  value={newDiscount.minOrder}
                  onChange={(e) => setNewDiscount({...newDiscount, minOrder: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none"
                  placeholder="25"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Expiry Date</label>
                <input
                  type="date"
                  value={newDiscount.expiryDate}
                  onChange={(e) => setNewDiscount({...newDiscount, expiryDate: e.target.value})}
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 focus:border-orange-500 focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center justify-end space-x-3 mt-6">
              <button 
                onClick={() => setDiscountModalOpen(false)}
                className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleAddDiscount}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition-colors"
              >
                Create Discount
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}