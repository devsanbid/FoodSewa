"use client"

import React from 'react';

export default function App() {
  return (
    <div className="flex h-screen bg-[#0f172a] text-white">
     

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Top Bar */}
        <div className="bg-[#1e293b] p-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search for items..."
            className="px-4 py-2 rounded bg-gray-700 text-white w-1/2"
          />
          <div className="flex items-center space-x-4">
            <span>Kaiya Botosh (Admin)</span>
            <img
              src="https://via.placeholder.com/30"
              alt="User"
              className="rounded-full"
            />
          </div>
        </div>

        {/* Main Grid */}
        <main className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6 overflow-y-auto">
          {/* Offer Zone & Upcoming Menu */}
          <div className="col-span-1 space-y-4">
            {/* Offer Cards */}
            <div className="bg-purple-700 p-4 rounded hover:bg-purple-800">
              Up to 50% OFF, Flat Discount and other great offers
            </div>
            <div className="bg-pink-700 p-4 rounded hover:bg-pink-800">
              Up to 50% OFF, Flat Discount and other great offers
            </div>
            {/* Upcoming Menu */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold">Upcoming New Menu</h2>
              {['Gujarati Thali', 'Chickpea Hummus'].map((item, i) => (
                <div key={i} className="bg-[#1e293b] p-3 rounded">
                  <div className="h-24 bg-gray-700 rounded mb-2" />
                  <h4 className="font-semibold text-sm">{item}</h4>
                  <p className="text-xs text-gray-300">
                    Sample description text for {item}.
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* New Menu */}
          <div className="col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">New Menu</h2>
            {[
              ['Italian Pizza', 79],
              ['Veg Burger', 488],
              ['Spaghetti', 23],
              ['Red Velvet Cake', 350],
              ['Mix Salad', 645.2],
              ['Espresso Coffee', 419.45],
              ['Steamed Dumplings', 58.5],
              ['Gujarati Thali', 58.5],
              ['Chickpea Hummus', 58.5],
              ['Butter Cookies', 665],
            ].map(([name, price], i) => (
              <div key={i} className="bg-[#1e293b] p-3 rounded flex justify-between items-center">
                <span>{name}</span>
                <div className="flex items-center space-x-4">
                  <span>${price}</span>
                  <button className="text-sm bg-orange-500 px-2 py-1 rounded hover:bg-orange-600">Edit</button>
                </div>
              </div>
            ))}
            <button className="bg-orange-500 px-4 py-2 rounded hover:bg-orange-600 mt-4">
              Add Menu Items
            </button>
          </div>

          {/* Right Widgets */}
          <div className="col-span-1 space-y-4">
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-green-400 font-semibold">New Orders</p>
              <p>34% Payment</p>
            </div>
            <div className="bg-gray-800 p-4 rounded">
              <p className="text-red-400 font-semibold">Cancelled Orders</p>
              <p>45% Decrease</p>
            </div>
            <div className="bg-orange-500 p-4 rounded text-center cursor-pointer hover:bg-orange-600">
              Add new Best food now
            </div>
            <div className="bg-[#1f2937] p-4 rounded">
              <p className="text-yellow-400 font-semibold">Today’s Special Menu</p>
              <p>50% OFF</p>
              <button className="mt-2 bg-orange-500 px-3 py-1 rounded">Manage</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
