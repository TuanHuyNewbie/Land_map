URL = "mongodb+srv:tuanhuy:tuanhuy123@cluster0.s39zawz.mongodb.net/Test?retryWrites=true&w=majority"
require("dotenv").config();

const mongoose = require("mongoose");



const connectDB = async () => {
  try {
      mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
