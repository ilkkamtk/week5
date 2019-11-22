'use strict';
const catModel = require('../models/catModel');

// const cats = catModel.cats;

const cat_list_get = async (req, res) => {
  const cats = await catModel.getAllCats();
  await res.json(cats);
};

const cat_create_post = (req, res) => {
  const params = [
      name....
      .....
      req.file.filename
  ]
};

const cat_get = async (req, res) => {
  const params = [req.params.id];
  const cat = await catModel.getCat(params);
  await res.json(cat[0]);
};


module.exports = {
  cat_list_get,
  cat_create_post,
  cat_get,
};
