const mongoose = require('mongoose');
const Order = require('../src/models/Order');

describe('Order Model', () => {
  it('creates and saves an order successfully', async () => {
    const order = new Order({
      customer: new mongoose.Types.ObjectId(),
      restaurant: new mongoose.Types.ObjectId(),
      items: [
        {
          menuItem: new mongoose.Types.ObjectId(),
          name: 'Pizza',
          price: 12.5,
          quantity: 1
        }
      ],
      subtotal: 12.5,
      total: 12.5,
      status: 'pending'
    });

    const savedOrder = await order.save();

    expect(savedOrder._id).toBeDefined();
    expect(savedOrder.status).toBe('pending');
  });
});