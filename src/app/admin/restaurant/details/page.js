"use client"
import React, { useState } from 'react';
import { 
  Home, 
  Settings, 
  ShoppingCart, 
  Users, 
  Store, 
  Utensils, 
  Wallet, 
  FileText, 
  Shield, 
  AlertTriangle, 
  Layout, 
  Image, 
  Grid, 
  BarChart3, 
  Table, 
  Map,
  Search,
  Globe,
  RotateCcw,
  Bell,
  User,
  ChevronDown,
  ChevronRight,
  Star,
  Plus,
  Check
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Bar, ComposedChart } from 'recharts';

const RestaurantDetails = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('Last Day');
  const [sortBy, setSortBy] = useState('Popular - Best Seller');
  const [uploadDate, setUploadDate] = useState('Upload Date - Newest');
  const [rating, setRating] = useState('Rating - Average');

  const chartData = [
    { month: 1, orders: 85, earnings: 65 },
    { month: 2, orders: 95, earnings: 75 },
    { month: 3, orders: 60, earnings: 55 },
    { month: 4, orders: 110, earnings: 85 },
    { month: 5, orders: 75, earnings: 65 },
    { month: 6, orders: 85, earnings: 70 },
    { month: 7, orders: 45, earnings: 40 },
    { month: 8, orders: 25, earnings: 35 },
    { month: 9, orders: 95, earnings: 75 },
    { month: 10, orders: 55, earnings: 50 },
    { month: 11, orders: 85, earnings: 70 },
    { month: 12, orders: 65, earnings: 75 }
  ];

  const menuItems = [
    {
      id: 1001,
      name: "Italian Pizza",
      category: "Pizza",
      price: 79,
      rating: 4.5,
      image: "🍕",
      bgColor: "bg-orange-100"
    },
    {
      id: 1002,
      name: "Veg Burger",
      category: "Burger",
      price: 488,
      rating: 4.5,
      image: "🍔",
      bgColor: "bg-yellow-100"
    },
    {
      id: 1003,
      name: "Spaghetti",
      category: "Noodles",
      price: 23,
      rating: 4.5,
      image: "🍝",
      bgColor: "bg-orange-100"
    },
    {
      id: 1004,
      name: "Red Velvet Cake",
      category: "Dessert",
      price: 350,
      rating: 4.5,
      image: "🍰",
      bgColor: "bg-red-100"
    },
    {
      id: 1005,
      name: "Mix Salad",
      category: "Appetizers",
      price: 645.2,
      rating: 4.5,
      image: "🥗",
      bgColor: "bg-green-100"
    },
    {
      id: 1006,
      name: "Espresso Coffee",
      category: "Coffee",
      price: 419.45,
      rating: 4.5,
      image: "☕",
      bgColor: "bg-amber-100"
    },
    {
      id: 1007,
      name: "Steamed Dumplings",
      category: "Appetizers",
      price: 58.5,
      rating: 3.5,
      image: "🥟",
      bgColor: "bg-gray-100"
    },
    {
      id: 1008,
      name: "Gujarati Thali",
      category: "Appetizers",
      price: 58.5,
      rating: 4.5,
      image: "🍛",
      bgColor: "bg-orange-100"
    },
    {
      id: 1009,
      name: "Chickenpea Hummus",
      category: "Appetizers",
      price: 58.5,
      rating: 4.5,
      image: "🥙",
      bgColor: "bg-yellow-100"
    },
    {
      id: 1010,
      name: "Butter Cookies",
      category: "Dessert",
      price: 665,
      rating: 4.5,
      image: "🍪",
      bgColor: "bg-amber-100"
    }
  ];

  const reviews = [
    {
      id: 1,
      name: "Marina Stanton",
      avatar: "👩",
      verified: true,
      rating: 5,
      comment: "SO DELICIOUS 😍 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      flag: "🇺🇸"
    },
    {
      id: 2,
      name: "Ryan Rhiel Madsen",
      avatar: "👨",
      verified: true,
      rating: 5,
      comment: "SO DELICIOUS 😍❤️ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      flag: "🇺🇸"
    }
  ];

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: false },
    { icon: Settings, label: "Manage", active: false },
    { icon: ShoppingCart, label: "Orders", active: false, hasDropdown: true },
    { icon: Users, label: "Customers", active: false, hasDropdown: true },
    { icon: Store, label: "Restaurants", active: true, hasDropdown: true, subItems: [
      { label: "Restaurants List", active: false },
      { label: "Restaurant Details", active: true },
      { label: "Add Restaurant", active: false },
      { label: "Edit Restaurant", active: false }
    ]},
    { icon: Utensils, label: "Dishes", active: false, hasDropdown: true },
    { icon: Users, label: "Sellers", active: false, hasDropdown: true },
    { icon: Wallet, label: "Wallet", active: false },
    { icon: FileText, label: "Extra Pages", active: false, hasDropdown: true },
    { icon: Shield, label: "Authentication", active: false, hasDropdown: true },
    { icon: AlertTriangle, label: "Error Pages", active: false, hasDropdown: true },
    { icon: Layout, label: "UI Elements", active: false },
    { icon: Image, label: "Widget", active: false },
    { icon: Grid, label: "Icons", active: false, hasDropdown: true },
    { icon: FileText, label: "Forms", active: false, hasDropdown: true },
    { icon: BarChart3, label: "Apex Charts", active: false, hasDropdown: true },
    { icon: Table, label: "Tables", active: false, hasDropdown: true },
    { icon: Map, label: "Maps", active: false, hasDropdown: true }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-500 text-yellow-500" style={{clipPath: 'inset(0 50% 0 0)'}} />);
      stars.push(<Star key="half-empty" className="w-4 h-4 text-gray-300 absolute" />);
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
    }
    
    return stars;
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search for items..." 
                  className="bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="w-5 h-5 text-gray-400" />
              <RotateCcw className="w-5 h-5 text-gray-400" />
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-400" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center">1</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-sm font-medium">Kaiya Botosh</p>
                  <p className="text-xs text-gray-400">Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Header */}
        <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Healthy Feast Corner</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Restaurants</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-orange-500">Healthy Feast Corner</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Restaurant Header */}
          <div className="mb-6">
            <div className="relative h-48 rounded-lg overflow-hidden mb-4" 
                 style={{
                   backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 200"><rect width="800" height="200" fill="%23f59e0b"/><path d="M0,100 Q200,50 400,100 T800,100 L800,200 L0,200 Z" fill="%23f97316"/></svg>')`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center'
                 }}>
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              <div className="absolute bottom-4 left-4 flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-3xl">
                  🍽️
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Healthy Feast Corner</h2>
                  <p className="text-white/80">Since 2013</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-6">
              {/* Chart */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Cost & Usage by Instance type</h3>
                  <select 
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded px-3 py-1 text-sm"
                  >
                    <option>Last Day</option>
                    <option>Last Week</option>
                    <option>Last Month</option>
                  </select>
                </div>
                
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis 
                        dataKey="month" 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                      />
                      <YAxis 
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9CA3AF', fontSize: 12 }}
                      />
                      <Bar dataKey="orders" fill="#10B981" radius={[4, 4, 0, 0]} />
                      <Line 
                        type="monotone" 
                        dataKey="earnings" 
                        stroke="#3B82F6" 
                        strokeWidth={2}
                        dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                      />
                    </ComposedChart>
                  </ResponsiveContainer>
                </div>
                
                <div className="flex items-center justify-center space-x-6 mt-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">Orders</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-400">Earnings</span>
                  </div>
                </div>
              </div>

              {/* Menu */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Menu</h3>
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
                    <Plus className="w-4 h-4" />
                    <span>Add Dish</span>
                  </button>
                </div>

                <div className="flex flex-wrap gap-4 mb-6">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm"
                  >
                    <option>Popular - Best Seller</option>
                    <option>Price - Low to High</option>
                    <option>Price - High to Low</option>
                  </select>
                  <select 
                    value={uploadDate}
                    onChange={(e) => setUploadDate(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm"
                  >
                    <option>Upload Date - Newest</option>
                    <option>Upload Date - Oldest</option>
                  </select>
                  <select 
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded px-3 py-2 text-sm"
                  >
                    <option>Rating - Average</option>
                    <option>Rating - Highest</option>
                    <option>Rating - Lowest</option>
                  </select>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left py-3 px-2 text-gray-400 font-medium">
                          <input type="checkbox" className="rounded" />
                        </th>
                        <th className="text-left py-3 px-2 text-gray-400 font-medium">Dish</th>
                        <th className="text-left py-3 px-2 text-gray-400 font-medium">Category</th>
                        <th className="text-left py-3 px-2 text-gray-400 font-medium">Price</th>
                        <th className="text-left py-3 px-2 text-gray-400 font-medium">Order ID</th>
                        <th className="text-left py-3 px-2 text-gray-400 font-medium">Rating</th>
                      </tr>
                    </thead>
                    <tbody>
                      {menuItems.map((item) => (
                        <tr key={item.id} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                          <td className="py-4 px-2">
                            <input type="checkbox" className="rounded" />
                          </td>
                          <td className="py-4 px-2">
                            <div className="flex items-center space-x-3">
                              <div className={`w-10 h-10 rounded-lg ${item.bgColor} flex items-center justify-center text-lg`}>
                                {item.image}
                              </div>
                              <span className="font-medium">{item.name}</span>
                            </div>
                          </td>
                          <td className="py-4 px-2 text-gray-300">{item.category}</td>
                          <td className="py-4 px-2 text-gray-300">$ {item.price}</td>
                          <td className="py-4 px-2 text-gray-300">{item.id}</td>
                          <td className="py-4 px-2">
                            <div className="flex items-center space-x-1">
                              {renderStars(item.rating)}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Seller Personal Detail */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-semibold mb-4">Seller Personal Detail</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Owner Name:</span>
                    <span>Hollie Bruggen</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Status:</span>
                    <span className="text-green-500">active</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Email:</span>
                    <span className="text-sm">hbruggen@garard.ru</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Contact No:</span>
                    <span>1078632848</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Orders:</span>
                    <span>17</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Location:</span>
                    <span>Mae Lan</span>
                  </div>
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
                
                {/* Rating bars */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 w-4">5</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '85%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 w-4">4</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 w-4">3</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 w-4">2</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-400 w-4">1</span>
                    <div className="flex-1 bg-gray-700 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold">4.5 ⭐</div>
                    <div className="text-sm text-gray-400">485 rated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">91%</div>
                    <div className="text-sm text-gray-400">Recommended</div>
                  </div>
                </div>

                {/* Reviews */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-700 pb-4 last:border-b-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center">
                          {review.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium text-sm">{review.name}</span>
                            <span>{review.flag}</span>
                            {review.verified && (
                              <div className="flex items-center space-x-1">
                                <Check className="w-3 h-3 text-green-500" />
                                <span className="text-xs text-green-500">Verified Buyer</span>
                              </div>
                            )}
                          </div>
                          <div className="flex items-center space-x-1 mt-1">
                            {renderStars(review.rating)}
                          </div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-800 border-t border-gray-700 px-6 py-4">
          <p className="text-sm text-gray-400 text-center">
            Designed, crafted and coded with ❤️ by Coderthemes.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;