const { User } = require("../models");

const userData = [
  {
    username: "tester_user1",
    password: "0123456789",
  },
  {
    username: "tester_user2",
    password: "9876543210",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
