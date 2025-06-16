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
  LogOut
} from 'lucide-react';

export default function SellersDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Ascending');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedSellers, setSelectedSellers] = useState([]);

  const sellers = [
    { id: 1, name: 'Hollie Bruggen', email: 'hbruggen0@narod.ru', phone: '1078832848', orders: 17, total: '$40486.29', since: '01/21/2023', time: '19:54' },
    { id: 2, name: 'Delainey Soden', email: 'dsoden1@fda.gov', phone: '2847899814', orders: 3, total: '$15685.72', since: '10/15/2023', time: '17:34' },
    { id: 3, name: 'Lou Hillen', email: 'lhillen2@dyndns.org', phone: '2816686226', orders: 7, total: '$46501.82', since: '10/26/2023', time: '12:08' },
    { id: 4, name: 'Karlyn Newsome', email: 'knewsome3@alexa.com', phone: '1102607941', orders: 6, total: '$13199.92', since: '03/18/2023', time: '14:57' },
    { id: 5, name: 'Roley Sclater', email: 'rsclater4@nydailynews.com', phone: '9422719236', orders: 2, total: '$5154.24', since: '01/29/2023', time: '6:39' },
    { id: 6, name: 'Amelie Pluthero', email: 'apluthero5@tuttocitta.it', phone: '6692668539', orders: 13, total: '$48316.18', since: '06/05/2023', time: '17:28' },
    { id: 7, name: 'Wilden Conew', email: 'wconew6@qq.com', phone: '4667129090', orders: 14, total: '$26413.79', since: '04/22/2023', time: '8:54' },
    { id: 8, name: 'Coreen Bogies', email: 'cbogies7@disqus.com', phone: '4102508252', orders: 6, total: '$36832.55', since: '06/06/2023', time: '19:27' },
    { id: 9, name: 'Hanan Bream', email: 'hbream8@ufurl.net', phone: '5999053063', orders: 15, total: '$956.37', since: '12/07/2022', time: '4:17' },
    { id: 10, name: 'Adriane Arnout', email: 'aarnout9@ezinearticles.com', phone: '3745303922', orders: 14, total: '$20359.75', since: '06/01/2023', time: '18:53' },
    { id: 11, name: 'Meggy Powdrill', email: 'mpowdrilla@fastcompany.com', phone: '3947283261', orders: 11, total: '$39589.79', since: '04/25/2023', time: '14:29' },
    { id: 12, name: 'Babita Hackleton', email: 'bhackletonb@hp.com', phone: '2463052051', orders: 16, total: '$19563.94', since: '05/17/2023', time: '0:00' },
    { id: 13, name: 'Zollie Robic', email: 'zrobic2@blinkist.com', phone: '3095871965', orders: 6, total: '$44561.68', since: '07/02/2023', time: '22:35' },
    { id: 14, name: 'Val Pendre', email: 'vpendre3@cmu.edu', phone: '1124961590', orders: 9, total: '$12050.91', since: '02/27/2023', time: '2:08' },
    { id: 15, name: 'Chrissy Schiersch', email: 'cschiersch4@stumbleupon.com', phone: '6744085415', orders: 14, total: '$44907.68', since: '10/29/2023', time: '13:50' },
    { id: 16, name: 'Jesus McGrahan', email: 'jmcgrahan5@hugedomains.com', phone: '9133735168', orders: 18, total: '$2532.5', since: '10/09/2023', time: '20:18' },
    { id: 17, name: 'Caleb Patters', email: 'cpatters6@aboutads.info', phone: '432105127', orders: 2, total: '$25450.93', since: '05/30/2023', time: '3:05' },
    { id: 18, name: 'Ambros Kemish', email: 'akemish7@etsy.com', phone: '2393277306', orders: 15, total: '$25960.05', since: '01/01/2023', time: '8:16' },
    { id: 19, name: 'Harrison Delouch', email: 'hdelouch8@chicagotribune.com', phone: '2459796196', orders: 10, total: '$25561.23', since: '04/23/2023', time: '2:00' },
    { id: 20, name: 'Joshuah Mc Giffin', email: 'jmc9@forbes.com', phone: '3232909553', orders: 12, total: '$2399.89', since: '11/26/2023', time: '2:41' }
  ];

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', href: '#' },
    { icon: Settings, label: 'Manage', href: '#' },
    { icon: ShoppingCart, label: 'Orders', href: '#', hasSubmenu: true },
    { icon: Users, label: 'Customers', href: '#', hasSubmenu: true },
    { icon: Building2, label: 'Restaurants', href: '#', hasSubmenu: true },
    { icon: UtensilsCrossed, label: 'Dishes', href: '#', hasSubmenu: true },
    { icon: UserCheck, label: 'Sellers', href: '#', active: true, hasSubmenu: true, submenu: [
      { label: 'Sellers List', href: '#', active: true },
      { label: 'Seller Details', href: '#' },
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

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedSellers(sellers.map(s => s.id));
    } else {
      setSelectedSellers([]);
    }
  };

  const handleSelectSeller = (id, checked) => {
    if (checked) {
      setSelectedSellers([...selectedSellers, id]);
    } else {
      setSelectedSellers(selectedSellers.filter(sellerId => sellerId !== id));
    }
  };

  const filteredSellers = sellers.filter(seller =>
    seller.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    seller.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed left-0 top-0 h-full w-64 bg-gray-800 border-r border-gray-700 transform transition-transform duration-300 ease-in-out z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}>
        <div className="p-4">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">Y</span>
              </div>
              <span className="text-xl font-bold">Yum</span>
            </div>
            <button onClick={toggleSidebar} className="lg:hidden">
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1 max-h-[calc(100vh-200px)] overflow-y-auto">
            {sidebarItems.map((item, index) => (
              <div key={index}>
                <a
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                    item.active ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-3" />
                  {item.label}
                  {item.hasSubmenu && <ChevronDown className="w-4 h-4 ml-auto" />}
                </a>
                {item.submenu && item.active && (
                  <div className="ml-6 mt-1 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <a
                        key={subIndex}
                        href={subItem.href}
                        className={`block px-3 py-1 text-sm rounded ${
                          subItem.active ? 'text-orange-400' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <div className="bg-gray-700 p-3 rounded-lg">
              <div className="flex items-center space-x-2 mb-2">
                <Zap className="w-4 h-4 text-orange-500" />
                <span className="text-sm font-medium">Upgrade Your Plan. Find Out here</span>
              </div>
              <button className="text-xs text-orange-400 hover:text-orange-300">
                Contact Support
              </button>
            </div>
            <button className="flex items-center space-x-2 text-red-400 hover:text-red-300 text-sm">
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

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
            <span className="text-orange-400">Sellers List</span>
          </div>

          {/* Page header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
            <h1 className="text-2xl font-bold">Sellers</h1>
            <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
              <Plus className="w-4 h-4" />
              <span>Add new Sellers</span>
            </button>
          </div>

          {/* Filters */}
          <div className="bg-gray-800 rounded-lg p-4 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="01/05/2003"
                  className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div className="relative">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-700 text-white px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                >
                  <option>Sort: Ascending</option>
                  <option>Sort: Descending</option>
                  <option>Sort: Name A-Z</option>
                  <option>Sort: Name Z-A</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>

              <div className="relative">
                <select 
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="bg-gray-700 text-white px-3 py-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-orange-500 appearance-none"
                >
                  <option>Status: All</option>
                  <option>Status: Active</option>
                  <option>Status: Inactive</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="p-4 text-left">
                      <input
                        type="checkbox"
                        onChange={handleSelectAll}
                        checked={selectedSellers.length === sellers.length}
                        className="rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500"
                      />
                    </th>
                    <th className="p-4 text-left text-sm font-medium text-gray-300">Customer Name</th>
                    <th className="p-4 text-left text-sm font-medium text-gray-300 hidden md:table-cell">Email</th>
                    <th className="p-4 text-left text-sm font-medium text-gray-300 hidden lg:table-cell">Phone</th>
                    <th className="p-4 text-left text-sm font-medium text-gray-300">Orders</th>
                    <th className="p-4 text-left text-sm font-medium text-gray-300">Order Total</th>
                    <th className="p-4 text-left text-sm font-medium text-gray-300 hidden xl:table-cell">Customer Since</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {filteredSellers.map((seller) => (
                    <tr key={seller.id} className="hover:bg-gray-700 transition-colors">
                      <td className="p-4">
                        <input
                          type="checkbox"
                          checked={selectedSellers.includes(seller.id)}
                          onChange={(e) => handleSelectSeller(seller.id, e.target.checked)}
                          className="rounded border-gray-600 bg-gray-700 text-orange-500 focus:ring-orange-500"
                        />
                      </td>
                      <td className="p-4">
                        <div className="font-medium text-white">{seller.name}</div>
                        <div className="text-sm text-gray-400 md:hidden">{seller.email}</div>
                      </td>
                      <td className="p-4 text-gray-300 hidden md:table-cell">{seller.email}</td>
                      <td className="p-4 text-gray-300 hidden lg:table-cell">{seller.phone}</td>
                      <td className="p-4 text-white">{seller.orders}</td>
                      <td className="p-4 text-white font-medium">{seller.total}</td>
                      <td className="p-4 text-gray-300 hidden xl:table-cell">
                        <div>{seller.since}</div>
                        <div className="text-sm text-gray-500">{seller.time}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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