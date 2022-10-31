const cors = require('cors')
require('dotenv').config();
const landRouter = require('./land');
const worldRouter = require('./world');
import app from "../appli";



function route(){
    app.use('/world', cors(), worldRouter);
    app.use('/land', cors(), landRouter);
}

module.exports = route;