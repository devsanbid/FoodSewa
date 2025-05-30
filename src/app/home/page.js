import React from 'react';
import Sidebar from '@/components/sidebar';
import Header from '@/components/header';
import FoodMenu from '@/components/foodmenu';
import OrderSummary from '@/components/ordersummary';

export default function App() {
  return (
    <div className="flex h-screen bg-[#1F1D2B] text-white font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <FoodMenu />
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
