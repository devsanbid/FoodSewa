'use client'
import React, { useState } from 'react';
import { 
  Home, 
  Mail, 
  Bell, 
  Settings, 
  LogOut, 
  Search,
  Filter,
  Eye,
  CheckCircle,
  Clock,
  Truck,
  X,
  MoreVertical,
  Phone,
  MapPin
} from 'lucide-react';

const OrderManagement = () => {
  const [activeStatus, setActiveStatus] = useState('All Orders');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const orderStatuses = ['All Orders', 'Pending', 'Confirmed', 'Preparing', 'Ready', 'Delivered', 'Cancelled'];

  const [orders, setOrders] = useState([
    {
      id: '#34562',
      customerName: 'John Doe',
      customerPhone: '+977-9841234567',
      customerAddress: 'Thamel, Kathmandu',
      items: [
        { name: 'Spicy seasoned seafood noodles', qty: 2, price: 4.58 },
        { name: 'Salted pasta with mushroom sauce', qty: 1, price: 2.69 },
        { name: 'Spicy instant noodle', qty: 3, price: 10.47 },
        { name: 'Healthy noodle with spinach', qty: 1, price: 3.29 }
      ],
      subtotal: 21.03,
      deliveryFee: 2.00,
      total: 23.03,
      status: 'Pending',
      orderTime: '12:30 PM',
      estimatedTime: '45 mins',
      paymentMethod: 'Cash on Delivery',
      orderType: 'Delivery'
    },
    {
      id: '#34563',
      customerName: 'Sarah Wilson',
      customerPhone: '+977-9851234567',
      customerAddress: 'Patan Dhoka, Lalitpur',
      items: [
        { name: 'Grilled Chicken Breast', qty: 1, price: 6.99 },
        { name: 'Fresh Caesar Salad', qty: 1, price: 4.99 }
      ],
      subtotal: 11.98,
      deliveryFee: 1.50,
      total: 13.48,
      status: 'Confirmed',
      orderTime: '1:15 PM',
      estimatedTime: '35 mins',
      paymentMethod: 'Online Payment',
      orderType: 'Delivery'
    },
    {
      id: '#34564',
      customerName: 'Mike Chen',
      customerPhone: '+977-9861234567',
      customerAddress: 'Dine In - Table 5',
      items: [
        { name: 'BBQ Beef Ribs', qty: 2, price: 16.98 },
        { name: 'Buffalo Wings', qty: 1, price: 4.49 },
        { name: 'Chocolate Lava Cake', qty: 2, price: 9.98 }
      ],
      subtotal: 31.45,
      deliveryFee: 0,
      total: 31.45,
      status: 'Preparing',
      orderTime: '1:45 PM',
      estimatedTime: '25 mins',
      paymentMethod: 'Card Payment',
      orderType: 'Dine In'
    },
    {
      id: '#34565',
      customerName: 'Emily Davis',
      customerPhone: '+977-9871234567',
      customerAddress: 'Boudha, Kathmandu',
      items: [
        { name: 'Tom Yum Seafood Soup', qty: 1, price: 4.29 },
        { name: 'Grilled Salmon Fillet', qty: 1, price: 7.99 }
      ],
      subtotal: 12.28,
      deliveryFee: 2.50,
      total: 14.78,
      status: 'Ready',
      orderTime: '2:10 PM',
      estimatedTime: 'Ready now',
      paymentMethod: 'Online Payment',
      orderType: 'Delivery'
    },
    {
      id: '#34566',
      customerName: 'David Kumar',
      customerPhone: '+977-9881234567',
      customerAddress: 'Jawalakhel, Lalitpur',
      items: [
        { name: 'Mediterranean Quinoa Bowl', qty: 1, price: 5.49 },
        { name: 'Fresh Fruit Tart', qty: 1, price: 3.99 }
      ],
      subtotal: 9.48,
      deliveryFee: 1.50,
      total: 10.98,
      status: 'Delivered',
      orderTime: '11:30 AM',
      estimatedTime: 'Delivered',
      paymentMethod: 'Cash on Delivery',
      orderType: 'Delivery'
    },
    {
      id: '#34567',
      customerName: 'Lisa Park',
      customerPhone: '+977-9891234567',
      customerAddress: 'Baneshwor, Kathmandu',
      items: [
        { name: 'Crispy Spring Rolls', qty: 3, price: 8.97 }
      ],
      subtotal: 8.97,
      deliveryFee: 2.00,
      total: 10.97,
      status: 'Cancelled',
      orderTime: '12:00 PM',
      estimatedTime: 'Cancelled',
      paymentMethod: 'Online Payment',
      orderType: 'Delivery'
    }
  ]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500';
      case 'Confirmed': return 'bg-blue-500';
      case 'Preparing': return 'bg-orange-500';
      case 'Ready': return 'bg-green-500';
      case 'Delivered': return 'bg-gray-500';
      case 'Cancelled': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Pending': return <Clock size={16} />;
      case 'Confirmed': return <CheckCircle size={16} />;
      case 'Preparing': return <Clock size={16} />;
      case 'Ready': return <CheckCircle size={16} />;
      case 'Delivered': return <Truck size={16} />;
      case 'Cancelled': return <X size={16} />;
      default: return <Clock size={16} />;
    }
  };

  const filteredOrders = orders.filter(order => {
    const matchesStatus = activeStatus === 'All Orders' || order.status === activeStatus;
    const matchesSearch = order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.customerName.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const updateOrderStatus = (orderId, newStatus) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
  };

  const OrderDetailsModal = ({ order, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Order Details</h3>
              <p className="text-slate-400">Order {order.id}</p>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-slate-700 rounded-full flex items-center justify-center hover:bg-slate-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-slate-700 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Customer Information</h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-slate-400">Name:</span> {order.customerName}</p>
                <p className="flex items-center gap-2">
                  <Phone size={14} className="text-slate-400" />
                  {order.customerPhone}
                </p>
                <p className="flex items-start gap-2">
                  <MapPin size={14} className="text-slate-400 mt-0.5" />
                  {order.customerAddress}
                </p>
              </div>
            </div>

            <div className="bg-slate-700 rounded-lg p-4">
              <h4 className="font-semibold mb-3">Order Information</h4>
              <div className="space-y-2 text-sm">
                <p><span className="text-slate-400">Order Time:</span> {order.orderTime}</p>
                <p><span className="text-slate-400">Estimated Time:</span> {order.estimatedTime}</p>
                <p><span className="text-slate-400">Payment Method:</span> {order.paymentMethod}</p>
                <p><span className="text-slate-400">Order Type:</span> {order.orderType}</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-4 mb-6">
            <h4 className="font-semibold mb-4">Order Items</h4>
            <div className="space-y-3">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-600 last:border-b-0">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-slate-400">Qty: {item.qty}</p>
                  </div>
                  <p className="font-semibold">${item.price.toFixed(2)}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-slate-600 space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Subtotal:</span>
                <span>${order.subtotal.toFixed(2)}</span>
              </div>
              {order.deliveryFee > 0 && (
                <div className="flex justify-between">
                  <span className="text-slate-400">Delivery Fee:</span>
                  <span>${order.deliveryFee.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span className="text-orange-400">${order.total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            {order.status === 'Pending' && (
              <>
                <button
                  onClick={() => {
                    updateOrderStatus(order.id, 'Confirmed');
                    onClose();
                  }}
                  className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  Confirm Order
                </button>
                <button
                  onClick={() => {
                    updateOrderStatus(order.id, 'Cancelled');
                    onClose();
                  }}
                  className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
                >
                  Cancel Order
                </button>
              </>
            )}
            {order.status === 'Confirmed' && (
              <button
                onClick={() => {
                  updateOrderStatus(order.id, 'Preparing');
                  onClose();
                }}
                className="flex-1 bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700 transition-colors"
              >
                Start Preparing
              </button>
            )}
            {order.status === 'Preparing' && (
              <button
                onClick={() => {
                  updateOrderStatus(order.id, 'Ready');
                  onClose();
                }}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
              >
                Mark as Ready
              </button>
            )}
            {order.status === 'Ready' && order.orderType === 'Delivery' && (
              <button
                onClick={() => {
                  updateOrderStatus(order.id, 'Delivered');
                  onClose();
                }}
                className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Mark as Delivered
              </button>
            )}
          </div>
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
          <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500 cursor-pointer">
            <Mail size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
            <Bell size={20} />
          </div>
          <div className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-700 cursor-pointer transition-colors">
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
            <h1 className="text-3xl font-semibold mb-2">Order Management</h1>
            <p className="text-slate-400">Tuesday, 2 Feb 2021</p>
          </div>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 bg-slate-700 text-white px-4 py-2 rounded-lg hover:bg-slate-600 transition-colors">
              <Filter size={18} />
              Export
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="relative max-w-md mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search orders or customers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Status Tabs */}
        <div className="flex gap-1 mb-8 bg-slate-800 p-1 rounded-xl inline-flex overflow-x-auto">
          {orderStatuses.map((status) => (
            <button
              key={status}
              onClick={() => setActiveStatus(status)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                activeStatus === status
                  ? 'bg-orange-500 text-white'
                  : 'text-slate-400 hover:text-white hover:bg-slate-700'
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <div key={order.id} className="bg-slate-800 rounded-xl p-6 hover:bg-slate-750 transition-colors">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold">{order.id}</h3>
                    <div className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      {order.status}
                    </div>
                    {order.orderType === 'Dine In' && (
                      <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full">Dine In</span>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="text-slate-400">Customer</p>
                      <p className="font-medium">{order.customerName}</p>
                      <p className="text-slate-400">{order.customerPhone}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Items</p>
                      <p className="font-medium">{order.items.length} items</p>
                      <p className="text-slate-400">{order.orderTime}</p>
                    </div>
                    <div>
                      <p className="text-slate-400">Total</p>
                      <p className="text-xl font-bold text-orange-400">${order.total.toFixed(2)}</p>
                      <p className="text-slate-400">{order.estimatedTime}</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedOrder(order)}
                    className="flex items-center gap-1 bg-blue-600 text-white px-3 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Eye size={14} />
                    View Details
                  </button>
                  
                  {order.status === 'Pending' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'Confirmed')}
                      className="flex items-center gap-1 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm"
                    >
                      <CheckCircle size={14} />
                      Confirm
                    </button>
                  )}
                  
                  {order.status === 'Confirmed' && (
                    <button
                      onClick={() => updateOrderStatus(order.id, 'Preparing')}
                      className="flex items-center gap-1 bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 transition-colors text-sm"
                    >
                      <Clock size={14} />
                      Prepare
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <p className="text-slate-400 text-lg">No orders found for {activeStatus}</p>
          </div>
        )}
      </div>

      {/* Order Details Modal */}
      {selectedOrder && (
        <OrderDetailsModal 
          order={selectedOrder} 
          onClose={() => setSelectedOrder(null)} 
        />
      )}
    </div>
  );
};

export default OrderManagement;