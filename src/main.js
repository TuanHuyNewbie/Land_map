require('dotenv').config();
const bodyParser = require('body-parser')
const express = require("express");
const morgan = require("morgan");
const app = express();
const db = require("./config/db");
const route = require("./routes/route");

db.connectDB();

app
  .use(bodyParser.json())
  .use(morgan("combined"))

route(app);

app.listen(process.env.port || 5000, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});
