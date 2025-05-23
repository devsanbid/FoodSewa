import React from "react";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-orange-300 flex items-center justify-center gap-10 p-4">
      {/* Forgot Password Box */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-2">Forgot Password</h2>
        <p className="text-center text-gray-600 mb-4">Enter your email address</p>
        <input
          type="email"
          placeholder="Enter email address"
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">Continue</button>
      </div>

      {/* New Password Box */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold text-center mb-4">New Password</h2>
        <div className="bg-green-100 text-green-800 text-sm rounded p-3 mb-4">
          Please create a new password that you don't use on any other site.
        </div>
        <input
          type="password"
          placeholder="Create new password"
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full px-4 py-2 border border-gray-300 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition">Change</button>
      </div>
    </div>
  );
};

export default ForgotPassword;
