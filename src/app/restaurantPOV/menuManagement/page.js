'use client'
import React, { useState } from 'react';
import { 
  Home, 
  Mail, 
  Bell, 
  Settings, 
  LogOut, 
  Plus, 
  Edit3, 
  Trash2, 
  Search,
  Filter,
  Upload
} from 'lucide-react';

const MenuManagement = () => {
  const [activeCategory, setActiveCategory] = useState('Hot Dishes');
  const [showAddModal, setShowAddModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Dessert'];

  const [menuItems, setMenuItems] = useState([
    // Hot Dishes
    {
      id: 1,
      name: 'Spicy seasoned seafood noodles',
      price: 2.29,
      category: 'Hot Dishes',
      available: 20,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Salted Pasta with mushroom sauce',
      price: 2.69,
      category: 'Hot Dishes',
      available: 11,
      image: 'https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=300&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Healthy noodle with spinach leaf',
      price: 3.29,
      category: 'Hot Dishes',
      available: 22,
      image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=300&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Hot spicy fried rice with omelet',
      price: 3.49,
      category: 'Hot Dishes',
      available: 13,
      image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=300&h=300&fit=crop'
    },
    {
      id: 5,
      name: 'Spicy instant noodle with omelette',
      price: 3.59,
      category: 'Hot Dishes',
      available: 17,
      image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=300&h=300&fit=crop'
    },
    // Cold Dishes
    {
      id: 6,
      name: 'Fresh Caesar Salad',
      price: 4.99,
      category: 'Cold Dishes',
      available: 25,
      image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=300&fit=crop'
    },
    {
      id: 7,
      name: 'Mediterranean Quinoa Bowl',
      price: 5.49,
      category: 'Cold Dishes',
      available: 18,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=300&fit=crop'
    },
    {
      id: 8,
      name: 'Cold Sesame Noodles',
      price: 3.99,
      category: 'Cold Dishes',
      available: 12,
      image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=300&h=300&fit=crop'
    },
    // Soup
    {
      id: 9,
      name: 'Beef dumpling in hot and sour soup',
      price: 2.99,
      category: 'Soup',
      available: 16,
      image: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=300&h=300&fit=crop'
    },
    {
      id: 10,
      name: 'Creamy Mushroom Soup',
      price: 3.79,
      category: 'Soup',
      available: 24,
      image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop'
    },
    {
      id: 11,
      name: 'Tom Yum Seafood Soup',
      price: 4.29,
      category: 'Soup',
      available: 14,
      image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop'
    },
    // Grill
    {
      id: 12,
      name: 'Grilled Chicken Breast',
      price: 6.99,
      category: 'Grill',
      available: 15,
      image: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=300&h=300&fit=crop'
    },
    {
      id: 13,
      name: 'BBQ Beef Ribs',
      price: 8.49,
      category: 'Grill',
      available: 10,
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=300&fit=crop'
    },
    {
      id: 14,
      name: 'Grilled Salmon Fillet',
      price: 7.99,
      category: 'Grill',
      available: 12,
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&h=300&fit=crop'
    },
    // Appetizer
    {
      id: 15,
      name: 'Crispy Spring Rolls',
      price: 2.99,
      category: 'Appetizer',
      available: 30,
      image: 'https://images.unsplash.com/photo-1563379091339-03246963d071?w=300&h=300&fit=crop'
    },
    {
      id: 16,
      name: 'Buffalo Wings',
      price: 4.49,
      category: 'Appetizer',
      available: 20,
      image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=300&h=300&fit=crop'
    },
    {
      id: 17,
      name: 'Stuffed Mushrooms',
      price: 3.79,
      category: 'Appetizer',
      available: 16,
      image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&h=300&fit=crop'
    },
    // Dessert
    {
      id: 18,
      name: 'Chocolate Lava Cake',
      price: 4.99,
      category: 'Dessert',
      available: 8,
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=300&h=300&fit=crop'
    },
    {
      id: 19,
      name: 'Tiramisu',
      price: 4.49,
      category: 'Dessert',
      available: 12,
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=300&h=300&fit=crop'
    },
    {
      id: 20,
      name: 'Fresh Fruit Tart',
      price: 3.99,
      category: 'Dessert',
      available: 10,
      image: 'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=300&h=300&fit=crop'
    },
    {
      id: 21,
      name: 'Mango Sticky Rice',
      price: 3.49,
      category: 'Dessert',
      available: 15,
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=300&h=300&fit=crop'
    }
  ]);

  const [newItem, setNewItem] = useState({
    name: '',
    price: '',
    category: 'Hot Dishes',
    available: '',
    image: ''
  });

  const filteredItems = menuItems.filter(item => 
    item.category === activeCategory && 
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddItem = () => {
    if (newItem.name && newItem.price) {
      const item = {
        id: Date.now(),
        name: newItem.name,
        price: parseFloat(newItem.price),
        category: newItem.category,
        available: parseInt(newItem.available) || 0,
        image: newItem.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&h=300&fit=crop'
      };
      setMenuItems([...menuItems, item]);
      setNewItem({ name: '', price: '', category: 'Hot Dishes', available: '', image: '' });
      setShowAddModal(false);
    }
  };

  const handleDeleteItem = (id) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  const AddItemModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-xl p-6 w-full max-w-md mx-4">
        <h3 className="text-xl font-semibold mb-4">Add New Menu Item</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Item Name</label>
            <input
              type="text"
              value={newItem.name}
              onChange={(e) => setNewItem({...newItem, name: e.target.value})}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter item name"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Price ($)</label>
              <input
                type="number"
                step="0.01"
                value={newItem.price}
                onChange={(e) => setNewItem({...newItem, price: e.target.value})}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="0.00"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Available</label>
              <input
                type="number"
                value={newItem.available}
                onChange={(e) => setNewItem({...newItem, available: e.target.value})}
                className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="0"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={newItem.category}
              onChange={(e) => setNewItem({...newItem, category: e.target.value})}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Image URL</label>
            <input
              type="url"
              value={newItem.image}
              onChange={(e) => setNewItem({...newItem, image: e.target.value})}
              className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={handleAddItem}
            className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 px-4 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200"
          >
            Add Item
          </button>
          <button
            onClick={() => setShowAddModal(false)}
            className="flex-1 bg-slate-600 text-white py-2 px-4 rounded-lg hover:bg-slate-700 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-slate-900 text-white">
      {/* Sidebar */}
      <div className="w-20 bg-slate-800 flex flex-col items-center py-6 border-r border-slate-700">
        <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-8 cursor-pointer">
          <div className="w-6 h-6 bg-white rounded-sm opacity-90"></div>
        </div>
        
        <div className="space-y-4">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
            <Home size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
            <Mail size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
            <Bell size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500 cursor-pointer">
            <Settings size={20} />
          </div>
        </div>
        
        <div className="mt-auto">
          <div className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
            <LogOut size={20} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Menu Management</h1>
            <p className="text-slate-400">Tuesday, 2 Feb 2021</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <Plus size={18} />
              Add Item
            </button>
            <button className="flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
              <Upload size={18} />
              Import
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button className="flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
            <Filter size={18} />
            Filter
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-1 mb-8 bg-slate-800 p-1 rounded-xl inline-flex">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                activeCategory === category
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors group">
              <div className="relative mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto"
                />
                <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                  <button className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <Edit3 size={14} />
                  </button>
                  <button 
                    onClick={() => handleDeleteItem(item.id)}
                    className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mb-2 text-center">{item.name}</h3>
              <p className="text-orange-400 text-xl font-bold text-center mb-2">${item.price}</p>
              <p className="text-slate-400 text-sm text-center">
                {item.available} Bowls available
              </p>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No items found in {activeCategory}</p>
          </div>
        )}
      </div>

      {/* Add Item Modal */}
      {showAddModal && <AddItemModal />}
    </div>
  );
};

export default MenuManagement;