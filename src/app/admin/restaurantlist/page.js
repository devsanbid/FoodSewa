"use client"
import React from 'react';
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
  Phone,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const RestaurantDashboard = () => {
  const restaurants = [
    {
      id: 1,
      name: "HEALTHY FEAST CORNER",
      owner: "Hollie Bruggen",
      totalProduct: 34,
      totalSales: 425,
      address: "2123 Osprey the Blue Mountains, Townline, Feversham, ON NOC 1CO, Canada",
      email: "hbruggen@garard.ru",
      phone: "1078632848",
      icon: "🍽️",
      bgColor: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "FARMHOUSE DISH HEAVEN",
      owner: "Delainey Soden",
      totalProduct: 12,
      totalSales: 1234,
      address: "2045 Scollard Line, Essa, Ontario, L9R 1V2, Alliston, CA",
      email: "dsoden@mfda.gov",
      phone: "2847693614",
      icon: "🥞",
      bgColor: "from-yellow-500 to-orange-500"
    },
    {
      id: 3,
      name: "KITCHEN CREATION",
      owner: "Lou Hillen",
      totalProduct: 14,
      totalSales: 42,
      address: "6058 Townhigh Mountains, Sideroad, Clarksburg, ON",
      email: "lhillen2@dyndns.org",
      phone: "2816686226",
      icon: "❤️",
      bgColor: "from-red-500 to-pink-500"
    },
    {
      id: 4,
      name: "COUNTRY COOKING COVE",
      owner: "Karriyn Newsome",
      totalProduct: 53,
      totalSales: 2452,
      address: "A - 67 Concession 8, Nottawasaga RD, Glen Huron, Poland",
      email: "knewsome3@alexa.com",
      phone: "1102607641",
      icon: "🌙",
      bgColor: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      name: "GOURMET FLAVOR NOOK",
      owner: "Roley Solater",
      totalProduct: 50,
      totalSales: 1506,
      address: "2123 Osprey the Blue Mountains, Townline, Feversham, ON NOC 1CO, Canada",
      email: "rsolater4@mydailynews.com",
      phone: "9422710236",
      icon: "🍌",
      bgColor: "from-yellow-400 to-yellow-600"
    },
    {
      id: 6,
      name: "CULINARY CRAFT CABIN",
      owner: "Amelie Pluthero",
      totalProduct: 10,
      totalSales: 1052,
      address: "34 - Twilight Bungalows, Sideroad, Clarksburg, Russia",
      email: "apluthero5@tuttocitta.it",
      phone: "6692686939",
      icon: "🍕",
      bgColor: "from-red-400 to-red-600"
    },
    {
      id: 7,
      name: "RUSTIC SPICE SHACK",
      owner: "Willdon Conew",
      totalProduct: 15,
      totalSales: 257,
      address: "1003 Nuoha Apartment, Townline st, Helsinki, NGC Road, Finland",
      email: "wconew6@aol.com",
      phone: "4957750960",
      icon: "🌿",
      bgColor: "from-green-500 to-emerald-500"
    },
    {
      id: 8,
      name: "SAVORY BITES CAFE",
      owner: "Coreen Bogles",
      totalProduct: 28,
      totalSales: 357,
      address: "284 Floresome Avenue st, Shine Road, Sa Francisco, USA 847215",
      email: "cbogles7@disqus.com",
      phone: "4102508552",
      icon: "🔮",
      bgColor: "from-pink-500 to-purple-500"
    }
  ];

  const sidebarItems = [
    { icon: Home, label: "Dashboard", active: false },
    { icon: Settings, label: "Manage", active: false },
    { icon: ShoppingCart, label: "Orders", active: false, hasDropdown: true },
    { icon: Users, label: "Customers", active: false, hasDropdown: true },
    { icon: Store, label: "Restaurants", active: true, hasDropdown: true, subItems: [
      { label: "Restaurants List", active: true },
      { label: "Restaurant Details", active: false },
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

  return (
    <div className="min-h-screen bg-gray-900 text-white flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">Y</span>
            </div>
            <span className="text-xl font-bold">Yum</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto py-4">
          {sidebarItems.map((item, index) => (
            <div key={index}>
              <div className={`flex items-center px-6 py-3 hover:bg-gray-700 cursor-pointer ${
                item.active ? 'bg-gray-700 border-r-2 border-orange-500' : ''
              }`}>
                <item.icon className="w-5 h-5 mr-3" />
                <span className="flex-1 text-sm">{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </div>
              {item.active && item.subItems && (
                <div className="ml-8 border-l border-gray-700">
                  {item.subItems.map((subItem, subIndex) => (
                    <div key={subIndex} className={`pl-6 py-2 text-sm cursor-pointer hover:text-orange-500 ${
                      subItem.active ? 'text-orange-500' : 'text-gray-400'
                    }`}>
                      {subItem.label}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Upgrade Section */}
        <div className="p-6 border-t border-gray-700">
          <div className="bg-orange-500 rounded-lg p-4 text-center">
            <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-2">
              <span className="text-white">⚡</span>
            </div>
            <p className="text-white text-sm mb-2">🔥 Upgrade Your Plan. Find Out More</p>
            <button className="text-orange-200 text-xs underline">Contact Support</button>
          </div>
        </div>

        {/* Profile */}
        <div className="p-6 border-t border-gray-700 flex items-center space-x-3">
          <User className="w-6 h-6" />
          <div className="flex-1">
            <p className="text-sm">Profile</p>
          </div>
        </div>

        {/* Logout */}
        <div className="px-6 pb-6">
          <button className="flex items-center space-x-2 text-red-400 hover:text-red-300">
            <span className="text-sm">🔴</span>
            <span className="text-sm">Logout</span>
          </button>
        </div>
      </div>

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
            <h1 className="text-xl font-semibold">Restaurants List</h1>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Restaurants</span>
              <ChevronRight className="w-4 h-4" />
              <span className="text-orange-500">Restaurants List</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {restaurants.map((restaurant) => (
              <div key={restaurant.id} className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                {/* Restaurant Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${restaurant.bgColor} flex items-center justify-center text-2xl`}>
                      {restaurant.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{restaurant.name}</h3>
                      <p className="text-sm text-gray-400">{restaurant.owner}</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <div className="text-2xl font-bold text-orange-500">{restaurant.totalProduct}</div>
                    <div className="text-sm text-gray-400">Total Product</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-orange-500">{restaurant.totalSales}</div>
                    <div className="text-sm text-gray-400">Total Sales</div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-1 text-gray-400 flex-shrink-0" />
                    <p className="text-sm text-gray-300">{restaurant.address}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-300">{restaurant.email}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <p className="text-sm text-gray-300">{restaurant.phone}</p>
                  </div>
                </div>

                {/* View Details Button */}
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-colors">
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center">
              1
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              2
            </button>
            <span className="text-gray-400">...</span>
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              9
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              10
            </button>
            <button className="w-8 h-8 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center">
              <ChevronRight className="w-4 h-4" />
            </button>
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

export default Dashboard;