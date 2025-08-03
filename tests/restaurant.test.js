const mongoose = require('mongoose');
const Restaurant = require('../src/models/Restaurant');

describe('Restaurant Model', () => {
  it('creates and saves a restaurant successfully', async () => {
    const restaurant = new Restaurant({
      name: 'Testaurant',
      description: 'A test restaurant',
      cuisine: ['Test'],
      address: {
        street: '123 Test St',
        city: 'Testville',
        state: 'TS',
        postalCode: '12345',
        country: 'Testland'
      },
      phone: '123-456-7890',
      email: 'test@example.com',
      priceRange: '$',
      isActive: true
    });

    const savedRestaurant = await restaurant.save();

    expect(savedRestaurant._id).toBeDefined();
    expect(savedRestaurant.name).toBe('Testaurant');
  });
});