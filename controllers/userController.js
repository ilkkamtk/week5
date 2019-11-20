'use strict';
const userModel = require('../models/userModel');

const user_list_get = async (req, res) => {
  const users = await userModel.getAllUsers();
  await res.json(users);
};

const user_get = async (req, res) => {
  const params = [req.params.id];
  const user = await userModel.getUser(params);
  await res.json(user[0]);
};


const user_create_post = (req, res) => {
  res.send('With this endpoint you can add cats.');
};

module.exports = {
  user_list_get,
  user_get,
  user_create_post,
};
