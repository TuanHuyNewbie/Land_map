
require('dotenv').config();
const newsRouter = require('./hash');


function route(app){
    app.use('/hash', newsRouter);
}

module.exports = route;