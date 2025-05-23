"use client"
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full p-8">
        {/* Left Section */}
        <div className="space-y-10">
          <h1 className="text-3xl font-semibold">Food Sewa</h1>
          <h2 className="text-4xl font-bold">Craving something delicious?</h2>
          <div className="space-y-6 text-sm">
            <div>
              <p className="font-semibold flex items-center gap-2">
                🍽️ Invite your friends and family
              </p>  
              <p className="text-gray-400">
                Share the joy of easy ordering and discover new favorites together.
              </p>
            </div>
            <div>
              <p className="font-semibold flex items-center gap-2">
                🕒 Track your order in real-time
              </p>
              <p className="text-gray-400">
                Get live updates on your delivery and know exactly when to expect your food.
              </p>
            </div>
            <div>
              <p className="font-semibold flex items-center gap-2">
                🛡️ Secure and reliable delivery
              </p>
              <p className="text-gray-400">
                We ensure your food arrives fresh and safely to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-gray-900 p-8 rounded-xl shadow-md space-y-6">
          <div className="flex justify-between gap-4">
            <button className="bg-gray-700 w-full py-2 rounded-md">Google</button>
            <button className="bg-gray-700 w-full py-2 rounded-md">Github</button>
            <button className="bg-gray-700 w-full py-2 rounded-md">Gitlab</button>
          </div>

          <div className="text-center text-gray-500">Or</div>

          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="bg-gray-800 p-2 rounded-md" />
            <input type="text" placeholder="Last Name" className="bg-gray-800 p-2 rounded-md" />
          </div>

          <input type="text" placeholder="Username" className="bg-gray-800 w-full p-2 rounded-md" />
          <input type="email" placeholder="Email" className="bg-gray-800 w-full p-2 rounded-md" />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="bg-gray-800 w-full p-2 pr-10 rounded-md"
            />
            <button
              type="button"
              className="absolute right-2 top-2 text-gray-400"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <p className="text-xs text-gray-500">Minimum length is 8 characters.</p>

          <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md">
            Sign Up
          </button>

          <p className="text-xs text-center text-gray-500">
            By creating an account, you agree to the{" "}
            <a href="#" className="underline">
              Terms of Service
            </a>
            .
          </p>

          <p className="text-sm text-center text-gray-400">
            Already have an account?{" "}
            <a href="#" className="text-orange-400 underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
