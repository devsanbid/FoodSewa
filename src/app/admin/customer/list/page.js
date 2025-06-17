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
  Lightbulb
} from 'lucide-react';

const CustomerDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Ascending');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedCustomers, setSelectedCustomers] = useState([]);

  const customers = [
    { id: 1, name: "Hollie Bruggen", phone: "1078332848", email: "hbruggen0@narod.ru", orders: 17, total: "$40486.29", since: "01/21/2023", time: "19:54" },
    { id: 2, name: "Delainey Soden", phone: "2847899814", email: "dsoden1@fda.gov", orders: 3, total: "$15685.72", since: "10/15/2023", time: "17:34" },
    { id: 3, name: "Lou Hillen", phone: "2816682226", email: "lhillen2@dyndns.org", orders: 7, total: "$46501.82", since: "10/26/2023", time: "12:08" },
    { id: 4, name: "Karlyn Newsome", phone: "1102507941", email: "knewsome3@alexa.com", orders: 6, total: "$13199.92", since: "03/18/2023", time: "14:57" },
    { id: 5, name: "Roley Sclater", phone: "9422719236", email: "rsclater4@nydailynews.com", orders: 2, total: "$5154.24", since: "01/29/2023", time: "6:39" },
    { id: 6, name: "Amelie Pluthero", phone: "6692668539", email: "apluthero5@tuttocitta.it", orders: 13, total: "$48316.18", since: "06/05/2023", time: "17:28" },
    { id: 7, name: "Wilden Conew", phone: "4667129090", email: "wconew6@qq.com", orders: 14, total: "$26413.79", since: "04/22/2023", time: "9:54" },
    { id: 8, name: "Coreen Bogies", phone: "4102508252", email: "cbogies7@disqus.com", orders: 6, total: "$36832.55", since: "06/06/2023", time: "19:27" },
    { id: 9, name: "Hanan Bream", phone: "5999053063", email: "hbream8@furl.net", orders: 15, total: "$956.37", since: "12/07/2022", time: "4:17" },
    { id: 10, name: "Adriane Arnout", phone: "3745303922", email: "aarnout9@ezinearticles.com", orders: 14, total: "$20359.75", since: "06/01/2023", time: "18:53" },
    { id: 11, name: "Meggy Powdrill", phone: "3947283261", email: "mpowdrill@fastcompany.com", orders: 11, total: "$39589.79", since: "04/25/2023", time: "14:29" },
    { id: 12, name: "Babita Hackleton", phone: "2463052051", email: "bhackleton@hp.com", orders: 16, total: "$19563.94", since: "05/17/2023", time: "0:00" },
    { id: 13, name: "Zollie Robic", phone: "3095871965", email: "zrobic2@blinklist.com", orders: 6, total: "$44561.68", since: "07/02/2023", time: "22:38" },
    { id: 14, name: "Val Pendre", phone: "1124961590", email: "vpendre3@cmu.edu", orders: 9, total: "$12050.91", since: "02/27/2023", time: "2:08" },
    { id: 15, name: "Chrissy Schiersch", phone: "6744085415", email: "cschiersch4@stumbleupon.com", orders: 14, total: "$44907.68", since: "10/29/2023", time: "13:50" },
    { id: 16, name: "Jesus McGrahan", phone: "9133735168", email: "jmcgrahan5@hugedomains.com", orders: 18, total: "$2532.5", since: "10/09/2023", time: "20:18" },
    { id: 17, name: "Caleb Patters", phone: "432105127", email: "cpatters6@aboutads.info", orders: 2, total: "$25450.93", since: "05/30/2023", time: "3:05" },
    { id: 18, name: "Ambros Kernish", phone: "2393277306", email: "akernish7@etsy.com", orders: 15, total: "$25960.05", since: "01/01/2023", time: "8:16" },
    { id: 19, name: "Harrison Delouch", phone: "2459796196", email: "hdelouch8@chicagotribune.com", orders: 10, total: "$25561.23", since: "04/23/2023", time: "2:00" },
    { id: 20, name: "Joshuah Mc Giffin", phone: "3232909553", email: "jmc9@forbes.com", orders: 12, total: "$2399.89", since: "11/26/2023", time: "2:41" }
  ];

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: false },
    { icon: Settings, label: 'Manage', active: false },
    { icon: ShoppingCart, label: 'Orders', active: false, hasSubmenu: true },
    { icon: Users, label: 'Customers', active: true, hasSubmenu: true, submenu: [
      { label: 'Customers List', active: true },
      { label: 'Customer Details', active: false },
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

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedCustomers(customers.map(c => c.id));
    } else {
      setSelectedCustomers([]);
    }
  };

  const handleSelectCustomer = (customerId) => {
    setSelectedCustomers(prev => 
      prev.includes(customerId) 
        ? prev.filter(id => id !== customerId)
        : [...prev, customerId]
    );
  };

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    customer.phone.includes(searchTerm)
  );

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
              <span className="text-orange-400">Customers List</span>
            </div>

            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
              <h1 className="text-2xl font-bold mb-4 lg:mb-0">Customers List</h1>
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <Plus size={16} />
                <span>Add a new Customer</span>
              </button>
            </div>

            {/* Filters */}
            <div className="bg-gray-800 rounded-lg p-4 mb-6">
              <h2 className="text-lg font-semibold mb-4">Customers</h2>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full lg:w-64"
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                    <input
                      type="text"
                      placeholder="01/05/2003"
                      className="bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent w-full sm:w-40"
                    />
                  </div>
                  
                  <div className="relative">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent appearance-none pr-8 w-full sm:w-auto"
                    >
                      <option>Sort : Ascending</option>
                      <option>Sort : Descending</option>
                      <option>Sort : Name A-Z</option>
                      <option>Sort : Name Z-A</option>
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
                      <option>Status : Active</option>
                      <option>Status : Inactive</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                  </div>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="bg-gray-800 rounded-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-700">
                    <tr>
                      <th className="px-4 py-3 text-left">
                        <input
                          type="checkbox"
                          onChange={handleSelectAll}
                          checked={selectedCustomers.length === customers.length}
                          className="rounded border-gray-600 text-orange-500 focus:ring-orange-500"
                        />
                      </th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Name</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Phone</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Email</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Orders</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Order Total</th>
                      <th className="px-4 py-3 text-left text-sm font-medium text-gray-300">Customer Since</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {filteredCustomers.map((customer) => (
                      <tr key={customer.id} className="hover:bg-gray-700 transition-colors">
                        <td className="px-4 py-3">
                          <input
                            type="checkbox"
                            checked={selectedCustomers.includes(customer.id)}
                            onChange={() => handleSelectCustomer(customer.id)}
                            className="rounded border-gray-600 text-orange-500 focus:ring-orange-500"
                          />
                        </td>
                        <td className="px-4 py-3 text-sm font-medium text-white">{customer.name}</td>
                        <td className="px-4 py-3 text-sm text-gray-300">{customer.phone}</td>
                        <td className="px-4 py-3 text-sm text-gray-300">{customer.email}</td>
                        <td className="px-4 py-3 text-sm text-gray-300">{customer.orders}</td>
                        <td className="px-4 py-3 text-sm font-medium text-white">{customer.total}</td>
                        <td className="px-4 py-3 text-sm text-gray-300">
                          {customer.since} | {customer.time}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
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

export default CustomerDashboard;