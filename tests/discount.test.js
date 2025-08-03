const mongoose = require('mongoose');
const Discount = require('../src/models/Discount');

describe('Discount Model', () => {
  it('creates and saves a discount successfully', async () => {
    const discount = new Discount({
      restaurant: new mongoose.Types.ObjectId(),
      name: 'Summer Sale',
      description: '10% off',
      type: 'percentage',
      value: 10,
      code: 'SUMMER10',
      startDate: new Date(),
      endDate: new Date(Date.now() + 1000 * 60 * 60 * 24)
    });

    const savedDiscount = await discount.save();

    expect(savedDiscount._id).toBeDefined();
    expect(savedDiscount.name).toBe('Summer Sale');
  });
});