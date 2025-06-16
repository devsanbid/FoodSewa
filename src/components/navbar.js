"use client"

import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Settings, 
  List, 
  Users, 
  Building2, 
  ChefHat, 
  UserCheck,
  ChevronDown,
  ChevronUp,
  FileText,
  User,
  Plus,
  Edit3
} from 'lucide-react';

export default function YumNavbar() {
  const [expandedSections, setExpandedSections] = useState({
    orders: false,
    customers: false,
    restaurants: false,
    dishes: false,
    sellers: false
  });

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const NavItem = ({ icon: Icon, label, hasSubmenu = false, isExpanded = false, onClick, children }) => (
    <div>
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors duration-200 ${
          isExpanded ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
        }`}
      >
        <div className="flex items-center space-x-3">
          <Icon size={20} />
          <span className="font-medium">{label}</span>
        </div>
        {hasSubmenu && (
          isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />
        )}
      </button>
      {hasSubmenu && isExpanded && (
        <div className="mt-2 ml-8 space-y-1">
          {children}
        </div>
      )}
    </div>
  );

  const SubMenuItem = ({ icon: Icon, label, onClick }) => (
    <button
      onClick={onClick}
      className="w-full flex items-center space-x-3 p-2 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors duration-200"
    >
      <Icon size={16} />
      <span className="text-sm">{label}</span>
    </button>
  );

  return (
    <div className="w-64 h-screen bg-gray-800 text-white">
      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-orange-500 font-bold text-sm">Y</span>
            </div>
          </div>
          <span className="text-2xl font-bold">Yum</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4 space-y-2">
        {/* Dashboard */}
        <NavItem 
          icon={LayoutDashboard} 
          label="Dashboard" 
        />

        {/* Manage */}
        <NavItem 
          icon={Settings} 
          label="Manage" 
        />

        {/* Orders */}
        <NavItem 
          icon={List} 
          label="Orders" 
          hasSubmenu={true}
          isExpanded={expandedSections.orders}
          onClick={() => toggleSection('orders')}
        >
          <SubMenuItem icon={FileText} label="Order List" />
          <SubMenuItem icon={FileText} label="Order Details" />
        </NavItem>

        {/* Customers */}
        <NavItem 
          icon={Users} 
          label="Customers" 
          hasSubmenu={true}
          isExpanded={expandedSections.customers}
          onClick={() => toggleSection('customers')}
        >
          <SubMenuItem icon={Users} label="Customers List" />
          <SubMenuItem icon={User} label="Customer Details" />
          <SubMenuItem icon={Plus} label="Add Customer" />
          <SubMenuItem icon={Edit3} label="Edit Customer" />
        </NavItem>

        {/* Restaurants */}
        <NavItem 
          icon={Building2} 
          label="Restaurants" 
          hasSubmenu={true}
          isExpanded={expandedSections.restaurants}
          onClick={() => toggleSection('restaurants')}
        >
          <SubMenuItem icon={Building2} label="Restaurants List" />
          <SubMenuItem icon={Building2} label="Restaurant Details" />
          <SubMenuItem icon={Plus} label="Add Restaurant" />
          <SubMenuItem icon={Edit3} label="Edit Restaurant" />
        </NavItem>

        {/* Dishes */}
        <NavItem 
          icon={ChefHat} 
          label="Dishes" 
          hasSubmenu={true}
          isExpanded={expandedSections.dishes}
          onClick={() => toggleSection('dishes')}
        >
          <SubMenuItem icon={ChefHat} label="Dishes List" />
          <SubMenuItem icon={ChefHat} label="Dish Details" />
          <SubMenuItem icon={Plus} label="Add Dish" />
          <SubMenuItem icon={Edit3} label="Edit Dish" />
        </NavItem>

        {/* Sellers */}
        <NavItem 
          icon={UserCheck} 
          label="Sellers" 
          hasSubmenu={true}
          isExpanded={expandedSections.sellers}
          onClick={() => toggleSection('sellers')}
        >
          <SubMenuItem icon={UserCheck} label="Sellers List" />
          <SubMenuItem icon={User} label="Seller Details" />
          <SubMenuItem icon={Plus} label="Add Seller" />
          <SubMenuItem icon={Edit3} label="Edit Seller" />
        </NavItem>
      </div>
    </div>
  );
}