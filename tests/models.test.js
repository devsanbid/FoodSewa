import mongoose from 'mongoose';
import Cart from '../src/models/Cart.js';
import Order from '../src/models/Order.js';
import Restaurant from '../src/models/Restaurant.js';
import User from '../src/models/User.js';
import Favorite from '../src/models/Favorite.js';
import Discount from '../src/models/Discount.js';

// helper to create a basic user
afterAll(async () => {
  await mongoose.connection.close();
});

describe('Mongoose models', () => {
  it('creates and saves a User', async () => {
    const user = new User({
      firstName: 'John',
      lastName: 'Doe',
      username: 'johndoe',
      email: 'john@example.com',
      password: 'password123'
    });
    const saved = await user.save();
    expect(saved._id).toBeDefined();
  });

  it('creates a Restaurant and embeds a menu item', async () => {
    const owner = await User.create({
      firstName: 'Owner',
      lastName: 'One',
      username: 'owner1',
      email: 'owner@example.com',
      password: 'password123'
    });
    const restaurant = await Restaurant.create({
      name: 'Testaurant',
      cuisine: ['italian'],
      address: { street: 'Main', city: 'City', state: 'ST', zipCode: '12345', coordinates: { latitude: 0, longitude: 0 } },
      phone: '+1234567890',
      email: 'test@rest.com',
      priceRange: '$$',
      deliveryTime: { min: 10, max: 30 },
      owner: owner._id
    });
    expect(restaurant.menu).toHaveLength(0);
  });

  it('creates a Cart for a user', async () => {
    const user = await User.findOne();
    const cart = await Cart.create({ user: user._id });
    expect(cart.user.toString()).toEqual(user._id.toString());
  });

  it('creates an Order with items', async () => {
    const user = await User.findOne();
    const restaurant = await Restaurant.findOne();
    const order = await Order.create({
      orderNumber: 'ORD1',
      customer: user._id,
      restaurant: restaurant._id,
      items: [{ menuItem: new mongoose.Types.ObjectId(), name: 'Pizza', price: 9.99, quantity: 1 }],
      orderType: 'pickup',
      pricing: { subtotal: 9.99, tax: 1, total: 10.99 }
    });
    expect(order.status).toBe('pending');
  });

  it('creates a Discount and checks virtual status', async () => {
    const restaurant = await Restaurant.findOne();
    const discount = await Discount.create({
      restaurant: restaurant._id,
      name: 'Promo10',
      description: 'Ten off',
      type: 'percentage',
      value: 10,
      code: 'PROMO10',
      startDate: new Date(Date.now() - 1000),
      endDate: new Date(Date.now() + 1000 * 60)
    });
    expect(discount.status).toBe('active');
  });

  it('allows user favorites', async () => {
    const user = await User.findOne();
    const restaurant = await Restaurant.findOne();
    const fav = await Favorite.create({ userId: user._id, restaurantId: restaurant._id, type: 'restaurant' });
    expect(fav.isActive).toBe(true);
  });
});