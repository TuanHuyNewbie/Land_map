require('dotenv').config();
import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const world = new Schema({
  //id: {type: String},
  name: {type: String}
});

module.exports = mongoose.model('world', world); 