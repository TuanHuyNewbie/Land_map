require('dotenv').config();
const cors = require('cors')
const express = require('express');
const HashController = require('../app/controllers/HashController');
const router = express.Router();



router
    .post('/',cors() , HashController.index)
    .get('/',cors(), HashController.get)
    .get('/address',cors(), HashController.getItemUA)
    .get('/test',cors(), HashController.test)



module.exports = router;