const mongoose = require('mongoose');
const User = require('../src/models/User');

describe('User Model', () => {
  it('creates and saves a user successfully', async () => {
    const user = new User({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'Password123',
      roles: ['customer']
    });

    const savedUser = await user.save();

    expect(savedUser._id).toBeDefined();
    expect(savedUser.email).toBe('john.doe@example.com');
  });
});