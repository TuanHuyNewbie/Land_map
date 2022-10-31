require('dotenv').config();
import app from "./appli";
const db = require("./config/db");
const cors = require('cors')
const route = require("./routes/route");
let port1 = process.env["PORT"]

db.connectDB();
//Done

app.use(cors())

//app
  //.use(bodyParser.json())
  //.use(morgan("combined"))



route(app);
app.listen(Number(port1), cors(), () => {
  console.log("Example app listening on port");
});
