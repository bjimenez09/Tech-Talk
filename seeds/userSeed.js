const { User } = require('../models');

const userData =
[
  {
    username: 'user1',
    email: 'user1@test.com',
    password: 'password123'
  },
  {
    username: 'user2',
    email: 'user2@test.com',
    password: 'password1234'
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;