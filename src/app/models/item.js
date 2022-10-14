require('dotenv').config();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const item = new Schema({
  owner: {type: String},
  name: {type: String},
  description: {type: String},
  tokenid: {type: String},
  image: {type: String},
});

module.exports = mongoose.model('item', item); 