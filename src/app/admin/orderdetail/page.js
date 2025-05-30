"use client"
import React, { useState } from 'react';
import { 
  Search, 
  Globe, 
  Maximize, 
  Bell, 
  ChevronDown, 
  ChevronRight,
  ArrowLeft,
  Truck,
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

const OrderDetailsPage = () => {
  const [activeStep, setActiveStep] = useState(2);

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

  const orderItems = [
    {
      id: 1,
      name: 'Italian Pizza',
      price: '$79',
      quantity: 'x16',
      subtotal: '$1264',
      image: '🍕'
    },
    {
      id: 2,
      name: 'Veg Burger',
      price: '$488',
      quantity: 'x20',
      subtotal: '$9760',
      image: '🍔'
    },
    {
      id: 3,
      name: 'Spaghetti',
      price: '$23',
      quantity: 'x10',
      subtotal: '$230',
      image: '🍝'
    }
  ];

  const orderSteps = [
    { id: 1, title: 'Order received', completed: true },
    { id: 2, title: 'Processing', completed: true, active: true },
    { id: 3, title: 'On the way', completed: false },
    { id: 4, title: 'Delivered', completed: false }
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700">
        {/* Logo */}
        <div className="flex items-center p-4 border-b border-gray-700">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
            <span className="text-white font-bold text-sm">Y</span>
          </div>
          <span className="text-xl font-bold text-white">Yum</span>
        </div>

        {/* Navigation */}
        <nav className="mt-4">
          {sidebarItems.map((item, index) => (
            <div key={index}>
              <div className={`flex items-center justify-between px-4 py-3 hover:bg-gray-700 cursor-pointer ${
                item.active ? 'bg-gray-700 border-r-2 border-orange-500' : ''
              }`}>
                <div className="flex items-center">
                  <item.icon className={`w-5 h-5 mr-3 ${item.active ? 'text-orange-500' : 'text-gray-400'}`} />
                  <span className={`text-sm ${item.active ? 'text-white' : 'text-gray-300'}`}>
                    {item.label}
                  </span>
                </div>
                {item.hasSubmenu && (
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                )}
              </div>
              {item.active && item.hasSubmenu && (
                <div className="ml-8 mt-1 mb-2">
                  <div className="py-2 px-4 text-sm text-gray-400 hover:text-white cursor-pointer">
                    Orders List
                  </div>
                  <div className="py-2 px-4 text-sm text-orange-500 bg-gray-700 rounded-r-lg mr-4">
                    Order Details
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Bottom Section */}
        <div className="absolute bottom-0 left-0 right-0 w-64 p-4 border-t border-gray-700">
          <div className="bg-gray-700 rounded-lg p-3 mb-4">
            <div className="flex items-center mb-2">
              <div className="w-6 h-6 bg-orange-500 rounded mr-2 flex items-center justify-center">
                <span className="text-xs">⚡</span>
              </div>
              <span className="text-sm font-medium">Upgrade Your Plan. Find Out here</span>
            </div>
          </div>
          <button className="w-full bg-orange-500 text-white py-2 px-3 rounded-lg text-sm mb-3 hover:bg-orange-600">
            Contact Support
          </button>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <User className="w-5 h-5 text-gray-400 mr-2" />
              <span className="text-sm text-gray-300">Profile</span>
            </div>
            <LogOut className="w-4 h-4 text-gray-400 cursor-pointer hover:text-white" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-gray-800 border-b border-gray-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Search className="w-5 h-5 text-gray-400 mr-3" />
              <input
                type="text"
                placeholder="Search for items..."
                className="bg-transparent text-gray-300 placeholder-gray-500 focus:outline-none"
              />
            </div>
            <div className="flex items-center space-x-4">
              <Globe className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
              <Maximize className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
              <div className="relative">
                <Bell className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></div>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-500 rounded-full mr-2"></div>
                <div>
                  <div className="text-sm font-medium">Katya Botosh</div>
                  <div className="text-xs text-gray-400">Admin</div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <div className="flex-1 p-6">
          {/* Breadcrumb */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center text-sm text-gray-400">
              <span>Order</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className="text-orange-500">Order Details</span>
            </div>
            <button className="flex items-center text-orange-500 hover:text-orange-400">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to List
            </button>
          </div>

          <h1 className="text-2xl font-bold mb-6">Order Details</h1>

          {/* Order Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <span className="text-xl font-semibold">Order #9F36CA</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">September 23, 2023</span>
              <span className="text-gray-400">•</span>
              <span className="text-gray-400">3 Products</span>
            </div>
          </div>

          {/* Address and Payment Section */}
          <div className="grid grid-cols-4 gap-6 mb-8">
            {/* Billing Address */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Billing Address</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-white">Jaylon Calzoni</div>
                  <div className="text-sm text-gray-400">2123 Parker st, Allentown, New Mexico 123456</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-300">Email</div>
                  <div className="text-sm text-gray-400">jaylon.calzoni@mail.com</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-300">Phone</div>
                  <div className="text-sm text-gray-400">(123) 456-7890</div>
                </div>
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Shipping Address</h3>
              <div className="space-y-4">
                <div>
                  <div className="font-medium text-white">Ryan Westervelt</div>
                  <div className="text-sm text-gray-400">2123 Parker st, Allentown, New Mexico 123456</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-300">Email</div>
                  <div className="text-sm text-gray-400">ryanwestervelt@mail.com</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-300">Phone</div>
                  <div className="text-sm text-gray-400">(123) 456-7890</div>
                </div>
              </div>
            </div>

            {/* Total Payment */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Total Payment :</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal :</span>
                  <span className="text-white">$365.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Discount :</span>
                  <span className="text-white">20%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping :</span>
                  <span className="text-white">Free</span>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between">
                    <span className="text-lg font-semibold text-white">Total :</span>
                    <span className="text-lg font-semibold text-white">$84.00</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Delivery Details */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-white">Delivery Details</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-lg mx-auto mb-4">
                  <Truck className="w-8 h-8 text-orange-500" />
                </div>
                <div className="text-center">
                  <div className="font-medium text-white">Jay Logistics</div>
                  <div className="text-sm text-gray-400 mt-2">ID: JLST2023477890</div>
                  <div className="text-sm text-gray-400 mt-2">
                    Payment Mode: Prepaid<br />(Debit Card)
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Progress */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-between relative">
              {/* Progress Line */}
              <div className="absolute top-6 left-8 right-8 h-0.5 bg-gray-600">
                <div className="h-full bg-orange-500" style={{ width: '33%' }}></div>
              </div>

              {orderSteps.map((step, index) => (
                <div key={step.id} className="flex flex-col items-center relative z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 ${
                    step.completed 
                      ? 'bg-orange-500 border-orange-500 text-white' 
                      : 'bg-gray-800 border-gray-600 text-gray-400'
                  }`}>
                    {step.completed ? (
                      <span className="text-sm font-bold">✓</span>
                    ) : (
                      <span className="text-sm font-bold">{step.id.toString().padStart(2, '0')}</span>
                    )}
                  </div>
                  <div className={`mt-3 text-sm font-medium ${
                    step.completed ? 'text-white' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Items Table */}
          <div className="bg-gray-800 rounded-lg overflow-hidden mb-8">
            <table className="w-full">
              <thead className="bg-gray-700">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-gray-300 uppercase tracking-wider">Dish</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-300 uppercase tracking-wider">Price</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-300 uppercase tracking-wider">Quantity</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-300 uppercase tracking-wider">Sub Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700">
                {orderItems.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-700">
                    <td className="p-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-gray-600 rounded-lg flex items-center justify-center mr-4">
                          <span className="text-xl">{item.image}</span>
                        </div>
                        <span className="text-white font-medium">{item.name}</span>
                      </div>
                    </td>
                    <td className="p-4 text-white">{item.price}</td>
                    <td className="p-4 text-white">{item.quantity}</td>
                    <td className="p-4 text-white font-medium">{item.subtotal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Logistics Details */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold mb-4 text-white">Logistics Details</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-gray-400 mb-1">Transaction ID :</div>
                <div className="text-white">#20234567213</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Payment Method :</div>
                <div className="text-white">#20234567213</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Card Holder Name :</div>
                <div className="text-white">Jaylon Calzoni</div>
              </div>
              <div>
                <div className="text-sm text-gray-400 mb-1">Card Number :</div>
                <div className="text-white">1234 4354 4564</div>
              </div>
            </div>
          </div>

 
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;