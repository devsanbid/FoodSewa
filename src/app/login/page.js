import React from 'react';
import { FaGoogle, FaGithub, FaGitlab, FaUser, FaLock } from 'react-icons/fa';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl shadow-lg rounded-2xl bg-black bg-opacity-40 p-8">
        {/* Left Panel */}
        <div className="space-y-8">
          <h1 className="text-2xl font-semibold text-orange-400">Food Sewa</h1>
          <h2 className="text-3xl font-bold">Craving something delicious?</h2>

          <div className="space-y-6 mt-10">
            <div>
              <div className="flex items-center gap-3 text-orange-400">
                <FaUser />
                <h3 className="font-semibold">Invite your friends and family</h3>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Share the joy of easy ordering and discover new favorites together.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-orange-400">
                <svg className="w-5 h-5" fill="currentColor"><path d="M12 0a12 12 0 100 24 12 12 0 000-24zm1 17.93A7.96 7.96 0 0112 18a8 8 0 110-16 7.96 7.96 0 011 15.93V13h-2v4.93z"/></svg>
                <h3 className="font-semibold">Track your order in real-time</h3>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Get live updates on your delivery and know exactly when to expect your food.
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-orange-400">
                <svg className="w-5 h-5" fill="currentColor"><path d="M12 0a12 12 0 100 24A12 12 0 0012 0zm0 22a10 10 0 1110-10 10 10 0 01-10 10zm1-13h-2v6h6v-2h-4z"/></svg>
                <h3 className="font-semibold">Secure and reliable delivery</h3>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                We ensure your food arrives fresh and safely to your doorstep.
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel */}
        <div className="bg-black bg-opacity-60 p-8 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Login with</h2>
          <div className="flex gap-4 mb-6">
            <button className="flex-1 py-2 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center gap-2">
              <FaGoogle /> Google
            </button>
            <button className="flex-1 py-2 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center gap-2">
              <FaGithub /> Github
            </button>
            <button className="flex-1 py-2 rounded bg-gray-800 hover:bg-gray-700 flex items-center justify-center gap-2">
              <FaGitlab /> Gitlab
            </button>
          </div>

          <div className="text-center text-gray-500 mb-4">Or</div>

          <form className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaUser />
              </span>
              <input
                type="text"
                placeholder="Username"
                className="w-full py-2 pl-10 pr-4 rounded bg-gray-800 text-white focus:outline-none"
              />
            </div>

            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <FaLock />
              </span>
              <input
                type="password"
                placeholder="Password"
                className="w-full py-2 pl-10 pr-10 rounded bg-gray-800 text-white focus:outline-none"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer">
                👁️
              </span>
            </div>

            <button className="w-full bg-orange-400 hover:bg-orange-500 py-2 rounded font-semibold text-black">
              Login in
            </button>
          </form>

          <p className="text-sm text-center text-gray-400 mt-4">
            No account?{' '}
            <a href="#" className="text-orange-400 hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
