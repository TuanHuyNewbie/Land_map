require('dotenv').config();
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hash = new Schema({
  txhash: {required: true, type: String}
});

module.exports = mongoose.model('history', hash); 