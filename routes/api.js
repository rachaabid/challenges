const express = require('express');
const router = express.Router();
const api = require('../controlers/api.controlers');

router.get('/', api.welcome);


module.exports = router;
 
