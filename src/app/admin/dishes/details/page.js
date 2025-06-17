"use client"

import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Search, 
  Globe, 
  Maximize2, 
  Bell, 
  Star,
  Eye,
  Users,
  Wallet,
  FileText,
  Shield,
  AlertCircle,
  Zap,
  User,
  LogOut,
  Utensils,
  UtensilsCrossed
} from 'lucide-react';

export default function GujaratiThaliPage() {
  const [activeMenu, setActiveMenu] = useState({
    orders: false,
    customers: false,
    restaurants: false,
    dishes: true,
    sellers: false,
    extraPages: false
  });

  const [selectedSize, setSelectedSize] = useState('L');
  const [selectedImage, setSelectedImage] = useState(0);

  const toggleMenu = (menu) => {
    setActiveMenu(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const dishImages = [
    'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1574653853027-5d3d3eb5d1b2?w=400&h=300&fit=crop',
    'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&h=300&fit=crop'
  ];

  return (
    <div className="flex h-screen bg-slate-900 text-white">
     

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
      

        {/* Breadcrumb */}
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-white">Gujarati Thali</h1>
            <div className="flex items-center text-sm text-slate-400">
              <span>Dishes</span>
              <span className="mx-2">›</span>
              <span className="text-orange-400">Gujarati Thali</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <img
                  src={dishImages[selectedImage]}
                  alt="Gujarati Thali"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="grid grid-cols-3 gap-4">
                {dishImages.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`bg-slate-800 rounded-lg p-2 border-2 ${
                      selectedImage === index ? 'border-orange-500' : 'border-slate-700'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Gujarati Thali ${index + 1}`}
                      className="w-full h-24 object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Side - Details */}
            <div className="space-y-6">
              {/* Title and Price */}
              <div>
                <h1 className="text-3xl font-bold text-white mb-2">Gujarati Thali</h1>
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-3xl font-bold text-white">$35.1</span>
                  <span className="text-xl text-slate-400 line-through">$59.5</span>
                </div>
                <p className="text-slate-400">by <span className="text-white">Savory Bites Cafe</span></p>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                  <Star className="w-5 h-5 text-yellow-400 fill-current opacity-50" />
                </div>
                <span className="text-slate-400">1221 Reviews</span>
              </div>

              {/* Description */}
              <p className="text-slate-300 leading-relaxed">
                Mexican burritos are usually made with a wheat tortilla and contain grilled meat, cheese toppings, and fresh vegetables which are sources of vitamins, proteins, fibers, minerals, and antioxidants. This makes burritos a balanced meal that can be enjoyed in moderation as part of a healthy meal plan.
              </p>

              {/* Tags */}
              <div className="flex items-center space-x-2">
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm border border-green-500/30">
                  Veg
                </span>
                <span className="bg-slate-700 text-slate-300 px-3 py-1 rounded-full text-sm border border-slate-600">
                  Meal
                </span>
              </div>

              {/* Size Selection */}
              <div>
                <h3 className="text-white font-medium mb-3">Size :</h3>
                <div className="flex items-center space-x-3">
                  {['S', 'M', 'L'].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-12 rounded-full border-2 font-medium ${
                        selectedSize === size
                          ? 'bg-orange-500 border-orange-500 text-white'
                          : 'bg-slate-700 border-slate-600 text-slate-300 hover:border-orange-500'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Nutrition Facts */}
              <div>
                <h3 className="text-white font-medium mb-4">
                  Nutrition Facts <span className="text-slate-400 font-normal">(per serving)</span>
                </h3>
                <div className="grid grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">564</div>
                    <div className="text-slate-400 text-sm">Calories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">306mg</div>
                    <div className="text-slate-400 text-sm">Fat</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">2gm</div>
                    <div className="text-slate-400 text-sm">Carbs</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">6.5gm</div>
                    <div className="text-slate-400 text-sm">Protein</div>
                  </div>
                </div>
              </div>

              {/* Viewing Count */}
              <div className="flex items-center space-x-2 text-orange-400">
                <Eye className="w-5 h-5" />
                <span className="font-medium">152</span>
                <span className="text-slate-400">People are viewing this right now</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-800 border-t border-slate-700 p-6">
          <div className="text-center text-slate-400 text-sm">
            Designed, crafted and coded with ❤️ by Coderthemes.com
          </div>
        </div>
      </div>
    </div>
  );
}