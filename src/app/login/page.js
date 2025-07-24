'use client';
import React, { useState } from "react";
import { Eye, EyeOff, User, Lock, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { loginAction } from "@/actions/authActions";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (formData) => {
    setLoading(true);
    setError('');
    
    try {
      const result = await loginAction(formData);
      
      if (result.success) {
        // Redirect based on user role
        if (result.user.role === 'admin') {
          router.push('/admin/dashboard');
        } else if (result.user.role === 'restaurant') {
          router.push('/restaurant/dashboard');
        } else {
          router.push('/user/dashboard');
        }
      } else {
        setError(result.message);
      }
    } catch (error) {
      setError('Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Panel */}
          <div className="space-y-8 lg:space-y-10">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl lg:text-4xl font-bold text-[#EA7C69] mb-2">Food Sewa</h1>
              <h2 className="text-2xl lg:text-3xl font-bold">Craving something delicious?</h2>
            </div>

            <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/invite.png" width={20} height={20} alt="invite icon" className="mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Invite your friends and family</h3>
                  <p className="text-sm text-gray-400">
                    Share the joy of easy ordering and discover new favorites together.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/track.png" width={20} height={20} alt="track icon" className="mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Track your order in real-time</h3>
                  <p className="text-sm text-gray-400">
                    Get live updates on your delivery and know exactly when to expect your food.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Image src="/secure.png" width={20} height={20} alt="secure icon" className="mt-1" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1">Secure and reliable delivery</h3>
                  <p className="text-sm text-gray-400">
                    We ensure your food arrives fresh and safely to your doorstep.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-full max-w-md mx-auto lg:max-w-none">
            <div className="bg-gray-900/80 backdrop-blur-sm p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-800">
              <h2 className="text-xl font-semibold mb-6 text-center">Welcome Back</h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                <button className="py-2.5 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm">
                  <Image src="/Google.png" width={16} height={16} alt="google" />
                  <span className="hidden sm:inline">Google</span>
                </button>
                <button className="py-2.5 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm">
                  <Github size={16} />
                  <span className="hidden sm:inline">Github</span>
                </button>
                <button className="py-2.5 px-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm">
                  <Image src="/logo_art.png" width={16} height={16} alt="gitlab" />
                  <span className="hidden sm:inline">Gitlab</span>
                </button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-700"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-gray-900 text-gray-400">Or continue with</span>
                </div>
              </div>

              {error && (
                <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-4 text-sm">
                  {error}
                </div>
              )}

              <form action={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Username or Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-4 w-4 text-gray-400" />
                    </div>
                    <input 
                      type="text" 
                      name="identifier"
                      placeholder="Enter your username or email" 
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#EA7C69] focus:border-transparent outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-4 w-4 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      className="w-full pl-10 pr-12 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#EA7C69] focus:border-transparent outline-none transition-all"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-[#EA7C69] focus:ring-[#EA7C69] border-gray-600 rounded bg-gray-800"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <Link href="/forgetpassword" className="text-sm text-[#EA7C69] hover:text-orange-400 transition-colors">
                    Forgot password?
                  </Link>
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#EA7C69] hover:bg-orange-500 text-white py-3 px-4 rounded-lg font-semibold transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? 'Signing in...' : 'Sign In'}
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-400">
                  Don't have an account?{' '}
                  <Link href="/signup" className="text-[#EA7C69] hover:text-orange-400 font-medium transition-colors">
                    Sign up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
