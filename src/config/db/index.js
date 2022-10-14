const mongoose = require("mongoose");
require("dotenv").config();
URL = "mongodb+srv:tuanhuy:tuanhuy123@cluster0.s39zawz.mongodb.net/Test?retryWrites=true&w=majority"

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
