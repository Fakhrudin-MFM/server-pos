const express = require('express')
const router = express.Router()
const home = require('../controllers/home.ctrl')

router.get('/', home.index);

module.exports = router;