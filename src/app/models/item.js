require('dotenv').config();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const item = new Schema({
  owner: {required: true, type: String},
  name: {require: true, type: String},
  description: {require: true, type: String},
  tokenid: {required: true, type: String},
  image: {required: true, type: String},
});

module.exports = mongoose.model('item', item); 