require('dotenv').config();
const express = require('express');
const HashController = require('../app/controllers/HashController');
const router = express.Router();



router
    .post('/', HashController.index)
    .get('/', HashController.get)
    .get('/address', HashController.getItemUA)
    .get('/test', HashController.test)



module.exports = router;