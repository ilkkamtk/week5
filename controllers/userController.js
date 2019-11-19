'use strict';
const userModel = require('../models/userModel');

const users = userModel.users;

const user_list_get = (req, res) => {
  res.json(users);
};

const user_get = (req, res) => {
  console.log(req.params.id);
  const user = {
    id: '1',
    name: 'John Doe',
    email: 'john@metropolia.fi',
    password: '1234',
  };
  console.log(user);
  res.json(user);
};

module.exports = {
  user_list_get,
  user_get,
};
