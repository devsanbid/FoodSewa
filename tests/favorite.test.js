const mongoose = require('mongoose');
const Favorite = require('../src/models/Favorite');

describe('Favorite Model', () => {
  it('creates and saves a favorite successfully', async () => {
    const favorite = new Favorite({
      userId: new mongoose.Types.ObjectId(),
      restaurantId: new mongoose.Types.ObjectId(),
      type: 'restaurant',
      addedAt: new Date()
    });

    const savedFavorite = await favorite.save();

    expect(savedFavorite._id).toBeDefined();
    expect(savedFavorite.type).toBe('restaurant');
  });
});