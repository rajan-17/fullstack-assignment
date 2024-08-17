const express = require('express');
const { add, search, getall } = require('../controller/help_controller');
 

const router = express.Router();


router.get('/getall',getall);
router.post('/add',add);
router.get('search',search);


module.exports= router