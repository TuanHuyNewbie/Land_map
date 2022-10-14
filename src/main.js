require('dotenv').config();
const bodyParser = require('body-parser')
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./config/db");
const cors = require('cors')
const route = require("./routes/route");

db.connectDB();


app.use(function(req, res, next){
  res.header('Access-Control-Allow-Origin','*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  req.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})

app
  .use(bodyParser.json())
  .use(morgan("combined"))



route(app);

app.listen(process.env.PORT || 5000, cors(), () => {
  console.log("Example app listening on port");
});
