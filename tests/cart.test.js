const mongoose = require('mongoose');
const Cart = require('../src/models/Cart');

describe('Cart Model', () => {
  it('creates and saves a cart successfully', async () => {
    const cart = new Cart({
      user: new mongoose.Types.ObjectId(),
      items: [],
      restaurant: new mongoose.Types.ObjectId(),
      subtotal: 0
    });

    const savedCart = await cart.save();

    expect(savedCart._id).toBeDefined();
    expect(savedCart.subtotal).toBe(0);
  });
});