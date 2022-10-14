const cors = require('cors')
require('dotenv').config();
const newsRouter = require('./hash');


function route(app){
    app.use('/hash', cors(), newsRouter);
}

module.exports = route;